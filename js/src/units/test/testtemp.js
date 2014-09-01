/*
 * testtemp.js - test the temperature object
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

function testTemperatureConstructor() {
    var m = new ilib.Measurement.Temperature({
		unit: "celsius",
		amount: 2
	});
	
	assertNotNull(m);
}

function testTemperatureConvertCelciusToFahrenheit1() {
    var m1 = new ilib.Measurement.Temperature({
		unit: "celsius",
		amount: 0
	});
    var m2 = new ilib.Measurement.Temperature({
		unit: "fahrenheit",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(32, m2.getAmount());
}

function testTemperatureConvertCelciusToFahrenheit2() {
    var m1 = new ilib.Measurement.Temperature({
		unit: "celsius",
		amount: 100
	});
    var m2 = new ilib.Measurement.Temperature({
		unit: "fahrenheit",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(212, m2.getAmount());
}

function testTemperatureConvertCelciusToFahrenheit3() {
    var m1 = new ilib.Measurement.Temperature({
		unit: "celsius",
		amount: 30
	});
    var m2 = new ilib.Measurement.Temperature({
		unit: "fahrenheit",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(86, m2.getAmount());
}

function testTemperatureConvertFahrenheitToCelcius1() {
    var m1 = new ilib.Measurement.Temperature({
		unit: "fahrenheit",
		amount: 50
	});
    var m2 = new ilib.Measurement.Temperature({
		unit: "celsius",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(10, m2.getAmount());
}

function testTemperatureConvertFahrenheitToCelcius2() {
    var m1 = new ilib.Measurement.Temperature({
		unit: "fahrenheit",
		amount: 100
	});
    var m2 = new ilib.Measurement.Temperature({
		unit: "celsius",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(37.78, m2.getAmount());
}

function testTemperatureConvertCelciusToKelvin1() {
    var m1 = new ilib.Measurement.Temperature({
		unit: "celsius",
		amount: 0
	});
    var m2 = new ilib.Measurement.Temperature({
		unit: "kelvin",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(273.15, m2.getAmount());
}

function testTemperatureConvertCelciusToKelvin2() {
    var m1 = new ilib.Measurement.Temperature({
		unit: "celsius",
		amount: 100
	});
    var m2 = new ilib.Measurement.Temperature({
		unit: "kelvin",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(373.15, m2.getAmount());
}

function testTemperatureConvertKelvinToCelcius1() {
    var m1 = new ilib.Measurement.Temperature({
		unit: "kelvin",
		amount: 0
	});
    var m2 = new ilib.Measurement.Temperature({
		unit: "celsius",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(-273.15, m2.getAmount());
}

function testTemperatureConvertKelvinToCelcius2() {
    var m1 = new ilib.Measurement.Temperature({
		unit: "kelvin",
		amount: 285.3
	});
    var m2 = new ilib.Measurement.Temperature({
		unit: "celsius",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(12.15, m2.getAmount());
}

function testTemperatureConvertFahrenheitToKelvin1() {
    var m1 = new ilib.Measurement.Temperature({
		unit: "fahrenheit",
		amount: 0
	});
    var m2 = new ilib.Measurement.Temperature({
		unit: "kelvin",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(255.37, m2.getAmount());
}

function testTemperatureConvertFahrenheitToKelvin2() {
    var m1 = new ilib.Measurement.Temperature({
		unit: "fahrenheit",
		amount: 100
	});
    var m2 = new ilib.Measurement.Temperature({
		unit: "kelvin",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(310.93, m2.getAmount());
}

function testTemperatureConvertKelvinToFahrenheit1() {
    var m1 = new ilib.Measurement.Temperature({
		unit: "kelvin",
		amount: 0
	});
    var m2 = new ilib.Measurement.Temperature({
		unit: "fahrenheit",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(-459.67, m2.getAmount());
}

function testTemperatureConvertKelvinToFahrenheit2() {
    var m1 = new ilib.Measurement.Temperature({
		unit: "kelvin",
		amount: 285.3
	});
    var m2 = new ilib.Measurement.Temperature({
		unit: "fahrenheit",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(53.87, m2.getAmount());
}

function testTemperatureAliasCelcius1() {
    var m = new ilib.Measurement.Temperature({
		unit: "Celsius",
		amount: 0
	});
	
	assertNotNull(m);
	
	assertEquals("celsius", m.getUnit());
}

function testTemperatureAliasCelcius2() {
    var m = new ilib.Measurement.Temperature({
		unit: "°C",
		amount: 0
	});
	
	assertNotNull(m);
	
	assertEquals("celsius", m.getUnit());
}

function testTemperatureAliasCelcius3() {
    var m = new ilib.Measurement.Temperature({
		unit: "℃",
		amount: 0
	});
	
	assertNotNull(m);
	
	assertEquals("celsius", m.getUnit());
}

function testTemperatureAliasCelcius4() {
    var m = new ilib.Measurement.Temperature({
		unit: "C",
		amount: 0
	});
	
	assertNotNull(m);
	
	assertEquals("celsius", m.getUnit());
}

function testTemperatureAliasFahrenheit1() {
    var m = new ilib.Measurement.Temperature({
		unit: "Fahrenheit",
		amount: 0
	});
	
	assertNotNull(m);
	
	assertEquals("fahrenheit", m.getUnit());
}

function testTemperatureAliasFahrenheit2() {
    var m = new ilib.Measurement.Temperature({
		unit: "°F",
		amount: 0
	});
	
	assertNotNull(m);
	
	assertEquals("fahrenheit", m.getUnit());
}

function testTemperatureAliasFahrenheit3() {
    var m = new ilib.Measurement.Temperature({
		unit: "℉",
		amount: 0
	});
	
	assertNotNull(m);
	
	assertEquals("fahrenheit", m.getUnit());
}

function testTemperatureAliasFahrenheit4() {
    var m = new ilib.Measurement.Temperature({
		unit: "F",
		amount: 0
	});
	
	assertNotNull(m);
	
	assertEquals("fahrenheit", m.getUnit());
}

function testTemperatureAliasKelvin1() {
    var m = new ilib.Measurement.Temperature({
		unit: "Kelvin",
		amount: 0
	});
	
	assertNotNull(m);
	
	assertEquals("kelvin", m.getUnit());
}

function testTemperatureAliasKelvin1() {
    var m = new ilib.Measurement.Temperature({
		unit: "K",
		amount: 0
	});
	
	assertNotNull(m);
	
	assertEquals("kelvin", m.getUnit());
}

function testGetMeasures() {
	var measures = ilib.Measurement.Temperature.getMeasures();
	var expected = [
    	"celsius",
    	"fahrenheit",
    	"kelvin"
        ];
		assertArrayEqualsIgnoringOrder(expected, measures);
}