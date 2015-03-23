<meta charset="UTF-8">

iLib
==== 

iLib is an internationalization library written in pure Javascript. It does not require any other libraries to function,
and can run equally well in various browsers, nodejs, webOS, or rhino.

What Can iLib Do?
------

iLib contains many classes that cover a large number of i18n topics, a lot more than almost all other JS i18n libraries.

* String translation (ilib.ResBundle)
* String formatting, including plurals/choice formats (ilib.String)
* Character type functions (like the C/C++ ctype functions) (ilib.CType)
* Calendars (ilib.Cal)
    * Gregorian, Julian, ThaiSolar, Persian algorithmic, Persian astronomical, Hebrew, Arabic civil, Ethiopic, Chinese Han
* Date and time representation and conversion to other calendars (ilib.Date)
* Date and time formatting in all calendars, including full time zone support (ilib.DateFmt)
* Time zone information from IANA TZ database (ilib.TimeZone)
* Duration formatting for lengths of events, videos, music, etc. (ilib.DurFmt)
* Date range formatting with specific start and end times (ilib.DateRngFmt)
* Unicode character normalization using the Unicode Normalization Algorithm (ilib.NormString)
    * Also supports full character iteration (as opposed to Unicode character iteration)
* Unicode glyph string iteration (ilib.GlyphString)
* Number parsing (ilib.Number) and numeric formatting, including percentages and currencies (ilib.NumFmt)
* Units conversion, scaling, and formatting (lengths, volumes, temperature, velocity, etc.) (ilib.Measurement and ilib.UnitFmt)
* Phone number parsing and normalization (ilib.PhoneNumber), geo-location (ilib.GeoLocator), and formatting (ilib.PhoneFmt)
* Personal name parsing (ilib.Name) and formatting (ilib.NameFmt)
* Mailing address parsing (ilib.Address) and formatting (ilib.AddressFmt)
* Collation/sorting and sortkey generation (ilib.Collator)
* Locale-sensitive upper- and lower-casing (ilib.CaseMapper)
* Information about writing systems/scripts (ilib.ScriptInfo)
* Information about currencies (ilib.Currency)
* Information about locale settings such as default time zone, default calendar, use of 12 or 24-hour clock, 
plus a lot more. (ilib.LocaleInfo)

Only need some of that? That's okay, there's a way to make smaller versions of ilib that only include the classes you need
and only the locales you need.

What Locales Does it Support?
------

In short: almost any that you can think of.

For most classes, it supports all locales that are in the Unicode CLDR (see http://cldr.unicode.org), which means hundreds. 
Since language settings are separate from region settings, the arbitrary combinations of those can reach well
into the thousands. For those classes of information where CLDR does not have info yet (such as phone formats), there is a 
much smaller set of locales that are supported, but for all classes, the top most used locales on the Internet are represented.

Example of Using iLib Under Nodejs
-------

iLib is a regular node module and can therefore be loaded using the built-in nodejs require() function.
Here is an example of using iLib to format the current date/time for Berlin, Germany.

~~~~~
var ilib=require("ilib").ilib;

var d = ilib.Date.newInstance();
var f = new ilib.DateFmt({
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
