/* 
 * genplurals.js - ilib tool to generate plurals json fragments from  
 * the CLDR data files 
 *  
 * Copyright © 2015-2017, 2020 JEDLSoft
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at 
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0 
 * 
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 * 
 * See the License for the specific language governing permissions and 
 * limitations under the License. 
 */
/* 
 * This code is intended to be run under node.js  
 */
var fs = require('fs');
var path = require('path');
var common = require('./common');
var merge = common.merge;
var Locale = common.Locale;
var mergeAndPrune = common.mergeAndPrune;
var makeDirs = common.makeDirs;

var pluralData = require("cldr-data/supplemental/plurals.json");

function usage() {
    console.log("Usage: genplurals [-h] [toDir]" +
        "Generate genplurals information files.\n" +
        "-h or --help\n" +
        "  this help\n" +
        "toDir\n" +
        "  directory to output the plurals.json files");
    process.exit(1);
}

process.argv.forEach(function (val, index, array) {
        if (val === "-h" || val === "--help") {
            usage();
        }
    });


toDir = process.argv[2];

console.log("genplurals - generate plurals information files.\n" +
    "Copyright (c) 2015-2017, 2020  JEDLSoft");
console.log("toDir: " + toDir);

if (!fs.existsSync(toDir)) {
    makeDirs(toDir);

    if (!fs.existsSync(toDir)) {
        console.error("Could not access locale data directory " + toDir);
        usage();
    }
}

var pluralsObject = pluralData.supplemental["plurals-type-cardinal"];

var OPERATORS = ['!=', '=', 'is not', 'is', 'not in', 'in', 'not within', 'within'];
var OPERATOR_MAP = {
    '!=': 'neq',
    '=': 'eq',
    '%': 'mod'
};
var MODS = ['mod', '%'];
var VALUES = 'niftvw';

function operator_keyword(operator) {
    var keyword = OPERATOR_MAP[operator];
    if (undefined === keyword) {
        return operator;
    } else {
        return keyword;
    }
}

function extract_count (keyword) {
    return keyword.slice(keyword.lastIndexOf('-')+1);
}

function extract_condition (rule) {
    var at_position = rule.indexOf('@');

    return rule.slice(0, at_position).trim();
}

function extract_and_conditions (condition) {
    var and_conditions = condition.split('or');

    return and_conditions.map(function(ac) {
        return ac.trim();
    });
}

function extract_relations (and_conditions) {
    var relations = and_conditions.split('and');

    return relations.map(function(r) {
        return r.trim();
    });
}

function create_relation(relation_string) {
    var idx;
    var temp;
    var operator, operand, ranges;
    var relation = {};

    for(idx in OPERATORS) {
        if (relation_string.indexOf(OPERATORS[idx]) !== -1) {
            operator = OPERATORS[idx];
            break;
        }
    }

    if (undefined === operator)
        return undefined;

    temp = relation_string.split(operator);
    operand = create_expr(temp[0]);
    ranges= create_range_list(temp[1]);
    relation[operator_keyword(operator)] = [operand, ranges];

    return relation;
}

function create_expr(operand_string) {
    var idx;
    var mod;
    var temp;
    var operand;
    var module_value;
    var expr = {};

    for (idx in MODS) {
        if (operand_string.indexOf(MODS[idx]) !== -1) {
            mod = MODS[idx];
            break;
        }
    }
    if (undefined === mod) {
        return operand_string.trim();
    }

    temp = operand_string.split(mod);
    operand = temp[0].trim();
    module_value = parseInt(temp[1].trim());
    expr[operator_keyword(mod)] = [operand.trim(), module_value];

    return expr;
}

function create_range_list(ranges_string) {
    var range_string_list;
    var range_list;

    range_string_list = ranges_string.split(',');
    range_list = range_string_list.map(function(range_string) {
        return create_range(range_string.trim());
    });
    if (1 === range_list.length)
        return range_list[0];
    else
        return range_list;
}

function create_range(range_string) {
    var range_item_list;

    range_item_list = range_string.split('..');

    if (1 === range_item_list.length) {
        return parseInt(range_item_list[0].trim());
    } else {
        return [parseInt(range_item_list[0].trim()),
                parseInt(range_item_list[1].trim())];
    }
}

function is_valid_condition(condition) {
    return (condition === undefined ? false : true);
}

function create_and_condition(and_condition_string) {
    var relations;
    var and_condition;

    relations = extract_relations(and_condition_string)
                    .map(function(relation_string) {
                            return create_relation(relation_string);
                    })
                    .filter(is_valid_condition);

    if (0 === relations.length) {
        return undefined;
    } else if (1 === relations.length) {
        return relations[0];
    } else {
        return {'and': relations};
    }
}

function create_condition(condition_string) {
    var and_conditions;

    and_conditions = extract_and_conditions(condition_string)
                        .map(function(and_condition_string) {
                            return create_and_condition(and_condition_string);
                        })
                        .filter(is_valid_condition);
    if (0 === and_conditions.length) {
        return undefined;
    } else if (1 === and_conditions.length) {
        return and_conditions[0];
    } else {
        return {'or': and_conditions};
    }
}

function create_rule(cldr_rule_object) {
    var keyword;
    var count;
    var condition;
    var condition_string;
    var rule = {};

    for (keyword in cldr_rule_object) {
        if (cldr_rule_object.hasOwnProperty(keyword)) {
            condition_string = extract_condition(cldr_rule_object[keyword]);
            condition = create_condition(condition_string);
            if (undefined !== condition) {
                count = extract_count(keyword);
                rule[count] = condition;
            }
        }
    }
    return rule;
}

function calcLocalePath(language, script, region) {
    var fullpath = toDir;
    if (language) {
        fullpath = path.join(fullpath, language);
    }
    if (script) {
        fullpath = path.join(fullpath, script);
    }
    if (region) {
        fullpath = path.join(fullpath, region);
    }
    return fullpath;
}

function anyProperties(data) {
    var count = 0;
    for (var prop in data) {
        if (prop && data[prop]) {
            count++;
        }
        if (count >= 1) {
            return true;
        }
    }
    return false;
}

function writePluralsData(locale, data) {
    var language = locale.getLanguage(),
        script = locale.getScript(),
        region = locale.getRegion();

    var fullpath = calcLocalePath(language, script, region);

    if (data) {
        console.log("Writing " + fullpath);
        makeDirs(fullpath);
        fs.writeFileSync(path.join(fullpath, "plurals.json"), JSON.stringify(data, true, 4), "utf-8");
    } else {
        console.log("Skipping empty  " + fullpath);
    }
}

for (var language in pluralsObject) {
    var pluralsData;

    if (language && pluralsObject[language]) {
        pluralsData = create_rule(pluralsObject[language]);

        if (anyProperties(pluralsData)) {
            var locale = new Locale(language);
            writePluralsData(locale, pluralsData);
        }
    }
}