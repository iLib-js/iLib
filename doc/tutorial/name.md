Name Parsing and Formatting in iLib
=============================

This tutorial shows you how you can parse names of people in various locales, and format them again easily.

Motivation
=============================

Why would you want to parse and format names?
Let's say you have a part of your web site that allows your users to enter some contacts. You may have a name field and an email field. The name field is a single field where they can type the whole name of their contact. Now, you would probably also have a page that lists the contacts in alphabetical order, and the user may be able to click on the last name or first name column to sort by that field.
The problem is... what is the last name or each contact? What is the first name? In English, you might be tempted to just take the first word in the whole name as the first name, and the last word as the last name. But what if the user has typed in a prefix or suffix like "Dr. John Smith, PhD."? That algorithm won't even work in English, as that contact's name would end up being "Dr. PhD.".
Now things get even more complicated when you have to support multiple languages. Some languages typically reverse the order of the names. For this reason, iLib never deals with "first" and "last" name, as it doesn't even make sense for those languages. Instead, it uses the terms "given name" and "family name", which are unambiguous and do not depend on order.
There is even more fun to be had if you try to parse names in other langauges. Here is a table of example names in various languages and how they are parsed.

| Locale                           | Name                          | prefix | given  | middle | family            | suffix |
|----------------------------------|-------------------------------|--------|--------|--------|-------------------|--------|
| English for the US (en-US)       | Dr. John James Smith Jr.      | Dr.    | John   | James  | Smith             | Jr.    |
| German for Germany (de-DE)       | Ludwig von Beethoven          |        | Ludwig |        | von Beethoven     |        |
| Spanish for Spain (es-ES)        | Jose Manuel Rodriguez Mendoza |        | Jose   | Manuel | Rodriguez Mendoza |        |
| Korean for South Korea (ko-KR)   | 김인환                        |        | 인환   |        | 김                |        |
| Indonesian for Indonesia (id-ID) | Sukarno                       |        | Sukamo |        |                   |        |

Note that in English example, we have the prefixes and suffixes to deal with. It turns out that many other languages have prefixes and suffixes too.

In German, the auxiliary word "von" is considered part of the family name. However, when sorting by family name, "von Beethoven" would appear under the B's, not the V's, as auxiliaries are ignored. That is, German is sorted by "head word" of the family name rather than the first word of the family name.

In Spain, many people have a given name first, followed by one or more middle names, followed by their father's family name, and followed finally their mother's family name. So in the example above, Jose's family name is "Rodriguez Mendoza" where "Rodriguez" is Jose's father's family name, and "Mendoza" is Jose's mother's family name. If you were to shorten the name, Jose would probably prefer "Jose Rodriguez" instead of "Jose Mendoza", and Jose's children would get the name "Rodriguez" as well.

In Korean, as in Chinese and Japanese, the family name comes first, followed by the given name with no space in between. In Chinese and Japanese, sometimes only the first character is the family name, and some times up to 3 characters. Either way, the parts of the name have to be teased apart without help from a separating space.

Other languages have reversed order as well. In Hungarian, it is common to have reverse order, as in "Kovacs Ernie" instead of "Ernie Kovacs" as he is known in the US. In Russian, it is even more complicated, as it is common to write names both in western order and in reverse. Russian speakers can recognize the order easily, as they are very familiar with customs used to create names. Ilyanov is a patronymic name form, and any Russian speaker would recognize it immediately as a family name, no matter where it appeared in the whole name.

In Indonesia, it is common for people to have only a given name, especially for older folks or people who live outside of large metropolises, or even to have multiple names but no family name. You might be identified more specifically by naming your parents, such as "Sukarno child of Suparman and Wulandari". Relatively recently, it has become more common to have a patronymic name appended to your given name, such as "Sukarno Suparmanputra". Appending patronymics is also common in Iceland as well.

Given all the above, the humble Javascript programmer needs a little help to parse and format names so they don't have to be an expert in a large number of languages. Enter iLib.


Parsing Names with iLib
=============================

Parsing names is a simple matter of creating an instance of the Name class. Here is an example:
~~~~~~
{
    prefix: "Dr.",
    givenName: "John",
    middleName: "James",
    familyName: "Smith",
    suffix: ", Jr."
}
~~~~~~


Parsing in Other Languages
=============================
Just like other iLib classes, you can pass in options to the constructor to control how the parsing proceeds. For example, let's say you want to parse the name in Korean instead:
~~~~~~
var Name = require("ilib/lib/Name.js");

var name = new Name("김인환", {locale: "ko-KR"});
~~~~~~
Now the properties are:
~~~~~~
{
    givenName: "인환",
    familyName: "김"
}
~~~~~~


Mixed Sets of Names in Asian Languages
=============================
It is typical in a contact list of a person who speaks an Asian language to have a mix of both Asian names and Western names together in varying degrees. The iLib parser can deal with this situation properly when parsing in Asian locales by checking if the name contains any Asian characters in it. If a name contains at least one Asian character, it assumes that the name is an Asian name. If it contains all non-Asian characters, it is assumed to be a Western style name.

That means the following will still work properly:
~~~~~~
var Name = require("ilib/lib/Name.js");

var name = new Name("Dr. John James Smith, Jr.", {locale: "ko-KR"});
~~~~~~
Now, the "name" variable should contain the following properties:
~~~~~~
{
    prefix: "Dr.",
    givenName: "John",
    middleName: "James",
    familyName: "Smith",
    suffix: ", Jr."
}
~~~~~~


It Doesn't Work All the Time
=============================

There are many types of names and strings where the parser does not work properly. Don't expect that it should work in 100% of the cases!

For example, in some Exchange-based contact systems, the administrator may have decided to append the name of an employee's division to each name automatically. Thus, the name "John Smith (Mortgages and Loans Group)" will not be parsed corrected. This poor fellow's name is not "John Group)"!

If needed, the parser can be upgraded in the future to support more things and special cases. Please let us know if you have a very common case that is not supported. (email to "marketing@jedlsoft.com")


Formatting Names
=============================

In some contacts services, such as Google Contacts, names are given as whole names in a single string, and you need the parser documented in the previous section to decipher the parts of the name.

Other services, such as Outlook/Exchange, give you names that are broken down by field. This is much less ambiguous and makes it easy to sort by a particular name, but it presents a problem if you want to display that name on the screen. What order do you use? What if you don't want to present all the parts of the name and you just want the short version?

There is where you would use the class NameFmt to reassemble the parts into a single string. Here is an example:

~~~~~~
var Name = require("ilib/lib/Name.js");
var NameFmt = require("ilib/lib/NameFmt.js");

// presumably, these parts came from Outlook or some such service
var name = new Name({
    prefix: "Dr.",
    givenName: "John",
    middleName: "James",
    familyName: "Smith",
    suffix: ", Jr."
});
var nf = new NameFmt();
var formatted = nf.format(name);
~~~~~~
Now the name in the "formatted" variable will appear as the string:


> John Smith


Let's say you wanted the full name instead where all the parts are assembled in the correct order. In this case, the formatter also takes options to its constructor:
~~~~~~
var Name = require("ilib/lib/Name.js");
var NameFmt = require("ilib/lib/NameFmt.js");

// presumably, these parts came from Outlook or some such service
var name = new Name({
    prefix: "Dr.",
    givenName: "John",
    middleName: "James",
    familyName: "Smith",
    suffix: ", Jr."
});
var nf = new NameFmt({style: "full"});
var formatted = nf.format(name)
~~~~~~

The entire name will be re-assembled as:

> Dr. John James Smith, Jr.


Collating Family Names
=============================
As mentioned in a previous section, German groups the auxiliary words along with the family name for display, but not for collation sorting. In the case of sorting, you have to get the head word of the name. Dutch also follows these rules, by the way.

There are two methods of the Name class you can use.

First, you can get the head word directly:
~~~~~~
var Name = require("ilib/lib/Name.js");

var name = new Name("Ludwig von Beethoven", {locale: "de-AT"});
var headname = name.getHeadFamilyName();
~~~~~~

Now the variable "headname" will contain:

> Beethoven

Alternately, you can use the method "getSortFamilyName" to get a re-ordered version of the family name that you can use directly for sorting.

~~~~~~
var Name = require("ilib/lib/Name.js");

var name = new Name("Pieter van der Veen", {locale: "nl-NL"});
var sortname = name.getSortFamilyName();
~~~~~~

Now the variable "sortname" will contain this string with the head word first, followed by a comma, followed by all the auxiliaries:

> Veen, van der
