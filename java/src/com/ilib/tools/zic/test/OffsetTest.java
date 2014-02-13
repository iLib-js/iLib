/*
 * OffsetTest.java - 
 *
 * Copyright © 2014 JEDLSoft, All Rights Reserved.
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
package com.ilib.tools.zic.test;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;

import junit.framework.TestCase;

import com.ilib.tools.zic.Offset;
import com.ilib.tools.zic.ParseException;
import com.ilib.tools.zic.RelativeDate;
import com.ilib.tools.zic.RelativeDate.StartRule;
import com.ilib.tools.zic.RuleSet;

/**
 * OffsetTest
 * 
 * @author edwin
 */
public class OffsetTest
    extends TestCase
{
    public void testConstructor()
    {
        Offset o = new Offset();
        assertNotNull(o);
    }
    
    public void testSetFieldsTestRegularFields()
    {
        Offset o = new Offset();
        assertNotNull(o);
        HashMap<String,RuleSet> ruleSets = new HashMap<String,RuleSet>();
        
        try {
            o.setFields("\t\t-5:00\tUS\tE%sT\t1920", ruleSets, "America/New_York");
            
            assertEquals(-5, o.getOffsetHours());
            assertEquals(0, o.getOffsetMinutes());
            assertEquals(0, o.getOffsetSeconds());
            assertEquals("E%sT", o.getFormat());
         } catch (ParseException e) {
            e.printStackTrace();
            fail();
        }
    }
    
    public void testSetFieldsEndDateOptional()
    {
        Offset o = new Offset();
        assertNotNull(o);
        HashMap<String,RuleSet> ruleSets = new HashMap<String,RuleSet>();
        
        try {
            o.setFields("\t\t-5:00\tUS\tE%sT", ruleSets, "America/New_York");
            RelativeDate rd = o.getEndDate();
            assertEquals(-1, rd.getYear());
            assertEquals(-1, rd.getMonth());
            assertEquals(-1, rd.getDayOfMonth());
            assertEquals(-1, rd.getDayOfWeek());
            assertEquals(-1, rd.getHour());
            assertEquals(-1, rd.getMinute());
            assertEquals(-1, rd.getSecond());
            assertEquals('w', rd.getZoneChar());
            assertEquals(StartRule.EQUAL, rd.getRule());
         } catch (ParseException e) {
            e.printStackTrace();
            fail();
        }
    }

    public void testSetFieldsTestEndDateYearOnly()
    {
        Offset o = new Offset();
        assertNotNull(o);
        HashMap<String,RuleSet> ruleSets = new HashMap<String,RuleSet>();
        
        try {
            o.setFields("\t\t-5:00\tUS\tE%sT\t1920", ruleSets, "America/New_York");
            RelativeDate rd = o.getEndDate();
            assertEquals(1920, rd.getYear());
            assertEquals(-1, rd.getMonth());
            assertEquals(-1, rd.getDayOfMonth());
            assertEquals(-1, rd.getDayOfWeek());
            assertEquals(-1, rd.getHour());
            assertEquals(-1, rd.getMinute());
            assertEquals(-1, rd.getSecond());
            assertEquals('w', rd.getZoneChar());
            assertEquals(StartRule.EQUAL, rd.getRule());
        } catch (ParseException e) {
            e.printStackTrace();
            fail();
        }
    }

    public void testSetFieldsTestEndDateYearMonth()
    {
        Offset o = new Offset();
        assertNotNull(o);
        HashMap<String,RuleSet> ruleSets = new HashMap<String,RuleSet>();
        
        try {
            o.setFields("\t\t-5:00\tUS\tE%sT\t1920\tFeb", ruleSets, "America/New_York");
            RelativeDate rd = o.getEndDate();
            assertEquals(1920, rd.getYear());
            assertEquals(1, rd.getMonth());
            assertEquals(-1, rd.getDayOfMonth());
            assertEquals(-1, rd.getDayOfWeek());
            assertEquals(-1, rd.getHour());
            assertEquals(-1, rd.getMinute());
            assertEquals(-1, rd.getSecond());
            assertEquals('w', rd.getZoneChar());
            assertEquals(StartRule.EQUAL, rd.getRule());
        } catch (ParseException e) {
            e.printStackTrace();
            fail();
        }
    }

    public void testSetFieldsTestEndDateYearMonthDay()
    {
        Offset o = new Offset();
        assertNotNull(o);
        HashMap<String,RuleSet> ruleSets = new HashMap<String,RuleSet>();
        
        try {
            o.setFields("\t\t-5:00\tUS\tE%sT\t1920\tFeb\t20", ruleSets, "America/New_York");
            RelativeDate rd = o.getEndDate();
            assertEquals(1920, rd.getYear());
            assertEquals(1, rd.getMonth());
            assertEquals(20, rd.getDayOfMonth());
            assertEquals(-1, rd.getDayOfWeek());
            assertEquals(-1, rd.getHour());
            assertEquals(-1, rd.getMinute());
            assertEquals(-1, rd.getSecond());
            assertEquals('w', rd.getZoneChar());
            assertEquals(StartRule.EQUAL, rd.getRule());
        } catch (ParseException e) {
            e.printStackTrace();
            fail();
        }
    }

    public void testSetFieldsTestEndDateYearMonthDayTime()
    {
        Offset o = new Offset();
        assertNotNull(o);
        HashMap<String,RuleSet> ruleSets = new HashMap<String,RuleSet>();
        
        try {
            o.setFields("\t\t-5:00\tUS\tE%sT\t1920\tFeb\t20\t2:00:23", ruleSets, "America/New_York");
            RelativeDate rd = o.getEndDate();
            assertEquals(1920, rd.getYear());
            assertEquals(1, rd.getMonth());
            assertEquals(20, rd.getDayOfMonth());
            assertEquals(-1, rd.getDayOfWeek());
            assertEquals(2, rd.getHour());
            assertEquals(0, rd.getMinute());
            assertEquals(23, rd.getSecond());
            assertEquals('w', rd.getZoneChar());
            assertEquals(StartRule.EQUAL, rd.getRule());
        } catch (ParseException e) {
            e.printStackTrace();
            fail();
        }
    }

    public void testSetFieldsTestRules()
    {
        Offset o = new Offset();
        assertNotNull(o);
        HashMap<String,RuleSet> ruleSets = new HashMap<String,RuleSet>();
        
        try {
            o.setFields("\t\t-5:00\tUS\tE%sT\t1920", ruleSets, "America/New_York");
            RuleSet rules = o.getRules();
            assertEquals("US", rules.getName());
        } catch (ParseException e) {
            e.printStackTrace();
            fail();
        }
    }

    public void testSetFieldsTestRulesNone()
    {
        Offset o = new Offset();
        assertNotNull(o);
        HashMap<String,RuleSet> ruleSets = new HashMap<String,RuleSet>();
        
        try {
            o.setFields("\t\t-5:00\t-\tE%sT\t1920", ruleSets, "America/New_York");
            RuleSet rules = o.getRules();
            assertNull(rules);
        } catch (ParseException e) {
            e.printStackTrace();
            fail();
        }
    }

    public void testCompareLessThan()
    {
        Offset o1 = new Offset();
        assertNotNull(o1);
        Offset o2 = new Offset();
        assertNotNull(o2);
        
        RelativeDate endDate1 = new RelativeDate();
        RelativeDate endDate2 = new RelativeDate();
        
        endDate1.setYear(1968);
        endDate2.setYear(1969);
        
        o1.setEndDate(endDate1);
        o2.setEndDate(endDate2);
        
        assertEquals(-1, o1.compareTo(o2));
    }

    public void testCompareGreaterThan()
    {
        Offset o1 = new Offset();
        assertNotNull(o1);
        Offset o2 = new Offset();
        assertNotNull(o2);
        
        RelativeDate endDate1 = new RelativeDate();
        RelativeDate endDate2 = new RelativeDate();
        
        endDate1.setYear(1968);
        endDate2.setYear(1969);
        
        o1.setEndDate(endDate1);
        o2.setEndDate(endDate2);
        
        assertEquals(1, o2.compareTo(o1));
    }

    public void testCompareEqual()
    {
        Offset o1 = new Offset();
        assertNotNull(o1);
        Offset o2 = new Offset();
        assertNotNull(o2);
        
        RelativeDate endDate1 = new RelativeDate();
        RelativeDate endDate2 = new RelativeDate();
        
        endDate1.setYear(1968);
        endDate2.setYear(1968);
        
        o1.setEndDate(endDate1);
        o2.setEndDate(endDate2);
        
        assertEquals(0, o2.compareTo(o1));
    }

    public void testCompareLessThanWithNull()
    {
        Offset o1 = new Offset();
        assertNotNull(o1);
        Offset o2 = new Offset();
        assertNotNull(o2);
        
        RelativeDate endDate1 = new RelativeDate();
        
        endDate1.setYear(1968);
        
        o1.setEndDate(endDate1);
        
        assertTrue(o1.compareTo(o2) < 0);
    }

    public void testCompareGreaterThanWithNull()
    {
        Offset o1 = new Offset();
        assertNotNull(o1);
        Offset o2 = new Offset();
        assertNotNull(o2);
        
        RelativeDate endDate1 = new RelativeDate();
        
        endDate1.setYear(1968);
        
        o1.setEndDate(endDate1);
        
        assertTrue(o2.compareTo(o1) > 0);
    }

    public void testCompareEqualWithNull()
    {
        Offset o1 = new Offset();
        assertNotNull(o1);
        Offset o2 = new Offset();
        assertNotNull(o2);
        
        assertEquals(0, o2.compareTo(o1));
    }

    public void testCompareBySorting()
    {
        ArrayList<Offset> offsets = new ArrayList<Offset>();
        int i;
        RelativeDate endDate;
        Offset offset;
        
        for ( i = 0; i < 11; i++ ) {
            offset = new Offset();
            endDate = new RelativeDate();
            endDate.setYear(1980-i);
            offset.setEndDate(endDate);
            offsets.add(offset);
        }

        Collections.sort(offsets);
        
        for ( i = 0; i < 11; i++ ) {
            offset = offsets.get(i);
            endDate = offset.getEndDate();
            assertEquals(1970+i, endDate.getYear());
        }
    }

    public void testCompareBySortingWithNull()
    {
        ArrayList<Offset> offsets = new ArrayList<Offset>();
        int i;
        RelativeDate endDate;
        Offset offset;

        // no end date -- should end up last
        offset = new Offset();
        offsets.add(offset);
        
        for ( i = 0; i < 11; i++ ) {
            offset = new Offset();
            endDate = new RelativeDate();
            endDate.setYear(1980-i);
            offset.setEndDate(endDate);
            offsets.add(offset);
        }

        Collections.sort(offsets);
        
        for ( i = 0; i < 11; i++ ) {
            offset = offsets.get(i);
            endDate = offset.getEndDate();
            assertNotNull(endDate);
            assertEquals(1970+i, endDate.getYear());
        }
        // should be at the end
        offset = offsets.get(11);
        assertNull(offset.getEndDate());
    }

    public void testCompareBySortingWithEmptyEndDate()
    {
        ArrayList<Offset> offsets = new ArrayList<Offset>();
        int i;
        RelativeDate endDate;
        Offset offset;

        // end date with nothing in it -- should end up last
        offset = new Offset();
        endDate = new RelativeDate();
        offset.setEndDate(endDate);
        offsets.add(offset);
        
        for ( i = 0; i < 11; i++ ) {
            offset = new Offset();
            endDate = new RelativeDate();
            endDate.setYear(1980-i);
            offset.setEndDate(endDate);
            offsets.add(offset);
        }

        Collections.sort(offsets);
        
        for ( i = 0; i < 11; i++ ) {
            offset = offsets.get(i);
            endDate = offset.getEndDate();
            assertNotNull(endDate);
            assertEquals(1970+i, endDate.getYear());
        }
        // should be at the end
        offset = offsets.get(11);
        endDate = offset.getEndDate();
        assertNotNull(endDate);
        assertEquals(-1, endDate.getYear());
    }

}
