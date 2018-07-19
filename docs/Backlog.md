# Development Backlog #

## Features for iLib ##

Here is a list of features in no particular order that may be developed for iLib in a future release. When it comes time to plan for the next release, the priority of each of the following will be re-evaluated and the top few will be scheduled for development.

* Webpack support
    * Support sync and async operation (static and dynamic) versions
    * Support assembled and unassembled versions
    * Support compressed/uncompressed versions
    * Only include classes and the locale data that they need for a given set of locales.
* Grunt work
    * Convert current ant scripts to grunt instead (except for the java directory, which stays on ant, and the qt directory which stays on qmake)
        * Overall build should be controlled by grunt, and call ant or qmake as necessary
* String formatting
    * BreakIterator class. Detect breaks between
        * glyphs
        * words
        * sentences
        * paragraphs
    * Line wrapping function to wrap lines between words where possible
        * Depends on break iterator
        * hyphenation?
    * string case function. (Existing case functions operate on single characters, but this would operate on whole strings.)
        * title case
        * start case
        * sentence case
        * lower case
        * depends on break iterator
    * integrate choice formatting into replacement parameters in the regular format function?
    * word syllabification
    * word hyphenation
        * depends on syllabification for many locales
* phone numbers
    * More locale data for many other countries. Use data from libphonenumber?
    * letter dialing conversion (1-800-FLOWERS = 1-800-356-9377)
* React components
    * wrapper around most ilib classes
    * support sync and async operation
    * support input for many classes such as date picker, time picker, calendar picker, as well as formatters for various classes
* Locale fallback mechanism
    * Fall back from an unsupported locale to a supported locale in a smart manner
    * Build on top of user-provided configuration and use the locale matcher for default matches
* resource bundle updates
    * translation wrappers around Bing, Babelfish, and Google in the ResBundle object
    * support fetching translations dynamically via AJAX (perhaps requiring the jQuery integration?)
    * resource bundle chaining to support fallbacks
    * A/B testing support
        * translate source string to different target strings depending on locale + bucket
* number parsing and formatting
    * better support for Asian formats
    * support for non-decimal number formats, such as Hebrew numbers or Chinese numbers
    * currency conversion via OANDA or other such services
* date parsing and recognition
    * Support more formats and more locales
    * Apply heuristics
    * Come up with test data sets to continually improve recognition
* calendars
    * Chinese lunar calendar
    * Japanese Imperial calendar
    * Holiday calculation per locale
* transliteration
    * to base characters (de-accenting)
    * to lower- or upper-case
    * phonetically between scripts. eg. Romaji <-> katakana, Pinyin <-> ideographs, Cyrillic <-> Latin
    * to IPA for use in rhyming
    * from IPA to other characters in IPA for use in soundex
    * to sort key string
    * from numeric pinyin to accented pinyin
    * data is available on CLDR
* collation/sorting
    * expand locale coverage
    * write tool to convert CLDR data to ilib format
* word functions
    * given a word, tell which gender it is
    * given a word, tell which case it is
    * given a word, tell the plurality of it
    * given a word, tell the politeness level (Japanese)
    * integrate with Salesforce Grammaticus?
* Input Method Editors (IME)
    * configurable 101 software keyboards
    * KKC for Japanese
    * Hangul for Korean
    * Pinyin for Chinese (and others? Wubi?)
* More locale data
    * name parsing info
    * keyboard layouts
    * collation configurations
    * phonetic transliterations
    * holiday schedules
    * configuration detailing dates of transition from Julian to Gregorian calendar
    * phone number info and geolocations
    * name configuration
* jQuery plugin.
    * iLib provides the date/locale information to configure the jQuery UI widgets
    * date picker (calendar)
    * IME
    * validators for various data types such as person names, phone numbers, date/times, numbers, currency, percentages, etc.

## Features for the JS Assembly Tool ##

May not need this any more because of webpack work...

Here are a proposed set of features to add to the assembly tool.

* Ability to read a set of HTML/PHP/JSP/etc. files for depends and data directives without including them into the output file. This allows you to assemble an iLib JS file with only the stuff that is needed by your web app.
* Rewrite in Javascript
* Make a simple ilib generator web page, similar to the jquery-ui theme generator, where you pick which classes you want and which locales you want, and it will build a copy of ilib for you with all dependencies satisfied


## Stuff From the Backlog That is Already Done

* Support the BCP-47 standard for locale specs
    * add script concept to locales, support ISO 15924 script IDs
* code to auto-detect the locale of the environment that iLib is running in
    * perhaps part of the Locale class when you call the constructor with no arguments?
    * check the environment, http headers if available, browser variables if available, etc.
* person names
    * parsing
    * formatting
    * sort names (in German and Dutch, "von Beethoven" sorts under "B" instead of "V")
* phone numbers
    * parsing
    * formatting
    * geolocation
    * normalization
    * matching
* address parsing and formatting
* calendars
    * Persian calendar
    * Hebrew calendar
    * phase of the moon calculations
    * solstice and equinox calculations
* String formatting
    * For choice formats, support a syntax like "*2" for the match string to match any number that ends in 2. Needed to do proper plurals and ordinals, especially in Russian.
        * alternate idea: maybe support regular expressions for the match strings?
    * String truncation function to truncate a string between words where possible
    * pseudo-translation updates
        * support mapping to other scripts, such as RTL scripts or Asian scripts in order to test your app's support for those scripts
        * support a "hash" before each string so you can identify when two strings that appear in the UI come from the same or different resource strings
    * ellipsizing method in String class
* charset object
    * identification
    * normalization of IANA charset names
    * charset conversion
    * recognition
* character functions
    * script identification (given a character, tell what script it is used in)
    * character normalization (Unicode normalizations, etc.)
* unit conversions (metric <-> imperial, celcius <-> fahrenheit)
* collation/sorting
    * accent insensitive
    * case insensitive
    * support unique compressions
    * sort key generation and sort key strings
    * sort styles (eg. “dictionary sort” or “phonebook sort” in German)
* More locale data
    * date components and formats
    * paper sizes
    * default timezone for the locale, and lists of timezones in the locale
