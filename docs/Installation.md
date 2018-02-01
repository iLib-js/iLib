# Installation #

iLib comes with a pre-assembled copy and a pre-assembled and pre-compiled copy of the iLib file called iliball.js and iliball-compiled.js. The compiled version is compiled with the Google Closure Compiler both to compress all the white space, comments, and symbols, and to verify syntax and data types.

These pre-made copies contain all iLib classes, and all the data for those classes for a number of popular locales. This might not be what you need. If you want a smaller version with a select subset of the classes, or if you need a different selection of locales, you will need to re-assemble your own copy of it. Fortunately, this is pretty easy to do with the assembly tool.

In order to run the assembly tool, you will need to install a few things and make them available in your path:

* A JDK. Either OpenJDK <http://openjdk.java.net> or the standard Sun JDK <http://www.oracle.com/technetwork/java/javase/downloads/> will work, version 1.6 or later
* Apache ant <http://ant.apache.org/bindownload.cgi>
* Nodejs 4.0 or later
* You must install the following package from npm: npm install uglify-js

iLib comes with everything else needed to assemble your own copy of it.

See the [iLib 1.0 Tutorial](iLib1.0JSTutorial.pdf) for more information on how to run the assembly tool.