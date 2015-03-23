/*
 * translationset.js - a class to manage a translation set
 * 
 * Copyright © 2015, JEDLSoft
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

var fs = require('fs');
var util = require('util');
var path = require('path');
var ilib = require('ilib').ilib;

var common = require('../cldr/common.js');
var TranslationUnit = require("./translationunit.js");
var TreeLocale = require("./treelocale.js");

var rb = new ilib.ResBundle();

/**
 * Create a new translation set. This retrieves the current set from
 * the given path. If there is no current set, this okay. This instance
 * will create a new one.<p>
 * 
 * The params parameter may contain any of the following properties:
 * 
 * <ul>
 * <li><i>path</i>
 * <li><i>sourceLocale</i>
 * <li><i>xliff</i>
 * </ul>
 *
 * @class
 * @constructor
 * @param {String} path directory where the translation set should be
 * loaded from
 * @param {common.Locale} sourceLocale source locale of the translations 
 * in this set 
 */
var TranslationSet = function TranslationSet(params) {
	this.db = {};
	this.path = ".";
	this.sourceLocale = "en-US";
	if (params) {
		if (params.path) {
			this.path = params.path;
		}
		if (params.file) {
			/** @type {String} */
			this.file = params.file;
		}
		if (params.sourceLocale) {
			this.sourceLocale = params.sourceLocale;	
		}
		if (params.xliff) {
			var xml2js = require("xml2js");
						
			//util.print("Parsing xliff\n");
			xml2js.parseString(params.xliff, common.bind(this, function (err, result) {
			    //util.print("result is " + JSON.stringify(result, undefined,4) + "\n");
			    this.sourceLocale = result.xliff.file[0].$["source-language"];
			    var targetLocale = result.xliff.file[0].$["target-language"];
			    this.db = {};
			    var utlist = result.xliff.file[0].body[0]["trans-unit"];
			    //util.print("utlist is " + JSON.stringify(utlist, undefined,4) + "\n");
			    for (var i = 0; i < utlist.length; i++) {
			    	var transunit = utlist[i];
			    	//util.print("trans unit " + i + " is " + JSON.stringify(transunit, undefined,4) + "\n");
			    	var sourceElement = transunit.source[0];
			    	//til.print("trans unit source is " + JSON.stringify(sourceElement, undefined,4) + "\n");
			    	var key, source; 
			    	if (typeof(sourceElement) === "string") {
			    		key = source = sourceElement;
			    	} else {
			    		key = sourceElement.$.key;
			    		source = sourceElement._;
			    	}
			    	var comment = transunit.note && transunit.note[0];
			    	var status = (transunit.$ && transunit.$["x-status"]) || "approved";
			    	var tu = new TranslationUnit({
			    		source: source,
			    		key: key,
			    		translation: transunit.target && transunit.target[0],
			    		locale: targetLocale,
			    		comment: comment,
			    		status: status
			    	});
			    	
			    	this.addTranslationUnit(tu);
			    }
			}));
		}
		if (params.object) {
			this._fromObject(params.object);
		}
	}
	this.file = this.file || path.join(this.path, "stringsdb.json");
	this.file = path.normalize(this.file);
	this.sourceLocale = typeof(this.sourceLocale) === "string" ? new TreeLocale(this.sourceLocale) : (this.sourceLocale || new TreeLocale());
	if ((params && (params.file || params.path)) && fs.existsSync(this.file)) {
		try {
			//util.print("Attempting to load file " + this.file + "\n");
			var json = fs.readFileSync(this.file, "utf-8");
			if (json) {
				this._fromObject(JSON.parse(json));
			}
		} catch(e) {
			util.print(rb.getString("Warning: no translation set at {filename} yet. Creating a new one...\n").format({filename: this.file}));
		} // no db yet... that's ok
	}
};

/**
 * Load in a database from a javascript object
 * @protected
 * @param {Object} obj object containing the translation set db
 */
TranslationSet.prototype._fromObject = function(obj) {
	for (var loc in obj.db) {
		if (loc && obj.db[loc]) {
			var tulist = obj.db[loc];
			for (var key in tulist) {
				var tuinfo = tulist[key];
				var tu = new TranslationUnit({
					key: key,
					source: tuinfo.source || key,
					translation: tuinfo.translation,
					locale: loc,
					comment: tuinfo.comment,
					status: tuinfo.status || "approved"
				});
				this.addTranslationUnit(tu);
			}
		}
	}
	this.sourceLocale = typeof(obj.sourceLocale) === "string" ? new TreeLocale(obj.sourceLocale) : obj.sourceLocale;
};

/**
 * Return the path that the translation set uses to
 * load and save its info.
 * @return {String} the path where this set is saved
 */
TranslationSet.prototype.getPath = function() {
	return this.file;
};

/**
 * Save the set to disk. 
 * @throws exception if the file could not be written
 */
TranslationSet.prototype.save = function() {
	var ondisk = {
		sourceLocale: this.sourceLocale.getSpec(),
		db: {}
	};
	
	for (var loc in this.db) {
		if (loc && this.db[loc]) {
			if (!ondisk.db[loc]) {
				ondisk.db[loc] = {};
			}
			var tulist = this.db[loc];
			for (var key in tulist) {
				if (key && tulist[key]) {
					var tu = tulist[key];
					ondisk.db[loc][key] = {
						source: tu.source
					};
					if (tu.translation) {
						ondisk.db[loc][key].translation = tu.translation;
					}
					if (tu.comment) {
						ondisk.db[loc][key].comment = tu.comment;
					}
					if (tu.status) {
						ondisk.db[loc][key].status = tu.status;
					}
					if (tu.occurances && tu.occurances.length > 0) {
						ondisk.db[loc][key].occurances = tu.occurances;
					}
				}
			}
		}
	}

	var json = JSON.stringify(ondisk, undefined, 4);
	// util.print("save: saving contents: " + json + "\n");
	fs.writeFileSync(this.file, json, "utf-8");
};

/**
 * Add a new translation unit to the translation set. If the
 * translation unit already exists in this set with the given key
 * and target locale, it will be replaced by this new translation
 * unit.
 * 
 * @param {TranslationUnit} tu translation unit to add
 */
TranslationSet.prototype.addTranslationUnit = function(tu) {
	if (tu) {
		var locale = tu.locale || "-";
		if (!this.db[locale]) {
			this.db[locale] = {};
		}
		// overwrite if necessary
		this.db[locale][tu.key] = this.db[locale][tu.key] ? common.merge(this.db[locale][tu.key], tu) : tu;
	}
};

/**
 * Return the translation unit with the given key in the given
 * target locale.
 * 
 * @return {TranslationUnit|undefined} the translation unit corresponding
 * to the given key and locale, or undefined if no such unit exists
 */
TranslationSet.prototype.getTranslationUnit = function(key, locale) {
	if (!key || !locale) {
		return undefined;
	}
	
	locale = typeof(locale) === "object" ? locale.getSpec() : locale;
	
	if (this.sourceLocale.isCompatible(new TreeLocale(locale))) {
		locale = '-';
	}
	/** @type {TranslationUnit} */
	var tu = this.db[locale] && this.db[locale][key];
	
	if (!tu) {
		var thisloc = new TreeLocale(locale);
		for (var loc in this.db) {
			if (loc !== '-') {
				var dbloc = new TreeLocale(loc);
				if (dbloc.isCompatible(thisloc)) {
					tu = this.db[loc][key];
					if (tu) break;
				}
			}
		}
	}
	
	return tu;
};

/**
 * Return the a translation unit containing the ancestor translation of the
 * unit with the given key in the given target locale. The ancestor is the 
 * translation unit that is the next one up the hierarchy of the locales.
 * That is, the parent of the given locale is taken, and if the translation
 * unit is found, return that. Otherwise, go up another level to the next
 * parent iteratively until the root level is reached. If there is no 
 * translation unit at the root level, then return undefined, as there is
 * no translation at all for this key and locale.
 * 
 * @param {TreeLocale|String} key key of the translation unit being sought
 * @param {String} locale of the translation unit whose ancestors are being sought
 * @return {TranslationUnit|undefined} the ancestor of the translation unit 
 * corresponding to the given key and locale, or undefined if no such unit exists
 */
TranslationSet.prototype.getAncestorTranslationUnit = function(key, locale) {
	if (!key || !locale) {
		return undefined;
	}
	// util.print("Investigating ancestor of " + key + " in " + locale + "\n");
	var loc = typeof(locale) === "string" ? new TreeLocale(locale) : locale;
	if (loc.isRoot()) {
		// util.print("  .. it is the root\n");
		return undefined;
	}
	loc = loc.getParent();
	return this.getTranslationUnit(key, loc) || this.getAncestorTranslationUnit(key, loc);
};

/**
 * Remove the translation unit with the given key and target locale.
 * 
 * @return {TranslationUnit|undefined} the translation unit corresponding
 * to the given key and locale that has been removed from this set, or 
 * undefined if no such unit exists in the set already
 */
TranslationSet.prototype.removeTranslationUnit = function(key, locale) {
	if (!key || !locale) {
		return undefined;
	}
	
	if (this.db[locale] && this.db[locale][key]) {
		var tu = this.db[locale][key];
		this.db[locale][key] = undefined;
		return tu;
	}
	
	return undefined;
};

/**
 * Return all translation units for the given locale.
 * 
 * @param {String|undefined} locale the target locale for which all translations 
 * units are being sought, or undefined to retrieve all translation units
 * @return {Array.<TranslationUnit>} an array of translation units for the
 * given target locale
 */
TranslationSet.prototype.getAllTranslationUnits = function(locale) {
	var all = [];
	for (var loc in this.db) {
		if (!locale || loc === locale) {
			if (loc && this.db[loc]) {
				var tulist = this.db[loc];
				for (var key in tulist) {
					if (key && tulist[key]) {
						all.push(tulist[key]);
					}
				}
			}
		}
	}
	return all;
};

/**
 * Return the set of all target locales in the current translation set.
 * 
 * @return {Array.<String>|undefined} the union of all locale specs across all 
 * translation units in the current translation set, or undefined if no
 * trans-units with target locales have been added yet
 */
TranslationSet.prototype.getAllLocales = function() {
	var locales = [];
	for (var loc in this.db) {
		if (loc && loc !== '-' && this.db[loc]) {
			if (locales.indexOf(loc) === -1) {
				locales.push(loc);
			}
		}
	}
	return locales;
};

/**
 * Return a representation of the current translation set as an XML document
 * that conforms to the XLIFF DTD. In order to use this, you have to install
 * the "xml2js" locally first: "npm install xml2js"
 * 
 * @param {Function(TranslationUnit):boolean|undefined} filter a function to 
 * filter Translation units for output to the xliff file. Return true to keep
 * the translation unit, and false to skip it.
 * @return {String} the XLIFF representation of the current set
 */
TranslationSet.prototype.toXliff = function(filter) {
	if (filter && typeof(filter) !== "function") {
		return undefined;
	}
	
	var xml2js = require("xml2js");

	var builder = new xml2js.Builder({
		rootName: "xliff",
		doctype: {
			pubID: "-//XLIFF//DTD XLIFF//EN",
			sysID: "http://www.oasis-open.org/committees/xliff/documents/xliff.dtd"
		},
		headless: false
	});
	var xliff = {
		"$": {
			"version": "1.2"
		},
		file: []
	};

	for (var loc in this.db) {
		if (loc && this.db[loc]) {
			var tulist = this.db[loc];
			var file = {
				"$": {
					"datatype": "javascript",
					"source-language": this.sourceLocale.getSpec()
				},
				"body": {
					"trans-unit": []
				}
			};
			if (loc !== '-') {
				file.$["target-language"] = loc;
			}
			
			for (var key in tulist) {
				if (key && tulist[key]) {
					var tu = tulist[key];
					if (!filter || filter(tu)) {
						var element = {
							"source": {
								"_": tu.source
							}
						};
						if (key !== tu.source) {
							element.source["$"] = {
								"key": key
							};
						}
						if (tu.translation) {
							element.target = tu.translation;
						}
						if (tu.comment) {
							element.note = tu.comment;
						}
						if (tu.status) {
							element["$"] = {
								"x-status": tu.status
							};
						}
	
						file.body["trans-unit"].push(element);
					}
				}
			}
			
			xliff.file.push(file);
		}
	}

	return builder.buildObject(xliff) + "\n";
};

/**
 * Merge the other translation set into the current one. If any of the 
 * translation units in the other set have the same key and locale as units
 * in the current set, the information in the other translation unit will 
 * overwrite the info in the current set's translation unit. If there is
 * no such conflict, the units from the other set will be added to the
 * current set.
 * 
 * @param {TranslationSet} other the other set to merge into the current one
 * @return {TranslationSet} returns this instance for chaining
 */
TranslationSet.prototype.merge = function(other) {
	if (other) {
		for (var loc in other.db) {
			if (loc && other.db[loc]) {
				var tulist = other.db[loc];
				for (var key in tulist) {
					if (key && tulist[key]) {
						this.addTranslationUnit(tulist[key]);
					}
				}
			}
		}
	}
	return this;
};

/**
 * Split the current translation set into multiple translation sets
 * per locale.
 * @return {{string, TranslationSet}} the current set split into new 
 * sets, with each locale mapping to a set containing strings for
 * that locale
 */
TranslationSet.prototype.split = function() {
	var ts, sets = {};
	
	for (var loc in this.db) {
		if (loc && this.db[loc]) {
			ts = new TranslationSet();
			var tulist = this.db[loc];
			for (var key in tulist) {
				if (key && tulist[key]) {
					ts.addTranslationUnit(tulist[key]);
				}
			}
			sets[loc] = ts;
		}
	}
	
	return sets;
};

module.exports = TranslationSet;