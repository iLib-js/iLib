Glyphs, Characters, and Character Normalization
===============================================

Javascript uses Unicode as its base character set, and UTF-16 as its base encoding. The character set is literally the set of characters that can be represented in strings in that language. The encoding is how those characters are encoded as numbers in memory.

In the deep dark past of the Internet (the early nineties), Unicode only had code points between 0x0000 and 0xFFFF. That is, it could be represented as 2 bytes, and encoded in the UCS-2 encoding where each code point was the same as the encoding in UCS-2.

Since that time, it became clear that the 65536 characters that you can encode in 2 bytes were not enough to represent all characters from all languages, past and present. So, a third byte was added. This gives you various "planes" of 2 byte code spaces, with the zero plane of course being the same thing as the old Unicode. That means that Unicode code points currently range from 0x00000 through 0x1FFFFF. 

In order to remain compatible with the UCS-2 encoding, the Unicode folks invented the encoding UTF-16. The way it works is that every character is still 2 bytes. For those Unicode characters that are above 0xFFFF (2 bytes), you represent them using two "surrogate" characters. There are particular ranges in UCS-2 that are defined for this purpose, so they don't conflict with any existing characters. The first (or "high") UCS-2 surrogate character plus a second ("low") UCS-2 surrogate character are bit-fiddled together to get the Unicode code point somewhere above 2 bytes. That is, it ends up somewhere in the range 0x10000 to 0x1FFFFF.

The only problem is that the Javascript engine does not do this bit fiddling for you. If you run through a string character-by-character, Javascript will give you each surrogate character separately. The same thing will happen if you call String.charAt(). It will give you surrogates characters. Similarly, String.charCodeAt() will give you the code points of the surrogate characters instead of the whole Unicode character. This is not so useful of course, as it would make more sense to get the whole code point, rather than the two separate surrogates, so you can do things with the whole code point like look up stuff based on it.

Speaking of "whole" characters, what happens if some code comes along and truncates a string at N characters? That Nth character in a UTF-16 encoding may be the high surrogate character, and now it has been separated from its low surrogate partner. Now you cannot get that character back! There is no good way in Javascript to know when you are splitting surrogates like that.

Also consider the following. Unicode allows for many types of "combining" characters. They are called this because when rendered on screen with the appropriate font, the characters combine together in various complicated ways. The easiest to understand for English-speaking audiences are accented Latin character. For example, you can represent the character "&uuml;" in Unicode as the the pre-composed character "&uuml;" (U+00FC) or as two Unicode characters, "u" (U+0075) plus the combining dieresis character " &nbsp;&#776; " (U+0308). When combined on the screen, they look like one character, but they are two separate Unicode code points.

Thai and many of the Indic languages make heavy use of combining characters for accents, vowels, and other letters. Some combining characters, especially accents, do not take more horizontal space than the base character alone, but many of them do.

Now consider what would happen if you were to truncate a string right in between the base character and its accents or the subsequent combining letters? To many Europeans, "u" is a fundamentally different character than "&uuml;". 

This might even happen automatically if you use the directives "text-overflow: clip;" or "text-overflow: ellipsis;" in your CSS file. CSS as implemented in many browsers definitely does not know about surrogates or combining characters, and will happily truncate strings between base characters and combining characters. This will be fixed in the future, but for now, you can assume the vast majority of browsers do not do this properly.

How iLib Can Help
-----------------

ILib now contains classes that help you deal with deficiencies in the Javascript or CSS implementation. What it can do for you:

* Iterate through strings code point by code point
* Iterate through strings glyph by glyph. (A glyph in this case is a base character plus all its combining accent characters that do not use up more horizontal space.)
* Normalize strings (converting a base + combining characters to a precomposed character, or vice versa)
* Iterate through normalized characters
* Truncating strings between glyphs
* Ellipsizing strings between glyphs

Here's how.

Iterating through Code Points
-----------------------------

To iterate through a string by code points, you should create an instance of IString and use its iterator() and charIterator() methods.

Here is how you would get a sequence of code points from a string:

~~~~~~
var ilib = require("ilib");
var IString = require("ilib/lib/IString");

var str = new IString("Imagine this is a long string containing surrogate characters.");
var it = str.iterator();
while (it.hasNext()) {
  var codepoint = it.next();
  // do something here with the numeric code point
}
~~~~~~

Alternately, you can use the more Javscript-y way of doing this using an anonymous function:

~~~~~~
var ilib = require("ilib");
var IString = require("ilib/lib/IString");

var str = new IString("Imagine this is a long string containing surrogate characters.");
str.forEachCodePoint(function(codepoint) {
  // do something here with the numeric code point
});
~~~~~~

If instead of numeric code points, you want the actual characters, then you would do the following:

~~~~~~
var ilib = require("ilib");
var IString = require("ilib/lib/IString");

var str = new IString("Imagine this is a long string containing surrogate characters.");
var it = str.charIterator();
while (it.hasNext()) {
  var char = it.next();
  // do something here with the Unicode character
}

or

var str = new IString("Imagine this is a long string containing surrogate characters.");
str.forEach(function(char) {
  // do something here with the Unicode character
});
~~~~~~

Iterating through Glyphs
------------------------

A glyph for the purposes of ilib is a base character in a particular script along with all of its accompanying accents and tone marks, etc. that modify it. The idea is that humans will read the base character plus the combining characters as one unit. The meaning would change without the combining marks so they would not expect to read the character without them.

Example: "&uuml;" (U+00FC) can be written as "u" (U+0075) plus the combining dieresis character " &nbsp;&#776; " (U+0308). The word "&uuml;ber" in German (English: "over") would be partitioned by a German speaker as "&uuml; | b | e | r", and they would expected breaks in the string to appear where the vertical bars are.

Ilib has a class, GlyphString that can help you find the boundaries of the glyphs. Here is how you can iterate through a string one glyph at a time.

~~~~~~
var ilib = require("ilib");
var GlyphString = require("ilib/lib/GlyphString");

var str = new GlyphString("Imagine this string contains many combining characters.");
var it = str.charIterator();
while (it.hasNext()) {
  var char = it.next();
  // do something here with the base Unicode character plus all its combining characters
}

or

var str = new GlyphString("Imagine this string contains many combining characters.");
str.forEach(function(char) {
  // do something here with the base Unicode character plus all its combining characters
});
~~~~~~

Just like IString class, GlyphString supports the "iterator" or the "forEach" style of iteration.

Truncating Strings Between Glyphs
----------------------------------

In order to truncate a string properly, it should be truncated between glyphs to preserve what the user sees on the screen. Unfortunately, many algorithms, including those in most CSS engines, do not worry about glyphs at all. They truncate based on a simple count of UTF-16 characters, which can chop a string between surrogate pairs or between a base character and the combining characters that follow it.

The class GlyphString has a method truncate() that can truncate a string at a certain number of glyphs. Here is an example of how to use it:

~~~~~~
var ilib = require("ilib");
var GlyphString = require("ilib/lib/GlyphString");

var str = new GlyphString("Imagine this string contains many combining characters.");
var truncated = str.truncate(10);
~~~~~~

In the above example, truncated will end up containing 10 glyphs, which might end up being more than 10 UTF-16 characters. These 10 glyphs should take up about 10 times the average horizontal space of a base character. iLib does not have access to font metrics via the Javascript engine, so the truncation cannot be calculated based on number of pixels.


Ellipsizing Strings Between Glyphs
----------------------------------

Ellipsizing strings is a special case of truncation. If you want to ellipsize such that there are N glyphs shown on the screen, then you might think that you would truncate at N-1 characters and then add the ellipsis character "…" (U+2026). Unfortunately, there is a small problem with that approach.

For some languages, most notably the Indic languages, previous characters can change shape, or are sometimes even enveloped by subsequent characters in the string. Often, the combination of the base character and its subsequent combining characters are wider horizontally than just the base character alone, and sometimes they take up exactly the same amount of horizontal space as before.

So, if the glyph at N-1 happens to be a base plus combining characters that uses up significantly more than the average horizontal space of a base character, then there might not be enough space left over to add the ellipsis character back again. The solution is to truncate the string at N-2 characters before adding the ellipsis back again to make sure that there is enough space.

The class GlyphString has a method ellipsize() that does just that. Here is an example of how to use it:

~~~~~~
var ilib = require("ilib");
var GlyphString = require("ilib/lib/GlyphString");

var str = new GlyphString("Imagine this string contains many combining characters.");
var ellipsized = str.ellipsize(10);
~~~~~~

The string in the variable "ellipsized" would now contain either 8 or 9 glyphs plus the ellipsis character, which should be able to fit into the space used up by 10 glyphs.

Normalizing Characters
----------------------

When a character is written in Unicode as a base character + combining accent characters, it is said to be "decomposed". Conversely, if a character in Unicode already includes the accent, then it is said to be "pre-composed".

When searching or sorting strings, it is a good idea not to search or sort strings differently because they contain decomposed or pre-composed characters. They are the exact same logical characters encoded in a different way. That is, because "&uuml;ber" (precomposed) and "u&#776;ber" (decomposed) look exactly the same to the user and are treated the same way linguistically, they should sort exactly the same way and searches should match both.

Things get even more hairy when you consider multiple combining characters. For example, Thai uses both combining accents and combining tone marks. It does not matter the order of these combining characters -- the rendering will show exactly the same glyph on the screen whether it is encoded as "base + accent + tone mark" or "base + tone mark + accent".

But, how do you know that "&uuml;ber" and "u&#776;ber" are the same string or that two Thai characters with multiple accents are the same? The answer is normalization.

Unicode defines an algorithm, called appropriately enough, the Unicode Normalization Algorithm, which defines which characters can be decomposed into a base + combining characters, and which can be recomposed again into a single character. Full documentation on the algorithm can be found on the [Unicode web site](http://www.unicode.org/reports/tr15/).

The Unicode Normalization Algorithm defines 4 "forms" or types of normalization:

- NFD - "canonical decomposition". This form will decompose all the decomposable characters into their base + combining characters form.
- NFC - "canonical composition". This form will first decompose all the decomposable characters into their decomposed forms. The algorithm then goes through the resulting string and composes all of the decomposed characters it can into the precomposed forms. The reason that this happens in two passes (decomposition followed by composition) is to take care of the order of multiple combining characters in cases like Thai which can have an accent and a tone mark on the same base character.
- NFKD - "compatibility decomposition". In some cases, precomposed characters cannot be represented by a base plus combining characters because they don't exist. So instead, this form will find a sequence of non-combining characters that look similar. For example, the character "㎏" (kilogram mark, or U+338F) does not have any canonical decomposition, as there is a "k" character, but no "combining g" character. But there is a compatibility decomposition to the two non-combining regular Latin letters "k" and "g".
- NFKC - "compatibility composition". This form first performs compatibility decomposition first, followed by cannonical composition.

How to Normalize Strings with iLib
---------------------------------

The iLib class NormString can perform the Unicode Normalization Algorithm on strings. Here is an example:

~~~~~~
var ilib = require("ilib");
var NormString = require("ilib/lib/NormString");

var str = new NormString("Imagine this string contains many combining characters.");
var normalized = str.normalize("nfc");
~~~~~~

That's it! The variable "normalized" should now contain a form of the string where as many characters as possible have been converted into their precomposed form.

It is recommended that you do this type of normalization on strings before saving them somewhere such as a database, and also on the search terms so that the string will match each other as well as possible.
