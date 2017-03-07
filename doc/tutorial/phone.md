Handling Phone Number in iLib
=============================

As of 8.0, iLib includes the ability to represent and manipulate phone numbers. Here are the things it can do:

* Parse phone numbers. This teases out the various parts of a phone number, ignoring formatting, so that you can do things like get the area code. The area code is used to do normalization and also geolocation.
* Format phone numbers. Once you have the parts of a phone number, you can format it again with various different styles. 
* Normalization. This function allows you to add parts to a phone number that may be missing, or to rewrite parts of a number.
* Geolocation. This returns geographic information about a phone number's area code, if possible, or general descriptions of the type of number if not.

Currently, iLib supports 41 common countries, but more will be added in the coming months. Dialing plans are decided by governments, so phone numbers only depend on the country/region, not on the language, though the preferred formatting style may depend on the language.

Phone Number Parsing
====================

Phone numbers have a variety of different types with a variety of different formatting styles and various different parts. iLib can parse them all using the PhoneNumber class. Here is how you do it:

~~~~~~
var ilib = require("ilib");
var PhoneNumber = require("ilib/lib/PhoneNumber");

// This number presumably comes from somewhere else, like a contacts entry
// The number may have formatting characters and whitespace in it.
var number = "1 (650) 555-5555";  
var pn = new PhoneNumber(number);
~~~~~~

That's it! The variable "pn" now contains the parsed phone number. Here are the fields it produces:

~~~~~~
{
    "trunkCode": "1",
    "areaCode": "650",
    "subscriberNumber": "5555555"
}
~~~~~~

Note that the parts only contain dialable digits, and all the formatting characters are gone.

The phone number code defaults to parsing using the rules of the current country, which it gets from the current ilib locale. For the most calls, people are in their home country, so this works fine. (See the section below about options if you are currently in another country.)

The fields it can find are the following:

 * vsc - if this number starts with a VSC (Vertical Service Code, or "star code"), this field will contain the star and the code together. This is often used by mobile carriers to do special things like contact customer service, or to turn on/off special services
 * iddPrefix - the prefix for international direct dialing (IDD). This can either be in the form of a plus character (for UMTS systems) or the IDD access code for the given locale (used mostly by CDMA systems)
 * countryCode - if this number is an international direct dial number, this is the country code
 * cic - for "dial-around" services (access to other long-distance or international carriers), this is the prefix used as the Carrier Identification Code.
 * emergency - an emergency services number
 * mobilePrefix - prefix that introduces a mobile phone number
 * trunkAccess - trunk access code (long-distance access) for numbers within the same dialing plan
 * serviceCode - like a geographic area code, but it is a required prefix for various service numbers
 * areaCode - geographic area codes
 * subscriberNumber - the unique number of the person or company that pays for this phone line
 * extension - in some countries, extensions are dialed directly without going through an operator or a voice prompt system. If the number includes an extension, it is given in this field.
 * invalid - this property is added and set to true if the parser found that the number is invalid in the numbering plan for the country. This method will make its best effort at parsing, but any digits after the error will go into the subscriberNumber field.

Options
-------

The phone number takes options as well that help you parse phone numbers. One of the most important ones is the "mcc", which is the Mobile Carrier Code. This tells the phone number parser which carrier you are connected to at moment (perhaps while roaming outside your usual country/region), and therefore also which region/country you are currently located in. When a call comes in to the phone, the carrier sends the number along with it. This number will be appropriate for the current region/country's dialing plan, not for your home dialing plan. Therefore, you must use the dialing plan of your location in order to parse that number. Implementors that use this code on actual mobile phones should always pass the mcc of the mobile carrier when parsing a number from that carrier.

Here's how you do it:

~~~~~~
var ilib = require("ilib");
var PhoneNumber = require("ilib/lib/PhoneNumber");

// phone number in London
var number = "020-1234-5678";
var mcc = "235";  // this would come from the mobile carrier
var pn = new PhoneNumber(number, {
    mcc: mcc
});
~~~~~~

Now, even though your phone (and therefore iLib) is set to use en-US as its locale, this number will be parsed correctly as a number in London, England:

~~~~~~
{
    "trunkCode": "0",
    "areaCode": "20",
    "subscriberNumber": "12345678"
}
~~~~~~

There are other options that allow you to specify the locale to use for parsing and options that allow you to perform the parsing asynchronously. (The data needed to parse the phone number in a different locale can be loaded asynchronously.)

International Numbers
---------------------

For countries that iLib already supports, parsing for international numbers happens using the rules of the foreign country. After the country code, the rest of the digits are in the dialing plan of the foreign country, and should be parsed with the rules for that country. Example number of your contact in Paris, France:

~~~~~~
var ilib = require("ilib");
var PhoneNumber = require("ilib/lib/PhoneNumber");

var number = "+33 1 12 34 56 78";
var pn = new PhoneNumber(number);
~~~~~~

The iLib code recognizes "33" as the country code for France, and then loads in the data it needs to parse the rest of the number in France. This is why you have to pass to the format method various options like a callback function if you want to have asynchronous loading of locale data. By default, the parser acts synchronously. 

The above example number will be parsed as:

~~~~~~
{
    "iddPrefix": "+",
    "countryCode": "33",
    "areaCode": "1",
    "subscriberNumber": "12345678"
}
~~~~~~

What happens for numbers in countries that iLib does not support? In this case, iLib will put everything into the "subscriberNumber" field as the default behaviour. For example, here is a number in Azerbaijan, which is a country that iLib doesn't support yet:

~~~~~~
var ilib = require("ilib");
var PhoneNumber = require("ilib/lib/PhoneNumber");

var number = "+994-12-498-0335";
var pn = new PhoneNumber(number);
~~~~~~

Note that the "12" is actually the area code. This will be parsed as:

~~~~~~
{
    "iddPrefix": "+",
    "countryCode": "994",
    "subscriberNumber": "124980335"
}
~~~~~~

Phone Number Formatting
=======================

Phone numbers can be formatted in various different ways. In most countries, there is no law that states how phone numbers should be formatted, so people end up formatting in various different styles, sometimes if just to be "cool" or "different". That's okay -- iLib can support all of them! For each country, the most common style is designated the "default" style.

For example, the most common style in the US is "(650) 555-5555". But, it is not uncommon to see other styles like "650.555.5555" or "650-555-5555". The style determines the groupings of digits and the formatting characters that appear between them.

Formatting a phone number is easy. First you have to have a parsed phone number so that the formatter knows what all the parts are. Then, you format it with the formatter's format() method. Regular iLib users will find this very familiar, as it is similar to the way other formatters like DateFmt or NumberFmt work.

~~~~~~
var ilib = require("ilib");
var PhoneNumber = require("ilib/lib/PhoneNumber");
var PhoneFmt = require("ilib/lib/PhoneFmt");

var number = "650-555-5555";
var pn = new PhoneNumber(number);
var fmt = new PhoneFmt();  // use the default style and locale
var reformatted = fmt.format(pn);
~~~~~~

The result would come out like this:

> (650) 555-5555

Formatting Numbers on Mobile Phones
-----------------------------------

A unique feature of a mobile phone, as opposed to a land line, is of course that it moves around a lot, and therefore has to deal with numbers from all over the world. To deal with that, you can tell the parser and formatter where you are currently located using the Mobile Carrier Code, or "mcc", option. The mcc should be available from the device driver that controls your phone hardware, as it is part of the IMSI number that the carrier passes to you.

Example:

~~~~~~
var ilib = require("ilib");
var PhoneNumber = require("ilib/lib/PhoneNumber");
var PhoneFmt = require("ilib/lib/PhoneFmt");

// example: reformatting phone number in London with a different style
var number = "020-1234-5678";
var mcc = "235";  // this would come from the mobile carrier
var pn = new PhoneNumber(number, {
    mcc: mcc
});
var fmt = new PhoneFmt({
    mcc: mcc,
    style: "default"
});
var reformatted = fmt.format(pn);
~~~~~~

The variable "reformatted" now contains the string "(020) 1234-5678" which is formatted correctly in the default style for Great Britain. 

Types of Numbers
----------------

Phone numbers have a variety of different types:

- Land lines
- Mobile numbers
- Service numbers
- Emergency numbers
- etc.

iLib knows that in some countries, different types of numbers are formatted differently. For example, in Germany, you might format a regular land line number like this:

> 030 12 34 56 78   (number in Berlin)

But, your contact's German mobile number might be commonly formatted like this:

> 015 1234 5678

iLib automatically chooses the appropriate style for special types of numbers when appropriate, or it falls back to the default style.

International Numbers
---------------------

When formatting a number in a foreign country (ie. the number has an explicit country code), iLib knows to use the style of that foreign country to format the number instead of the style of the current locale or MCC.

Example: your contact in Paris France would be formatted like this, even on your US phone when you are located in the US:

> +33 1 12 34 56 78

If you pass in the "mcc" as in the example a few sections up, then the formatter will use the mcc to determine how to format local numbers (ie. numbers that do not have a country code like the example above). The formatter will choose the default style for the country given by the mcc. Be careful about that, though, if you specify an explicit style. In the US, we might have a style called "dots", which may not exist in another country. Only the "default" style is guaranteed to exist for all countries that iLib supports.

What happens for numbers in countries that iLib does not support? In this case, the number will be formatted as a simple run of digits with no special formatting. For example, here is a number in Azerbaijan, which is a region that iLib does not support yet:

~~~~~~
var ilib = require("ilib");
var PhoneNumber = require("ilib/lib/PhoneNumber");
var PhoneFmt = require("ilib/lib/PhoneFmt");

// example: reformatting phone number in Azerbaijan with a different style
var number = "+994-12-498-0335";
var pn = new PhoneNumber(number);
var fmt = new PhoneFmt(); // use default style and locale
var reformatted = fmt.format(pn);
~~~~~~

In this case, the IDD prefix and country code are recognized, but area code and such are not. The reformatted phone number ends up being: "+994 124980335"

Partial vs. Whole Phone Numbers
-------------------------------

If a user is typing a phone number into a phone number field in a web form or into a phone application using a dialing pad, the number in some cases is formatted differently if it is a partial number (ie. in mid-typing) or a whole number.

One example of this is SMS short codes. In the US, short codes for SMS are 5 digits long. If a user is currently typing in a number to send an SMS to, they may type 5 digits in a row. 

Here is how a whole 5 digit SMS short code is formatted:

> 12345

Here is how the first 5 digits of an SMS code is formatted when the user is on the way to typing a regular 7 digit local number:

> 123-45

How does the formatter code know if the 5 digits represent a complete short code, or only the first 5 digits of a longer number? The answer is that you have to have to tell it using the "partial" option. Here is the code:

~~~~~~
var ilib = require("ilib");
var PhoneNumber = require("ilib/lib/PhoneNumber");
var PhoneFmt = require("ilib/lib/PhoneFmt");

var digits = "12345";
var pn = new PhoneNumber(number);
var fmt = new PhoneFmt({
    partial: true
});
var reformatted = fmt.format(pn);
~~~~~~

The variable "reformatted" now contains the string "123-45". By default, the phone formatter assumes the phone number is a whole number, so your code only needs to give the "partial" option when it is handling a phone number field as it is being typed.

Normalization
=============

Normalization is used in various circumstances:

- when dialing a number from the user's contact list where there may be parts missing or when matching an incoming number (CNAP or caller ID number) against the numbers in the user's contact list
- when dialing a number from the user's contact list while traveling to other countries

Each of these has slightly different requirements. iLib has two types of normalization to support both of the above scenarios:

- regular normalization
- Verizon "assisted dialing" normalization

Regular Normalization
---------------------

If you are in a country like the US that allows you to leave out the area code when dialing locally, then your contact list may contain numbers like "555-5555". In this case, it may be difficult to dial that number when you are currently located in a different area code. Normalization can use various hints to add back the trunk code "1" and the area code, to make the final number "1-650-555-5555" which can be dialed anywhere in the US.

The hints that the normalization code can use are:

* mcc - the mobile carrier code of the current network upon which this phone is operating. This is translated into an IDD country code. This is useful if the number being normalized comes from CNAP (callerid) and the MCC is known.
* defaultAreaCode - the area code of the phone number of the current device, if available. Local numbers in a person's contact list are most probably in this same area code. If you happen to know the phone number of current mobile device, you can parse that and extract its area code. Many UMTS phones knows their own phone number, but CDMA phones do not.
* country - the 2 letter ISO 3166 code of the country if it is known from some other means such as parsing the physical address of the contact associated with the phone number, or perhaps from the domain name of the person's email address
* networkType - specifies whether the phone is currently connected to a CDMA network or a UMTS network. When adding in an IDD prefix to a number, the normalization code needs to know what the network type is so that it can add "+" for UMTS phones or the numerical IDD prefix for CDMA phones

Normalizing a number is also pretty easy. It is a method on the PhoneNumber object:

~~~~~~
var ilib = require("ilib");
var PhoneNumber = require("ilib/lib/PhoneNumber");
var PhoneFmt = require("ilib/lib/PhoneFmt");

var number = "555-5555";
var pn = new PhoneNumber(number);
~~~~~~

Now the phone number has the following simple fields:

~~~~~~
{
    "subscriberNumber": "5555555"
}
~~~~~~

Next, we perform normalization on it:

~~~~~~
var normalized = pn.normalize({
    defaultAreaCode: "650",   // gleaned from the device's own phone number
    country: "US",            // maybe from the user's profile information?
    networkType: "umts"       // usually you get this from the phone device driver
});
~~~~~~

Now the variable "normalized" should contain the string "+16505555555" which are all the normalized dialable digits in the correct order. You should be able to dial that number from anywhere in the world as long as you are currently being serviced by a UMTS carrier.

Note that the normalize method does not have any side effects on the current phone number.

Verizon Assisted Dialing
-------------------------

In Verizon assisted dialing, the goal is to be able to tap on your contact's phone number anywhere in the world, and have the call go through correctly or have the SMS text message be sent correctly. This should happen even if your contact has insufficient information to dial that number from your current location.

In Verizon Assisted Dialing (VAD), there are 3 countries you have to keep in mind:

* the home country. This is where the phone is registered. 
* the target country. This is the country that you are trying to dial to.
* the current country. This is where you are currently located, which may be different than the other two countries

For example, let's say that you have a US CDMA phone, and you are trying to dial your friend Luigi in Rome, Italy while you are traveling in France to let him know when you are planning to arrive in Rome later in your trip. In this case, the home country is "US", the current country is "FR", and the target country is "IT".

There are a few special things in this example. In Italy, you do not drop the trunk code when dialing from abroad, whereas in most countries you do. Also, since you are on a CDMA phone, you have to dial a numeric IDD prefix in order to dial internationally.

Here is Luigi's number from his contact entry:

> 06 12345678

Note that the number is an Italian number, but there is no country code, so you have to parse it with the Italian locale in order to get the parts correct:

~~~~~~
var ilib = require("ilib");
var PhoneNumber = require("ilib/lib/PhoneNumber");

var number = "06 12345678";
var pn = new PhoneNumber(number, {
    locale: "it-IT"    // we know from Luigi's contact entry that he is in Italy
});
~~~~~~

Now, we need to perform the VAD normalization before we can dial the number:

~~~~~~
var normalized = pn.normalize({
    assistedDialing: true,    // turn on VAD
    mcc: "208",               // mcc in France. This would come from the mobile carrier
    defaultAreaCode: "650",   // gleaned from the device's own phone number
    country: "US",            // maybe from the user's profile information?
    networkType: "cdma"       // usually you get this from the phone device driver
});
~~~~~~

Now, the result in the normalized variable contains only the dialable digits from the phone number. These are digits that are appropriate to the French dialing plan on a CDMA network:

> 00390612345678

The "00" is the numeric IDD prefix, "39" is the country code for Italy, "0" is the trunk code which you have to leave in when dialing Italy from abroad, "6" is the area code for Rome, and "12345678" is Luigi's subscriber number.

If you need that as a phone number object or if you want it formatted nicely, you could parse the string in the normalized variable, and then format it. In this case, the formatter would start off with the French rules because the MCC is for France, and then when it encounters the country code for Italy, it would switch to the Italian rules for the rest of the number. The reformatting code might look like this:

~~~~~~
var ilib = require("ilib");
var PhoneNumber = require("ilib/lib/PhoneNumber");
var PhoneFmt = require("ilib/lib/PhoneFmt");

var pn2 = new PhoneNumber(normalized, {
    mcc: "208"     // MCC in France
});
var fmt = new PhoneFmt();  // use the default style
var pretty = fmt.format(pn2);
~~~~~~

The variable "pretty" would then contain the following text:

> 0039 06 12345678

Note that there are special rules for SMS numbers, especially if you have a US carrier. Because US carriers make both the caller and the receiver of text messages pay for the message, you have to route the message via the US in order to count them. In our example above, if you send your friend Luigi a text message "My plane arrives in Rome at 16:23" while you are in France, then your US carrier wants to charge you for that text message and wants that text message routed through the US first so that they can count it. The normalize method with VAD turned on does this automatically for you.

Geolocation
===========

For numbers that are typed in to the phone manually via a dialpad or into a text field in a web form, or for numbers that come to the phone via CNAP (caller id) during an incoming phone call, it is possible that the number does not exist in the user's contact list. In this case, the UI can show the user information about where the number comes from or at least what type of number it is. This is called phone number geolocation.

Geolocation of a phone number can be accomplished using the GeoLocator class. Here
is an example of Luigi's number in Rome:

~~~~~~
var ilib = require("ilib");
var PhoneNumber = require("ilib/lib/PhoneNumber");
var GeoLocator = require("ilib/lib/GeoLocator");

var number = "+39 06 12345678";
var pn = new PhoneNumber(number);
var locator = new GeoLocator();
var location = locator.locate(pn);
~~~~~~

The result in the variable "location" will be the following:

~~~~~~
{
    country: { 
        sn: "Italy",
        ln: "Italy, Vatican City",
        code: "IT" 
    },
    area: { 
        sn: "Rome", 
        ln: "Rome, Vatican City"
    }
}
~~~~~~

The "sn" stands for "short name" whereas the "ln" stands for "long name".

Non-Land-Line Numbers
---------------------

Usually only land lines can be located geographically, as mobile numbers are often distributed evenly throughout the country. For non-land-line numbers, the geolocator class gives you a description of the type of number. Here is an example of what you would get:

~~~~~~
var ilib = require("ilib");
var PhoneNumber = require("ilib/lib/PhoneNumber");
var GeoLocator = require("ilib/lib/GeoLocator");

var number = "+39 300 12345678";       // Luigi's mobile phone number
var pn = new PhoneNumber(number);
var locator = new GeoLocator();
var location = locator.locate(pn);
~~~~~~

The result in the variable "location" will be the following:

~~~~~~
{
    country: { 
        sn: "Italy",
        ln: "Italy, Vatican City",
        code: "IT"
    },
    area: { 
        sn: "Mobile Number", 
        ln: "Mobile Number"
    }
}
~~~~~~

Translations
------------

The geolocator will always return a translation of the location strings if it has them, or it will return the original English string. 

If you parsed Luigi's home number when the phone is set to Italian, the code would be the same as above, but the the result in the variable "location" would be the following:

~~~~~~
{
    country: { 
        sn: "Italia",
        ln: "Italia, Città del Vaticano",
        code: "IT" 
    },
    area: { 
        sn: "Roma", 
        ln: "Roma, Città del Vaticano"
    }
}
~~~~~~

Many city/region names are not translated in many languages, but there are translations for some, especially the larger cities that are known world-wide, and for country names and English descriptions. For example, area code "212" in the US is for the New York area. The geolocation information looks like this:

~~~~~~
{
    country: { 
        sn: "North America",
        ln: "North America and the Caribbean Islands",
        code: "US"
    },
    area: { 
        sn: "New York", 
        ln: "New York: Manhattan except for Marble Hill" 
    }
}
~~~~~~

Translated to German, this is:

~~~~~~
{
    country: { 
        sn: "Nordamerika",
        ln: "Nordamerika und karibische Inseln",
        code: "US"
    },
    area: { 
        sn: "New York", 
        ln: "New York: Manhattan außer Marble Hill" 
    }
}
~~~~~~

Note that "New York", "Manhatten", and "Marble Hill" are not translated, but the "except for" part is.