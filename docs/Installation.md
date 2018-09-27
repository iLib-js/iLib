# Installation #

iLib comes with pre-assembled and pre-compiled copies of the iLib file of various sizes (core, standard, & full).
The compiled versions are minified using uglify-js. This tool compresses all the white space, removes comments, and
makes private symbol names shorter, saving a significant amount of bytes.

These pre-assembled copies of iLib contain different numbers of the iLib classes and the data for those classes
for a number of popular locales. However, this might be more than what your project needs. With the new webpack
support, you can create your own custom version of ilib with a selected subset of the classes
and the data only for those locales that your project needs. See the documentation for
(ilib-webpack-loader)[https://github.com/ilib-js/ilib-webpack-loader] for details on how to do this.

In order to build this project from scratch, you will need to install a few things and make them available in your path:

* A JDK. Either OpenJDK <http://openjdk.java.net> or the standard Sun JDK <http://www.oracle.com/technetwork/java/javase/downloads/> will work, version 1.6 or later
* Apache ant <http://ant.apache.org/bindownload.cgi>
* Nodejs 6.0 or later
* Run "npm install" in the root to get all of the development dependencies.
* Add "node_modules/.bin" to your shell PATH so that uglify and webpack, etc. are available
* Optionally, if you are interested in the Qt support, install Qt 5.9.0 or later. The Qt support is not built by default.

iLib comes with everything else needed to assemble your own copy of it.
