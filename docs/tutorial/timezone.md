How to Update the Time Zone Info
===================================

The time zone data in ilib only documents the current time zone 
information instead of the historical information. The historical
information is huge, and not as useful as the current info. In
later versions of ilib, there may be support for historical info
as well as current, but for now, there is only current info.

As such, the current info gets out of date pretty quickly! The
source for the time zone information is the same as most operating
systems, libraries, and packages: the IANA tzdata database. This
database is updated up to 12 times a year as time zone information
changes. Often, governments will turn on or off DST or change the 
rules for when DST starts or stops. As such, there are sufficient
changes each year for a number of updates.

If you have an older version of ilib and do not want to update it
just yet (to keep things stable), you may want to at least update 
the time zone info manually. This document tells you how to do just
that.

1. Download the Latest
----------------------

Download the latest IANA database from the IANA web site. The current
URL is:

https://www.iana.org/time-zones

That URL may change over time, so use your favourite search engine
to find it if the above URL doesn't work.

On that page will be a link for "Data Only Distribution" with a 
file name like "tzdata2017b.tar.gz". Download this and untar it
into a temporary directory:

~~~~~
> mkdir temp
> mv ~/Downloads/tzdata2017b.tar.gz temp
> cd temp
> tar zxovf tzdata2017b.tar.gz
~~~~~

2. Compile the Zone Info Compiler (zic)
---------------------------------------

From the root of ilib, enter:

~~~~~
> cd ilib/java
> ant
~~~~~

You need to make sure you have ant 1.9 or later and JDK 1.7 or later 
in your path, as ilib uses ant and java to compile zic.

3. Convert the IANA Data
------------------------

After the IANA data is untarred, you can use zic to convert the textual
zone info to json format.

~~~~~~
> cd temp
> export ILIB_HOME=<ilib>
> export JAVA_HOME=<path-to-your-jdk>
> <ilib>/bin/zic
~~~~~~

When the zone info compiler is run, it produces a number of zone info
files, one per zone, in the zoneinfo subdirectory.

Each file has the following format:

~~~~~~
{
    "o": "8:0",      // offset from UTC
    "f": "W{c}T",    // standard abbreviation. For time zones that observe DST, the {c} replacement 
	
                     // is replaced with the letter in the e.c or s.c properties below 
    "e": {           // info about the end of DST
        "j": 78322.5 // Julian day when the transition happens. Either specify the "j" property or all 
                     // of the "m", "r", and "t" properties, but not both sets.
        "m": 3,      // month that it ends
        "r": "l0",   // rule for the day it ends "l" = "last", numbers are Sun=0 through Sat=6. Other syntax 
                     // is "0>7". This means the 0-day (Sun) after the 7th of the month. Other possible 
					 // operators are <, >, <=, >=
        "t": "2:0",  // time of day that the DST turns off, hours:minutes
        "c": "S"     // character to replace into the abbreviation for standard time 
    },
    "s": {           // info about the start of DST
        "j": 78189.5 // Julian day when the transition happens. Either specify the "j" property or 
                     // all of the "m", "r", and "t" properties, but not both sets.
        "m": 10,     // month that it starts
        "r": "l0",   // rule for the day it starts "l" = "last", numbers are Sun=0 through Sat=6. 
                     // Other syntax is "0>7". This means the 0-day (Sun) after the 7th of the month. Other 
					 // possible operators are <, >, <=, >=
        "t": "2:0",  // time of day that the DST turns on, hours:minutes
        "v": "1:0",  // amount of time saved in hours:minutes
        "c": "D"     // character to replace into the abbreviation for daylight time
    },
}
~~~~~~

The "e" and "s" properties are left out for zones that do not observe DST.

4. Download the latest CLDR
---------------------------

Step 3 gives the specifics of the offsets from UTC and the DST rules, 
but not the human-readable names of the zones. The names are added in a 
separate step, as the source for this information is not the IANA 
tzdata.

Instead, the source for the time zone names is the Unicode Common Locale 
Data Repository (Unicode CLDR). You can download this from one of two
different places. First, there is a json repository on github at:

https://github.com/unicode-cldr/cldr-json#cldr-json

An easier way to download the info is to download the latest using npm:

~~~~~~
> npm install cldr-data
~~~~~~

5. Run the Zone Info Tool
------------------------

To get the name information into the zoneinfo files, run the gentzinfo
tool:

~~~~~
> cd temp
> node <ilib>/tools/cldr/gentzinfo <path-to-cldr> .
~~~~~

This will modify the existing zoneinfo/* files to add in the name.
The json files will be augmented with the following new properties:

~~~~~~
{
    "c": "AU",       // ISO code for the country that contains this time zone
    "n": "W. Australia {c} Time"
                     // long English name of the zone. The {c} replacement is for the word "Standard" 
					 // or "Daylight" as appropriate
}
~~~~~~

Now all the zone info files are complete.

5. Copy the Files Into the Locale Directory
-----------------------------------------

Copy the files you just created into the locale data directory and 
rebuild ilib:

~~~~~~~
> cd temp
> cp -r zoneinfo/* <ilib>/js/data/locale/zoneinfo
> cd <ilib>/js
> ant
~~~~~~~

Now you should have a version of ilib available that contains this
latest zone information!
