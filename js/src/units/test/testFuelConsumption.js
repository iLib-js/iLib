/*
 * testfuelConsumption.js - test the fuelConsumption object
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

function testFuelConsumptionFuelConsumptionConstructor() {

	var m = new ilib.Measurement.FuelConsumption({
		unit: "km/liter",
		amount: 2
	});

	assertNotNull(m);
}

function testFuelConsumptionFuelConsumptionConvertKm2toMi2() {
	var m1 = new ilib.Measurement.FuelConsumption({
		unit: "km/liter",
		amount:5000
	});
	var m2 = new ilib.Measurement.FuelConsumption({
		unit: "liter/100km",
		amount: m1
	});

	assertNotNull(m1);
	assertNotNull(m2);

	assertRoughlyEquals(0.02, m2.getAmount(),0.1);
}

function testFuelConsumptionStaticConvert1() {
	var m = ilib.Measurement.FuelConsumption.convert("mpg","km/liter", 2.0);
	assertRoughlyEquals(4.70429, m, 0.01);
}

function testFuelConsumptionStaticConvertWithString() {
	var m = ilib.Measurement.FuelConsumption.convert("mpg(imp)","km/liter", 2.0);

	assertEquals(5.64962, m);
}

function testFuelConsumptionStaticConvert2() {
	var m = ilib.Measurement.FuelConsumption.convert( "liter/100km","km/liter", 2.0);

	assertEquals(50, m);
}

function testFuelConsumptionStaticConvert3() {
	var m = ilib.Measurement.FuelConsumption.convert("mpg", "liter/100km", 2.0);

	assertRoughlyEquals(117.607, m, 0.01);
}

function testFuelConsumptionStaticConvert4() {
	var m = ilib.Measurement.FuelConsumption.convert("km/liter", "liter/100km", 2.0);

	assertEquals(50, m);
}

function testFuelConsumptionStaticConvert5() {
	var m = ilib.Measurement.FuelConsumption.convert("mpg(imp)", "liter/100km", 2.0);

	assertRoughlyEquals(141.241, m, 0.001);
}

function testFuelConsumptionStaticConvert6() {
	var m = ilib.Measurement.FuelConsumption.convert( "mpg","mpg(imp)", 2.0);

	assertRoughlyEquals(1.66535, m, 0.001);
}
function testFuelConsumptionStaticConvert7() {
	var m = ilib.Measurement.FuelConsumption.convert( "km/liter","mpg(imp)", 2.0);

	assertRoughlyEquals(0.708012, m, 0.01);
}
function testFuelConsumptionStaticConvert8() {
	var m = ilib.Measurement.FuelConsumption.convert( "liter/100km","mpg(imp)", 2.0);

	assertRoughlyEquals(141.241, m, 0.01);
}

function testFuelConsumptionStaticConvert9() {
	var m = ilib.Measurement.FuelConsumption.convert("km/liter", "mpg",2.0);

	assertRoughlyEquals(0.850287, m, 0.001);
}


function testFuelConsumptionStaticConvert10() {
	var m = ilib.Measurement.FuelConsumption.convert("mpg(imp)", "mpg",2.0);

	assertRoughlyEquals(2.4019, m, 0.001);
}

function testFuelConsumptionStaticConvert11() {
	var m = ilib.Measurement.FuelConsumption.convert("liter/100km", "mpg",2.0);

	assertRoughlyEquals(117.607, m, 0.001);

}


function testFuelConsumptionGetMeasures() {
	var measures = ilib.Measurement.FuelConsumption.getMeasures();
	var expected = [
        "liter/100km",
        "mpg",
        "mpg(imp)",
        "km/liter",
    ];

	assertArrayEqualsIgnoringOrder(expected, measures);
}
