/*
 * testastro.js - test the astronomical calculation routines
 * 
 * Copyright © 2014, JEDLSoft
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
 */

var testDatesAstro = [
//   gregorian  solar                    
//   rd         long.
    [-214193,	119.47497381], 
    [-61387,	254.25239225], 
    [25469,		181.43526078], 
    [49217,		188.66209324], 
    [171307,	289.08940272], 
    [210155,	59.11935774], 
    [253427,	228.31649723], 
    [369740,	34.46687268], 
    [400085,	63.19392585], 
    [434355,	2.46292133], 
    [452605,	350.48067867], 
    [470160,	13.50223058], 
    [473837,	37.40773343], 
    [507850,	81.03056592], 
    [524156,	313.862451], 
    [544676,	19.95564076], 
    [567118,	176.06000089], 
    [569477,	344.92345807], 
    [601716,	79.96490680], 
    [613424,	99.30227476], 
    [626596,	121.53542417], 
    [645554,	88.56872054], 
    [664224,	129.28988323], 
    [671401,	6.14691088], 
    [694799,	119.47497381], 
    [704424,	119.47497381], 
    [708842,	119.47497381], 
    [709409,	119.47497381], 
    [709580,	119.47497381], 
    [727274,	119.47497381], 
    [728714,	119.47497381], 
    [744313,	119.47497381], 
    [764652,	119.47497381]
];

function testSolarLongitude() {
    for (var i = 0; i < testDatesAstro.length; i++) {
    
        info("testing jd=" + testDatesAstro[i][0]);
        
        assertEquals('object', typeof(pd));
        assertEquals("testing solar longitude for " + testDatesAstro[i][0], testDatesAstro[i][1], ilib.Date._solarLongitude(testDatesAstro[i][0] + 1721424.5));
    }
}
