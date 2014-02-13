/*
 * RuleTest.java - 
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

import junit.framework.TestCase;

import com.ilib.tools.zic.ParseException;
import com.ilib.tools.zic.RelativeDate;
import com.ilib.tools.zic.RelativeDate.StartRule;
import com.ilib.tools.zic.Rule;

/**
 * RuleTest
 * 
 * @author edwin
 */
public class RuleTest
    extends TestCase
{
    public void testConstructor()
    {
        Rule rule = new Rule();
        assertNotNull(rule);
    }
    
    public void testConstructorEmpty()
    {
        Rule rule = new Rule();
        assertNotNull(rule);
        
        assertNull(rule.getRuleSetName());
        assertNull(rule.getCharacter());
        assertEquals(-1, rule.getStartYear());
        assertEquals(-1, rule.getEndYear());
        assertEquals(-1, rule.getSaveHours());
        assertEquals(-1, rule.getSaveMinutes());
        assertEquals(-1, rule.getSaveSeconds());
        assertNull(rule.getTransitionTime());
        assertNull(rule.getType());
    }

    public void testConstructorFullSpaces()
    {
        try {
            Rule rule = new Rule("Rule  Chicago 1922    1966    -   Apr lastSun 2:00    1:00    D");
            assertNotNull(rule);
            
            assertEquals("Chicago", rule.getRuleSetName());
            assertEquals("D", rule.getCharacter());
            assertEquals(1922, rule.getStartYear());
            assertEquals(1966, rule.getEndYear());
            assertEquals(1, rule.getSaveHours());
            assertEquals(0, rule.getSaveMinutes());
            assertEquals(-1, rule.getSaveSeconds());
            RelativeDate rd = rule.getTransitionTime();
            assertNotNull(rd);
            assertNull(rule.getType());
        } catch (ParseException e) {
            e.printStackTrace();
            fail();
        }
    }

    public void testConstructorFullRightStartDate()
    {
        try {
            Rule rule = new Rule("Rule  Chicago 1922    1966    -   Apr lastSun 2:00    1:00    D");
            assertNotNull(rule);
            
            RelativeDate rd = rule.getTransitionTime();
            assertNotNull(rd);
            
            assertEquals(-1, rd.getYear());
            assertEquals(3, rd.getMonth());
            assertEquals(-1, rd.getDayOfMonth());
            assertEquals(0, rd.getDayOfWeek());
            assertEquals(2, rd.getHour());
            assertEquals(0, rd.getMinute());
            assertEquals(-1, rd.getSecond());
            assertEquals('w', rd.getZoneChar());
            assertEquals(StartRule.LAST, rd.getRule());
        } catch (ParseException e) {
            e.printStackTrace();
            fail();
        }
    }

    public void testConstructorFullTabs()
    {
        try {
            Rule rule = new Rule("Rule\tChicago\t1922\t1966\t-\tApr\tlastSun\t2:00\t1:00\tD");
            assertNotNull(rule);
            
            assertEquals("Chicago", rule.getRuleSetName());
            assertEquals("D", rule.getCharacter());
            assertEquals(1922, rule.getStartYear());
            assertEquals(1966, rule.getEndYear());
            assertEquals(1, rule.getSaveHours());
            assertEquals(0, rule.getSaveMinutes());
            assertEquals(-1, rule.getSaveSeconds());
            RelativeDate rd = rule.getTransitionTime();
            assertNotNull(rd);
            assertNull(rule.getType());
        } catch (ParseException e) {
            e.printStackTrace();
            fail();
        }
    }

    public void testConstructorOnly()
    {
        try {
            Rule rule = new Rule("Rule\tChicago\t1922\tonly\t-\tApr\tlastSun\t2:00\t1:00\tD");
            assertNotNull(rule);
            
            assertEquals("Chicago", rule.getRuleSetName());
            assertEquals("D", rule.getCharacter());
            assertEquals(1922, rule.getStartYear());
            assertEquals(1922, rule.getEndYear());
            assertEquals(1, rule.getSaveHours());
            assertEquals(0, rule.getSaveMinutes());
            assertEquals(-1, rule.getSaveSeconds());
            RelativeDate rd = rule.getTransitionTime();
            assertNotNull(rd);
            assertNull(rule.getType());
        } catch (ParseException e) {
            e.printStackTrace();
            fail();
        }
    }

    public void testConstructorWithTabs()
    {
        try {
            Rule rule = new Rule("Rule\tChicago\t1922\t1966\tfoo\tApr\tlastSun\t2:00\t1:00\tD");
            assertNotNull(rule);
            
            assertEquals("Chicago", rule.getRuleSetName());
            assertEquals("D", rule.getCharacter());
            assertEquals(1922, rule.getStartYear());
            assertEquals(1966, rule.getEndYear());
            assertEquals(1, rule.getSaveHours());
            assertEquals(0, rule.getSaveMinutes());
            assertEquals(-1, rule.getSaveSeconds());
            RelativeDate rd = rule.getTransitionTime();
            assertNotNull(rd);
            assertEquals("foo", rule.getType());
        } catch (ParseException e) {
            e.printStackTrace();
            fail();
        }
    }

    public void testConstructorWithSeconds()
    {
        try {
            Rule rule = new Rule("Rule\tChicago\t1922\t1966\t-\tApr\tlastSun\t2:00:30\t1:30:30\tD");
            assertNotNull(rule);
            
            assertEquals("Chicago", rule.getRuleSetName());
            assertEquals("D", rule.getCharacter());
            assertEquals(1922, rule.getStartYear());
            assertEquals(1966, rule.getEndYear());
            assertEquals(1, rule.getSaveHours());
            assertEquals(30, rule.getSaveMinutes());
            assertEquals(30, rule.getSaveSeconds());
            RelativeDate rd = rule.getTransitionTime();
            assertNotNull(rd);
            assertNull(rule.getType());
        } catch (ParseException e) {
            e.printStackTrace();
            fail();
        }
    }

    public void testConstructorWithZoneChar()
    {
        try {
            Rule rule = new Rule("Rule\tChicago\t1922\t1966\t-\tApr\tlastSun\t2:00u\t1:00\tD");
            assertNotNull(rule);
            
            RelativeDate rd = rule.getTransitionTime();
            assertNotNull(rd);
            assertEquals(-1, rd.getYear());
            assertEquals(3, rd.getMonth());
            assertEquals(-1, rd.getDayOfMonth());
            assertEquals(0, rd.getDayOfWeek());
            assertEquals(2, rd.getHour());
            assertEquals(0, rd.getMinute());
            assertEquals(-1, rd.getSecond());
            assertEquals('u', rd.getZoneChar());
            assertEquals(StartRule.LAST, rd.getRule());
        } catch (ParseException e) {
            e.printStackTrace();
            fail();
        }
    }

    public void testCompareLessThan()
    {
        Rule rule1 = new Rule();
        assertNotNull(rule1);
        Rule rule2 = new Rule();
        assertNotNull(rule2);
        
        rule1.setEndYear(1980);
        rule2.setEndYear(1990);
        
        assertTrue(rule1.compareTo(rule2) < 0);
    }

    public void testCompareGreaterThan()
    {
        Rule rule1 = new Rule();
        assertNotNull(rule1);
        Rule rule2 = new Rule();
        assertNotNull(rule2);
        
        rule1.setEndYear(1980);
        rule2.setEndYear(1990);
        
        assertTrue(rule2.compareTo(rule1) > 0);
    }

    public void testCompareEqual()
    {
        Rule rule1 = new Rule();
        assertNotNull(rule1);
        Rule rule2 = new Rule();
        assertNotNull(rule2);
        
        rule1.setEndYear(1990);
        rule2.setEndYear(1990);
        
        assertEquals(0, rule2.compareTo(rule1));
        assertEquals(0, rule1.compareTo(rule2));
    }

    public void testCompareLessThanMax()
    {
        Rule rule1 = new Rule();
        assertNotNull(rule1);
        Rule rule2 = new Rule();
        assertNotNull(rule2);
        
        rule1.setEndYear(1980);
        rule2.setEndYear(Integer.MAX_VALUE);
        
        assertTrue(rule1.compareTo(rule2) < 0);
    }

    public void testCompareGreaterThanMin()
    {
        Rule rule1 = new Rule();
        assertNotNull(rule1);
        Rule rule2 = new Rule();
        assertNotNull(rule2);
        
        rule1.setEndYear(Integer.MIN_VALUE);
        rule2.setEndYear(1990);
        
        assertTrue(rule1.compareTo(rule2) < 0);
    }

    public void testCompareEqualMax()
    {
        Rule rule1 = new Rule();
        assertNotNull(rule1);
        Rule rule2 = new Rule();
        assertNotNull(rule2);
        
        rule1.setEndYear(Integer.MAX_VALUE);
        rule2.setEndYear(Integer.MAX_VALUE);
        
        assertEquals(0, rule2.compareTo(rule1));
        assertEquals(0, rule1.compareTo(rule2));
    }

    public void testCompareEqualMin()
    {
        Rule rule1 = new Rule();
        assertNotNull(rule1);
        Rule rule2 = new Rule();
        assertNotNull(rule2);
        
        rule1.setEndYear(Integer.MIN_VALUE);
        rule2.setEndYear(Integer.MIN_VALUE);
        
        assertEquals(0, rule2.compareTo(rule1));
        assertEquals(0, rule1.compareTo(rule2));
    }

    public void testCompareBySorting()
    {
        ArrayList<Rule> rules = new ArrayList<Rule>();
        int i;
        Rule rule;
        
        for ( i = 0; i < 11; i++ ) {
            rule = new Rule();
            rule.setEndYear(2000-i);
            rules.add(rule);
        }
        
        Collections.sort(rules);
        
        for ( i = 0; i < 11; i++ ) {
            rule = rules.get(i);
            assertEquals(1990+i, rule.getEndYear());
        }
    }

    public void testCompareBySortingWithMax()
    {
        ArrayList<Rule> rules = new ArrayList<Rule>();
        int i;
        Rule rule;
        
        rule = new Rule();
        rule.setEndYear(Integer.MAX_VALUE);
        rules.add(rule);
    
        for ( i = 0; i < 11; i++ ) {
            rule = new Rule();
            rule.setEndYear(2000-i);
            rules.add(rule);
        }
        
        Collections.sort(rules);
        
        for ( i = 0; i < 11; i++ ) {
            rule = rules.get(i);
            assertEquals(1990+i, rule.getEndYear());
        }
        
        rule = rules.get(11);
        assertEquals(Integer.MAX_VALUE, rule.getEndYear());
    }

    public void testCompareBySortingWithMin()
    {
        ArrayList<Rule> rules = new ArrayList<Rule>();
        int i;
        Rule rule;
        
        for ( i = 0; i < 11; i++ ) {
            rule = new Rule();
            rule.setEndYear(2000-i);
            rules.add(rule);
        }
        rule = new Rule();
        rule.setEndYear(Integer.MIN_VALUE);
        rules.add(rule);  
        
        Collections.sort(rules);
        
        rule = rules.get(0);
        assertEquals(Integer.MIN_VALUE, rule.getEndYear());

        for ( i = 0; i < 11; i++ ) {
            rule = rules.get(i+1);
            assertEquals(1990+i, rule.getEndYear());
        }
    }

}
