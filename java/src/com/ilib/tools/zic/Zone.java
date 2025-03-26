/*
 * Zone.java - 
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
package com.ilib.tools.zic;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * Zone - models a particular time zone. Time zones are particular to a political
 * area where the government of that area has decided what the offset from GMT will
 * be and what the rules for changing to daylight savings time will be, if any.
 * 
 * Time zones contain a number of offset objects that document what the offset from
 * GMT was in a particular time frame. For whatever reason, some areas, especially those
 * on the borders of time zones, choose to move themselves into another time zone, or 
 * to start or stop observing daylight savings time. The offset instances document 
 * what those changes were from approximately 1970 to the present.
 * 
 * @author edwin
 */
public class Zone
{
    protected String name = null;
    protected ArrayList<Offset> offsets = new ArrayList<Offset>();
    protected Logger logger = LogManager.getLogger(this.getClass());
    
    public Zone() {}
    
    public Zone(String line, HashMap<String,RuleSet> ruleSets)
        throws ParseException
    {
        String[] fields;
        Offset offset;
        int i;
        
        fields = line.split("[ \t]+");
        
        for ( i = 0; i < fields.length; i++ ) {
            logger.trace("field " + i + ": " + fields[i]);
        }
        
        if ( fields.length < 5 ) {
            throw new ParseException("Bad zone definition. Not enough fields (" + fields.length + ") in " + line);
        }
        
        if ( fields[1].length() > 0 ) {
            name = fields[1];
            logger.trace("Name: " + name);
        }

        offset = new Offset(line.substring(5).trim(), ruleSets, name);
        offsets.add(offset);
    }
    
    public String getName()
    {
        return name;
    }
    
    public void addOffset(Offset offset)
    {
        offsets.add(offset);
    }
    
    public Offset getCurrentOffset()
    {
        // first, sort the offsets, then find the one with the last end date.
        
        Collections.sort(offsets);
        return offsets.get(offsets.size() - 1);
    }
    
    public ArrayList<Offset> getOffsets()
    {
        return offsets;
    }
    
    public JSONObject getJson(boolean currentOnly)
        throws JSONException
    {
        JSONObject json = null;
        Offset offset;
        
        if ( currentOnly ) {
            offset = getCurrentOffset();
            return offset.getJson(currentOnly);
        }
        
        return json;
    }
}
