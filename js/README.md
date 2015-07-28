<meta charset="UTF-8">

iLib
==== 

iLib is an internationalization library written in pure Javascript. It does not require any other libraries to function,
and can run equally well in various browsers on various OS's (including mobile), nodejs, webOS, Qt/QML, or rhino.

What Can iLib Do?
------

iLib contains many classes that cover a large number of i18n topics, a lot more than almost all other JS i18n libraries.

* String translation (ResBundle)
* String formatting, including plurals/choice formats (IString)
* Character type functions (like the C/C++ ctype functions) (CType)
* Calendars (CalendarFactory)
    * Gregorian, Julian, ThaiSolar, Persian algorithmic, Persian astronomical, Hebrew, Arabic civil, Ethiopic, Coptic, Chinese Han
* Date and time representation and conversion to other calendars (DateFactory)
* Date and time formatting in all calendars, including full time zone support (DateFmt)
* Time zone information from IANA TZ database (TimeZone)
* Duration formatting for lengths of events, videos, music, etc. (DurationFmt)
* Date range formatting with specific start and end times (DateRngFmt)
* Unicode character normalization using the Unicode Normalization Algorithm (NormString)
    * Also supports full character iteration (as opposed to Unicode character iteration)
* Unicode glyph string iteration (GlyphString)
* Number parsing (INumber) and numeric formatting, including percentages and currencies (NumFmt)
* Units conversion, scaling, and formatting (lengths, volumes, temperature, velocity, etc.) (Measurement and UnitFmt)
* Phone number parsing and normalization (PhoneNumber), geo-location (PhoneGeoLocator), and formatting (PhoneFmt)
* Personal name parsing (Name) and formatting (NameFmt)
* Mailing address parsing (Address) and formatting (AddressFmt)
* Collation/sorting and sortkey generation (Collator)
* Locale-sensitive upper- and lower-casing (CaseMapper)
* Information about writing systems/scripts (ScriptInfo)
* Information about currencies (Currency)
* Information about locale settings such as default time zone, default calendar, use of 12 or 24-hour clock, 
plus a lot more. (LocaleInfo)

Only need some of that? That's okay, there's a way to make smaller versions of ilib that only include the classes you need
and only the locales you need.

What Locales Does it Support?
------

In short: almost any that you can think of.

For most classes, it supports all locales that are in the Unicode CLDR (see http://cldr.unicode.org), which means hundreds. 
Since language settings are separate from region settings, the arbitrary combinations of those can reach well
into the thousands. For those classes of information where CLDR does not have info yet (such as phone formats), there is a 
much smaller set of locales that are supported, but for all classes, the top most used locales on the Internet are represented.

Where Does it Run?
-------

ILib has been tested in the following environments:

* nodejs 0.10
* Browsers:
    * Chrome 28+
    * Firefox 35+
    * Opera 12.16+
    * Safari 
    * Internet Explorer 8+
* Rhino on JDK 1.7 and 1.8 with Trireme (0.8.5)
* RingoJS 0.11
* Qt 5.4

Those environments have been tested on the following platforms where possible:

* Ubuntu 12.04+
* Windows 7 & 8
* Mac OSX

Example of Using iLib Under NodeJS or RingoJS
-------

iLib is a regular node module and can therefore be loaded using the built-in nodejs require() function.
Here is an example of using iLib to format the current date/time for Berlin, Germany. This same example
works equally well with ringojs running on rhino in a Java-based app server. 

~~~~~
var ilib=require("ilib");
var DateFactory = require("ilib/lib/DateFactory.js");
var DateFmt = require("ilib/lib/DateFmt.js");

var d = DateFactory();
var f = new DateFmt({
	locale: "de-DE",
    type: "datetime",
    length: "long",
    timezone: "Europe/Berlin"
});

f.format(d);
~~~~~

Result would be:

~~~~~
'07:45 06. Nov. 2014'
~~~~~

Where to Get it
-------

For node, you can simply install it using npm: 

~~~~~
npm install ilib
~~~~~

For ringojs, you can install it with the ringo package manager:

~~~~~
rp install ilib
~~~~~

ILib is also available on sourceforge.net from the svn repository at https://sourceforge.net/p/i18nlib/code/HEAD/tree/
or official iLib builds in tar balls at http://sourceforge.net/projects/i18nlib/files/

If you want to create your own version of ilib with a smaller set of classes than the big list above, you'll have to
get the source and build it yourself. This will require that you install java 1.7 or later, plus ant and nodejs.

Copyright and License
-------

Copyright &copy; 2011-2015, JEDLSoft

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

See the License for the specific language governing permissions and
limitations under the License.

More Information
------

Please point your browser to the following places to get more documentation:

- JSDocs: http://docs.jedlsoft.com/ilib/jsdoc/
- Wiki: https://sourceforge.net/p/i18nlib/wiki/iLib%20-%20an%20internationalization%20library%20written%20in%20Javascript/
- Source: https://sourceforge.net/p/i18nlib/code/HEAD/tree/
- Builds: http://sourceforge.net/projects/i18nlib/files/
