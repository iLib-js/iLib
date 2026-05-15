Character Set Mapping in iLib
=============================

JavaScript normally works with **UTF-16** strings—Unicode text stored as 16-bit code units—which covers the vast majority of text on the web. Sometimes legacy systems or files expose another **encoding**; you must map bytes to Unicode before treating them as JavaScript strings.

When Do You Need Character Set Mapping?
------

Third-party APIs or file pipelines may hand you bytes labelled as **ISO-8859-1**, **Shift_JIS**, **EUC-KR**, and so on. If nothing else in your stack decodes them, you map those bytes to Unicode before using normal string APIs.

Some platforms expose iconv-like APIs—**prefer native conversion when it is available**; it is usually faster than pure JavaScript. iLib’s charmaps help when no decoder exists or you need bundled, deterministic behaviour. Tables can be large (especially for East Asian sets), so treat charset conversion as an intentional dependency. Platform-by-platform notes appear later in this page.

Character Sets
----------

First, a few definitions. 

**Character set (charset).** In informal usage, a charset is the abstract repertoire of characters for a script or standard, each identified by a numeric **code point**.

**Encoding.** An encoding defines how code points become bytes (or, historically, words) on disk or on the wire. For Unicode, **UTF-8**, **UTF-16**, and **UTF-32** are encodings of the **same** character set; the letter **A** is always **U+0041**, but its UTF-8 bytes differ from its UTF-16 code units.

For legacy byte-oriented charsets with at most 256 characters, code points and single-byte encodings are often conflated—the distinction still matters when you map those bytes into Unicode.

**Charmap (in iLib).** A mapping translates **between encodings** of the same logical text—for example **ISO-8859-1** bytes ↔ UTF-16—rather than inventing new characters.

Unicode aims to unify legacy national standards so software can target one repertoire (**Unicode**) and choose an encoding (**UTF-8**, **UTF-16**, …). **UTF-8** aligns US-ASCII bytes (**0x00–0x7F**) with ASCII, which eased adoption on byte-oriented systems.

**Double-byte and multibyte encodings.** Large East Asian character sets need more than one byte per character. Historically:

* **Pure double-byte** schemes use two bytes per code point (even for Latin letters in some legacy sets).
* **Shifted encoding.** Escape sequences switch the active encoding along the byte stream—compact for mixed scripts, but you often must scan from the start to know which mode applies at a given offset.
* **Multibyte encoding.** Leading bytes indicate how many trailing bytes belong to one character (UTF-8 works this way). Latin letters often occupy one byte aligned with ASCII; other scripts use longer sequences.


Charset Encoding Names and Aliases
-------------------

There is a great variety of ways of referring to any given charset encoding. Often, there are multiple ways of referring to the exact same encoding because these names came from widely different and competing operating systems. There was no widely accepted standard for encoding names or name syntax in the early days of computing, so the names just proliferated. For example, all of these names refer to the exact same encoding: "Latin1", "Latin-1", "8859-1", "ISO-8859-1", "ISO_8859_1", "ISO 8859-1" etc.

The **Internet Assigned Numbers Authority (IANA)** maintains a [charset registry](http://www.iana.org/assignments/character-sets/character-sets.xhtml) of canonical names and aliases. iLib treats those names as its primary vocabulary so callers can pass familiar labels (**Latin1**, **ISO-8859-1**, **UTF-8**, …).

Getting Charset Information With iLib
-----

The **`Charset`** class describes an encoding: canonical **IANA** name, whether it is single-, double-, shifted-, or multibyte, and min/max byte widths (useful when sizing buffers).

Example:

~~~~~~~
var ilib = require("ilib");
var Charset = require("ilib/lib/Charset");

var cs = new Charset({name: "utf8"});

console.log("Standard name is: " + cs.getName());
console.log("Min char width is: " + cs.getMinCharWidth());
console.log("Max char width is: " + cs.getMaxCharWidth());
console.log("Is multibyte: " + cs.isMultibyte());
~~~~~~~

Expected output:

~~~~~~~
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

**`native`** is now the byte encoding of a string that looks like this:

`'안녕하세요 &#x0E2A;&#x0E27;&#x0E31;&#x0E2A;&#x0E14;&#x0E35;'`

~~~~~

Other escape styles available correspond to the types of programming languages or environments that will use or display the target strings. They include "html", "js", "c" (also handles C++), "java", or "perl".

Currently, Charmap **does not** parse escape sequences in the source string; it only **emits** escapes in the target when configured to do so. Round-tripping therefore requires any unescaping step your application supplies.

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

**Chrome** — Like Node.js, Chromium-based browsers ship **`TextEncoder`** / **`TextDecoder`**, but in browsers those APIs historically exposed only **`utf-8`**, **`utf-16`**, and **`utf-16le`**/**`utf-16be`** (exact labels vary by engine version). Anything beyond that still depends on iLib or server-side conversion.

**Firefox** — Similar **`TextEncoder`** / **`TextDecoder`** coverage to Chromium for common Unicode encodings; legacy national charsets still require iLib or native helpers outside the web standard.

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

**Safari** — behaviour varies by version; when in doubt, test your target WebKit build or rely on iLib for charset coverage beyond UTF-8/UTF-16.

**webOS** - WebOS has no support for character mapping in its Javascript engine or in the enyo framework. You must rely on iLib to perform mapping.