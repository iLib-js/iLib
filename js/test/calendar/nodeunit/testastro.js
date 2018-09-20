/*
 * testastro.js - test the astronomical calculation routines
 * 
 * Copyright © 2014-2015,2017, JEDLSoft
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../../../lib/ilib.js");
}
if (typeof(RataDie) === "undefined") {
    var RataDie = require("../../../lib/RataDie.js");
}
if (typeof(Astro) === "undefined") {
    var Astro = require("../../../lib/Astro.js");
}

var testDatesAstro1 = [
       // jd            ephemeris corr.            julian cent            nutation                aberration                solar long.
    [ 1507231.5,    0.21576230938805918,    -25.85388868549461,    -0.004453990869550968,    -0.00553080167005999,    118.99065569869708,    -213857.88538267263],
    [ 1660037.5,    0.14699126430025714,    -21.67029029455813,    0.00451878641382388,    -0.005671342866872276,    253.74191377009265,    -61186.762253531044],
    [ 1746893.5,    0.1137066110609429,    -19.292303526170812,    -1.050140025158452E-6,    -0.00561405449003957,    180.935800162144,    25740.801971314297],
    [ 1770641.5,    0.10535748222799546,    -18.64211894982937,    3.861719587511402E-5,    -0.005623177056045854,    188.16114534810185,    49481.5254198575],
    [ 1892731.5,    0.06736604022860027,    -15.299477963968783,    0.0015788108438085967,    -0.005658100363650497,    288.5819140676176,    171472.2839620084],
    [ 1931579.5,    0.05710344319631606,    -14.235877971158297,    0.0038328516341406852,    -0.005483476359273615,    58.64207768347114,    210187.90853815744],
    [ 1974851.5,    0.04667295607102475,    -13.051155464121667,    -0.0013618902675976055,    -0.005658350552348975,    227.80921241926262,    253651.68026108458],
    [ 2091164.5,    0.023719138328723,    -9.866679706525986,    -0.004067556566552243,    -0.00551659398976887,    33.984174327459186,    369798.55280882126],
    [ 2121509.5,    0.019001861038552937,    -9.035879014322765,    0.0026592110245276307,    -0.005486830524086003,    62.71608133811969,    400113.6123132341],
    [ 2155779.5,    0.014285177542643997,    -8.09761767870835,    0.003818819075562011,    -0.0055727196561754,    1.9708389653242193,    434446.3231527799],
    [ 2174029.5,    0.01204715626978972,    -7.597959971330424,    -0.004011072499596675,    -0.005594370822199106,    349.9848481878289,    452708.4214137974],
    [ 2191584.5,    0.010075538999592789,    -7.117330319629322,    0.002312108798990367,    -0.005556875490415449,    13.012828788312618,    470240.0132949669],
    [ 2195261.5,    0.009686549804174754,    -7.016659556836419,    -0.0016763566745320495,    -0.005519450270328163,    36.924568231072044,    473892.4286258341],
    [ 2229274.5,    0.006429879292258112,    -6.085434457771957,    -0.0013608682317211105,    -0.005479741699554434,    80.55359756865073,    507859.90942270844],
    [ 2245580.5,    0.005087697240648605,    -5.639000545169138,    0.004106767782755072,    -0.0056505384735905245,    313.356599550636,    524295.7825631251],
    [ 2266100.5,    0.0036300466315395707,    -5.07719360355793,    0.003161879248113671,    -0.005552025060767406,    19.46691425339668,    544749.3175033062],
    [ 2288542.5,    0.0023107254266473897,    -4.46276516603079,    -0.0042440988055314315,    -0.005562226609535574,    175.56950596981915,    567394.3071146222],
    [ 2290901.5,    0.002177269744082124,    -4.3981792696161595,    9.052891945777787E-4,    -0.005612284054056034,    344.4243051301455,    569585.7446768036],
    [ 2323140.5,    5.99993134259259E-4,    -3.5155235975361214,    -0.004892648438526769,    -0.005482246477482223,    79.4877338555234,    601727.0187402618],
    [ 2334848.5,    1.3252557870370403E-4,    -3.1949760401772602,    4.8217283672979385E-4,    -0.005477639338951981,    98.82555146579398,    613779.9891986192],
    [ 2348020.5,    2.2759774537037025E-4,    -2.834346331893285,    0.0024924644912111653,    -0.005485982008147758,    121.05742248235038,    626928.687907702],
    [ 2366978.5,    0.0015256975787037031,    -2.3153045441287468,    0.004627189818443126,    -0.005479409375963378,    88.09173483251652,    645556.0005969105],
    [ 2385648.5,    1.3696411598179692E-4,    -1.8041478401926314,    -8.250659934033238E-4,    -0.005490715979219284,    128.81133077813138,    664548.570941042],
    [ 2392825.5,    6.153868613850005E-5,    -1.6076522912651978,    4.2389573416457476E-4,    -0.0055856451059882245,    5.652815278743219,    671488.1668855895],
    [ 2416223.5,    1.416881249814914E-5,    -0.9670499653889447,    9.722139391468165E-4,    -0.0055501517573578315,    27.76370423719345,    694863.628311114],
    [ 2425848.5,    2.7671071923078696E-4,    -0.7035318199394738,    -0.0031176062482597953,    -0.005513935690541459,    151.29827715134888,    704725.1616458999],
    [ 2430266.5,    2.9636802723678903E-4,    -0.5825735716257897,    -7.861070249012392E-4,    -0.005567448295237738,    185.4546710170107,    709108.0526235475],
    [ 2430833.5,    3.02823900338781E-4,    -0.5670499574860002,    -0.0032559647765304785,    -0.005550797197111957,    28.067392810018646,    709473.3000396637],
    [ 2431004.5,    3.02823900338781E-4,    -0.5623682326400044,    -0.003699154290326371,    -0.005579971215941302,    192.85458235877377,    709838.5430214306],
    [ 2448698.5,    6.828703703703704E-4,    -0.07793290395974287,    0.004819733891422687,    -0.005604901024414719,    356.6538966938824,    727370.1349474003],
    [ 2450138.5,    7.291666666666667E-4,    -0.038507851357517595,    0.0018724815446748066,    -0.0056357856031028115,    335.66766475954523,    728831.0996533801],
    [ 2465737.5,    0.0017817821113961985,    0.3885695217462597,    -0.005132279979201912,    -0.005631907840777981,    227.6835573384742,    744536.4971017592],
    [ 2486076.5,    0.0028602948828935974,    0.9454210228691277,    -0.004456473195393035,    -0.005479678833097924,    115.96217711200734,    764990.0259578006],
];

var testDatesAstro2 = [
    // jd            lunar long.            new moon time        new moon before        new moon after
    [ 1507231.5,    245.03658060231993,    11.450086114414322,    -214204.2196950359,    -214174.6210082486],
    [ 1660037.5,    209.00937336136565,    41.21369207174622,    -61412.785730883086,    -61383.00824777942],
    [ 1746893.5,    213.8214925784089,    70.86026586673357,    25466.084689248437,    25495.802667870244],
    [ 1770641.5,    292.10480707226344,    100.38126770616587,    49209.074230329505,    49238.49756638383],
    [ 1892731.5,    156.85121050979117,    129.79918046206765,    171288.63059905244,    171318.43303137543],
    [ 1931579.5,    108.10438133065789,    159.14677331856993,    210151.36410145182,    210180.68791454448],
    [ 1974851.5,    39.41728984349422,    188.45805090369407,    253413.40952211822,    253442.85429781853],
    [ 2091164.5,    98.66179763434893,    217.76771961555713,    369734.12678198644,    369763.737893404],
    [ 2121509.5,    333.0622974538717,    247.11318398617985,    400062.27981228894,    400091.5702773276],
    [ 2155779.5,    92.33811039774972,    276.5337426576445,    434346.99528850376,    434376.57120215025],
    [ 2174029.5,    78.21191099547119,    306.061561401842,    452597.5380988253,    452627.18620893074],
    [ 2191584.5,    275.0180781034369,    335.70501735638135,    470138.0769083419,    470167.57345509174],
    [ 2195261.5,    128.42066860302978,    365.4367829978496,    473829.43871176953,    473858.8482298899],
    [ 2229274.5,    89.56325355432875,    395.20203320843865,    507849.30092920805,    507878.6634420718],
    [ 2245580.5,    24.636879853999606,    424.9425290238416,    524149.5142128761,    524179.24432937923],
    [ 2266100.5,    53.50792708457431,    454.6168124215383,    544673.2790568958,    544702.7523006991],
    [ 2288542.5,    187.91071190198446,    484.20288936698427,    567116.9791046621,    567146.5122832606],
    [ 2290901.5,    320.18257973831084,    513.6953391020473,    569449.4560752651,    569479.2025291505],
    [ 2323140.5,    314.0449637307862,    543.1049927066758,    601697.5455275382,    601727.0334229986],
    [ 2334848.5,    145.4757183957278,    572.4589710489776,    613420.405189023,    613449.7619857042],
    [ 2348020.5,    185.03378250667302,    601.7968166900013,    626591.0161942499,    626620.3695206075],
    [ 2366978.5,    142.2073942027648,    631.1613700107057,    645549.6775371018,    645579.0753135037],
    [ 2385648.5,    253.74406837581256,    660.5861944707341,    664213.245138154,    664242.8866002721],
    [ 2392825.5,    151.64913464128716,    690.0858211517325,    671389.5922238415,    671418.9704369962],
    [ 2416223.5,    287.9878734396237,    719.6556941899919,    694778.059713033,    694807.5633674058],
    [ 2425848.5,    25.62676665287923,    749.2817010490197,    704404.1526470137,    704433.4911613541],
    [ 2430266.5,    290.28833527459454,    778.9481649986556,    708834.193321385,    708863.5969718603],
    [ 2430833.5,    189.91317359241276,    808.6361860946782,    709394.9116169488,    709424.4049260092],
    [ 2431004.5,    284.9317613744027,    838.3155888964484,    709572.4786247386,    709602.0826749649],
    [ 2448698.5,    152.339165181,    867.9488743131326,    727261.5571209044,    727291.2093807304],
    [ 2450138.5,    51.66247515992306,    897.5083331796816,    728707.9792148506,    728737.4476655669],
    [ 2465737.5,    26.691871873059757,    926.9909681931562,    744300.1606587535,    744329.5731689292],
    [ 2486076.5,    175.5004873603607,    956.4193104167667,    764646.5662724614,    764676.191299815],
];

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testastro = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testEphemerisCorrection: function(test) {
        var l;
        Astro.initAstro(true, undefined, undefined);
        for (var i = 0; i < testDatesAstro1.length; i++) {
            // console.log("testing jd=" + testDatesAstro1[i][0]);
            l = Astro._ephemerisCorrection(testDatesAstro1[i][0]);
            test.roughlyEqual(l, testDatesAstro1[i][1], 1e-14, "testing ephemeris correction for " + testDatesAstro1[i][0]);
        } 
        test.done();
    },
    
    testJulianCenturies: function(test) {
        var l;
        Astro.initAstro(true, undefined, undefined);
        for (var i = 0; i < testDatesAstro1.length; i++) {
            // console.log("testing jd=" + testDatesAstro1[i][0]);
            l = Astro._julianCenturies(testDatesAstro1[i][0]);
            test.roughlyEqual(l, testDatesAstro1[i][2], 1e-14, "testing julian centuries for " + testDatesAstro1[i][0]);
        } 
        test.done();
    },
    
    testNutation: function(test) {
        var c, l;
        Astro.initAstro(true, undefined, undefined);
        for (var i = 0; i < testDatesAstro1.length; i++) {
            // console.log("testing jd=" + testDatesAstro1[i][0]);
            c = Astro._julianCenturies(testDatesAstro1[i][0]);
            l = Astro._nutation2(c);
            test.roughlyEqual(l, testDatesAstro1[i][3], 1e-14, "testing nutation for " + testDatesAstro1[i][0]);
        } 
        test.done();
    },
    
    testAberration: function(test) {
        var c, l;
        Astro.initAstro(true, undefined, undefined);
        for (var i = 0; i < testDatesAstro1.length; i++) {
            // console.log("testing jd=" + testDatesAstro1[i][0]);
            c = Astro._julianCenturies(testDatesAstro1[i][0]);
            l = Astro._aberration(c);
            test.roughlyEqual(l, testDatesAstro1[i][4], 1e-14, "testing abberation for " + testDatesAstro1[i][0]);
        } 
        test.done();
    },
    
    testSolarLongitude: function(test) {
        var l;
        Astro.initAstro(true, undefined, undefined);
        for (var i = 0; i < testDatesAstro1.length; i++) {
        
            // console.log("testing jd=" + testDatesAstro1[i][0]);
            //try {
            l = Astro._solarLongitude(testDatesAstro1[i][0]);
            test.roughlyEqual(l, testDatesAstro1[i][5], 1e-9, "testing solar longitude for " + testDatesAstro1[i][0]);
            //} catch (e) {
            //    console.log("fail: " + e.comment + " " + e.jsUnitMessage + " difference: " + (l - testDatesAstro[i][5]));
            //}
    
        } 
        test.done();
    },
    
    testNextSolarLongitude: function(test) {
        var l;
        Astro.initAstro(true, undefined, undefined);
        for (var i = 0; i < testDatesAstro1.length; i++) {
        
            // console.log("testing jd=" + testDatesAstro1[i][0]);
            //try {
            l = Astro._nextSolarLongitude(testDatesAstro1[i][0], 90.0) - RataDie.gregorianEpoch;
            test.roughlyEqual(l, testDatesAstro1[i][6], 1e-5, "testing next solar longitude for " + testDatesAstro1[i][0]);
            //} catch (e) {
            //    console.log("fail: " + e.comment + " " + e.jsUnitMessage + " difference: " + (l - testDatesAstro[i][6]));
            //}
    
        } 
        test.done();
    },
    
    testLunarLongitude: function(test) {
        var l;
        Astro.initAstro(true, undefined, undefined);
        for (var i = 0; i < testDatesAstro2.length; i++) {
        
            // console.log("testing jd=" + testDatesAstro2[i][0]);
            //try {
            var jd = testDatesAstro2[i][0]
            var rd = jd - RataDie.gregorianEpoch;
            l = Astro._lunarLongitude(jd);
            test.roughlyEqual(l, testDatesAstro2[i][1], 1e-5, "testing lunar longitude for " + testDatesAstro2[i][0]);
            //} catch (e) {
            //    console.log("fail: " + e.comment + " " + e.jsUnitMessage + " difference: " + (l - testDatesAstro[i][1]));
            //}
        } 
        test.done();
    },
    
    testNewMoonTime: function(test) {
        var l;
        Astro.initAstro(true, undefined, undefined);
        for (var i = 0; i < testDatesAstro2.length; i++) {
        
            // console.log("testing jd=" + testDatesAstro2[i][0]);
            //try {
            l = Astro._newMoonTime(i) - RataDie.gregorianEpoch;
            test.roughlyEqual(l, testDatesAstro2[i][2], 1e-5, "testing new moon time for " + testDatesAstro2[i][0]);
            //} catch (e) {
            //    console.log("fail: " + e.comment + " " + e.jsUnitMessage + " difference: " + (l - testDatesAstro[i][1]));
            //}
        } 
        test.done();
    },
    
    testNewMoonBefore: function(test) {
        var l;
        Astro.initAstro(true, undefined, undefined);
        for (var i = 0; i < testDatesAstro2.length; i++) {
        
            // console.log("testing jd=" + testDatesAstro2[i][0]);
            //try {
            var jd = testDatesAstro2[i][0]
            var rd = jd - RataDie.gregorianEpoch;
            l = Astro._newMoonBefore(jd) - RataDie.gregorianEpoch;
            test.roughlyEqual(l, testDatesAstro2[i][3], 1e-5, "testing new moon before for " + testDatesAstro2[i][0]);
            //} catch (e) {
            //    console.log("fail: " + e.comment + " " + e.jsUnitMessage + " difference: " + (l - testDatesAstro[i][1]));
            //}
        } 
        test.done();
    },
    
    testNewMoonAtOrAfter: function(test) {
        var l;
        Astro.initAstro(true, undefined, undefined);
        for (var i = 0; i < testDatesAstro2.length; i++) {
        
            // console.log("testing jd=" + testDatesAstro2[i][0]);
            //try {
            var jd = testDatesAstro2[i][0]
            var rd = jd - RataDie.gregorianEpoch;
            l = Astro._newMoonAtOrAfter(jd) - RataDie.gregorianEpoch;
            test.roughlyEqual(l, testDatesAstro2[i][4], 1e-5, "testing new moon after for " + testDatesAstro2[i][0]);
            //} catch (e) {
            //    console.log("fail: " + e.comment + " " + e.jsUnitMessage + " difference: " + (l - testDatesAstro[i][1]));
            //}
        } 
        test.done();
    }
    
};