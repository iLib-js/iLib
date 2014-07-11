/*
 * iterator.js - Interface for an iterator class
 * 
 * Copyright © 2014, JEDLSoft
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

//!depends ilibglobal.js

/**
 * An iterator class that iterates through a list or array of items one
 * at a time.
 * 
 * Depends directive: !depends iterator.js
 * 
 * @interface
 */
ilib.Iterator = function() {};

ilib.Iterator.prototype = {
	/**
	 * Return true if there are more items to iterate through.
	 * 
	 * @return {boolean} true if there are more items to iterate through,
	 * or false otherwise
	 */
	hasNext: function() {},
	
	/**
	 * Return the next item in the iteration and advance the pointer
	 * to the next item. 
	 * 
	 * @return {*} the next item in the iteration, or undefined if there
	 * are no more items left to iterate through
	 */
	next: function () {}
};