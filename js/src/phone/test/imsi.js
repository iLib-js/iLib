function testRegularImsi3DigitMNC() {
	var imsi = "31003014084567890"
	var expected = {
		mcc: "310",
		mnc: "030",
		msin: "14084567890"
	};
	
	assertEquals(objectEquals(expected, ilib.PhoneNumber._parseImsi(imsi)));
};

function testRegularImsi2DigitMNC() {
	var imsi = "26207201234567"
	var expected = {
		mcc: "262",
		mnc: "07",
		msin: "201234567"
	};
	
	assertEquals(objectEquals(expected, ilib.PhoneNumber._parseImsi(imsi)));
};

function testSpecialImsi1() {
	var imsi = "31000201234567"
	var expected = {
		mcc: "310",
		mnc: "00",
		msin: "201234567"
	};
	
	assertEquals(objectEquals(expected, ilib.PhoneNumber._parseImsi(imsi)));	
};

function testSpecialImsi2() {
	var imsi = "310004201234567"
	var expected = {
		mcc: "310",
		mnc: "004",
		msin: "201234567"
	};
	
	assertEquals(objectEquals(expected, ilib.PhoneNumber._parseImsi(imsi)));
};

function testBrokenMCC() {
	var imsi = "32000414084567890"
	var expected = {
		mcc: "320",
		mnc: "004",
		msin: "14084567890"
	};
	
	// should default to a 3 digit mnc
	assertEquals(objectEquals(expected, ilib.PhoneNumber._parseImsi(imsi)));
};

function testBrokenMNC() {
	var imsi = "31014114084567890"
	var expected = {
		mcc: "310",
		mnc: "141",
		msin: "14084567890"
	};
	
	// should default to a 3 digit mnc
	assertEquals(objectEquals(expected, ilib.PhoneNumber._parseImsi(imsi)));
};

function testTooShort() {
	var imsi = "31"
	
	assertEquals(ilib.PhoneNumber._parseImsi(imsi) === undefined);	
};

function testUndefined() {
	// should default to a 3 digit mnc
	assertEquals(ilib.PhoneNumber._parseImsi(undefined) === undefined);
};
