Unit Conversion and Formatting in iLib
=============================

In many parts of a UI, especially for mobile devices, you will want to format measurements that your device makes in a way that the user can understand. This includes scaling the number to be a reasonable size and precision, as well as using the correct units for the user's locale, and using the translated name for the units.

For example, if you have a GPS built in to your device, the driver probably returns you measurements of velocity in meters per second. That is all very nice, but most users don't think in meters per second. They would want to see their velocity kilometers per hour in most of the world, or miles per hour in a few countries. That would make more sense to them.

Similarly in terms of scaling, if a file is 1284234564 bytes long, it would be more understandable to the user to show "1.2GB" instead of "1,284,234,564 bytes" on the screen. That is, the number is scaled to a more easy-to-understand range.

iLib provides classes that can do conversion, scaling, and formatting of measurements with various units.

Conversion
----------

Conversion between measurement units occurs using the Measurement class. The idea is that you create an instance of a measurement that has both an amount and a measurement unit 
(eg. "5 meters"), and you can use this to convert to other units.

Each measurement unit has a type such as "length", "velocity", or "digital storage". Units can only be converted within that type. That is, "meter" can be converted to "yard" because they are both units of length, but not to "degrees Celcius" which of course is a unit of temperature.

Creating a measurement is a simple matter of making a new instance:

~~~~~
var ilib = require("ilib");
var Measurement = require("ilib/lib/Measurement");

var m = new Measurement({
    amount: 5,
    unit: "meters"
});
~~~~~

The units can be a wide variety of things, and iLib has many aliases. For example, you can set the unit property to "meters", "Meters", "meter", "Meter", "Metre", "metre", "Metres", "metres", or "m" and get the same things. All of them are aliased to "meter".

There are two ways to convert to a different unit. You can create a new measurement instance, or use the static convert function on a measurement.

To convert using a new measurement instance, you can use the first measurement as the value of the amount property. Here is how it would look:

~~~~~
var ilib = require("ilib");
var Measurement = require("ilib/lib/Measurement");

var m1 = new Measurement({
    amount: 5,
    unit: "meters"
});
var m2 = new Measurement({
    amount: m1,
    unit: "feet"
});
~~~~~

The variable "m2" will now contain the value:

~~~~~
{
    amount: 16.4042,
    unit: "foot"
}
~~~~~

Notice that the amount is converted into feet, and the unit itself has been changed via the aliases to "foot".

To convert using the static convert method is also simple enough. You will need to know what type of measurement you are dealing with in order to get the subclass of Measurement that you need. 

Let's say you want to do the exact same conversion as the previous example. In this case, we are converting lengths, so we need to use the convert method on the subclass Measurement.Length:

~~~~~
var ilib = require("ilib");
var Measurement = require("ilib/lib/Measurement");

var numFeet = Measurement.Length.convert("feet", "meter", 5);
~~~~~

Now the variable "numFeet" will contain the value 16.4042. In fact, the first method of conversion relies on this static method to do conversions, but the Measurement constructor automatically selects the right subclass based on the units.


Basic Formatting of Measurements
----------------

Let's say we now want to take a measurement and format it for display to the user. To do this, we use the UnitFmt class which has a constructor that takes options like all the other iLib formatter classes. The options control how the formatting happens.

Here is a basic example:

~~~~~
var ilib = require("ilib");
var Measurement = require("ilib/lib/Measurement");
var UnitFmt = require("ilib/lib/UnitFmt");

var m = new Measurement({
    amount: 16.4042,
    unit: "foot"
});
var uf = new UnitFmt();  // use default settings
var str = uf.format(m);
~~~~~

Now the variable "str" will contain the string "16.4042 feet".

The idea is that the measurement can be extracted from a device or service and represented exactly and unambiguously using Measurement, and it is the job of UnitFmt to transform that measurement into a string that the user can understand. The program using iLib does not need to know the specifics. It just need to extract a measurement and format it.

Automatic Conversion While Formatting
--------------------

Let's say we got out first example measurement of "5 meters" from the device driver and we want to format it, and let's assume that our current locale is "en-US". In this case, the units formatter can automatically convert the units to the correct type for US users.

Here is an auto-conversion example:

~~~~~
var ilib = require("ilib");
var Measurement = require("ilib/lib/Measurement");
var UnitFmt = require("ilib/lib/UnitFmt");

var m = new Measurement({
    amount: 5,
    unit: "m"
});
var uf = new UnitFmt();  // use default settings
var str = uf.format(m);
~~~~~

Now the variable "str" will contain the string "16.4042 feet" again, as feet are the units used in the US instead of meters.

If we really want to show meters instead, even though our locale is "en-US", we can do that by giving an option to the unit formatter constructor:

~~~~~
var ilib = require("ilib");
var Measurement = require("ilib/lib/Measurement");
var UnitFmt = require("ilib/lib/UnitFmt");

var m = new Measurement({
    amount: 5,
    unit: "m"
});
var uf = new UnitFmt({
    autoConvert: false
});
var str = uf.format(m);
~~~~~

In this case, the variable "str" will contain the value "5 meters".

Automatic Scaling
-----------------

For many measurements, giving all of the significant digits of a number is not very useful to the user. It is too much information and too many digits can obscure the real magnitude of the measurement. In this case, the unit formatter can scale the amount down to a more reasonable size by scaling the units up to a larger size. In general, the units formatter will seek to make the amount be the smallest size possible but still greater than 1. In some cases, this will not be possible because the units are already the smallest possible, so the amount will end up being less than one.

Scaling only happens within a measurement system. That is, if a locale uses the metric system, then meters can only be converted to kilometers or centimeters, but not to feet or miles.

Let's take the example from the beginning of this document. We have a file that is 1284234564 bytes long, our default locale is "en-US", and we wish to show the file size in the UI.

~~~~~
var ilib = require("ilib");
var Measurement = require("ilib/lib/Measurement");
var UnitFmt = require("ilib/lib/UnitFmt");

var m = new Measurement({
    amount: 1284234564,
    unit: "bytes"
});
var uf = new UnitFmt();  // use default settings
var str = uf.format(m);
~~~~~

Now the variable "str" will contain the string "1.28GB".

In order to get the unit formatter to NOT scale automatically, you will have to give an option to the constructor:

~~~~~
var ilib = require("ilib");
var Measurement = require("ilib/lib/Measurement");
var UnitFmt = require("ilib/lib/UnitFmt");

var m = new Measurement({
    amount: 1284234564,
    unit: "bytes"
});
var uf = new UnitFmt({
    autoScale: false            // turn off auto-scaling
});
var str = uf.format(m);
~~~~~

In this case, the variable "str" should contain the string "1,284,234,564 bytes".

Formatted Length
----------------

Sometimes you would like a short version of a measurement, and sometimes a long one, depending on where in your UI you are showing it.

There are two ways you can control the length of the formatted string: you can specify whether to use the long or short version of a measurement name, and you can specify properties that control the formatting of decimal digits.

Let's say we have two parts of our UI, a list of files and their sizes, and a property dialog which gives the properties of a particular file. In one column of the list is the size of files. It probably doesn't have much room, so we want the measurement to be quite short. In the properties dialog, there is relatively more room, so we want it to be longer.

Here is how you would format the short version:

~~~~~
var ilib = require("ilib");
var Measurement = require("ilib/lib/Measurement");
var UnitFmt = require("ilib/lib/UnitFmt");

var m = new Measurement({
    amount: 1284234564,
    unit: "bytes"
});
var uf = new UnitFmt({
    maxFractionDigits: 1,
    length: "short"
});
var str = uf.format(m);
~~~~~

In the above example, autoscaling is not turned off, so the amount will be scaled automatically so that there are some fractional digits.

The variable "str" will end up with the value "1.3GB". The fractional amount is rounded to 1 digit as per the options, and the units are given as the relatively short string "GB".

Now let's try the long version of the same amount:

~~~~~
var ilib = require("ilib");
var Measurement = require("ilib/lib/Measurement");
var UnitFmt = require("ilib/lib/UnitFmt");

var m = new Measurement({
    amount: 1284234564,
    unit: "bytes"
});
var uf = new UnitFmt({
    maxFractionDigits: 5,
    length: "long"
});
var str = uf.format(m);
~~~~~

The variable "str" will end up with the value "1.28423 gigabytes". The fractional amount is rounded to 5 digits as per the options, and the units are given as the relatively long string "gigabytes".

Translation
-----------

Let's say we want to format the measurement in "fr-FR" instead of "en-US". (That's French for France.) In this case, the names of the units are sometimes different, and the way you format numbers is sometimes different. The unit formatter will be sensitive to these based on the current locale, or to the locale given in the constructor options.

Here is what a format would look like:

~~~~~
var ilib = require("ilib");
var Measurement = require("ilib/lib/Measurement");
var UnitFmt = require("ilib/lib/UnitFmt");

var m = new Measurement({
    amount: 123232,
    unit: "bytes"
});
var uf = new UnitFmt({
    locale: "fr-FR"
});  // use default settings
var str = uf.format(m);
~~~~~

That is pretty much the same as formatting in English except there is a locale property given to the constructor. The result in the "str" variable is now "123 232 octets". In France, the thousands separator is a non-breaking half space character, and the word for "byte" in French is "octet". 

Note that if the current locale is set to "fr-FR", you do not need to specify the locale in the UnitFmt constructor.

Number Formats
--------------

The UnitFmt class uses the number formatter class NumberFmt to format numbers. The number formatter can format numbers using native digits (rather than the western 0-9 digits) when the locale commonly uses them. This of course means that the units formatter would also give native digits in those locales. Sometimes, this is not what you want. If you would like to see western digits, even in those locales that commonly use native digits, you can turn it off by giving the "useNative: false" property to the constructor.

In this example, let's use the locale is bn-IN (Bengali for India), which is one of the locales that commonly uses native digits.

~~~~~
var ilib = require("ilib");
var Measurement = require("ilib/lib/Measurement");
var UnitFmt = require("ilib/lib/UnitFmt");

 var m = new Measurement({
    amount: 123232,
    unit: "bytes"
});
var uf = new UnitFmt({
    locale: "bn-IN",
    useNative: false
});
var str = uf.format(m);
~~~~~

Now the value in the variable "str" would be the string "1,23,232 বাইট". The number may look a little odd to Western developers because the first comma seems to be in the wrong spot. In India, the thousands gets a separator just like Western formats. But, every two digits larger than the thousand also gets a separator, rather than every 3 digits. This explains the comma in the seemingly odd location.

Without the useNative property being set to true, the resulting string would be "১,২৩,২৩২ বাইট" using the native Bengali digits and the Indian style of digit separators.

Plurals in Translations
-----------------------

In English, we only have 2 classes of plurals: the singular and the plural. In other languages, there are multiple classes of plurals with a complex set of rules that govern which numbers get which plurals.

For example, in Russian, meters would be translated like this:

English | Russian
--------|---------
1 meter | 1 метр
2 meters | 2 метров
3 meters | 3 метра
5 meters | 5 метров

Notice the ending of the translation of "meter" changes depending on the actual number of meters.

ILib has the ability to format complex plurals like that properly using the formatChoice method of the String class, which the UnitFmt class uses to format of the unit names.

Example in Russian:

~~~~~
var ilib = require("ilib");
var Measurement = require("ilib/lib/Measurement");
var UnitFmt = require("ilib/lib/UnitFmt");

var m = new Measurement({
    amount: 123232,
    unit: "meters"
});
var uf = new UnitFmt({
    locale: "ru-RU"
});
var str = uf.format(m);
~~~~~

The variable "str" now contains the value "123 232 метров", as the last two digits are "32" which dictate the use the "ов" ending in Russian.
