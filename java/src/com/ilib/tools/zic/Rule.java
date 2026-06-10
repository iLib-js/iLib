/*
 * Rule.java - 
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

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * Rule - Models a particular time change rule.
 * 
 * For example, in the US, many places change to daylight savings time on
 * the last Sunday of April, and the difference is 1 hour. The change occurs
 * at 2:00am when the clock jumps immediately to 3:00am. This class models
 * that particular rule. There is often another corresponding rule in the 
 * fall that regulates how time is changed back to standard time.
 * 
 * @author edwin
 */
public class Rule
    implements Comparable<Rule>
{
    protected String ruleSetName = null;
    protected int startYear = -1;
    protected int endYear = -1;
    protected String type = null;
    protected RelativeDate transitionTime = null;
    protected int saveHours = -1;
    protected int saveMinutes = -1;
    protected int saveSeconds = -1;
    protected String character = null;
    protected Logger logger = LogManager.getLogger(this.getClass());
    
    public Rule() {}
    
    public Rule(String line)
        throws ParseException
    {
        String[] fields = line.split("[ \t]+");
        int i;
        
        logger.trace("Parsing line '" + line + "'");
        for ( i = 0; i < fields.length; i++ ) {
            logger.debug("Rule field " + i + " is '" + fields[i] + "'");
        }

        if ( fields.length < 10 ) {
            throw new ParseException("Bad rule definition. Not enough fields (" + fields.length + ") in " + line);
        }

        ruleSetName = fields[1];
        if ( fields[2].equalsIgnoreCase("min") ) {
            startYear = Integer.MIN_VALUE;
        } else {
            startYear = Integer.parseInt(fields[2]);
        }
        if ( fields[3].equalsIgnoreCase("only") ) {
            endYear = startYear;
        } else if ( fields[3].equalsIgnoreCase("max") ) {
            endYear = Integer.MAX_VALUE;
        } else {
            endYear = Integer.parseInt(fields[3]);
        }
        if ( !fields[4].equals("-") ) {
            type = fields[4];
        }
        
        logger.debug("rule set name is " + ruleSetName);
        logger.debug("start year is " + startYear);
        logger.debug("end year is " + endYear);
        if (type != null) {
            logger.debug("type year is " + type);
        }
        
        transitionTime = new RelativeDate();
        transitionTime.parse(fields, 4);
        
        logger.debug("transition time is " + transitionTime.toString());
        
        if ( fields[8].length() > 0 ) {
            String[] parts = fields[8].trim().split(":");
            if ( parts.length > 0 ) {
                saveHours = Integer.parseInt(parts[0]);
                if ( parts.length > 1 ) {
                    saveMinutes = Integer.parseInt(parts[1]);
                    if ( parts.length > 2 ) {
                        saveSeconds = Integer.parseInt(parts[2]);
                    }
                }
            }
        }
        
        logger.debug("saving " + fields[8]);
        character = fields[9];
    }
    
    public String getRuleSetName()
    {
        return ruleSetName;
    }

    /**
     * @return the startYear
     */
    public int getStartYear()
    {
        return startYear;
    }

    /**
     * @param startYear the startYear to set
     */
    public void setStartYear(int startYear)
    {
        this.startYear = startYear;
    }

    /**
     * @return the endYear
     */
    public int getEndYear()
    {
        return endYear;
    }

    /**
     * @param endYear the endYear to set
     */
    public void setEndYear(int endYear)
    {
        this.endYear = endYear;
    }

    /**
     * @return the type
     */
    public String getType()
    {
        return type;
    }

    /**
     * @param type the type to set
     */
    public void setType(String type)
    {
        this.type = type;
    }

    /**
     * @return the transitionTime
     */
    public RelativeDate getTransitionTime()
    {
        return transitionTime;
    }

    /**
     * @param transitionTime the transitionTime to set
     */
    public void setTransitionTime(RelativeDate transitionTime)
    {
        this.transitionTime = transitionTime;
    }

    /**
     * Return true if the current rule has savings time in it.
     * 
     * @return true if the current rule has savings time in it, or false otherwise
     */
    public boolean hasSavings()
    {
    	return saveHours > 0 || saveMinutes > 0 || saveSeconds > 0;
    }
    
    /**
     * @return the saveHours
     */
    public int getSaveHours()
    {
        return saveHours;
    }

    /**
     * @param saveHours the saveHours to set
     */
    public void setSaveHours(int saveHours)
    {
        this.saveHours = saveHours;
    }

    /**
     * @return the saveMinutes
     */
    public int getSaveMinutes()
    {
        return saveMinutes;
    }

    /**
     * @param saveMinutes the saveMinutes to set
     */
    public void setSaveMinutes(int saveMinutes)
    {
        this.saveMinutes = saveMinutes;
    }

    /**
     * @return the saveSeconds
     */
    public int getSaveSeconds()
    {
        return saveSeconds;
    }

    /**
     * @param saveSeconds the saveSeconds to set
     */
    public void setSaveSeconds(int saveSeconds)
    {
        this.saveSeconds = saveSeconds;
    }

    /**
     * @return the character
     */
    public String getCharacter()
    {
        return character;
    }

    /**
     * @param character the character to set
     */
    public void setCharacter(String character)
    {
        this.character = character;
    }

    /**
     * @param ruleSetName the ruleSetName to set
     */
    public void setRuleSetName(String ruleSetName)
    {
        this.ruleSetName = ruleSetName;
    }

    /* (non-Javadoc)
     * @see java.lang.Comparable#compareTo(java.lang.Object)
     */
    @Override
    public int compareTo(Rule other)
    {
        if ( endYear == Integer.MIN_VALUE ) {
            return other.endYear == Integer.MIN_VALUE ? 0 : -1;
        } else if ( other.endYear == Integer.MIN_VALUE ) {
            return 1;
        }
        if ( endYear == Integer.MAX_VALUE ) {
            return other.endYear == Integer.MAX_VALUE ? 0 : 1;
        } else if ( other.endYear == Integer.MAX_VALUE ) {
            return -1;
        }
        return endYear - other.endYear;
    }
    
    public JSONObject getJson(boolean currentOnly)
        throws JSONException
    {
        JSONObject json = new JSONObject();
        StringBuffer save = new StringBuffer();

        if ( !currentOnly ) {
            json.put("s", startYear); // s for Start
            json.put("e", endYear);   // e for End
        }
        if ( type != null && !type.equals("-") ) {
            json.put("p", type); // p for tyPe
        }
        
        transitionTime.addJson(json); // t for Transition time
        
        // if the savings time is 0:00:00, then it is implied by leaving it off
        if ( saveHours > 0 || saveMinutes > 0 || saveSeconds > 0 ) { 
            save.append(saveHours);
            save.append(':');
            save.append((saveMinutes != -1) ? saveMinutes : "00"); 
            if ( saveSeconds != -1 ) {    
                save.append(':');
                save.append(saveSeconds < 10 ? "0" + saveSeconds : "" + saveSeconds); 
            }
            json.put("v", save.toString()); // v for saVings time
        }
        if ( !character.equals("-") ) {
            json.put("c", character);       // c for Character
        }
        return json;
    }
    
    /* (non-Javadoc)
     * @see java.lang.Object#clone()
     */
    public Rule clone()
    {
        Rule ret = new Rule();
        ret.character = character;
        ret.endYear = endYear;
        ret.ruleSetName = ruleSetName;
        ret.saveHours = saveHours;
        ret.saveMinutes = saveMinutes;
        ret.saveSeconds = saveSeconds;
        ret.startYear = startYear;
        ret.transitionTime = transitionTime.clone();
        ret.type = type;
        return ret;
    }
}
