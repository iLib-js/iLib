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
 * @return {number} sine of the angle.
 */  
ilib.Date._dsin = function(d) {
	return Math.sin(ilib.Date._dtr(d));
};

/**
 * Return the tan of an angle given in degrees.
 * @param {number} d angle in degrees
 * @return {number} tan of the angle.
 */  
ilib.Date._dtan = function(d) {
	return Math.tan(ilib.Date._dtr(d));
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

/* 
 * Table of observed Delta T values at the beginning of
 * years from 1620 through 2014. From
 * http://www.staff.science.uu.nl/~gent0113/deltat/deltat.htm
 * and
 * ftp://maia.usno.navy.mil/ser7/deltat.data
 */
ilib.Date._deltaTtab = [
	124,	// 1620
	119,
	115,
	110,
	106,
	102,
	98,
	95,
	91,
	88,
	85,	// 1630
	82,
	79,
	77,
	74,
	72,
	70,
	67,
	65,
	63,
	62,	// 1640
	60,
	58,
	57,
	55,
	54,
	53,
	51,
	50,
	49,
	48,	// 1650
	47,
	46,
	45,
	44,
	43,
	42,
	41,
	40,
	38,
	37,	// 1660
	36,
	35,
	34,
	33,
	32,
	31,
	30,
	28,
	27,
	26,	// 1670
	25,
	24,
	23,
	22,
	21,
	20,
	19,
	18,
	17,
	16,	// 1680
	15,
	14,
	14,
	13,
	12,
	12,
	11,
	11,
	10,
	10,	// 1690
	10,
	9,
	9,
	9,
	9,
	9,
	9,
	9,
	9,
	9,	// 1700
	9,
	9,
	9,
	9,
	9,
	9,
	9,
	10,
	10,
	10,	// 1710
	10,
	10,
	10,
	10,
	10,
	10,
	11,
	11,
	11,
	11,	// 1720
	11,
	11,
	11,
	11,
	11,
	11,
	11,
	11,
	11,
	11,	// 1730
	11,
	11,
	11,
	12,
	12,
	12,
	12,
	12,
	12,
	12,	// 1740
	12,
	12,
	12,
	13,
	13,
	13,
	13,
	13,
	13,
	13,	// 1750
	14,
	14,
	14,
	14,
	14,
	14,
	14,
	15,
	15,
	15,	// 1760
	15,
	15,
	15,
	15,
	16,
	16,
	16,
	16,
	16,
	16,	// 1770
	16,
	16,
	16,
	16,
	17,
	17,
	17,
	17,
	17,
	17,	// 1780
	17,
	17,
	17,
	17,
	17,
	17,
	17,
	17,
	17,
	17,	// 1790
	17,
	16,
	16,
	16,
	16,
	15,
	15,
	14,
	14,
	13.7,	// 1800
	13.4,
	13.1,
	12.9,
	12.7,
	12.6,
	12.5,
	12.5,
	12.5,
	12.5,
	12.5,	// 1810
	12.5,
	12.5,
	12.5,
	12.5,
	12.5,
	12.5,
	12.4,
	12.3,
	12.2,
	12.0,	// 1820
	11.7,
	11.4,
	11.1,
	10.6,
	10.2,
	9.6,
	9.1,
	8.6,
	8.0,
	7.5,	// 1830
	7.0,
	6.6,
	6.3,
	6.0,
	5.8,
	5.7,
	5.6,
	5.6,
	5.6,
	5.7,	// 1840
	5.8,
	5.9,
	6.1,
	6.2,
	6.3,
	6.5,
	6.6,
	6.8,
	6.9,
	7.1,	// 1850
	7.2,
	7.3,
	7.4,
	7.5,
	7.6,
	7.7,
	7.7,
	7.8,
	7.8,
	7.88,	// 1860
	7.82,
	7.54,
	6.97,
	6.40,
	6.02,
	5.41,
	4.10,
	2.92,
	1.82,
	1.61,	// 1870
	0.10,
	-1.02,
	-1.28,
	-2.69,
	-3.24,
	-3.64,
	-4.54,
	-4.71,
	-5.11,
	-5.40,	// 1880	
	-5.42,
	-5.20,
	-5.46,
	-5.46,
	-5.79,
	-5.63,
	-5.64,
	-5.80,
	-5.66,
	-5.87,	// 1890
	-6.01,
	-6.19,
	-6.64,
	-6.44,
	-6.47,
	-6.09,
	-5.76,
	-4.66,
	-3.74,
	-2.72,	// 1900
	-1.54,
	-0.02,
	1.24,
	2.64,
	3.86,
	5.37,
	6.14,
	7.75,
	9.13,
	10.46,	// 1910
	11.53,
	13.36,
	14.65,
	16.01,
	17.20,
	18.24,
	19.06,
	20.25,
	20.95,
	21.16,	// 1920
	22.25,
	22.41,
	23.03,
	23.49,
	23.62,
	23.86,
	24.49,
	24.34,
	24.08,
	24.02,	// 1930
	24.00,
	23.87,
	23.95,
	23.86,
	23.93,
	23.73,
	23.92,
	23.96,
	24.02,
	24.33,	// 1940
	24.83,
	25.30,
	25.70,
	26.24,
	26.77,
	27.28,
	27.78,
	28.25,
	28.71,
	29.15,	// 1950
	29.57,
	29.97,
	30.36,
	30.72,
	31.07,
	31.35,
	31.68,
	32.18,
	32.68,
	33.15,	// 1960
	33.59,
	34.00,
	34.47,
	35.03,
	35.73,
	36.54,
	37.43,
	38.29,
	39.20,
	40.18,	// 1970
	41.17,
	42.23,
	43.37,
	44.49,
	45.48,
	46.46,
	47.52,
	48.53,
	49.59,
	50.54,	// 1980
	51.38,
	52.17,
	52.96,
	53.79,
	54.34,
	54.87,
	55.32,
	55.82,
	56.30,
	56.86,	// 1990
	57.57,
	58.31,
	59.12,
	59.99,
	60.78,
	61.63,
	62.30,
	62.97,
	63.47,
	63.83,	// 2000
	64.09,
	64.30,
	64.47,
	64.57,
	64.69,
	64.85,
	65.15,
	65.46,
	65.78,
	66.07,	// 2010
	66.3246,
	66.6030,
	66.9069,
	67.2810,
	67.61	// predicted
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

	if ((year >= 1620) && (year <= 2014)) {
		i = Math.floor(year - 1620);
		f = (year - 1620) - i; /* Fractional part of year */
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
		T, T2, T3, Omega, epsilon, epsilon0;

	T = (jd - 2451545.0) / 36525.0;
	//document.debug.log.value += "Sunpos.  T = " + T + "\n";
	T2 = T * T;
	T3 = T * T2;
	ret.meanLongitude = ilib.Date._fixangle(280.46646 + 36000.76983 * T + 0.0003032 * T2);
	//document.debug.log.value += "ret.meanLongitude = " + ret.meanLongitude + "\n";
	ret.meanAnomaly = ilib.Date._fixangle(357.52911 + (35999.05029 * T) - 0.0001537 * T2 - 0.00000048 * T3);
	//document.debug.log.value += "ret.meanAnomaly = " + ret.meanAnomaly + "\n";
	ret.eccentricity = 0.016708634 - 0.000042037 * T - 0.0000001267 * T2;
	//document.debug.log.value += "e = " + e + "\n";
	ret.equationOfCenter = ((1.914602 - 0.004817 * T - 0.000014 * T2) * ilib.Date._dsin(ret.meanAnomaly))
			+ ((0.019993 - 0.000101 * T) * ilib.Date._dsin(2 * ret.meanAnomaly))
			+ (0.000289 * ilib.Date._dsin(3 * ret.meanAnomaly));
	//document.debug.log.value += "ret.equationOfCenter = " + ret.equationOfCenter + "\n";
	ret.sunLongitude = ret.meanLongitude + ret.equationOfCenter;
	//document.debug.log.value += "ret.sunLongitude = " + ret.sunLongitude + "\n";
	//ret.sunAnomaly = ret.meanAnomaly + ret.equationOfCenter;
	//document.debug.log.value += "ret.sunAnomaly = " + ret.sunAnomaly + "\n";
	// ret.sunRadius = (1.000001018 * (1 - (ret.eccentricity * ret.eccentricity))) / (1 + (ret.eccentricity * ilib.Date._dcos(ret.sunAnomaly)));
	//document.debug.log.value += "ret.sunRadius = " + ret.sunRadius + "\n";
	Omega = 125.04 - (1934.136 * T);
	//document.debug.log.value += "Omega = " + Omega + "\n";
	ret.apparentLong = ret.sunLongitude + (-0.00569) + (-0.00478 * ilib.Date._dsin(Omega));
	//document.debug.log.value += "ret.apparentLong = " + ret.apparentLong + "\n";
	epsilon0 = ilib.Date._obliqeq(jd);
	//document.debug.log.value += "epsilon0 = " + epsilon0 + "\n";
	epsilon = epsilon0 + (0.00256 * ilib.Date._dcos(Omega));
	//document.debug.log.value += "epsilon = " + epsilon + "\n";
	//ret.rightAscension = ilib.Date._fixangle(ilib.Date._rtd(Math.atan2(ilib.Date._dcos(epsilon0) * ilib.Date._dsin(ret.sunLongitude), ilib.Date._dcos(ret.sunLongitude))));
	//document.debug.log.value += "ret.rightAscension = " + ret.rightAscension + "\n";
	// ret.declination = ilib.Date._rtd(Math.asin(ilib.Date._dsin(epsilon0) * ilib.Date._dsin(ret.sunLongitude)));
	////document.debug.log.value += "ret.declination = " + ret.declination + "\n";
	ret.inclination = ilib.Date._fixangle(23.4392911 - 0.013004167 * T - 0.00000016389 * T2 + 0.0000005036 * T3);
	ret.apparentRightAscension = ilib.Date._fixangle(ilib.Date._rtd(Math.atan2(ilib.Date._dcos(epsilon) * ilib.Date._dsin(ret.apparentLong), ilib.Date._dcos(ret.apparentLong))));
	//document.debug.log.value += "ret.apparentRightAscension = " + ret.apparentRightAscension + "\n";
	//ret.apparentDeclination = ilib.Date._rtd(Math.asin(ilib.Date._dsin(epsilon) * ilib.Date._dsin(ret.apparentLong)));
	//document.debug.log.value += "ret.apparentDecliation = " + ret.apparentDecliation + "\n";

	// Angular quantities are expressed in decimal degrees
	return ret;
};

ilib.Date._nutArgMult = [ 
     0,  0,  0,  0,  1, 
    -2,  0,  0,  2,  2,
     0,  0,  0,  2,  2, 
     0,  0,  0,  0,  2, 
     0,  1,  0,  0,  0, 
     0,  0,  1,  0,  0, 
    -2,  1,  0,  2,  2, 
     0,  0,  0,  2,  1,
	 0,  0,  1,  2,  2, 
	-2, -1,  0,  2,  2, 
	-2,  0,  1,  0,  0, 
	-2,  0,  0,  2,  1, 
	 0,  0, -1,  2,  2, 
	 2,  0,  0,  0,  0, 
	 0,  0,  1,  0,  1, 
	 2,  0, -1,  2,  2, 
	 0,  0, -1,  0,  1,
	 0,  0,  1,  2,  1, 
	-2,  0,  2,  0,  0, 
	 0,  0, -2,  2,  1, 
	 2,  0,  0,  2,  2, 
	 0,  0,  2,  2,  2, 
	 0,  0,  2,  0,  0, 
	-2,  0,  1,  2,  2, 
	 0,  0,  0,  2,  0, 
	-2,  0,  0,  2,  0, 
	 0,  0, -1,  2,  1, 
	 0,  2,  0,  0,  0, 
	 2,  0, -1,  0,  1,
	-2,  2,  0,  2,  2, 
	 0,  1,  0,  0,  1, 
	-2,  0,  1,  0,  1, 
	 0, -1,  0,  0,  1, 
	 0,  0,  2, -2,  0, 
	 2,  0, -1,  2,  1, 
	 2,  0,  1,  2,  2, 
	 0,  1,  0,  2,  2, 
	-2,  1,  1,  0,  0, 
	 0, -1,  0,  2,  2, 
	 2,  0,  0,  2,  1, 
	 2,  0,  1,  0,  0, 
	-2,  0,  2,  2,  2, 
	-2,  0,  1,  2,  1, 
	 2,  0, -2,  0,  1, 
	 2,  0,  0,  0,  1, 
	 0, -1,  1,  0,  0, 
	-2, -1,  0,  2,  1, 
	-2,  0,  0,  0,  1, 
	 0,  0,  2,  2,  1, 
	-2,  0,  2,  0,  1, 
	-2,  1,  0,  2,  1, 
	 0,  0,  1, -2,  0, 
	-1,  0,  1,  0,  0, 
	-2,	 1,  0,  0,  0, 
	 1,  0,  0,  0,  0, 
	 0,  0,  1,  2,  0, 
	-1, -1,  1,  0,  0, 
	 0,  1,  1,  0,  0, 
	 0, -1,  1,  2,  2, 
	 2, -1, -1,  2,  2, 
	 0,  0, -2,  2,  2, 
	 0,  0,  3,  2,  2, 
	 2, -1,  0,  2,  2 
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
	//console.log("equationOfTime.  tau = " + tau);
	L0 = 280.4664567 + (360007.6982779 * tau) + (0.03032028 * tau * tau)
			+ ((tau * tau * tau) / 49931)
			+ (-((tau * tau * tau * tau) / 15300))
			+ (-((tau * tau * tau * tau * tau) / 2000000));
	//console.log("L0 = " + L0);
	L0 = ilib.Date._fixangle(L0);
	//console.log("L0 = " + L0);
	pos = ilib.Date._sunpos(jd);
	alpha = pos.apparentRightAscension;
	//console.log("alpha = " + alpha);
	var nut = ilib.Date._nutation(jd);
	deltaPsi = nut.deltaPsi;
	//console.log("deltaPsi = " + deltaPsi);
	epsilon = ilib.Date._obliqeq(jd) + nut.deltaEpsilon;
	//console.log("epsilon = " + epsilon);
	//console.log("L0 - 0.0057183 = " + (L0 - 0.0057183));
	//console.log("L0 - 0.0057183 - alpha = " + (L0 - 0.0057183 - alpha));
	//console.log("deltaPsi * cos(epsilon) = " + deltaPsi * ilib.Date._dcos(epsilon));
	
	E = L0 - 0.0057183 - alpha + deltaPsi * ilib.Date._dcos(epsilon);
	// if alpha and L0 are in different quadrants, then renormalize
	// so that the difference between them is in the right range
	if (E > 180) {
		E -= 360;
	}
	//console.log("E = " + E);
	// E = E - 20.0 * (Math.floor(E / 20.0));
	E = E * 4;
	//console.log("Efixed = " + E);
	E = E / (24 * 60);
	//console.log("Eday = " + E);

	return E;
};

/**
 * Calculate the UTC RD from the local RD given "zone" number of minutes
 * worth of offset.
 * 
 * @static
 * @param {number} local RD of the locale time, given in any calendar
 * @param {number} zone number of minutes of offset from UTC for the time zone 
 * @return {number} the UTC equivalent of the local RD
 */
ilib.Date._universalFromLocal = function(local, zone) {
	return local - zone / 1440;
};

/**
 * Calculate the local RD from the UTC RD given "zone" number of minutes
 * worth of offset.
 * 
 * @static
 * @param {number} local RD of the locale time, given in any calendar
 * @param {number} zone number of minutes of offset from UTC for the time zone 
 * @return {number} the UTC equivalent of the local RD
 */
ilib.Date._localFromUniversal = function(local, zone) {
	return local + zone / 1440;
};

/**
 * @private
 * @static
 * @param {number} c julian centuries of the date to calculate
 * @return {number} the aberration
 */
ilib.Date._aberration = function(c) {
	return 0.0000017 * Math.cos(177.93 + 35999.01848 * c) - 0.0000973;
};

/**
 * @private
 * @static
 * @param {number} c julian centuries of the date to calculate
 * @return {number} the nutation for the given julian century in radians
 */
ilib.Date._nutation2 = function(c) {
	var c2 = c * c;
	var a = 124.90 - 1934.134 * c + 0.002063 * c2;
	var b = 201.11 + 72001.5377 * c + 0.00057 * c2;
	// return -0.0000834 * ilib.Date._dsin(a) - 0.0000064 * ilib.Date._dsin(b);
	return -0.0000834 * Math.sin(a) - 0.0000064 * Math.sin(b);
};


/**
 * @private
 */
ilib.Date._coeff18th = [
    -0.00002,
    0.000297,
    0.025184,
    -0.181133,
    0.553040,
    -0.861938,
    0.677066,
    -0.212591
];

/**
 * @private
 */
ilib.Date._coeff19th = [
    -0.000009,
    0.003844,
    0.083563,
    0.865736,
    4.867575,
    15.845535,
    31.332267,
    28.316289,
    11.636204,
    2.043794
];

/**
 * @private
 */
ilib.Date._ephemerisCorrection = function(rd) {
	var year = ilib.Date.GregDate._calcYear(rd);
	
	if (1988 <= year && year <= 2019) {
		return (year - 1933) / 86400;
	}
	
	// 693596 is the rd of Jan 1, 1900
	var theta = (rd - 693596) / 36525;
	
	if (1900 <= year && year <= 1987) {
		var thetapow = theta;
		var ret = 0;
		for (var i = 0; i < ilib.Date._coeff19th.length; i++) {
			ret += ilib.Date._coeff19th[i] * thetapow;
			thetapow *= theta;
		}
		return ret;
	}

	if (1800 <= year && year <= 1899) {
		var thetapow = theta;
		var ret = 0;
		for (var i = 0; i < ilib.Date._coeff18th.length; i++) {
			ret += ilib.Date._coeff18th[i] * thetapow;
			thetapow *= theta;
		}
		return ret;
	}
	
	if (1620 <= year && year <= 1799) {
		year -= 1600;
		return (196.58333 - 4.0675 * year + 0.0219167 * year * year) / 86400;
	}
	
	// 660724 is the rd of Jan 1, 1810
	var x = 0.5 + (rd - 660724);
	
	return ((x * x / 41048480) - 15) / 86400;
};

/**
 * @private
 */
ilib.Date._ephemerisFromUniversal = function(jd) {
	return jd + ilib.Date._ephemerisCorrection(jd - 1721424.5);
};

/**
 * @private
 */
ilib.Date._julianCenturies = function(jd) {
	// 2451545.0 is the Julian day of J2000 epoch
	// 36525.0 is the number of days in a Julian century
	return (ilib.Date._ephemerisFromUniversal(jd) - 2451545.0) / 36525.0;
};

/**
 * @private
 */
ilib.Date._solarLongCoeff = [
    [403406,	4.721964,	0.01621043],	[195207,	5.937458,	628.30348067],
    [119433,	1.115589,	628.30821524],	[112392,	5.781616,	628.29634302],
    [3891,		5.5474,		1256.605691],	[2819,		1.512,		1256.60984],
    [1721,		4.1897,		628.324766],	[0,			1.163,		0.00813],
    [660,		5.415,		1256.5931],		[350,		4.315,		575.3385],
    [334,		4.553,		-0.33931],		[314,		5.198,		7771.37715],
    [268,		5.989,		786.04191],		[242,		2.911,		0.05412],
    [234,		1.423,		393.02098],		[158,		0.061,		-0.34861],
    [132,		2.317,		1150.67698],	[129,		3.193,		157.74337],
    [114,		2.828,		52.9667],		[99,		0.52,		588.4927],
    [93,		4.65,		52.9611],		[86,		4.35,		-39.807],
    [78,		2.75,		522.3769],		[72,		4.5,		550.7647],
    [68,		3.23,		2.6108],		[64,		1.22,		157.7385],
    [46,		0.14,		1884.9103],		[38,		3.44,		-77.5655],
    [37,		4.37,		2.6489],		[32,		1.14,		1179.0627],
    [29,		2.84,		550.7575],		[28,		5.96,		-79.6139],
    [27,		5.09,		1884.8981],		[27,		1.72,		21.3219],
    [25,		2.56,		1097.7103],		[24,		1.92,		548.6856],
    [21,		0.09,		254.4393],		[21,		5.98,		-557.3143],
    [20,		4.03,		606.9774],		[18,		4.47,		21.3279],
    [17,		0.79,		1097.7163],		[14,		4.24,		-77.5282],
    [13,		2.01,		1884.9191],		[13,		2.65,		2.0781],
    [13,		4.98,		294.2463],		[12,		0.93,		-0.0799],
    [10,		2.21,		469.4114],		[10,		3.59,		-0.6829],
    [10,		1.5,		214.6325],		[10,		2.55,		1572.084]
];

/**
 * Calculate the solar longitude
 * 
 * @static
 * @param {number} jd julian day of the date to calculate the longitude for 
 * @return {number} the solar longitude in degrees
 */
ilib.Date._solarLongitude = function(jd) {
	var c = ilib.Date._julianCenturies(jd),
		longitude = 0,
		len = ilib.Date._solarLongCoeff.length,
		row;
	
	for (var i = 0; i < len; i++) {
		row = ilib.Date._solarLongCoeff[i];
		// take the sine with radians
		longitude += row[0] * Math.sin(row[1] + row[2] * c);
	}
	longitude *= 0.0000001;
	longitude += 4.9353929 + 628.33196168 * c;
	longitude += ilib.Date._aberration(c) + ilib.Date._nutation2(c);
	return ilib.Date._fixangle(ilib.Date._rtd(longitude));
};
