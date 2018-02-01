New Modularization Support in iLib 11.0
---------------------

In iLib version 1.0 through 10.0, all functions and classes appeared underneath the namespace "ilib". This did not make for easy disentanglement, nor was it easy to load only the code that you wanted. By default, you got everything. 

In an attempt to make that a little better, 3 sizes were introduced: core, standard, and full. These included various classes in ilib that many apps might use. If you wanted something different than those three sizes, you had to roll your own copy of ilib. But what if different parts of your app used different classes within iLib? Can't we just load and use those parts we really need?

In 11.0, we are introducing a major refactoring of the code to support modularization in a CommonJS style which can be used directly in nodejs, local web pages via the file: protocol, even within Qt/QML. When Ecmascript 6 (ES6) is finally approved, it will be easy to move from the CommonJS style modules to the ES6 ones and we can start to use those modules directly in browsers as well with remote web pages.

But wait, I hear you thinking, am I going to have to change my app just to upgrade to iLib 11.0? The answer is yes, but not for a while. there is a set of backwards-compatibility stubs that allow your code to work as-is without any modifications with 11.0. This buys you time to update your code to the new modularized scheme when you are ready.

Changes
-------

Most classes have become their own first class modules. For example, the "ilib.DateFmt" class is now the "DateFmt" module.

Included at the end of this wiki page is the mapping between the old class name and the new ones. For the most part, classes have the same name as before without the "ilib." namespace at the beginning, although a few of the classes have changed names to make them more clear. For example, "ilib.GeoLocator" has become "PhoneGeoLocator" to make it more clear what kind of locator it is. With the new name, you can tell that it is *not* an IP address locator (which is what you think of normally for a geolocator), but one for phone numbers instead.

Static functions have remained under a namespace, though there are now under new sub-namespaces that group together related functions. For example, the adjusted modulo function "ilib.amod" is now in the MathUtils namespace. The next section will give you examples of how you can access and use these namespaces.

Accessing the New Classes and Functions
-------------------------

In nodejs, you can access the new classes from the ilib module in npm:

~~~~~~
var ilib = require("ilib");
var DateFmt = ilib.DateFmt; // will lazy load it

var df = new DateFmt({locale: "de-DE", length: "full"});
console.log(df.format(new Date()));
~~~~~~

or alternately:

~~~~~~
// this initializes the loader so that ilib knows how to read its locale data
var ilib = require("ilib");

// after the loader is initialized, you can access ilib classes directly using:
var DateFmt = require("ilib/lib/DateFmt");

var df = new DateFmt({locale: "de-DE", length: "full"});
console.log(df.format(new Date()));
~~~~~~

For static functions, you can get the sub-namespaces from ilib in a similar way. For example, if you wanted to use the adjusted modulo function (formerly "ilib.amod"), you would use the MathUtils namespace:

~~~~~~
var MathUtils = require("ilib/lib/MathUtils");

var result = MathUtils.amod(largeNumber, modulus);
~~~~~~

Alternately, you can access it underneath the ilib namespace:

~~~~~~
var MathUtils = require("ilib").MathUtils;

var result = MathUtils.amod(largeNumber, modulus);
~~~~~~

Both of these work the same way.

Accessing the New Classes and Functions in Web Pages
-----------------------

If you previously used ilib via the pre-assembled files, you can continue to do so without using require() to get all of the modules. The core, standard, and full sizes still exist as before. All of the new ilib modules like "DateFmt" will be defined in the root context of your web page already. The assembly tool automatically strips out the require() statements and the "module.exports =" parts from the assembled file because they are not needed. The assembly tool already makes sure that the modules are assembled in the right order so that nothing is used before it is defined.

Assembled File Names
-------------

Note that the file names of the assembled files have been altered to regularize them. All assembled ilib file names now follow this template:

~~~~~
ilib-\[usage]\[-assembly]\[-compilation].js
~~~~~

Where

* usage is either "core", "standard", or "full" for the various sizes, or "ut" for the unit testing file, or "demo" for the version included in the demo site.
* assembly is either "dyn" for dynamic data loading, or nothing for assembled data
* compilation is either "compiled" for the compressed/minified code, or nothing for the full-size uncompressed and commented code

In previous builds, these parts were not in a consistent order across file names.

That means that if you were including ilib-dyn-full.js in your script tags previously, your html should be updated to include the new file name:

Old: &lt;script name="javascript" src="ilib-dyn-full.js">&lt;/script>

New: &lt;script name="javascript" src="ilib-full-dyn.js">&lt;/script>

Note that some of the file names are the same as before. Here are the mappings:

Old Name | New Name
---------|---------
ilib-core-compiled.js | ilib-core-compiled.js
ilib-core.js | ilib-core.js
ilib-dyn-core-compiled.js | ilib-core-dyn-compiled.js
ilib-dyn-core.js | ilib-core-dyn.js
ilib-standard-compiled.js | ilib-standard-compiled.js
ilib-standard.js | ilib-standard.js
ilib-dyn-standard-compiled.js | ilib-standard-dyn-compiled.js
ilib-dyn-standard.js | ilib-standard-dyn.js
ilib-full-compiled.js | ilib-full-compiled.js
ilib-full.js | ilib-full.js
ilib-dyn-full-compiled.js | ilib-full-dyn-compiled.js
ilib-dyn-full.js | ilib-full-dyn.js


Compatibility and Upgrading Your Code
-------------

Virtually none of the classes and functions have changed in functionality or parameters. The same classes exist, though renamed. This change was about refactoring, not adding new features. Thanks to the over 17,000 unit tests, we can say with some certainty that things still work they way they did before!

This means it should not be too hard to update your code to use the new modules -- mostly it is syntactical updates, not semantic.

Backwards-Compatibility Stub Files
========

Having said that, there are a set of stub files that help with the upgrade. These stubs files recreate the old ilib namespace in terms of the new modules. This allows your code to call the new modules using the old namespace names without any changes. 


Usage | Stub File | Comments
------|-----------|---------
web pages using old ilib namespace | ilib-stubs.js | Include this in a script tag after the ilib script in order to define the old ilib namespace:<p>&lt;script language="javascript" src="ilib-full-compiled.js"&gt;&lt;/script&gt;<br>&lt;script language="javascript" src="ilib-stubs.js"&gt;&lt;/script&gt;
nodejs | ilib-stubs-dyn.js | Automatically included in the npm module. Defines the old ilib namespace, but modules are dynamically loaded when they are needed. More on this dynamic loading below.
web pages using the new modules | ilib-stubs-map.js | Defines a fake require() function that allows you to require() ilib modules. Mostly this stubs file is useful for the unit tests. It is not recommended for your code because it redefines the require() function.

Mappings From the Old ILib NameSpace
-------------

Here are all the mappings from the old ilib namespace classes and functions to the new modularized names:

Old Class, Function, or Method | New Class, Function or Method
-------------------------------|------------------------------
ilib.Date.initAstro | Astro.initAstro
ilib.Date._dtr | Astro._dtr
ilib.Date._rtd | Astro._rtd
ilib.Date._dcos | Astro._dcos
ilib.Date._dsin | Astro._dsin
ilib.Date._dtan | Astro._dtan
ilib.Date._fixangle | Astro._fixangle
ilib.Date._fixangr | Astro._fixangr
ilib.Date._equinox | Astro._equinox
ilib.Date._deltat | Astro._deltat
ilib.Date._obliqeq | Astro._obliqeq
ilib.Date._sunpos | Astro._sunpos
ilib.Date._nutation | Astro._nutation
ilib.Date._equationOfTime | Astro._equationOfTime
ilib.Date._poly | Astro._poly
ilib.Date._universalFromLocal | Astro._universalFromLocal
ilib.Date._localFromUniversal | Astro._localFromUniversal
ilib.Date._aberration | Astro._aberration
ilib.Date._nutation2 | Astro._nutation2
ilib.Date._ephemerisCorrection | Astro._ephemerisCorrection
ilib.Date._ephemerisFromUniversal | Astro._ephemerisFromUniversal
ilib.Date._universalFromEphemeris | Astro._universalFromEphemeris
ilib.Date._julianCenturies | Astro._julianCenturies
ilib.Date._solarLongitude | Astro._solarLongitude
ilib.Date._lunarLongitude | Astro._lunarLongitude
ilib.Date._newMoonTime | Astro._newMoonTime
ilib.Date._lunarSolarAngle | Astro._lunarSolarAngle
ilib.Date._newMoonBefore | Astro._newMoonBefore
ilib.Date._newMoonAtOrAfter | Astro._newMoonAtOrAfter
ilib.Date._nextSolarLongitude | Astro._nextSolarLongitude
ilib.Date._floorToJD | Astro._floorToJD
ilib.Date._ceilToJD | Astro._ceilToJD
ilib.Date.RataDie | RataDie
ilib.shallowCopy | JSUtils.shallowCopy
ilib.deepCopy | JSUtils.deepCopy
ilib.mapString | JSUtils.mapString
ilib.indexOf | JSUtils.indexOf
ilib.toHexString | JSUtils.toHexString
ilib.isDate | JSUtils.isDate
ilib.merge | JSUtils.merge
ilib.isEmpty | JSUtils.isEmpty
ilib.hashCode | JSUtils.hashCode
ilib._handlerFactory | PhoneHandlerFactory
ilib.signum | MathUtils.signum
ilib._roundFnc.floor | MathUtils.floor
ilib._roundFnc.ceiling | MathUtils.ceiling
ilib._roundFnc.down | MathUtils.down
ilib._roundFnc.up | MathUtils.up
ilib._roundFnc.halfup | MathUtils.halfup
ilib._roundFnc.halfdown | MathUtils.halfdown
ilib._roundFnc.halfeven | MathUtils.halfeven
ilib._roundFnc.halfodd | MathUtils.halfodd
ilib.mod | MathUtils.mod
ilib.amod | MathUtils.amod
ilib.bsearch | SearchUtils.bsearch
ilib.bsearch.number | SearchUtils.bsearch.number
ilib.bisectionSearch | SearchUtils.bisectionSearch
ilib.mergeLocData | Utils.mergeLocData
ilib.getLocFiles | Utils.getLocFiles
ilib._callLoadData | Utils._callLoadData
ilib.loadData | Utils.loadData
ilib.AddressFmt | AddressFmt
ilib.Address | Address
ilib.Calendar | Calendar
ilib.CodePointSource | CodePointSource
ilib.Collator | Collator
ilib.CType.isAlnum | isAlnum
ilib.CType.isAlpha | isAlpha
ilib.CType.isAscii | isAscii
ilib.CType.isBlank | isBlank
ilib.CType.isCntrl | isCntrl
ilib.CType.isDigit | isDigit
ilib.CType.isGraph | isGraph
ilib.CType.isIdeo | isIdeo
ilib.CType.isLower | isLower
ilib.CType.isPrint | isPrint
ilib.CType.isPunct | isPunct
ilib.CType.isScript | isScript
ilib.CType.isSpace | isSpace
ilib.CType.isUpper | isUpper
ilib.CType.isXdigit | isXdigit
ilib.CType | CType
ilib.Currency | Currency
ilib.DateFmt | DateFmt
ilib.DateRngFmt | DateRngFmt
ilib.DurFmt | DurationFmt
ilib.ElementIterator | ElementIterator
ilib.GlyphString | GlyphString
ilib.JulianDay | JulianDay
ilib.LocaleInfo | LocaleInfo
ilib.Locale | Locale
ilib.LocaleMatcher | LocaleMatcher
ilib.StringMapper | StringMapper
ilib.NameFmt | NameFmt
ilib.Name | Name
ilib.NodeLoader | NodeLoader
ilib.NormString | NormString
ilib.NumFmt | NumFmt
ilib.Number | INumber
ilib.ResBundle | ResBundle
ilib.ScriptInfo | ScriptInfo
ilib.String | IString
ilib.TimeZone | TimeZone
ilib.UnitFmt | UnitFmt
ilib.Date.CopticDate | CopticDate
ilib.Cal.Coptic | CopticCal
ilib.Date.EthiopicDate | EthiopicDate
ilib.Cal.Ethiopic | EthiopicCal
ilib.Date.GregDate | GregorianDate
ilib.Cal.Gregorian | GregorianCal
ilib.Date.HanDate | HanDate
ilib.Cal.Han | HanCal
ilib.Date.HebrewDate | HebrewDate
ilib.Cal.Hebrew | HebrewCal
ilib.Date.IslamicDate | IslamicDate
ilib.Cal.Islamic | IslamicCal
ilib.Date.JulDate | JulianDate
ilib.Cal.Julian | JulianCal
ilib.Date.PersDate | PersianDate
ilib.Date.PersAlgoDate | PersianAlgoDate
ilib.Cal.PersianAlgo | PersianAlgoCal
ilib.Cal.Persian | PersianCal
ilib.Date.ThaiSolarDate | ThaiSolarDate
ilib.Cal.ThaiSolar | ThaiSolarCal
ilib.Date.CopticRataDie | CopticRataDie
ilib.Date.EthiopicRataDie | EthiopicRataDie
ilib.Date.GregRataDie | GregRataDie
ilib.Date.HanRataDie | HanRataDie
ilib.Date.HebrewRataDie | HebrewRataDie
ilib.Date.IslamicRataDie | IslamicRataDie
ilib.Date.JulianRataDie | JulianRataDie
ilib.Date.PersAlgoRataDie | PersAlgoRataDie
ilib.Date.PersAstroRataDie | PersRataDie
ilib.Date.RataDie | RataDie
ilib.Date.newInstance | DateFactory
ilib.Cal.newInstance | CalendarFactory
ilib.CaseMapper | CaseMapper
ilib.StateHandler | PhoneHandler
ilib.NumPlan | NumberingPlan
ilib.PhoneFmt | PhoneFmt
ilib.GeoLocator | PhoneGeoLocator
ilib.PhoneLoc | PhoneLocale
ilib.PhoneNumber | PhoneNumber
ilib.Measurement.Area | AreaUnit
ilib.Measurement.DigitalStorage | DigitalStorageUnit
ilib.Measurement.Energy | EnergyUnit
ilib.Measurement.FuelConsumption | FuelConsumptionUnit
ilib.Measurement.Length | LengthUnit
ilib.Measurement.Mass | MassUnit
ilib.Measurement.Velocity | VelocityUnit
ilib.Measurement.Speed | VelocityUnit
ilib.Measurement.Temperature | TemperatureUnit
ilib.Measurement.Time | TimeUnit
ilib.Measurement.Unknown | UnknownUnit
ilib.Measurement.Volume | VolumeUnit
ilib.Measurement | MeasurementFactory
ilib.Date | DateFactory
ilib.Cal | CalendarFactory

Factory Functions
=============

Please note that 3 factory methods have been replaced by separate factory functions that are now separate from the classes they manufacture. By doing this, we could disentangle the dependencies properly and instantiate the subclasses without creating circular dependencies.

* ilib.Date.newInstance - use the new DateFactory function to create new instances of date subclasses. 
* ilib.Cal.newInstance - use the new CalendarFactory function to create new instances of calendar subclasses
* ilib.Measurement - use the new MeasurementFactory function to create new instances of a measurement unit based on the units provided. For example, calling with a unit of "km" will manufacture a LengthUnit subclass for you because kilometers are a unit of length.

Example: old way of creating a date subclass:

~~~~~
// creates an instance of an ilib.Date.ThaiSolar date object.
var d = ilib.Date.newInstance({locale: "th-TH"});
~~~~~

And the new way:

~~~~~
// creates an instance of an ThaiSolarDate date object.
var d = DateFactory({locale: "th-TH"});
~~~~~

All the parameters are the same. You just have to update the method to the function name in your code.

Other Conflicts
==========

Also note that a few of the classes conflicted with standard intrinsic Javascript classes when you remove them from the "ilib" namespace. In those cases, the letter "I" was prepended to their names to distinguish them from the intrinsic classes. These are:

* IDate - the superclass for all calendar date subclasses
* INumber - the number parser and representation class
* IString - an ilib string, which is like a regular JS string, but with extra formatting methods

Platform Support
----------

ILib 11.0 has been tested in many different ways on many different platforms. 

Testing Parameters
==========

Tests environments are affected by the following parameters:

- modularized versus legacy - modularized code tests the new modules whereas the legacy tests test the old ilib namespace. They are 99.9% the same tests, but test syntax
- code assembled into one file or not - whether the code is assembled into one big file or if the modules are loaded dynamically as they are needed
- data assembled into one file or not - whether the locale data for the chosen locales is also in that same big file with the code, or if it is loaded dynamically. Note that for the locale data to be in the one big file, all the code has to be assembled into that file first. It is currently not possible to assemble the locale data but not the code that uses it.
- compilation - code is either compiled and compressed with the google closure compiler, or it is left uncompiled in all its glory with comments and whitespace and all

Note that there currently is no way to compile/compress the modularized code, so it is always loaded uncompiled for now. We are working on ways of making it possible to have a compiled/compressed set of modules.

Multiplying that out, here are the ways that it can be tested:

- Modularized, code and data assembled into one file, compiled
- Modularized, code and data assembled into one file, uncompiled
- Modularized, code assembled into one file, data loaded dynamically, compiled
- Modularized, code assembled into one file, data loaded dynamically, uncompiled
- Modularized, both code and data loaded dynamically, uncompiled
- Legacy tests, code and data assembled into one file, compiled
- Legacy tests, code and data assembled into one file, uncompiled
- Legacy tests, code assembled into one file, data loaded dynamically, compiled
- Legacy tests, code assembled into one file, data loaded dynamically, uncompiled
- Legacy tests, both code and data loaded dynamically, uncompiled

The "legacy tests" have only been modified minimally (updated paths, etc.) to get them to run in the new system. These test the backwards compatibility stubs and they test that unmodified  application code can work properly with the new iLib code.

Tested Platforms
=============

The following platforms have been tested so far. More platforms will be added to this list as they pass all unit tests:

Ubuntu 14.04LTS:

- Nodejs 0.10.38
- Firefox 37.0.1
- Chrome 40.0.2214.95
- Opera 12.16
- Qt/QML 5.4
- Rhino on JDK 1.7 (via trireme)

Windows 7:

- Nodejs 0.10.38
- Firefox 37.0.1
- Chrome 40.0.2214.115
- IE 11.09.9600.17728

Android 4.4.4:

- Chrome 42.0.2311.111

webOS for the SmartTV:

- Nodejs 0.10.35


Here are the list of platforms that still need to be tested:

OSX:

- Nodejs
- Firefox
- Chrome
- Opera
- Safari

iOS:

- Safari
- Chrome

Windows:

- Opera
- Rhino
- older versions of IE

webOS for SmartTVs:

- Qt/QML 5.4
- enyo 2.5.0/Webkit

New Platforms
=============

The following platform was added in this release: Qt/QML 5.4. QML has the ability to run javascript using a built-in javascript engine. The modularized iLib code can run in this engine now. 

To use it, you will need to use a plugin that allows file system access. The XMLHttpRequest class in the QML javascript engine does not allow synchronous reads from the local file system and therefore ilib could not read its locale data except via async reads. To get around this, we have implemented a Qt/C++ FileReader plugin that you can find in the source under the qt/FileReader directory. 

To use ilib in the Qt/QML context:

1. Compile the FileReader plugin with QtCreator or use qmake followed by make for your system. This will produce a shared library (qt/build-filereader/libFileReader.so on linux, and qt/build-filereader/FileReader.dll on Windows) and a qmldir file.
2. Under your QML app, create a directory imports/FS and put the shared library and the qmldir file there. The directory is called "FS" to echo the the "fs" object in nodejs that allows access to the file system.
3. At the top of your QML code, you have to import the library and the ilib code.
4. In the body of your code, initialize ilib with a new loader so that it can load its locale data.

The resulting code should look a little like the following example:

~~~~~~
import QtQuick 2.0
import FS 1.0 as FS
import "<path-to-ilib>/lib/ilib-qt.js" as QtIlib

QtObject {
    // convenience properties to make them global, though they don't have to be
    property var ilib: {}
    property var require: {}

    Component.onCompleted: {
        ilib = QtIlib.ilib;
        var loader = new QtIlib.QmlLoader(FS.FileReader);
        ilib.setLoaderCallback(loader);
        require = QtIlib.require;

        // after that, these look like normal ilib usage:
        DateFmt = require("<path-to-ilib>/lib/DateFmt.js");
        var df = new DateFmt({whatever params you want});
        var currentTimeFormatted = df.format(new Date());
    }
}
~~~~~~

Currently, all 17,000 or so unit tests pass in Qt/QML using the above method. See the files in the directory qt/UnitTest to see how it works. To run the unit tests, do the following:

~~~~~~
qmlscene --qt=5 -I imports/FS TestRunner.qml
~~~~~~

That assumes you make the imports/FS directory with the shared library and the qmldir file in it.

The unit tests will run, but currently do not exit by themselves yet after the test summary is complete.

Using ILib in Various Environments
=================================

ILib was written to be platform-independent so that it can run anywhere. However, there are some platform-dependent functions such as how to load the locale data files or dynamically require() the modules that the current code depends on. These are isolated into separate files that are re-implemented per environment. In order to use them easily, there are some "wrapper" modules that do this for you.

For example, under nodejs, the wrapper module is called "ilib-node.js". This is a simple file that loads in the top-level ilib module and the node data loader module, and then sets the loader into ilib so that it knows how to load the locale data under node.

Here are the list of wrapper files:

File | Environment | Notes
-----|-------------|------
lib/ilib-node.js | nodejs | This is used by the package.json file. See longer description below.
lib/ilib-qt.js | Qt/QML 5.4 or later | See the previous section about this
lib/ilib-web.js | Browsers loading local files | Certain protection settings against loading local files need to be turned off in order to use ilib in browsers
lib/ilib-rhino.js | Rhino | Supported from build 11.0.004 onwards.
lib/ilib-ringo.js | RingoJS on Rhino | Currently in development.
- | Browsers loading remote code files | Not supported. See discussion below.
- | Browsers loading remote locale data | Supported. See discussion below.

ILib in Nodejs
--------------

ILib is packaged as node module and published on npm. This comes with a package.json file that automatically uses lib/ilib-node.js to load in and initialize ilib with the node loader.

Thus, the following are equivalent:

~~~~~
var ilib = require("ilib"); // relies on the package.json

and

var ilib = require("ilib/lib/ilib-qt.js"); // explicitly use the wrapper
~~~~~

ILib in Rhino
-------------

Rhino support is available in build 11.0.004 or later. This includes support for running under Trireme (a nodejs emulation package for Rhino) which is used for running the same unit tests that currently run under nodejs.

A lot of international functionality is already provided under Rhino by using the standard JDK classes such as java.util.Collator so you don't technically need ilib for those things. However, ilib does provide some functionality that is not currently available in the JDK such as name and phone number classes. Ilib will also allow you to write code that works equally well under browsers where the JDK classes are not available, under nodejs, or on the server side under Rhino and uses the same ilib API everywhere.

ILib in RingoJS
-------------

We are also working on support for running ilib as a plug-in package under [RingoJS](http://ringojs.org/) which is a nifty package that allows you to write multi-threaded server-side Javascript code to respond to servlet requests inside of Java application servers such as JBoss, Jetty, or Tomcat. (Yes, really, multi-threaded!)

Currently, it is not ready. We will let you know when it is.

Eventually, we will publish ilib as a ringo package using the ringo package manager to make it easy to get that code.

ILib in Browsers with Local Files
----------------

ILib can load local files and code using the file: protocol with XHR. However, most browsers have restriction against this for security reasons. Debugging and playing with javascript in the browser is a lot easier if you can do it locally. To use iLib locally, you have to turn off these restrictions. See [this page](https://github.com/mrdoob/three.js/wiki/How-to-run-things-locally) for a description of how to turn off these restrictions for some popular browser while developing your code.

Once you have done that, you can make web pages that have the following sort of code at the top of them:

~~~~~
<head>
<script type="javascript" src="path-to-ilib/lib/ilib-web.js"></script>
<script type="javascript">
// use any ilib classes here. These rely on the current browser locale. All
// classes can be used synchronously, as if the locale data were already
// assembled into the file.
var df = new DateFmt({type: "datetime", length: "full"});
var date = DateFactory(); // with no params, this returns "right now" in the current calendar
var dateString = df.format(d);
// use the string "dateString" now
</script>
</head>
~~~~~

ILib in Browsers with Remote Files
------------------

As you probably already know, using XHR to load remote files synchronously is generally a bad idea, as that creates a horrible experience for the end user of your web page. Consequently, many browsers have deprecated synchronous XHR and/or are planning to stop supporting it in the future. As such, there is no way to do remote dynamic code loading with XHR and iLib does not currently support it. In the future, when ES6 is accepted and implemented in browsers, dynamic code loading will be possible because it will be a first-class feature of the language. Until then, we just have to wait for it.

What is possible today is using the pre-assembled iLib code with dynamically loaded locale data, and call all iLib classes asynchronously. This way, your web page can be a lot smaller because there is a LOT of locale data and it is a pain to pre-assemble all of it into the js file in case you might need it.

Asynch Usage
------

Here is an example of how you can do it asynchronously. The files ilib-web-async.js and ilib-web-async-compiled.js contain the web loaders without all the CommonJS wrapper code around them so that they can be used successfully in browsers. These files appear in build 11.0.004 and later.

~~~~~
<head>
<script type="javascript" src="path-to-ilib/lib/ilib-full-dyn-compiled.js"></script>
<script type="javascript" src="path-to-ilib/lib/ilib-web-async-compiled.js"></script>
<script type="javascript">
// this essentially does the same thing as the wrappers mentioned earlier
var loader = new WebLoader();
ilib.setLoaderCallback(loader);

// indicate that we are using static code, but dynamically loaded data
ilib._dyncode = false; 
ilib._dyndata = true;

// now use any ilib classes here, but make sure to use them asynchronously.

new DateFmt({
    type: "datetime", 
    length: "full",
    sync: false,
    onLoad: function (df) {
        // With no params, DateFactory returns "right now" in the current calendar.
        var date = DateFactory({
            sync: false,
            onLoad: function (d) {
                var dateString = df.format(d);
                // use the string "dateString" now
            }
        });
    }
});
</script>
</head>
~~~~~

Synch Usage
-----

If you don't want to call iLib asynchronously, then you will have to put all the locale data into the js file itself. This makes it larger, but easier to use. iLib releases come with copies of ilib already pre-assembled into one of three sizes: core, standard, and full. The sizes indicate the amount of iLib classes are assembled along with their locale data. For most apps, you only need the standard size which contains only the classes you would use frequently. All three sizes come pre-assembled with the locale data for the top 20 most used internet locales. (Have a look -- there are a few surprises in there!)

Here's how you use it:

~~~~~
<head>
<script type="javascript" src="path-to-ilib/lib/ilib-full-compiled.js"></script>
<script type="javascript">
// use any ilib classes here. These rely on the current browser locale. All
// classes can be used synchronously
var df = new DateFmt({type: "datetime", length: "full"});
var date = DateFactory(); // with no params, this returns "right now" in the current calendar
var dateString = df.format(d);
// use the string "dateString" now
</script>
</head>
~~~~~
