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
var common = require('./common.js');
var TranslationUnit = require("./translationunit.js");

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
	if (params) {
		this.path = params.path;
		this.sourceLocale = params.sourceLocale;
		if (params.xliff) {
			
		}
	}
	this.sourceLocale = this.sourceLocale || new common.Locale();
	if (this.path) {
		var filepath = path.join(this.path, "stringsdb.json"); 
		try {
			var json = fs.readFileSync(filepath, "utf-8");
			if (json) {
				this.db = JSON.parse(json);
			}
		} catch(e) {
			util.print("Warning: no translation set at " + filepath + " yet. Creating a new one...\n");
		} // no db yet... that's ok
	}
};

/**
 * Return a new translation set that is initialized with the 
 * contents of the given xliff document.
 * 
 * @static
 * @param {String} xliff the contents of an xliff file to
 * initialize a new translation set with
 * @return {TranslationSet} the new translation set
 */
TranslationSet.fromXliff = function(xliff) {
	
};

/**
 * Return the path that the translation set uses to
 * load and save its info.
 * @return {String} the path where this set is saved
 */
TranslationSet.prototype.getPath = function() {
	return path;
};

/**
 * Save the set to disk. 
 * @throws exception if the file could not be written
 */
TranslationSet.prototype.save = function() {
	var json = JSON.stringify(this, undefined, 4);
	fs.writeFileSync(this.path, json, "utf-8");
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
	
};

/**
 * Return the translation unit with the given key in the given
 * target locale.
 * 
 * @return {TranslationUnit|undefined} the translation unit corresponding
 * to the given key and locale, or undefined if no such unit exists
 */
TranslationSet.prototype.getTranslationUnit = function(key, locale) {
	
};

/**
 * Remove the translation unit with the given key and target locale.
 * 
 * @return {TranslationUnit|undefined} the translation unit corresponding
 * to the given key and locale that has been removed from this set, or 
 * undefined if no such unit exists in the set already
 */
TranslationSet.prototype.removeTranslationUnit = function(key, locale) {
	
};

/**
 * Return all translation units for the given locale.
 * 
 * @param {String} locale the target locale for which all translations 
 * are being sought
 * @return {Array.<TranslationUnit>} an array of translation units for the
 * given target locale
 */
TranslationSet.prototype.getAllTranslationUnits = function(locale) {
	
};

/**
 * Return the set of all target locales in the current translation set.
 * 
 * @return {Array.<String>} the union of all locale specs across all 
 * translation units in the current translation set
 */
TranslationSet.prototype.getAllLocales = function() {
	
};

/**
 * Return a representation of the current translation set as an XML document
 * that conforms to the XLIFF DTD.
 * 
 * @return {String} the XLIFF representation of the current set
 */
TranslationSet.prototype.toXliff = function() {
	
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
 */
TranslationSet.prototype.merge = function(other) {
	
};

module.exports = TranslationSet;