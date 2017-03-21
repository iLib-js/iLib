# History #

iLib owes much of its intellectual heritage to the [Enyo project](http://www.enyojs.com), which was originally part of Palm/HP's webOS operating system for mobile devices. The reason is simple. The founders of the iLib project were the original team who wrote the internationalization portion of the Enyo framework at Palm/HP.

Enyo 1.0 and 2.0 were both open-sourced by HP in February of 2012, and HP laid off much of the original Palm team in May 2012. The international portions were removed from Enyo 2.0 for various reasons, hence the iLib project.

The goals of iLib project are:

* To produce a general internationalization library written in Javascript that does not require the use of the entire Enyo framework, so that it may be used with any framework, or just by itself without any other frameworks
* Allow iLib to run in any web page on any browser that supports standard Javascript (EMCAScript), and on any Javascript engine
* Be relatively efficient and small, yet flexible and complete

Despite its heritage, almost all of the code in iLib has been redesigned to solve oddities in the original Enyo code and to add more flexibility, and then rewritten from scratch. That is, it does not use actual code taken from Enyo, but it uses ideas from it which were updated and reimplemented. Some locale data from Enyo was, however, reused. The way people in a culture format dates or numbers just does not change very often, so there is not much reason to rewrite that data.

iLib was released as open-source on June 21, 2012 by JEDL Software, Inc.