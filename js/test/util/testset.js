/*
 * testset.js - test the ISet class
 * 
 * Copyright © 2015,2017, JEDLSoft
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

if (typeof(ISet) === "undefined") {
    var ISet = require("../../lib/ISet.js");
}

// var inspect = require("../../../webapp/WEB-INF/app/core/inspect.js");

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}

module.exports.testset = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testConstructor: function(test) {
        test.expect(1);
        var s = new ISet();
        test.ok(s.isEmpty());
        test.done();
    },
    
    testConstructorIsEmpty: function(test) {
        test.expect(1);
        var s = new ISet();
        test.ok(s.isEmpty());
        test.done();
    },
    
    testContainsEmpty: function(test) {
        test.expect(2);
        var s = new ISet();
        test.ok(s.isEmpty());
        
        test.ok(!s.contains("foo"));
        test.done();
    },
    
    testAdd: function(test) {
        test.expect(2);
        var s = new ISet();
        test.ok(s.isEmpty());
        
        s.add("foo");
        
        test.ok(s.contains("foo"));
        test.done();
    },
    
    testAddAlreadyThere: function(test) {
        test.expect(3);
        var s = new ISet();
        test.ok(s.isEmpty());
        
        s.add("foo");
        
        test.ok(s.contains("foo"));
        
        s.add("foo");
        
        test.ok(s.contains("foo"));
        test.done();
    },
    
    testAddMultiple: function(test) {
        test.expect(5);
        var s = new ISet();
        test.ok(s.isEmpty());
        
        s.add("foo");
        s.add("bar");
        s.add("asdf");
        
        test.ok(s.contains("foo"));
        test.ok(s.contains("bar"));
        test.ok(s.contains("asdf"));
        
        test.ok(!s.contains("qwerty"));
        test.done();
    },
    
    testAddArray: function(test) {
        test.expect(5);
        var s = new ISet();
        test.ok(s.isEmpty());
        
        s.add(["foo","bar","asdf"]);
        
        test.ok(s.contains("foo"));
        test.ok(s.contains("bar"));
        test.ok(s.contains("asdf"));
        
        test.ok(!s.contains("qwerty"));
        test.done();
    },
    
    testConstructorWithElementsIsNotEmpty: function(test) {
        test.expect(1);
        var s = new ISet(["foo", "bar", "asdf"]);
        test.ok(!s.isEmpty());
        test.done();
    },
    
    testConstructorWithElementsContainsElements: function(test) {
        test.expect(3);
        var s = new ISet(["foo", "bar", "asdf"]);
        
        test.ok(s.contains("foo"));
        test.ok(s.contains("bar"));
        test.ok(s.contains("asdf"));
        test.done();
    },
    
    testConstructorWithElementsDoesNotContainBogusElements: function(test) {
        test.expect(1);
        var s = new ISet(["foo", "bar", "asdf"]);
        
        test.ok(!s.contains("qwerty"));
        test.done();
    },
    
    testWithNumericElements: function(test) {
        test.expect(1);
        var s = new ISet();
        
        s.add(234);
        s.add(43);
        s.add(3433);
        
        test.ok(!s.isEmpty());
        test.done();
    },
    
    testWithNumericElementsContainsRightStuff: function(test) {
        test.expect(3);
        var s = new ISet();
        
        s.add(234);
        s.add(43);
        s.add(3433);
        
        test.ok(s.contains(234));
        test.ok(s.contains(43));
        test.ok(s.contains(3433));
        test.done();
    },
    
    testWithNumericElementsDoesNotContainsBogusStuff: function(test) {
        test.expect(3);
        var s = new ISet();
        
        s.add(234);
        s.add(43);
        s.add(3433);
        
        test.ok(!s.contains(1));
        test.ok(!s.contains(23233));
        test.ok(!s.contains(true));
        test.done();
    },
    
    testWithNumericArrayContainsRightStuff: function(test) {
        test.expect(3);
        var s = new ISet();
        
        s.add([234,43,3433]);
        
        test.ok(s.contains(234));
        test.ok(s.contains(43));
        test.ok(s.contains(3433));
        test.done();
    },
    
    testConstructorWithNumericElements: function(test) {
        test.expect(1);
        var s = new ISet([1, 5, 9]);
        test.ok(!s.isEmpty());
        test.done();
    },
    
    testConstructorWithNumericElementsContainsRightStuff: function(test) {
        test.expect(3);
        var s = new ISet([1, 5, 9]);
        test.ok(s.contains(1));
        test.ok(s.contains(5));
        test.ok(s.contains(9));
        test.done();
    },
    
    testAsArray: function(test) {
        test.expect(1);
        var s = new ISet(["foo", "bar", "asdf"]);
        
        var expected = ["foo", "bar", "asdf"];
        test.deepEqual(s.asArray(), expected);
        test.done();
    },
    
    testAsArrayNumericAfterAddingStrings: function(test) {
        test.expect(1);
        var s = new ISet();
        
        s.add("foo");
        s.add("bar");
        s.add("asdf");
        
        var expected = ["foo", "bar", "asdf"];
        test.deepEqual(s.asArray(), expected);
        test.done();
    },
    
    testAsArrayNumeric: function(test) {
        test.expect(1);
        var s = new ISet([1, 2, 3, 4]);
        
        var expected = [1, 2, 3, 4];
        test.deepEqual(s.asArray(), expected);
        test.done();
    },
    
    testAsArrayNumericAfterAddingNumbers: function(test) {
        test.expect(1);
        var s = new ISet();
        
        s.add(1);
        s.add(2);
        s.add(3);
        s.add(4);
        
        var expected = [1, 2, 3, 4];
        test.deepEqual(s.asArray(), expected);
        test.done();
    },
    
    testAsArrayEmpty: function(test) {
        test.expect(1);
        var s = new ISet();
        
        test.deepEqual(s.asArray(), []);
        test.done();
    },
    
    testRemove: function(test) {
        test.expect(2);
        var s = new ISet(["foo", "bar", "asdf"]);
        
        test.ok(s.contains("bar"));
        
        s.remove("bar");
    
        test.ok(!s.contains("bar"));
        test.done();
    },
    
    testRemoveLastElement: function(test) {
        test.expect(2);
        var s = new ISet(["bar"]);
        
        test.ok(s.contains("bar"));
        
        s.remove("bar");
    
        test.ok(!s.contains("bar"));
        test.done();
    },
    
    testRemoveLastElementNowEmpty: function(test) {
        test.expect(2);
        var s = new ISet(["bar"]);
        
        test.ok(!s.isEmpty());
        
        s.remove("bar");
    
        test.ok(s.isEmpty());
        test.done();
    },
    
    testRemoveNumeric: function(test) {
        test.expect(2);
        var s = new ISet([1, 2, 3, 4]);
        
        test.ok(s.contains(3));
        
        s.remove(3);
        
        test.ok(!s.contains(3));
        test.done();
    },
    
    testRemoveNumericAsArray: function(test) {
        test.expect(2);
        var s = new ISet([1, 2, 3, 4]);
    
        var expected = [1, 2, 3, 4];
        test.deepEqual(s.asArray(), expected);
    
        s.remove(3);
        
        var expected = [1, 2, 4];
        test.deepEqual(s.asArray(), expected);
        test.done();
    },
    
    testClear: function(test) {
        test.expect(2);
        var s = new ISet(["foo", "bar", "asdf"]);
        
        test.ok(s.contains("bar"));
        
        s.clear();
    
        test.ok(!s.contains("bar"));
        test.done();
    },
    
    testClearNowEmpty: function(test) {
        test.expect(2);
        var s = new ISet(["foo", "bar", "asdf"]);
        
        test.ok(!s.isEmpty());
        
        s.clear();
    
        test.ok(s.isEmpty());
        test.done();
    },
    
    testToJsonString: function(test) {
        test.expect(1);
        var s = new ISet(["foo", "bar", "asdf"]);
        
        test.deepEqual(s.toJson(), '["foo","bar","asdf"]');
        test.done();
    },
    
    testToJsonNumeric: function(test) {
        test.expect(1);
        var s = new ISet([1, 2, 3, 4]);
        
        test.deepEqual(s.toJson(), "[1,2,3,4]");
        test.done();
    },
    
    testToJsonEmpty: function(test) {
        test.expect(1);
        var s = new ISet();
        
        test.deepEqual(s.toJson(), '[]');
        test.done();
    }
    
};
