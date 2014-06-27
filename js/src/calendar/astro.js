/*
 * astro.js - Static functions to support astronomical calculations
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

/* !depends
ilibglobal.js
date.js 
*/

/*
 * These routines were derived from a public domain set of JavaScript 
 * functions for positional astronomy by John Walker of Fourmilab, 
 * September 1999.
 */

/**
 * Convert degrees to radians.
 * 
 * @static
 * @param {number} d angle in degrees
 * @return {number} angle in radians 
 */
ilib.Date._dtr = function(d) {
	return (d * Math.PI) / 180.0;
};

/**
 * Convert radians to degrees.
 * 
 * @static
 * @param {number} r angle in radians
 * @return {number} angle in degrees 
 */
ilib.Date._rtd = function(r) {
	return (r * 180.0) / Math.PI;
};

/**
 * Return the cosine of an angle given in degrees.
 * @param {number} d angle in degrees
 * @return {number} cosine of the angle.
 */  
ilib.Date._dcos = function(d) {
	return Math.cos(ilib.Date._dtr(d));
};

/**
 * Return the sine of an angle given in degrees.
 * @param {number} d angle in degrees
 * @return {number} cosine of the angle.
 */  
ilib.Date._dsin = function(d) {
	return Math.sin(ilib.Date._dtr(d));
};

/**
 * Range reduce angle in degrees.
 * 
 * @static
 * @param {number} a angle to reduce
 * @return {number} the reduced angle  
 */
ilib.Date._fixangle = function(a) {
	return a - 360.0 * (Math.floor(a / 360.0));
};

/**
 * Range reduce angle in radians.
 * 
 * @static
 * @param {number} a angle to reduce
 * @return {number} the reduced angle  
 */
ilib.Date._fixangr = function(a) {
	return a - (2 * Math.PI) * (Math.floor(a / (2 * Math.PI)));
};

//  Periodic terms to obtain true time
ilib.Date._EquinoxpTerms = [ 
	485, 324.96, 1934.136, 203, 337.23, 32964.467,
	199, 342.08, 20.186, 182, 27.85, 445267.112, 156, 73.14, 45036.886,
	136, 171.52, 22518.443, 77, 222.54, 65928.934, 74, 296.72, 3034.906,
	70, 243.58, 9037.513, 58, 119.81, 33718.147, 52, 297.17, 150.678, 50,
	21.02, 2281.226, 45, 247.54, 29929.562, 44, 325.15, 31555.956, 29,
	60.93, 4443.417, 18, 155.12, 67555.328, 17, 288.79, 4562.452, 16,
	198.04, 62894.029, 14, 199.76, 31436.921, 12, 95.39, 14577.848, 12,
	287.11, 31931.756, 12, 320.81, 34777.259, 9, 227.73, 1222.114, 8,
	15.45, 16859.074
];

ilib.Date._JDE0tab1000 = [ 
	[ 1721139.29189, 365242.13740, 0.06134, 0.00111, -0.00071 ],
	[ 1721233.25401, 365241.72562, -0.05323, 0.00907, 0.00025 ],
	[ 1721325.70455, 365242.49558, -0.11677, -0.00297, 0.00074 ],
	[ 1721414.39987, 365242.88257, -0.00769, -0.00933, -0.00006 ] 
];

ilib.Date._JDE0tab2000 = [ 
	[ 2451623.80984, 365242.37404, 0.05169, -0.00411, -0.00057 ],
	[ 2451716.56767, 365241.62603, 0.00325, 0.00888, -0.00030 ],
	[ 2451810.21715, 365242.01767, -0.11575, 0.00337, 0.00078 ],
	[ 2451900.05952, 365242.74049, -0.06223, -0.00823, 0.00032 ] 
];

/**
 * Determine the Julian Ephemeris Day of an equinox or solstice.  The "which" 
 * argument selects the item to be computed:
 * 
 * <ul>
 * <li>0   March equinox
 * <li>1   June solstice
 * <li>2   September equinox
 * <li>3   December solstice
 * </ul>
 * 
 * @static
 * @param {number} year Gregorian year to calculate for
 * @param {number} which Which equinox or solstice to calculate
 */
ilib.Date._equinox = function(year, which) {
	var deltaL, i, j, JDE0, JDE, JDE0tab, S, T, W, Y;

	/*  Initialize terms for mean equinox and solstices.  We
	    have two sets: one for years prior to 1000 and a second
	    for subsequent years.  */

	if (year < 1000) {
		JDE0tab = ilib.Date._JDE0tab1000;
		Y = year / 1000;
	} else {
		JDE0tab = ilib.Date._JDE0tab2000;
		Y = (year - 2000) / 1000;
	}

	JDE0 = JDE0tab[which][0] + (JDE0tab[which][1] * Y)
			+ (JDE0tab[which][2] * Y * Y) + (JDE0tab[which][3] * Y * Y * Y)
			+ (JDE0tab[which][4] * Y * Y * Y * Y);

	//document.debug.log.value += "JDE0 = " + JDE0 + "\n";

	T = (JDE0 - 2451545.0) / 36525;
	//document.debug.log.value += "T = " + T + "\n";
	W = (35999.373 * T) - 2.47;
	//document.debug.log.value += "W = " + W + "\n";
	deltaL = 1 + (0.0334 * ilib.Date._dcos(W)) + (0.0007 * ilib.Date._dcos(2 * W));
	//document.debug.log.value += "deltaL = " + deltaL + "\n";

	//  Sum the periodic terms for time T

	S = 0;
	j = 0;
	for (i = 0; i < 24; i++) {
		S += ilib.Date._EquinoxpTerms[j]
				* ilib.Date._dcos(ilib.Date._EquinoxpTerms[j + 1] + (ilib.Date._EquinoxpTerms[j + 2] * T));
		j += 3;
	}

	//document.debug.log.value += "S = " + S + "\n";
	//document.debug.log.value += "Corr = " + ((S * 0.00001) / deltaL) + "\n";

	JDE = JDE0 + ((S * 0.00001) / deltaL);

	return JDE;
};

/*  Table of observed Delta T values at the beginning of
even numbered years from 1620 through 2002.  */

ilib.Date._deltaTtab = [ 
    121, 112, 103, 95, 88, 82, 77, 72, 68, 63, 60, 56,
	53, 51, 48, 46, 44, 42, 40, 38, 35, 33, 31, 29, 26, 24, 22, 20, 18, 16,
	14, 12, 11, 10, 9, 8, 7, 7, 7, 7, 7, 7, 8, 8, 9, 9, 9, 9, 9, 10, 10,
	10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13,
	14, 14, 14, 14, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 15,
	15, 14, 13, 13.1, 12.5, 12.2, 12, 12, 12, 12, 12, 12, 11.9, 11.6, 11,
	10.2, 9.2, 8.2, 7.1, 6.2, 5.6, 5.4, 5.3, 5.4, 5.6, 5.9, 6.2, 6.5, 6.8,
	7.1, 7.3, 7.5, 7.6, 7.7, 7.3, 6.2, 5.2, 2.7, 1.4, -1.2, -2.8, -3.8,
	-4.8, -5.5, -5.3, -5.6, -5.7, -5.9, -6, -6.3, -6.5, -6.2, -4.7, -2.8,
	-0.1, 2.6, 5.3, 7.7, 10.4, 13.3, 16, 18.2, 20.2, 21.1, 22.4, 23.5,
	23.8, 24.3, 24, 23.9, 23.9, 23.7, 24, 24.3, 25.3, 26.2, 27.3, 28.2,
	29.1, 30, 30.7, 31.4, 32.2, 33.1, 34, 35, 36.5, 38.3, 40.2, 42.2, 44.5,
	46.5, 48.5, 50.5, 52.2, 53.8, 54.9, 55.8, 56.9, 58.3, 60, 61.6, 63, 65,
	66.6 
];

/**  
 * Determine the difference, in seconds, between dynamical time and universal time.
 * 
 * @static
 * @param {number} year to calculate the difference for
 * @return {number} difference in seconds between dynamical time and universal time  
 */
ilib.Date._deltat = function (year) {
	var dt, f, i, t;

	if ((year >= 1620) && (year <= 2000)) {
		i = Math.floor((year - 1620) / 2);
		f = ((year - 1620) / 2) - i; /* Fractional part of year */
		dt = ilib.Date._deltaTtab[i] + ((ilib.Date._deltaTtab[i + 1] - ilib.Date._deltaTtab[i]) * f);
	} else {
		t = (year - 2000) / 100;
		if (year < 948) {
			dt = 2177 + (497 * t) + (44.1 * t * t);
		} else {
			dt = 102 + (102 * t) + (25.3 * t * t);
			if ((year > 2000) && (year < 2100)) {
				dt += 0.37 * (year - 2100);
			}
		}
	}
	return dt;
};

ilib.Date._oterms = [
	-4680.93, -1.55, 1999.25, -51.38, -249.67, 
	-39.05, 7.12, 27.87, 5.79, 2.45 
];

/**
 * Calculate the obliquity of the ecliptic for a given
 * Julian date.  This uses Laskar's tenth-degree
 * polynomial fit (J. Laskar, Astronomy and
 * Astrophysics, Vol. 157, page 68 [1986]) which is
 * accurate to within 0.01 arc second between AD 1000
 * and AD 3000, and within a few seconds of arc for
 * +/-10000 years around AD 2000.  If we're outside the
 * range in which this fit is valid (deep time) we
 * simply return the J2000 value of the obliquity, which
 * happens to be almost precisely the mean.
 * 
 * @static
 * @param {number} jd Julian Day to calculate the obliquity for
 * @return {number} the obliquity
 */
ilib.Date._obliqeq = function (jd) {
	var eps, u, v, i;

 	v = u = (jd - 2451545.0) / 3652500.0;

 	eps = 23 + (26 / 60.0) + (21.448 / 3600.0);

 	if (Math.abs(u) < 1.0) {
 		for (i = 0; i < 10; i++) {
 			eps += (ilib.Date._oterms[i] / 3600.0) * v;
 			v *= u;
 		}
 	}
 	return eps;
};

/**
 * Return the position of the sun.  We return
 * intermediate values because they are useful in a
 * variety of other contexts.
 * @param {number} jd find the position of sun on this Julian Day
 * @return {Object} the position of the sun and many intermediate
 * values   
 */
ilib.Date._sunpos = function(jd) {
	var ret = {}, 
		T, T2, Omega, epsilon, epsilon0;

	T = (jd - 2451545.0) / 36525.0;
	//document.debug.log.value += "Sunpos.  T = " + T + "\n";
	T2 = T * T;
	ret.meanLongitude = 280.46646 + (36000.76983 * T) + (0.0003032 * T2);
	//document.debug.log.value += "ret.meanLongitude = " + ret.meanLongitude + "\n";
	ret.meanLongitude = ilib.Date._fixangle(ret.meanLongitude);
	//document.debug.log.value += "ret.meanLongitude = " + ret.meanLongitude + "\n";
	ret.meanAnomaly = 357.52911 + (35999.05029 * T) + (-0.0001537 * T2);
	//document.debug.log.value += "ret.meanAnomaly = " + ret.meanAnomaly + "\n";
	ret.meanAnomaly = ilib.Date._fixangle(ret.meanAnomaly);
	//document.debug.log.value += "ret.meanAnomaly = " + ret.meanAnomaly + "\n";
	ret.eccentricity = 0.016708634 + (-0.000042037 * T) + (-0.0000001267 * T2);
	//document.debug.log.value += "e = " + e + "\n";
	ret.equationOfCenter = ((1.914602 + (-0.004817 * T) + (-0.000014 * T2)) * ilib.Date._dsin(ret.meanAnomaly))
			+ ((0.019993 - (0.000101 * T)) * ilib.Date._dsin(2 * ret.meanAnomaly))
			+ (0.000289 * ilib.Date._dsin(3 * ret.meanAnomaly));
	//document.debug.log.value += "ret.equationOfCenter = " + ret.equationOfCenter + "\n";
	ret.sunLongitude = ret.meanLongitude + ret.equationOfCenter;
	//document.debug.log.value += "ret.sunLongitude = " + ret.sunLongitude + "\n";
	ret.sunAnomaly = ret.meanAnomaly + ret.equationOfCenter;
	//document.debug.log.value += "ret.sunAnomaly = " + ret.sunAnomaly + "\n";
	ret.sunRadius = (1.000001018 * (1 - (ret.eccentricity * ret.eccentricity))) / (1 + (ret.eccentricity * ilib.Date._dcos(ret.sunAnomaly)));
	//document.debug.log.value += "ret.sunRadius = " + ret.sunRadius + "\n";
	Omega = 125.04 - (1934.136 * T);
	//document.debug.log.value += "Omega = " + Omega + "\n";
	ret.apparentLong = ret.sunLongitude + (-0.00569) + (-0.00478 * ilib.Date._dsin(Omega));
	//document.debug.log.value += "ret.apparentLong = " + ret.apparentLong + "\n";
	epsilon0 = ilib.Date._obliqeq(jd);
	//document.debug.log.value += "epsilon0 = " + epsilon0 + "\n";
	epsilon = epsilon0 + (0.00256 * ilib.Date._dcos(Omega));
	//document.debug.log.value += "epsilon = " + epsilon + "\n";
	ret.rightAscension = ilib.Date._rtd(Math.atan2(ilib.Date._dcos(epsilon0) * ilib.Date._dsin(ret.sunLongitude), ilib.Date._dcos(ret.sunLongitude)));
	//document.debug.log.value += "ret.rightAscension = " + ret.rightAscension + "\n";
	ret.rightAscension = ilib.Date._fixangle(ret.rightAscension);
	////document.debug.log.value += "ret.rightAscension = " + ret.rightAscension + "\n";
	ret.decliation = ilib.Date._rtd(Math.asin(ilib.Date._dsin(epsilon0) * ilib.Date._dsin(ret.sunLongitude)));
	////document.debug.log.value += "ret.decliation = " + ret.decliation + "\n";
	ret.apparentRightAscension = ilib.Date._rtd(Math.atan2(ilib.Date._dcos(epsilon) * ilib.Date._dsin(ret.apparentLong), ilib.Date._dcos(ret.apparentLong)));
	//document.debug.log.value += "ret.apparentRightAscension = " + ret.apparentRightAscension + "\n";
	ret.apparentRightAscension = ilib.Date._fixangle(ret.apparentRightAscension);
	//document.debug.log.value += "ret.apparentRightAscension = " + ret.apparentRightAscension + "\n";
	ret.apparentDecliation = ilib.Date._rtd(Math.asin(ilib.Date._dsin(epsilon) * ilib.Date._dsin(ret.apparentLong)));
	//document.debug.log.value += "ret.apparentDecliation = " + ret.apparentDecliation + "\n";

	// Angular quantities are expressed in decimal degrees
	return ret;
	
	/*
	return {
		meanLongitude: L0, //  [0] Geometric mean longitude of the Sun
		meanAnomaly: M, //  [1] Mean anomaly of the Sun
		eccentricity: e, //  [2] Eccentricity of the Earth's orbit
		equationOfCenter: C, //  [3] Sun's equation of the Centre
		sunLongitude: sunLong, //  [4] Sun's true longitude
		sunAnomaly: sunAnomaly, //  [5] Sun's true anomaly
		sunRadius: sunR, //  [6] Sun's radius vector in AU
		apparentLong: Lambda, //  [7] Sun's apparent longitude at true equinox of the date
		rightAscension: Alpha, //  [8] Sun's true right ascension
		declination: Delta, //  [9] Sun's true declination
		apparentRightAscension: AlphaApp, // [10] Sun's apparent right ascension
		apparentDecliation: DeltaApp // [11] Sun's apparent declination
	};
	*/
};

ilib.Date._nutArgMult = [ 
    0, 0, 0, 0, 1, -2, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0,
	0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, -2, 1, 0, 2, 2, 0, 0, 0, 2, 1,
	0, 0, 1, 2, 2, -2, -1, 0, 2, 2, -2, 0, 1, 0, 0, -2, 0, 0, 2, 1, 0, 0,
	-1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 1, 0, 1, 2, 0, -1, 2, 2, 0, 0, -1, 0, 1,
	0, 0, 1, 2, 1, -2, 0, 2, 0, 0, 0, 0, -2, 2, 1, 2, 0, 0, 2, 2, 0, 0, 2,
	2, 2, 0, 0, 2, 0, 0, -2, 0, 1, 2, 2, 0, 0, 0, 2, 0, -2, 0, 0, 2, 0, 0,
	0, -1, 2, 1, 0, 2, 0, 0, 0, 2, 0, -1, 0, 1, -2, 2, 0, 2, 2, 0, 1, 0, 0,
	1, -2, 0, 1, 0, 1, 0, -1, 0, 0, 1, 0, 0, 2, -2, 0, 2, 0, -1, 2, 1, 2,
	0, 1, 2, 2, 0, 1, 0, 2, 2, -2, 1, 1, 0, 0, 0, -1, 0, 2, 2, 2, 0, 0, 2,
	1, 2, 0, 1, 0, 0, -2, 0, 2, 2, 2, -2, 0, 1, 2, 1, 2, 0, -2, 0, 1, 2, 0,
	0, 0, 1, 0, -1, 1, 0, 0, -2, -1, 0, 2, 1, -2, 0, 0, 0, 1, 0, 0, 2, 2,
	1, -2, 0, 2, 0, 1, -2, 1, 0, 2, 1, 0, 0, 1, -2, 0, -1, 0, 1, 0, 0, -2,
	1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 2, 0, -1, -1, 1, 0, 0, 0, 1, 1, 0,
	0, 0, -1, 1, 2, 2, 2, -1, -1, 2, 2, 0, 0, -2, 2, 2, 0, 0, 3, 2, 2, 2,
	-1, 0, 2, 2 
];

ilib.Date._nutArgCoeff = [ 
	-171996, -1742, 92095, 89, /*  0,  0,  0,  0,  1 */
	-13187, -16, 5736, -31, /* -2,  0,  0,  2,  2 */
	-2274, -2, 977, -5, /*  0,  0,  0,  2,  2 */
	2062, 2, -895, 5, /*  0,  0,  0,  0,  2 */
	1426, -34, 54, -1, /*  0,  1,  0,  0,  0 */
	712, 1, -7, 0, /*  0,  0,  1,  0,  0 */
	-517, 12, 224, -6, /* -2,  1,  0,  2,  2 */
	-386, -4, 200, 0, /*  0,  0,  0,  2,  1 */
	-301, 0, 129, -1, /*  0,  0,  1,  2,  2 */
	217, -5, -95, 3, /* -2, -1,  0,  2,  2 */
	-158, 0, 0, 0, /* -2,  0,  1,  0,  0 */
	129, 1, -70, 0, /* -2,  0,  0,  2,  1 */
	123, 0, -53, 0, /*  0,  0, -1,  2,  2 */
	63, 0, 0, 0, /*  2,  0,  0,  0,  0 */
	63, 1, -33, 0, /*  0,  0,  1,  0,  1 */
	-59, 0, 26, 0, /*  2,  0, -1,  2,  2 */
	-58, -1, 32, 0, /*  0,  0, -1,  0,  1 */
	-51, 0, 27, 0, /*  0,  0,  1,  2,  1 */
	48, 0, 0, 0, /* -2,  0,  2,  0,  0 */
	46, 0, -24, 0, /*  0,  0, -2,  2,  1 */
	-38, 0, 16, 0, /*  2,  0,  0,  2,  2 */
	-31, 0, 13, 0, /*  0,  0,  2,  2,  2 */
	29, 0, 0, 0, /*  0,  0,  2,  0,  0 */
	29, 0, -12, 0, /* -2,  0,  1,  2,  2 */
	26, 0, 0, 0, /*  0,  0,  0,  2,  0 */
	-22, 0, 0, 0, /* -2,  0,  0,  2,  0 */
	21, 0, -10, 0, /*  0,  0, -1,  2,  1 */
	17, -1, 0, 0, /*  0,  2,  0,  0,  0 */
	16, 0, -8, 0, /*  2,  0, -1,  0,  1 */
	-16, 1, 7, 0, /* -2,  2,  0,  2,  2 */
	-15, 0, 9, 0, /*  0,  1,  0,  0,  1 */
	-13, 0, 7, 0, /* -2,  0,  1,  0,  1 */
	-12, 0, 6, 0, /*  0, -1,  0,  0,  1 */
	11, 0, 0, 0, /*  0,  0,  2, -2,  0 */
	-10, 0, 5, 0, /*  2,  0, -1,  2,  1 */
	-8, 0, 3, 0, /*  2,  0,  1,  2,  2 */
	7, 0, -3, 0, /*  0,  1,  0,  2,  2 */
	-7, 0, 0, 0, /* -2,  1,  1,  0,  0 */
	-7, 0, 3, 0, /*  0, -1,  0,  2,  2 */
	-7, 0, 3, 0, /*  2,  0,  0,  2,  1 */
	6, 0, 0, 0, /*  2,  0,  1,  0,  0 */
	6, 0, -3, 0, /* -2,  0,  2,  2,  2 */
	6, 0, -3, 0, /* -2,  0,  1,  2,  1 */
	-6, 0, 3, 0, /*  2,  0, -2,  0,  1 */
	-6, 0, 3, 0, /*  2,  0,  0,  0,  1 */
	5, 0, 0, 0, /*  0, -1,  1,  0,  0 */
	-5, 0, 3, 0, /* -2, -1,  0,  2,  1 */
	-5, 0, 3, 0, /* -2,  0,  0,  0,  1 */
	-5, 0, 3, 0, /*  0,  0,  2,  2,  1 */
	4, 0, 0, 0, /* -2,  0,  2,  0,  1 */
	4, 0, 0, 0, /* -2,  1,  0,  2,  1 */
	4, 0, 0, 0, /*  0,  0,  1, -2,  0 */
	-4, 0, 0, 0, /* -1,  0,  1,  0,  0 */
	-4, 0, 0, 0, /* -2,  1,  0,  0,  0 */
	-4, 0, 0, 0, /*  1,  0,  0,  0,  0 */
	3, 0, 0, 0, /*  0,  0,  1,  2,  0 */
	-3, 0, 0, 0, /* -1, -1,  1,  0,  0 */
	-3, 0, 0, 0, /*  0,  1,  1,  0,  0 */
	-3, 0, 0, 0, /*  0, -1,  1,  2,  2 */
	-3, 0, 0, 0, /*  2, -1, -1,  2,  2 */
	-3, 0, 0, 0, /*  0,  0, -2,  2,  2 */
	-3, 0, 0, 0, /*  0,  0,  3,  2,  2 */
	-3, 0, 0, 0 /*  2, -1,  0,  2,  2 */
];

/**
 * Calculate the nutation in longitude, deltaPsi, and obliquity, 
 * deltaEpsilon for a given Julian date jd. Results are returned as an object
 * giving deltaPsi and deltaEpsilon in degrees.
 * 
 * @static
 * @param {number} jd calculate the nutation of this Julian Day
 * @return {Object} the deltaPsi and deltaEpsilon of the nutation
 */
ilib.Date._nutation = function(jd) {
	var i, j, 
		t = (jd - 2451545.0) / 36525.0, 
		t2, t3, to10, 
		ta = [], 
		dp = 0, 
		de = 0, 
		ang,
		ret = {};

	t3 = t * (t2 = t * t);

	/*
	 * Calculate angles. The correspondence between the elements of our array
	 * and the terms cited in Meeus are:
	 * 
	 * ta[0] = D ta[0] = M ta[2] = M' ta[3] = F ta[4] = \Omega
	 * 
	 */

	ta[0] = ilib.Date._dtr(297.850363 + 445267.11148 * t - 0.0019142 * t2 + t3 / 189474.0);
	ta[1] = ilib.Date._dtr(357.52772 + 35999.05034 * t - 0.0001603 * t2 - t3 / 300000.0);
	ta[2] = ilib.Date._dtr(134.96298 + 477198.867398 * t + 0.0086972 * t2 + t3 / 56250.0);
	ta[3] = ilib.Date._dtr(93.27191 + 483202.017538 * t - 0.0036825 * t2 + t3 / 327270);
	ta[4] = ilib.Date._dtr(125.04452 - 1934.136261 * t + 0.0020708 * t2 + t3 / 450000.0);

	/*
	 * Range reduce the angles in case the sine and cosine functions don't do it
	 * as accurately or quickly.
	 */

	for (i = 0; i < 5; i++) {
		ta[i] = ilib.Date._fixangr(ta[i]);
	}

	to10 = t / 10.0;
	for (i = 0; i < 63; i++) {
		ang = 0;
		for (j = 0; j < 5; j++) {
			if (ilib.Date._nutArgMult[(i * 5) + j] != 0) {
				ang += ilib.Date._nutArgMult[(i * 5) + j] * ta[j];
			}
		}
		dp += (ilib.Date._nutArgCoeff[(i * 4) + 0] + ilib.Date._nutArgCoeff[(i * 4) + 1] * to10) * Math.sin(ang);
		de += (ilib.Date._nutArgCoeff[(i * 4) + 2] + ilib.Date._nutArgCoeff[(i * 4) + 3] * to10) * Math.cos(ang);
	}

	/*
	 * Return the result, converting from ten thousandths of arc seconds to
	 * radians in the process.
	 */

	ret.deltaPsi = dp / (3600.0 * 10000.0);
	ret.deltaEpsilon = de / (3600.0 * 10000.0);

	return ret;
};

/**
 * Returns the equation of time as a fraction of a day.
 * 
 * @static
 * @param {number} jd the Julian Day of the day to calculate for
 * @return {number} the equation of time for the given day  
 */
ilib.Date._equationOfTime = function(jd) {
	var alpha, deltaPsi, E, epsilon, L0, tau, pos;

	// 2451545.0 is the Julian day of J2000 epoch
	// 365250.0 is the number of days in a Julian millenium
	tau = (jd - 2451545.0) / 365250.0;
	//document.debug.log.value += "equationOfTime.  tau = " + tau + "\n";
	L0 = 280.4664567 + (360007.6982779 * tau) + (0.03032028 * tau * tau)
			+ ((tau * tau * tau) / 49931)
			+ (-((tau * tau * tau * tau) / 15300))
			+ (-((tau * tau * tau * tau * tau) / 2000000));
	//document.debug.log.value += "L0 = " + L0 + "\n";
	L0 = ilib.Date._fixangle(L0);
	//document.debug.log.value += "L0 = " + L0 + "\n";
	pos = ilib.Date._sunpos(jd);
	alpha = pos.apparentRightAscension;
	//document.debug.log.value += "alpha = " + alpha + "\n";
	var nut = ilib.Date._nutation(jd);
	deltaPsi = nut.deltaPsi;
	//document.debug.log.value += "deltaPsi = " + deltaPsi + "\n";
	epsilon = ilib.Date._obliqeq(jd) + nut.deltaEpsilon;
	//document.debug.log.value += "epsilon = " + epsilon + "\n";
	E = L0 + (-0.0057183) + (-alpha) + (deltaPsi * ilib.Date._dcos(epsilon));
	//document.debug.log.value += "E = " + E + "\n";
	E = E - 20.0 * (Math.floor(E / 20.0));
	//document.debug.log.value += "Efixed = " + E + "\n";
	E = E / (24 * 60);
	//document.debug.log.value += "Eday = " + E + "\n";

	return E;
};
