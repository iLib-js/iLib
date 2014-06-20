NumPlanTests.prototype.testGet1 = function() {
	var plan = new enyo.g11n.NumPlan({locale: "en_us"});
	UnitTest.requireDefined(plan);
	UnitTest.requireEqual("us", plan.region);
	return UnitTest.passed;
};

NumPlanTests.prototype.testGet2 = function() {
	var plan = new enyo.g11n.NumPlan({locale: "de_de"});
	UnitTest.requireDefined(plan);
	UnitTest.requireEqual("de", plan.region);
	return UnitTest.passed;
};

NumPlanTests.prototype.testGetUnknown = function() {
	var plan = new enyo.g11n.NumPlan({locale: "unknown_unknown"});
	UnitTest.requireDefined(plan);
	UnitTest.requireEqual("unknown", plan.region);
	return UnitTest.passed;
};

NumPlanTests.prototype.testGetUnrecognized = function() {
	var plan = new enyo.g11n.NumPlan({locale: "zu_zz"});
	UnitTest.requireDefined(plan);
	UnitTest.requireEqual("unknown", plan.region);
	return UnitTest.passed;
};

NumPlanTests.prototype.testGetDefault = function() {
	var plan = new enyo.g11n.NumPlan({});
	UnitTest.requireDefined(plan);
	UnitTest.requireEqual("us", plan.region);
	return UnitTest.passed;
};

NumPlanTests.prototype.testRightContents = function() {
	var plan = new enyo.g11n.NumPlan({locale: "en_us"});
	UnitTest.requireDefined(plan);
	UnitTest.requireEqual("us", plan.region);
	UnitTest.require(plan.skipTrunk);
	UnitTest.requireEqual("1", plan.trunkCode);
	UnitTest.requireEqual(3, plan.fieldLengths.areaCode);
	UnitTest.requireEqual(7, plan.fieldLengths.minLocalLength);
	
	return UnitTest.passed;
};

NumPlanTests.prototype.testGetByMCC1 = function() {
	var plan = new enyo.g11n.NumPlan({mcc: "310"});
	UnitTest.requireDefined(plan);
	UnitTest.requireEqual("us", plan.region);
	return UnitTest.passed;
};

NumPlanTests.prototype.testGetByMCC2 = function() {
	var plan = new enyo.g11n.NumPlan({mcc: "262"});
	UnitTest.requireDefined(plan);
	UnitTest.requireEqual("de", plan.region);
	return UnitTest.passed;
};

NumPlanTests.prototype.testGetByMCCOverrideLocale = function() {
	var plan = new enyo.g11n.NumPlan({mcc: "262", locale: "en_us"});
	UnitTest.requireDefined(plan);
	UnitTest.requireEqual("de", plan.region);
	return UnitTest.passed;
};
