Release Notes for Version 14
============================

Build 030
-------
Published as version 14.21.0

New Features:
* Updated to generate the assemed js file by JSAssembl java tool code. This file will work on [QuickJS](https://bellard.org/quickjs/) Engine used by [flutter-js](https://pub.dev/packages/flutter_js)
* Fixed the JSAssemble tool code to generate the region data with name `und_`
  * e.g ilib.data.localeinfo_und_IR = {}.

Build 029
-------
Published as version 14.20.0

New Features:
* Update to CLDR v44.1 data
* Update to Unicode Character Database (UCD) version 15.1.0
* Updated to detect the webOS Platform with `webOSSystem` value. The previous PalmSystem has been renamed.

Bug Fixes:
* Updated timezone info to 2024a

Build 028
-------
Published as version 14.19.0

New Features:
* Updated to CLDR v43.1 data
* Added new `getCLDRVersion()` API to know the cldr version that the current version of ilib uses

Bug Fixes:
* Removed docs/localeSpecDoc/ directory which is not maintained.
* Added safety code to avoid Uncaught TypeError problems when accessing the
  Intl object on a js engine that is modern enough to have an Intl object,
  but not modern enough to have everything we need on that Intl object
* Updated dependencies

Build 027
-------
Published as version 14.18.0

New Features:
* Updated pseudo strings to be encapsulated with square brackets so that you can tell when the resource string starts and ends.
* Added more pseudomap data for use in testing different fonts using pseudo locales.
    * Added a "tall" property in some pseudomap.json files which gives the tallest glyph in the script.
      This tallest glyph is included at the beginning of a pseudo localized string in order to test
      if there is enough room for the height of text in each UI element.

Bug Fixes:
* Updated to IANA time zone data version 2023b and then 2023c

Build 026
-------
Published as version 14.17.0

New Features:
* Update to CLDR v42 data
Bug Fixes:
* Fixed to publish js apidoc with applying style properly.
* Fixed the case of setting the root path incorrectly in `ilib-web.js`.

Build 025
-------
Published as version 14.16.0

New Features:
* Update to Unicode Character Database (UCD) version 15.0.0
    * updated character properties
    * added scripts support
    * updated normalization data, especially for Cyrillic characters

Bug Fixes:
* Updated to IANA time zone data version 2022g
* Updated package dependencies
* Fixed the locale info for zh-TW, zh-MO, and zh-HK
    * It was returning different info than zh-Hant-TW, etc., but it
	  should have been the same

Build 024
-------
Published as version 14.15.1

New Features:

Bug Fixes:
* Fixed isomorphic test failures by adding a value check

Build 023
-------
Published as version 14.15.0

New Features:
* Update to CLDR v41 data
* Update to the latest ISO-14924 data (writing script information)
* Added `useIntl` option in DateFmt to choose whether to use Intl.DateTimeFormat
    * When it is set to true, the Intl object is available, it supports the requested locale, and the parameters can be converted to equivalent parameters for the Intl.DateTimeFormat object, then it will format the date relatively quickly using Intl.
    * When they cannot be converted, the Intl object is not available, or the Intl object does not support the requested locale, it will perform the relatively slow formatting using regular ilib code written in Javascript.
    *  The code will often return different results depending on the platform and version of the Javascript engine and which version of CLDR it supports. If you need consistency across versions and platforms, do not use the useIntl flag. Just stick with the regular ilib formatting code.
*  Added the ability to use Intl.PluralRules in IString get the plural category with the number.

Bug Fixes:
* Fixed a bug where the DateFmt.formatRelative() does not represent correct result in certain case.
* Updated locale data to have a consistently sorted order by rerunning cldr tool code.
* Fixed a bug which a default script for `uz` should be `Latin` instead of `Arabic`.
* Updated hardcoded locales for LocaleMatcher. (bn-IN, en-KR, hr-HU, ka-IR, ko-US, ku-IQ, ps-PK, pt-MO)
* Fixed to generate `plurals.json` files even when the rule only has `other`.
* Updated to load `plurals.json` in ResBundle Constructor, then you could call synchronously all the time because we can be sure if is already loaded.
* Fixed a bug where the Currency didn't work asynchronously.
* Update to time zone data 2022c
* Fixed to handle both absolute and relative paths correctly in `ilib-web.js`.

Build 022
-------
Published as version 14.14.0

New Features:
* Added support for ig-NG, lb-LU, yo-BJ, yo-NG, ps-AF, and ps-PK locales
    * validated locale data and added many test cases
* Updated cldr tool codes to have a consistently sorted locale data order.

Bug Fixes:
* Fixed the long name of the pounds per square inch (psi) of pressure measure to match the long name used
  in CLDR so that measures of psi can be formatted with the format templates from CLDR
* Fixed the ilib demo build failure issue that is related ilib-scanner.
* Update to time zone data 2022a
* Fixed correct currency symbol (AMD, AZN, GHS)


Build 021
-------
Published as version 14.13.0

New Features:
* Updated clock.jf files by referencing cldr-core/supplemental/timeDate.json and modified related cldr script code.
* Added new unit types for power, pressure, and force
    * includes unit conversion and formatting

Bug Fixes:


Build 020
-------
Published as version 14.12.0

New Features:
* Updated support:
    * Unicode Character Database (UCD) v14.0.0
    * CLDR 40.0.0
    * ISO 15924

Bug Fixes:
* Updated to route the code flow via NodeLoader when a platform is IoTjs


Build 019
-------
Published as version 14.11.1

Bug Fixes:
* The distribution 14.11.0 was broken due to changes in the dependencies used to
  package the code. This versino is the same code as 14.11.0 but with those packaging
  problems resolved.

Build 018
-------
Published as version 14.11.0

New Features:
* Added the ability to set additional path to Loader. Additional paths can be set through newly add Loader's `addPath()`, and iLib reads resources with higher priority. The added path can be removed by `removePath()` to Loader's path list.

Bug Fixes:
* Updated to IANA time zone data 2021c
* Updated to IANA time zone data 2021d
* Updated to IANA time zone data 2021e

Build 017
-------
Published as version 14.10.0

New Features:
* Changed a default UnitSystem in GB from `imperial` to `metric`
* Added the ability to parse locale specs with underscores instead of dashes. Some
  locale specs for Java properties file names or in some gnu gettext libraries are
  specified with underscores. (ie. "zh_Hans_CN" === "zh-Hans-CN" now)

Bug Fixes:
* Fixed a bug which a default script for `az` should be `Latin` instead of `Arabic`
* Updated to IANA time zone data 2021b
* Fixed a bug where locales from the platform returned by ilib.getLocale() were not
  recognized properly if any of the following apply:
    * They have underscores in them
    * They have a 3 letter language name ("yue" means "Cantonese" for example)
    * They have a three digit UN.49 region name ("001" is the "The World",
      for example)
    * They have a variant on them ("zh-Hant-TW-u-PostOffice" should return the
      basic locale "zh-Hant-TW" as the platform locale)

Build 016
-------
Published as version 14.9.2
New Features:

Bug Fixes:
* Fixed a case where variant locale resources could not be loaded
* Fixed to return correct default script for `pa-PK`,`ha-CM` and `ha-SD`
* Fixed Ethiopic dates to return the correct day of the week
    * Calculations were off by one because the Ethiopic day starts
      at 6am Gregorian time, not at midnight (= 12:00am Ethiopic time),
      and the calculations were for midnight.

Build 015
-------
Published as version 14.9.1
New Features:

Bug Fixes:
* Fixed a build error that occurs on `Qt 6.1` and fixed some warning messages that reported from the latest Qt version.
* Added new `plurals.json` files in some locales from cldr 37
* Fixed a bug which a default script for `ha` should be `Latin` instead of `Arabic`
* Fixed various bugs parsing the platform locales in ilib.getLocale()
    * Locales with a script code such as "zh-Hans-CN"
    * The posix "C" default locale
    * Platforms where the region code is not upper-case
    * Platforms that don't use a dash to separate the components
    * Platforms that include a dot and a charset name after the specifier
* Fixed a `genplurals.js` tool code bug when default target directory is empty
* Added ability to test minified version of files on Qt

Build 014
-------
Published as version 14.9.0

New Features:
* Add ruby & template style escaping for pseudo localization.
    * Here is an example of `%RUBY%` substitution parameters.
    * Here is an example of template substitution parameters:
    `<% code here %>`
    * Also added Objective-C/Swift substitution parameter support
      for the "c" style of escaping

Bug Fixes:
* Updated `iddarea.json`, `phoneloc.json`, and `numplan.json` from phonenumber library based on metadata version 4.0.0 which are used in PhoneNumber formatting.

Build 013
-------
Published as version 14.8.0

New Features:
* Added Locale.isValid() method which returns true iff all of the given locale components (language,
  script, region) are valid ISO codes.
* Supported additional mt-MT, tg-TJ, tk-TM, wo-SN, zu-ZA locales
    * validated locale data and added many test cases

Bug Fixes:
* Fixed a bug which a default script for `tk` should be `Latin` instead of `Arabic`
* Fixed a bug which a default script for `tg` should be `Cyrl` instead of `Arabic`

Build 012
-------
Published as version 14.7.0

New Features:
* Added support for day periods per locale. These are periods like "morning", "afternoon", "evening".
  Each locale has a different idea of when the periods are and when they start and end.
    * day periods use the new "B" format specifier in date format templates
    * updated a few locales that regularly use day periods, such as my-MM
    * date ranges were also updated to include day periods
* Update data to Unicode Character Database (UCD) version 13.0 and the Common Locale Data Repository (CLDR)
  version 37.0.0
    * includes corresponding fixes to the unit tests
* Updated time zone data to IANA 2020e

Bug Fixes:
* Updated date formats to use proper stand-alone month names independently
    * Previously, if either the year-month or the month alone available formats in CLDR
    used the stand-alone month name specifier, then we would use the stand-alone month name for
    all year-month, month alone, day alone, and weekday alone formats. However, some locales use
    the stand-alone only for some of those formats, so the formatted dates would come out with
    the wrong date components in some cases
    * Also affects date range formatting as well so that the year-month and the year alone
    ranges can use the stand-alone formats independently of each other
* Added guard code to consider when the object is undefined in JSUtil.merge at least not to throw an error
* Switched from travis to circleci for running the CI, since travis doesn't want to play nice any more

Build 011
-------
Published as version 14.6.2

New Features:

Bug Fixes:
* Fixed a DateRange Formatting to present standAlone case properly
* Updated `timezone.jf` files to match timezone data 2020a
* Fixed a problem where ilib would not work right if the platform locale was
  set to "C" or if the platform locale did not have a region tag with it. (ie.
  it was only the language part.)
* Updated time zone data to IANA 2020c
* Updated time zone data to IANA 2020d

Build 010
-------
Published as version 14.6.1

New Features:

Bug Fixes:
* Updated to IANA time zone data 2020a
* Put base option back on ResBundle
* Fixed a few tools and dependencies so that ilib works on node v14
* Fixed a default timezone in `my-MM` to `Asia/Yangon`
* Fixed a bug which a default script for `ky` should be `Cyrl` instead of `Arabic`

Build 009
-------
Published as version 14.6.0

New Features:
* Updated all locale data to CLDR 36 and Unicode Character Database 13.0
* The methods of the TimeZone object that take dates as parameters can now
  take any date types, such as a unix time number, an intrinsic Javascript
  Date object, or an ilib IDate instance. Previously, they only took
  IDate instances.
    * updated methods are: getDisplayName, getOffset, getOffsetStr, 
    getOffsetMillis, and inDaylightTime

Bug Fixes:
* Time zones in Indiana, Kentucky, North Dakota, and Argentina were missing.
  Fixed the zone info compiler to generate the json data for these missing time
  zones properly.
* Changed a default length style to `medium` in List Formatting.


Build 008
-------
Published as version 14.5.0

New Features:
* Added missing methods to the IString classes to echo all the methods on the intrinsic string class
    * Added methods that have been added in the last few years which some engines define and others do not
    * Delegates to the string class. Does not offer a polyfill yet.
    * Methods added are: matchAll, endsWith, startsWith, includes, normalize, padEnd,
      padStart, repeat, toLocaleLowerCase, toLocaleUpperCase, trim, trimEnd, trimRight,
      trimStart, trimLeft.
    * Defined the "length" property so that it returns the string's length like the intrinsic strings do
    * Added unit tests that only test the new methods if the underlying string class implements each new
    method.
* Added a "familiar" style to the name formatter
    * This is as familiar as you can get and yet not be rude to a stranger for each locale. For example, in
      English, you would use someone's given name, but in Japan, you would use the full name with honorific.

Bug Fixes:
* Updated to IANA time zone data 2019c
* Updated the Korean Name Formatting component per style. Including 'suffix' is more natural than having a 'prefix' or 'honorific'.
* Added missing likelylocale for `hr-ME`.

Build 007
-------
Published as version 14.4.0

New Features:
* Updated `iddarea.json` and 'phoneloc.json' which are used in `PhoneNumber` information and wrote a script file to automatically generate it.
* Added LocaleMatch.getLikelyLocaleMinimal() method which returns the same thing as the getLikelyLocale method but without the script
part of the locale specifier if it has a very common/default value
    * For languages such as Chinese which are commonly written in multiple scripts, the script is always given
    * For languages that are written in multiple scripts, but where one is dominant, the script is only included when it is not the default/dominant one
    * Most languages are only ever written in one script, so the script is left out
* Updated the script info to UCD 12.0.0, and the likely locale info to CLDR 35.1

Bug Fixes:
* Fixed unit test failures which occur on QT 5.12
* Fixed problem where two resource bundle files with the same name and same locale but loaded from
different directories were cached in the same place.
    * Introduced the new "basePath" property to ResBundle constructor to specify which directory
    to load the resource bundle from. This property is used to differentiate files loaded from
    different directories.

Build 006
-------
Published as version 14.3.0

New Features:
* Now uses webpack4 to package up all of the classes and data
* Added style "disjunction" to the list formatter do you can now format lists with "or" as well:
    * "One, Two, Three, or Four" vs. "One, Two, Three, and Four"

Bug Fixes:
* Updated to IANA time zone data version 2019b
* Fixed a bug where the DateRngFmt was not heeding the specified
  time zone when formatting the start and end dates
* Fixed a bug which a default script for pa-IN should be Guru instead of Arabic


Build 005
-------
Published as version 14.2.0

New Features:
* Updated all locale data (except region names) to CLDR 34 and Unicode Character Database 12.0
    * Region names were not updated because CLDR changed the codes assigned to each region, which
    would break anything that was depending on these names to be stable. We'll have to figure
    out some work-around for this later.

Bug Fixes:
* Updated the Taiwan area code of PhoneNumber according to [Wikipedia](https://en.wikipedia.org/wiki/Telephone_numbers_in_Taiwan).
* Changed 3 digit iddprefix PhoneNumber format of zh-Hant-TW as corresponding local office feedback.
* Rollback `js/ilib-web.js` file to support pure Web Application.
* Added a new platform return type as 'webos-webapp'. If platform type is `webos-webapp`, The iLib won't load any loader as default.
* Implemented to include automatically Json data which doesn't exist in CLDR in cldrtool script.
* Improved the speed of JSUtils.shallowCopy() by using Object.assign if it is available
* Improved the speed of ilib on QT by re-introducing the concept of caching the already-merged locale data. This
  trades memory footprint for speed, since merging the locale data is slow on QT and the already merged data is just a duplicate of the
  locale data already loaded and cached from locale data files. Other platforms may use this form of caching as
  well if desired by setting ilib._cacheMerged to true, though it only makes a minimal difference in terms of speed.
* Update some testfiles in order to test properly on QT/QML.


Build 004
-------
Published as version 14.1.2
* Adopt a `JIT` plugin loader for grunt. Load time of Grunt does not slow down even if there are many plugins. instead of `grunt.loadNpmTasks`.

Bug Fixes:
* Fix a few problems that prevented ilib from running on node version 10. Now version 10 is supported.
* When the Intl object was available and the code extracted the time zone name from it, it used
  to overwrite that name with some default data. Now it uses the name properly.
* Fixed some unit tests that were not testing async operation properly.
* Many of the countries of the world were missing data about the correct name of their top-level
  administrative regions. These have been filled in now, and the names are returned properly from
  AddressFmt.getFormatInfo()

Build 003
-------
Published as version 14.1.1

Bug Fixes:
* Worked around a problem with uglifyjs which optimized out a block
  of code that contained the comment that the ilib-webpack-loader was
  looking for. The loader would replace that comment with dependencies on
  the webpacked locale data files. Without that comment, no dependencies,
  and therefore no locale data and no WebpackLoader code would be
  included in the final webpack bundle.
* Added the full file name including the file extension for requires
  of `index.js`. If file name extension is missing, QT cannot load that
  file properly.
* Added missing `index.js` require statement in MeasurementFactory
* AddressFmt.getFormatInfo would throw an exception for locales where the locale data was not available. Now,
  it does not, and instead, it returns some hard-coded info by default that is roughly similar to the en-US
  settings.

Build 002
-------
Published as version 14.1.0

New Features:
* New top-level entry point
    * You can now require("ilib") directly instead of requiring the file that installs the loader. (ie.
      ilib/lib/ilib-node.js for node, or ilib/lib/ilib-qt.js for qt, etc.)
    * The top-level entry point will figure out which environment it is running in and automatically install
      the appropriate loader.
    * Allows ilib to run in node or within a webpack bundle without changes
    * Allows clients to just require ilib classes directly without first requiring the loader installer

Bug Fixes:
* Restored a missing mapping from the the native name for "Japan" to the ISO code "JP" in the nativecountries.json
    * Fixes address parsing for Japan

Build 001
-------
Published as version 14.0.0

New Features:
* Webpack support
    * Pre-assembled builds of ilib now use webpack for bundling
    * The assembly tool is now grandfathered
    * The compiled versions of the pre-assembled files are minified with uglify-js
    * You may use ilib in your own webpacked projects (in React or otherwise) using the
      new ilib-webpack-loader and ilib-webpack-plugin.
    * See the documentation in [the ilib-webpack-loader documentation](https://github.com/ilib-js/ilib-webpack-loader)
      for more details on how to use the new webpack support
    * Requires some changes in your code to include the right file names and/or to modify
      your webpack.config.js to include ilib dynamically
    * Nodejs versions less than 6 are no longer supported, as webpack does not work with them
* Grunt support
    * Support iLib build not to using ant
    * Grunt task can do iLib build, running unittest, and  creat jsdoc

Bug Fixes


Release Notes for Version 13
============================

Build 005
-------
Published as version 13.3.1 on npm only

New Features:
* No code or documentation changes

Bug Fixes:
* Forgot to include the README.md in the npm package. Now it is there. This is the only change from 13.3.0.

Build 004
-------
Published as version 13.3.0

New Features:
* Update of the LocaleReference Test Website Documentation
    * Added is-IS locale to the list.
    * Implemented way of publishing date automatically instead of manual fixing.
    * Updated Name of the Day and Months part. If normal and standAlone are different, It displays both.
* Updated to work properly run test cases on QT/QML environment.
  * Imeplemented simple version of nodeunit library to work in QT/QML environment.
  * Confirmed that all of iLib cases are passed in QT 5.7 version.
* Modified ilib.getTimeZone() to find the time zone from the Intl object if it is available. If not, it falls back
to the previous behaviour of checking environment variables.
* Added AddressFmt.getFormatInfo() method for returning info that a UI would need to construct an address input form
    * Return info about the correct form elements for an address in the given country, and return them in the right 
    order
    * Return localized UI labels for the various form elements
    * Returns the localized list of regions for the address form if addresses in that country
    typically include the region
    * Returns a regular expression string to use for validation if the form element can be validated with a regexp
    * Returns the localized list of countries
* Updated the time zone data to IANA tzdata 2018e release

Bug Fixes:
* Fixed an ar-IQ currency symbol.
* Updated the medium format day of the week translation of the ar-EG locale.
* Updated the month duration locale data in fr-CA correspond CLDR 33.
* Updated the daterange locale data in fr-CA local office feedback.
* Updated the week duration locale data in ku-Arab-IQ correspong local office feedback.
* Updated the meridiems data in or-IN correspond CLDR 33.
* Fixed a bug where dates with the time zone "local" do not switch to DST at the right time because the time was calculated
in UTC instead of the "local" time zone. This affected TimeZone.inDaylightTime(). If an explicit time zone was given, then
then the calculation worked fine. It's only the special time zone "local" which had this bug.
* Removed all of test cases written in JSUnit and related files. It is already replaced with Nodeunit TestFramework.
* Fixed unit tests related to the getTimeZone() method so that they work properly both when the Intl object is available and when it is not
* Updated the DurationFmt class to use the short format whenever the medium format is requested when the script of the locale is something other than Latin, Greek, or Cyrillic
    * Medium format is not specified in CLDR, so it was created algorithmically in ilib's CLDR processing tools from longer formats
    * The algorithm to create it was not working properly for many non-alphabetic scripts, so it was deemed safer to use the short format whenever the medium format was requested

Build 003
-------
Published as version 13.2.0

New Features:
* Updated the time zone data to IANA tzdata 2018c release
* Added the ability to pass in multiple indexes as the first parameter to IString.formatChoice(). This allows you to format
  choice strings where there are two or more plurals in the string at the same time. For example, if your string is "There
  are N items on P pages", you can get the locale-sensitive plurals of "items" and "pages" correct with one call.
* Updated to work properly run test cases on QT/QML environment.
    * Implemented simple version of nodeunit library to work in QT/QML environment.
    * Confirmed that all of iLib cases have passed in QT 5.7 version.
* Added "significantDigits" option to the number formatter
    * Specifies the maximum number of significant digits to format into the output string,
      which works before and after the decimal point.
    * Can work along with max- and minFractionDigits to limit the digits in the output after
      the decimal point.
* Updated unit formatting
    * Update to latest CLDR 33 data
    * Added "style" parameter to the options to the constructor
        * Style "numeric" is the default where it only formats the number with decimals and
          the units. For example, 1.6666666 tablespoons is formatted as simply "1.6666666 tablespoons"
        * Style "list" is where there are no decimals in the larger units and fractions of the
          larger units are expressed instead as numbers of smaller units.
          For example: 1.66666666 tablespoons is formatted as "1 tablespoon 2 teaspoons"
    * Added support for maxFractionDigits, minFractionDigits, and the new significantDigits option
      to the constructor to pass to the number formatter constructor that is used to format the numeric
      parts.
    * Added support for "usage" parameter to the constructor. This allows the formatter to select
      the most appropriate units for how the formatted string will be used. In regular common
      usage, people often do not use the optimal units for a particular measurement, or they use
      units that were designed for a particular usage when other, more common or more standard
      units could be used.
      An example of where the most optimal units are not used in the US is the measurement of
      how tall a person is. The most optimal units would be yards formatted numerically as that would produce
      the smallest numbers. Yet, people commonly use feet and inches with a list style format
      instead. For example, instead of saying "She is 1.83 yards tall", you would say, "She is
      5 feet 6 inches tall". Similarly, an example where people commonly use a unit that is
      designed for the usage rather than the standard unit is the measurement of electrical energy.
      Electrical energy is commonly expressed in watt-hours, kilowatt-hours, or megawatt-hours, whereas
      the standard ISO unit of energy is joules. You would not say that your house used "360 megajoules"
      of electricity in a month. You would say that it used "100 kilowatt-hours" in a month, even
      though they are exactly equivalent. The usage parameter automatically selects the
      most appropriate units within the appropriate measurement system, autoscales them if
      necessary, and it selects the formatting style (numeric or list), and the maxFractionDigits
      or significantDigits as appropriate. Each of the options that are auto-selected by
      the usage may be overridden if desired by passing them in to the UnitFmt constructor.
    * Unit names are now recognized case-insensitively as well, except for the few units that
      require upper case to differentiate them
    * Added many more aliases for the units
    * Added digital speed units for measuring the speed of data transfer

Bug Fixes:

* Updated Date Formatter for fully supporting relativeTimePattern of CLDR.
* Removed duplicate entries in various locale json data files
* Removed an exception that was thrown when the address formatter was instantiated without
any arguments
* Fixed a bug where the Locale constructor would throw an exception if any of the arguments
was a non-string. Now it does not throw. Instead, it just ignores the argument.


Build 002
-------

Published as version 13.1.1 to follow the semver rules

Bug Fixes:

* Build system was broken and the compressed js files did not make it into ilib 13.1.0 in npm, making it a
useless release! This is fixed now. There are no code changes between 13.1.0 and 13.1.1, only build fixes.

Build 001
-------

Published as version 13.1.0

New Features:

* Added DateFmt.getDateComponentOrder() to aid date input selector widget developers in determining what order the date input
selectors for year, month, and date should appear in to be correct for the given locale.
* The getString and getStringJS methods of the ResBundle class both now take either a string or an array parameter
to translate. When an array is given, every string in the array is translated.
* Added locale.getLangSpec() method to return the language and the optional script of the locale which will give you what the
written language is of the locale regardless of region or variant
* LocaleMatcher class updates
  * Added LocaleMatcher.match() which returns an estimated percentage match between two locales which can be used to compare
    with other match scores to determine a best match. For example, let's say your web site has translations for English, German, Danish,
    and Dutch, and a user comes to your site from Norway. Which translation would be best to show her? The highest match score between
    Norwegian and the languages your web site supports is with Danish, so you should show her the Danish site by default, and allow
    her to choose another language manually if she is more comfortable with one of the other languages.
  * Added LocaleMatcher.getMacroLanguage() which returns the ISO macro language code that encompasses the given language, if any
  * Added LocaleMatcher.getRegionContainment() which returns the list of regions that the current locale is contained within. For example,
    Germany is located in the regions Western Europe, the EU, Europe, and the World.
  * Added LocaleMatcher.smallestCommonRegion() to determine which region is the smallest one that contains both the current region
    and the given other region

Bug Fixes:

* Fixed number parsing (INumber) and CType functions when no locale data is available. Previously, they would just not
work at all. Now, they default to US English/ASCII behaviours.
* Signficant refactoring of many classes to support true asynchronous operation. Previous code only paid lip service to
async operation by supporting callbacks. However, when you ran it in an actual async environment, the callbacks were not
called properly, and many classes used other ilib classes synchronously under the covers. Now a new async testing loader
and new unit tests prove that the async operation is actually working correctly.


Build 000
-------

Published as version 13.0.0

New Features:

* Updated most classes to use locale data from CLDR 30.
  * Updated scripts in the tools/cldr dir to read the new data
  * Unit tests updated as well
* Added Country class to contain information about a particular country, especially translations of its name
* Added support for travis-ci builds for the development and master branches in github.
* Support for the legacy way of calling ilib through the ilib namespace was deprecated in ilib 11 & 12, and is now removed in ilib 13
  * That means that code that is upgrading to ilib 13 for example should use DateFmt instead of ilib.DateFmt to get the date formatter class
  * The ilib-stubs.js file is still there and can map from the old ilib namespace to the CommonJS style classes, but it is no longer being maintained
  * All legacy unit tests have been removed as well
* Added a new list formatter class, ListFmt
  * Allows you to format an arbitrary length array of items as a list with proper grammar for the locale.
  * Example: (en-US) A, B and C  (German) A, B, und C
* Added "honorific" field to the Name class
  * This way, honorifics can be formatted as a prefix or a suffix depending on the customs of the locale
* Added "formal_short" and "formal_long" formatting styles to the NameFmt class
  * formal_short formats a name with an honorific and family name. eg. Mrs. Smith or Dr. Smith
  * formal_long formats a name with the honorific, given, and family names. eg. Mrs. Jane Smith or Dr. Jane Smith
* The NameFmt.format() method now accepts an object parameter with the name fields as well as a full Name instance
* The DateRngFmt.format() method now accepts any date-like start and end parameters to make it easier to use, instead of only accepting ilib IDate parameters
  * IDate - still supported, but must be in the same calendar as the formatter itself
  * Date - javascript intrinsic dates
  * number - a unixtime for the requested date
  * string - a date string that is parseable by the javascript intrinsic Date class
* Updated time zone info to 2017c
* Removed deprecated APIs - newDateInstance() in every Calendar feature.
  * CoptiCal, EthiopicCal, GregorianCal, HanCal, HebrewCal, IslamicCal, JulianCal, PersianAlgoCal, PersianCal and ThaiSolarCal
* Updated the name parsing/formatting data for English for Hong Kong where it is common to write names with the family name first followed by the given name.
* Added the missing support for Kosovo (XK) and the Republic of Congo (CG)
* Added information about the medical emergency phone numbers around the world
* Added support for nodeunit as the unit testing framework, which allows for async testing as well as easier in-browser testing
* Compound family names are not common in Chinese. Compound family names are now optional in the Name class. By default, they are not turned on and are not parsed. You must pass in the compoundFamilyName option and set its value to true in order for ilib to even attempt to parse compound names.
* The NameFmt class now accepts plain JS objects as arguments. Previously, it only took instances of the Name class, but now you can pass in a simple object when you have the name parts already. eg. fmt.format({given: "George", family: "Papadopolous"});  instead of fmt.format(new Name({given: "George", family: "Papadopolous"}));

Bug Fixes:

* Fixed a bug where using the letter "s" in a date format template (instead of "ss") resulted in minutes being formatted instead of seconds
* Fixed a bug where calling ResBundle.getStringJS() with an undefined parameter resulted in an exception. Now it just returns undefined itself.
* The list of honorific suffixes for both Chinese Simplified and Traditional was missing "Dentist" and "Dental Hygienist" which are now added.
* The list of common family names in traditional Chinese was written with many simplified characters. These have been correctly rewritten with traditional Chinese characters. Name parsing in traditional Chinese should work better now.


Also, the fledgling localization tool (tools/loctool) is now moved into its own repository. See https://github.com/iLib-js/loctool for the new project.

Release Notes for Version 12.0
=============================

Build 004
-------

Build 3 was mispublished on npm, so the version was updated to 12.0.4 without any actual changes from 12.0.3.


Build 003
-------

New Features:

* Updated the number formatting to the CLDR 26.0.1 settings. This means that various formats for various locales have been changed and updated to better match the actual usage in those regions.
* Added support for new and updated Unicode ranges in CType.withinRange.
  * latin - Latin-1 supplement, Latin Extended-E
  * cyrillic - Cyrillic Supplement
  * arabic -Arabic Mathematical Alphabetic Symbols
  * myanmar - Myanmar Extended-B
  * sundanese - Sundanese, Sundanese Supplement
  * combining - Combining Diacritical Marks Extended
  * numbers - Number forms
  * supersub - Superscripts and Subscripts
  * arrows - Supplemental Arrows-C
  * geometric - Geometric shapes extended
  * copticnumber - coptic epact numbers
  * oldpermic - old permic
  * albanian - albanian
  * lineara - linear a
  * meroitic - meroitic cursive
  * oldnortharabian - old north arabian
  * oldhungarian - Supplementary private use area-A
  * sorasompeng - sora sompeng
  * warangciti - warang citi
  * paucinhau - pau cin hau
  * bassavah - bassa vah
  * pahawhhmong - pahawh hmong
  * shorthandformat - shorthand format controls
  * suttonsignwriting - sutton signwriting
  * pictographs - miscellaneous symbols and pictographs, supplemental symbols and pictographs
  * ornamentaldingbats - ornamental dingbats
* For the DateFmt class, you can now pass ICU style skeletons in this option similar to the ones you get from <a href="http://icu-project.org/apiref/icu4c432/classDateTimePatternGenerator.html#aa30c251609c1eea5ad60c95fc497251e">DateTimePatternGenerator.getSkeleton()</a>. (Ex: "MMMMy")
  * It will not extract the length from the skeleton so you still need to pass the length property, but it will extract the date components.
* Plural formatting rules have been updated to CLDR 26
* In the ResBundle class, add the "c" type of strings for strings extracted from the C programming language. This automatically
recognizes and skips the percent printf style replacement parameters when pseudo-localizing and in other situations.
(eg. "There are %d objects.")

Bug Fixes:

* When formatting duration ranges in right-to-left languages like Arabic or Hebrew, the code now automatically inserts the Unicode right-to-left mark before the format so that formatted durations appear right-aligned in web browsers, no matter which characters appear the beginning of the string. Without it, strings that start with ASCII characters will appear left-aligned and strings that start with RTL characters will appear right-aligned, regardless of the other characters in the string.

Build 002
-------

New Features:

* Implemented character set mapping in pure javascript. iLib now includes json files for the same charset mappings to/from Unicode that Linux supports. (These can be huge for Eastern charsets.) See the new tutorial page about [Character Set Mapping](charmaps) for more details on how it works and how to use it.
* Converted the minority locales English for Philippines, Korea, and Japan to be based on US English settings instead of the generic English settings which are more British style. This is due to the greater cultural influence of the US on those region over GB.

Bug Fixes:

* Few legacy tests were not working correctly and have been updated

Build 001
-------

New Features:

* Updated date, date range, and duration formats from CLDR 22.1 to CLDR 26.0.1. This means many of the date formats have changed from before. This is especially true for the medium format, which for many locales has changed from being a character-delimited style, such as "10/7/15" (en-US) or "07.10.2015" (de-DE), to one that is like a short version of the long style, such as "Oct 7, 2015" (en-US) or "7. Okt 2015" (de-DE). This also adds date formats for many different new locales.

Release Notes for Version 11.0
=============================

Build 006
-------

New Features:

* Updated time zone support to IANA 2015f
* Changed the digital storage unit formatter to stay within the bit or the byte system. That is, a certain number of bytes will not auto-scale to bits and vice-versa. Previously, if you formatted "234 bytes", it would auto-scale that to 1.1 kilobits, which is not that useful to users. Bytes should scale to kilobytes, megabytes, gigabytes, etc., but not to bits. Bits should auto scale to kilobits and megabits, etc.

Bug Fixes:

* Fixed wrong locale pt-CQ -> pt-GQ (Portuguese for Equitorial Guinea)
* Fixed awkward translations for duration formats in Korean
* Fixed rhino loader to never look for locale data files in /usr/share/javascript, as that is outside of the context of web apps, so app servers throw exceptions when you try to access that dir
* Fixed a few unit tests that were broken in build 5 but which no-one noticed! (Mostly, it was the tests that were broken, not the code.)

Build 005
-------

Bug Fixes:

* Fixed missing dependency in Currency.js
* Fixed some closure compiler warnings
* <font color="red">Calendar.newDateInstance() is now deprecated, as it creates a circular dependency. This call will go away in release 13.0 or 14.0.</font> The alternate way of creating a date for a particular calendar is to call the date factory directly instead of having the calendar classes do it for you:

~~~~~
Before:
var d = cal.newDateInstance();

After:
var d = DateFactory({calendar: cal.getType()});
~~~~~

* Souped up the jsdocs a bit
* Fixed RhinoLoader to work better when running ilib under Rhino/RingoJS.
* Fixed bug where creating a new ResBundle would throw an exception if there were no arguments to the constructor AND the current locale was a pseudo locale.

Build 004
-------

New Features:

* Added support for asynchronous locale data loading in the browser. The file ilib-web-async.js  can be used in browsers to define the WebLoader class without all the CommonJS wrapper stuff around it. You simply include it in a script tag after the normal ilib script tag. See the modularization wiki for details.
* The build now produces the modularized code in a minified format using the uglify tool. These files are part of the tar ball for the build, and also appear as the files used in the nodejs package. This should improve load time somewhat and improve the disk and memory footprint.
* Added support for ilib running under Rhino using JDK 1.7 or later. All unit tests pass now using a tool called trireme which emulates a nodejs environment inside of rhino.
* Added the lib/ilib-rhino.js entry point which you can require to load in the base code and the rhino locale data loader:

~~~~~~
var ilib=require("your-path-to-ilib/lib/ilib-rhino.js");
~~~~~~

Bug Fixes:

* Fixed the date formats for a number of locales to match what is in CLDR. The old CLDR date conversion had some problems. (Languages affected: af, ar, bg, bs, cs, da, en, es, et, fa, fr, ha, ja, and or)
* Fixed various problems with the collation of voiced and unvoiced iteration marks on the kana in Japanese. First, they were not being iterated to the right voiced/unvoiced character, and second, the tests were not testing for the right thing.

Build 003
-------

New Features:

* Added the ilib-node-all.js module to support Meteor integration. This module pre-requires all of the ilib classes and then exports them so that Meteor code (which is not yet designed to require things that it uses) can use it as it did before.

Bug Fixes:

* Modified Collator so that when strings which start with numbers are sorted numerically instead of lexically, the strings that do not contain numbers are still sorted according to the rules of the collation.
* Fixed the "latin" collation to include ASCII punctuation, as previously punctuation was ignored. This changed the size of sort key elements. <font color="red">N.B. this change grew the size of sort keys for the latin collation and any other that inherits from latin. That means this change invalidates old sort keys, and you cannot compare sort keys from this version of ilib with those previously generated by ilib. Any database entries that use ilib-generated sort keys for locale-sensitive collation will need to have their sort keys re-generated and re-indexed.</font>

Build 002
---------

New Features:

* Adds the following languages to the collation support: cs (Czech), da (Danish), el (Greek), fi (Finnish), fo (Faroese), he (Hebrew), ja (Japanese), ko (Korean), no/nn/nb (Norwegian), ru (Russian), sv (Swedish), tr (Turkish), and zh-Hans/zh-Hant (Chinese)
* Updated to IANA time zone database 2015d.
* Modified Locale.getAvailableLocales() to return the list of available locales even in a dynamic data load situation. It also now supports asynchronous loading of the file list. The functionality of getAvailableLocales() is a superset of the old function, so this change should preserve backwards compatibility.


Bug Fixes:

* Support for various browsers had become stale, but it is now refreshed. The list of browsers tested includes Firefox, Opera, Chrome, and IE. IE was tested on Windows only of course.

Build 001
---------

New Features:

* Code has been completely refactored to be in a CommonJS-style of modularized classes. This allows you to load only those classes that you really need instead of all of ilib. A very detailed discussion on this refactoring can be found on a separate wiki page on the [New Modularization Support].
* Qt/QML 5.4 is now a supported platform. QML contains a built-in javascript engine that can run ilib directly. Although Qt does have support for internationalization already, it is rather limited. ILib can be used to fill in the gaps, especially for things like date formatting with calendars that Qt does not yet support.
* The names of some of the assembled files have changed and you may need to update your code to use the new files. Please see the page [New Modularization Support] for details.


Release Notes for Version 10.0
=============================

Changes from version 9.0
------------------------

New Features:

* Added support the Chinese Lunar (Han) calendar and Chinese Lunar calendar dates
    * Currently no support for formatting yet, as this code is intended to be used to do things like calculate Chinese new years or other holidays
* Added the ability to designate certain locales as pseudo-localization locales for testing
* Completed support for address parsing in all current countries in the world. (This adds support for CL, DO, ET, HU, IN, IS, KG, KW, LU, MO, NI, NO, PA, PE, PY, RS, RU, SA, SL, SN)
* Add support to ilib.LocaleInfo to return the start and end of the weekend for the locale. This returns days-of-the-week numbers (ie. Sunday=0, Monday=1, etc.)
* Updated to IANA tzdata 2015a
* Added unit test cases to verify support for the following languages: af (Afrikaans), am (Amharic), ha (Hausa), or (Oriya)
* Added support for the Ethiopic and Coptic calendars including the calendar date objects, date formatting, date range formatting, and duration formatting
* Added getStringJS() convenience method to ilib.ResBundle. This returns a Javascript string object instead of the ilib.String that getString() returns.
* Added the Ethiopic calendar to the "standard" size, as it is the official calendar for Ethiopia
* Added DateFmt.getMeridiemsRange() method which will return you an array of the meridiems (times of day like "AM" or "PM"), their names in the given locale, and when in the day those meridiems are used. This is intended to be used with time picker widgets.


Bug Fixes:

* Fixed some country name translations in Mongolian which are used in address parsing/formatting
* Fixed some incorrect address parsing regular expressions for the countries HU, IS, NO, and RU
* Added some missing dependencies to get the assembly tool to produce correct output
* Fixed a minor date calculation problem with the Persian calendar
* Fixed date formats for Kurdish so that they show up correctly in an RTL environment
* Fixed translation of the country name "Grenada" for various languages
* Fixed ilib.CaseMapper problems in Netscape
* Added a comment to the ilib.Collator that upperFirst does not work when using the native collator in Netscape because Netscape has not implemented it. If you want it to work the same across browsers, you have to use the Javascript (ilib) implementation of collation instead.
* Fixed a problem with name parsing (ilib.Name) where the CType functions were not initialized properly if you constructed a name using parts or via a copy constructor
* Support for IE had gotten stale and some unit tests did not pass. These were corrected:
    * Collation now works in IE for the supported locales
    * CaseMapper did not work correctly for a few locales
* Fixed build.xml to run unit tests under Windows correctly
* The number of fraction digits supported by the ilib.NumFmt class is now limited from 0 to 20 explicitly. Previously, it was quietly limited by the JS engine. Now, negative numbers go to 0, and numbers greater than 20 mean exactly 20.
* Fixed an exception in ilib.DateFmt when some formats could not be loaded from the locale data
* Fixed Korean name parsing to be able to handle spaces in the name
* Worked around a problem in Chrome 40 where the value of navigator.language no longer conforms to BCP-47. In the US for example, navigator.language now has "en-us" in it instead of "en-US" like it had in previous versions.
* Fixed day names in Vietnamese long format from the 3-letter abbreviations of the full names to "CN" (Sunday) followed by "Th 1" (Monday) through "Th 7" (Saturday).
* Bug fixes in the Ethiopic calendar:
    * The date changes at 6am Gregorian time = 12:00 morning Ethiopic time, instead of at 7am Gregorian = 1:00 morning Ethiopic time
    * Now uses the 5 meridiems for time of day (morning, noon, afternoon, evening, and night) when formatting dates in the Ethiopic calendar
* Now uses the 64-bit getTimeExtended() instead of old 32-bit getTime() where possible. The ilib.Date object uses the built-in Javascript Date object to calculate the offset of the "local" time zone, which is faster than the pure JS algorithm and is always in sync with the system time zone db. Using getTimeExtended() effectively widens the time period when the "local" time zone can use the built-in Date for these calculations.
* Updated the country name translations for af, am, ha, or, and pa. These are used in address parsing and formatting.
* Changed am and pm symbols in Gujarati to "AM" and "PM" to match CLDR.
* Fixed unit formatting in Chinese. Removed some bogus directories under js/data/locale/zh and moved the unitfmt.json files in the bogus dirs to the correct places instead so the code can pick them up.
* Behaviour is not improved when the platform returns an invalid BCP-47 tag for the locale. Most often, this is when the region part of the tag is given in lower-case instead of upper.
* Fixed date/time unit tests for Gujarati
* Fixed date/time unit tests that work in California but not in Korea. The problem was that the unit tests assumed the California time zone when they should be explicitly naming which zone they are using for the tests.
* Updated Gaelic date formats to be more consistent with each other and to follow CLDR
* Fixed Japanese short, medium, and long date formats to put the day of the week at the end of the format instead of the beginning, so that it follows CLDR more closely

Release Notes for Version 9.0
=============================

Changes from version 8.0
------------------------

New Features:

* Added support for Russian and Brazilian phone number parsing, formatting, and geolocation
* Added in unit and measurement formatting
    * See the [unit formatting tutorial](units) for details on how to use this
* The name parser and formatter now supports Japanese and Russian
* Now creates a package for publishing on npm
* The number formatter (ilib.NumFmt) can now format numbers locale-sensitive without doing grouping on the integer part of the number. To do this, you can pass style: "nogrouping" to the constructor.
* Added support for Japanese, Russian, and Brazilian address parsing and formatting
* Updated time zone to IANA 2014j
* Added "," as a pause character and ";" as a wait character in phone number parsing to match what Google uses in Google Contacts.
* Phone number formatter can now format the comma and semi-colon in Korean phone numbers
* Phone number normalization now fully supported for Korea, Japan, Brazil, Russia, and Taiwan

Bug Fixes:

* Fixed performance problems in the CType functions, which caused other things such as name parsing and formatting to be slow
* Fixed the Norwegian date formats to use HH instead of H for the hours
* Fixed missing country name translations in Kurdish
* Misc fixes to the Korean phone number support
* Improved parsing/formatting of Korean names with suffixes and honorifics
* Made some formatting fixes for the jsdocs
* Added missing dependency on util/jsutils.js for the core assembly
* Phone number parser was incorrectly parsing "00" prefix for Korean phone numbers
* Updated phone number formatting so that formatting elements such as dashes are not added until there is a digit after them. eg. In the Korean phone system, 010 is formatted as "010" instead of "010-" as it was before. Now the dash is only added when you add another digit: "010-3" for example.
* ilib.TimeZone.getAvailableIds() was throwing an exception if you tried to get the available ids and one of the locale directories did not have an ilibmanifest.json file in it
* Added a few missing area codes in Taiwan
* Fixed the nodeglue.js file to work inside of an npm module and also in a checkout of the ilib sources. That way it can be used for testing during development.
* More fixes to the Korean phone number formatting and Taiwanese phone number geolocation
* Fixed the order of the names of the days of the week for Kurdish (ku) and Mongolian (mn). The translations from the translators were correct, but they were assigned to the wrong day numbers!
* Added safety code to fix an exception in ilib.GlyphString


Release Notes for Version 8.0
=============================

Changes from version 7.0
------------------------

New Features:

* Added support for phone number parsing and formatting
    * See ilib.PhoneNumber and ilib.PhoneFmt for details
    * Supports the following countries:
        * NANP (North American Numbering Plan) countries - USA, Canada, Bermuda, and various Caribbean nations
        * UK (GB)
        * Republic of Ireland (IE)
        * Germany (DE)
        * France (FR)
        * Spain (ES)
        * Italy (IT)
        * Mexico (MX)
        * India (IN)
        * People's Republic of China (CN)
        * Netherlands (NL)
        * Belgium (BE)
        * Luxembourg (LU)
        * Australia (AU)
        * New Zealand (NZ)
        * Singapore (SG)
        * Republic of Korea (KR)
        * More countries to follow
    * Can parse and format SMS short code, emergency numbers, etc.
    * Can parse and format partial numbers as well, which can be used to format the number as the user is typing it in
* Also added support for phone number comparison and normalization
    * Supports Verizon's "Assisted Dialing", which allows you to dial any number in your contact list in any country, and the correct prefixes will be added/removed to dial that number
    * Supports normalization of SMS numbers and short codes as well
* Added ilib.Date.getTimeExtended method, which is similar to ilib.Date.getTime in that it returns the number of milliseconds since midnight Jan 1, 1970 UTC, but it is not limited to the range of time of the normal 32 bit time_t. Instead, it returns the full range of what the the Javascript Date can return, which is midnight Jan 1, 1970 UTC plus or minus 100 million days. (That's approximately -271821 BCE to 275760 CE in the proleptic Gregorian calendar.)
* Refactored the phone number parsing engine so that now we can support Japanese area codes
    * Rewrote the phone number parsing state generator in Javascript to output tries instead of state tables
    * Regenerated all phone number parsing files
* Added support for Japanese and Taiwanese phone number parsing, formatting, and geolocation

Bug Fixes:

* Fixed a bug where the address formatter would not work if you did not give any options in the constructor and were just trying to use the defaults.
* Fixed the name of the Korean "brackets" phone number formatting style to be a better translation


Release Notes for Version 7.0
=============================

Changes from version 6.0
------------------------

New Features:

* Added support for the Persian astronomical and Persian algorithmic calendars
    * The Persian algorithmic calendar is named "persian" and the algorithmic one is "persian-algo".
    * Switched Iran and Afghanistan to use the new persian astronomical calendar by default.
    * Fixed the date range formats for gregorian in Iran.
* Added "calendar" option to the date formatter factory method in addition to "type". The two mean the same thing.
* Updated to IANA time zone database version 2014f, which includes the major recent changes to the Russian time zones
* Added ilib.GlyphString which can iterate through whole glyphs as a user might see them on screen, or truncate/ellipsize a string at a given number of glyphs. Dealing with whole glyphs allows you to truncate and ellipsize a string properly to a certain length if care is taken to include non-spacing marks and combining characters, but to disclude spacing combining characters at the end of the truncation length and to count spacing characters individually.
    * The regular CSS directives to ellipsize and truncate do not handle scripts properly that contain such combining and non-spacing marks. Instead, it just truncates between Unicode characters, which may cut between a base character and a combining character.
    * Dealing with whole glyphs allows you to correctly handle Indic languages and Thai, that are commonly written with combining characters, as well as Japanese, Vietnamese, Hebrew, Arabic, and even western European languages, which are sometimes written with decomposed combining accent characters.
* Added forEach() and forEachCodePoint() to ilib.String, which is an alternate, more Javascript-y way of iterating through the UTF-16 characters and code points. These are inherited by ilib.GlyphString, which iterates through glyphs, and ilib.NormString, which iterates normalized characters.
* Added corrected support for Korean in the name parsing/formatting
* Integrated changes that get the address parsing and formatting correct for many  countries: AE, AF, AL, AO, AR, AT, AU, AZ, BA, BE, BF, BG, BH, BJ, BR, BY, CA, CD, CF, CG, CH, CI, CM, CN, CO, CR, CV, CZ, DE, DJ, DK, DZ, EC, EE, EG, ES, FI, FR, GA, GB, GH, GM, GN, GQ, GR, GT, HK, HN, HR, HU, ID, IE, IL, IQ, IR, IT, JO, KE, KR, LB, LR, LT, LV, LY, MA, ME, MK, ML, MM, MR, MW, MX, MY, NG, NL, NO, NZ, OM, PH, PK, PL, PR, PT, QA, RO, RU, RW, SD, SE, SG, SI, SK, SV, SY, TG, TH, TN, TR, TW, TZ, UA, UG, UY, VE, VN, YE, ZA, ZM

Bug Fixes:

* Fixed completely broken Thai date formatting unit tests, and then fixed the code to pass those tests properly. Thai solar calendar works properly now.
* Fixed up date formats for Kurdish, Hebrew, Pashto, and Urdu to appear correct in right-to-left (RTL) contexts. This was done by adding the Unicode LTR character in front of strings that start with numbers so that the numbers would appear correctly in a LTR fashion when embedded in an HTML tag that is RTL.
* Changed the default meridiems for Chinese time formats to be AM/PM  just like the rest of the locales. (Or at least the translations thereof). The 7 Chinese-style meridiems are still available, but the caller must now send in the new meridiems property in the constructor options with the value "chinese" in order to see them.
* Fixed a rounding bug that made time/dates less than one millisecond from a day, hour, minute, or second boundary go to the wrong side. For example 0.99999995342 of a julian day would cause the time of many of the ilib.Date subclasses to be calculated as 24:00 of the previous day, rather than 0:00 of the desired day. These off-by-less-than-a-millisecond errors would be introduced by floating point calculations.
* Fixed a bug where timezone.inDaylightTime(date) was returning the wrong value for the "local" time zone
* Fixed a problem where the offset of standard time was miscalculated when the zone is "local"

Release Notes for Version 6.0
=============================

Changes from version 5.0
------------------------

New Features:

* Date objects clean-up
    * All date objects for all calendars are based on a rata die (RD) date that is in unambiguous UTC, and the time zone is used to offset that to the desired zone. Previously, only the Gregorian calendar dates were.
    * Code is simplified and a little smaller as a result
    * Calculations for the day-of-the-week still occur in local wall time instead of in UTC, as UTC may be on a different day than the local time
* Time zone clean-up
    * Split time zone info into separate files instead of one big one
    * Split the timeszones.json file into a whole bunch of separate zoneinfo files. This means less memory needed, as you don't have to load all the zones at the same time.
    * Changed the zone info compiler (zic) to write out the separate files
    * Changed the assembly tool to assemble all the zones used for each locale, plus all the generic zones
    * Modified ilib.TimeZone to load in individual zone info files, instead of one big one
    * Created an ilib.Loader interface to be able to get more information about the files available on disk for dynamic loading than is available with just a loader function. (Though the old style loader function is still supported.)
    * Modified the node glue file to implement the ilib.Loader interface for nodejs
* Added the missing node based build tools to the shipping src tar
* Updated time zone info to IANA 2014b
* Added the ability to specify time zone transition times using a julian day instead of transition rules
* Collation class upgraded. Now supports English, German, Spanish, Lithuanian, Latvian, and Estonian. The sortkey function works properly now in those languages as well.

Bug Fixes:

* Fixed a minor problem with time zone abbreviations in Danish, Norwegian, and Swedish
* The GregDate object was not calculating the offset when the time zone is "local" and the instance was created with something other than the time components (ie. it was created with a julian day or unix time for example). The methods that used the offset, such as getDayOfWeek(), were therefore only calculating things in UTC.
* Cleaned up date in Arabic to use full names for months and day names in the medium, long, and full formats, as Arabic doesn't really use abbreviations.
* Cleaned up duration formatting in Arabic to use full words for duration components, as Arabic doesn't really use abbreviations.
* Fixed date formats and date range formats in Arabic/Gregorian so that the date components appear in the right order.

Release Notes for Version 5.0
=============================

Changes from version 4.0
------------------------

New Features:

* Added ilib.CaseMapper to do locale-sensitive upper and lower-case mapping. String.toUpperCase() does a reasonable job, and String.toLocaleUpperCase() does a better job, but only for the current locale. This case mapper works for any locale you specify.
* Added name parsing and formatting support for many languages: ar bg bn bs cs da de el en es et fa fi fr ga gu he hi hr hu id it ja kk kn ko ku lt lv mk ml mn mr ms nb nl pa pl pt ro ru sk sl sq sr sv ta te th tr uk ur uz vi zh
    * Support in Russian is currently only for names written in western order (Given-name Family-name)
* Added translations for duration formats for Panjabi (pa)
* Added ilib.LocaleInfo.getDigitsStyle() to return whether the locale uses western digits or native digits. If the locale has native digits, but they are not commonly used currently, this method can return that information as well.
* Added useNative option to the duration formatter constructor to explicitly say whether or not to use native digits. If this option is left out, the formatter will default to the style of digits specified by the locale.
* Added ilib.DateFmt.getMonthsOfYear() to retrieve the names of the months of a year, and ilib.DateFmt.getDaysOfWeek() to retrieve the names of the days of the week that the formatter is using
* The ilib.DateFmt.format() method can now format any date type. You can pass in a regular intrinsic Javascript date object, an ilib.Date object, a unix time (number of milliseconds since 1970), or a string that the intrinsic Date can parse. For all types that are non-ilib dates, they will first be converted into an ilib.Date in the same calendar as the formatter before being formatted.
* Added country name translations for Punjabi, Assamese, and Kurdish, which are not available in CLDR, so they had to be translated manually
* Updated time zone info to IANA 2014a

Bug Fixes:

* Fixed the date formats for many locales that included the am/pm meridiem in the 12-hour formats that should not include them, such when using the "hm" or "hms" components. To see the meridiem, callers should use the "hma" or "ahms" components instead.
    * This also fixed duration formats which erroneously included the meridiem when formatting a duration involving hours and minutes
* Fixed the date formats for many locales that used "H" or "HH" in the 12-hour formats where they should really use "h" or "hh". The "H" and "HH" should be used in the 24-hour formats only.
* Minor fix for "days" in Estonian (et) for duration formatting
* Fixed completely broken date and duration formats for Marathi (mr) and Thai (th)
* If a locale uses native digits by default for formatting numbers, ilib.LocaleInfo.getNativeDigits() was not return the native digits.
* In the date formatter, if the option "useNative: false" was given, but the locale uses native digits by default, it would format the date with native digits anyways. Now, if the useNative option is given, it is honoured even if the locale normally uses native digits.
* In the number formatter, if the option "useNative: false" was given, but the locale uses native digits by default, it would format numbers with the native digits anyways. Now, the option is honoured properly.
* When formatting a date in UTC, the "z" format specifier would be replaced with "UTC+0000". Now, it is replaced with simply "UTC".
* The date formatter now calculates offsets properly between time zones that differ by fractions of an hour. For example, St. John's, Canada has an offset from UTC of -2:30, or Kathmandu, Nepal which has an offset of 5:45 from UTC.
* Fixed a bug where the wrong DST rules were applied to a number of different time zones, sometimes even applying DST to zones that no longer use DST. Fixed the time zone compiler to pick the correct time zone rules for the current year rather than the last time zone rule available.
* Fixed a bug where "linked" time zones were not being generated from the time zone compiler, which meant a number of time zones were missing from the timeszones.json file.
* Fixed a bug in the conversion function from other date types to an ilib date type. This makes sure that when a JS intrinsic Date instance is converted into an ilib date object using a unix time, the time zone is set to "Etc/UTC" so that the date formatter knows how to do the offsetting properly.
* The case mapper was throwing an exception for Lithuanian. Now it works properly.

Release Notes for Version 4.0
=============================

Changes from version 3.0
------------------------

New Features:

* Added support for the Thai solar calendar, which is the official calendar in Thailand
* Added IString and ResBundle classes in the Java library which work very similarly to the ilib classes and support the same message string syntax
* Added mappings from ISO 639 alpha1 -> alpha3, and ISO 3166 alpha-2 to alpha-3 in the ilib.Locale class
* Added support for date/time formatting and date range formatting in Mongolian (mn-Cyrl-MN)

Bug Fixes:

* date formatting fixes:
    * year 0 did not format properly with yy or yyyy templates. It was printing 01 and 0001 instead of 00 and 0000.
    * negative years were not formatting properly. For example year -34 formatted as yyyy used to come out as 0-34 instead of -0034
* date formatters fixed
    * date formatters now use the global time zone from ilib.getTimeZone() for conversion of dates before formatting them. The default time zone is the "local" time zone.
    * Dates constructed with unix times are no longer considered to be in "Etc/UTC". Instead they are in the "local" time zone, which follows how the Javascript Date class works.
    * If a date or formatter is constructed with an explicit locale but no time zone, then the default time zone for that locale is still used.
* Added the Thai Solar code calendar to the "standard" distribution of ilib, seeing as Thai/Thailan is one of the few locales that does not officially use the Gregorian calendar
* The caching code in ilib.loadData was only using the locale spec as the key for loading data. If you requested a different file name or had different load parameters, the cache would return the same file you requested previously for that locale. Now the key includes the file name and a hash of the loadParams object as well to prevent these false hits.
* Added a copy constructor to the ilib.Locale class to avoid problems where the resbundle class was trying to load built-in strings without any strings available
* Fixed the Korean date format for components "wmdy", "wmd", and "wd"

Release Notes for Version 3.0
=============================

From now on, we are going to make more frequent and smaller releases.

Changes from version 2.0
------------------------

New Features:

* Memory footprint enhancements
    * Split ilib into 3 sizes: core, standard, and full
        * Core is the strings and resources and everything they depend on
        * Standard is a set of the classes most code will need
        * Full is everything
    * The dynamic load version of ilib also has 3 sizes
        * The locale-independent data was split out of the dynamic load versions, making them much smaller
        * Made more classes capable of dynamic loading
        * Added initializer functions for static functions that need to load locale-independent data
* Unit tests now test the pre-assembled and the dynamic load versions of ilib
  * tests of different versions of ilib are now separated and timed, which allows them to run more quickly
* Update version number to 3.0
* Dynamic load versions of ilib now include none of the root locale data. (That is none of the generic shared data.) This means the following:
    * in order to use static functions like ilib.CType.*, you need to initialize the data first by calling an init function. Example: if you want to use ilib.CType.isAlpha, you should call ilib.CType._init() first to load the locale data.
    * the code is much smaller now and start-up time is lower
* ilib is now divided into 3 distribution sizes: core, standard, and full
    * core contains only the resource bundle and string classes
    * standard is everything in core plus the formatting classes that most apps need like date or number formatting
    * full is all the classes in ilib
    * there are pre-assembled and dynamic load versions of each of these three sizes
* bug fixes
    * in ilib.String: format was only replacing the first occurrence of {variable} with its value. Now it replaces all of them.
    * The resource bundle object now injects the locale into any string it creates so that the string can format its plurals properly
    * in utils: ilib.isEmpty returned true if an object had properties but every property was falsy
* Added thousands of unit tests for date formatting, duration formatting, and date range formatting for a great many locales, and any problems found with them were corrected
* Collator now calls the native Javascript Intl object to do collation if it exists, otherwise it attempts to do collation by itself
* ilib.loadData now allows you to load localized files from the resources dir that are not json. Json files are merged together to make the final in-memory file, but any other type will simply return the most locale-specific version of the file found without any merging.


Release Notes for Version 2.0
=============================

Note that release 2.0 used be called 1.3, but it got so big, we decided to rename it to 2.0. Hopefully, in the future, we can make more frequent and smaller releases.

Changes from version 1.2
------------------------

New Features:

* Added static method ilib.ScriptInfo.getAllScripts() to return a list of all script identifiers that this copy of ilib knows about.
* Added methods to locale info class to get information about the scripts for the locale
    * getAllScripts() returns an array of script codes in which text in this locale can be written
    * getDefaultScript() returns the default script used for the locale in the absence of any other information
    * getScript() returns the script code that is explicitly given in the locale specifier, or the default script for the locale otherwise

* Added getScriptDirection() method to the script info class to document if the script is written left-to-right, right-to-left, or top-to-bottom
* Introduced a test runner that runs all unit tests under nodejs to verify that it works there as well
* ilib.getLocale() now attempts to read the environment to find out the default locale and time zone. It can find the locale from the browser (FF, Opera, Chrome, and IE), from nodejs or rhino, and from webOS. It can also find the time zone from nodejs, rhino, or webOS if the environment is set correctly.
* ilib.Locale and ilib.TimeZone classes now get their default locales correctly as well
* Added the ability to get locale data dynamically instead of having everything pre-assembled into one big file.
    * added ilib.setLoaderCallback() which allows the caller to register a function to call when ilib needs to load locale data. The caller can then determine how to load the json files in their own environment.
    * added the ability for various ilib classes to call this function to get any missing locale data
         * loaded data is cached, so it only needs to be loaded once
    * added an onLoad callback method to those same ilib classes so that the data can be loaded asynchronously and the caller will be notified when it is finished being loaded and the data has been processed
    * added a sync option to many classes. When sync==true, the missing locale data will be loaded synchronously and the object returned from the constructor. If sync==false, the missing data will be loaded asynchronously and the onLoad callback function must be specified to get the results.
    * distribution now includes a pre-assembled version of ilib called ilib-dyn.js without any locale data in it other than the base (default) locale
* ilib.Locale now recognizes locale specifiers that follow the BCP-47 conventions
    * can now recognize ISO 639 3-letter codes for languages as well
    * can now recognize ISO 15924 script codes
* Added ilib.Name and ilib.NameFmt class to parse and format personal names.
    * Currently works in the following languages: de, en, es, fr, it, nl, and zh
    * Ability to format names by length or by an explicit set of name parts
* Added system resources for 413 locales
    * Contains translations for days of the week, month names, etc.
    * Data is extracted from the Unicode CLDR
* Added the ability to format choice strings properly for many locales in ilib.String
    * Defines new number classes based on rules in CLDR: "zero", "one", "two", "few", and "many"
        * Definitions of which numbers belong to which class are based on the locale
    * Allows translators to give grammatically correct translations based on the classes instead of using explicit numbers to define the classes
    * Supports languages with complicated rules such as Russian, Serbian, or Polish
        * Full list: af ak am ar asa ast be bem bez bg bh bn br brx bs ca cgg chr ckb cs cy da de dv ee el en eo es et eu ff fi fil fo fr fur fy ga gd gl gsw gu guw gv ha haw he hi hr is it iu jgo jmc kab kaj kcg kk kkj kl ks ksb ksh ku kw ky lag lb lg ln lt lv mas mg mgo mk ml mn mo mr mt nah naq nb nd ne nl nn nnh no nr nso ny nyn om or os pa pap pl ps pt rm ro rof ru rwk saq se seh sh shi sk sl sma smi smj smn sms sn so sq sr ss ssy st sv sw syr ta te teo ti tig tk tl tn ts tzm uk ur ve vo vun wa wae xh xog zu
* Added ilib.LocaleInfo.getLikelyLocale(). If the locale info was constructed with a partially specified locale, this fills in the missing parts (if possible!) using the most likely values that go with it. For example, "uz" maps to "uz-Cyrl-UZ". That is, the Uzbek language usually refers to the locale of the Uzbek language in Uzbekistan written in Cyrillic.
* Added a class to do mailing address parsing and formatting. All unit tests pass.
    * Added top-level locales for regions without a language. (addresses are language independent)
* Generated region and language names from CLDR which now appear in the locale info.
* Added files for the "unknown" locale zxx-XX. This is also used as locale for pseudo-translation.
    * Changed the pseudo locale from xx-XX to zxx-XX, as zxx is actually in the ISO 639 standard meaning "absense of linguistic information".
* The hierarchy of locales is now changed so that more specific parts override properties in less specific parts and that locales with scripts or with no language are also included. eg. zh-Hans-SG overrides properties in zh-Hans.

The hierarchy from least specific to most specific is as follows:

language
region
language/script
language/region
region/variant
language/script/region
language/region/variant
language/script/region/variant

* If a locale uses DST, the time zone info now can give the dates where DST starts and ends in a particular year
* The ilib variable is now assigned to the exports object if it exists so that ilib can be used a module under nodejs.
    * To load ilib:   var ilib = require("./iliball.js").ilib;
* Added ilib._getPlatform() to return what platform this ilib thinks it is running on
* Added the ability to load in psuedo maps to any other scripts. Currently supported are Latin (the default), Hebrew, Chinese (simplified), and Cyrillic.
    * to use these mappings specify the locale "zxx-XX" (default Latin), "zxx-Hebr-XX", "zxx-Hans-XX", or "zxx-Cyrl-XX" respectively when creating your resource bundle instance
* Added a "missing" option to ilib.ResBundle to tell it what to do when the source string is missing from the bundle. Possible values are:
    * source - return the source string unchanged. (Default)
    * pseudo - return a pseudo-translated version of the source. When this option is chosen, iLib will check what the default script is for the locale, and use any pseudo maps for that script. Otherwise, it will default to pseudo-translated Latin.
    * empty - return the empty string
* Added an ilib.Collator class which will be used to sort things locale-sensitively.
    * currently its methods are stubs that operate in ASCII only
    * the purpose is to get the API out there for people to start using
* Added implementation for ilib.ScriptInfo.getScriptDirection,
* added new methods getNeedsIME() and getCasing() to ilib.ScriptInfo
    * getNeedsIME returns return whether or not the script requires an IME to input its characters
    * getCasing returns whether or not the script has the concept of letter case
* Time zone updates:
    * Updated time zone info to the IANA version 2013c
    * Added ilib.TimeZone.getCountry() which will give the ISO country code of this time zone, if known. (Some time zones are general and not specific to a particular country.)
    * Added "long" style of time zone, which formats with the full name of the zone in English.
    * Modified ilib.TimeZone.getAvailableIds() to take an optional country filter parameter. This filters the output list so that it only includes the available time zones for the country with the given ISO code.
* The CLDR to ilib conversion scripts are now done for number formats and date formats. Consequently, ilib now supports most locales for both number formatting and date formatting.
* Added support in number formatting for primary and secondary grouping digits, allowing ilib to support a number of new locales with complex number formatting such as hi-IN or en-IN
* Scripts
    * Filled in an implementation of ilib.ScriptInfo.getScriptDirection() to tell you which direction a script is written
    * Added needsIME() which tells you whether or not the script commonly needs an IME in order to type these characters
    * Added getCasing() which tells you whether or not the script has the concept of upper- and lower-case letters
* Moved things around in ilib.loadData() so that users can use it to load their own json files.
    * json files will be merged according to the locale hierarchy mentioned above
    * calls to load non-json files will return the most locale-specific version of the file
* added number formats, date formats, script names, day of week, number formats, percentage formats, currency formats for many locales
* number formatter now supports formatting with native digits, and the number parser now supports parsing with native digits
* when the calendar-based date objects are initialized with a unixtime or julianday parameter, the time zone is automatically set to Etc/UTC, as those measures of time are supposed to be in UTC. This will cause any date formatters to do a time zone conversion if the formatter has a time zone too.

Bugs fixed:

* Version updated to 2.0
* Dates on the last date of a month in the gregorian and julian calendars that had hours in them were being calculated as day 0 of the next month. Now, it is correctly calculated as the last day of the month.
* Fixed bug in demo site that prevented it from working in IE
* Fixed the default time zone to be Etc/UTC instead of Europe/London, as Europe/London observes daylight savings time and Etc/UTC doesn't
* Fixed various date formatting problems in the currently supported locales based on data from CLDR
    * Use lower-case or capitalized day names and month names in those locales that require them
    * Removed "oxford comma" from the final list separator for many languages
    * de: "Montag" was spelled incorrectly
    * fi: future relative dates were not formatted correctly
    * fr: missing accented character for translations of February, past relative dates had a spelling error. ("il ya" instead of "il y a")
    * ko: fixed some oddities in Korean duration formats where the word "and" was included
    * pt: updated day names in full format, updated past and future relative date formats
    * ru: updated past relative date format. Now use number classes feature of ilib.String' choice format method for duration formats.
    * vi: fixed incorrect translation of "seconds" in some of the duration formats
    * zh: shortened day names for the short format
* Fixed some incorrect json syntax in a few of the timezone.jf files
* Make sure the locale parts appear in the spec from ilib.Locale.getSpec() in a fixed order so that two specs can be compared against each other successfully.
* Moved the directories under locale root that are for countries without a language underneath of the "und" directory. ("und" is the ISO 639 code for "undefined"). Many of them had the same letters as language codes but with a different case. When getting these files under Windows, which has a case-insensitive file system, there were conflicts. Now these directory names shouldn't conflict any more.
* Changed the common symbol for Indian Rupees from the ISO code of INR to the new rupee symbol ₹
* Locale didn't parse M.49 numeric region codes properly (as used in CLDR and BCP-47)

Release Notes for Version 1.2
=============================

Changes from version 1.1
------------------------

New Features:

* Added "local" time zone id to support whatever the time zone is that the code is currently running on. This doesn't get a real time zone, only the offset from UTC.
* Added ability to create a time zone based on an offset. Previously, this was documented
but not implemented.
* Added getOffsetMillis and getRawOffsetMillis to the TimeZone object to return the offset in milliseconds
* Date formatting is now supported in these new languages and their sub-locales: ar, da, fi, no, sv
* Added escapeMode parameter to ResBundle.getString so that characters in the string that potentially conflict with the programming language syntax will be properly escaped for that file type
* Added setTimeZone() method to each of the calendar date objects
* Added containsKey() method to the ilib.ResBundle object to be able to tell if there is a translation for a given key/source string in the resource bundle. You could not previously tell whether or not there was a translation because getString() returns the default value (ie. the source string) when there is no translation available. The containsKey() method returns false (no translation available) when getString() returns the default.
* Added ilib.ScriptInfo object that gives information about scripts in the ISO 15924 standard. Info is generated automatically from the Unicode Character Database (UCD) files using a new extraction tool written in Javascript as well.
* Added the static method ilib.String.fromCodePoint() to replace String.fromCharCode() which does not handle Unicode surrogate characters. (ie. text encoded in UTF-16). The characters that this opens up are the UCS-4 Unicode code points in the supplementary planes. (ie. code points > U+FFFF)
* ilib.String now implements all regular methods of the Javascript String class, so that ilib.String can be used (mostly) as a String replacement. The only oddity is that you cannot compare an ilib.String instance to a string constant using the triple equals operator, as the triple equals requires the types of its operands be equivalent as well as the values. You can still use the double equals operator to test an ilib.String instance against a string constant though.
* Added these methods to ilib.String: codePointAt() and codePointLength() to handle getting proper UCS-4 code points from a Javascript string encoded in UTF-16. These two methods view the string as an array of code points rather than characters.
* Added iterator() to ilib.String to iterate through the string by code points instead of chars. Also added charIterator() to iterate the the string by characters properly. The difference is that the iterator returns code points (32-bit integers) and the charIterator returns a string with single UTF-16 characters in it, which may consistent of pairs of surrogates or single characters. JS currently uses UTF-16 to encode Unicode characters in strings, which treats pairs of surrogates as two separate characters instead of as a single character with a single code point. Use these methods to interpret the surrogate characters properly.
* Added normalize() method to ilib.String to implement the Unicode Normalization Algorithm. This passes the UNA conformance tests as published on the Unicode web site for Unicode version 6.2.0. Added nodejs-based tools to convert the normalization data and the conformance test data from Unicode txt files to json files so that they can be used directly in Javascript.

Bugs fixed:

* version updated to 1.2
* Fixed Japanese date long format to use Arabic numerals for the months instead of Japanese digits

Release Notes for Version 1.1
=============================

Changes from version 1.0
------------------------

New Features:

- Added support for the Hebrew calendar
- Added ability to format dates in other calendars using the names of months and days-of-the-week in the right language
- Added support for time components "ah" which formats the hour plus the am/pm. This gives times like "3pm" in English.
- Added ilib.Locale.getAvailableLocales() to manifest which locales this copy of ilib supports
- Added support for "macro" directive in the assembly tool so that the macros can be replaced with generated text. So far, the only macro supported is the list of current locales.
- date formatting is now supported in these new languages and their sub-locales: af, id, ja, ko, nl, pt, ru, tr, vi, zh
- number and percentage formatting is now supported in virtually all 386 locales
- added "raw" type to the ResBundle constructor. Raw bundles pseudo-translate everything without parsing. The new default type "text" now doesn't pseudo-translate replacement parameters so that the output can be used for formatting strings
- Added ilib.ResBundle.getType() method which returns the type option that was given to the constructor of this ResBundle instance.
- Added ilib.Currency.getAvailableCurrencies() method to document which ISO currencies this copy of ilib knows about.
- Added support for the 7 Chinese time-frames of the day used when formatting times with the 12-hour clock. This replaces the two am/pm time frames.

Bugs fixed:

- version updated to 1.1
- work around JDK wierdness where only old ISO codes for the country/language are supported, by adding an IlibLocale object in the assembly tool. This affected Hebrew which used to use the "iw" code instead of the current "he".
- The constructors for the date objects accept parameters as numbers or strings that contain numbers, which is more web page friendly
- Canadian full date formats were missing a comma between the month and year
- Italian duration format misspelled plural of the word "day" and mistranslated "and" to German instead of Italian
- Fixed missing French duration and date range formats
- ilib.Number parser could not parse negative numbers.
- the number parser and formatter would only accept number primitives, and not a string, ilib.Number, or the standard JS Number objects as arguments. Now, of course, they do.
- you can now call ilib.Number.format() without an argument and get an empty string instead of an exception.
