/*
 * testunits.js - test the String object
 * 
 * Copyright © 2012-2013, JEDLSoft
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

function testUnitFormat1() {
	var m = new ilib.Measurement({
    		amount: 10,
   		unit: "micrometer"
	});
	var uf = new ilib.UnitFmt();  
	var str = uf.format(m);	
	assertEquals("10 micrometer", str);
}

function testUnitFormatWithScale1() {
	var m = new ilib.Measurement({
    		amount: 3000,
   		unit: "meter"
	});
	var uf = new ilib.UnitFmt(); 
	var str = uf.format(m);	
	assertEquals("3 kilometer", str);
}

function testUnitFormatWithoutScale1() {
	var m = new ilib.Measurement({
    		amount: 3000,
   		unit: "meter"
	});
	var uf = new ilib.UnitFmt({autoScale: false}); 
	var str = uf.format(m);	
	assertEquals("3000 meter", str);
}

function testUnitFormatWithScale2() {
	var m = new ilib.Measurement({
		unit: "bit",
		amount: 1024
	});

	var uf = new ilib.UnitFmt(); 
	var str = uf.format(m);	
	assertEquals("1 kilobit", str);
}

function testUnitFormatWithoutScale2() {
	var m = new ilib.Measurement({
		unit: "bit",
		amount: 1048576000
	});

	var uf = new ilib.UnitFmt({autoScale: false}); 
	var str = uf.format(m);	
	assertEquals("1048576000 bit", str);
}

function testUnitFormatWithScale3() {
	var m = new ilib.Measurement({
		unit: "mcg",
		amount: 10000000
	});

	var uf = new ilib.UnitFmt(); 
	var str = uf.format(m);	
	assertEquals("10 gram", str);
}

function testUnitFormatWithoutScale3() {
	var m = new ilib.Measurement({
		unit: "mcg",
		amount: 10000000
	});

	var uf = new ilib.UnitFmt({autoScale: false}); 
	var str = uf.format(m);	
	assertEquals("10000000 microgram", str);
}

function testUnitFormatWithMeasurementSystem() {
	var m = new ilib.Measurement({
		unit: "mcg",
		amount: 10000000
	});

	var uf = new ilib.UnitFmt({
			autoScale: true,
			measurementSystem: "metric"
		}); 
	var str = uf.format(m);	
	assertEquals("10 gram", str);
}



