/*
 * util/list.js - implementations of a linked list, queue, and stack
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

// !depends ilibglobal.js

/**
 * Create a new linked list, optionally initialized with the items in
 * the given array.
 * 
 * @class
 * @constructor
 * @param {Array.<*>|ilib.List=} arr an optional array 
 * or list to initialize this list with
 */
ilib.List = function(arr) {
	this.count = 0;
	
	if (arr) {
		if (typeof(arr) === "object") {
			if (arr instanceof Array) {
				for (var i = 0; i < arr.length; i++) {
					this.addLast(arr[i]);
				}
			} else if (arr instanceof ilib.List) {
				var it = arr.iterator();
				while (it.hasNext()) {
					this.addLast(it.next());
				}
			} else {
				this.addFirst(arr);
			}
		} else {
			this.addFirst(arr);
		}
	}
};

ilib.List.prototype = {
	/**
	 * Add a new element to the beginning of the list.
	 * @param {*} obj Object to add
	 */
	addFirst: function (obj) {
		if (this.firstElement) {
			this.firstElement = {
				value: obj,
				next: this.firstElement,
				prev: null
			};
		} else {
			this.firstElement = {
				value: obj,
				next: null,
				prev: null
			};
			this.lastElement = this.firstElement;
		}
		
		this.count++;
	},

	/**
	 * Add a new element to the end of the list.
	 * @param {*} obj Object to add
	 */
	addLast: function (obj) {
		if (this.lastElement) {
			this.lastElement.next = {
				value: obj,
				next: undefined,
				prev: this.lastElement
			};
			this.lastElement = this.lastElement.next;
			this.count++;
		} else {
			this.addFirst(obj);
		}
	},

	/**
	 * Remove the first element of the list and return it.
	 * @returns {*} Object at the beginning of the list
	 */
	removeFirst: function () {
		if (!this.firstElement) {
			return undefined;
		}
		
		var first = this.firstElement;
		
		if (this.firstElement === this.lastElement) {
			this.firstElement = undefined;
			this.lastElement = undefined;
		} else {
			this.firstElement = this.firstElement.next;
			this.firstElement.prev = undefined;
		}
		
		this.count--;
		return first && first.value;
	},

	/**
	 * Remove the last element of the list and return it.
	 * @returns {*} Object at the end of the list
	 */
	removeLast: function () {
		if (!this.lastElement) {
			return undefined;
		}
		
		var last = this.lastElement;
		
		if (this.firstElement === this.lastElement) {
			this.firstElement = undefined;
			this.lastElement = undefined;
		} else {
			this.lastElement = this.lastElement.prev;
			this.lastElement.next = undefined;
		}
		
		this.count--;
		return last && last.value;
	},
	
	/**
	 * Return the first item in the list without changing the list.
	 * 
	 * @return {*} the first item in the list
	 */
	first: function () {
		return this.firstElement && this.firstElement.value;
	},

	/**
	 * Return the last item in the list without changing the list.
	 * 
	 * @return {*} the last item in the list
	 */
	last: function () {
		return this.lastElement && this.lastElement.value;
	},

	/**
	 * Return the number of items in this list.
	 * @returns {number} the number of items in the list
	 */
	length: function () {
		return this.count;
	},
	
	/**
	 * Clear all items in this list.
	 */
	clear: function () {
		this.firstElement = undefined;
		this.lastElement = undefined;
		this.count = 0;
	},
	
	/**
	 * Return an iterator that iterates through all elements of
	 * this list in sequence from first to last.
	 * @return {ilib.Iterator} an iterator that iterates through 
	 * all elements in this list
	 */
	iterator: function () {
		/**
		 * @constructor
		 * @implements ilib.Iterator
		 */
		function _iterator(list) {
			this.pointer = list.firstElement;
			
			this.hasNext = function() {
				return !!this.pointer;
			};
			
			this.next = function() {
				var ret = this.pointer;
				if (ret) {
					this.pointer = ret.next;
				}
				return ret && ret.value;
			};
		};
		
		return new _iterator(this);
	}
};

/*
ilib.Queue = function (arr) {
	
};

ilib.Queue.prototype = new ilib.List();
ilib.Queue.prototype.parent = ilib.List;
ilib.Queue.prototype.constructor = ilib.Queue;

ilib.Queue.prototype.push = function () {
	
};

ilib.Queue.prototype.pop = function () {
	
};


ilib.Stack = function (arr) {
	
};

ilib.Stack.prototype = new ilib.List();
ilib.Stack.prototype.parent = ilib.List;
ilib.Stack.prototype.constructor = ilib.Stack;

ilib.Stack.prototype.push = function () {
	
};

ilib.Stack.prototype.pop = function () {
	
};
*/