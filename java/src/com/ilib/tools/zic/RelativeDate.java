/*
 * RelativeDate.java - 
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

import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.TimeZone;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * RelativeDate - models the specification of a relative date.
 * 
 * The following types of dates can be modelled:
 * 
 * <ul>
 * <li>First DOW of the month, where DOW is the "day of week". eg. "first Sunday of the month"
 * <li>Last DOW of the month. eg. "last Sunday of the month"
 * <li>First DOW on or after date. eg. "First Sunday on or after the 8th of the month"
 * <li>First DOW on or before date. eg. "First Sunday on or before the 25th of the month"
 * <li>A specific day of the month. eg. "May 8".
 * </ul> 
 * 
 * @author edwin
 */
public class RelativeDate
    implements Comparable<RelativeDate>
{
    public enum StartRule {
        FIRST("f"),
        LAST("l"),
        GREATER(">"),
        LESS("<"),
        EQUAL("=");
        
        protected String name;
        
        StartRule(String name) {
            this.name = name;
        }
        
        public String getName()
        {
            return name;
        }
    }

    static protected HashMap<String,Integer> months = new HashMap<String,Integer>();
    static protected HashMap<String,Integer> weekDays = new HashMap<String,Integer>();
    static {
        months.put("Jan", new Integer(0));
        months.put("Feb", new Integer(1));
        months.put("Mar", new Integer(2));
        months.put("Apr", new Integer(3));
        months.put("May", new Integer(4));
        months.put("Jun", new Integer(5));
        months.put("Jul", new Integer(6));
        months.put("Aug", new Integer(7));
        months.put("Sep", new Integer(8));
        months.put("Oct", new Integer(9));
        months.put("Nov", new Integer(10));
        months.put("Dec", new Integer(11));
        weekDays.put("Sun", new Integer(0));
        weekDays.put("Mon", new Integer(1));
        weekDays.put("Tue", new Integer(2));
        weekDays.put("Wed", new Integer(3));
        weekDays.put("Thu", new Integer(4));
        weekDays.put("Fri", new Integer(5));
        weekDays.put("Sat", new Integer(6));
    }

    protected StartRule rule = StartRule.EQUAL;
    protected int year = -1;
    protected int month = -1;
    protected int dayOfWeek = -1;
    protected int dayOfMonth = -1;
    protected int hour = -1;
    protected int minute = -1;
    protected int second = -1;
    protected char zoneChar = 'w';
    protected Logger logger = LogManager.getLogger(this.getClass());
    
    public RelativeDate() {}
    
    public RelativeDate(StartRule rule, int dayOfWeek, int dayOfMonth, int month)
    {
        this.rule = rule;
        this.dayOfWeek = dayOfWeek;
        this.dayOfMonth = dayOfMonth;
        this.month = month;
    }

    public void parse(String[] fields, int startIndex)
    {
        if ( fields.length > startIndex ) {
            if ( fields[startIndex].length() > 0 && !fields[startIndex].equals("-") && Character.isDigit(fields[startIndex].charAt(0)) ) {
                year = Integer.parseInt(fields[startIndex]);
            }
            if ( fields.length > startIndex+1 && fields[startIndex+1].length() > 0 ) {
                if ( !months.containsKey(fields[startIndex+1]) ) {
                    // syntax error -- not a real zone info file
                    return;
                }
                month = months.get(fields[startIndex+1]);
                if ( fields.length > startIndex+2 ) {
                    String dayStr = fields[startIndex+2];
                
                    if ( Character.isDigit(dayStr.charAt(0)) ) {
                        dayOfMonth = Integer.parseInt(dayStr);
                    } else if ( dayStr.startsWith("last") ) {
                        rule = StartRule.LAST;
                        dayOfWeek = weekDays.get(dayStr.substring(4));
                    } else if ( dayStr.startsWith("first") ) {
                        rule = StartRule.FIRST;
                        dayOfWeek = weekDays.get(dayStr.substring(5));
                    } else {
                        dayOfWeek = weekDays.get(dayStr.substring(0, 3));
                        if ( dayStr.charAt(4) == '=' ) {
                            rule = (dayStr.charAt(3) == '<') ? StartRule.LESS : StartRule.GREATER;
                            dayOfMonth = Integer.parseInt(dayStr.substring(5));
                        }
                    }
                    
                    if ( fields.length > startIndex+3 && fields[startIndex+3].length() > 0 ) {
                        String time = fields[startIndex+3];
                        if ( time != null && time.length() > 0 ) {
                            char c = time.charAt(time.length()-1);
                            if ( !Character.isDigit(c) ) {
                                switch (c) {
                                    case 's': 
                                    case 'S':
                                        // standard time
                                        zoneChar = 's';
                                        break;
                                    case 'u': 
                                    case 'U': 
                                    case 'g': 
                                    case 'G': 
                                    case 'z': 
                                    case 'Z':
                                        // UTC
                                        zoneChar = 'u';
                                        break;
                                    case 'w': 
                                    case 'W': 
                                    default:
                                        // Wall time
                                        zoneChar = 'w';
                                        break;
                                }
                                time = time.substring(0, time.length() - 1);
                                logger.debug("found zone char " + zoneChar);
                            }
                            String[] timeParts = time.split(":");
                            logger.debug("splitting time " + time);
                            if ( timeParts.length > 0 ) {
                                hour = Integer.parseInt(timeParts[0]);
                                if ( timeParts.length > 1 ) {
                                    minute = Integer.parseInt(timeParts[1]);
                                    if ( timeParts.length > 2 ) {
                                        second = Integer.parseInt(timeParts[2]);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    /**
     * If the current relative date has a zone char and that zone char is not "w", then the
     * transition time was given as a standard time or as a UTC time instead of wall time. 
     * Either way, ilib needs to have the wall time in order to do the correct rule start 
     * calculations. This method converts non-wall-time relative dates to a wall time.
     *  
     * @param offset the offset from UTC for this rule in hours
     * @param savings the DST savings for this rule in hours
     */
    public void offsetToWallTime(int offsetHour, int offsetMinute, int savingsHour, int savingsMinute) 
    {
        Calendar c = new GregorianCalendar(TimeZone.getTimeZone("Etc/UTC")); 
        c.set(year == -1 ? 1970 : year, 
            month == -1 ? 0 : month, 
            dayOfMonth == -1 ? 1 : dayOfMonth, 
            hour == -1 ? 0 : hour, 
            minute == -1 ? 0 : minute, 
            0);
        
        switch (zoneChar) {
            case 'u':
                c.add(Calendar.HOUR_OF_DAY, offsetHour);
                c.add(Calendar.MINUTE, offsetMinute);
                c.add(Calendar.HOUR_OF_DAY, savingsHour);
                c.add(Calendar.MINUTE, savingsMinute);
                break;
                
            case 's':
                c.add(Calendar.HOUR_OF_DAY, savingsHour);
                c.add(Calendar.MINUTE, savingsMinute);
                break;
        }
        
        if ( year != -1 ) {
            year = c.get(Calendar.YEAR);
        }
        if ( month != -1 && rule != StartRule.FIRST && rule != StartRule.LAST ) {
            month = c.get(Calendar.MONTH);
        }
        if ( dayOfWeek != -1 &&
            (rule == StartRule.FIRST || rule == StartRule.LAST) && 
            1 != c.get(Calendar.DAY_OF_MONTH) &&
            hour != -1 ) {
            // if the offset put us on the next or previous day, then we have to adjust the first/last
            // rules to check for the next or previous day of the week instead
            dayOfWeek += ((offsetHour + savingsHour) * 60 + offsetMinute + savingsMinute) > 0 ? 1 : -1;
            dayOfWeek %= 7;
            if ( dayOfWeek < 0 ) {
                dayOfWeek += 7;
            }
        }
        if ( dayOfMonth != -1 ) {
            dayOfMonth = c.get(Calendar.DAY_OF_MONTH);
        }
        if ( hour != -1 ) {
            hour = c.get(Calendar.HOUR_OF_DAY);
        }
        if ( minute != -1 ) {
            minute = c.get(Calendar.MINUTE);
        }
        
        zoneChar = 'w';
    }
    
    /* (non-Javadoc)
     * @see java.lang.Object#toString()
     */
    @Override
    public String toString()
    {
        StringBuffer sb = new StringBuffer();
        switch (rule) {
            case LAST:
                sb.append("last ");
                sb.append(dayOfWeek);
                break;
            case FIRST:
                sb.append("first ");
                sb.append(dayOfWeek);
                break;
            case LESS:
                sb.append(dayOfWeek);
                sb.append("<=");
                sb.append(dayOfMonth);
                break;
            case GREATER:
                sb.append(dayOfWeek);
                sb.append(">=");
                sb.append(dayOfMonth);
                break;
            case EQUAL:
                if ( dayOfMonth != -1 ) {
                    sb.append(dayOfMonth);
                }
                break;
        }
        if ( month != -1 ) {
            sb.append(' ');
            sb.append(month);
        }
        if ( year != -1 ) {
            sb.append(' ');
            sb.append(year);
        }
        
        if ( hour != -1 ) {
            sb.append(' ');
            sb.append(hour);
            if ( minute != -1 ) {
                sb.append(':');
                sb.append(minute);
                if ( second != -1 ) {
                    sb.append(':');
                    sb.append(second);
                }
            } else {
                sb.append(":00");
            }
        }
        return sb.toString();
    }

    /**
     * @param rule the rule to set
     */
    public void setRule(StartRule rule)
    {
        this.rule = rule;
    }

    public StartRule getRule()
    {
        return rule;
    }

    /**
     * @return the year
     */
    public int getYear()
    {
        return year;
    }

    /**
     * @param year the year to set
     */
    public void setYear(int year)
    {
        this.year = year;
    }

    /**
     * @return the month
     */
    public int getMonth()
    {
        return month;
    }

    /**
     * @param month the month to set
     */
    public void setMonth(int month)
    {
        this.month = month;
    }

    /**
     * @return the dayOfWeek
     */
    public int getDayOfWeek()
    {
        return dayOfWeek;
    }

    /**
     * @param dayOfWeek the dayOfWeek to set
     */
    public void setDayOfWeek(int dayOfWeek)
    {
        this.dayOfWeek = dayOfWeek;
    }

    /**
     * @return the dayOfMonth
     */
    public int getDayOfMonth()
    {
        return dayOfMonth;
    }

    /**
     * @param dayOfMonth the dayOfMonth to set
     */
    public void setDayOfMonth(int dayOfMonth)
    {
        this.dayOfMonth = dayOfMonth;
    }

    /**
     * @return the hour
     */
    public int getHour()
    {
        return hour;
    }

    /**
     * @param hour the hour to set
     */
    public void setHour(int hour)
    {
        this.hour = hour;
    }

    /**
     * @return the minute
     */
    public int getMinute()
    {
        return minute;
    }

    /**
     * @param minute the minute to set
     */
    public void setMinute(int minute)
    {
        this.minute = minute;
    }

    /**
     * @return the second
     */
    public int getSecond()
    {
        return second;
    }

    /**
     * @param second the second to set
     */
    public void setSecond(int second)
    {
        this.second = second;
    }

    /**
     * @return the zoneChar
     */
    public char getZoneChar()
    {
        return zoneChar;
    }

    /**
     * @param zoneChar the zoneChar to set
     */
    public void setZoneChar(char zoneChar)
    {
        this.zoneChar = zoneChar;
    }

    /* (non-Javadoc)
     * @see java.lang.Comparable#compareTo(java.lang.Object)
     */
    @Override
    public int compareTo(RelativeDate other)
    {
        // if no end date is set, that means the offset rule is current
        if ( year == -1 ) {
            if ( other.year != -1 ) {
                return 1;
            }
        } else if ( other.year == -1 ) {
            return -1;
        }
        
        int temp = year - other.year;
        if ( temp != 0 ) {
            return temp;
        }

        temp = month - other.month;
        if ( temp != 0 ) {
            return temp;
        }

        temp = dayOfMonth - other.dayOfMonth; 
        if ( temp != 0 ) {
            return temp;
        }

        temp = hour - other.hour;
        if ( temp != 0 ) {
            return temp;
        }

        temp = minute - other.minute;
        if ( temp != 0 ) {
            return temp;
        }

        temp = second - other.second;
        if ( temp != 0 ) {
            return temp;
        }

        return 0;
    }
    
    public JSONObject addJson(JSONObject json)
        throws JSONException
    {
        if ( year != -1 ) {
            json.put("y", year);   // y for year
        }
        if ( month != -1 ) {
            json.put("m", month+1);   // capital m for Month, months in ilib/JS are 1-based
        }
        
        StringBuffer temp = new StringBuffer();
        switch (rule) {
            case LESS:
            case GREATER:
                temp.append(dayOfWeek);
                temp.append(rule.getName());
                temp.append(dayOfMonth);
                break;
            case FIRST:
            case LAST:
                temp.append(rule.getName());
                temp.append(dayOfWeek);
                break;
            case EQUAL:
                temp.append(dayOfMonth);
                break;
        }
        json.put("r", temp.toString()); // r for rule
        if ( hour != -1 ) {
            temp = new StringBuffer();
            temp.append(hour);
            if ( minute != -1 ) {
                temp.append(':');
                temp.append(minute);
                if ( second != -1 ) {
                    temp.append(':');
                    temp.append(second);
                }
            }
            json.put("t", temp.toString()); // t for Time
        }
        if ( zoneChar != 'w' ) {
            json.put("z", Character.toString(zoneChar));  // z for Zonechar
        }

        return json;
    }

    /* (non-Javadoc)
     * @see java.lang.Object#clone()
     */
    public RelativeDate clone()
    {
        RelativeDate ret = new RelativeDate();
        ret.dayOfMonth = dayOfMonth;
        ret.dayOfWeek = dayOfWeek;
        ret.hour = hour;
        ret.minute = minute;
        ret.month = month;
        ret.rule = rule;
        ret.second = second;
        ret.year = year;
        ret.zoneChar = zoneChar;
        return ret;
    }
}
