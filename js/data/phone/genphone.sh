#!/bin/bash

DEST=../locale

rm localize.js
touch localize.js

# add IT, TW, and CH when they are ready
for locale in AU BE CN DE ES FR GB HK IE IN LU MX NL NZ SG US XX
do
echo Generating $locale ...
mkdir -p $DEST/und/$locale
../../../bin/tablemaker ${locale}.txt ${locale}.json
mv ${locale}.json $DEST/und/$locale/states.json
mv ${locale}.area.json $DEST/und/$locale/area.json

echo "// Strings for ${locale}" >> localize.js
cat ${locale}.strings.js >> localize.js
echo "" >> localize.js

rm ${locale}.strings.js 
done

for file in idd mnc
do
echo Generating $file ...
../../../bin/tablemaker ${file}.txt $DEST/${file}.json
done

for locale in AU FR NZ
do
echo Generating Extended area codes for $locale ...
mkdir -p $DEST/und/$locale
../../../bin/tablemaker ${locale}.geo.txt extstates.json
mv extstates.json $DEST/und/$locale/extstates.json
mv ${locale}.geo.area.json $DEST/und/$locale/extarea.json

echo "// Strings for ${locale}.geo" >> localize.js
cat ${locale}.geo.strings.js >> localize.js
echo "" >> localize.js
rm ${locale}.geo.strings.js
done
