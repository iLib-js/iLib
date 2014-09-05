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

