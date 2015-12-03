/**
 * Copyright © 2015, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * @license
 */

/*
 * ilib-ut-maps-inc.js - metafile that includes all other js files
 * for testing only the maps part. This should pull in all the
 * other dependencies automatically. This is separated because
 * the charmaps data is so $#@%#$ huge.
 */

/* !depends
CType.js
NormString.js
CaseMapper.js
Charset.js
Charmap.js
CharmapFactory.js
CharmapTable.js
UTF8.js
UTF16BE.js
UTF16LE.js
charmaps/Jpan.js
charmaps/Kore.js
charmaps/Hans.js
charmaps/Hant.js
charmaps/general.js
*/

/* The charmaps/* files are other include files that conveniently allow you to include all the charmaps and charsets need for a particular script. */