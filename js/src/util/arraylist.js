/*
 * util/arraylist.js - implementations of a list using an array
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

// !depends util/list.js

/**
 * Create a new instance of an array-backed list. These lists
 * are faster than regular linked lists, but can become very
 * slow when there are a large number of elements. The reason is
 * that the array may have to be reallocated in order to 
 * accomodate new elements, which can be slow when the array is
 * very large.
 * 
 * @extends ilib.List
 * @class
 * @constructor
 * @param {{comparator:function(*,*),init:(Array.<*>|ilib.List)}=} options options 
 * controlling the operation of this list 
 */
ilib.ArrayList = function(options) {
	this.elements = [];
	this.compare = this._compare;
	if (options) {
		if (options.init) {
			if (typeof(options.init) === "object") {
				if (options.init instanceof Array) {
					this.elements = options.init;
				} else if (options.init instanceof ilib.List) {
					var it = options.init.iterator();
					while (it.hasNext()) {
						this.addLast(it.next());
					}
				} else {
					this.addFirst(options.init);
				}
			} else {
				this.addFirst(options.init);
			}
		}

		if (options.comparator) {
			this.compare = options.comparator;
		}
	}
};

ilib.ArrayList.prototype = new ilib.List();
ilib.ArrayList.prototype.parent = ilib.List;
ilib.ArrayList.prototype.constructor = ilib.ArrayList;

/**
 * @inheritDoc
 */
ilib.ArrayList.prototype.length = function() {
	return this.elements.length;
};

/**
 * @inheritDoc
 */
ilib.ArrayList.prototype.addFirst = function(obj) {
	this.elements = [obj].concat(this.elements);
};

/**
 * @inheritDoc
 */
ilib.ArrayList.prototype.addLast = function(obj) {
	this.elements.push(obj);
};

/**
 * @protected
 */
ilib.ArrayList.prototype._find = function(obj) {
	var i = 0;
	while (i < this.elements.length) {
		if (this.compare(this.elements[i], obj)) {
			return i;
		}
		i++;
	}
	return -1;
};

/**
 * @inheritDoc
 */
ilib.ArrayList.prototype.contains = function(obj) {
	return this._find(obj) >= 0;
};

/**
 * @inheritDoc
 */
ilib.ArrayList.prototype.insertBefore = function(reference, obj) {
	if (this.elements.length === 0 || typeof(reference) === 'undefined' || typeof(obj) === 'undefined') {
		return false;
	}
	var i = this._find(reference);
	if (i < 0) {
		return false;
	}
	this.elements = this.elements.slice(0,i).concat(obj, this.elements.slice(i))
	return true;
};

/**
 * @inheritDoc
 */
ilib.ArrayList.prototype.insertAfter = function(reference, obj) {
	if (this.elements.length === 0 || typeof(reference) === 'undefined' || typeof(obj) === 'undefined') {
		return false;
	}
	var i = this._find(reference);
	if (i < 0) {
		return false;
	}
	this.elements = this.elements.slice(0,i+1).concat(obj, this.elements.slice(i+1))
	return true;
};

/**
 * @inheritDoc
 */
ilib.ArrayList.prototype.removeFirst = function() {
	var element = this.first();
	this.elements = this.elements.slice(1);
	return element;
};

/**
 * @inheritDoc
 */
ilib.ArrayList.prototype.removeLast = function() {
	var element = this.last();
	this.elements = this.elements.slice(0,-1);
	return element;
};

/**
 * Return the element at the given index. If the index is a
 * negative number, then it indicates the number of positions 
 * from the end of the list rather than the index from the
 * beginning of the list.
 * 
 * @param {number} index the index of the element being sought
 * @return {*} the object at the given index, or undefined if
 * the index is invalid
 */
ilib.ArrayList.prototype.get = function(index) {
	if (index < 0) {
		index = this.elements.length + index;
	}
	return this.elements[index];
};

/**
 * @inheritDoc
 */
ilib.ArrayList.prototype.first = function() {
	return this.elements[0];
};

/**
 * @inheritDoc
 */
ilib.ArrayList.prototype.last = function() {
	return this.elements[this.elements.length-1];
};

/**
 * @inheritDoc
 */
ilib.ArrayList.prototype.clear = function() {
	this.elements = [];
};

/**
 * @inheritDoc
 */
ilib.ArrayList.prototype.iterator = function() {
	/**
	 * @constructor
	 * @implements ilib.Iterator
	 */
	function _iterator(list) {
		this.index = 0;
		
		this.hasNext = function() {
			return this.index < list.elements.length;
		};
		
		this.next = function() {
			return list.elements[this.index++];
		};
	};
	
	return new _iterator(this);
};
