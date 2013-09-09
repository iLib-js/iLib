/**
 * IString.java - international string 
 * 
 * Copyright 2013, JEDLSoft, All Rights Reserved.
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
 * 
 * Created on Jan 4, 2013 by edwin
 */
package com.ilib;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * Represents an international string. This type of string allows for a 
 * formatting syntax very similar to the javascript ilib syntax, so that
 * strings can be shared between code in java or javascript.
 * 
 * @author edwin
 */
/**
 * IString
 * 
 * @author edwin
 */
public class IString
{
    protected String text;
    protected ArrayList<String> selectors = null;
    protected ArrayList<String> strings = null;
    protected String defaultChoice = null;
    protected ArrayList<Pattern> patterns = null;
    
    /**
     * Construct a new IString instance with the given text.
     * 
     * @param text the text to wrap
     */
    public IString(String text)
    {
        this.text = text;
    }
    
    /**
     * Format a string with the given named values.
     * 
     * The string can contain any text that a regular Java string can
     * contain. Replacement parameters have the syntax:
     * 
     * <pre>
     * {name}
     * </pre>
     * 
     * Where "name" can be any string surrounded by curly brackets. The value of 
     * "name" is taken from the values argument.<p>
     * 
     * Example:
     * 
     * <pre>
     * int numObjects = 12;
     * IString str = new IString("There are {num} objects.");
     * HashMap<String,String> values = new HashMap<String,String>();
     * values.put("num", Integer.toString(numObjects));  
     * System.out.println(str.format(values));
     * </pre>
     * 
     * Would give the output:
     * 
     * <pre>
     * There are 12 objects.
     * </pre>
     * 
     * If a property is missing from the value map, the replacement
     * parameter substring is left untouched in the string, and a different
     * set of parameters may be applied a second time. This way, different
     * parts of the code may format different parts of the message that they
     * happen to know about.<p>
     * 
     * Example:
     * 
     * <pre>
     * int numObjects = 12;
     * IString str = new IString("There are {num} objects in the {container}.");
     * HashMap<String,String> values = new HashMap<String,String>();
     * values.put("num", Integer.toString(numObjects));  
     * System.out.println(str.format(values));
     * </pre>
     * 
     * Would give the output:<p>
     * 
     * <pre>
     * There are 12 objects in the {container}.
     * </pre>
     * 
     * The result can then be formatted again with a different value map that
     * specifies a value for the "container" property.
     * 
     * @param values a set of named values
     * @return the string with as many replacement parameters
     * replaced with named values as possible
     */
    public String format(Map<String,String> values)
    {
        String formatted = this.text;
        if ( values != null ) {
            for ( String p: values.keySet() ) {
                formatted = formatted.replaceAll("\\{"+p+"}",  java.util.regex.Matcher.quoteReplacement(values.get(p)));                
            }
        }
        return formatted.toString();
    }

    /**
     * This is the same as {@link IString#format(Map)} except the replacement 
     * values come from a JSON object instead of a map.
     * 
     * @param values a set of named values in a JSON object
     * @return the string with as many replacement parameters
     * replaced with named values as possible
     */
    public String format(JSONObject values)
    {
        String formatted = this.text;
        if ( values != null ) {
            Iterator<String> it = values.keys();
            String p;
            while ( it.hasNext() ) {
                p = it.next();
                try {
                    formatted = formatted.replaceAll("\\{"+p+"}",  java.util.regex.Matcher.quoteReplacement(values.getString(p)));
                } catch ( JSONException e ) {
                    // ignore
                }                
            }
        }
        return formatted.toString();
    }

    protected void parseChoices()
        throws ParseException
    {
        String[] choices = text.split("\\|");
        int i;
        String[] parts;
        String str;
        
        strings = new ArrayList<String>();
        selectors = new ArrayList<String>();
        defaultChoice = "";
        
        for ( i = 0; i < choices.length; i++ ) {    
            parts = choices[i].split("#");
            if ( parts.length > 2 ) {
                str = choices[i].substring(choices[i].indexOf('#')+1);
            } else if ( parts.length == 2 ) {
                str = parts[1];
            } else {
                // syntax error
                throw new ParseException("syntax error in choice format pattern: " + choices[i], i);
            }     

            selectors.add(parts[0]);
            strings.add(str);
            
            if ( parts[0].length() == 0 ) {
                defaultChoice = str;
            }
        }
    }

    protected int getBooleanSelector(String selector)
    {
        if ( selector.equalsIgnoreCase("true") ||
            selector.equalsIgnoreCase("yes") ||
            selector.equalsIgnoreCase("on") ||
            selector.equalsIgnoreCase("1") ) {
            return 1;
        } else if ( selector.equalsIgnoreCase("false") ||
                selector.equalsIgnoreCase("no") ||
                selector.equalsIgnoreCase("off") ||
                selector.equalsIgnoreCase("0") ) {
            return 0;
        } 
        return -1;
    }
    
    protected IString getChoice(boolean reference)
        throws ParseException
    {
        if ( text == null || text.length() == 0 ) {
            return null;
        }
        
        int i;
        IString result = null;
        String selector;

        if ( strings == null ) {
            parseChoices();
        }

        for ( i = 0; i < selectors.size(); i++ ) {
            selector = selectors.get(i);
            int value = getBooleanSelector(selector);
            if ( value == 1 ) {
                if ( reference ) {
                    return new IString(strings.get(i));
                }
            } else if ( value == 0 ) {
                if ( !reference ) {
                    return new IString(strings.get(i));
                }
            }
        }

        if ( result == null ) {    
            result = new IString(defaultChoice);
        }

        return result;
    }

    protected IString getChoice(String reference)
        throws ParseException
    {
        if ( text == null || text.length() == 0 ) {
            return null;
        }
        
        int i;
        IString result = null;
        String selector;
        Pattern p;
        Matcher m;
        
        if ( strings == null ) {
            parseChoices();
        }

        if ( patterns == null ) {
            patterns = new ArrayList<Pattern>();
            for (i = 0; i < selectors.size(); i++) {
                selector = selectors.get(i);
                patterns.add((selector != null && selector.length() > 0) ? Pattern.compile(selector, Pattern.CASE_INSENSITIVE | Pattern.UNICODE_CASE) : null);
            }
        }

        for ( i = 0; i < patterns.size(); i++ ) {
            p = patterns.get(i);
            if ( p != null ) {
                m = p.matcher(reference);
                if ( m.matches() ) {
                    return new IString(strings.get(i));
                }
            }
        }

        if ( result == null ) {    
            result = new IString(defaultChoice);
        }

        return result;
    }

    protected IString getChoice(double reference)
        throws ParseException
    {
        if ( text == null || text.length() == 0 ) {
            return null;
        }
        
        int i;
        IString result = null;
        double selector;
        String sel;

        if ( strings == null ) {
            parseChoices();
        }

        for (i = 0; i < selectors.size(); i++) {
            sel = selectors.get(i);
            if ( sel.length() > 2 && sel.substring(0,2).equals("<=") ) {                 
                selector = Double.parseDouble(sel.substring(2));
                if (reference <= selector) {
                    result = new IString(strings.get(i));
                    i = selectors.size();
                }
            } else if ( sel.length() > 2 && sel.substring(0,2).equals(">=") ) {                
                selector = Double.parseDouble(sel.substring(2));
                if (reference >= selector) {
                    result = new IString(strings.get(i));
                    i = selectors.size();
                }
            } else if ( sel.length() > 1 && sel.charAt(0) == '<' ) {             
                selector = Double.parseDouble(sel.substring(1));
                if (reference < selector) {
                    result = new IString(strings.get(i));
                    i = selectors.size();
                }
            } else if ( sel.length() > 1 && sel.charAt(0) == '>' ) {                
                selector = Double.parseDouble(sel.substring(1));
                if (reference > selector) {
                    result = new IString(strings.get(i));
                    i = selectors.size();
                }
            } else if ( sel.length() > 0 ) {
                int value, dash = sel.indexOf("-");
                if ( dash != -1 ) {                     
                    // range
                    String start = sel.substring(0, dash);
                    String end = sel.substring(dash+1);                   
                    if (reference >= Long.parseLong(start, 10) && reference <= Long.parseLong(end, 10)) {                       
                        result = new IString(strings.get(i));
                        i = selectors.size();
                    }
                } else if ( (value = getBooleanSelector(sel)) > -1 ) {
                    if ( value == reference ) {
                        result = new IString(strings.get(i));
                        i = selectors.size();
                    }
                } else if ( reference == Long.parseLong(sel, 10) ) {                     
                    // exact amount
                    result = new IString(strings.get(i));
                    i = selectors.size();
                }
            }
        }

        if ( result == null ) {    
            result = new IString(defaultChoice);
        }

        return result;
    }
    
    /**
     * Format a string as one of a choice of strings dependent on the value of
     * a particular reference argument.<p>
     * 
     * The syntax of the choice string is as follows. The string contains a
     * series of choices separated by a vertical bar character "|". Each choice
     * has a selector, which is a value or range of values to match and an optional
     * operator, followed by a hash character "#", followed by the string to use if 
     * the reference argument matches the criteria.<p>
     * 
     * Example string:
     * 
     * <pre>
     * int num = 2;
     * IString str = new IString("0#There are no objects.|1#There is one object.|2#There are {number} objects.");
     * HashMap<String,String> values = new HashMap<String,String>();
     * values.put("number", Integer.toString(num));  
     * System.out.println(str.formatChoice(num, values));
     * </pre>
     * 
     * Gives the output:
     * 
     * <pre>
     * "There are 2 objects."
     * </pre>
     * 
     * The strings to format may contain replacement variables that will be formatted
     * using the {@link IString#format(Map)} method and the values argument as a source of values
     * to use while formatting those variables.<p>
     * 
     * If the selector for a particular choice is empty, that choice will be used
     * as the default one for use when none of the other choice's criteria match.<p>
     * 
     * Example string:
     * 
     * <pre>
     * int num = 22;
     * IString str = new IString("0#There are no objects.|1#There is one object.|#There are {number} objects.");
     * HashMap<String,String> values = new HashMap<String,String>();
     * values.put("number", Integer.toString(num));  
     * System.out.println(str.formatChoice(num, values));
     * </pre>
     * 
     * Gives the output:
     * 
     * <pre>
     * "There are 22 objects."
     * </pre>
     * 
     * If multiple selectors can match a given reference argument, the first one 
     * encountered in the string will be used. If no selectors match the 
     * reference argument, then the default choice will be used. If there is no default
     * choice defined, then this method will return an empty string.<p>
     * 
     * <b>Special Syntax</b><p>
     * 
     * For any choice format string, all of the selectors in the string should be of
     * the same type. The available types are: numeric, boolean, or string/regexp. The type 
     * of the selectors is determined by the type of the reference argument.<p>
     * 
     * If the reference argument is numeric, then some special operator syntax can be used 
     * in the selectors to match numeric ranges.<p>
     * 
     * <ul>
     * <li><i>&gt;x</i> - match any number that is greater than x 
     * <li><i>&gt;=x</i> - match any number that is greater than or equal to x
     * <li><i>&lt;x</i> - match any number that is less than x
     * <li><i>&lt;=x</i> - match any number that is less than or equal to x
     * <li><i>start-end</i> - match any number in the range [start,end)
     * </ul>
     * 
     * If the type of the reference argument is boolean, the strings "true", "on", "yes", "1", or 
     * "false", "off", "no", or "0" (without the quotes) may appear as the selectors.<p>
     * 
     * If the type of the reference argument is string, then the selectors may contain
     * regular expressions, or just regular strings as if they were degenerate regexps. 
     * 
     * @param reference The reference value used to select the choice to use in the choice array
     * @param values The map of parameter values that replace the replacement 
     * variables in the string
     * @return the formatted string
     */
    public String formatChoice(double reference, Map<String,String> values)
        throws ParseException
    {
        IString result = getChoice(reference);
        if ( result == null ) {
            return "";
        }
        return values != null ? result.format(values) : result.toString();
    }

    /**
     * This is the same as {@link IString#formatChoice(double, Map)} except that the
     * named replacement values come from a JSON object instead of a map.
     *  
     * @see com.jedlsoft.utils.IString#formatChoice(double, Map)
     * @param reference The reference value used to select the choice to use in the choice array
     * @param values The JSON object containing parameter values that replace the 
     * replacement variables in the string
     * @return the formatted string
     */
    public String formatChoice(double reference, JSONObject values)
        throws ParseException
    {
        IString result = getChoice(reference);
        if ( result == null ) {
            return "";
        }
        return values != null ? result.format(values) : result.toString();
    }

    /**
     * This is the same as {@link com.jedlsoft.utils.IString#formatChoice(double, Map)}
     * except that the type of the reference argument is boolean. In this case, the
     * strings "true", "on", "yes", "1", or "false", "off", "no", or "0" (without the 
     * quotes) may appear as the selectors. If a choice string with boolean selectors is 
     * formatted with a numeric argument index instead, then the value of "false" is 
     * taken to be 0, and the value of true is taken to be 1.
     * 
     * @see com.jedlsoft.utils.IString#formatChoice(double, Map)
     * @param reference The reference value used to select the choice to use in the choice array
     * @param values The map of parameter values that replace the replacement 
     * variables in the string
     * @return the formatted string
     */
    public String formatChoice(boolean reference, Map<String,String> values)
        throws ParseException
    {
        IString result = getChoice(reference);
        if ( result == null ) {
            return "";
        }
        return values != null ? result.format(values) : result.toString();
    }

    /**
     * This is the same as {@link IString#formatChoice(boolean, Map)} except that the
     * named replacement values come from a JSON object instead of a map.
     *  
     * @see com.jedlsoft.utils.IString#formatChoice(double, Map)
     * @param reference The reference value used to select the choice to use in the choice array
     * @param values The JSON object containing parameter values that replace the 
     * replacement variables in the string
     * @return the formatted string
     */
    public String formatChoice(boolean reference, JSONObject values)
        throws ParseException
    {
        IString result = getChoice(reference);
        if ( result == null ) {
            return "";
        }
        return values != null ? result.format(values) : result.toString();
    }

    /**
     * This is the same as {@link com.jedlsoft.utils.IString#formatChoice(double, Map)}
     * except that the type of the reference argument is a string which is matched
     * against the regular expressions selectors in the choice string.
     * A choice is selected if the regular expression
     * matches the reference argument. The first choice that has its regexp match
     * the reference argument is the one that is selected. Remember to escape
     * any "#" or "|" characters in the regular expression so that they do not
     * conflict with the syntax of the choice format string.
     * 
     * @see com.jedlsoft.utils.IString#formatChoice(double, Map)
     * @param reference The reference value used to select the choice to use in the choice array
     * @param values The map of parameter values that replace the replacement 
     * variables in the string
     * @return the formatted string
     */
    public String formatChoice(String reference, Map<String,String> values)
        throws ParseException
    {
        IString result = getChoice(reference);
        if ( result == null ) {
            return "";
        }
        return values != null ? result.format(values) : result.toString();
    }
    
    /**
     * This is the same as {@link IString#formatChoice(String, Map)} except that the
     * named replacement values come from a JSON object instead of a map.
     *  
     * @see com.jedlsoft.utils.IString#formatChoice(double, Map)
     * @param reference The reference value used to select the choice to use in the choice array
     * @param values The JSON object containing parameter values that replace the 
     * replacement variables in the string
     * @return the formatted string
     */
    public String formatChoice(String reference, JSONObject values)
        throws ParseException
    {
        IString result = getChoice(reference);
        if ( result == null ) {
            return "";
        }
        return values != null ? result.format(values) : result.toString();
    }

    /**
     * Return the length of the given string in characters.
     * @return the length of the given string in characters
     */
    public int length()
    {
        return text.length();
    }
    
    /* (non-Javadoc)
     * @see java.lang.Object#toString()
     */
    public String toString()
    {
        return text;
    }
    

    // convenience methods
    
    /**
     * Static convenience method to format choices without an IString instance.
     *  
     * @param message string to format
     * @param reference reference value
     * @param parameters parameters to format into the string
     * @return a formatted string
     * @throws ParseException if the syntax of the choice format is wrong
     */
    public static String formatChoice(String message, long reference, HashMap<String,String> parameters)
       throws ParseException
    {
       return (new IString(message)).formatChoice(new Double(reference), parameters);
    }
    
    /**
     * Static convenience method to format choices without an IString instance.
     *  
     * @param message string to format
     * @param reference reference value
     * @param parameters parameters to format into the string
     * @return a formatted string
     * @throws ParseException if the syntax of the choice format is wrong
     */
    public static String formatChoice(String message, double reference, HashMap<String,String> parameters)
       throws ParseException
    {
       return (new IString(message)).formatChoice(reference, parameters);
    }

    /**
     * Static convenience method to format choices without an IString instance.
     *  
     * @param message string to format
     * @param reference reference value
     * @return a formatted string
     * @throws ParseException if the syntax of the choice format is wrong
     */
    public static String formatChoice(String message, long reference)
       throws ParseException
    {
       return IString.formatChoice(message, reference, null);
    }
    
    /**
     * Static convenience method to format without an IString instance.
     *  
     * @param message string to format
     * @param parameters parameters to format into the string
     * @return a formatted string
     */
    public static String format(String message, HashMap<String,String> parameters)
    {
       return (new IString(message)).format(parameters);
    }

    /**
     * Static convenience method to format choices without an IString instance.
     *  
     * @param message string to format
     * @param reference reference value
     * @return a formatted string
     * @throws ParseException if the syntax of the choice format is wrong
     */
    public static String formatChoice(String message, double reference)
       throws ParseException
    {
       return IString.formatChoice(message, reference, null);
    }
}
