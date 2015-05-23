/*
 * testvolumes.js - test the volumes object
 * 
 * Copyright © 2014-2015, JEDLSoft
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

function testVolumeVolumeConstructor() {
	var m = new ilib.Measurement.Volume({
	    unit: "m3",
	    amount: 2
	});

	assertNotNull(m);
}

function testVolumeVolumeConvertGalontoQuart() {
	var m1 = new ilib.Measurement.Volume({
	    unit: "gallon",
	    amount: 5000
	});
	var m2 = new ilib.Measurement.Volume({
	    unit: "quart",
	    amount: m1
	});

	assertNotNull(m1);
	assertNotNull(m2);

	assertEquals(20000, m2.getAmount());
}

function testVolumeStaticConvert1() {
	var m = ilib.Measurement.Volume.convert("quart", "gallon", 2.0);

	assertEquals(8, m);
}

function testVolumeStaticConvert2() {
	var m = ilib.Measurement.Volume.convert("pint", "gallon", 2.0);

	assertEquals(16, m);
}

function testVolumeStaticConvert3() {
	var m = ilib.Measurement.Volume.convert("cup", "gallon", 2.0);

	assertEquals(32, m);
}

function testVolumeStaticConvert4() {
	var m = ilib.Measurement.Volume.convert("us ounce", "gallon", 2.0);

	assertEquals(256, m);
}

function testVolumeStaticConvert5() {
	var m = ilib.Measurement.Volume.convert("tbsp", "gallon", 2.0);

	assertEquals(512, m);
}

function testVolumeStaticConvert6() {
	var m = ilib.Measurement.Volume.convert("tsp", "gallon", 2.0);

	assertEquals(1536, m);
}

function testVolumeStaticConvert7() {
	var m = ilib.Measurement.Volume.convert("cubic meter", "gallon", 2.0);

	assertRoughlyEquals(0.00757082, m, 0.0001);
}
function testVolumeStaticConvert8() {
	var m = ilib.Measurement.Volume.convert("liter", "gallon", 2.0);

	assertRoughlyEquals(7.57082, m, 0.0001);
}
function testVolumeStaticConvert9() {
	var m = ilib.Measurement.Volume.convert("milliliter", "gallon", 2.0);

	assertRoughlyEquals(7570.82, m, 0.01);
}

function testVolumeStaticConvert10() {
	var m = ilib.Measurement.Volume.convert("imperial gallon", "gallon", 2.0);

	assertRoughlyEquals(1.66535, m, 0.0001);
}
function testVolumeStaticConvert11() {
	var m = ilib.Measurement.Volume.convert("imperial quart", "gallon", 2.0);

	assertRoughlyEquals(6.66139, m, 0.001);
}
function testVolumeStaticConvert12() {
	var m = ilib.Measurement.Volume.convert("imperial pint", "gallon", 2.0);

	assertRoughlyEquals(13.3228, m, 0.001);
}
function testVolumeStaticConvert13() {
	var m = ilib.Measurement.Volume.convert("imperial ounce", "gallon", 2.0);

	assertRoughlyEquals(266.456, m, 0.01);
}

function testVolumeStaticConvert14() {
	var m = ilib.Measurement.Volume.convert("imperial tbsp", "gallon", 2.0);

	assertRoughlyEquals(426.329, m, 0.01);
}
function testVolumeStaticConvert15() {
	var m = ilib.Measurement.Volume.convert("imperial tsp", "gallon", 2.0);

	assertRoughlyEquals(1278.99, m, 0.01);
}
function testVolumeStaticConvert16() {
	var m = ilib.Measurement.Volume.convert("cubic foot", "gallon", 2.0);

	assertRoughlyEquals(0.267361, m, 0.0001);
}
function testVolumeStaticConvert17() {
	var m = ilib.Measurement.Volume.convert("cubic inch", "gallon", 2.0);

	assertEquals(462, m);
}
function testVolumeStaticConvert18() {
	var m = ilib.Measurement.Volume.convert("in^3", "gallon", 2.0);

	assertEquals(462, m);
}

function testVolumeStaticConvert19() {
	var m = ilib.Measurement.Volume.convert("gallon", "quart", 2.0);

	assertEquals(0.5, m);
}

function testVolumeStaticConvert20() {
	var m = ilib.Measurement.Volume.convert("pint", "quart", 2.0);

	assertEquals(4, m);
}

function testVolumeStaticConvert21() {
	var m = ilib.Measurement.Volume.convert("cup", "quart", 2.0);

	assertEquals(8, m);
}

function testVolumeStaticConvert22() {
	var m = ilib.Measurement.Volume.convert("us ounce", "quart", 2.0);

	assertEquals(64, m);
}

function testVolumeStaticConvert23() {
	var m = ilib.Measurement.Volume.convert("tbsp", "quart", 2.0);

	assertEquals(128, m);
}

function testVolumeStaticConvert24() {
	var m = ilib.Measurement.Volume.convert("tsp", "quart", 2.0);

	assertEquals(384, m);
}

function testVolumeStaticConvert25() {
	var m = ilib.Measurement.Volume.convert("cubic meter", "quart", 2.0);

	assertRoughlyEquals(0.00189271, m, 0.0001);
}
function testVolumeStaticConvert26() {
	var m = ilib.Measurement.Volume.convert("liter", "quart", 2.0);

	assertRoughlyEquals(1.89271, m, 0.0001);
}
function testVolumeStaticConvert27() {
	var m = ilib.Measurement.Volume.convert("milliliter", "quart", 2.0);

	assertRoughlyEquals(1892.71, m, 0.01);
}

function testVolumeStaticConvert28() {
	var m = ilib.Measurement.Volume.convert("imperial gallon", "quart", 2.0);

	assertRoughlyEquals(0.416337, m, 0.0001);
}
function testVolumeStaticConvert29() {
	var m = ilib.Measurement.Volume.convert("imperial quart", "quart", 2.0);

	assertRoughlyEquals(1.66535, m, 0.0001);
}
function testVolumeStaticConvert30() {
	var m = ilib.Measurement.Volume.convert("imperial pint", "quart", 2.0);

	assertRoughlyEquals(3.3307, m, 0.001);
}
function testVolumeStaticConvert31() {
	var m = ilib.Measurement.Volume.convert("imperial ounce", "quart", 2.0);

	assertRoughlyEquals(66.6139, m, 0.001);
}

function testVolumeStaticConvert32() {
	var m = ilib.Measurement.Volume.convert("imperial tbsp", "quart", 2.0);

	assertRoughlyEquals(106.582, m, 0.01);
}
function testVolumeStaticConvert33() {
	var m = ilib.Measurement.Volume.convert("imperial tsp", "quart", 2.0);

	assertRoughlyEquals(319.747, m, 0.01);
}
function testVolumeStaticConvert34() {
	var m = ilib.Measurement.Volume.convert("cubic foot", "quart", 2.0);

	assertRoughlyEquals(0.0668403, m, 0.0001);
}
function testVolumeStaticConvert35() {
	var m = ilib.Measurement.Volume.convert("cubic inch", "quart", 2.0);

	assertRoughlyEquals(115.5, m, 0.0001);
}
function testVolumeStaticConvert36() {
	var m = ilib.Measurement.Volume.convert("in^3", "quart", 2.0);

	assertRoughlyEquals(115.5, m, 0.1);
}

function testVolumeStaticConvert37() {
	var m = ilib.Measurement.Volume.convert("gallon", "pint", 2.0);

	assertEquals(0.25, m);
}

function testVolumeStaticConvert38() {
	var m = ilib.Measurement.Volume.convert("quart", "pint", 2.0);

	assertEquals(1, m);
}

function testVolumeStaticConvert39() {
	var m = ilib.Measurement.Volume.convert("cup", "pint", 2.0);

	assertEquals(4, m);
}

function testVolumeStaticConvert40() {
	var m = ilib.Measurement.Volume.convert("us ounce", "pint", 2.0);

	assertEquals(32, m);
}

function testVolumeStaticConvert41() {
	var m = ilib.Measurement.Volume.convert("tbsp", "pint", 2.0);

	assertEquals(64, m);
}

function testVolumeStaticConvert42() {
	var m = ilib.Measurement.Volume.convert("tsp", "pint", 2.0);

	assertEquals(192, m);
}

function testVolumeStaticConvert43() {
	var m = ilib.Measurement.Volume.convert("cubic meter", "pint", 2.0);

	assertRoughlyEquals(0.000946353, m, 0.0001);
}
function testVolumeStaticConvert44() {
	var m = ilib.Measurement.Volume.convert("liter", "pint", 2.0);

	assertRoughlyEquals(0.946353, m, 0.0001);
}
function testVolumeStaticConvert45() {
	var m = ilib.Measurement.Volume.convert("milliliter", "pint", 2.0);

	assertRoughlyEquals(946.353, m, 0.01);
}

function testVolumeStaticConvert46() {
	var m = ilib.Measurement.Volume.convert("imperial gallon", "pint", 2.0);

	assertRoughlyEquals(0.208168, m, 0.0001);
}
function testVolumeStaticConvert47() {
	var m = ilib.Measurement.Volume.convert("imperial quart", "pint", 2.0);

	assertRoughlyEquals(0.832674, m, 0.0001);
}
function testVolumeStaticConvert48() {
	var m = ilib.Measurement.Volume.convert("imperial pint", "pint", 2.0);

	assertRoughlyEquals(1.66535, m, 0.001);
}
function testVolumeStaticConvert49() {
	var m = ilib.Measurement.Volume.convert("imperial ounce", "pint", 2.0);

	assertRoughlyEquals(33.307, m, 0.001);
}

function testVolumeStaticConvert50() {
	var m = ilib.Measurement.Volume.convert("imperial tbsp", "pint", 2.0);

	assertRoughlyEquals(53.2911, m, 0.01);
}
function testVolumeStaticConvert51() {
	var m = ilib.Measurement.Volume.convert("imperial tsp", "pint", 2.0);

	assertRoughlyEquals(159.873, m, 0.01);
}
function testVolumeStaticConvert52() {
	var m = ilib.Measurement.Volume.convert("cubic foot", "pint", 2.0);

	assertRoughlyEquals(0.0334201, m, 0.0001);
}
function testVolumeStaticConvert53() {
	var m = ilib.Measurement.Volume.convert("cubic inch", "pint", 2.0);

	assertRoughlyEquals(57.75, m, 0.0001);
}
function testVolumeStaticConvert54() {
	var m = ilib.Measurement.Volume.convert("in^3", "pint", 2.0);

	assertRoughlyEquals(57.75, m, 0.1);
}

function testVolumeStaticConvert61() {
	var m = ilib.Measurement.Volume.convert("gallon", "cup", 2.0);

	assertRoughlyEquals(0.125, m, 0.01);
}
function testVolumeStaticConvert62() {
	var m = ilib.Measurement.Volume.convert("cubic meter", "cup", 2.0);

	assertRoughlyEquals(0.000473176, m, 0.0001);
}
function testVolumeStaticConvert63() {
	var m = ilib.Measurement.Volume.convert("imperial pint", "cup", 2.0);

	assertRoughlyEquals(0.832674, m, 0.0001);
}
function testVolumeStaticConvert64() {
	var m = ilib.Measurement.Volume.convert("in^3", "cup", 2.0);

	assertRoughlyEquals(28.875, m, 0.1);
}

function testVolumeStaticConvert65() {
	var m = ilib.Measurement.Volume.convert("cubic inch", "cup", 2.0);

	assertRoughlyEquals(28.875, m, 0.1);
}

function testVolumeStaticConvert91() {
	var m = ilib.Measurement.Volume.convert("gallon", "us ounce", 2.0);

	assertRoughlyEquals(0.015625, m, 0.01);
}
function testVolumeStaticConvert92() {
	var m = ilib.Measurement.Volume.convert("cubic meter", "us ounce", 2.0);

	assertRoughlyEquals(5.9147e-5, m, 0.0001);
}
function testVolumeStaticConvert93() {
	var m = ilib.Measurement.Volume.convert("imperial pint", "us ounce", 2.0);

	assertRoughlyEquals(0.104084, m, 0.0001);
}
function testVolumeStaticConvert94() {
	var m = ilib.Measurement.Volume.convert("in^3", "us ounce", 2.0);

	assertRoughlyEquals(3.60938, m, 0.1);
}

function testVolumeStaticConvert95() {
	var m = ilib.Measurement.Volume.convert("cubic inch", "us ounce", 2.0);

	assertRoughlyEquals(3.60938, m, 0.1);
}

function testVolumeStaticConvert121() {
	var m = ilib.Measurement.Volume.convert("gallon", "tbsp", 2.0);

	assertRoughlyEquals(0.0078125, m, 0.01);
}
function testVolumeStaticConvert122() {
	var m = ilib.Measurement.Volume.convert("cubic meter", "tbsp", 2.0);

	assertRoughlyEquals(2.9574e-5, m, 0.0001);
}
function testVolumeStaticConvert123() {
	var m = ilib.Measurement.Volume.convert("imperial pint", "tbsp", 2.0);

	assertRoughlyEquals(0.0520421, m, 0.0001);
}
function testVolumeStaticConvert124() {
	var m = ilib.Measurement.Volume.convert("in^3", "tbsp", 2.0);

	assertRoughlyEquals(1.80469, m, 0.1);
}

function testVolumeStaticConvert125() {
	var m = ilib.Measurement.Volume.convert("cubic inch", "tbsp", 2.0);

	assertRoughlyEquals(1.80469, m, 0.1);
}

function testVolumeStaticConvert151() {
	var m = ilib.Measurement.Volume.convert("gallon", "tsp", 2.0);

	assertRoughlyEquals(0.00260417, m, 0.01);
}
function testVolumeStaticConvert152() {
	var m = ilib.Measurement.Volume.convert("cubic meter", "tsp", 2.0);

	assertRoughlyEquals(9.8578e-6, m, 0.0001);
}
function testVolumeStaticConvert153() {
	var m = ilib.Measurement.Volume.convert("imperial pint", "tsp", 2.0);

	assertRoughlyEquals(0.0173474, m, 0.0001);
}
function testVolumeStaticConvert154() {
	var m = ilib.Measurement.Volume.convert("in^3", "tsp", 2.0);

	assertRoughlyEquals(0.601563, m, 0.1);
}

function testVolumeStaticConvert155() {
	var m = ilib.Measurement.Volume.convert("cubic inch", "tsp", 2.0);

	assertRoughlyEquals(0.601563, m, 0.1);
}

function testVolumeStaticConvert181() {
	var m = ilib.Measurement.Volume.convert("gallon", "cubic meter", 2.0);

	assertRoughlyEquals(528.344, m, 0.01);
}
function testVolumeStaticConvert182() {
	var m = ilib.Measurement.Volume.convert("cubic meter", "cubic meter", 2.0);

	assertEquals(2, m);
}
function testVolumeStaticConvert183() {
	var m = ilib.Measurement.Volume
	    .convert("imperial pint", "cubic meter", 2.0);

	assertRoughlyEquals(3519.51, m, 0.1);
}
function testVolumeStaticConvert184() {
	var m = ilib.Measurement.Volume.convert("in^3", "cubic meter", 2.0);

	assertRoughlyEquals(122047, m, 1);
}

function testVolumeStaticConvert185() {
	var m = ilib.Measurement.Volume.convert("cubic inch", "cubic meter", 2.0);

	assertRoughlyEquals(122047, m, 1);
}

function testVolumeStaticConvert201() {
	var m = ilib.Measurement.Volume.convert("gallon", "liter", 2.0);

	assertRoughlyEquals(0.528344, m, 0.01);
}
function testVolumeStaticConvert202() {
	var m = ilib.Measurement.Volume.convert("cubic meter", "liter", 2.0);

	assertRoughlyEquals(0.002, m, 0.0001);
}
function testVolumeStaticConvert203() {
	var m = ilib.Measurement.Volume.convert("imperial pint", "liter", 2.0);

	assertRoughlyEquals(3.51951, m, 0.0001);
}
function testVolumeStaticConvert204() {
	var m = ilib.Measurement.Volume.convert("in^3", "liter", 2.0);

	assertRoughlyEquals(122.047, m, 0.1);
}

function testVolumeStaticConvert205() {
	var m = ilib.Measurement.Volume.convert("cubic inch", "liter", 2.0);

	assertRoughlyEquals(122.047, m, 0.1);
}

function testVolumeStaticConvert231() {
	var m = ilib.Measurement.Volume.convert("gallon", "milliliter", 2.0);

	assertRoughlyEquals(0.000528344, m, 0.01);
}
function testVolumeStaticConvert232() {
	var m = ilib.Measurement.Volume.convert("milliliter", "milliliter", 2.0);

	assertEquals(2, m);
}
function testVolumeStaticConvert233() {
	var m = ilib.Measurement.Volume.convert("imperial pint", "milliliter", 2.0);

	assertRoughlyEquals(0.00351951, m, 0.0001);
}
function testVolumeStaticConvert234() {
	var m = ilib.Measurement.Volume.convert("in^3", "milliliter", 2.0);

	assertRoughlyEquals(0.122047, m, 0.1);
}

function testVolumeStaticConvert235() {
	var m = ilib.Measurement.Volume.convert("cubic inch", "milliliter", 2.0);

	assertRoughlyEquals(0.122047, m, 0.1);
}

function testVolumeStaticConvert261() {
	var m = ilib.Measurement.Volume.convert("gallon", "imperial gallon", 2.0);

	assertRoughlyEquals(2.4019, m, 0.01);
}
function testVolumeStaticConvert262() {
	var m = ilib.Measurement.Volume.convert("milliliter", "imperial gallon",
	    2.0);

	assertRoughlyEquals(9092.18, m, 0.0001);
}
function testVolumeStaticConvert263() {
	var m = ilib.Measurement.Volume.convert("imperial pint", "imperial gallon",
	    2.0);

	assertEquals(16, m);
}
function testVolumeStaticConvert264() {
	var m = ilib.Measurement.Volume.convert("in^3", "imperial gallon", 2.0);

	assertRoughlyEquals(554.839, m, 0.1);
}

function testVolumeStaticConvert265() {
	var m = ilib.Measurement.Volume.convert("cubic inch", "imperial gallon",
	    2.0);

	assertRoughlyEquals(554.839, m, 0.1);
}

function testVolumeStaticConvert291() {
	var m = ilib.Measurement.Volume.convert("gallon", "imperial quart", 2.0);

	assertRoughlyEquals(0.600475, m, 0.01);
}
function testVolumeStaticConvert292() {
	var m = ilib.Measurement.Volume.convert("cubic meter", "imperial quart",
	    2.0);

	assertRoughlyEquals(0.00227305, m, 0.0001);
}
function testVolumeStaticConvert293() {
	var m = ilib.Measurement.Volume.convert("imperial pint", "imperial quart",
	    2.0);

	assertRoughlyEquals(4, m, 0.0001);
}
function testVolumeStaticConvert294() {
	var m = ilib.Measurement.Volume.convert("in^3", "imperial quart", 2.0);

	assertRoughlyEquals(138.71, m, 0.1);
}

function testVolumeStaticConvert295() {
	var m = ilib.Measurement.Volume
	    .convert("cubic inch", "imperial quart", 2.0);

	assertRoughlyEquals(138.71, m, 0.1);
}

function testVolumeStaticConvert311() {
	var m = ilib.Measurement.Volume.convert("gallon", "imperial pint", 2.0);

	assertRoughlyEquals(0.300238, m, 0.01);
}
function testVolumeStaticConvert312() {
	var m = ilib.Measurement.Volume.convert("milliliter", "imperial pint", 2.0);

	assertRoughlyEquals(1136.52, m, 0.01);
}
function testVolumeStaticConvert313() {
	var m = ilib.Measurement.Volume.convert("imperial pint", "imperial pint",
	    2.0);

	assertEquals(2, m);
}
function testVolumeStaticConvert314() {
	var m = ilib.Measurement.Volume.convert("in^3", "imperial pint", 2.0);

	assertRoughlyEquals(69.3549, m, 0.1);
}

function testVolumeStaticConvert315() {
	var m = ilib.Measurement.Volume.convert("cubic inch", "imperial pint", 2.0);

	assertRoughlyEquals(69.3549, m, 0.1);
}

function testVolumeStaticConvert331() {
	var m = ilib.Measurement.Volume.convert("gallon", "imperial ounce", 2.0);

	assertRoughlyEquals(0.0150119, m, 0.01);
}
function testVolumeStaticConvert332() {
	var m = ilib.Measurement.Volume.convert("imperial pint", "imperial ounce",
	    2.0);

	assertRoughlyEquals(0.1, m, 0.1);
}
function testVolumeStaticConvert333() {
	var m = ilib.Measurement.Volume
	    .convert("milliliter", "imperial ounce", 2.0);

	assertRoughlyEquals(56.8261, m, 0.001);
}
function testVolumeStaticConvert334() {
	var m = ilib.Measurement.Volume.convert("in^3", "imperial ounce", 2.0);

	assertRoughlyEquals(3.46774, m, 0.1);
}

function testVolumeStaticConvert335() {
	var m = ilib.Measurement.Volume
	    .convert("cubic inch", "imperial ounce", 2.0);

	assertRoughlyEquals(3.46774, m, 0.1);
}

function testVolumeScale1() {
	var m1 = new ilib.Measurement.Volume({
	    unit: "tsp",
	    amount: 1000
	});
	var m2 = m1.scale("uscustomary");

	assertRoughlyEquals(1.30208, m2.amount, 0.00001);
	assertEquals("gallon", m2.unit);
}

function testVolumeScale2() {
	var m1 = new ilib.Measurement.Volume({
	    unit: "Milliliter",
	    amount: 1500
	});
	var m2 = m1.scale("metric");

	assertEquals(1.5, m2.amount);
	assertEquals("liter", m2.unit);
}

function testVolumeScale3() {
	var m1 = new ilib.Measurement.Volume({
	    unit: "imperial ounce",
	    amount: 1500
	});
	var m2 = m1.scale("imperial");

	assertRoughlyEquals(9.375, m2.amount, 0.01);
	assertEquals("imperial gallon", m2.unit);
}

function testVolumeScale4() {
	var m1 = new ilib.Measurement.Volume({
	    unit: "imperial gallon",
	    amount: 100
	});
	var m2 = m1.scale("imperial");

	assertRoughlyEquals(100, m2.amount, 0.01);
	assertEquals("imperial gallon", m2.unit);
}

function testVolumeScale5() {
	var m1 = new ilib.Measurement.Volume({
	    unit: "us ounce",
	    amount: 1500
	});
	var m2 = m1.scale("uscustomary");

	assertRoughlyEquals(1.566569, m2.amount, 0.000001);
	assertEquals("cubic foot", m2.unit);
}

function testVolumeScale6() {
	var m1 = new ilib.Measurement.Volume({
	    unit: "liter",
	    amount: 1570
	});
	var m2 = m1.scale("metric");

	assertRoughlyEquals(1.57, m2.amount, 0.01);
	assertEquals("cubic meter", m2.unit);
}

function testVolumeLocalize1() {
	var m = new ilib.Measurement.Volume({
	    unit: "tsp",
	    amount: 1000
	});

	m = m.localize("en-IN");

	assertRoughlyEquals(4928.92, m.amount, 0.01);
	assertEquals("milliliter", m.unit);
}

function testVolumeLocalize2() {
	var m = new ilib.Measurement.Volume({
	    unit: "liter",
	    amount: 1000
	});

	m = m.localize("en-US");

	assertRoughlyEquals(1056.69, m.amount, 0.001);
	assertEquals("quart", m.unit);
}

function testVolumeLocalize3() {
	var m = new ilib.Measurement.Volume({
	    unit: "liter",
	    amount: 1000
	});

	m = m.localize("en-GB");

	assertRoughlyEquals(879.877, m.amount, 0.0001);
	assertEquals("imperial quart", m.unit);
}

function testVolumeLocalize5() {
	var m = new ilib.Measurement.Volume({
	    unit: "us ounce",
	    amount: 1000
	});

	m = m.localize("en-GB");

	assertRoughlyEquals(1040.84, m.amount, 0.001);
	assertEquals("imperial ounce", m.unit);
}

function testVolumeGetMeasures() {
	var m = new ilib.Measurement.Volume({unit: "liter", amount: 1}); // preload for dynamic tests
	var measures = ilib.Measurement.Volume.getMeasures();
	var expected = [
	    "gallon",
	    "quart",
	    "pint",
	    "cup",
	    "us ounce",
	    "tbsp",
	    "tsp",
	    "cubic meter",
	    "liter",
	    "milliliter",
	    "imperial gallon",
	    "imperial quart",
	    "imperial pint",
	    "imperial ounce",
	    "imperial tbsp",
	    "imperial tsp",
	    "cubic foot",
	    "cubic inch"
	];

	assertArrayEqualsIgnoringOrder(expected, measures);
}
