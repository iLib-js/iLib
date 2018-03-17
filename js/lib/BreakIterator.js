/*
 * BreakIterator.js - A class that locates boundaries in text, and acts as an iterator 
 * over those boundaries.
 * 
 * Copyright © 2018, JEDLSoft
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

/* !depends
ilib.js
Locale.js
LocaleInfo.js
*/

var ilib = require("./ilib.js");
var Locale = require("./Locale.js");
var LocaleInfo = require("./LocaleInfo.js");

/**
 * @class A class that locates boundaries in text, and acts as an iterator 
 * over those boundaries.
 * 
 * The options parameter can be an object that contains the following
 * properties:
 * 
 * <ul>
 * <li><i>type</i> - specify the type of the iterator desired. The
 * list of valid values is "character", "glyph", "word", and 
 * "sentence". Default is "character".
 * 
 * <li><i>locale</i> - the locale of this iterator, which controls the
 * grammatical rules behind things like what is a word and what is
 * not, and which punctuation ends a sentence and what are the exceptions
 * to those rules. Default is the current locale.
 *  
 * <li><i>onLoad</i> - a callback function to call when the iterator is fully 
 * loaded. When the onLoad option is given, the break iterator will attempt to
 * load any missing locale data using the ilib loader callback.
 * When the constructor is done (even if the data is already preassembled), the 
 * onLoad function is called with the current instance as a parameter, so this
 * callback can be used with preassembled or dynamic loading or a mix of the two.
 * 
 * <li><i>sync</i> - tell whether to load any missing locale data synchronously or 
 * asynchronously. If this option is given as "false", then the "onLoad"
 * callback must be given, as the instance returned from this constructor will
 * not be usable for a while.
 *  
 * <li><i>loadParams</i> - an object containing parameters to pass to the 
 * loader callback function when locale data is missing. The parameters are not
 * interpretted or modified in any way. They are simply passed along. The object 
 * may contain any property/value pairs as long as the calling code is in
 * agreement with the loader callback function as to what those parameters mean.
 * </ul>    

 * 
 * The locale controls the grammatical rules behind things like what parts of 
 * a string form a word and which do not, and which punctuation characters 
 * end a sentence and what are the exceptions to those.
 * 
 * @static
 * @param {String} string the string to iterate over
 * @param {Object=} options options controlling the construction of this instance, or
 * undefined to use the default options
 * @return {Calendar} an instance of a calendar object of the appropriate type
 */
var BreakIterator = function (string, options) {
    var locale,
        type,
        sync = true,
        instance;

    if (options) {
        if (options.locale) {
            locale = (typeof(options.locale) === 'string') ? new Locale(options.locale) : options.locale;
        }
        
        type = options.type;
        
        if (typeof(options.sync) === 'boolean') {
            sync = options.sync;
        }
    }
    
    if (!locale) {
        locale = new Locale();  // default locale
    }
    
    if (!type) {
        new LocaleInfo(locale, {
            sync: sync,
            loadParams: options && options.loadParams,
            onLoad: function(info) {
            }
        });
    } else {
    }
};

BreakIterator.prototype.first = function() {
    
};

BreakIterator.prototype.last = function() {
    
};

BreakIterator.prototype.next = function(n) {
    
};

BreakIterator.prototype.previous = function() {
    
};

BreakIterator.prototype.isBoundary = function() {
    
};


module.exports = BreakIterator;
