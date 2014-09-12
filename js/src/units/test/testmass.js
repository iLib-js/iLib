/*
 * testMasss.js - test the Mass object
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

function testMassMassConstructor() {
	var m = new ilib.Measurement.Mass({
		unit: "kg",
		amount: 2
	});
	
	assertNotNull(m);
}

function testMassMassConvertGramToKG() {
	var m1 = new ilib.Measurement.Mass({
		unit: "g",
		amount: 3000
	});
	var m2 = new ilib.Measurement.Mass({
		unit: "kg",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(3, m2.getAmount());
}

function testMassStaticConvert1() {
	var m = ilib.Measurement.Mass.convert("long ton", "kg", 10000);
		
        assertRoughlyEquals(9.842065, m, 0.00001);
}

function testMassStaticConvertWithString() {
	var m = ilib.Measurement.Mass.convert("tonne", "pound", "1000");
	
	assertEquals(0.453592, m);
}

function testMassStaticConvert2() {
	var m = ilib.Measurement.Mass.convert("short ton", "ounce", 10000);
	
	assertEquals(0.3125, m);
}

function testMassStaticConvert3() {
	var m = ilib.Measurement.Mass.convert("st", "gram", 10000);
        
        assertEquals(1.57473, m);
}

function testMassStaticConvert4() {
	var m = ilib.Measurement.Mass.convert("kg", "mg", 1000000);
	
	assertEquals(1, m);
}

function testMassStaticConvert5() {
	var m = ilib.Measurement.Mass.convert("lb", "mcg", 1000000000);

	assertRoughlyEquals(2.20462, m, 0.0001);
}


function testMassGetMeasures() {
	var measures = ilib.Measurement.Mass.getMeasures();
	var expected = [
    	"µg",  
	"mg",  
	"g",
	"oz",
	"lb",
        "kg",
        "st",
        "short ton",
        "metric ton",
        "long ton"
	];	
	assertArrayEqualsIgnoringOrder(expected, measures);
}
