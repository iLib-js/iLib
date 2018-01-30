# Frequently Asked Questions #


##### Javascript can already do date and number formatting. Why do I need iLib? #####

In a word: flexibility. The standard Javascript libraries do indeed contain a way of doing date and number formatting, but only in particular ways.  

For date formatting, if you call the _toLocaleString()_ method of Date object, you will get a nicely formatted date string that looks like this:

~~~~
Sunday, May 13, 2012
~~~~

But, there are no controls on it. Let's say you wanted to format someone's yearly birthday as just "May 13" where you leave off the day-of-the-week and the year? You cannot do that. Let's say your browser is running in English, but the user has set their locale to German. You cannot use _toLocaleString()_ to format the date in German. But, the iLib classes can do those things.

Similarly, with numeric formatting, you can call the function _Number.toString()_ or _Number.toFixed()_ but there are very few controls. What if you wanted to format in another locale? What if you wanted to do proper locale-sensitive rounding? _toFixed()_ only does truncation.

In this and many other cases, the standard libraries fall short. iLib provides a much more flexible API, and you have the ability to update or change the base locale data upon which the classes operate.

##### What's the difference between a date and a duration? Can't I just use the date formatter to format a duration? #####

A date is a particular instant in time. A duration is a length of time. 

As such, dates have particular limits on the components. For example, the months can only run from 1 to 12 in some calendars or from 1 to 13 in yet others. The date of the month can only run from 1 to 31 in some calendars or 1 to 28 in others.

A duration does not have such limits. The length of a movie might be 198 minutes and 17 seconds, for example, and the current point in the movie that you are watching may be at minute 84 and 23 seconds. Both of those have numbers of minutes larger than the 60 allowed in a date/time string. If you format 198 minutes with a date formatter, you will get something strange like "Monday Jan 1, 1 3:18am". That's not quite what you're looking for. What you would expect is something like "198:17" and for the current point to be something like "84:23".

##### What's the difference between a duration and a date range? #####

A duration is a length of time without a specific start and end point, whereas a date/time range is also a length of time but which does have a specific start and end point. Think of a duration as the length of a movie, and a date/time range as the times that the movie is showing at a cinema.

For example, the length of the movie may be 198 minutes and 17 seconds. The duration would be represented in English as:

~~~~~
198:17
~~~~~

And the date/time range that the movie is showing might be represented in English as:

~~~~~
7:00pm - 10:18pm, Sat May 12, 2012
~~~~~

##### How do I convert from a date in one calendar to a date in another calendar? #####

The way it is done is actually pretty simple. Essentially, create a date object in one calendar, ask it for the Julian Day equivalent of that date, then create a new date object for a different calendar using that Julian Day object in the options to the constructor.

A Julian Day is a separate value than a date in the Julian calendar. They are unfortunately closely named, but not otherwise related. A Julian Day counts the total number of days since the beginning of its epoch plus the fraction of a day. As such, it is not tied to any specific calendaring system, and therefore makes great intermediate value to translate between calendars.

Here is an example of converting a particular date/time from the Gregorian calendar to the Julian calendar.

~~~~~
var ilib = require("ilib");
var GregDate = require("ilib/lib/GregDate");
var JulDate = require("ilib/lib/JulDate");

var gdate = new GregDate({
  year: 2012,
  month: 5,
  day: 12,
  hour: 11,
  minute: 37,
  second: 33
});
var jdate = new JulDate({
  julianday: gdate.getJulianDay()
});
~~~~~

##### How can I calculate the date of a holiday? #####

You can calculate the date of a holiday using the _OnOrAfter()_, _OnOrBefore()_, _after()_, or the _before()_ methods of the calendar date classes. These methods calculate the day of the week relative to another date.

Example: let's calculate the date of Mother's Day in the US for 2012. Mother's Day is defined to occur on the 2nd Sunday of May of each year. An equivalent definition of that is the first Sunday that occurs after May 7, seeing as the first 7 days of the month must contain exactly one Sunday. Here is how that is calculated:

~~~~~
var ilib = require("ilib");
var GregDate = require("ilib/lib/GregDate");

var refDate = new GregDate({
  year: 2012,
  month: 5,
  day: 7
});

// for the day-of-the-week parameter, 0 = Sunday, 1 = Monday, etc.
var mothersDay = refDate.after(0);
~~~~~

The end result is that the mothersDay object will contain:

~~~~~
{
    year: 2012,
    month: 5,
    day: 13
}
~~~~~

##### How can I calculate how far apart two dates are? #####

Each calendar date objects supports the _getJulianDay()_ method, which returns the Julian Day equivalent of the current date/time. The Julian Day is just a straight count of days since the start of its epoch on January 1, 4713 BC. (Yes, there is [some complex reasoning](http://en.wikipedia.org/wiki/Julian_day#History) why that date was chosen as the start.) If you get the Julian Day for two date objects and subtract, you will have the difference between the dates in whole days and fractions of a day.

Incidentally, since all calendar dates return the same Julian Day type, you can take the difference between any two calendar date objects, even if they are not the same type. This can be useful as well to see which date is later than the other when sorting a list by a date column.

##### When formatting a currency amount, why do I have to give both the locale and the currency? Doesn't the currency determine the locale? #####

For many currencies, there is only one country that uses that currency. However, that is not true for some important currencies. For example, the Euro is used throughout Europe, and the US Dollar is the official currency in the US, Costa Rica, Bermuda, the British Virgin Islands, and a few other places. Even when you have the exact same number of units of the currency in different countries, they may have different conventions as to how to format that number and where to put the currency sign.

Example: 5 euros and 23 cents in German/Germany:

~~~~~
5,00 €
~~~~~

In English/Ireland:

~~~~~
€5.00
~~~~~

##### What do you use pseudo-translation for? #####

Pseudo-translation is primarily used for enablement testing. That is, to make sure that your app is internationalized and therefore "enabled" for translation. This testing can happen without incurring the cost of an actual translation, using your English-only speaking testers. (Or whatever language is your source language.) In this case, it means two things:

1. that all your Javascript code is doing the right thing and getting its strings via the ResBundle class
1. that an actual translation is less likely to cause overruns, truncations, or odd wrapping, because pseudo-localized strings are artificially lengthened to simulate "long" languages like German or French

The way it is used is that the tester can run your app or browse your web site, and then change their user preferences or settings to the "pseudo locale". Then, they can see by the funny accented characters that the strings came via ResBundle properly, and yet they can still read it because the string is still roughly intelligible in English. If the HTML itself has the same psuedo-localization done to it, then any strings that the tester finds which are still in plain text fall into one of these categories:

* user-entered data
* data from a 3rd party site or web service
* data from the database, which may need to be mapped to the local language
* "hard coded" strings from your HTML or Javascript that are not coming through a ResBundle object properly and are therefore not translatable

It is the third and forth categories of strings that you need to worry about. Typically, the tester knows what they entered themselves, so they do not submit bugs on that text (the first category). They would only submit bugs against strings in the second, third, or forth categories. The second category of strings is not usually a problem. You just need to make sure you are passing the locale to the 3rd party to get the right thing back. But, for the third and forth categories, it is up to the web developers to sort through the bugs and figure out whether there is a database or hard-coded string or not.

##### If the Google Closure Compiler already compresses Javascript files and drops unused functions, why do I need the assembly tool? #####

The Google compiler performs a related, but different, function. It can squeeze out all the extraneous white space and shorten identifiers that are not public. It can even drop functions that are not used. However, for a library, that's not a good idea because you want to keep everything in case someone wants to use it. There is a way to specify "export" functions so that the Google Closure Compiler doesn't drop them. However, if you want to drop some functions and not others, you've have to go an edit each file to make sure some functions are exported and some are not.

But what it can't do is figure out what your code needs and doesn't need, and which locale data to include and which to leave out, unless you compile all of your Javascript for your entire web app and all of the iLib Javascript together into one file and make sure you are meticulous about exporting things.

The depends directives inside the Javascript files direct the assembly tool to put  files together in the correct order such that all the functions and all of the locale data are defined before they are used, and it is all done dynamically. This allows iLib to have a large number of separate Javascript files where each file focuses on one class and maintains its own dependency list. The iLib build.xml file then calls the Google Closure Compiler to minify the results without dropping any functions.

##### Does it work on nodejs? webkit/v8? rhino? #####

Yes, yes, and yes.

