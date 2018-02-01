Character Set Mapping in iLib
=============================

Javascript runs with the base character set encoding "UTF-16", an encoding of Unicode, which allows for a wide range of characters that encompass the vast majority of text written on the Internet today. For the most part, Javascript programs simply read and write UTF-16 text and everything is happy. However, there are occasions when you have to deal with legacy systems or data and you need to convert the text to/from Unicode in order to use those systems or files.

When Do You Need Character Set Mapping?
------

In some cases, especially when dealing with 3rd party web APIs or with content in files, text may be returned to a Javascript program in a different character set than UTF-16 and there is no other code that can convert the character set to UTF. In these cases, the text needs to be converted (mapped) to UTF-16 before it can be manipulated.

In other cases, web pages are written in the native character set, so characters must be converted to Unicode before they can be manipulated with Javascript.

Because some platforms and JS engines do not expose a way of doing character set mapping (charmapping), ILib now includes classes written in pure Javascript that allow you to do such conversions when you need it. Some of the charmapping data is huge, especially for East Asian character sets, so doing charmapping should be a special case in your program, but at least it is now possible if you need it. 

See the section below on platform support for mapping to see if you need to use iLib's support or not. You should prefer the platform's support of charmapping rather than iLib's, as the native implementations are probably a lot faster than this pure Javascript version.

Character Sets
----------

First, a few definitions. 

**Charset**. A "character set" is litterally a set of characters collected together to write text in a particular script. In software, each character in a character set is typically assign a particular unique number that represents that character in memory, on disk, and in fonts. This unique number is called a code point. Character sets are often abbreviated as "charsets" for convenience.

**Encoding**. A "character set encoding" or simply "an encoding" is a way of encoding those unique numbers in a well-known manner that can be interpretted easily by any program that knows that encoding. For example, the Latin letter "A" is given the unique code point "65" in Unicode. Code points in Unicode are often written in the form U+0041, with a "U" followed by a plus, followed by 4 hex digits. The "A" can be encoded on disk as UTF-16 (Unicode Transformation Format 16-bit) for example, which encodes every Unicode character as either 2 bytes, or a pair of two 2-byte characters. The letter "A" would be encoded as the two bytes 0x00 0x41. Now many software systems do not like null bytes in the middle of strings, so an alternate way of encoding Unicode called UTF-8 (Unicode Transformation Format 8-bit) was invented to get around that. The letter "A" would be encoded in UTF-8 as simply the single byte 0x41. 

For many charsets where there are less than 256 characters in the set, every character in the set has a code point that is less than 256 and therefore can be encoded easily in a single byte. The encoding of the charset becomes trivial -- each byte in the encoding is assigned the code point for that character. Such simple encodings often leads people to confuse character sets and encodings with each other and often the two are used interchangably in various texts. Please note that they are indeed different. The difference is subtle but important.

**Charmap**. A character set mapping (or "charmap" as it is often referred to colloquially) is a mapping between *character set encodings*, not character sets. When you map between encodings, you are mapping between the encoding of a particular character in a charset to the *exact same character* in a different encoding. For example, if you look at the encoding ISO-8859-1, which for many years was the standard default encoding for HTML, the encoding of the letter "A" is simply the single byte 0x41. This can be mapped to Unicode UTF-16 as two bytes 0x00 0x41 or in UTF-8 as 0x41 (ie. the same thing).

As a side note, Unicode was originally designed to be a superset of all known national standard charsets, so that its encodings could be the target of a mapping from any encodings of the national charsets and therefore it could support all characters in one single encoding, which is very convenient for programmers and software and simplifies a lot of very complicated parts of operating systems. UTF-8 was designed in such a way that it was "backward compatible" with many types of existing software because all Unicode characters with code points less than 128, such as all the Latin characters, are encoded as a single byte that happens to match the encoding of many other charsets. This set of characters with encodings less than 128 is known as ASCII, and forms the lower 128 code points for many national character sets.

**Double Byte and Multibyte Encodings**. Some character sets include many more than 256 characters, especially the East Asian ones where there are thousands of characters. In this case, a single byte is insufficient to encode each code point. There are multiple ways of handling the encoding of large charsets:

* **Double byte** Each and every code point is encoded as two bytes, even for ASCII. Up to the 1980s, memory and disk were relatively expensive, so programmers did not want to waste two bytes on every character when it wasn't needed. Double byte encodings were not often used for mixed language text until Unicode. Now UTF-16, which is also a double-byte encoding, is ubiquitous because memory and disk space is relatively cheap.
* **Shifted Encoding**. In this scheme, a set of escape sequences indicates which encoding to use. A string is parsed from the beginning with a default encoding and when an escape sequence is encountered, a new encoding is used from that point in the string onwards until the end of the string or until the next escape sequence changes it again. This scheme solved the problem of space, because you should shift in to a single-byte encoding for English text, and then shift in to a double-byte encoding for Japanese or Chinese text. While cleverly saving space, this encoding scheme was very difficult to deal with algorithmically because you had to start at the beginning of a possibly very long string and parse all of it in order to know if you were in 1, 2, or even 3 byte mode at any given point in the string.
* **Multibyte Encoding**. One solution to the problem of saving space without creating a difficult-to-parse string is the multibyte encoding. Basically, each character in a multibyte encoding may be encoded using 1 or more bytes, and the value of the first byte is cleverly designed to indicate if this characters is encoded with more bytes. That means each  character in a string might be encoded with a different number of bytes, hence "multibyte". Typically, Latin characters are assigned encodings that are 1 byte long and matched up with ASCII encodings, and other characters such as Japanese or Chinese ideographs were assigned encodings that are 2 or 3 bytes long. UTF-8 is an example of a multibyte encoding of Unicode.


Charset Encoding Names and Aliases
-------------------

There is a great variety of ways of referring to any given charset encoding. Often, there are multiple ways of referring to the exact same encoding because these names came from widely different and competing operating systems. There was no widely accepted standard for encoding names or name syntax in the early days of computing, so the names just proliferated. For example, all of these names refer to the exact same encoding: "Latin1", "Latin-1", "8859-1", "ISO-8859-1", "ISO_8859_1", "ISO 8859-1" etc.

The Internet Assigned Names Authority (IANA), the folks who manage domain names, time zones, and other such Internet standards, have attempted to collected all these names and create [a registry of encodings](http://www.iana.org/assignments/character-sets/character-sets.xhtml) and their aliases with specific rules as to how encoding names should be structured. These do not form a formal standard, but the IANA encoding aliases are now accepted as a de-facto standard on the Internet. iLib now uses the names from the IANA registry as its internal standard. It also includes the list of aliases, so you can use any name on that list and iLib will still be able to find its information correctly.

Getting Charset Information With iLib
-----

ILib now contains a new information class *Charset* which gives you information about a charset encoding. This class can tell you the standard IANA name of an encoding and whether it is a single-, double-, shifted, or multibyte encoding. It can also tell you the minimum and maximum size in bytes of the encodings of all characters in the set. This might be helpful in preallocating a buffer to hold a mapped string.

To create a new Charset instance:

~~~~~~~
var ilib = require("ilib");
var Charset = require("ilib/lib/Charset");

var cs = new Charset({name: "utf8"});

console.log("Standard name is: " + cs.getName());
console.log("Min char width is: " + cs.getMinCharWidth());
console.log("Max char width is: " + cs.getMaxCharWidth());
console.log("Is multibyte: " + cs.isMultibyte());

should produce the output:

Standard name is: UTF-8
Min char width is: 1
Max char width is: 3
Is multibyte: true
~~~~~~~

Character Set Maps
-----

There are two basic ways of mapping characters in a string: algorithmic and table-based. 

Most mappings are table-based. That is, each character (code point) in the source string is looked up in a table that maps to a character (code point) in the target charset, which is then appended to the target string. This is a brute-force way of doing it, but often it is the only way because there is often no numeric relationship between code points in the source and target encodings. 

When there is a numeric relationship between the code points in the source and target encodings, this can be exploited to do the conversion algorithmically instead of via a table. An example is the relationship between the UTF-16 and UTF-8 encodings of Unicode. Because those two encodings are both encodings of the exact same charset (Unicode), the code points are exactly the same and only the encodings differ. So, it is easy to convert between them. To convert from one to the other, you first unencode the bytes in the source string into an array of code points, and then re-encode those same code points in the other encoding. There are other examples that are less trivial, but the idea is the same.  

For efficiency while performing table-based mappings in ilib, the source string is mapped using a "trie" data structure so that we do not have to first parse the source string for whole code points, then map them, and then encode the code points and append the results to the target string. Instead, the source string is read byte-for-byte (instead of character-for-character) and the bytes are used to traverse the trie until a whole source code point has been reached. The value at the leaf node at the end of the trie is the bytes for the target encoding for that source character. 

Sometimes for East Asian character set encodings with thousands of characters in them, the mapping tables can be huge, on the order of a megabyte or more. One (EUC-TW) is about 10 megabytes. Obviously, you do not want to include all of the character sets into your ilib assembly if you don't need them. See below on ways to keep the file size of ilib down to a reasonable level.


The CharmapFactory Function
-----

Because there are different ways of mapping characters, ilib includes multiple classes to implement them. Your code does not need to know anything about table-based or algorithmic look-ups or which subclass of Charmap to instantiate for which charset. Instead, ilib includes a factory function (*CharmapFactory*) to return you the correct instance. 

Using the CharmapFactory is simple. Just call the factory method with the name of the charset you wish to map to/from Unicode, and it will hand you back the correct instance.

~~~~~
var ilib = require("ilib");
var CharmapFactory = require("ilib/lib/CharmapFactory.js");

var map = CharmapFactory({name: "Shift-JIS"});
~~~~~

Now map has the correct subclass for mapping the Japanese character set encoding called "Shift-JIS" which is often used on Windows systems.

If you wish to map between two different character sets, let's say Shift-JIS and EUC-JP, you will need to create two maps. Use one to map characters from Shift-JIS to Unicode, and the other to map from Unicode to EUC-JP. This works nicely because Unicode is virtually a superset of all character sets. 

~~~~~
var ilib = require("ilib");
var CharmapFactory = require("ilib/lib/CharmapFactory.js");

var sourceMap = CharmapFactory({name: "Shift-JIS"});
var targetMap = CharmapFactory({name: "EUC-JP"});

var sourceBytes = [ array of Shift-JIS bytes here ];
var uni = sourceMap.mapToUnicode(sourceBytes);
var targetBytes = targetMap.mapToNative(uni);
~~~~~

Handling Missing Characters
------

On occasion, two encodings may be able to encode a large number of the same characters, but there are some characters that exist in the source character set that are not in the target one. In this case, if you were mapping from the source character set to the target one, what should be done with those characters that have no encoding in the target?

There are multiple possible strategies for this:

* **Skip**. In some cases, you might just want to skip any characters that have no encoding in the target character set. This is simple, but it loses information, making a return mapping impossible.
* **Placeholder**. The mapping algorithm can put a placeholder character into the target string to indicate that there was a character there in the source but we don't have a way of representing it in the target. Often the question mark is used as the default placeholder character. This type of strategy also makes a return mapping impossible, but it is at least a little more understandable when displayed for humans.  
* **Escape**. You could also write an escape sequence using characters that do exist in the target charset. Often, these escape sequences are encoded with characters in the ASCII range, as ASCII is very often a subset of character sets. This allows a return mapping when necessary by unescaping the characters again and then mapping, but it is often confusing for humans to look at. (Especially if you're not a software person.) One mitigating factor is that the style of escape sequence may mean that the character is displayed correctly when shown to humans because the display system can understand the escape sequences. For example, if you are creating a web page, and your escape style is HTML entities, then the browser can read and interpret those entities properly and display the character properly, even though that character doesn't exist in the target charset.  

In ilib, you can specify options in the call to CharmapFactory to choose a missing character strategy, choose a placeholder character, and choose an escape style.

Here is an example of calling CharmapFactory to create a mapping instance that maps to a native charset for Korean (EUC-KR). Because the caller knows that the result of the mapping will be displayed in a web page, the caller picks the escape strategy for representing missing characters, and also picks the HTML style of escapes.

~~~~~
var ilib = require("ilib");
var CharmapFactory = require("ilib/lib/CharmapFactory.js");

var map = CharmapFactory({
    name: "EUC-KR",
    missing: "escape",
    escapeStyle: "html"
});

// This is "hello" in Korean and in Thai. There is no way to encode
// Thai characters in the Korean encoding "EUC-KR"
var uni = "안녕하세요 สวัสดี"; 
var native = map.mapToNative(uni);

native now contains the byte encoding of a string that looks like this:
'안녕하세요 &#x0E2A;&#x0E27;&#x0E31;&#x0E2A;&#x0E14;&#x0E35;'
~~~~~

Other escape styles available correspond to the types of programming languages or environments that will use or display the target strings. They include "html", "js", "c" (also handles C++), "java", or "perl".

Currently, the Charmap code do not parse and interpret escape sequences in the source string. They only produce them in the target string. That means you cannot do a reverse mapping using only ilib code. You will have to post-process the target string to replace the escape sequences with target characters as appropriate.

More Examples
------

Here are a few examples of converting a string from and to Unicode. 

First, convert a string in memory to a native character encoding:

~~~~~
var ilib = require("ilib");
var CharmapFactory = require("ilib/lib/CharmapFactory.js");

var uni = "This is a string in Unicode.";
var map = CharmapFactory({name: "Latin1"});

var native = map.mapToNative(uni);
console.log("native is " + JSON.stringify(native.buffer));

native is now a Uint8Array, a type of TypedArray. This prints out:

{"0":84,"1":104,"2":105,"3":115,"4":32,"5":105,"6":115,"7":32,"8":97,"9":32,"10":115,"11":116,"12":114,"13":105,"14":110,"15":103,"16":32,"17":105,"18":110,"19":32,"20":85,"21":110,"22":105,"23":99,"24":111,"25":100,"26":101,"27":46,"byteLength":28}
~~~~~

Example of converting the bytes in a file from a Korean native encoding (EUC-KR) to Unicode.

~~~~~
var ilib = require("ilib");
var CharmapFactory = require("ilib/lib/CharmapFactory.js");

var map = CharmapFactory({name: "EUC-KR"});
// this can be a Uint8Array or even a plain old standard JS array
var native = [190, 200, 179, 231, 200, 247, 32, 193, 214, 185, 171, 188, 204, 190, 238, 191, 228];

var uni = map.mapToUnicode(native);

console.log("Unicode is " + uni);

prints out:

Unicode is 안녕히 주무셨어요
~~~~~



Assembling iLib with Charmap Tables
-----

TODO: fill this in

Platform Support for Mapping
------

**All browsers** All browsers implement some form of [XmlHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest). Here are notes on that:

* When using XmlHttpRequest, data is serialized before being sent. When sending a Document, versions of Firefox prior to version 3 always send the request using UTF-8 encoding; Firefox 3 properly sends the document using the encoding specified by body.xmlEncoding, or UTF-8 if no encoding is specified. Most other browsers send text in the body's encoding as well.
* XmlHttpRequest does not allow you to choose an arbitrary character set. So if your page is in a native charset, and you want to communicate to a 3rd party server in UTF-8, you will have to convert to UTF-8 first using iLib, and then send the results as a binary.
* Be careful of XmlHttpRequest.sendAsBinary() directly. This will truncate Unicode characters instead of converting to a native encoding. Instead, first map your Unicode string to native buffer using iLib, and then send the buffer as a binary.

**Chrome** - Modern versions of Chrome are based on the same engine as nodejs, but they do not have the same packages available. While Chrome does implement the experimental [TextEncoder](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder/TextEncoder) and [TextDecoder](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder) classes, as of the time of this writing, they only supports the charsets 'utf-8', 'utf-16', or 'utf-16be'.

**Firefox** - Firefox has the same support for the encoder classes as Chrome does, only supporting 'utf-8', 'utf-16', or 'utf-16be'. You will need iLib for any other charset until the encoder classes are filled out properly.

**IE** - (TODO: find out about IE)

**Meteor** - (TODO: find out about Meteor)

**nodejs** - Node includes a lot of support for encoding already, and you will pretty much never need iLib for that.

 * Many of the "fs" package APIs include an optional "encoding" parameter that will map the encoding for you as you read and write files. See [fs.readFile](https://nodejs.org/api/all.html#all_fs_readfile_filename_options_callback), [fs.readFileSync](https://nodejs.org/api/all.html#all_fs_readfilesync_filename_options), [fs.write](https://nodejs.org/api/all.html#all_fs_write_fd_data_position_encoding_callback), [fs.writeFile](https://nodejs.org/api/all.html#all_fs_writefile_filename_data_options_callback), and [fs.writeFileSync](https://nodejs.org/api/all.html#all_fs_writefilesync_filename_data_options)
 * Alternately, you can use the Stream package. See [stream.Readable.setEncoding](https://nodejs.org/api/all.html#all_readable_setencoding_encoding), and [stream.Writable.setDefaultEncoding](https://nodejs.org/api/all.html#all_writable_setdefaultencoding_encoding)
 * The [Buffer](https://nodejs.org/api/all.html#all_new_buffer_str_encoding) object includes an encoding parameter in its constructor, in [buf.write](https://nodejs.org/api/all.html#all_buf_write_string_offset_length_encoding), and in [buf.toString](https://nodejs.org/api/all.html#all_buf_tostring_encoding_start_end). This allows you to do in-memory charmapping.
 * The http package has encoding support as well in [http.ClientRequest.write](https://nodejs.org/api/all.html#all_request_write_chunk_encoding_callback) and [http.ClientRequest.end](https://nodejs.org/api/all.html#all_request_end_data_encoding_callback) for reading, and [http.ServerResponse.write](https://nodejs.org/api/all.html#all_response_write_chunk_encoding_callback) and [http.ServerResponse.end](https://nodejs.org/api/all.html#all_response_end_data_encoding_callback) for writing.
 * If you use raw net sockets, the net package allows you to set an encoding on the socket [socket.setDefaultEncoding](https://nodejs.org/api/all.html#all_socket_setencoding_encoding) or specify the encoding in [socket.write](https://nodejs.org/api/all.html#all_socket_write_data_encoding_callback)

**Opera** - Opera seems to have no support for character mapping at all. Use iLib to map your text.

**Qt/QML** - Qt/QML has support for text encodings using the [QTextCodec](http://doc.qt.io/qt-5/qtextcodec.html#details) class (or more simply the [QTextEncoder](http://doc.qt.io/qt-5/qtextencoder.html) class). These support a good list of character sets, and even more than what is listed there if Qt was compiled with ICU in it. Based on this, you will not need iLib's charmapping for Qt/QML. 

**Rhino, Nashorn, or RingoJS** - Because these platforms have full access to any Java routines, you can use [java.lang.String.getBytes(encoding)](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html#getBytes-java.lang.String-) to map to a native charset, or [java.lang.String(bytes, encoding)](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html#String-byte:A-java.nio.charset.Charset-) to map to Unicode in memory, or you can go directly to the [CharsetEncoder](https://docs.oracle.com/javase/8/docs/api/java/nio/charset/CharsetEncoder.html) to get the mapping done. You can also use the [InputStreamReader](https://docs.oracle.com/javase/8/docs/api/java/io/InputStreamReader.html) and [OutputStreamWriter](https://docs.oracle.com/javase/8/docs/api/java/io/OutputStreamWriter.html#OutputStreamWriter-java.io.OutputStream-java.lang.String-) classes to do conversion for you. You will not need iLib's charset mapping for these platforms.

**Safari** - (TODO: find out about Opera)

**webOS** - WebOS has no support for character mapping in its Javascript engine or in the enyo framework. You must rely on iLib to perform mapping.