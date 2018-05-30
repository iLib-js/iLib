Unit Conversion and Formatting in iLib
=============================

In many parts of a UI, especially for mobile devices, you will want to format measurements that your device makes in a way that the user can understand. This includes scaling the number to be a reasonable size and precision, as well as using the correct units for the user's locale, and using the translated name for the units.

For example, if you have a GPS built in to your device, the driver probably returns you measurements of velocity in meters per second. That is all very nice, but most users don't think in meters per second. They would want to see their velocity kilometers per hour in most of the world, or miles per hour in a few countries. That would make more sense to them.

Similarly in terms of scaling, if a file is 1284234564 bytes long, it would be more understandable to the user to show "1.2GB" instead of "1,284,234,564 bytes" on the screen. That is, the number is scaled to a more easy-to-understand range.

Additionally, there are situations where users will expect different units than the ones that may be most "efficient" for the measurement or for which the common units are not the standard ones. For example, instead of measuring a person's height in the US using yards and fractions of a yard, people commonly use feet and inches. Similarly, the ISO standard unit for energy is the Joule. However, electrical energy is always given in kilowatt-hours instead of megajoules.

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

Styles
------

iLib supports two styles of formatting: numeric and list.

In the numeric style, a measurement is formatted as a number with a decimal fraction of that number plus the units. This is the default behaviour. For example, you may format a person's height in metric as "1.65 m" tall.

In the list style, a measurement is formatted as a list of progressively smaller units with whole numbers of larger units and a number with a decimal fraction of the smallest unit. For example, when giving volumes of liquid for cooking in the US, you would say "1 cup 2 tablespoons", instead of "1.125 cups".

Here is an example of formatting with the list style:

~~~~~
var ilib = require("ilib");
var Measurement = require("ilib/lib/Measurement");
var UnitFmt = require("ilib/lib/UnitFmt");

var m = new Measurement({
    amount: 1.125,
    unit: "cups"
});
var uf = new UnitFmt({
    locale: "en-US",
    style: "list"
});
var str = uf.format(m);
~~~~~

This would give the output: "1 cup 2 tablespoons" as per our example above.

Usages
------

There are situations where users will expect different units than the ones that may be most "efficient" for the measurement. In this case, "efficient" means that people select a unit of measure that will cause much higher or lower numbers than necessary. The most efficient measure is the one which has a numeric part that is closest to one.

Also, people often measure things with units are not the standard ones. Units are often designed to measure a specific type of thing, often to make calculations easier to understand.

To support this behaviour, the unit formatter now supports the concept of usages. A usage tells the formatter what you are using the measure
for, and it will automatically select the proper set of units and the proper options. The resulting unit formatter will convert measurements, scale them, and format them properly according to the usage.

For example, a person's height in the US is most frequently given as feet and inches instead of yards. Here is how the call would look to format a person's height with a usage parameter:

~~~~~
var ilib = require("ilib");
var Measurement = require("ilib/lib/Measurement");
var UnitFmt = require("ilib/lib/UnitFmt");

var m = new Measurement({
    amount: 5.5,
    unit: "feet"
});
var uf = new UnitFmt({
    locale: "en-US",
    usage: "personHeight"
});
var str = uf.format(m);
~~~~~

This will give the string: "5 feet 6 inches". Without the usage parameter, the formatter would return simply "1.8333333333333 yards" with the numeric style of formatting.

List of usages. Here is a list of all of the usages currently supported:

    * floorSpace - area of the floor of a house or building
    * landArea - area of a piece of plot of land
    * networkingSpeed - speed of transfer of data over a network
    * audioSpeed - speed of transfer of audio data
    * interfaceSpeed - speed of transfer of data over a computer hardware interface such as a USB or SATA bus
    * foodEnergy - amount of energy contains in food
    * electricalEnergy - amount of energy in electricity
    * heatingEnergy - amount of energy required to heat things such as water or home interiors
    * babyHeight - length of a baby
    * personHeight - height of an adult or child (not a baby)
    * vehicleDistance - distance traveled by a vehicle or aircraft (except a boat)
    * nauticalDistance - distance traveled by a boat
    * personWeight - weight/mass of an adult human or larger child
    * babyWeight - weight/mass of a baby or of small animals such as cats and dogs
    * vehicleWeight - weight/mass of a vehicle (including a boat)
    * drugWeight - weight/mass of a medicinal drug
    * vehicleSpeed - speed of travel of a vehicle or aircraft (except a boat)
    * nauticalSpeed - speed of travel of a boat
    * dryFoodVolume - volume of a dry food substance in a recipe such as flour
    * liquidFoodVolume - volume of a liquid food substance in a recipe such as milk
    * drinkVolume - volume of a drink
    * fuelVolume - volume of a vehicular fuel
    * engineVolume - volume of an engine's combustion space
    * storageVolume - volume of a mass storage tank
    * gasVolume - volume of a gas such as natural gas used in a home

Let us know if there is a usage you need which is not listed above! Submit an issue on the ilib github project.

Overrides. You may override any particular option that the usage pre-selects except for the list of units.

For example, the "vehicleSpeed" usage specifies a maxFractionDigits of 0 because the speed of a vehicle is hardly ever given with fractions of a mile per hour or kilometer per hour. However, if you know that the vehicle in question is very slow, like let's say, the tractor that transports rockets to the launchpad at Cape Canaveral, maybe you would want to have a few fractional digits. It would not make any sense to say that the transport vehicle goes "0 mph" with no fraction digits. Instead, you would want something like "0.45 mph". To do that, you simply specify the maxFractionDigits setting to the unit formatter constructor as usual. Any explicit option you pass to the constructor will take precedence over any automatically selected options from the usage.

~~~~~
var ilib = require("ilib");
var Measurement = require("ilib/lib/Measurement");
var UnitFmt = require("ilib/lib/UnitFmt");

var m = new Measurement({
    amount: 0.4543023,
    unit: "miles per hour"
});
var uf = new UnitFmt({
    locale: "en-US",
    length: "short",
    usage: "vehicleSpeed",
    maxFractionDigits: 2 // override the usage
});
var str = uf.format(m);
~~~~~

The output is: "0.45 mph"

Supported Units
---------------

The following is a list of units currently supported. If you need more units or different types of measurements, let us know on github by submitting an issue.

Note that below are listed all of the internal ids of the units. When you call the MeasurementFactory to instantiate a new Measurement, you can use the ids below, or any of a variety of names in English, as the code has lots of aliases for each measure. For example, "kilometer-per-hour" can be specified as "kmh", "kph", "km/h", "km/hour", "kilometer/hour", or "kilometers per hour". All work equally well.

* Area
    * square-centimeter
    * square-meter
    * hectare
    * square-kilometer
    * square-inch
    * square-foot
    * square-yard
    * acre
    * square-mile
* Digital Speed
    * bit-per-second
    * byte-per-second
    * kilobit-per-second
    * kilobyte-per-second
    * megabit-per-second
    * megabyte-per-second
    * gigabit-per-second
    * gigabyte-per-second
    * terabit-per-second
    * terabyte-per-second
    * petabit-per-second
    * petabyte-per-second
    * byte-per-hour
    * kilobyte-per-hour
    * megabyte-per-hour
    * gigabyte-per-hour
    * terabyte-per-hour
    * petabyte-per-hour
* Digital Storage
    * bit
    * byte
    * kilobit
    * kilobyte
    * megabit
    * megabyte
    * gigabit
    * gigabyte
    * terabit
    * terabyte
    * petabit
    * petabyte
* Energy
    * millijoule
    * joule
    * kilojoule
    * watt-hour
    * megajoule
    * kilowatt-hour
    * gigajoule
    * megawatt-hour
    * gigawatt-hour
    * BTU
    * foodcalorie
* Fuel Consumption
    * liter-per-kilometer
    * liter-per-100kilometers
    * kilometer-per-liter
    * mile-per-gallon
    * mile-per-gallon-imperial
* Length
    * micrometer
    * millimeter
    * centimeter
    * decimeter
    * meter
    * decameter
    * hectometer
    * kilometer
    * megameter
    * gigameter
    * inch
    * foot
    * yard
    * mile
    * nautical-mile
* Mass
    * microgram
    * milligram
    * gram
    * kilogram
    * metric-ton
    * ounce
    * pound
    * stone
    * long-ton
    * short-ton
* Temperature
    * celsius
    * kelvin
    * fahrenheit
* Time
    * nanosecond
    * microsecond
    * millisecond
    * second
    * minute
    * hour
    * day
    * week
    * month
    * year
    * decade
    * century
* Velocity
    * kilometer-per-hour
    * meter-per-second
    * kilometer-per-second
    * foot-per-second
    * mile-per-hour
    * knot
    * mile-per-second
* Volume
    * milliliter
    * liter
    * cubic-meter
    * teaspoon
    * tablespoon
    * cubic-inch
    * fluid-ounce
    * cup
    * pint
    * quart
    * gallon
    * cubic-foot
    * teaspoon-imperial
    * tablespoon-imperial
    * ounce-imperial
    * cup-imperial
    * pint-imperial
    * quart-imperial
    * gallon-imperial
