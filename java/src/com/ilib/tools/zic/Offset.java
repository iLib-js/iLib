/*
 * Offset.java - 
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
import java.util.Calendar;
import java.util.HashMap;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * Offset - models an offset from GMT in a particular time frame. 
 * 
 * If the time zone chooses to observe daylight savings time for an offset, then
 * the offset will have a reference to a rule set that gives information about what
 * the start and stop rules are for observing daylight savings time in a particular
 * time frame. If the offset does not observe daylight savings time, the numeric
 * value of the offset from GMT will remain fixed throughout the year.
 * 
 * Rule sets can be shared. For example, the US federal government sets a default
 * standard rule for daylight savings time that is to be used when smaller jurisdictions 
 * do not decide to make their own variation from the standard. Thus, many time 
 * zones share the "US" rule set.
 * 
 * @author edwin
 */
public class Offset
    implements Comparable<Offset>
{
    protected int offsetHours = 0;
    protected int offsetMinutes = 0;
    protected int offsetSeconds = 0;
    protected String ruleSetName;
    protected RuleSet rules = null;
    protected String format = null;
    protected RelativeDate endDate = null;
    protected Logger logger;
    protected char zoneChar = 'w';
    
    public Offset()
    {
        logger = LogManager.getLogger(this.getClass());
    }

    public Offset(String line, HashMap<String,RuleSet> ruleSets, String timeZoneName)
        throws ParseException
    {
        logger = LogManager.getLogger(this.getClass());
        setFields(line, ruleSets, timeZoneName);
    }

    public void setFields(String line, HashMap<String,RuleSet> ruleSets, String timeZoneName)
        throws ParseException
    {
        String[] fields = line.split("[ \t]+");
        int i;
        
        logger.trace("Parsing line '" + line + "'");
        for ( i = 0; i < fields.length; i++ ) {
            logger.debug("field " + i + " is '" + fields[i] + "'");
        }

        if ( fields.length < 4 ) {
            throw new ParseException("Bad offset definition. Not enough fields (" + fields.length + ") in " + line);
        }

        String[] parts = fields[1].trim().split(":");
        if ( parts.length > 0 ) {
            offsetHours = Integer.parseInt(parts[0]);
            if ( parts.length > 1 ) {
                offsetMinutes = Integer.parseInt(parts[1]);
                if ( parts.length > 2 ) {
                    offsetSeconds = Integer.parseInt(parts[2]);
                }
            }
        }
        logger.debug("offset is " + fields[1]);

        if ( fields[2].length() > 0 && !fields[2].equals("-") ) {
            rules = ruleSets.get(fields[2]);
            if ( rules == null ) {
                rules = new RuleSet();
                rules.setName(fields[2]);
                ruleSets.put(fields[2], rules);
            }
            logger.trace("RuleSet: " + fields[2]);
        }

        if ( fields[3].length() > 0 ) {
            format = fields[3];
            logger.debug("format is " + fields[3]);
        }
        
        if ( fields.length >= 4 ) {
            endDate = new RelativeDate();
            endDate.parse(fields, 4);
            logger.debug("end date is " + endDate.toString());
        }
    }

    /**
     * @return the offsetHours
     */
    public int getOffsetHours()
    {
        return offsetHours;
    }

    /**
     * @param offsetHours the offsetHours to set
     */
    public void setOffsetHours(int offsetHours)
    {
        this.offsetHours = offsetHours;
    }

    /**
     * @return the offsetMinutes
     */
    public int getOffsetMinutes()
    {
        return offsetMinutes;
    }

    /**
     * @param offsetMinutes the offsetMinutes to set
     */
    public void setOffsetMinutes(int offsetMinutes)
    {
        this.offsetMinutes = offsetMinutes;
    }

    /**
     * @return the offsetSeconds
     */
    public int getOffsetSeconds()
    {
        return offsetSeconds;
    }

    /**
     * @param offsetSeconds the offsetSeconds to set
     */
    public void setOffsetSeconds(int offsetSeconds)
    {
        this.offsetSeconds = offsetSeconds;
    }

    /**
     * @return the rules
     */
    public RuleSet getRules()
    {
        return rules;
    }

    /**
     * @param rules the rules to set
     */
    public void setRules(RuleSet rules)
    {
        this.rules = rules;
    }

    /**
     * @return the format
     */
    public String getFormat()
    {
        return format;
    }

    /**
     * @param format the format to set
     */
    public void setFormat(String format)
    {
        this.format = format;
    }

    /**
     * @return the endRule
     */
    public RelativeDate getEndDate()
    {
        return endDate;
    }

    /**
     * @param endDate the endRule to set
     */
    public void setEndDate(RelativeDate endDate)
    {
        this.endDate = endDate;
    }

    /* (non-Javadoc)
     * @see java.lang.Comparable#compareTo(java.lang.Object)
     */
    @Override
    public int compareTo(Offset other)
    {
        // if no end date is set, that means the offset rule is current
        if ( endDate == null ) {
            return (other.endDate == null) ? 0 : 1;
        }
        if ( other.endDate == null ) {
            return -1;
        }
        
        return endDate.compareTo(other.endDate);
    }
    
    public JSONObject getJson(boolean currentOnly)
        throws JSONException
    {
        JSONObject json = new JSONObject();
        Rule rule;
        ArrayList<Rule> rulesList;
        int i;
        
        json.put("o", offsetHours+":"+offsetMinutes);   // o for offset
        json.put("f", format.replace("%s", "{c}"));  // f for format

        if ( currentOnly && rules != null ) {
        	Calendar cal = Calendar.getInstance();
        	int year = cal.get(Calendar.YEAR);
        	rulesList = rules.getRules();
            Rule startRule = null, endRule = null, lastRule = rulesList.get(rulesList.size()-1);;
            for ( i = 0; i < rulesList.size(); i++ ) {
            	rule = rulesList.get(i);
            	// check year-1 against the end year to take care of the 
            	// southern hemisphere where the end rule happens before 
            	// the start rule each year, so the start rule corresponding
            	// to this year's end rule was in the year previous (year-1)
            	if ( rule.getStartYear() <= year && year-1 <= rule.getEndYear() ) {
            		// found an applicable rule
            		if ( rule.hasSavings() ) {
            			startRule = rule;
            		} else {
            			endRule = rule;
            		}
            	}
            }
            
            // If there is an end year, then that means the rule is a past rule and DST no longer applies to 
            // this zone. So, we don't need to output the start and end rule.
            if ( startRule != null ) {
                Rule wallTime = startRule.clone();
                RelativeDate rd = wallTime.getTransitionTime();
                rd.offsetToWallTime(offsetHours, offsetMinutes, 0, 0);
                json.put("s", wallTime.getJson(currentOnly));
            }
            if ( endRule != null ) {
                Rule wallTime = endRule.clone();
                RelativeDate rd = wallTime.getTransitionTime();
                if (startRule != null) {
                	rd.offsetToWallTime(offsetHours, offsetMinutes, startRule.getSaveHours(), startRule.getSaveMinutes());
                }
                json.put("e", wallTime.getJson(currentOnly));
            }

            if (format.trim().equals("%s")) {
                json.put("f", lastRule.getCharacter());
            } else if ( startRule == null && endRule == null ) {
                // no DST in this time zone, so fix up bogus abbreviations that include the %s when it shouldn't
                // replace the %s with S for "Standard time"
                json.put("f", format.replace("%s", "S"));
            }
        }

        return json;
    }
}
