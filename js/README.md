<meta charset="UTF-8">

iLib
==== 

iLib is an internationalization library written in pure Javascript


Copyright and License
-------

Copyright &copy; 2011-2014, JEDLSoft

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

See the License for the specific language governing permissions and
limitations under the License.

Using iLib Under Nodejs
-------

iLib is a regular node module and can be loaded using the regular require
statement. Here is an example of using iLib to format the current date/time
for Berlin, Germany.

~~~~~
var ilib=require("ilib").ilib;

var d = ilib.Date.newInstance();
var f = new ilib.DateFmt({
	locale: "de-DE",
    type: "datetime",
    length: "long",
    timezone: "Europe/Berlin"
});

f.format(d);
~~~~~

Result would be:

~~~~~
'07:45 06. Nov. 2014'
~~~~~

More Information
------

Please point your browser to the following places to get more documentation:

- JSDocs: http://docs.jedlsoft.com/ilib/jsdoc/
- Wiki: https://sourceforge.net/p/i18nlib/wiki/iLib%20-%20an%20internationalization%20library%20written%20in%20Javascript/
