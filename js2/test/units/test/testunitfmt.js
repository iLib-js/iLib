/*
 * testunits.js - test the units formatter object
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

var UnitFmt = require("./../lib/UnitFmt.js");
var MeasurementFactory = require("./../lib/MeasurementFactory.js");

function testUnitFormat1() {
	var m = MeasurementFactory({
		amount: 10,
		unit: "micrometer"
	});
	var uf = new UnitFmt({autoConvert:false});
	var str = uf.format(m);
	assertEquals("10 micrometers", str);
}

function testUnitFormatWithScale1() {
	var m = MeasurementFactory({
		amount: 3000,
		unit: "meter"
	});
	var uf = new UnitFmt({autoConvert:false});  
	var str = uf.format(m);	
	assertEquals("3 kilometers", str);
}

function testUnitFormatWithoutScale1() {
	var m = MeasurementFactory({
		amount: 3000,
		unit: "meter"
	});
	var uf = new UnitFmt({autoScale: false, autoConvert:false}); 
	var str = uf.format(m);	
	assertEquals("3,000 meters", str);
}

function testUnitFormatWithScale2() {
	var m = MeasurementFactory({
		unit: "bit",
		amount: 1024
	});

	var uf = new UnitFmt({autoConvert:false});  
	var str = uf.format(m);	
	assertEquals("1 kilobit", str);
}

function testUnitFormatWithoutScale2() {
	var m = MeasurementFactory({
		unit: "bit",
		amount: 1048576000
	});

	var uf = new UnitFmt({autoScale: false,autoConvert:false}); 
	var str = uf.format(m);	
	assertEquals("1,048,576,000 bits", str);
}

function testUnitFormatWithScale3() {
	var m = MeasurementFactory({
		unit: "mcg",
		amount: 10000000
	});

	var uf = new UnitFmt({autoConvert:false});  
	var str = uf.format(m);	
	assertEquals("10 grams", str);
}

function testUnitFormatWithoutScale3() {
	var m = MeasurementFactory({
		unit: "mcg",
		amount: 10000000
	});

	var uf = new UnitFmt({autoScale: false,autoConvert:false}); 
	var str = uf.format(m);	
	assertEquals("10,000,000 micrograms", str);
}

function testUnitFormatWithMeasurementSystem3() {
	var m = MeasurementFactory({
		unit: "mcg",
		amount: 10000000
	});

	var uf = new UnitFmt({
		autoScale: true,
		measurementSystem: "metric",
                autoConvert:false
	}); 
	var str = uf.format(m);	
	assertEquals("10 grams", str);
}

function testUnitFormatWithScale4() {
	var m1 = MeasurementFactory({
		unit: "hectare",
		amount: 100
	});
	var uf = new UnitFmt({autoConvert:false});  
	var str = uf.format(m1);	
	assertEquals("1 square kilometer", str);
}

function testUnitFormatWithoutScale4() {
	var m1 = MeasurementFactory({
		unit: "hectare",
		amount: 100
	});

	var uf = new UnitFmt({autoScale: false, autoConvert:false}); 
	var str = uf.format(m1);	
	assertEquals("100 hectares", str);
}

function testUnitFormatWithMeasurementSystem4() {
	var m = MeasurementFactory({
		unit: "square meter",
		amount: 10000
	});

	var uf = new UnitFmt({
		autoScale: true,
		measurementSystem: "metric",
                autoConvert:false
	}); 
	var str = uf.format(m);	
	assertEquals("1 hectare", str);
}

function testUnitFormatWithScale5() {
	var m1 = MeasurementFactory({
		unit: "watt hour",
		amount: 10000
	});
	var uf = new UnitFmt({autoConvert:false});  
	var str = uf.format(m1);
	assertEquals("10 kilowatt-hours", str);
}

function testUnitFormatWithoutScale5() {
	var m1 = MeasurementFactory({
		unit: "kilowatt hour",
		amount: 1233453
	});

	var uf = new UnitFmt({autoScale: false, autoConvert:false}); 
	var str = uf.format(m1);	
	assertEquals("1,233,453 kilowatt-hours", str);
}

function testUnitFormatWithMeasurementSystem5() {
	var m1 = MeasurementFactory({
		unit: "kilowatt hour",
		amount: 1233453
	});

	var uf = new UnitFmt({
		autoScale: true,
		measurementSystem: "metric",
                autoConvert:false
	}); 
	var str = uf.format(m1);	
	assertEquals("1.233453 gigawatt hour", str);
}

function testUnitFormatWithScale6() {
	var m = MeasurementFactory({
		unit: "km/h",
		amount: 6000
	});
	var uf = new UnitFmt({autoConvert:false}); 
	var str = uf.format(m);
	assertEquals("1.666668 kilometer per second", str);
}

function testUnitFormatWithoutScale6() {
	var m = MeasurementFactory({
		unit: "km/h",
		amount: 36
	});

	var uf = new UnitFmt({autoScale: false, autoConvert:false}); 
	var str = uf.format(m);	
	assertEquals("36 kilometers per hour", str);
}

function testUnitFormatWithMeasurementSystem6() {
	var m1 = MeasurementFactory({
		unit: "feet/sec",
		amount: 10
	});

	var uf = new UnitFmt({
		autoScale: true,
		measurementSystem: "imperial",
                autoConvert:false
	}); 
	var str = uf.format(m1);	
	assertEquals("5.92484 knots", str);
}

function testUnitFormatWithScale7() {
	var m = MeasurementFactory({
		unit: "ms",
		amount: 12000
	});

	var uf = new UnitFmt({autoConvert:false}); 
	var str = uf.format(m);
	assertEquals("12 seconds", str);
}

function testUnitFormatWithoutScale7() {
	var m = MeasurementFactory({
		unit: "ms",
		amount: 12000
	});

	var uf = new UnitFmt({autoScale: false,autoConvert:false}); 
	var str = uf.format(m);	
	assertEquals("12,000 milliseconds", str);
}

function testUnitFormatWithScale8() {
	var m1 = MeasurementFactory({
		unit: "Milliliter",
		amount: 1500
	});

	var uf = new UnitFmt({autoConvert:false}); 
	var str = uf.format(m1);
	assertEquals("1.5 liter", str);
}

function testUnitFormatWithoutScale8() {
	var m = MeasurementFactory({
		unit: "Milliliter",
		amount: 1500
	});

	var uf = new UnitFmt({autoScale: false,autoConvert:false});
	var str = uf.format(m);	
	assertEquals("1,500 milliliters", str);
}

function testUnitFormatWithMeasurementSystem8() {
	var m1 = MeasurementFactory({
		unit: "ounce",
		amount: 100
	});

	var uf = new UnitFmt({
		autoScale: true,
		measurementSystem: "imperial",
                autoConvert:false
	}); 
	var str = uf.format(m1);	
	assertEquals("6.25 pounds", str);
}

function testUnitFormatWithScale9() {
	var m1 = MeasurementFactory({
		unit: "km/liter",
		amount:5000
	});

	var uf = new UnitFmt({autoConvert:false}); 
	var str = uf.format(m1);
	assertEquals("5,000 kilometers per liter", str);
}

function testUnitFormatWithScale10() {
	var m1 = MeasurementFactory({
		unit: "kelvin",
		amount: 285.3
	});

	var uf = new UnitFmt({autoConvert:false}); 
	var str = uf.format(m1);
	assertEquals("285.3 kelvins", str);
}

function testUnitFormatWithScale11() {
	var m1 = MeasurementFactory({
		unit: "krunghoonfoop",
		amount: 2
	});

	var uf = new UnitFmt({autoConvert:false}); 
	var str = uf.format(m1);
	assertEquals("2 krunghoonfoop", str);
}
/*Area*/

function testUnitFormatArea1() {
    var m1 = MeasurementFactory({
        unit: "square centimeter",
        amount: 2
    });

    var uf = new UnitFmt({autoConvert:false});
    var str = uf.format(m1);
    assertEquals("2 square centimeters", str);
}

function testUnitFormatArea2() {
    var m1 = MeasurementFactory({
        unit: "square centimeter",
        amount: 2
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false});
    var str = uf.format(m1);
    assertEquals("2 квадратных сантиметра", str);
}

function testUnitFormatArea3() {
    var m1 = MeasurementFactory({
        unit: "square centimeter",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false});
    var str = uf.format(m1);
    assertEquals("1 000 квадратных сантиметров", str);
}

function testUnitFormatArea4() {
    var m1 = MeasurementFactory({
        unit: "square centimeter",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ko-KO",autoConvert:false});
    var str = uf.format(m1);
    assertEquals("1,000제곱센티미터", str);
}

function testUnitFormatArea5() {
    var m1 = MeasurementFactory({
        unit: "square centimeter",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"fr-FR",autoConvert:false});
    var str = uf.format(m1);
    assertEquals("1 000 centimètres carrés", str);
}

function testUnitFormatArea5DE() {
    var m1 = MeasurementFactory({
        unit: "square centimeter",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"de-DE",autoConvert:false});
    var str = uf.format(m1);
    assertEquals("1.000 Quadratzentimeter", str);
}

function testUnitFormatArea6() {
    var m1 = MeasurementFactory({
        unit: "acre",
        amount: 2
    });

    var uf = new UnitFmt({autoConvert:false});
    var str = uf.format(m1);
    assertEquals("2 acres", str);
}

function testUnitFormatArea7() {
    var m1 = MeasurementFactory({
        unit: "square centimeter",
        amount: 2
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("2 квадратных сантиметра", str);
}

function testUnitFormatArea8() {
    var m1 = MeasurementFactory({
        unit: "hectare",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1 000 гектар", str);
}

function testUnitFormatArea9() {
    var m1 = MeasurementFactory({
        unit: "square yard",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ko-KO",autoConvert:false});
    var str = uf.format(m1);
    assertEquals("1,000제곱야드", str);
}

function testUnitFormatArea10() {
    var m1 = MeasurementFactory({
        unit: "square yard",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"fr-FR",autoConvert:false});
    var str = uf.format(m1);
    assertEquals("1 000 yards carrés", str);
}


/*DigitalStorage*/
function testUnitFormatDigitalStorage1() {
    var m1 = MeasurementFactory({
        unit: "kilobyte",
        amount: 2
    });

    var uf = new UnitFmt({autoConvert:false});
    var str = uf.format(m1);
    assertEquals("2 kilobytes", str);
}

function testUnitFormatDigitalStorage2() {
    var m1 = MeasurementFactory({
        unit: "kilobyte",
        amount: 2
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false});
    var str = uf.format(m1);
    assertEquals("2 килобайта", str);
}

function testUnitFormatDigitalStorage4() {
    var m1 = MeasurementFactory({
        unit: "kilobyte",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ko-KO",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1,000킬로바이트", str);
}

function testUnitFormatDigitalStorage5() {
    var m1 = MeasurementFactory({
        unit: "kilobyte",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"fr-FR",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1 000 kilooctets", str);
}

function testUnitFormatDigitalStorage5DE() {
    var m1 = MeasurementFactory({
        unit: "kilobyte",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"de-DE",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1.000 Kilobytes", str);
}

function testUnitFormatDigitalStorage6() {
    var m1 = MeasurementFactory({
        unit: "gigabit",
        amount: 2
    });

    var uf = new UnitFmt({autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("2 gigabits", str);
}

function testUnitFormatDigitalStorage7() {
    var m1 = MeasurementFactory({
        unit: "gigabit",
        amount: 2
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("2 гигабита", str);
}

function testUnitFormatDigitalStorage8() {
    var m1 = MeasurementFactory({
        unit: "bit",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1 000 бит", str);
}

function testUnitFormatDigitalStorage9() {
    var m1 = MeasurementFactory({
        unit: "gigabit",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ko-KO",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1,000기가비트", str);
}

function testUnitFormatDigitalStorage10() {
    var m1 = MeasurementFactory({
        unit: "gigabit",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"fr-FR",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1 000 gigabits", str);;
}


function testUnitFormatEnergy1() {
    var m1 = MeasurementFactory({
        unit: "joule",
        amount: 2
    });

    var uf = new UnitFmt({autoConvert:false});
    var str = uf.format(m1);
    assertEquals("2 joules", str);
}

function testUnitFormatEnergy2() {
    var m1 = MeasurementFactory({
        unit: "joule",
        amount: 2
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false});
    var str = uf.format(m1);
    assertEquals("2 джоуля", str);
}

function testUnitFormatEnergy3() {
    var m1 = MeasurementFactory({
        unit: "joule",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:true});
    var str = uf.format(m1);
    assertEquals("1 килоджоуль", str);
}

function testUnitFormatEnergy4() {
    var m1 = MeasurementFactory({
        unit: "joule",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ko-KO",autoConvert:false,autoScale:true});
    var str = uf.format(m1);
    assertEquals("1킬로줄", str);
}

function testUnitFormatEnergy5() {
    var m1 = MeasurementFactory({
        unit: "joule",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"fr-FR",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1 000 joules", str);
}

function testUnitFormatEnergy6() {
    var m1 = MeasurementFactory({
        unit: "kilowatt hour",
        amount: 2
    });

    var uf = new UnitFmt({autoConvert:false,autoScale:false,length:"short"});
    var str = uf.format(m1);
    assertEquals("2 kWh", str);
}

function testUnitFormatEnergy7() {
    var m1 = MeasurementFactory({
        unit: "kilowatt hour",
        amount: 2
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("2 киловатт-часа", str);
}

function testUnitFormatEnergy8() {
    var m1 = MeasurementFactory({
        unit: "calorie",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1 000 калорий", str);
}

function testUnitFormatEnergy9() {
    var m1 = MeasurementFactory({
        unit: "gigabit",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ko-KO",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1,000기가비트", str);
}

function testUnitFormatEnergy10() {
    var m1 = MeasurementFactory({
        unit: "joule",
        amount: 2000
    });

    var uf = new UnitFmt({locale:"fr-FR",autoConvert:true,autoScale:true});
    var str = uf.format(m1);
    assertEquals("2 kilojoules", str);;
}


function testUnitFormatFuelConsumption1() {
    var m1 = MeasurementFactory({
        unit: "km/liter",
        amount: 2
    });

    var uf = new UnitFmt({autoConvert:false});
    var str = uf.format(m1);
    assertEquals("2 kilometers per liter", str);
}

function testUnitFormatFuelConsumption2() {
    var m1 = MeasurementFactory({
        unit: "mpg",
        amount: 2
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false});
    var str = uf.format(m1);
    assertEquals("2 мили на галлон", str);
}

function testUnitFormatFuelConsumption3() {
    var m1 = MeasurementFactory({
        unit: "mpg",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:true,length:"short"});
    var str = uf.format(m1);
    assertEquals("425,144 km/l", str);
}

function testUnitFormatFuelConsumption4() {
    var m1 = MeasurementFactory({
        unit: "km/liter",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ko-KO",autoConvert:false,autoScale:true});
    var str = uf.format(m1);
    assertEquals("1,000 kilometers per liter", str);
}

function testUnitFormatFuelConsumption5() {
    var m1 = MeasurementFactory({
        unit: "mpg",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"fr-FR",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1 000 miles par gallon", str);
}

function testUnitFormatFuelConsumption5DE() {
    var m1 = MeasurementFactory({
        unit: "mpg",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"de-DE",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1.000 Meilen pro Gallone", str);
}

function testUnitFormatLength1() {
    var m1 = MeasurementFactory({
        unit: "inch",
        amount: 2
    });

    var uf = new UnitFmt({autoConvert:false});
    var str = uf.format(m1);
    assertEquals("2 inches", str);
}

function testUnitFormatLength2() {
    var m1 = MeasurementFactory({
        unit: "inch",
        amount: 2
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false});
    var str = uf.format(m1);
    assertEquals("2 дюйма", str);
}

function testUnitFormatLength3() {
    var m1 = MeasurementFactory({
        unit: "meter",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:true,length:"short"});
    var str = uf.format(m1);
    assertEquals("1 км", str);
}

function testUnitFormatLength4() {
    var m1 = MeasurementFactory({
        unit: "meter",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ko-KO",autoConvert:false,autoScale:true});
    var str = uf.format(m1);
    assertEquals("1킬로미터", str);
}

function testUnitFormatLength5() {
    var m1 = MeasurementFactory({
        unit: "meter",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"fr-FR",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1 000 mètres", str);
}

function testUnitFormatLength5DE() {
    var m1 = MeasurementFactory({
        unit: "meter",
        amount: 1234.45
    });

    var uf = new UnitFmt({locale:"de-DE",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1.234,45 Meter", str);
}

function testUnitFormatLength6() {
    var m1 = MeasurementFactory({
        unit: "mile",
        amount: 2000
    });

    var uf = new UnitFmt({locale:"fr-FR",autoConvert:true,autoScale:true,length:"short"});
    var str = uf.format(m1);
    assertEquals("3,21868 Mm", str);
}

function testUnitFormatLength7() {
    var m1 = MeasurementFactory({
        unit: "mile",
        amount: 2
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("2 мили", str);
}

function testUnitFormatLength8() {
    var m1 = MeasurementFactory({
        unit: "centimeter",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1 000 сантиметров", str);
}

function testUnitFormatLength9() {
    var m1 = MeasurementFactory({
        unit: "centimeter",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ko-KO",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1,000센티미터", str);
}

function testUnitFormatLength10() {
    var m1 = MeasurementFactory({
        unit: "centimeter",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"fr-FR",autoConvert:true,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1 000 centimètres", str);
}

function testUnitFormatMass1() {
    var m1 = MeasurementFactory({
        unit: "microgram",
        amount: 2
    });

    var uf = new UnitFmt({autoConvert:false});
    var str = uf.format(m1);
    assertEquals("2 micrograms", str);
}

function testUnitFormatMass2() {
    var m1 = MeasurementFactory({
        unit: "microgram",
        amount: 2
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false});
    var str = uf.format(m1);
    assertEquals("2 микрограмма", str);
}

function testUnitFormatMass3() {
    var m1 = MeasurementFactory({
        unit: "microgram",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:true,length:"short"});
    var str = uf.format(m1);
    assertEquals("1 мг", str);
}

function testUnitFormatMass4() {
    var m1 = MeasurementFactory({
        unit: "microgram",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ko-KO",autoConvert:false,autoScale:true});
    var str = uf.format(m1);
    assertEquals("1밀리그램", str);
}

function testUnitFormatMass5() {
    var m1 = MeasurementFactory({
        unit: "microgram",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"fr-FR",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1 000 microgrammes", str);
}

function testUnitFormatMass6() {
    var m1 = MeasurementFactory({
        unit: "pound",
        amount: 2000
    });

    var uf = new UnitFmt({locale:"fr-FR",autoConvert:false,autoScale:false,length:"short"});
    var str = uf.format(m1);
    assertEquals("2 000 lb", str);
}

function testUnitFormatMass5DE() {
    var m1 = MeasurementFactory({
        unit: "microgram",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"de-DE",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1.000 Mikrogramm", str);
}

function testUnitFormatMass6DE() {
    var m1 = MeasurementFactory({
        unit: "pound",
        amount: 2000
    });

    var uf = new UnitFmt({locale:"de-DE",autoConvert:false,autoScale:false,length:"short"});
    var str = uf.format(m1);
    assertEquals("2.000 lb", str);
}

function testUnitFormatMass7() {
    var m1 = MeasurementFactory({
        unit: "stone",
        amount: 2
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("2 st", str);
}

function testUnitFormatMass8() {
    var m1 = MeasurementFactory({
        unit: "metric ton",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1 000 тонн", str);
}

function testUnitFormatMass9() {
    var m1 = MeasurementFactory({
        unit: "metric ton",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ko-KO",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1,000메트릭 톤", str);
}

function testUnitFormatMass10() {
    var m1 = MeasurementFactory({
        unit: "gram",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"fr-FR",autoConvert:true,autoScale:true});
    var str = uf.format(m1);
    assertEquals("1 kilogramme", str);
}


function testUnitFormatSpeed1() {
    var m1 = MeasurementFactory({
        unit: "kilometer/hour",
        amount: 2
    });

    var uf = new UnitFmt({autoConvert:false});
    var str = uf.format(m1);
    assertEquals("2 kilometers per hour", str);
}

function testUnitFormatSpeed2() {
    var m1 = MeasurementFactory({
        unit: "kilometer/hour",
        amount: 2
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false});
    var str = uf.format(m1);
    assertEquals("2 километра в час", str);
}

function testUnitFormatSpeed3() {
    var m1 = MeasurementFactory({
        unit: "kilometer/hour",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:true,length:"short"});
    var str = uf.format(m1);
    assertEquals("277,778 м/с", str);
}

function testUnitFormatSpeed4() {
    var m1 = MeasurementFactory({
        unit: "feet/second",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ko-KO",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1,000 feet per second", str);
}

function testUnitFormatSpeed5() {
    var m1 = MeasurementFactory({
        unit: "miles/hour",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"fr-FR",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1 000 milles anglais par heure", str);
}

function testUnitFormatSpeed5DE() {
    var m1 = MeasurementFactory({
        unit: "miles/hour",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"de-DE",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1.000 Meilen pro Stunde", str);
}

function testUnitFormatSpeed6() {
    var m1 = MeasurementFactory({
        unit: "meters/second",
        amount: 2000
    });

    var uf = new UnitFmt({locale:"fr-FR",autoConvert:true,autoScale:true,length:"short"});
    var str = uf.format(m1);
    assertEquals("2  km/s", str);
}

function testUnitFormatSpeed7() {
    var m1 = MeasurementFactory({
        unit: "miles/hour",
        amount: 2
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("2 мили в час", str);
}

function testUnitFormatSpeed8() {
    var m1 = MeasurementFactory({
        unit: "knot",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false,length:"short"});
    var str = uf.format(m1);
    assertEquals("1 000 kn", str);
}

function testUnitFormatSpeed9() {
    var m1 = MeasurementFactory({
        unit: "miles/hour",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ko-KO",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("시속 1,000마일", str);
}

function testUnitFormatSpeed10() {
    var m1 = MeasurementFactory({
        unit: "miles/hour",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"fr-FR",autoConvert:true,autoScale:true,length:"short"});
    var str = uf.format(m1);
    assertEquals("447,03924652 m/s", str);
}

function testUnitFormatSpeed10DE() {
    var m1 = MeasurementFactory({
        unit: "miles/hour",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"de-DE",autoConvert:true,autoScale:true,length:"short"});
    var str = uf.format(m1);
    assertEquals("447,03924652 m/s", str);
}

function testUnitFormatTemperature1() {
    var m1 = MeasurementFactory({
        unit: "celsius",
        amount: 2
    });

    var uf = new UnitFmt({autoConvert:false});
    var str = uf.format(m1);
    assertEquals("2 degrees Celsius", str);
}

function testUnitFormatTemperature2() {
    var m1 = MeasurementFactory({
        unit: "Celsius",
        amount: 2
    });

    var uf = new UnitFmt({autoConvert:false,length:"short"});
    var str = uf.format(m1);
    assertEquals("2°C", str);
}

function testUnitFormatTemperature3() {
    var m1 = MeasurementFactory({
        unit: "Celsius",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:true,length:"long"});
    var str = uf.format(m1);
    assertEquals("1 000градусов Цельсия", str);
}

function testUnitFormatTemperature4() {
    var m1 = MeasurementFactory({
        unit: "kelvin",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ko-KO",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1,000켈빈", str);
}

function testUnitFormatTemperature5() {
    var m1 = MeasurementFactory({
        unit: "kelvin",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"en-US",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1,000 kelvins", str);
}

function testUnitFormatTemperature6() {
    var m1 = MeasurementFactory({
        unit: "fahrenheit",
        amount: 2000
    });

    var uf = new UnitFmt({locale:"fr-FR",autoConvert:true,autoScale:true,length:"short",maxFractionDigits:11});
    var str = uf.format(m1);
    assertEquals("1 093,33333333333 °C", str);
}

function testUnitFormatTemperature7() {
    var m1 = MeasurementFactory({
        unit: "fahrenheit",
        amount: 2
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false,length:"short"});
    var str = uf.format(m1);
    assertEquals("2°F", str);
}

function testUnitFormatTemperature8() {
    var m1 = MeasurementFactory({
        unit: "kelvin",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false,length:"short"});
    var str = uf.format(m1);
    assertEquals("1 000 K", str);
}

function testUnitFormatTemperature9() {
    var m1 = MeasurementFactory({
        unit: "fahrenheit",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ko-KO",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("화씨 1,000도", str);
}

function testUnitFormatTemperature10() {
    var m1 = MeasurementFactory({
        unit: "celsius",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"fr-FR",length:"long"});
    var str = uf.format(m1);
    assertEquals("1 000 degrés Celsius", str);
}

function testUnitFormatTime1() {
    var m1 = MeasurementFactory({
        unit: "nanosecond",
        amount: 2
    });

    var uf = new UnitFmt({autoConvert:false});
    var str = uf.format(m1);
    assertEquals("2 nanoseconds", str);
}

function testUnitFormatTime2() {
    var m1 = MeasurementFactory({
        unit: "nanoseconds",
        amount: 2
    });

    var uf = new UnitFmt({autoConvert:false,length:"short"});
    var str = uf.format(m1);
    assertEquals("2 ns", str);
}

function testUnitFormatTime3() {
    var m1 = MeasurementFactory({
        unit: "nanoseconds",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:true,length:"short"});
    var str = uf.format(m1);
    assertEquals("1 мкс", str);
}

function testUnitFormatTime4() {
    var m1 = MeasurementFactory({
        unit: "millisecond",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ko-KO",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1,000밀리초", str);
}

function testUnitFormatTime5() {
    var m1 = MeasurementFactory({
        unit: "millisecond",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"fr-FR",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1 000 millisecondes", str);
}

function testUnitFormatTime6() {
    var m1 = MeasurementFactory({
        unit: "week",
        amount: 2000
    });

    var uf = new UnitFmt({locale:"fr-FR",autoConvert:true,autoScale:true,length:"short"});
    var str = uf.format(m1);
    assertEquals("3,83308 decades", str);
}

function testUnitFormatTime7() {
    var m1 = MeasurementFactory({
        unit: "year",
        amount: 2
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false,length:"short"});
    var str = uf.format(m1);
    assertEquals("2 г.", str);
}

function testUnitFormatTime8() {
    var m1 = MeasurementFactory({
        unit: "minute",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false,length:"short"});
    var str = uf.format(m1);
    assertEquals("1 000 мин", str);
}

function testUnitFormatTime9() {
    var m1 = MeasurementFactory({
        unit: "minute",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ko-KO",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1,000분", str);
}

function testUnitFormatTime10() {
    var m1 = MeasurementFactory({
        unit: "month",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"fr-FR",length:"long",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1 000 mois", str);
}

function testUnitFormatVolume1() {
    var m1 = MeasurementFactory({
        unit: "tsp",
        amount: 2
    });

    var uf = new UnitFmt({autoConvert:false});
    var str = uf.format(m1);
    assertEquals("2 teaspoons", str);
}

function testUnitFormatVolume2() {
    var m1 = MeasurementFactory({
        unit: "tsp",
        amount: 2
    });

    var uf = new UnitFmt({autoConvert:false,length:"short"});
    var str = uf.format(m1);
    assertEquals("2 tsp", str);
}

function testUnitFormatVolume3() {
    var m1 = MeasurementFactory({
        unit: "ounce",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false,length:"short"});
    var str = uf.format(m1);
    assertEquals("1 000 унц.", str);
}

function testUnitFormatVolume4() {
    var m1 = MeasurementFactory({
        unit: "millisecond",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ko-KO",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1,000밀리초", str);
}

function testUnitFormatVolume5() {
    var m1 = MeasurementFactory({
        unit: "liter",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"fr-FR",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1 000 litres", str);
}

function testUnitFormatVolume6() {
    var m1 = MeasurementFactory({
        unit: "liter",
        amount: 2000
    });

    var uf = new UnitFmt({locale:"fr-FR",autoConvert:true,autoScale:true,length:"short"});
    var str = uf.format(m1);
    assertEquals("2 m³", str);
}

function testUnitFormatVolume7() {
    var m1 = MeasurementFactory({
        unit: "gallon",
        amount: 1
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false,length:"long"});
    var str = uf.format(m1);
    assertEquals("1 галлон", str);
}

function testUnitFormatVolume8() {
    var m1 = MeasurementFactory({
        unit: "gallon",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ru-RU",autoConvert:false,autoScale:false,length:"short"});
    var str = uf.format(m1);
    assertEquals("1 000 гал.", str);
}

function testUnitFormatVolume9() {
    var m1 = MeasurementFactory({
        unit: "cubic foot",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"ko-KO",autoConvert:false,autoScale:false});
    var str = uf.format(m1);
    assertEquals("1,000세제곱피트", str);
}

function testUnitFormatVolume10() {
    var m1 = MeasurementFactory({
        unit: "cubic foot",
        amount: 1000
    });

    var uf = new UnitFmt({locale:"fr-FR",length:"long"});
    var str = uf.format(m1);
    assertEquals("28,3168 mètres cubes", str);
}

function testUnitFormatVolume11() {
    var m1 = MeasurementFactory({
        unit: "cubic foot",
        amount: 1000
    });

    var uf = new UnitFmt({length:"long"});
    var str = uf.format(m1);
    assertEquals("1,000 cubic feet", str);
}

function testUnitFormatVolume12() {
    var m1 = MeasurementFactory({
        unit: "cubic foot",
        amount: 1000
    });

    var uf = new UnitFmt({length:"short"});
    var str = uf.format(m1);
    assertEquals("1,000 ft³", str);
}

function testUnitFormatArea11() {
    var m1 = MeasurementFactory({
        unit: "square centimeter",
        amount: 1000
    });

    var uf = new UnitFmt({length:"long",autoConvert:false,autoScale: false});
    var str = uf.format(m1);
    assertEquals("1,000 square centimeters", str);
}

function testUnitFormatArea12() {
    var m1 = MeasurementFactory({
        unit: "square centimeter",
        amount: 1000
    });

    var uf = new UnitFmt({length:"short",autoConvert:false,autoScale: false});
    var str = uf.format(m1);
    assertEquals("1,000 cm²", str);
}

function testUnitFormatDigitalStorage11() {
    var m1 = MeasurementFactory({
        unit: "kilobyte",
        amount: 1000
    });

    var uf = new UnitFmt({length:"long",autoConvert:false,autoScale: false});
    var str = uf.format(m1);
    assertEquals("1,000 kilobytes", str);
}

function testUnitFormatDigitalStorage12() {
    var m1 = MeasurementFactory({
        unit: "kilobyte",
        amount: 1000
    });

    var uf = new UnitFmt({length:"short",autoConvert:false,autoScale: false});
    var str = uf.format(m1);
    assertEquals("1,000 kB", str);
}
function testUnitFormatEnergy11() {
    var m1 = MeasurementFactory({
        unit: "kilowatt hour",
        amount: 1000
    });

    var uf = new UnitFmt({length:"long",autoConvert:false,autoScale: false});
    var str = uf.format(m1);
    assertEquals("1,000 kilowatt-hours", str);
}

function testUnitFormatEnergy12() {
    var m1 = MeasurementFactory({
        unit: "kilowatt hour",
        amount: 1000
    });

    var uf = new UnitFmt({length:"short",autoConvert:false,autoScale: false});
    var str = uf.format(m1);
    assertEquals("1,000 kWh", str);
}

function testUnitFormatFuelConsumption11() {
    var m1 = MeasurementFactory({
        unit: "km/liter",
        amount: 1000
    });

    var uf = new UnitFmt({length:"long",autoConvert:false,autoScale: false});
    var str = uf.format(m1);
    assertEquals("1,000 kilometers per liter", str);
}

function testUnitFormatFuelConsumption12() {
    var m1 = MeasurementFactory({
        unit: "km/liter",
        amount: 1000
    });

    var uf = new UnitFmt({length:"short",autoConvert:false,autoScale: false});
    var str = uf.format(m1);
    assertEquals("1,000 km/l", str);
}
function testUnitFormatLength11() {
    var m1 = MeasurementFactory({
        unit: "decimeter",
        amount: 1000
    });

    var uf = new UnitFmt({length:"long",autoConvert:false,autoScale: false});
    var str = uf.format(m1);
    assertEquals("1,000 decimeters", str);
}

function testUnitFormatLength12() {
    var m1 = MeasurementFactory({
        unit: "decimeter",
        amount: 1000
    });

    var uf = new UnitFmt({length:"short",autoConvert:false,autoScale: false});
    var str = uf.format(m1);
    assertEquals("1,000 dm", str);
}
function testUnitFormatSpeed11() {
    var m1 = MeasurementFactory({
        unit: "kilometer/second",
        amount: 1000
    });

    var uf = new UnitFmt({length:"long",autoConvert:false,autoScale: false});
    var str = uf.format(m1);
    assertEquals("1,000 kilometers per second", str);
}

function testUnitFormatSpeed12() {
    var m1 = MeasurementFactory({
        unit: "kilometer/second",
        amount: 1000
    });

    var uf = new UnitFmt({length:"short",autoConvert:false,autoScale: false});
    var str = uf.format(m1);
    assertEquals("1,000  km/s", str);
}
function testUnitFormatTemperature11() {
    var m1 = MeasurementFactory({
        unit: "fahrenheit",
        amount: 1000
    });

    var uf = new UnitFmt({length:"long",autoConvert:false,autoScale: false});
    var str = uf.format(m1);
    assertEquals("1,000 degrees Fahrenheit", str);
}

function testUnitFormatTemperature12() {
    var m1 = MeasurementFactory({
        unit: "fahrenheit",
        amount: 1000
    });

    var uf = new UnitFmt({length:"short",autoConvert:false,autoScale: false});
    var str = uf.format(m1);
    assertEquals("1,000°F", str);
}
function testUnitFormatTime11() {
    var m1 = MeasurementFactory({
        unit: "millisecond",
        amount: 1000
    });

    var uf = new UnitFmt({length:"long",autoConvert:false,autoScale: false});
    var str = uf.format(m1);
    assertEquals("1,000 milliseconds", str);
}

function testUnitFormatTime12() {
    var m1 = MeasurementFactory({
        unit: "millisecond",
        amount: 1000
    });

    var uf = new UnitFmt({length:"short",autoConvert:false,autoScale: false});
    var str = uf.format(m1);
    assertEquals("1,000 ms", str);
}

function testUnitFormatLength13() {
    var m1 = MeasurementFactory({
        unit: "km",
        amount: 12345000000000000000000000000.0
    });

    var uf = new UnitFmt({
        length:"short",
        autoConvert:false,
        autoScale: false,
        maxFractionDigits: 3,
        roundingMode: "halfdown"
    });
    var str = uf.format(m1);
    assertEquals("1.2345e+28 km", str);
}

function testUnitFormatLength14() {
    var m1 = MeasurementFactory({
        unit: "km",
        amount: 1.7453
    });

    var uf = new UnitFmt({
        length:"short",
        autoConvert:false,
        autoScale: false,
        maxFractionDigits: 2        
    });
    var str = uf.format(m1);
    assertEquals("1.75 km", str);
}

function testUnitFormatLength15() {
    var m1 = MeasurementFactory({
        unit: "m",
        amount: 1.74475
    });

    var uf = new UnitFmt({
        autoConvert:false,
        autoScale: false,        
	maxFractionDigits: 2,
	roundingMode: "up"       
    });
    var str = uf.format(m1);
    assertEquals("1.75 meter", str);
}

function testUnitFormatLength16() {
    var m1 = MeasurementFactory({
        unit: "m",
        amount: 1.74475
    });

    var uf = new UnitFmt({
        autoConvert:false,
        autoScale: false,
        maxFractionDigits: 2,
	roundingMode: "down" 
    });
    var str = uf.format(m1);
    assertEquals("1.74 meter", str);
}

function testUnitFormatLength17() {
    var m1 = MeasurementFactory({
        unit: "m",
        amount: 1.74475
    });

    var uf = new UnitFmt({
        autoConvert:false,
        autoScale: false,
        minFractionDigits: 3,
	maxFractionDigits: 3
    });
    var str = uf.format(m1);
    assertEquals("1.745 meter", str);
}

function testUnitFormatUseNativeFalse() {
    var m1 = MeasurementFactory({
        unit: "cm",
        amount: 1000
    });

    var uf = new UnitFmt({autoScale:false,locale: "bn-IN",useNative:false});
    var str = uf.format(m1);
    assertEquals("1,000 সেন্টিমিটার", str);
}

function testUnitFormatUseNativeTrue() {
    var m1 = MeasurementFactory({
        unit: "cm",
        amount: 1000
    });

    var uf = new UnitFmt({autoScale:false,locale: "bn-IN",useNative:true});
    var str = uf.format(m1);
    assertEquals("১,০০০ সেন্টিমিটার", str);
}

function testUnitFormatUseNativeDefault() {
    var m1 = MeasurementFactory({
        unit: "cm",
        amount: 1000
    });

    var uf = new UnitFmt({autoScale:false,locale: "bn-IN"});
    var str = uf.format(m1);
    assertEquals("১,০০০ সেন্টিমিটার", str);
}
