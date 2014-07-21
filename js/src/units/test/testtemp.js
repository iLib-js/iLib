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
	var m = new ilib.Measurement.Length({
		unit: "celcius",
		amount: 2
	});
	
	assertNotNull(m);
}

function testTemperatureConvertCelciusToFahrenheit1() {
	var m1 = new ilib.Measurement.Length({
		unit: "celcius",
		amount: 0
	});
	var m2 = new ilib.Measurement.Length({
		unit: "fahrenheit",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(32, m2.getAmount());
}

function testTemperatureConvertCelciusToFahrenheit2() {
	var m1 = new ilib.Measurement.Length({
		unit: "celcius",
		amount: 100
	});
	var m2 = new ilib.Measurement.Length({
		unit: "fahrenheit",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(212, m2.getAmount());
}

function testTemperatureConvertCelciusToFahrenheit3() {
	var m1 = new ilib.Measurement.Length({
		unit: "celcius",
		amount: 30
	});
	var m2 = new ilib.Measurement.Length({
		unit: "fahrenheit",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(86, m2.getAmount());
}

function testTemperatureConvertFahrenheitToCelcius1() {
	var m1 = new ilib.Measurement.Length({
		unit: "fahrenheit",
		amount: 50
	});
	var m2 = new ilib.Measurement.Length({
		unit: "celcius",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(10, m2.getAmount());
}

function testTemperatureConvertFahrenheitToCelcius2() {
	var m1 = new ilib.Measurement.Length({
		unit: "fahrenheit",
		amount: 100
	});
	var m2 = new ilib.Measurement.Length({
		unit: "celcius",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(37.77777777777778, m2.getAmount());
}

function testTemperatureConvertCelciusToKelvin1() {
	var m1 = new ilib.Measurement.Length({
		unit: "celcius",
		amount: 0
	});
	var m2 = new ilib.Measurement.Length({
		unit: "kelvin",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(273.15, m2.getAmount());
}

function testTemperatureConvertCelciusToKelvin2() {
	var m1 = new ilib.Measurement.Length({
		unit: "celcius",
		amount: 100
	});
	var m2 = new ilib.Measurement.Length({
		unit: "kelvin",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(373.15, m2.getAmount());
}

function testTemperatureConvertKelvinToCelcius1() {
	var m1 = new ilib.Measurement.Length({
		unit: "kelvin",
		amount: 0
	});
	var m2 = new ilib.Measurement.Length({
		unit: "celcius",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(-273.15, m2.getAmount());
}

function testTemperatureConvertKelvinToCelcius2() {
	var m1 = new ilib.Measurement.Length({
		unit: "kelvin",
		amount: 285.3
	});
	var m2 = new ilib.Measurement.Length({
		unit: "celcius",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(12.15, m2.getAmount());
}

function testTemperatureConvertFahrenheitToKelvin1() {
	var m1 = new ilib.Measurement.Length({
		unit: "fahrenheit",
		amount: 0
	});
	var m2 = new ilib.Measurement.Length({
		unit: "kelvin",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(255.3722222222222, m2.getAmount());
}

function testTemperatureConvertFahrenheitToKelvin2() {
	var m1 = new ilib.Measurement.Length({
		unit: "fahrenheit",
		amount: 100
	});
	var m2 = new ilib.Measurement.Length({
		unit: "kelvin",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(310.92777777777775, m2.getAmount());
}

function testTemperatureConvertKelvinToFahrenheit1() {
	var m1 = new ilib.Measurement.Length({
		unit: "kelvin",
		amount: 0
	});
	var m2 = new ilib.Measurement.Length({
		unit: "fahrenheit",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(-459.66999999999996, m2.getAmount());
}

function testTemperatureConvertKelvinToFahrenheit2() {
	var m1 = new ilib.Measurement.Length({
		unit: "kelvin",
		amount: 285.3
	});
	var m2 = new ilib.Measurement.Length({
		unit: "fahrenheit",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(53.87, m2.getAmount());
}

function testTemperatureAliasCelcius1() {
	var m = new ilib.Measurement.Length({
		unit: "Celcius",
		amount: 0
	});
	
	assertNotNull(m);
	
	assertEquals("celcius", m.getAmount());
}

function testTemperatureAliasCelcius2() {
	var m = new ilib.Measurement.Length({
		unit: "°C",
		amount: 0
	});
	
	assertNotNull(m);
	
	assertEquals("celcius", m.getAmount());
}

function testTemperatureAliasCelcius3() {
	var m = new ilib.Measurement.Length({
		unit: "℃",
		amount: 0
	});
	
	assertNotNull(m);
	
	assertEquals("celcius", m.getAmount());
}

function testTemperatureAliasCelcius4() {
	var m = new ilib.Measurement.Length({
		unit: "C",
		amount: 0
	});
	
	assertNotNull(m);
	
	assertEquals("celcius", m.getAmount());
}

function testTemperatureAliasFahrenheit1() {
	var m = new ilib.Measurement.Length({
		unit: "Fahrenheit",
		amount: 0
	});
	
	assertNotNull(m);
	
	assertEquals("fahrenheit", m.getAmount());
}

function testTemperatureAliasFahrenheit2() {
	var m = new ilib.Measurement.Length({
		unit: "°F",
		amount: 0
	});
	
	assertNotNull(m);
	
	assertEquals("fahrenheit", m.getAmount());
}

function testTemperatureAliasFahrenheit3() {
	var m = new ilib.Measurement.Length({
		unit: "℉",
		amount: 0
	});
	
	assertNotNull(m);
	
	assertEquals("fahrenheit", m.getAmount());
}

function testTemperatureAliasFahrenheit4() {
	var m = new ilib.Measurement.Length({
		unit: "F",
		amount: 0
	});
	
	assertNotNull(m);
	
	assertEquals("fahrenheit", m.getAmount());
}

function testTemperatureAliasKelvin1() {
	var m = new ilib.Measurement.Length({
		unit: "Kelvin",
		amount: 0
	});
	
	assertNotNull(m);
	
	assertEquals("kelvin", m.getAmount());
}

function testTemperatureAliasKelvin1() {
	var m = new ilib.Measurement.Length({
		unit: "K",
		amount: 0
	});
	
	assertNotNull(m);
	
	assertEquals("kelvin", m.getAmount());
}
