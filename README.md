<meta charset="UTF-8">

iLib
==== 

iLib is an internationalization library written in pure ES5 Javascript. It does not require any other libraries to function,
and can run equally well in various older and newer browsers, on various OS's (including mobile), nodejs, webOS, Qt/QML, 
RingoJS, React/Enact, or rhino/nashorn.

More elaborate documentation can be found [here](https://ilib-js.github.io/iLib/docs/)

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
* List formatting such as "Joe, Tom, and Steve" (ListFormatter)
* Alphabetic index keeping. For example, it can be used to put names on a contact list into their corresponding
letter buckets (AlphabeticIndex)

plus a lot more.

Only need some of that? That's okay, there's a way to make smaller versions of ilib that only include the classes you need
and only the locales you need using webpack.

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

* nodejs 0.10+
* Browsers:
    * Chrome 28+
    * Firefox 35+
    * Opera 12.16+
    * Safari 6+
    * Internet Explorer 8+
* Rhino on JDK 1.7+ and 1.8 with Trireme (0.8.5)
* RingoJS 0.11+
* Qt 5.4+

Those environments have been tested on the following platforms where possible:

* Ubuntu 12.04+
* Windows 7 & 8
* Mac OSX 10.04+
* Android
* iOS

Example of Using iLib Under NodeJS or RingoJS
-------

iLib is a regular node module and can therefore be loaded using the built-in nodejs require() function.
Here is an example of using iLib to format the current date/time for Berlin, Germany. This same example
works equally well with ringojs running on rhino in a Java-based app server. 

~~~~~
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

Other iLib Support
-------

### Prepackaged iLib

If you would like to run ilib in your webapp, you can use the pre-webpacked versions of
ilib in the [releases](https://github.com/iLib-js/iLib/releases) page on github.

### Webpack

If you already use webpack for your own project, you can use the ilib webpack
[loader](https://github.com/iLib-js/ilib-webpack-loader) and
[plugin](https://github.com/iLib-js/ilib-webpack-plugin) to include ilib code and locale
data into your own webpacked project. The advantage is that
it will only include those ilib classes you are actually using and only the locale data
for the locales you specify. That helps to minimize the file size of your webpack chunks.
See the README documentation in the 
[ilib webpack loader](https://github.com/iLib-js/ilib-webpack-loader)
for more details.

### No Webpack

If you do not use webpack for your own project, and yet you still want a minimal version
of ilib, you can use the [ilib scanner](https://github.com/iLib-js/ilib-scanner) to scan
your webapp code and create a webpack config that will build this minimal version for
you. You can just include the resulting js files in your webapp. See the README for 
that project for details.

### React

If you are using React in your project and would like to include ilib classes, you can
use the webpack loader and plugin mentioned above to do so.

Additionally, there is a new library of React components called [react-ilib](https://github.com/iLib-js/react-ilib)
that will eventually allow you to use all the ilib formatters as React components, such as an
address formatting component that will output an address in the correct format per locale.
It says "eventually" in the previous sentence because the project is new and there is
a lot left to code.

React-ilib will also include a number of new components
that allow you to do localized input form elements. For example, a localized address
form component will present all of the fields necessary for an address in a number of
different locales, along with the localized field labels and placeholder texts. The
result of a user filling out the form would be an ilib Address instance, ready to use!

### ES6

If you want to use ilib classes directly from ES6 instead of using React components, you 
can do that with the [ilib-es6](https://github.com/iLib-js/ilib-es6) project. With this
library, you can use ilib asynchronously with promises instead of node-style callbacks,
and you can import the classes in regular ES6 style. This library also works nicely in
React if you want to call the ilib classes directly instead of using react-ilib
components.

### Localizing Your Strings

If you use ilib in your javascript project, you can use the [loctool](https://github.com/iLib-js/loctool)
to extract the strings into XLIFF files that your translation vendor can translate
directly. When you received the localized XLIFF files back again, you can then run
the loctool again to generate localized assets, such as resource files that ilib's
ResBundle class can use, or copies of HTML files with localized text in them. See the
loctool documentation for more information.

Where to Get it
-------

For node, you can simply install it using npm or yarn:

~~~~~
npm install ilib
yarn add ilib
~~~~~

For ringojs, you can install it with the ringo package manager:

~~~~~
rp install ilib
~~~~~

ILib is also available on github at https://github.com/iLib-js/iLib
or official iLib builds in tar balls at https://github.com/iLib-js/iLib/releases

You can also build your own version from the sources using webpack. See the previous
section about webpack for links.

Copyright and License
-------

Copyright (c) 2011-2023, JEDLSoft

Ilib is licensed under the Apache License, Version 2.0 (the "License");
you may not use this library except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

See the License for the specific language governing permissions and
limitations under the License.

More Documentation
------

More elaborate documentation can be found [here](https://ilib-js.github.io/iLib/docs/).

Other Information
------

Please point your browser to the following places to get more documentation:

- JSDocs: https://ilib-js.github.io/iLib/docs/api/jsdoc/index.html
- Github: git clone git@github.com:iLib-js/iLib.git
- Builds: https://github.com/iLib-js/iLib/releases
- Wiki: https://github.com/iLib-js/iLib/wiki
