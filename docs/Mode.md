# Production vs. Development Modes

## Pre-built Packages

As of version 14.5.0, the pre-built packages that are "compiled" will now be run
through uglify to compress them. This reduces the memory, network, and disk footprint
but makes them difficult to debug.

The "uncompiled" packages are now built with
the original uncompressed source code which is no longer wrapped in a giant `eval()`
call to make it easier to use with debugging. You can temporarily switch references
in your application to the uncompiled packages in order to perform your debugging.

## The Npm Package

As of version 14.5.0, the ilib npm package now ships with both the compressed, uglified
code as well as the original, uncompressed source code.

The uglified code now comes with sourcemap files as well. The source maps should
allow debuggers to map back to the original source code if you are debugging casually.
However, there are some browsers and modes where this does not work very well.

If you would like to debug inside of ilib more seriously, there is a way to switch
the entire ilib package to be in development/debug mode. In development mode, all of the ilib 
code will be in uncompressed original files with comments and everything, and no
source maps are needed because you are using those original files.

To switch modes, there is a `switchmode` utility inside of node_modules/ilib:

```
cd node_modules/ilib
node switchmode.js development
cd ../..
```

The operation of this utility is pretty simple. It renames the "lib" directory with
the compressed files to "mini", and renames the "src" directory with the original
source files to "lib". After that, any class in your program that depends on an ilib
class will automatically load the original uncompressed source code for that ilib
class. Of course, you will have to restart your application after running this
utility in order to reload the new files.

When you are done debugging, you can switch back to production with the command: 
`node switchmode.js production`

Note that if you run `npm install` after calling switch mode, it will sometimes
reset your ilib directory back to its original production configuration where `lib`
contains the compressed code, and `src` contains the original uncompressed code.
You may have to reset back to development mode after that if you still need
to do debugging.