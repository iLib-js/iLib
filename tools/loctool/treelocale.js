/*
 * treelocale.js - a subclass of locale that inherits from other locales
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

var common = require("../cldr/common.js");
var fs = require("fs");
var path = require("path");
var util = require("util");

var TreeLocale = function (spec) {
	common.Locale.call(this, spec);

	TreeLocale._init();
};

TreeLocale.prototype = new common.Locale('-');
TreeLocale.prototype.parent = common.Locale;
TreeLocale.prototype.constructor = TreeLocale;

TreeLocale._init = function() {
	if (!TreeLocale.hierarchy) {
		var base = path.dirname(module.filename);
		var jsonFile = path.normalize(path.join(base, "treelocale.json"));
		if (fs.existsSync(jsonFile)) {
			var text = fs.readFileSync(jsonFile, "utf-8");
			if (text) {
				TreeLocale.hierarchy = JSON.parse(text);
			}
		}
	}
};

TreeLocale.prototype.getParent = function() {
	var spec, parts = [];
	
	// util.print("getParent: checking " + this.getSpec() + "\n");
	
	if (this.isRoot()) {
		return undefined;
	}
	
	if (this.language) {
		parts.push(this.language);
	}
	if (this.script) {
		parts.push(this.script);
	}
	if (this.region) {
		parts.push(this.region);
	}
	if (this.variant) {
		parts.push(this.variant);
	}
	
	while (parts.length > 0) {
		spec = parts.join("-");
		// util.print("  getParent: checking " + spec + "\n");
		if (TreeLocale.hierarchy[spec]) {
			// util.print("  getParent: found potential parent " + TreeLocale.hierarchy[spec] + "\n");
			loc = new TreeLocale(TreeLocale.hierarchy[spec]);
			if (!loc.isCompatible(this)) {
				return loc;
			}
			// util.print("  getParent: compatible. Resuming search...\n");
		}
		parts = parts.slice(0, -1);
	}
	
	if (!TreeLocale.root) {
		TreeLocale.root = new TreeLocale(TreeLocale.hierarchy["*"] || "en-Latn-US");
	}
	
	// util.print("  getParent: returning root " + TreeLocale.root.getSpec() + "\n");
	
	return TreeLocale.root;
};

TreeLocale.prototype.isRoot = function() {
	if (!TreeLocale.root) {
		TreeLocale.root = new TreeLocale(TreeLocale.hierarchy["*"] || "en-Latn-US");
	}
	return TreeLocale.root.isCompatible(this);
};

module.exports = TreeLocale;