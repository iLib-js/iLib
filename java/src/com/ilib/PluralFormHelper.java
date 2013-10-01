package com.ilib;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class PluralFormHelper {
	public static final File root = new File("js/data/locale");
	public static final File pluralsJSON = new File("plurals.json");
	protected static final Pattern commandParser = Pattern.compile("(\\w*)(\\(([^(]+?)\\))");
	protected static final String VALUE_REPLACER = "(?<=[^\\w\\\\])n(?=(,|\\)))";

	private static final String TRUE_VALUE = "true";
	private static final String OTHER_PLURAL = "other";
	private static final String COMMA = ",";
	private static final String ENCODING = "utf-8";
	private static final String EMPTY = "";

	public static final class PluralRule {
		static final String OPENED_BRACKET = "(";
		static final String CLOSED_BRACKET = ")";

		String functionName = null;
		PluralRule[] inheritors;

		public PluralRule() {
			functionName = EMPTY;
		}

		public PluralRule(String name) {
			this.functionName = name;
		}

		public void addAncestors(int number) {
			inheritors = new PluralRule[number];
			for (int i = 0; i < inheritors.length; ++i)
				inheritors[i] = new PluralRule();
		}

		public boolean hasAncestors() {
			return (inheritors != null) ? (inheritors.length > 0) : false;
		}

		public String toString() {
			StringBuilder builder = new StringBuilder();
			builder.append(functionName);

			if (hasAncestors()) {
				if (!functionName.isEmpty()) builder.append(OPENED_BRACKET);
				for (int i = 0; i < inheritors.length; i++) {
					builder.append(inheritors[i].toString());
					if (i < inheritors.length - 1) builder.append(COMMA);
				}
				if (!functionName.isEmpty()) builder.append(CLOSED_BRACKET);
			}

			return builder.toString();
		}
	}

	/**
	 * 
	 * @param file
	 * @return
	 */
	public static Map<String, String> getPluralForms(File file) {
		StringBuilder builder = new StringBuilder();

		try (BufferedReader reader = new BufferedReader(
				new InputStreamReader(new FileInputStream(file), ENCODING)); ) {
			String currentLine = null;
			while ( (currentLine = reader.readLine()) != null ) {
				builder.append(currentLine);
			}
		} catch (FileNotFoundException e) {
			System.err.println("File not found: " + file.getPath());
			return null;
		} catch (IOException e) {
			e.printStackTrace();
			return null;
		}

		Map<String, String> pluralForms = new HashMap<>();

		if ( builder.length() > 0 ) {
			try {
				JSONObject jsonObject = new JSONObject(builder.toString());
				Iterator<String> it = jsonObject.keys();
	            String key;

	            while ( it.hasNext() ) {
	            	key = it.next();
					PluralRule call = new PluralRule();
					scanJsonParts(jsonObject.get(key), call);
					pluralForms.put(key, call.toString());
	            }
			} catch (JSONException e) {
				e.printStackTrace();
			}
		}

		return pluralForms;
	}

	/**
	 * 
	 * @param value
	 * @param plurals
	 * @return
	 */
	public static <K> String getPluralKey(int value, Map<String, K> plurals) {
		String resultPlural = OTHER_PLURAL;
		StringBuilder builder = new StringBuilder();

		if ( !plurals.isEmpty() ) {
			for (String callItem : plurals.keySet()) {
				builder.setLength(0);
				builder.append(plurals.get(callItem).toString().replaceAll(VALUE_REPLACER, String.valueOf(value)));

				matchPluralForm(builder);
				if ( (builder.toString()).equals(TRUE_VALUE) ) {
					return callItem;
				}
			}
		}

		return resultPlural;
	}

	protected static void scanJsonParts(Object jsonPart, PluralRule call) throws JSONException {
		if (jsonPart != null && !jsonPart.toString().isEmpty()) {
			
			if (jsonPart instanceof JSONObject) {

	            if (((JSONObject)jsonPart).length() > 0) {
	            	JSONObject castToJSONObject = ((JSONObject)jsonPart);
	            	call.addAncestors(castToJSONObject.length());
	            	Iterator<String> it = ((JSONObject)jsonPart).keys();
		            String key;
		            int k = 0;

		            while ( it.hasNext() ) {
		            	key = it.next();
						Object jsonValue = null;

						try {
							jsonValue = castToJSONObject.get(key);
							call.inheritors[k].functionName = key;
							scanJsonParts(jsonValue, call.inheritors[k]);
						} catch (JSONException e) {
							e.printStackTrace();
						}
						++k;
		            }
	            }
			}
			else if (jsonPart instanceof JSONArray) {

	            if (((JSONArray)jsonPart).length() > 0) {
	            	call.addAncestors(((JSONArray)jsonPart).length());

	            	for (int i = 0; i < ((JSONArray)jsonPart).length(); i++) {
	            		try {
							Object item = ((JSONArray)jsonPart).get(i);
							
							if (item instanceof JSONObject || item instanceof JSONArray) {
								scanJsonParts(item, call.inheritors[i]);
							}
							else {
								if (item instanceof Integer || item instanceof String) {
									call.inheritors[i].functionName = item.toString();
								} else
									System.err.println(" wrong item: " + item);
							}
						} catch (JSONException e) {
							e.printStackTrace();
						}
	            	}

	            }
			}
			else {
				throw new JSONException("Undefined json item found:  " + jsonPart);
			}
		}
		
	}

	protected static void matchPluralForm(StringBuilder builder) {
		String command = builder.toString();

		Matcher matcher = commandParser.matcher(command);
		boolean matchesFound = false;

		while (matcher.find()) {
			final String replacement = matcher.group(0);
			String result = invokeFunction(matcher.group(1), matcher.group(3).split(COMMA));
			command = command.replace(replacement, result);
			matchesFound = true;
		}

		builder.setLength(0);
		builder.append(command);
		if (matchesFound) matchPluralForm(builder);
	}

	protected static String invokeFunction(String methodName, String[] params) {
		String result = EMPTY;

		switch (methodName) {
			case "and":
				if (params.length == 2)
					result = String.valueOf( Boolean.valueOf(params[0]) && Boolean.valueOf(params[1]) );
				break;
			case "or":
				if (params.length == 2)
					result = String.valueOf( Boolean.valueOf(params[0]) || Boolean.valueOf(params[1]) );
				break;
			case "is":
				if (params.length == 2)
					result = String.valueOf( Integer.valueOf(params[0]) == Integer.valueOf(params[1]) );
				break;
			case "isnot":
				if (params.length == 2)
					result = String.valueOf( Integer.valueOf(params[0]) != Integer.valueOf(params[1]) );
				break;
			case "inrange":
				if (params.length == 3)
					result = String.valueOf( inrange(Integer.valueOf(params[0]), Integer.valueOf(params[1]), Integer.valueOf(params[2])) );
				break;
			case "notin":
				if (params.length == 3)
					result = String.valueOf( notin(Integer.valueOf(params[0]), Integer.valueOf(params[1]), Integer.valueOf(params[2])) );
				break;
			case "mod":
				if (params.length == 2)
					result = String.valueOf( Integer.valueOf(params[0]) % Integer.valueOf(params[1]) );
				break;
			case "within":
				if (params.length == 3)
					result = String.valueOf( inrange(Integer.valueOf(params[0]), Integer.valueOf(params[1]), Integer.valueOf(params[2])) );
				break;
			default:
				break;
		}

		return result;
	}

	protected static boolean inrange(int actual, int leftRange, int rightRange) {
		return (actual >= leftRange && actual <= rightRange);
	}

	protected static boolean notin(int actual, int leftRange, int rightRange) {
		return !inrange(actual, leftRange, rightRange);
	}
}