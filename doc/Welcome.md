# Welcome to the iLib Project #

## What is iLib? ##

iLib is a library of internationalization (i18n) routines and classes written in Javascript.

## Why iLib? ##

With the advent of AJAX, it is no longer possible to avoid doing internationalization (i18n) in Javascript. Previously, your web application could format dates in the user's locale on the server side and send the correctly-formatted date across the net to the browser side, written as text in the HTML. 

In the last few years, the popularity of AJAX and the proliferation of web sites that offer web services means that sometimes a web page may not interact with its own web server, and therefore cannot expect the results of a web service call to come back already formatted for the user's locale. The page can call web services via AJAX that give results such as time stamps encoded as unix time (milliseconds since Jan 1, 1970 UTC). With a time stamp like that, the formatting has to be done in the browser. The standard Javascript library is inadequate to format it flexibly in any given locale, as it produces a very verbose output for one locale only.

Enter iLib. Now you can do the date formatting properly, right in the browser. It's not even difficult or slow!

## What Can iLib Do? ##

Date formatting is not all that iLib can do. It can format time durations like the lengths of songs or videos, date ranges (date formats with a specific start and stop time), numbers, currency, and percentages. It can also give you information about calendars and time zones, as well as other locale specific information. Additionally, it can help you localize the Javascript code in your web page by giving you a class to translate strings and a class to format them. It also includes the equivalent of the C runtime library CType functions to help you parse strings.

More classes are on the way, and support for many more locales.

## How do You Use it? ##

Using it is easy. Just include iliball-compiled.js in your HTML, et voila, the iLib classes are all available to your code. The classes are very loosely modeled after the i18n classes in Java. For example, to format a date, you have to instantiate a date formatter object, and then ask it to format a date for you. You can keep the formatter around to format many dates, such as when you are populating the rows of  a table that include a date as one of the columns.

If you don't need everything in iLib for your web site, iLib comes with a tool that allows you to reassemble a new, smaller file that only contains the classes you need, and all the classes they depend on. 

For more detailed instructions, see the [Getting Started Guide](Getting Started) or the full [iLib Tutorial](iLib1.0JSTutorial.pdf). If you are an old pro at APIs or Javascript, you can skip directly to the [API Reference Documentation](http://www.translationcircle.com/ilib/jsdoc/).