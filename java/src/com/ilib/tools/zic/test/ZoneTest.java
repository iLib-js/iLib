/*
 * ZoneTest.java - 
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
import java.util.HashMap;

import junit.framework.TestCase;

import com.ilib.tools.zic.Offset;
import com.ilib.tools.zic.ParseException;
import com.ilib.tools.zic.RelativeDate;
import com.ilib.tools.zic.RuleSet;
import com.ilib.tools.zic.Zone;

/**
 * ZoneTest
 * 
 * @author edwin
 */
public class ZoneTest
    extends TestCase
{
    public void testConstructor()
    {
        Zone zone = new Zone();
        assertNotNull(zone);
    }
    
    public void testConstructorEmpty()
    {
        Zone zone = new Zone();
        assertNotNull(zone);
        
        assertNull(zone.getName());
        ArrayList<Offset> offsets = zone.getOffsets();
        assertEquals(0, offsets.size());
    }

    public void testConstructorFullSpaces()
    {
        try {
            HashMap<String,RuleSet> ruleSets = new HashMap<String,RuleSet>();
            Zone zone = new Zone("Zone  Africa/Lome 0:04:52 -   LMT 1893", ruleSets);
            assertNotNull(zone);
            
            assertEquals("Africa/Lome", zone.getName());
            ArrayList<Offset> offsets = zone.getOffsets();
            assertEquals(1, offsets.size());
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

    public void testConstructorFullSpacesRightOffset()
    {
        try {
            HashMap<String,RuleSet> ruleSets = new HashMap<String,RuleSet>();
            Zone zone = new Zone("Zone  Africa/Lome 0:04:52 -   LMT 1893", ruleSets);
            assertNotNull(zone);
            
            assertEquals("Africa/Lome", zone.getName());
            ArrayList<Offset> offsets = zone.getOffsets();
            assertEquals(1, offsets.size());
            Offset offset = offsets.get(0);
            
            assertEquals(0, offset.getOffsetHours());
            assertEquals(4, offset.getOffsetMinutes());
            assertEquals(52, offset.getOffsetSeconds());
            assertNull(offset.getRules());
            assertEquals("LMT", offset.getFormat());
            RelativeDate rd = offset.getEndDate();
            assertNotNull(rd);
            assertEquals(1893, rd.getYear());
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }
    
    public void testConstructorFullTabs()
    {
        try {
            HashMap<String,RuleSet> ruleSets = new HashMap<String,RuleSet>();
            Zone zone = new Zone("Zone\tAfrica/Lome\t0:04:52\t-\tLMT\t1893", ruleSets);
            assertNotNull(zone);
            
            assertEquals("Africa/Lome", zone.getName());
            ArrayList<Offset> offsets = zone.getOffsets();
            assertEquals(1, offsets.size());
        } catch ( ParseException e ) {
            e.printStackTrace();
            fail();
        }
    }

}
