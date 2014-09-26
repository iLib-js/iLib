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

function testMeasurementLength1() {
	var measurement = new ilib.Measurement({
		amount: 5,
		unit: "kilometers"
	});

	assertNotNull(measurement);
	assertEquals("length", measurement.getMeasure());
}

function testMeasurementLength2() {
	var measurement = new ilib.Measurement({
		amount: 5,
		unit: "miles"
	});

	assertNotNull(measurement);
	assertEquals("length", measurement.getMeasure());
}

function testMeasurementSpeed1() {
	var measurement = new ilib.Measurement({
		amount: 5,
		unit: "miles/hour"
	});

	assertNotNull(measurement);
	assertEquals("speed", measurement.getMeasure());
}

function testMeasurementSpeed2() {
	var measurement = new ilib.Measurement({
		amount: 5,
		unit: "meters/s"
	});

	assertNotNull(measurement);
	assertEquals("speed", measurement.getMeasure());
}

function testMeasurementTemperature1() {
	var measurement = new ilib.Measurement({
		amount: 5,
		unit: "C"
	});

	assertNotNull(measurement);
	assertEquals("temperature", measurement.getMeasure());
}

function testMeasurementTemperature2() {
	var measurement = new ilib.Measurement({
		amount: 5,
		unit: "F"
	});

	assertNotNull(measurement);
	assertEquals("temperature", measurement.getMeasure());
}

function testMeasurementDigitalStorage1() {
	var measurement = new ilib.Measurement({
		amount: 100,
		unit: "mb"
	});

	assertNotNull(measurement);
	assertEquals("digitalStorage", measurement.getMeasure());
}

function testMeasurementDigitalStorage2() {
	var measurement = new ilib.Measurement({
		amount: 1204,
		unit: "tB"
	});

	assertNotNull(measurement);
	assertEquals("digitalStorage", measurement.getMeasure());
}

function testMeasurementConstructorLengths() {
	var measures = [
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

	for (var measure in measures) {
		var measurement = new ilib.Measurement({
			amount: 100,
			unit: measures[measure]
		});
	
		assertNotUndefined(measurement);
		assertEquals("length", measurement.getMeasure());
		assertEquals(100, measurement.getAmount());
		assertEquals(measures[measure], measurement.getUnit());
	}
}

function testMeasurementConstructorSpeeds() {
	var measures = [
    	"feet/second",
    	"meters/second",
    	"kilometer/hour",
    	"miles/hour",
    	"knot"    	
	];

	for (var measure in measures) {
		var measurement = new ilib.Measurement({
			amount: 100,
			unit: measures[measure]
		});
	
		assertNotUndefined(measurement);
		assertEquals("speed", measurement.getMeasure());
		assertEquals(100, measurement.getAmount());
		assertEquals(measures[measure], measurement.getUnit());
	}
}

function testMeasurementConstructorTemperature() {
	var measures = [
		"celsius",
		"kelvin",
		"fahrenheit"
	];

	for (var measure in measures) {
		var measurement = new ilib.Measurement({
			amount: 100,
			unit: measures[measure]
		});
	
		assertNotUndefined(measurement);
		assertEquals("temperature", measurement.getMeasure());
		assertEquals(100, measurement.getAmount());
		assertEquals(measures[measure], measurement.getUnit());
	}
}

function testMeasurementConstructorDigitalStorage() {
	var measures = [
	    "bit",
	    "byte",
	    "kilobit",
	    "kilobyte",
	    "megabit",
	    "megabyte",
	    "gigabit",
	    "gigabyte",
	    "terabit",
	    "terabyte",
	    "petabit",
	    "petabyte"
	];

	for (var measure in measures) {
		var measurement = new ilib.Measurement({
			amount: 100,
			unit: measures[measure]
		});
	
		assertNotUndefined(measurement);
		assertEquals("digitalStorage", measurement.getMeasure());
		assertEquals(100, measurement.getAmount());
		assertEquals(measures[measure], measurement.getUnit());
	}
}

function testMeasurementConstructorDigitalStorageCaseInsensitive() {
	var measures = [
	    "bit",
	    "byte",
	    "kilobit",
	    "kilobyte",
	    "megabit",
	    "megabyte",
	    "gigabit",
	    "gigabyte",
	    "terabit",
	    "terabyte",
	    "petabit",
	    "petabyte"
	];

	for (var measure in measures) {
		var measurement = new ilib.Measurement({
			amount: 100,
			unit: measures[measure]
		});
	
		assertNotUndefined(measurement);
		assertEquals("digitalStorage", measurement.getMeasure());
		assertEquals(100, measurement.getAmount());
		assertEquals(measures[measure], measurement.getUnit().toLowerCase());
	}
}
