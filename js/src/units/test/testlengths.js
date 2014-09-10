/*
 * testlengths.js - test the lengths object
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

function testLengthLengthConstructor() {

    var m = new ilib.Measurement.Length({
        unit: "meter",
	amount: 2
    });
	
    assertNotNull(m);
}

function testLengthLengthConvertMetersToMiles() {
	var m1 = new ilib.Measurement.Length({
		unit: "meter",
		amount: 5000
	});
	var m2 = new ilib.Measurement.Length({
		unit: "mile",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(3.106856, m2.getAmount());
}

function testLengthStaticConvert1() {
	var m = ilib.Measurement.Length.convert("feet", "meter", 2.0);
	
	assertEquals(6.56168, m);
}

function testLengthStaticConvertWithString() {
	var m = ilib.Measurement.Length.convert("feet", "meter", "2");
	
	assertEquals(6.56168, m);
}

function testLengthStaticConvert2() {
	var m = ilib.Measurement.Length.convert("meter", "millimeter", 200000);
	
	assertEquals(200, m);
}

function testLengthStaticConvert3() {
	var m = ilib.Measurement.Length.convert("mile", "yard", 7495);
	
	assertEquals(4.25852409, m);
}

function testLengthStaticConvert4() {
	var m = ilib.Measurement.Length.convert("millimeter", "meter", 2.0);
	
	assertEquals(2000, m);
}

function testLengthGetMeasures() {
	var measures = ilib.Measurement.Length.getMeasures();
	var expected = [
    	"micrometer",
    	"millimeter",
    	"centimeter",
    	"decimeter",
    	"meter",
    	"decameter",
    	"hectometer",
    	"kilometer",
    	"megameter",
    	"gigameter",
    	"nauticalmile",
    	"mile",
    	"yard",
    	"foot",
    	"inch"
	];
	
	assertArrayEqualsIgnoringOrder(expected, measures);
}
