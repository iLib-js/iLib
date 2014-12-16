function testNormNANP1() {
	assertEquals("US", ilib.PhoneUtils.normPhoneReg("US"));
	
};

function testNormNANP2() {
	assertEquals("US", ilib.PhoneUtils.normPhoneReg("CA"));
	
};

function testNormNANP3() {
	assertEquals("US", ilib.PhoneUtils.normPhoneReg("JM"));
	
};

function testNormFrance1() {
	assertEquals("FR", ilib.PhoneUtils.normPhoneReg("FR"));
	
};

function testNormFrance2() {
	assertEquals("FR", ilib.PhoneUtils.normPhoneReg("MQ"));
	
};

function testNormItaly1() {
	assertEquals("IT", ilib.PhoneUtils.normPhoneReg("IT"));
	
};

function testNormItaly2() {
	assertEquals("IT", ilib.PhoneUtils.normPhoneReg("va"));
	
};

function testNormOther() {
	assertEquals("DE", ilib.PhoneUtils.normPhoneReg("DE"));
	
};

function testNormUnknown() {
	assertEquals("xx", ilib.PhoneUtils.normPhoneReg("xx"));
	
};

function testNormUndefined() {
	assertTrue(ilib.PhoneUtils.normPhoneReg(undefined) === undefined);
	
};

function testMapMCCtoReg1() {
	assertEquals("US", ilib.PhoneUtils.mapMCCtoRegion("310"));
	
};

function testMapMCCtoReg2() {
	assertEquals("DE", ilib.PhoneUtils.mapMCCtoRegion("262"));
	
};

function testMapMCCtoRegUnknown() {
	assertEquals("unknown", ilib.PhoneUtils.mapMCCtoRegion("0"));
	
};

function testMapMCCtoRegUndefined() {
	assertTrue(ilib.PhoneUtils.mapMCCtoRegion(undefined) === undefined);
	
};

function testMapMCCtoCC1() {
	assertEquals("49", ilib.PhoneUtils.mapMCCtoCC("262"));
	
};

function testMapMCCtoCC2() {
	assertEquals("1", ilib.PhoneUtils.mapMCCtoCC("310"));
	
};

function testMapMCCtoCCUnknown() {
	assertTrue(ilib.PhoneUtils.mapMCCtoCC("0") === undefined);
	
};

function testMapMCCtoCCUndefined() {
	assertTrue(ilib.PhoneUtils.mapMCCtoCC(undefined) === undefined);
	
};

function testMapCCtoReg1() {
	assertEquals("DE", ilib.PhoneUtils.mapCCtoRegion("49"));
	
};

function testMapCCtoReg2() {
	assertEquals("US", ilib.PhoneUtils.mapCCtoRegion("1"));
	
};

function testMapCCtoRegUnknown() {
	assertEquals("unknown", ilib.PhoneUtils.mapCCtoRegion("0"));
	
};

function testMapCCtoRegUndefined() {
	assertTrue(ilib.PhoneUtils.mapCCtoRegion(undefined) === undefined);
	
};

function testMapAreatoRegNANP1() {
	assertEquals("US", ilib.PhoneUtils.mapAreaToRegion("1", "408"));
	
};

function testMapAreatoRegNANP2() {
	assertEquals("JM", ilib.PhoneUtils.mapAreaToRegion("1", "876"));
	
};

function testMapAreatoRegNANP3() {
	assertEquals("CA", ilib.PhoneUtils.mapAreaToRegion("1", "416"));
	
};

function testMapAreatoRegNANPUnknown() {
	assertEquals("US", ilib.PhoneUtils.mapAreaToRegion("1", "999"));
	
};

function testMapAreatoRegNANPUndefined() {
	assertEquals("US", ilib.PhoneUtils.mapAreaToRegion("1", undefined));
	
};

function testMapAreatoRegItaly1() {
	assertEquals("IT", ilib.PhoneUtils.mapAreaToRegion("39", "6"));
	
};

function testMapAreatoRegItaly2() {
	assertEquals("sm", ilib.PhoneUtils.mapAreaToRegion("39", "549"));
	
};

function testMapAreatoRegOther1() {
	assertEquals("DE", ilib.PhoneUtils.mapAreaToRegion("49", "2553"));
	
};

function testMapAreatoRegOther2() {
	assertEquals("NL", ilib.PhoneUtils.mapAreaToRegion("31", "20"));
	
};

function testMapAreatoRegUnknown() {
	assertEquals("unknown", ilib.PhoneUtils.mapAreaToRegion("0", "20"));
	
};

function testMapAreatoRegUndefined() {
	assertTrue(ilib.PhoneUtils.mapAreaToRegion(undefined, undefined) === undefined);
	
};

function testMapRegToCC1() {
	assertEquals("49", ilib.PhoneUtils.mapRegiontoCC("DE"));
	
};

function testMapRegToCC2() {
	assertEquals("1", ilib.PhoneUtils.mapRegiontoCC("US"));
	
};

function testMapRegToCC3() {
	assertEquals("1", ilib.PhoneUtils.mapRegiontoCC("CA"));
	
};

function testMapRegToCC4() {
	assertEquals("1", ilib.PhoneUtils.mapRegiontoCC("JM"));
	
};

function testMapRegToCCUnknown() {
	assertEquals("0", ilib.PhoneUtils.mapRegiontoCC("unknown"));
	
};

function testMapRegToCCUndefined() {
	assertTrue(ilib.PhoneUtils.mapRegiontoCC(undefined) === undefined);
	
};
