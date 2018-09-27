#/*
# * export.sh - script file for deploying locale reference page
# * 
# * Copyright © 2018, JEDLSoft
# *
# * Licensed under the Apache License, Version 2.0 (the "License");
# * you may not use this file except in compliance with the License.
# * You may obtain a copy of the License at
# *
# *     http://www.apache.org/licenses/LICENSE-2.0
# *
# * Unless required by applicable law or agreed to in writing, software
# * distributed under the License is distributed on an "AS IS" BASIS,
# * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# *
# * See the License for the specific language governing permissions and
# * limitations under the License.
# */


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
# java -jar ../../../../../tools/google-closure-compiler.r1918/compiler.jar --js lib/layout/fittable/source/FittableLayout.js lib/layout/fittable/source/FittableRows.js lib/layout/fittable/source/FittableColumns.js lib/layout/list/source/FlyweightRepeater.js lib/layout/list/source/List.js --js_output_file export/lib/  enyo-layout-library-compiled.js

# onyx- Button.js
# onyx- InputDecorator.js
# onyx- Input.js
# onyx- Toolbar.js

# i.e)
#java -jar ../../../../../tools/google-closure-compiler.r1918/compiler.jar --js Button.js InputDecorator.js Input.js Toolbar.js --js_output_file export/lib/enyo-onyx-library-compiled.js

# creat onyx.css from onyx.less
# i.e) ../../enyo/tools/lessc.sh package.js

java -jar ../../tools/google-closure-compiler.r20150920/compiler.jar --js source/app.js --js_output_file source/app-compiled.js

LANG=en_US
today=`date +%B`' '`date +%d`', '`date +%Y`
sed -i "s/Generated on/Generated on $today/" source/app-compiled.js

java -jar ../../tools/google-closure-compiler.r20150920/compiler.jar --js localePage/scripts/localeScript.js --js_output_file localePage/scripts/localeScript-compiled.js

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

#echo -e "Copying files to deploy directory..... : done."

#echo -e "Starting to update contents to webostools.lge.com"
#python publish-tool/publish.py publish-tool/contents webostools.lge.com /var/www/locale/cldrqa

#python publish-tool/publish.py publish-tool/contents 10.178.84.146 /var/www/html/ilib/localeSpecDoc/webos40

#echo - "Upload latest contents......: done"

#rm -rf publish-tool/contents/*
#echo - "Remove contents in  publish-tool/contents......: done"
