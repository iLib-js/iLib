/*
 * testSpeeds.js - test the Speed object
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

function testSpeedConstructor() {
	var m = new ilib.Measurement.Speed({
		unit: "meters/sec",
		amount: 2
	});
	
	assertNotNull(m);
}

function testSpeedConvertMetersPerSecToMilesPerHour() {
	var m1 = new ilib.Measurement.Speed({
		unit: "meters/sec",
		amount: 5000
	});
	var m2 = new ilib.Measurement.Speed({
		unit: "miles/hour",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(11184.68, m2.getAmount());
}

function testStaticConvert1() {
	var m = ilib.Measurement.Speed.convert("feet/sec", "meters/sec", 2.0);
	
	assertEquals(6.56168, m);
}

function testStaticConvertWithString() {
	var m = ilib.Measurement.Speed.convert("feet/sec", "meters/sec", "2");
	
	assertEquals(6.56168, m);
}

function testStaticConvert2() {
	var m = ilib.Measurement.Speed.convert("meters/sec", "km/hour", 720);
	
	assertEquals(200.00016, m);
}

function testStaticConvert3() {
	var m = ilib.Measurement.Speed.convert("mile/hour", "knot", 200);
	
	assertEquals(230.156, m);
}

function testStaticConvert4() {
	var m = ilib.Measurement.Speed.convert("kn", "feet/sec", 200.0);
	
	assertEquals(118.4968, m);
}

function testGetMeasures() {
	var measures = ilib.Measurement.Speed.getMeasures();
	var expected = [
    	"feet/sec",
    	"meters/sec",
    	"km/hour",
    	"miles/hour",
    	"knot"    	
	];	
	assertArrayEqualsIgnoringOrder(expected, measures);
}
