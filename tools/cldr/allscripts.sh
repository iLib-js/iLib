#/bin/sh
#
# allscripts.sh - run all of the scripts
#
# Copyright © 2018, JEDLSoft
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

CLDR_VERSION=34
UCD_VERSION=12.0.0
TARGET=../../js/data/locale
#TARGET=tmp

node genclockprefs.js $TARGET
node gencountrynames.js ../../../cldr/${CLDR_VERSION} $TARGET
node genctype.js ../../../ucd/${UCD_VERSION} $TARGET
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

