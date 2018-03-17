# Installation #

iLib comes with pre-assembled and pre-compiled copies of the iLib file of various sizes. The compiled 
version is compiled with uglify to compress all the white space, comments, and symbols.

These pre-made copies contain varying amounts of the iLib classes, and the data for those classes
for a number of popular locales. This might not be what you need. If you want a smaller version 
with a select subset of the classes, or if you need a different selection of locales, you will need
to assemble your own copy of it. See the documentation for (ilib-webpack-loader)[] for details.

In order to build this project, you will need to install a few things and make them available in your path:

* A JDK. Either OpenJDK <http://openjdk.java.net> or the standard Sun JDK <http://www.oracle.com/technetwork/java/javase/downloads/> will work, version 1.6 or later
* Apache ant <http://ant.apache.org/bindownload.cgi>
* Nodejs 6.0 or later
* Run "npm install" in the root to get all of the development dependencies.
* Add "node_modules/.bin" to your shell PATH so that uglify and webpack, etc. are available

iLib comes with everything else needed to assemble your own copy of it.
