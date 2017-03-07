iLib Classes
------------

iLib is composed of a number of classes that perform or wrap locale-sensitive functions so that you do not have to be an expert in internationalization to get your code to do the right thing in every locale.

Each class is implemented in a separate source code file so that the classes can be combined to create a version of iLib that only contains the parts you need. (See "Roll Your Own" section below for details.) 

Many of the classes depend on other classes, and the dependencies are documented in special "directive" comments inside each file. (See the "Dependencies" section below.) There is an assembly tool that comes with this project which can be used to combine the classes your app needs plus any classes they depend on plus any locale data that is needed for the locales that your app needs to support into a single JS file that your app may include.

For the most part iLib contains functionality that is not implemented in the standard libraries of Javascript engines today. A few functions, like date formatting, collation, and number formatting were recently added to the ECMAScript standard (the ECMA specification of Javascript). These work well and are fast, but only exist on some browsers, and only on recent versions of those browsers. If you want your web site to work well on all browsers, these have to be implemented in pure Javascript for the benefit of older browsers. This is where iLib comes in. For some classes, iLib will try to detect whether the base Javascript engine supports the newly added i18n functions and call them if they are available. In this case, the calls are usually implemented in native code and are relatively fast. If the calls are not available, it uses the pure Javascript version of the code.

iLib Locale Data
------------

ILib depends on a large amount of locale data that gives formats and settings for a large number of languages, scripts, and regions around the world. Locales are specified using the [BCP-47 conventions](http://en.wikipedia.org/wiki/IETF_language_tag) for locale names, and the parts of the locale specifiers are given in the directory names of the locale data.

The BCP-47 convention uses ISO-639 language tags (2 or 3 lower case letter), ISO 15924 script tags (4 letter tags where the first letter is capitalized and the last 3 are not), and ISO 3166 region tags (2 letter upper case letters). Directories containing the locale data in ilib are named using these standards as well. The top level directories correspond to language tags. Script directoriess can only exist inside of languages, and variant directories can only exist inside of language or region directories. On Windows systems, the file system is case-insensitive, so the 2 letter language names would conflict with the 2 letter region names if they existed in the same directory. So to avoid this problem, directories for regions are put under the "und" language tag (this stands for "undetermined").

The data was separated out to be language, script, or region specific so that arbitrary locales can be created with any combination of language-script-region. For example, Chinese is not an official language in the United States, but you can form a "zh-Hant-US" locale by taking the language-specific settings from the "zh" and "zh/Hant" directories, and combining them with the region specific settings in the "und/US" directory. This locale uses Chinese traditional characters for formatting dates and such, but the default time zone is in the US, and when you format currency, it will be in US dollars for example.

Locale data is combined in this order:

1. language
* und/region
* language/script
* language/region
* region/variant
* language/script/region
* language/region/variant
* language/script/region/variant

Synchronous and Asynchronous Calls
------------

Every class is designed to be usable in a synchronous or asynchronous manner so that locale data can be loaded asynchronously from a remote server if needed. Under nodejs, the calls should be used synchronously, as this creates more simple code. Alternately, if you have assembled all of the locale data for the locales your apps needs right into the javascript file, you can use the ilib call synchronously as well.

Synchronous calls usually results directly, and asynchronous calls return results by calling a callback function that you must provide. The asynchronous calls are almost always in the constructor of the object which loads the locale data it needs to do its job. That is, once the instance is constructed, you can use its methods synchronously from that point on.

Here are examples of formatting a date each way. First, synchronous:

~~~~~
var ilib = require("ilib");
var DateFmt = require("ilib/lib/DateFmt");

var df = new DateFmt({
    length: "full",
    type: "date",
    timezone: "America/Los_Angeles"
});
var str = df.format(new Date());
~~~~~

Now, asynchronous:

~~~~~
var ilib = require("ilib");
var DateFmt = require("ilib/lib/DateFmt");

var df, str;
new DateFmt({
    length: "full",
    type: "date",
    timezone: "America/Los_Angeles"
    sync: false,
    loadParams: {},
    onLoad: ilib.bind(this, function(formatter) {
        df = formatter;
        str = df.format(new Date());
    })
});
~~~~~

Each class in ilib that supports the asynchronous mode of operation has to support the following 3 parameters:

* onLoad - a function to call when the locale data is finished loading and the object is instantiated. The first parameter to this function will be the instance that was created.
* loadParams - an arbitrary object that is passed to the loader instance when the locale data is loaded. The contents of the load parameters is a private agreement between the app code and the loader code. ilib does not know what is inside of this object.
* sync - if false, call asynchronously, otherwise call synchronously. If this is false, the onLoad function must be given or else there will be no way to retrieve the results of the call, because the instantiated object is not returned.

See the next sections for more information about using loaders to retrieve locale data.

Files that iLib Ships With
================================

There are three dimensions that control the size and usage of iLib files. These are:

1. Size - determines how many iLib classes are in the file
1. Compilation - whether the files are compiled/compressed or if they are in plain text
1. Assembly - whether or not the files contain locale data or they expect to load the locale data dynamically

All iLib classes are implemented in their own files so that they can be easily mixed and matched with each other. ILib includes an assembly tool that can put these files together into a single file, taking care of dependencies and making sure that the classes appear in the correct order. See the section "Matrix of Shipping iLib Versions" below for a listing of all the file names for each of these 3 dimensions.

If your app does not need particular classes, you might be able to leave them out of iLib by assembling your own version of iLib. See the section "Roll Your Own" below for more information on how to do this.

Size
----

If you do not want to roll your own, there are three pre-assembled sizes of iLib to choose from:

* core: the most minimal part of ilib for apps that only need to translate and format strings. The code is very small, but does not include many classes.
* standard: a medium-sized version of ilib that contains the classes that most apps will need. It is recommended that most apps should use this size.
* full: this is the large-size version that contains every available class in ilib

The file names for these are quite straight-forward: ilib-core.js, ilib-standard.js, and ilib-full.js respectively.

Compiled vs. Uncompiled
------------

In order to reduce the time it takes to load the code and data, the assembled ilib files can be compiled with the Google Closure Compiler. This removes all the extraneous white space, new lines, and comments, and compresses internal variable and function names to a smaller name in order to make the file smaller but still logically equivalent. The Closure Compiler can also do syntax checking using the inline jsdoc comments in order to find some errors.

The compiled version of each file is intended to be used with production code. The uncompiled file is much more useful when debugging your code to find out what may be going wrong.

The compiled files usually have a "-compiled" suffix on them, whereas the uncompiled ones do not. For example "ilib-standard.js" is the standard size of ilib, and "ilib-standard-compiled.js" is the same code, except compiled using the Closure Compiler.

Assembled vs. Dynamic
------------

ILib depends on a huge amount of locale data in order to operate. There are two ways to gain access to this locale data: assemble it in to the javascript file directly, or load it dynamically from the files in the locale directory. Here are the pros and cons for each:

Assembled Version 

*Version* | *Pros* | *Cons*
----------|--------|-------
assembled | All objects can be instantiated quickly, as the data is already loaded in memory | The js file takes a long time to load and parse, as all the data is parsed at load time.
 | All objects can be instantiated synchronously because no loading is necessary, though asynchronous usage is also possible. | You must decide at assembly time which locales you wish to support.
 | Can be run without a loader, such as in a web page, which can minimize the number of network calls | The number of locales is limited, and there is no way to load more
 | Self-contained and can be used anywhere | File size is huge, depending on the number of locales you wish to support in your app
dynamic | The file size is relatively small | Instantiating an object for the first time incurs a small time penalty at run time to load the locale data via the loader. The data is cached so that subsequent calls are quick. |
 | Can support any locale that iLib supports | If the loader only supports asynchronous loading (for example, a loader that uses XHR in a browser), then you can only call iLib asynchronously as well. 
 | Locale data or translations can be updated without touching the code | The code needs to be reloaded to clear the cache and load the new data

The ilib files that are used with a dynamic loader have the suffix "-dyn" on them.

In order to limit the size of the pre-assembled iLib files that contain locale data, the files are only assembled with the locale data for the top 20 locales in the world, according to Internet usage in 2012. (This may change in future if some other locales become more prominent.) If you need to support locales other than these top 20, you will have to roll your own version of iLib. See the section "Roll Your Own" below for more information about that.

As of 2012, the top 20 locales by Internet usage were as follows:

*Locale* | *Language* | *Region*
---------|------------|---------
en-AU | English | Australia
en-CA | English | Canada
en-GB | English | Great Britain
en-IN | English | India
en-NG | English | Nigeria
en-PH | English | Philippines
en-PK | English | Pakistan
en-US | English | United States
en-ZA | English | South Africa
de-DE | German | Germany
fr-CA | French | Canada
fr-FR | French | France
es-AR | Spanish | Argentina
es-ES | Spanish | Spain
es-MX | Spanish | Mexico
id-ID | Bahasa Indonesia | Indonesia
it-IT | Italian | Italy
ja-JP | Japanese | Japan
ko-KR | Korean | Republic of Korea
pt-BR | Portuguese | Brazil
ru-RU | Russian | Russia
tr-TR | Turkish | Turkey
vi-VN | Vietnamese | Vietnam
zh-Hans-CN | Chinese (simplified) | China
zh-Hant-HK | Chinese (traditional) | Hong Kong
zh-Hant-TW | Chinese (traditional) | Taiwan
zh-Hans-SG | Chinese (simplified) | Singapore

Additionally, the locale zxx-XX (Undefined language, unknown region) is included, which is used at the pseudo-translation locale. This is a dynamically-generated translation used for testing the translation-readiness of apps.

Matrix of Shipping iLib Versions
--------------------------------

Putting together the three dimensions of iLib versions (size, compilation, and assembly), we end up with the following matrix of file names:

*Compilation* | *Core Size* | *Standard Size* | *Full Size*
--------------|-------------|-----------------|------------
Assembled Uncompiled | ilib-core.js | ilib-standard.js | ilib-full.js
Assembled Compiled   | ilib-core-compiled.js | ilib-standard-compiled.js | ilib-full-compiled.js
Dynamic Uncompiled   | ilib-core-dyn.js | ilib-standard-dyn.js | ilib-full-dyn.js
Dynamic Compiled     | ilib-core-dyn-compiled.js | ilib-standard-dyn-compiled.js | ilib-full-dyn-compiled.js

Loader
------

In order to use the dynamic load versions of iLib, you must implement an ilib.Loader instance and pass it in to iLib before the first call to an iLib class. The loader is the code that knows how to load data from where-ever it is stored, which could be files on disk, rows in a database, or files retrieved over a network connection via XHR.

The ilib.Loader class is [documented](http://docs.jedlsoft.com/ilib/jsdoc/symbols/ilib.Loader.html) in the iLib documentation. [A fully working implementation](https://sourceforge.net/p/i18nlib/code/HEAD/tree/trunk/js/src/nodeglue.js) of the loader class for nodejs is included with the iLib project sources and is used with the version of ilib that is published to the "ilib" npm project. You can examine this loader as an example.

Dependencies
------------

Each iLib source file documents which other iLib files it depends on by special comments, usually located at the top of the file. The comments contain directives that are interpretted by the assembly tool when assembling multiple source files together into one iLib file.

Example dependency directive:

~~~~~
/*!depends locale.js ilibglobal.js numfmt.js */
~~~~~

The following directives are interpretted by the assembly tool right now:

* depends - include the named js files before this one. The assembly tool will look for circular dependencies and if it finds them, it will exit with an error
* data - include the named json files in the locale data directory for the locales that are requested. For example, the date formatting class depends on the data "dateformats" and "sysres". If the tool is currently assembling the fr-FR locale, it will include the data "dateformats.json", "sysres.json", "fr/dateformats.json", and "fr/sysres.json". See the section above on iLib locale data for a list of subdirectories where the assembly tool will look for json files.

Additionally, there are a few macros that the assembly tool will expand while assembling the file. These are used to inject build-specific information into the JS files. The supported macros are:

* !macro iLibVersion - insert the current ilib version at this point
* !macro localelist - insert the list of locales that this file is being assembled with

Roll Your Own
------------

If any of the following apply to you, then you will need to roll your own version of iLib. 

* You need an assembled version of iLib with locale data from a locale that is not in the pre-assembled versions of iLib already
* You need a smaller version of iLib to decrease the time it takes to load and parse the file and do not want to include the classes that you never use

Fortunately, rolling your own is easy to do.

First, you should run through your own Javascript to find all calls to ilib classes or functions. Don't forget to check any HTML files that may have some Javascript inside of them as well.

Second, create a meta-file that contains a depends directive that lists all the files that you need. This is a standard Javascript file that only contains a depends directive. This causes the assembly tool to pull in all the files into one larger file in the correct order according to the dependencies.

Here is an example depends directive taken from [js/src/ilib-standard-inc.js](https://sourceforge.net/p/i18nlib/code/HEAD/tree/trunk/js/src/ilib-standard-inc.js) which is used to create the standard size pre-assembled size of iLib.

~~~~~
/* !depends
ilibglobal.js
daterangefmt.js
date.js
calendar/gregorian.js
calendar/gregoriandate.js
calendar/thaisolar.js
calendar/thaisolardate.js
calendar/persianastro.js
calendar/persianastrodate.js
numprs.js
numfmt.js
julianday.js
datefmt.js
calendar.js
util/utils.js
locale.js
strings.js
durfmt.js
resources.js
localeinfo.js
daterangefmt.js
scriptinfo.js
maps/casemapper.js
*/
~~~~~

Compare this to [js/src/ilib-full-inc.js](https://sourceforge.net/p/i18nlib/code/HEAD/tree/trunk/js/src/ilib-full-inc.js) which is used to create the full size.

Lastly, run the assembly tool to create your version of ilib. You will need to have java 1.7 or later installed to run it. Assume that your meta-file is called "ilib-custom-inc.js"

    java -classpath '../java/output/release/*.jar;../java/lib/*.jar;../java/config' com.ilib.tools.jsa.JSAssemble -I js/data/localetemp -I js/src -o ilib-custom.js -l comma_separated_list_of_locales_you_want -v 10.0 js/src/ilib-custom-inc.js

The output is now in ilib-custom.js. If you would like to run the google closure compiler on it to create the compiled version, do the following:

    java -classpath 'js/lib/google-closure-compiler.r1918/compiler.jar' --js=ilib-custom.js --js_output_file ilib-custom-compiled.js