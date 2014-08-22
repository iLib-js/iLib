#!/bin/bash

DEST=../locale

rm localize.js
touch localize.js

# add IT, TW, and CH when they are ready
for locale in AU BE CN DE ES FR GB HK IE IN LU MX NL NZ SG US XX KR
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

echo Generating the idd info
../../../bin/tablemaker -t idd.txt $DEST/idd.json

echo Generating the mnc info
../../../bin/tablemaker mnc.txt $DEST/mnc.json
rm mnc.strings.js

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

echo Running novaloc. This may take a few seconds...
novaloc ilib-phoneres .

echo Cleaning up resources...
cd resources
rm -rf eu ps zu ilibmanifest.json

for file in $(find . -name strings.json)
do
   base=$(dirname $file)
   mv $base/strings.json $base/phoneres.json
done

echo Done. Resources are in ./resources 