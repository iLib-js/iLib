/**
 * AreaCodeTableMaker.java - create state tables for the phone number parser 
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
package com.ilib.tools.table;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * @author edwin hoogerbeets
 *
 */
public class AreaCodeTableMaker {
	protected static Logger logger = null;
	protected static HashMap<String, FixedArray> table = new HashMap<String, FixedArray>();
	
	protected static int current = 0;
	protected static ArrayList<String> stateMap = new ArrayList<String>();
	protected static HashMap<String, Integer> reverseStateMap = new HashMap<String, Integer>();
	
	protected static ArrayList<String> finalStates = new ArrayList<String>();
	protected static HashMap<String, Integer> reverseFinalStates = new HashMap<String, Integer>();
	
	protected static final int inputChars = 15;
	
	protected static JSONObject areaCodeTable = new JSONObject();
	protected static boolean generateGeoTable = false;
	protected static ArrayList<String> stringsToLocalize = new ArrayList<String>();
	
	protected static void initStates()
	{
		// These states must match the states in format_phonenumber.js, object phone.states
		// If you are adding a new state, put it at the end of this list so as not to break
		// existing tables.
		finalStates.add("none"); 		// 0  should never be used. If it is used, there is something wrong.
		finalStates.add("unknown");		// -1
		finalStates.add("plus");		// -2 plus (also introduces IDD)
		finalStates.add("idd");			// -3 international direct dialing
		finalStates.add("cic");			// -4 carrier identification code
		finalStates.add("service");		// -5 service number (like 1-800 in the US)
		finalStates.add("cell");		// -6 mobile phone prefix
		finalStates.add("area");		// -7 area code
		finalStates.add("vsc");			// -8 vertical service code
		finalStates.add("country");		// -9 country code
		finalStates.add("personal");	// -10 personal redirect numbers prefix
		finalStates.add("special");		// -11  == when there is a node that is also a leaf. For GB area codes, which are wierd.
		finalStates.add("trunk");		// -12 trunk access code
		finalStates.add("premium");		// -13 for-pay services
		finalStates.add("emergency");	// -14 emergency numbers like "911" in the US
		finalStates.add("service2");	// -15 different types of service numbers
		finalStates.add("service3");	// -16 different types of service numbers
		finalStates.add("service4");	// -17 different types of service numbers
		finalStates.add("cic2");		// -18 different types of cic numbers
		finalStates.add("cic3");		// -19 different types of cic numbers
		finalStates.add("start");		// -20 null state representing the beginning of a number
		finalStates.add("local");		// -21 this number is a local subscriber number
		
		for ( int i = 0; i < finalStates.size(); i++ ) {
			reverseFinalStates.put(finalStates.get(i), new Integer(-i - 1));
		}
	}
	/**
	 * Return the index into a transitions table for a given character.
	 * If the character is not a valid phone number char, returns -1.
	 * 
	 * @param ch
	 * @return index of passed character
	 */
	protected static int getIndex(char ch)
	{
		if ( ch >= '0' && ch <= '9' ) {
			return (int) ch - '0';
		}
		switch ( ch ) {
		case '+':
			return 10;
		case '*':
			return 11;
		case '#':
			return 12;
		case '^':
			return 13;
		case '.':
			return 14;
		}
		return -1;
	}
	
	/**
	 * Return the index into the state table of the given 
	 * state name.
	 * 
	 * @param name
	 * @return state of name
	 */
	protected static Integer getState(String name)
	{
		Integer i = reverseStateMap.get(name);
		if ( i == null ) {
			stateMap.add(current, name);
			i = new Integer(current);
			reverseStateMap.put(name, i);
			current++;
		}
		
		return i;
	}

	/**
	 * Return the numerical number identifying the given 
	 * final state in a transitions table.
	 * 
	 * @param name
	 * @return final state of name
	 */
	protected static Integer getFinalState(String name)
	{
		if ( reverseFinalStates.containsKey(name) ) {
			return reverseFinalStates.get(name);
		} else {
			return reverseFinalStates.get("none");
		}
	}

	/**
	 * Return the transitions table for the given state. The
	 * state is a partial prefix of the phone number.
	 * 
	 * @param state
	 * @return transitions for current state
	 */
	protected static FixedArray getTransitions(String state)
	{
		FixedArray transitions = table.get(state);
		if ( transitions == null ) {
			int stateNone = getFinalState("none");
			transitions = new FixedArray(inputChars);
			table.put(state, transitions);
			transitions.fill(stateNone);
		}
		return transitions;
	}
	
	/**
	 * Each line should be of the form:
	 * 
	 * number final_state \n
	 * 
	 * Each line is parsed into the number and the final state. From
	 * the number, a states table is built up as a set of transition
	 * tables. A transition
	 * table specifies that given a particular prefix and a new 
	 * character to add to the end of the prefix, here is the next
	 * state to go to next. A number on the line is parsed for
	 * progressive prefixes and next chars until the whole number
	 * is used up. At that point, the transition table gets an entry
	 * for the given final state.
	 * 
	 * Example:
	 * 
	 * line is "4321 area"
	 * 
	 * First round: state "begin", next char "4" -> goes to the 
	 * table for the prefix "4"
	 * 
	 * Second round: state is "4", next char "3" -> goes to the
	 * table for the prefix "43"
	 * 
	 * Third round: state is "43", next char "2" -> goes to the
	 * table for the prefix "432"
	 * 
	 * Fourth round: state is "432", next char "1" -> last char,
	 * so the entry for "1" in the transitions table for state 
	 * "432" is given the numerical code for final state "area"(-7)
	 * 
	 * @param line
	 */
	protected static void processLine(String line)
	{
		line = line.trim();
		if ( line.length() == 0 || line.charAt(0) == '/' ) {
			// empty or comment line, ignore
			return;
		}
		
		// get rid of Unicode BOM
		if ( line.charAt(0) == 0xFEFF || line.charAt(0) == 0xFFFE ) {
			line = line.substring(1);
		}
		
		String parts[] = line.split("\t");
		
		if ( parts.length < 2 ) {
			// ignore blanks lines and lines with insufficient data
			return;
		}

		String stateName = "begin";
		String prefix = parts[0];
		String finalStateName = parts[1];
		Integer newState;
		String newStateName;
		FixedArray transitions;
		int i;
		char ch;
		int index;
		int noneState = getFinalState("none").intValue();

		if ( finalStateName.equals("area") || finalStateName.equals("special") || generateGeoTable ) {
			if ( parts.length > 3 ) {
				String areaCode = (prefix.charAt(0) == '0') ? prefix.substring(1) : prefix;
				try {
					JSONObject entry = new JSONObject();
					entry.put("sn", parts[2]);
					entry.put("ln", parts[3]);
					areaCodeTable.put(areaCode, entry);
				} catch (JSONException e) {
					// should never happen
					e.printStackTrace();
				}	
				// record the name of the area code
				stringsToLocalize.add(parts[2]);
				if ( !parts[2].equalsIgnoreCase(parts[3]) ) {
					stringsToLocalize.add(parts[3]);
				}
				logger.trace("Adding area code " + areaCode + " " + parts[2] + " " + parts[3]);
			} else {
				logger.warn("entry " + prefix + " does not have enough fields to add to the area code table.");
			}
		}
		
		for ( i = 0; i < prefix.length()-1; i++ ) {
			transitions = getTransitions(stateName);
			
			newStateName = prefix.substring(0, i+1);
			ch = prefix.charAt(i);
			index = getIndex(ch);
			
			if ( index >= 0 ) {
				newState = null;
				newState = transitions.get(index);
				if ( newState == noneState ) {
					newState = getState(newStateName);
					transitions.put(index, newState.intValue());
				} else if ( newState.intValue() < noneState ) {
					logger.error("Error: state " + newStateName + " is already final, but prefix " + prefix + " needs to extend it.");
				}
				stateName = newStateName;
			} else {
				logger.error("Error: unknown character '" + ch + "' (" + (int)ch + ")");
			}
		}
		
		// process the last character specially to take care of the end state
		i = prefix.length()-1;
		transitions = getTransitions(stateName);
		
		ch = prefix.charAt(i);
		index = getIndex(ch);
		if ( index >= 0 ) {
			newState = transitions.get(index);
			if ( newState == noneState ) {
				int finalStateNumber = getFinalState(finalStateName);
				transitions.put(index, finalStateNumber);
			} else if ( newState.intValue() < noneState ) {
				logger.error("Error: state " + prefix + " is already final, but there is another line that duplicates it.");
				logger.error("Duplicate line is: " + line);
			}
		} else {
			logger.error("Error: unknown last character '" + ch + "' (" + (int)ch + ")");
		}
	}
	
	/**
	 * Write out a state table in javascript format.
	 * 
	 * @param out
	 * @param name
	 */
	protected static void writeOutput(PrintStream out, String name)
	{
		FixedArray transitions;
		String stateName;
		JSONObject wrapper = new JSONObject();
		JSONArray stateTable = new JSONArray();
		JSONArray array;
		try {
    		for ( int i = 0; i < stateMap.size(); i++ ) {
    			stateName = stateMap.get(i);
    			transitions = getTransitions(stateName);
    			array = new JSONArray();
    			for ( int j = 0; j < transitions.size(); j++ ) {
    				array.put(transitions.get(j));
    			}
    			stateTable.put(array);
    		}
		    wrapper.put("states", stateTable);
	    
		    out.print(wrapper.toString(4));
	        out.print("\n");
		} catch ( JSONException e ) {
            e.printStackTrace();
        }
	}
	
	protected static void usage()
	{
		System.err.println("Usage: tablemaker [-t] prefix_file_name [ output_file_name ]\n\n");
		System.err.println("Create a finite state machine table for use with the phone number area code prefix parser.\n\n");
		System.err.println("-t                 - generate a geographic json table even for non-area code files");
		System.err.println("prefix_file_name   - name of the text file containing the prefixes to make a table for.");
		System.err.println("output_file_name   - optional name of output file. If not specified, uses stdout.");
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Date start = new Date();
		System.out.println("iLib Phone Number Prefix table maker\nCopyright (c) 2014 JEDLSoft. All Rights Reserved.");
		logger = LogManager.getLogger(AreaCodeTableMaker.class);

		int arg = 0;
		BufferedReader fis = null;
		PrintStream fos = null;
		String fileName;
		String tableName;
		
		try{
			if ( args.length < 1 || args[0].equalsIgnoreCase("-h") || args[0].equalsIgnoreCase("--help") || args[0].equalsIgnoreCase("-?") ) {
				usage();
				return;
			}
			
			if ( args[arg].equalsIgnoreCase("-t") ) {
				generateGeoTable = true;
				arg++;
			}
			
			if ( arg < args.length ) {
				fileName = args[arg++];
			} else {
				System.err.println("Error: missing input file name.");
				usage();
				return;
			}
		
			tableName = FileUtils.getBaseName(fileName);
			fis = new BufferedReader(new InputStreamReader(new FileInputStream(fileName), "utf-8"));
			
			if ( arg < args.length ) {
				fos = new PrintStream(args[arg]);
			} else {
				fos = System.out;
			}
			
			String line;
			
			// initialize
			getState("begin");		// state that starts everything off
			initStates();
			
			while ( (line = fis.readLine()) != null ) {
				processLine(line);
			}
			
			fis.close();
			fis = null;
			
			writeOutput(fos, tableName);
			
			if ( areaCodeTable.length() > 0 ) {
			    System.out.println("areaCodeTable.length() is " + areaCodeTable.length());
				// now write out the area code name table
				if ( arg < args.length ) {
					fos = new PrintStream(tableName + ".area.json");
				} else {
					fos = System.out;
				}
				
				String json = areaCodeTable.toString(4) + "\n";
				byte[] b = json.getBytes("utf-8");
				fos.write(b);
				fos.close();
				
				if ( stringsToLocalize.size() > 0 ) {
					fos = new PrintStream(tableName + ".strings.js");
					
					for ( int i = 0; i < stringsToLocalize.size(); i++ ) {
						line = "rb.getString(\"" + stringsToLocalize.get(i) + "\");\n"; 
						b = line.getBytes("utf-8");
						fos.write(b);
					}
					fos.close();
				}
			}
		} catch (Exception e) {
			logger.error(e.getLocalizedMessage());
			e.printStackTrace();
			System.exit(2);
		} finally {
			if ( fis != null ) {
				try {
					fis.close();
				} catch ( Exception e ) {}
			}
			if ( fos != null ) {
				try {
					fos.close();
				} catch ( Exception e ) {}
			}
			Date end = new Date();
			long elapsed = end.getTime() - start.getTime();
			if (elapsed < 2000) {
				System.out.println("Done. Elapsed time: " + elapsed + " ms.");
			} else {
				elapsed = (elapsed > 0) ? (elapsed + 500) / 1000 : 0; 
				System.out.println("Done. Elapsed time: " + elapsed + " seconds.");
			}
		}
	}
}
