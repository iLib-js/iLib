# Getting Started #

This getting started guide is a brief introduction to iLib.

## Getting iLib ##

You can get iLib in one of a few ways:

1. Download the already-assembled code from the [Files](builds) section of this project, unzip or untar, et voila
1. Get the project [from github at [Code]. The master branch is always has the last stable build, the development branch is the latest approved code, and features are developed in the feature branches.
1. Use npm to get the latest build: "npm install ilib"

## Including iLib ##

Let's say that you are creating a web application. To include iLib, you could take the file ilib-full-compiled.js from the iLib distribution and copy it to your web server where it is accessible to your pages.

Then, you simply include it inside the head tag like any other Javascript file:

~~~~~
<script type="text/javascript" src="ilib-full-compiled.js"></script> 
~~~~~

Now any iLib class is available to use.

Now let's say you are creating a nodejs application. We assume that you have already installed the iLib npm package. At the beginning of your program, all you need to do is require ilib and then require the classes you need. For example, let's say you need the date formatter:

~~~~~
var ilib = require("ilib"); // initialize the ilib library and set up the data loaders
var DateFmt = require("ilib/lib/DateFmt"); // load in the date formatter specifically
~~~~~

The first require sets up ilib and initializes it for the environment in which it is running. (It can run in node, browsers, Rhino, RingoJS, Qt, etc..) After it is initialized, you can load other classes.

Any iLib class is available to use in the ilib/lib directory.

## iLib Classes ##

In iLib currently, there are three general types of classes:

1. Object modelers which also parse things. These model a specific type of data and the constructor usually parses a string and interprets it in some way.
1. Formatters. These take model instances and format them back into strings in a locale-sensitive manner.
1. Info objects. These are object wrappers around basic info that the object models and formatters use.

This guide will briefly go through one example of each type.

## An Object Model ##

The _INumber_ class represents a number. It can parse numbers written as strings in many different locales.

~~~~~
var ilib = require("ilib");
var INumber = require("ilib/lib/INumber");

var num = new INumber("54.321,05", {
    locale: 'de-DE'
});

console.log("The number is " + num.valueOf());
// output is "The number is 54321.05"
~~~~~

The _valueOf()_ method gives you the value of the number instance as an actual Javascript number.

## A Formatter ##

Formatting a date is simply a matter of creating a date formatter instance and a date instance, and then formatting that date with the formatter. Those familiar with ICU or the Java libraries will be familiar with this pattern.

~~~~~
var ilib = require("ilib");
var DateFactory = require("ilib/lib/DateFactory");
var DateFmt = require("ilib/lib/DateFmt");

// defaults to Gregorian dates, or whatever calendar is appropriate for the current locale
var date = DateFactory({
    year: 2012,
    month: 5,
    day: 18
});
var formatter = DateFmt({type: date});
console.log("The date is " + formatter.format(date));
// output is "The date is Fri 5/18/2012"
~~~~~

Et voila, you have a formatted date. The strength of iLib is that the formatter classes are very flexible. The format is controlled via options to the _DateFmt()_ constructor. In the example above, only one argument was passed to the _DateFmt_ constructor to tell it to format dates only. Other arguments are assumed. It will use the current ilib locale, which it attempts to glean from the environment, and default format and length of format for that locale. See [the API reference documentation](http://www.translationcircle.com/ilib/jsdoc/) for more details on the parameters to the constructor of the _DateFmt_ class.

## An Info Object ##

Let's say you want to get some information about a time zone. Specifically, you would like to know how many hours different a user's time zone is from the server's time zone so that your code can give them info appropriate to the time in their time zone.

First, you would create a time zone instance with the id of the user's time zone, and another instance with the id of the server's time zone. Then, for a particular time and date, you find out what the offset is to UTC for each time zone, then subtract.

~~~~~
var ilib = require("ilib");
var TimeZone = require("ilib/lib/TimeZone");
var DateFactory = require("ilib/lib/DateFactory");

var tzUser = new TimeZone({
    id: 'Europe/Berlin'
});

// default to the current time zone
var tzServer = new TimeZone();

// date we are interested in
var date = DateFactory({
    year: 2012,
    month: 6,
    day: 1
});

// need the date because the offset changes due to daylight savings time
var userOffset = tzUser.getOffset(date); 
var serverOffset = tzServer.getOffset(date);
var differenceInHours = (userOffset.h + userOffset.m/60) - (serverOffset.h + serverOffset.m/60);
~~~~~

As a side note, all time zone information is compiled from the IANA tzdata database at [http://www.iana.org/]

## More Reading ##

The above is just a flavour of what you can get from iLib. There is also a more complete [tutorial](iLib1.0JSTutorial.pdf) for iLib 1.0 (a little out of date) that goes into detail about all the things iLib can do and a number of tutorial pages listed on the home page of this wiki. You can also browse [the latest API reference documentation](http://www.translationcircle.com/ilib/jsdoc/) when you are ready to start coding.