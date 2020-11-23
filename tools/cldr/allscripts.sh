#/bin/sh
#
# allscripts.sh - run all of the scripts
#
# Copyright © 2018-2020, JEDLSoft
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#
# See the License for the specific language governing permissions and
# limitations under the License.
#

CLDR_VERSION=38.0.0
UCD_VERSION=13.0.0
ISO_VERSION=2.4.0

# get the latest full data
pushd ../..
npm install cldr-core@${CLDR_VERSION} cldr-dates-full@${CLDR_VERSION} cldr-cal-ethiopic-full@${CLDR_VERSION} cldr-cal-persian-full@${CLDR_VERSION} cldr-localenames-full@${CLDR_VERSION} cldr-misc-full@${CLDR_VERSION} cldr-numbers-full@${CLDR_VERSION} cldr-units-full@${CLDR_VERSION} ucd-full@{UCD_VERSION} iso-15924@${ISO_VERSION}
popd

TARGET=../../js/data/locale
TESTTARGET=../../js/test/strings-ext

#TARGET=tmp

# remove all previously generated data so that we can make sure
# that data which is no longer valid in the later versions of CLDR
# doesn't accidentally stick around forever.

# Put these back in the filetypes.grep when the gencountrynames.js
# is commented back in again
#ctrynames.json
#ctryreverse.json
#regionnames.json

cat >filetypes.grep <<EOD
clock.jf
ctype_c.json
ctype.json
ctype_l.json
ctype_m.json
ctype_n.json
ctype_p.json
ctype_s.json
ctype_z.json
currency.jf
currency.json
dateformats.json
delimiters.jf
firstdayofweek.jf
lang2charset.json
langname.jf
list.json
localematch.json
numfmt.jf
papersizes.jf
regionname.jf
scripts.jf
sysres.json
unitfmt.json
units.jf
weekendend.jf
weekendstart.jf
EOD

THISDIR=$(pwd)

pushd $TARGET
find . -print | grep -f $THISDIR/filetypes.grep | xargs rm
popd

rm filetypes.grep

node genclockprefs.js $TARGET
# region codes changed in 34 ... can't have that because entries 
# in databases depend on stable region codes! Commenting this out
# for now so that we stay on 33
# node gencountrynames.js ../../../cldr/${CLDR_VERSION} $TARGET
# node reversectry.js $TARGET
node genctype.js $TARGET
node gencurrencies.js $TARGET
node gendatefmts2.js $TARGET
node gendelimiters.js $TARGET
node genlangreg.js $TARGET
node genlangscripts.js $TARGET
node genlikelyloc.js $TARGET
# this uses genlikelyloc's output, so it has to come after it
cp -r ../../js/data/locale/charset $TARGET
node genlang2charset.js $TARGET
node genlist.js $TARGET
node genmeasurementsystem.js $TARGET
node gennumfmt.js $TARGET
node genpapersizes.js $TARGET
# node genplurals.js $TARGET   plurals need a rework before this can be uncommented
node genunits.js $TARGET
node genweekdata.js $TARGET
node gennorm.js $TARGET
node gennormtest.js $TESTTARGET
node genscripts.js $TARGET
