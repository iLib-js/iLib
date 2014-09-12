/*
 * testarea.js - test the area object
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

function testAreaAreaConstructor() {

    var m = new ilib.Measurement.Area({
        unit: "Square km",
	amount: 2
    });
	
    assertNotNull(m);
}

function testAreaAreaConvertKm2toMi2() {
	var m1 = new ilib.Measurement.Area({
		unit: "Square km",
		amount:5000
	});
	var m2 = new ilib.Measurement.Area({
		unit: "Square mile",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertRoughlyEquals(1930.511, m2.getAmount(),0.1);
}

function testAreaStaticConvert1() {
	var m = ilib.Measurement.Area.convert("Square mile","Square km", 2.0);
	
	assertEquals(0.772204, m);
}

function testAreaStaticConvertWithString() {
	var m = ilib.Measurement.Area.convert( "Hectare","Square km", 2.0);
	
	assertEquals(200, m);
}

function testAreaStaticConvert2() {
	var m = ilib.Measurement.Area.convert( "Square meter","Square km", 2.0);
	
	assertEquals(2e+6, m);
}

function testAreaStaticConvert3() {
	var m = ilib.Measurement.Area.convert( "Square mile","Square km", 2.0);
	
	assertEquals(0.772204, m);
}

function testAreaStaticConvert4() {
	var m = ilib.Measurement.Area.convert( "Hectare", "Square km",2.0);
	
	assertEquals(200, m);
}

function testAreaStaticConvert5() {
	var m = ilib.Measurement.Area.convert( "Square yard","Square km", 2.0);
	
	assertEquals(2.392e+6, m);
}
function testAreaStaticConvert6() {
	var m = ilib.Measurement.Area.convert( "Acre", "Square km",2.0);
	
	assertEquals(494.21, m);
}
function testAreaStaticConvert7() {
	var m = ilib.Measurement.Area.convert( "Square foot","Square km", 2.0);
	
	assertRoughlyEquals(2.153e+7, m,1e+7);
}
function testAreaStaticConvert8() {
	var m = ilib.Measurement.Area.convert( "Square inch","Square km", 2.0);
	
	assertEquals(3.1e+9, m);
}

function testAreaStaticConvert9() {
	var m = ilib.Measurement.Area.convert("Square mile","Hectare", 2.0);
	
	assertRoughlyEquals(0.00772204, m,0.001);
}


function testAreaStaticConvert10() {
	var m = ilib.Measurement.Area.convert( "Square meter","Hectare",2.0);
	
	assertEquals(20000, m);
}

function testAreaStaticConvert11() {
	var m = ilib.Measurement.Area.convert( "Square mile","Square meter", 2.0);
	
	assertEquals(7.722e-7, m);
}

function testAreaStaticConvert12() {
	var m = ilib.Measurement.Area.convert( "Hectare", "Square meter",2.0);
	
	assertEquals(0.0002, m);
}

function testAreaStaticConvert13() {
	var m = ilib.Measurement.Area.convert( "Square yard","Square inch", 2.0);
	
	assertEquals(0.00154321, m);
}
function testAreaStaticConvert14() {
	var m = ilib.Measurement.Area.convert( "Acre", "Square foot",2.0);
	
	assertEquals(4.5914e-5, m);
}
function testAreaStaticConvert15() {
	var m = ilib.Measurement.Area.convert( "Square foot","Square mile", 2.0);
	
	assertRoughlyEquals(5.576e+7, m,1e+7);
}
function testAreaStaticConvert16() {
	var m = ilib.Measurement.Area.convert( "Square inch","Acre", 2.0);
	
	assertEquals(1.255e+7, m);
}

function testAreaStaticConvert16() {
	var m = ilib.Measurement.Area.convert( "Square inch","Square yard", 2.0);
	
	assertEquals(2592, m);
}
function testAreaGetMeasures() {
	var measures = ilib.Measurement.Area.getMeasures();
	var expected = [
    	"Square km",
    	"Square inch",
    	"Square foot",
    	"Acre",
    	"Square yard",
    	"Square mile",
    	"Square meter",
    	"Hectare",
    	];
	
	assertArrayEqualsIgnoringOrder(expected, measures);
}
