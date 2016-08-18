/*
 * testset.js - test the ISet class
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

var ISet = require("./../lib/ISet.js");

// var inspect = require("../../../webapp/WEB-INF/app/core/inspect.js");

function testConstructor() {
	var s = new ISet();
	assertTrue(s.isEmpty());
};

function testConstructorIsEmpty() {
	var s = new ISet();
	assertTrue(s.isEmpty());
};

function testContainsEmpty() {
	var s = new ISet();
	assertTrue(s.isEmpty());
	
	assertFalse(s.contains("foo"));
};

function testAdd() {
	var s = new ISet();
	assertTrue(s.isEmpty());
	
	s.add("foo");
	
	assertTrue(s.contains("foo"));
};

function testAddAlreadyThere() {
	var s = new ISet();
	assertTrue(s.isEmpty());
	
	s.add("foo");
	
	assertTrue(s.contains("foo"));
	
	s.add("foo");
	
	assertTrue(s.contains("foo"));
};

function testAddMultiple() {
	var s = new ISet();
	assertTrue(s.isEmpty());
	
	s.add("foo");
	s.add("bar");
	s.add("asdf");
	
	assertTrue(s.contains("foo"));
	assertTrue(s.contains("bar"));
	assertTrue(s.contains("asdf"));
	
	assertFalse(s.contains("qwerty"));
};

function testAddArray() {
	var s = new ISet();
	assertTrue(s.isEmpty());
	
	s.add(["foo","bar","asdf"]);
	
	assertTrue(s.contains("foo"));
	assertTrue(s.contains("bar"));
	assertTrue(s.contains("asdf"));
	
	assertFalse(s.contains("qwerty"));
};

function testConstructorWithElementsIsNotEmpty() {
	var s = new ISet(["foo", "bar", "asdf"]);
	assertFalse(s.isEmpty());
};

function testConstructorWithElementsContainsElements() {
	var s = new ISet(["foo", "bar", "asdf"]);
	
	assertTrue(s.contains("foo"));
	assertTrue(s.contains("bar"));
	assertTrue(s.contains("asdf"));
};

function testConstructorWithElementsDoesNotContainBogusElements() {
	var s = new ISet(["foo", "bar", "asdf"]);
	
	assertFalse(s.contains("qwerty"));
};

function testWithNumericElements() {
	var s = new ISet();
	
	s.add(234);
	s.add(43);
	s.add(3433);
	
	assertFalse(s.isEmpty());
};

function testWithNumericElementsContainsRightStuff() {
	var s = new ISet();
	
	s.add(234);
	s.add(43);
	s.add(3433);
	
	assertTrue(s.contains(234));
	assertTrue(s.contains(43));
	assertTrue(s.contains(3433));
};

function testWithNumericElementsDoesNotContainsBogusStuff() {
	var s = new ISet();
	
	s.add(234);
	s.add(43);
	s.add(3433);
	
	assertFalse(s.contains(1));
	assertFalse(s.contains(23233));
	assertFalse(s.contains(true));
};

function testWithNumericArrayContainsRightStuff() {
	var s = new ISet();
	
	s.add([234,43,3433]);
	
	assertTrue(s.contains(234));
	assertTrue(s.contains(43));
	assertTrue(s.contains(3433));
};

function testConstructorWithNumericElements() {
	var s = new ISet([1, 5, 9]);
	assertFalse(s.isEmpty());
};

function testConstructorWithNumericElementsContainsRightStuff() {
	var s = new ISet([1, 5, 9]);
	assertTrue(s.contains(1));
	assertTrue(s.contains(5));
	assertTrue(s.contains(9));
};

function testAsArray() {
	var s = new ISet(["foo", "bar", "asdf"]);
	
	assertObjectEquals(["foo", "bar", "asdf"], s.asArray());
};

function testAsArrayNumericAfterAddingStrings() {
	var s = new ISet();
	
	s.add("foo");
	s.add("bar");
	s.add("asdf");
	
	assertObjectEquals(["foo", "bar", "asdf"], s.asArray());
};

function testAsArrayNumeric() {
	var s = new ISet([1, 2, 3, 4]);
	
	assertObjectEquals([1, 2, 3, 4], s.asArray());
};

function testAsArrayNumericAfterAddingNumbers() {
	var s = new ISet();
	
	s.add(1);
	s.add(2);
	s.add(3);
	s.add(4);
	
	assertObjectEquals([1, 2, 3, 4], s.asArray());
};

function testAsArrayEmpty() {
	var s = new ISet();
	
	assertObjectEquals([], s.asArray());
};

function testRemove() {
	var s = new ISet(["foo", "bar", "asdf"]);
	
	assertTrue(s.contains("bar"));
	
	s.remove("bar");

	assertFalse(s.contains("bar"));
};

function testRemoveLastElement() {
	var s = new ISet(["bar"]);
	
	assertTrue(s.contains("bar"));
	
	s.remove("bar");

	assertFalse(s.contains("bar"));
};

function testRemoveLastElementNowEmpty() {
	var s = new ISet(["bar"]);
	
	assertFalse(s.isEmpty());
	
	s.remove("bar");

	assertTrue(s.isEmpty());
};

function testRemoveNumeric() {
	var s = new ISet([1, 2, 3, 4]);
	
	assertTrue(s.contains(3));
	
	s.remove(3);
	
	assertFalse(s.contains(3));
};

function testRemoveNumericAsArray() {
	var s = new ISet([1, 2, 3, 4]);
	
	assertObjectEquals([1, 2, 3, 4], s.asArray());

	s.remove(3);
	
	assertObjectEquals([1, 2, 4], s.asArray());
};

function testClear() {
	var s = new ISet(["foo", "bar", "asdf"]);
	
	assertTrue(s.contains("bar"));
	
	s.clear();

	assertFalse(s.contains("bar"));
};

function testClearNowEmpty() {
	var s = new ISet(["foo", "bar", "asdf"]);
	
	assertFalse(s.isEmpty());
	
	s.clear();

	assertTrue(s.isEmpty());
};

function testToJsonString() {
	var s = new ISet(["foo", "bar", "asdf"]);
	
	assertObjectEquals('["foo","bar","asdf"]', s.toJson());
};

function testToJsonNumeric() {
	var s = new ISet([1, 2, 3, 4]);
	
	assertObjectEquals("[1,2,3,4]", s.toJson());
};

function testToJsonEmpty() {
	var s = new ISet();
	
	assertObjectEquals('[]', s.toJson());
}
