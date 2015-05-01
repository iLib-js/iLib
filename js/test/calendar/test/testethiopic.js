/*
 * testethiopic.js - test the ethiopic calendar
 * 
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
 */

var EthiopicCal = require("./../lib/EthiopicCal.js");

function testEthiopicGetNumMonths() {
	var cal = new EthiopicCal();
    
    assertEquals(13, cal.getNumMonths(2007));
}

function testEthiopicGetMonLength1() {
    var cal = new EthiopicCal();
    
    assertEquals(30, cal.getMonLength(1, 2007));
}

function testEthiopicGetMonLength2() {
    var cal = new EthiopicCal();
    
    assertEquals(30, cal.getMonLength(2, 2007));
}

function testEthiopicGetMonLength3() {
    var cal = new EthiopicCal();
    
    assertEquals(30, cal.getMonLength(3, 2007));
}

function testEthiopicGetMonLength4() {
    var cal = new EthiopicCal();
    
    assertEquals(30, cal.getMonLength(4, 2007));
}

function testEthiopicGetMonLength5() {
    var cal = new EthiopicCal();
    
    assertEquals(30, cal.getMonLength(5, 2007));
}

function testEthiopicGetMonLength6() {
    var cal = new EthiopicCal();
    
    assertEquals(30, cal.getMonLength(6, 2007));
}

function testEthiopicGetMonLength7() {
    var cal = new EthiopicCal();
    
    assertEquals(30, cal.getMonLength(7, 2007));
}

function testEthiopicGetMonLength8() {
    var cal = new EthiopicCal();
    
    assertEquals(30, cal.getMonLength(8, 2007));
}

function testEthiopicGetMonLength9() {
    var cal = new EthiopicCal();
    
    assertEquals(30, cal.getMonLength(9, 2007));
}

function testEthiopicGetMonLength10() {
    var cal = new EthiopicCal();
    
    assertEquals(30, cal.getMonLength(10, 2007));
}

function testEthiopicGetMonLength11() {
    var cal = new EthiopicCal();
    
    assertEquals(30, cal.getMonLength(11, 2007));
}

function testEthiopicGetMonLength12() {
    var cal = new EthiopicCal();
    
    assertEquals(30, cal.getMonLength(12, 2007));
}

function testEthiopicGetMonLength13LeapYear() {
    var cal = new EthiopicCal();
    
    assertEquals(6, cal.getMonLength(13, 2007));
}

function testEthiopicGetMonLength13() {
    var cal = new EthiopicCal();
    
    assertEquals(5, cal.getMonLength(13, 2008));
}

function testEthiopicGetMonLength14() {
    var cal = new EthiopicCal();
    
    assertEquals(30, cal.getMonLength(undefined));
}

function testEthiopicGetMonLength15() {
    var cal = new EthiopicCal();
    
    assertEquals(5, cal.getMonLength("15"));
}

function testEthiopicGetMonLength16() {
    var cal = new EthiopicCal();
    
    assertEquals(6, cal.getMonLength("13", "2007"));
}

function testEthiopicIsLeapYear() {
    var cal = new EthiopicCal();
    
    assertTrue(cal.isLeapYear(2007));
}

function testEthiopicIsLeapYear1() {
    var cal = new EthiopicCal();
    
    assertFalse(cal.isLeapYear(2008));
}

function testEthiopicIsLeapYear2() {
    var cal = new EthiopicCal();
    
    assertFalse(cal.isLeapYear(2009));
}

function testEthiopicIsLeapYear3() {
    var cal = new EthiopicCal();
    
    assertFalse(cal.isLeapYear(2010));
}

function testEthiopicIsLeapYear4() {
    var cal = new EthiopicCal();
    
    assertTrue(cal.isLeapYear(2011));
}

function testEthiopicIsLeapYear5() {
    var cal = new EthiopicCal();
    
    assertFalse(cal.isLeapYear(undefined));
}

function testEthiopicIsLeapYear6() {
    var cal = new EthiopicCal();
    
    assertFalse(cal.isLeapYear("2009"));
}

function testEthiopicIsLeapYearBM0() {
    var cal = new EthiopicCal();
    
    assertFalse(cal.isLeapYear(0));
}

function testEthiopicIsLeapYearBMMinus1() {
    var cal = new EthiopicCal();
    
    assertTrue(cal.isLeapYear(-1));
}

function testEthiopicIsLeapYearBMMinus2() {
    var cal = new EthiopicCal();
    
    assertFalse(cal.isLeapYear(-2));
}

function testEthiopicIsLeapYearBMMinus3() {
    var cal = new EthiopicCal();
    
    assertFalse(cal.isLeapYear(-3));
}

function testEthiopicIsLeapYearBMMinus4() {
    var cal = new EthiopicCal();
    
    assertFalse(cal.isLeapYear(-4));
}

function testEthiopicIsLeapYearOnMillenium() {
    var cal = new EthiopicCal();
    
    assertTrue(cal.isLeapYear(2003));
}

function testEthiopicIsLeapYearOnCentury0() {
    var cal = new EthiopicCal();
    
    assertTrue(cal.isLeapYear(1603));
}

function testEthiopicIsLeapYearOnCentury1() {
    var cal = new EthiopicCal();
    
    assertTrue(cal.isLeapYear(1703));
}

function testEthiopicIsLeapYearOnCentury2() {
    var cal = new EthiopicCal();
    
    assertTrue(cal.isLeapYear(1803));
}

function testEthiopicIsLeapYearOnCentury3() {
    var cal = new EthiopicCal();
    
    assertTrue(cal.isLeapYear(1903));
}

function testEthiopicIsLeapYearOnQuadCentennial() {
    var cal = new EthiopicCal();
    
    assertTrue(cal.isLeapYear(2003));
}

function testEthiopicNewDateInstance() {
    var cal = new EthiopicCal();
    var d = cal.newDateInstance({
    	year: 20,
    	month: 6,
    	day: 1
    });
    
    assertNotUndefined(d);
    assertEquals("ethiopic", d.cal.type);
}
