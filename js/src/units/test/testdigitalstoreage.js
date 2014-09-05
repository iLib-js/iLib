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

function testDSConstructor() {

    var m = new ilib.Measurement.DigitalStorage({
        unit: "mb",
	amount: 2
    });
	
	assertNotNull(m);
}

function testDSConvertKbToMb() {
	var m1 = new ilib.Measurement.DigitalStorage({
		unit: "kb",
		amount: 102400
	});
	var m2 = new ilib.Measurement.DigitalStorage({
		unit: "mb",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(100, m2.getAmount());
}

function testStaticConvert1() {
	var m = ilib.Measurement.DigitalStorage.convert("bit", "kilobits", 12024);
	
	assertEquals(12312576, m);
}

function testStaticConvertWithString() {
	var m = ilib.Measurement.DigitalStorage.convert("gigabyte", "petabyte", "1");
	
	assertEquals(1.049e+6, m);
}

function testStaticConvert2() {
	var m = ilib.Measurement.DigitalStorage.convert("tB", "gB", 10240);
	
	assertEquals(10, m);
}

function testStaticConvert3() {
	var m = ilib.Measurement.DigitalStorage.convert("mb", "byte", 1048576);
	
	assertEquals(8, m);
}

function testStaticConvert4() {
	var m = ilib.Measurement.DigitalStorage.convert("Pb", "tb", 1024);
	
	assertEquals(1, m);
}

function testGetMeasures() {
	var measures = ilib.Measurement.DigitalStorage.getMeasures();
	var expected = [
    	"Bit",
    	"Byte",
    	"Kilobit",
    	"Kilobyte",
    	"Megabit",
    	"Megabyte",
    	"Gigabit",
    	"Gigabyte",
    	"Terabit",
    	"Terabyte",
    	"Petabit",
    	"Petabyte"
	];
	
	assertArrayEqualsIgnoringOrder(expected, measures);
}
