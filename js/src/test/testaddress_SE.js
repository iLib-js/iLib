function testParseAddressNormal() {
	
	var parsedAddress = new ilib.Address("Martin Rebas Gyllenkrooksgatan 1\n412 84 GÖTEBORG\nSWEDEN", {locale: 'sv-SE'});
        assertNotUndefined(parsedAddress);
	assertEquals("Martin Rebas Gyllenkrooksgatan 1", parsedAddress.streetAddress);
	assertEquals("GÖTEBORG", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("412 84", parsedAddress.postalCode);
	assertEquals("SWEDEN", parsedAddress.country);
	assertEquals("SE", parsedAddress.countryCode);

};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Martin Rebas Gyllenkrooksgatan 1\nGÖTEBORG\nSWEDEN", {locale: 'sv-SE'});
	assertNotUndefined(parsedAddress);
	assertEquals("Martin Rebas Gyllenkrooksgatan 1", parsedAddress.streetAddress);
	assertEquals("GÖTEBORG", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("SWEDEN", parsedAddress.country);
	assertEquals("SE", parsedAddress.countryCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Martin Rebas Gyllenkrooksgatan 1 , 412 84 , GÖTEBORG", {locale: 'sv-SE'}
	
	assertNotUndefined(parsedAddress);
	assertEquals("Martin Rebas Gyllenkrooksgatan 1", parsedAddress.streetAddress);
	assertEquals("GÖTEBORG", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("412 84", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("SE", parsedAddress.countryCode);
	console.log("bira");
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Ms. Hypothetical\nc/o Jon Wätte Hagagatan 1\nvi\n113 49\nStockholm\nSWEDEN", {locale: 'sv-SE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Ms. Hypothetical, c/o Jon Wätte Hagagatan 1, vi", parsedAddress.streetAddress);
	assertEquals("Stockholm", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("113 49", parsedAddress.postalCode);
	assertEquals("SWEDEN", parsedAddress.country);
	assertEquals("SE", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Ms. Hypothetical , c/o Jon Wätte Hagagatan 1 , 113 49 , Stockholm , SWEDEN", {locale: 'sv-SE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Ms. Hypothetical, c/o Jon Wätte Hagagatan 1", parsedAddress.streetAddress);
	assertEquals("Stockholm", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("113 49", parsedAddress.postalCode);
	assertEquals("SWEDEN", parsedAddress.country);
	assertEquals("SE", parsedAddress.countryCode);
};


function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Ms. Hypothetical c/o Jon Wätte Hagagatan 113 49 Stockholm SWEDEN", {locale: 'sv-SE'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Ms. Hypothetical c/o Jon Wätte Hagagatan", parsedAddress.streetAddress);
	assertEquals("Stockholm", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("113 49", parsedAddress.postalCode);
	assertEquals("SWEDEN", parsedAddress.country);
	assertEquals("SE", parsedAddress.countryCode);
};


function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Martin Rebas Gyllenkrooksgatan 1\nGÖTEBORG 412 84\nSWEDEN", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("Martin Rebas Gyllenkrooksgatan 1", parsedAddress.streetAddress);
	assertEquals("GÖTEBORG", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("412 84", parsedAddress.postalCode);
	assertEquals("SWEDEN", parsedAddress.country);
	assertEquals("SE", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Martin Rebas Gyllenkrooksgatan 1",
		locality: "GÖTEBORG",
		region: null,
		postalCode: "412 84",
		country: "SWEDEN",
		countryCode: "SE"
	}, {locale: 'sv-SE'});
	
	var expected = "Martin Rebas Gyllenkrooksgatan 1\n412 84 GÖTEBORG\nSWEDEN";
	var formatter = new ilib.AddressFmt({locale: 'sv-SE'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Martin Rebas Gyllenkrooksgatan",
		locality: "GÖTEBORG",
		region: null,
		postalCode: "412 84",
		country: "SWEDEN",
		countryCode: "SE"
	}, {locale: 'en-US'});
	
	var expected = "Martin Rebas Gyllenkrooksgatan\nGÖTEBORG 412 84\nSWEDEN";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
