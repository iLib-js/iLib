/*
 * testunits.js - test the units formatter object
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

function testUnitFormat1() {
	var m = new ilib.Measurement({
		amount: 10,
		unit: "micrometer"
	});
	var uf = new ilib.UnitFmt();  
	var str = uf.format(m);	
	assertEquals("10 micrometers", str);
}

function testUnitFormatWithScale1() {
	var m = new ilib.Measurement({
		amount: 3000,
		unit: "meter"
	});
	var uf = new ilib.UnitFmt(); 
	var str = uf.format(m);	
	assertEquals("3 kilometers", str);
}

function testUnitFormatWithoutScale1() {
	var m = new ilib.Measurement({
		amount: 3000,
		unit: "meter"
	});
	var uf = new ilib.UnitFmt({autoScale: false}); 
	var str = uf.format(m);	
	assertEquals("3000 meters", str);
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
	assertEquals("1048576000 bits", str);
}

function testUnitFormatWithScale3() {
	var m = new ilib.Measurement({
		unit: "mcg",
		amount: 10000000
	});

	var uf = new ilib.UnitFmt(); 
	var str = uf.format(m);	
	assertEquals("10 grams", str);
}

function testUnitFormatWithoutScale3() {
	var m = new ilib.Measurement({
		unit: "mcg",
		amount: 10000000
	});

	var uf = new ilib.UnitFmt({autoScale: false}); 
	var str = uf.format(m);	
	assertEquals("10000000 micrograms", str);
}

function testUnitFormatWithMeasurementSystem3() {
	var m = new ilib.Measurement({
		unit: "mcg",
		amount: 10000000
	});

	var uf = new ilib.UnitFmt({
		autoScale: true,
		measurementSystem: "metric"
	}); 
	var str = uf.format(m);	
	assertEquals("10 grams", str);
}

function testUnitFormatWithScale4() {
	var m1 = new ilib.Measurement({
		unit: "hectare",
		amount: 100
	});
	var uf = new ilib.UnitFmt(); 
	var str = uf.format(m1);	
	assertEquals("1 square kilometer", str);
}

function testUnitFormatWithoutScale4() {
	var m1 = new ilib.Measurement({
		unit: "hectare",
		amount: 100
	});

	var uf = new ilib.UnitFmt({autoScale: false}); 
	var str = uf.format(m1);	
	assertEquals("100 hectares", str);
}

function testUnitFormatWithMeasurementSystem4() {
	var m = new ilib.Measurement({
		unit: "square meter",
		amount: 10000
	});

	var uf = new ilib.UnitFmt({
		autoScale: true,
		measurementSystem: "metric"
	}); 
	var str = uf.format(m);	
	assertEquals("1 hectare", str);
}

function testUnitFormatWithScale5() {
	var m1 = new ilib.Measurement({
		unit: "watt hour",
		amount: 10000
	});
	var uf = new ilib.UnitFmt(); 
	var str = uf.format(m1);
	assertEquals("10 kilowatt-hours", str);
}

function testUnitFormatWithoutScale5() {
	var m1 = new ilib.Measurement.Energy({
		unit: "kilowatt hour",
		amount: 1233453
	});

	var uf = new ilib.UnitFmt({autoScale: false}); 
	var str = uf.format(m1);	
	assertEquals("1233453 kilowatt-hours", str);
}

function testUnitFormatWithMeasurementSystem5() {
	var m1 = new ilib.Measurement.Energy({
		unit: "kilowatt hour",
		amount: 1233453
	});

	var uf = new ilib.UnitFmt({
		autoScale: true,
		measurementSystem: "metric"
	}); 
	var str = uf.format(m1);	
	assertEquals("1.233453 gigawatt hour", str);
}

function testUnitFormatWithScale6() {
	var m = new ilib.Measurement({
		unit: "km/h",
		amount: 6000
	});
	var uf = new ilib.UnitFmt(); 
	var str = uf.format(m);
	assertEquals("1.666668 kilometer per second", str);
}

function testUnitFormatWithoutScale6() {
	var m = new ilib.Measurement({
		unit: "km/h",
		amount: 36
	});

	var uf = new ilib.UnitFmt({autoScale: false}); 
	var str = uf.format(m);	
	assertEquals("36 kilometers per hour", str);
}

function testUnitFormatWithMeasurementSystem6() {
	var m1 = new ilib.Measurement({
		unit: "feet/sec",
		amount: 10
	});

	var uf = new ilib.UnitFmt({
		autoScale: true,
		measurementSystem: "imperial"
	}); 
	var str = uf.format(m1);	
	assertEquals("5.92484 knots", str);
}

function testUnitFormatWithScale7() {
	var m = new ilib.Measurement({
		unit: "ms",
		amount: 12000
	});

	var uf = new ilib.UnitFmt(); 
	var str = uf.format(m);
	assertEquals("12 seconds", str);
}

function testUnitFormatWithoutScale7() {
	var m = new ilib.Measurement({
		unit: "ms",
		amount: 12000
	});

	var uf = new ilib.UnitFmt({autoScale: false}); 
	var str = uf.format(m);	
	assertEquals("12000 milliseconds", str);
}

function testUnitFormatWithScale8() {
	var m1 = new ilib.Measurement({
		unit: "Milliliter",
		amount: 1500
	});

	var uf = new ilib.UnitFmt(); 
	var str = uf.format(m1);
	assertEquals("1.5 liter", str);
}

function testUnitFormatWithoutScale8() {
	var m = new ilib.Measurement({
		unit: "Milliliter",
		amount: 1500
	});

	var uf = new ilib.UnitFmt({autoScale: false});
	var str = uf.format(m);	
	assertEquals("1500 milliliters", str);
}

function testUnitFormatWithMeasurementSystem8() {
	var m1 = new ilib.Measurement({
		unit: "ounce",
		amount: 100
	});

	var uf = new ilib.UnitFmt({
		autoScale: true,
		measurementSystem: "imperial"
	}); 
	var str = uf.format(m1);	
	assertEquals("6.25 pounds", str);
}

function testUnitFormatWithScale9() {
	var m1 = new ilib.Measurement({
		unit: "km/liter",
		amount:5000
	});

	var uf = new ilib.UnitFmt(); 
	var str = uf.format(m1);
	assertEquals("5000 kilometers per liter", str);
}

function testUnitFormatWithScale10() {
	var m1 = new ilib.Measurement({
		unit: "kelvin",
		amount: 285.3
	});

	var uf = new ilib.UnitFmt(); 
	var str = uf.format(m1);
	assertEquals("285.3 kelvins", str);
}

function testUnitFormatWithScale11() {
	var m1 = new ilib.Measurement({
		unit: "krunghoonfoop",
		amount: 2
	});

	var uf = new ilib.UnitFmt(); 
	var str = uf.format(m1);
	assertEquals("2 krunghoonfoop", str);
}
