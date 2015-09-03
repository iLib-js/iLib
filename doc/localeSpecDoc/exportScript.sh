# Used enyo and enyo library version are 2.6.0-pre.4
# Enyo library, LocaleReference using minified version which is customized by itself.
# Enyo core : enyo script provided by enyo.
# layout, onyx : using google-closure which iLib used. only few files as below.
   
# layout- FittableLayout.js,
# layout- FittableRows.js,
# layout- FittableColumns.js,
# layout- FlyweightRepeater.js,
# layout- List.js

# i.e)  
# java -jar ../../../../../tools/google-closure-compiler.r1918/compiler.jar --js lib/layout/fittable/sourc    e/FittableLayout.js lib/layout/fittable/source/FittableRows.js lib/layout/fittable/source/FittableColumns.    js lib/layout/list/source/FlyweightRepeater.js lib/layout/list/source/List.js --js_output_file export/lib/    enyo-layout-library-compiled.js

# onyx- Button.js
# onyx- InputDecorator.js
# onyx- Input.js
# onyx- Toolbar.js

# i.e)
#java -jar ../../../../../tools/google-closure-compiler.r1918/compiler.jar --js Button.js InputDecorator.j    s Input.js Toolbar.js --js_output_file export/lib/enyo-onyx-library-compiled.js

# creat onyx.css from onyx.less
# i.e) ../../enyo/tools/lessc.sh package.js


java -jar ../../tools/google-closure-compiler.r1918/compiler.jar --js source/app.js --js_output_file source/app-compiled.js

java -jar ../../tools/google-closure-compiler.r1918/compiler.jar --js localePage/scripts/localeScript.js --js_output_file localePage/scripts/localeScript-compiled.js

echo -e "Minifying sources...... : done."

rm -rf publish-tool/contents/*
cp -rf assets/ publish-tool/contents/
cp -rf fonts/ publish-tool/contents/
cp -rf lib/ publish-tool/contents/
cp -rf localePage/ publish-tool/contents
cp -rf source/ publish-tool/contents
cp index.html publish-tool/contents
cp package.js publish-tool/contents
cp ../../js/output/js/ilib-demo.js localePage/scripts/ilib-demo.js 

rm publish-tool/contents/source/app.js
rm publish-tool/contents/localePage/scripts/localeScript.js

echo -e "Copying files to deploy directory..... : done." 


echo -e "Starting to update contents to webostools.lge.com"
python publish-tool/publish.py publish-tool/contents webostools.lge.com /var/www/locale/webos30

echo - "Upload latest contents......: done"

rm -rf publish-tool/contents/*
echo - "Remove contents in  publish-tool/contents......: done"