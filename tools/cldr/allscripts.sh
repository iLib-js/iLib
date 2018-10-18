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

node genclockprefs.js
node gencountrynames.js ../../../cldr/${CLDR_VERSION}
node genctype.js ../../../ucd/${UCD_VERSION}
node gencurrencies.js
