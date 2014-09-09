/*
 * testarraylist.js - test the basic linked list utility class
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

function testArrayListConstructorEmpty() {
	var ll = new ilib.ArrayList();
	assertNotUndefined(ll);
	
	assertEquals(0, ll.length());
}

function testArrayListConstructorArray() {
    var arr = [0, 1, 2, 3];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
}

function testArrayListConstructorArrayRightElements() {
    var arr = [0, 1, 2, 3];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(0, ll.removeFirst());
	assertEquals(1, ll.removeFirst());
	assertEquals(2, ll.removeFirst());
	assertEquals(3, ll.removeFirst());
}

function testArrayListConstructorRemoveAllElements() {
    var arr = [0, 1, 2, 3];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(0, ll.removeFirst());
	assertEquals(1, ll.removeFirst());
	assertEquals(2, ll.removeFirst());
	assertEquals(3, ll.removeFirst());
	assertUndefined(ll.removeFirst());
}

function testArrayListConstructorOtherList() {
    var arr = [0, 1, 2, 3];
    
    var list1 = new ilib.ArrayList({init: arr});
	assertNotUndefined(list1);

	var list2 = new ilib.ArrayList({init: list1});
	assertNotUndefined(list2);
	
	assertEquals(4, list2.length());
}

function testArrayListConstructorOtherListRightElements() {
    var arr = [0, 1, 2, 3];
    
    var list1 = new ilib.ArrayList({init: arr});
	assertNotUndefined(list1);

	var list2 = new ilib.ArrayList({init: list1});
	assertNotUndefined(list2);
	
	assertEquals(0, list2.removeFirst());
	assertEquals(1, list2.removeFirst());
	assertEquals(2, list2.removeFirst());
	assertEquals(3, list2.removeFirst());
}

function testArrayListConstructorStringElements() {
    var arr = ["a", "b", "c", "d"];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals("a", ll.removeFirst());
	assertEquals("b", ll.removeFirst());
	assertEquals("c", ll.removeFirst());
	assertEquals("d", ll.removeFirst());
	assertUndefined(ll.removeFirst());
}

function testArrayListConstructorMixedElements() {
    var arr = ["a", 0, "b", 1, "c", 2, "d", 3, true, false, {a:1,b:2}, ["a", "b", "c"], function() {return 4;}];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(13, ll.length());
	assertEquals("a", ll.removeFirst());
	assertEquals(0, ll.removeFirst());
	assertEquals("b", ll.removeFirst());
	assertEquals(1, ll.removeFirst());
	assertEquals("c", ll.removeFirst());
	assertEquals(2, ll.removeFirst());
	assertEquals("d", ll.removeFirst());
	assertEquals(3, ll.removeFirst());
	assertEquals(true, ll.removeFirst());
	assertEquals(false, ll.removeFirst());
	assertObjectEquals({a:1,b:2}, ll.removeFirst());
	assertObjectEquals(["a", "b", "c"], ll.removeFirst());
	assertEquals("function", typeof(ll.removeFirst()));
	assertUndefined(ll.removeFirst());
}

function testArrayListFirst() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals("a", ll.first());
}

function testArrayListFirstNoRemove() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	assertEquals("a", ll.first());
	assertEquals(4, ll.length());
}

function testArrayListRemoveFirst() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	assertEquals("a", ll.removeFirst());
	assertEquals(3, ll.length());
}

function testArrayListRemoveFirstMultiple() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	assertEquals("a", ll.removeFirst());
	assertEquals(3, ll.length());
	assertEquals(0, ll.removeFirst());
	assertEquals(2, ll.length());
	assertEquals("b", ll.removeFirst());
	assertEquals(1, ll.length());
	assertEquals(1, ll.removeFirst());
	assertEquals(0, ll.length());
}

function testArrayListRemoveFirstEmpty() {
    var arr = ["a"];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(1, ll.length());
	assertEquals("a", ll.removeFirst());
	assertEquals(0, ll.length());
	assertUndefined(ll.removeFirst());
}

function testArrayListRemoveFirstEmptyLengthOkay() {
    var arr = ["a"];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals("a", ll.removeFirst());
	assertEquals(0, ll.length());
	assertUndefined(ll.removeFirst());
	assertEquals(0, ll.length());
}

function testArrayListLast() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(1, ll.last());
}

function testArrayListLastNoRemove() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	assertEquals(1, ll.last());
	assertEquals(4, ll.length());
}

function testArrayListRemoveLast() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	assertEquals(1, ll.removeLast());
	assertEquals(3, ll.length());
}

function testArrayListRemoveLastMultiple() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	assertEquals(1, ll.removeLast());
	assertEquals(3, ll.length());
	assertEquals("b", ll.removeLast());
	assertEquals(2, ll.length());
}

function testArrayListRemoveLastEmpty() {
    var arr = ["a"];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(1, ll.length());
	assertEquals("a", ll.removeLast());
	assertEquals(0, ll.length());
	assertUndefined(ll.removeLast());
}

function testArrayListRemoveLastEmptyLengthOkay() {
    var arr = ["a"];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals("a", ll.removeLast());
	assertEquals(0, ll.length());
	assertUndefined(ll.removeLast());
	assertEquals(0, ll.length());
}

function testArrayListAddLast() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	ll.addLast("c");
	assertEquals(5, ll.length());
}

function testArrayListAddLastRightElement() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	ll.addLast("c");
	assertEquals("c", ll.last());
}

function testArrayListAddLastRightEnd() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	assertEquals("a", ll.first());
	assertEquals(1, ll.last());
	ll.addLast("c");
	assertEquals("c", ll.last());
	assertEquals("a", ll.first());
}

function testArrayListAddLastEmpty() {
    var ll = new ilib.ArrayList();
	assertNotUndefined(ll);
	
	assertEquals(0, ll.length());
	ll.addLast("c");
	assertEquals(1, ll.length());
}

function testArrayListAddLastEmptyRightElement() {
    var ll = new ilib.ArrayList();
	assertNotUndefined(ll);
	
	assertEquals(0, ll.length());
	ll.addLast("c");
	assertEquals(1, ll.length());
	assertEquals("c", ll.first());
	assertEquals("c", ll.last());
}

function testArrayListAddFirst() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	ll.addFirst("c");
	assertEquals(5, ll.length());
}

function testArrayListAddFirstRightElement() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	ll.addFirst("c");
	assertEquals("c", ll.first());
}

function testArrayListAddFirstRightEnd() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	assertEquals("a", ll.first());
	assertEquals(1, ll.last());
	ll.addFirst("c");
	assertEquals(1, ll.last());
	assertEquals("c", ll.first());
}

function testArrayListAddFirstEmpty() {
    var ll = new ilib.ArrayList();
	assertNotUndefined(ll);
	
	assertEquals(0, ll.length());
	ll.addFirst("c");
	assertEquals(1, ll.length());
}

function testArrayListAddFirstEmptyRightElement() {
    var ll = new ilib.ArrayList();
	assertNotUndefined(ll);
	
	assertEquals(0, ll.length());
	ll.addFirst("c");
	assertEquals(1, ll.length());
	assertEquals("c", ll.first());
	assertEquals("c", ll.last());
}

function testArrayListClearLength() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	ll.clear();
	assertEquals(0, ll.length());
}

function testArrayListClearNoFirst() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals("a", ll.first());
	ll.clear();
	assertUndefined(ll.first());
}

function testArrayListClearNoLast() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(1, ll.last());
	ll.clear();
	assertUndefined(ll.last());
}

function testArrayListIterator() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	var it = ll.iterator();
	assertNotUndefined(it);
	assertTrue(it.hasNext());
	assertEquals("a", it.next());
	assertTrue(it.hasNext());
	assertEquals(0, it.next());
	assertTrue(it.hasNext());
	assertEquals("b", it.next());
	assertTrue(it.hasNext());
	assertEquals(1, it.next());
	assertFalse(it.hasNext());
	assertUndefined(it.next());
}

function testArrayListIteratorEmpty() {
    var ll = new ilib.ArrayList();
	assertNotUndefined(ll);
	
	var it = ll.iterator();
	assertNotUndefined(it);
	assertFalse(it.hasNext());
	assertUndefined(it.next());
}

function testArrayListInsertBefore() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	
	assertTrue(ll.insertBefore("b", "c"));
	
	var it = ll.iterator();

	assertNotUndefined(it);
	assertTrue(it.hasNext());
	assertEquals("a", it.next());
	assertTrue(it.hasNext());
	assertEquals(0, it.next());
	assertTrue(it.hasNext());
	assertEquals("c", it.next());
	assertTrue(it.hasNext());
	assertEquals("b", it.next());
	assertTrue(it.hasNext());
	assertEquals(1, it.next());
	assertFalse(it.hasNext());
	assertUndefined(it.next());
}

function testArrayListInsertBeforeRightCount() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	
	assertTrue(ll.insertBefore("b", "c"));
	
	assertEquals(5, ll.length());
}

function testArrayListInsertBeforeBeginning() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	
	assertTrue(ll.insertBefore("a", "c"));
	
	var it = ll.iterator();

	assertNotUndefined(it);
	assertTrue(it.hasNext());
	assertEquals("c", it.next());
	assertTrue(it.hasNext());
	assertEquals("a", it.next());
	assertTrue(it.hasNext());
	assertEquals(0, it.next());
	assertTrue(it.hasNext());
	assertEquals("b", it.next());
	assertTrue(it.hasNext());
	assertEquals(1, it.next());
	assertFalse(it.hasNext());
	assertUndefined(it.next());
}

function testArrayListInsertBeforeBeginningRightCount() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	
	assertTrue(ll.insertBefore("a", "c"));
	
	assertEquals(5, ll.length());
}

function testArrayListInsertBeforeFirstOne() {
    var arr = ["a", 1, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	
	assertTrue(ll.insertBefore(1, "c"));
	
	var it = ll.iterator();

	assertNotUndefined(it);
	assertTrue(it.hasNext());
	assertEquals("a", it.next());
	assertTrue(it.hasNext());
	assertEquals("c", it.next());
	assertTrue(it.hasNext());
	assertEquals(1, it.next());
	assertTrue(it.hasNext());
	assertEquals("b", it.next());
	assertTrue(it.hasNext());
	assertEquals(1, it.next());
	assertFalse(it.hasNext());
	assertUndefined(it.next());
}

function testArrayListInsertBeforeNoReferenceRightCount() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	
	assertFalse(ll.insertBefore("x", "c"));
	
	assertEquals(4, ll.length());
}

function testArrayListInsertBeforeNoReference() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	
	assertFalse(ll.insertBefore("x", "c"));
	
	var it = ll.iterator();

	assertNotUndefined(it);
	assertTrue(it.hasNext());
	assertEquals("a", it.next());
	assertTrue(it.hasNext());
	assertEquals(0, it.next());
	assertTrue(it.hasNext());
	assertEquals("b", it.next());
	assertTrue(it.hasNext());
	assertEquals(1, it.next());
	assertFalse(it.hasNext());
	assertUndefined(it.next());
}

function testArrayListInsertBeforeEmpty() {
    var ll = new ilib.ArrayList();
	assertNotUndefined(ll);
	
	assertEquals(0, ll.length());
	
	assertFalse(ll.insertBefore("a", "c"));

	// nowhere to insert
	assertEquals(0, ll.length());
}

function testArrayListInsertBeforeUndefinedReference() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	
	assertFalse(ll.insertBefore(undefined, "c"));
	
	assertEquals(4, ll.length());
}

function testArrayListInsertBeforeUndefinedObj() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	
	assertFalse(ll.insertBefore("a", undefined));
	
	assertEquals(4, ll.length());
}


function testArrayListInsertAfter() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	
	assertTrue(ll.insertAfter("b", "c"));
	
	var it = ll.iterator();

	assertNotUndefined(it);
	assertTrue(it.hasNext());
	assertEquals("a", it.next());
	assertTrue(it.hasNext());
	assertEquals(0, it.next());
	assertTrue(it.hasNext());
	assertEquals("b", it.next());
	assertTrue(it.hasNext());
	assertEquals("c", it.next());
	assertTrue(it.hasNext());
	assertEquals(1, it.next());
	assertFalse(it.hasNext());
	assertUndefined(it.next());
}

function testArrayListInsertAfterRightCount() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	
	assertTrue(ll.insertAfter("b", "c"));
	
	assertEquals(5, ll.length());
}

function testArrayListInsertAfterEnd() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	
	assertTrue(ll.insertAfter(1, "c"));
	
	var it = ll.iterator();

	assertNotUndefined(it);
	assertTrue(it.hasNext());
	assertEquals("a", it.next());
	assertTrue(it.hasNext());
	assertEquals(0, it.next());
	assertTrue(it.hasNext());
	assertEquals("b", it.next());
	assertTrue(it.hasNext());
	assertEquals(1, it.next());
	assertTrue(it.hasNext());
	assertEquals("c", it.next());
	assertUndefined(it.next());
	assertFalse(it.hasNext());
}

function testArrayListInsertAfterEndRightCount() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	
	assertTrue(ll.insertAfter(1, "c"));
	
	assertEquals(5, ll.length());
}

function testArrayListInsertAfterFirstOne() {
    var arr = ["a", 0, "a", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	
	assertTrue(ll.insertAfter("a", "c"));
	
	var it = ll.iterator();

	assertNotUndefined(it);
	assertTrue(it.hasNext());
	assertEquals("a", it.next());
	assertTrue(it.hasNext());
	assertEquals("c", it.next());
	assertTrue(it.hasNext());
	assertEquals(0, it.next());
	assertTrue(it.hasNext());
	assertEquals("a", it.next());
	assertTrue(it.hasNext());
	assertEquals(1, it.next());
	assertFalse(it.hasNext());
	assertUndefined(it.next());
}

function testArrayListInsertAfterNoReferenceRightCount() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	
	assertFalse(ll.insertAfter("x", "c"));
	
	assertEquals(4, ll.length());
}

function testArrayListInsertAfterNoReference() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	
	assertFalse(ll.insertAfter("x", "c"));
	
	var it = ll.iterator();

	assertNotUndefined(it);
	assertTrue(it.hasNext());
	assertEquals("a", it.next());
	assertTrue(it.hasNext());
	assertEquals(0, it.next());
	assertTrue(it.hasNext());
	assertEquals("b", it.next());
	assertTrue(it.hasNext());
	assertEquals(1, it.next());
	assertFalse(it.hasNext());
	assertUndefined(it.next());
}

function testArrayListInsertAfterEmpty() {
    var ll = new ilib.ArrayList();
	assertNotUndefined(ll);
	
	assertEquals(0, ll.length());
	
	assertFalse(ll.insertAfter("a", "c"));

	// nowhere to insert
	assertEquals(0, ll.length());
}

function testArrayListInsertAfterUndefinedReference() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	
	assertFalse(ll.insertAfter(undefined, "c"));
	
	assertEquals(4, ll.length());
}

function testArrayListInsertAfterUndefinedObj() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	
	assertFalse(ll.insertAfter("a", undefined));
	
	assertEquals(4, ll.length());
}

function testArrayListContains() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	
	assertTrue(ll.contains("b"));
}

function testArrayListContainsNotThere() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	
	assertFalse(ll.contains("x"));
}

function testArrayListContainsFalse() {
    var arr = ["a", 0, "b", false, 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(5, ll.length());
	
	assertTrue(ll.contains(false));
}

function testArrayListContainsObject() {
    var arr = ["a", 0, "b", {a:1, b:2}, 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(5, ll.length());
	
	assertTrue(ll.contains({a:1, b:2}));
}

function testArrayListContainsUndefined() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	
	assertFalse(ll.contains(undefined));
}

function testArrayListContainsEmpty() {
    var ll = new ilib.ArrayList();
	assertNotUndefined(ll);
	
	assertEquals(0, ll.length());
	
	assertFalse(ll.contains("b"));
}

function testArrayListContainsWithComparator() {
    var arr = [
       {key: "a", value: "1"},
       {key: "b", value: "2"},
       {key: "c", value: "3"},
       {key: "d", value: "4"},
       {key: "e", value: "5"}
    ];
    
    var ll = new ilib.ArrayList({
    	init: arr,
    	comparator: function(left, right) {
    		return left.key === right.key;
    	}
    });
	assertNotUndefined(ll);
	
	assertEquals(5, ll.length());
	
	assertTrue(ll.contains({key: "d", value: 243, foo: "bar"}));
}

function testArrayListContainsWithComparatorMissingKeyInElement() {
    var arr = [
       {key: "a", value: "1"},
       {key: "b", value: "2"},
       {key: "c", value: "3"},
       {value: "4"},
       {key: "e", value: "5"}
    ];
    
    var ll = new ilib.ArrayList({
    	init: arr,
    	comparator: function(left, right) {
    		return left.key === right.key;
    	}
    });
	assertNotUndefined(ll);
	
	assertEquals(5, ll.length());
	
	assertTrue(ll.contains({key: "e", value: 243, foo: "bar"}));
}

function testArrayListContainsWithComparatorMissingElement() {
    var arr = [
       {key: "a", value: "1"},
       {key: "b", value: "2"},
       {key: "c", value: "3"},
       {key: "d", value: "4"},
       {key: "e", value: "5"}
    ];
    
    var ll = new ilib.ArrayList({
    	init: arr,
    	comparator: function(left, right) {
    		return left.key === right.key;
    	}
    });
	assertNotUndefined(ll);
	
	assertEquals(5, ll.length());
	
	assertFalse(ll.contains({key: "g", value: 243, foo: "bar"}));
}

function testArrayListInsertBeforeWithComparator() {
    var arr = [
       {key: "a", value: "1"},
       {key: "b", value: "2"},
       {key: "c", value: "3"},
       {key: "d", value: "4"},
       {key: "e", value: "5"},
    ];
    
    var ll = new ilib.ArrayList({
    	init: arr,
    	comparator: function(left, right) {
    		return left.key === right.key;
    	}
    });
	assertNotUndefined(ll);
	
	assertEquals(5, ll.length());
	
	assertTrue(ll.insertBefore({key:"d", value: "1231"}, {key: "z", value: 243, foo: "bar"}));
	
	assertEquals(6, ll.length());
}

function testArrayListInsertBeforeWithComparatorRightContents() {
    var arr = [
       {key: "a", value: "1"},
       {key: "b", value: "2"},
       {key: "c", value: "3"},
       {key: "d", value: "4"},
       {key: "e", value: "5"},
    ];
    
    var ll = new ilib.ArrayList({
    	init: arr,
    	comparator: function(left, right) {
    		return left.key === right.key;
    	}
    });
	assertNotUndefined(ll);
	
	assertEquals(5, ll.length());
	
	assertTrue(ll.insertBefore({key:"d", value: "1231"}, {key: "z", value: 243, foo: "bar"}));
	
	assertEquals(6, ll.length());

	var it = ll.iterator();

	assertNotUndefined(it);
	assertTrue(it.hasNext());
	assertObjectEquals({key: "a", value: "1"}, it.next());
	assertTrue(it.hasNext());
	assertObjectEquals({key: "b", value: "2"}, it.next());
	assertTrue(it.hasNext());
	assertObjectEquals({key: "c", value: "3"}, it.next());
	assertTrue(it.hasNext());
	assertObjectEquals({key: "z", value: 243, foo: "bar"}, it.next());
	assertTrue(it.hasNext());
	assertObjectEquals({key: "d", value: "4"}, it.next());
	assertTrue(it.hasNext());
	assertObjectEquals({key: "e", value: "5"}, it.next());
	assertFalse(it.hasNext());
	assertUndefined(it.next());
}

function testArrayListInsertAfterWithComparator() {
    var arr = [
       {key: "a", value: "1"},
       {key: "b", value: "2"},
       {key: "c", value: "3"},
       {key: "d", value: "4"},
       {key: "e", value: "5"},
    ];
    
    var ll = new ilib.ArrayList({
    	init: arr,
    	comparator: function(left, right) {
    		return left.key === right.key;
    	}
    });
	assertNotUndefined(ll);
	
	assertEquals(5, ll.length());
	
	assertTrue(ll.insertAfter({key:"d", value: "1231"}, {key: "z", value: 243, foo: "bar"}));
	
	assertEquals(6, ll.length());
}

function testArrayListInsertAfterWithComparatorRightContents() {
    var arr = [
       {key: "a", value: "1"},
       {key: "b", value: "2"},
       {key: "c", value: "3"},
       {key: "d", value: "4"},
       {key: "e", value: "5"},
    ];
    
    var ll = new ilib.ArrayList({
    	init: arr,
    	comparator: function(left, right) {
    		return left.key === right.key;
    	}
    });
	assertNotUndefined(ll);
	
	assertEquals(5, ll.length());
	
	assertTrue(ll.insertAfter({key:"d", value: "1231"}, {key: "z", value: 243, foo: "bar"}));
	
	assertEquals(6, ll.length());

	var it = ll.iterator();

	assertNotUndefined(it);
	assertTrue(it.hasNext());
	assertObjectEquals({key: "a", value: "1"}, it.next());
	assertTrue(it.hasNext());
	assertObjectEquals({key: "b", value: "2"}, it.next());
	assertTrue(it.hasNext());
	assertObjectEquals({key: "c", value: "3"}, it.next());
	assertTrue(it.hasNext());
	assertObjectEquals({key: "d", value: "4"}, it.next());
	assertTrue(it.hasNext());
	assertObjectEquals({key: "z", value: 243, foo: "bar"}, it.next());
	assertTrue(it.hasNext());
	assertObjectEquals({key: "e", value: "5"}, it.next());
	assertFalse(it.hasNext());
	assertUndefined(it.next());

}

function testArrayListGet() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());

	assertEquals("a", ll.get(0));
	assertEquals(0, ll.get(1));
	assertEquals("b", ll.get(2));
	assertEquals(1, ll.get(3));
	assertUndefined(ll.get(4));
}

function testArrayListGetEmpty() {
    var ll = new ilib.ArrayList();
	assertNotUndefined(ll);
	
	assertEquals(0, ll.length());

	assertUndefined(ll.get(0));
	assertUndefined(ll.get(4));
}

function testArrayListGetNegative() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());

	// gets from the end
	assertEquals("a", ll.get(-4));
	assertEquals(0, ll.get(-3));
	assertEquals("b", ll.get(-2));
	assertEquals(1, ll.get(-1));
	assertUndefined(ll.get(-5));
}

function testArrayListGetUndefined() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.ArrayList({init: arr});
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());

	assertUndefined(ll.get(undefined));
}

