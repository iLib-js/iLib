Address Parsing and Formatting in iLib
===================================

This tutorial shows you how you can parse mailing addresses in various locales, and format them again easily.

Motivation
----------

Why would you want to parse and format addresses? 

Let's say you have a part of your web site that allows your users to enter some contacts. You may have a name field, some phone number fields, an address field and an email field. The address field is a single field where they can type the whole address of their contact. Now, you would probably also have a page that lists the contacts in alphabetical order, and the user may be able to click on address column to sort by that field. What if they wanted to sort based on country/region, or on the city?

The problem is... what is the country, or zip or city for each address? It turns out that the postal authority in each country can define the standard order for the parts of an address, and that each country is different, even when they speak the same language.

Now things get even more complicated when you have to support multiple languages or scripts. Some places typically reverse the order of the address parts. For example, in Chinese, you would typically write the parts in order from largest (country "China") to medium (city "Beijing") to smallest (street address). It gets even more complicated in places with complicated histories, such as Hong Kong, where you would write the exact same address in Chinese order when you are writing with Chinese characters, and in British order when writing in Latin characters.

There is even more fun to be had if you try to parse names in other countries where that other country uses a different script or order. For example, you may have a US contact list with a Chinese address for one of your contacts. In that case, the address would probably have have something like "China" or "PRC" at the end of it in Latin characters so that the US post office knows to send the letter to China. But, the rest of the address is written in Chinese with Chinese order. This is a sort of hybrid address.

Given all the above, the humble Javascript programmer needs a little help to parse and format addresses so they don't have to be an expert in the address formats for a large number of countries. Enter iLib.

Parsing Addresses with iLib
---------------------------

Parsing addresses is a simple matter of creating an instance of the Address class. Here is an example:

~~~~~~
var ilib = require("ilib");
var Address = require("ilib/lib/Address");

var address = new Address("LG Silicon Valley Lab\n5150 Great America Pkwy\nSanta Clara, CA 95054\nUSA");
~~~~~~

Now, assuming your current locale is en-US, the "address" variable should contain the following properties:

~~~~~~
{
    country: "USA",
    countryCode: "US",
    postalCode: "95054",
    region: "CA",
    locality: "Santa Clara",
    streetAddress: "LG Silicon Valley Lab, 5150 Great America Pkwy"
}
~~~~~~

Parsing in Other Countries
--------------------------

Just like other iLib classes, you can pass in options to the constructor to control how the parsing proceeds. For example, let's say you want to parse the address in Korea instead, even though your current locale is en-US:

~~~~~~
var ilib = require("ilib");
var Address = require("ilib/lib/Address");

var address = new Address("한국 서울시 영등포구 여의대로 128 LG트윈타워", {
    locale: "ko-KR"
});
~~~~~~

Now the properties are:

~~~~~~
{
    country: "한국",
    countryCode: "KR",
    locality: "서울시",
    streetAddress: "영등포구 여의대로 128 LG트윈타워"
}
~~~~~~

Without the explicit locale option, the parser will use the current locale to parse the string.

Parsing Addresses with Latin Script
-----------------------------------

Let's say your US contact list contains an address outside of the US. Parsing would be a little more difficult if the foreign address is in a different script than the US (ie. non-Latin characters). 

Fortunately, the Address parser can recognize the foreign country, and can automatically use the rules of that country to parse the rest of the address. Note that for many countries, you can write addresses in Latin or the native script, and Address will use the correct set of rules to parse each of them, depending on what characters it finds in the string. Here is an example:

~~~~~~
var ilib = require("ilib");
var Address = require("ilib/lib/Address");

// note: no locale is specified here!
var address = new Address("LG Electronics, Gasan-dong, Geumcheon-gu, Seoul, South Korea");
~~~~~~

Now the properties are the same as when the locale was specified explicitly:

~~~~~~
{
    country: "South Korea",
    countryCode: "KR",
    locality: "Seoul",
    streetAddress: "LG Electronics, Gasan-dong, Geumcheon-gu"
}
~~~~~~


It Doesn't Work All the Time
----------------------------

There are many types of addresses and strings where the parser's heuristics do not work properly. Don't expect that it should work in 100% of the cases!

If needed, the parser can be upgraded in the future to support more things and special cases. Please let us know if you have a very common case that is not supported. (email to "marketing@translationcircle.com")

Formatting Addresses
----------------

In some contacts services, such as Google Contacts, addresses are given as whole addresses in a single string, and you need the parser documented in the previous section to decipher the parts.

But what if you have the address fields already separated? How would you format them together in the right order?

There is where you would use the class AddressFmt to reassemble the parts into a single string. Here is an example:

~~~~~~
var ilib = require("ilib");
var Address = require("ilib/lib/Address");
var AddressFmt = require("ilib/lib/AddressFmt");

// presumably, these parts came from your database or contacts list
var address = new Address({
    country: "USA",
    countryCode: "US",
    postalCode: "95054",
    region: "CA",
    locality: "Santa Clara",
    streetAddress: "LG Silicon Valley Lab, 5150 Great America Pkwy"
});
var af = new AddressFmt();
var formatted = af.format(address);
~~~~~~

Now the name in the "formatted" variable will appear as the string:

> LG Silicon Valley Lab
> 5150 Great America Parkway
> Santa Clara, CA 95054
> USA

Formatting Addresses in Foreign Countries
----------------------

Let's say your contact list contains an address outside of your current locale. In this case, iLib will use the format data for the current locale to format the country, and load the format data for that foreign country and use those to format the parts of address inside that foreign country.

For example, let's say the current iLib locale is "en-US", and the user has a contact in Germany. Here is how the code would look:

~~~~~~
var ilib = require("ilib");
var Address = require("ilib/lib/Address");
var AddressFmt = require("ilib/lib/AddressFmt");

var address = new Address({
    country: "Germany",
    countryCode: "DE",
    postalCode: "40880",
    locality: "Ratingen",
    streetAddress: "LG Electronics Deutschland GmbH, Berliner Str 93"
});
var af = new AddressFmt();
var formatted = af.format(address);
~~~~~~

Note that you should preserve the countryCode field in the database that the parser gave you, so that you can pass it back to the formatter again as above.

Here is what the value of the "formatted" variable will end up being:

> LG Electronics Deutschland GmbH
> Berliner Str 93
> 40880 Ratingen
> Germany

Note that the name of the country is in English still, because when you put an envelope into the mail in the US, the English-speaking US Post employee will be reading the address and looking for the name of the country where the the letter should be sent. The rest of the address above the "Germany" line is formatted according to the German conventions.

Mixed Asian and Western Addresses
---------------------------------

This gets even more tricky when mixing Asian and Western together. Let's say you had an address in Korea in your English/US contact list. In Korean, you would put the name of the country at the top (it goes from biggest to smallest). In the US, you would put the name of the country at the bottom. Since it is being mailed from the US to Korea, you start off with US rules, and then use Korean rules for the rest of the address. Here is how it would look:

~~~~~~
var ilib = require("ilib");
var Address = require("ilib/lib/Address");
var AddressFmt = require("ilib/lib/AddressFmt");

// presumably, these parts came from your database or contacts list
var address = new Address({
    country: "Republic of Korea",
    countryCode: "KR",
    locality: "서울시",
    streetAddress: "영등포구 여의대로 128 LG트윈타워"
});
var af = new AddressFmt();
var formatted = af.format(address);
~~~~~~

Here is what the value of the "formatted" variable will end up being:

> 서울시 영등포구 여의대로 128 LG트윈타워
> Republic of Korea

Latin Script in Asian Addresses
-------------------------------

Some addresses in Asia are written in Latin script for the convenience of the reader. In this case, the locale data for many of the Asian locales has two sets of rules: one for Asian addresses that are written in Asian scripts, and another for those that are written in Latin script.

Here is an example in Hong Kong, where because of its unique history, it is very common to find both Chinese character and Latin character addresses.

~~~~~~
var ilib = require("ilib");
var Address = require("ilib/lib/Address");
var AddressFmt = require("ilib/lib/AddressFmt");

// presumably, these parts came from your database or contacts list
var address = new Address({
    country: "Hong Kong",
    countryCode: "HK",
    locality: "North Point",
    streetAddress: "5F, 633 King's Road"
});
var af = new AddressFmt();
var formatted = af.format(address);
~~~~~~

The formatter does the right thing here for the script. Here is what the value of the "formatted" variable will end up being:

> 5F, 633 King's Road
> North Point
> Hong Kong

