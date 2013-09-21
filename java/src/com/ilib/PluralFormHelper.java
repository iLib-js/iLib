package com.ilib;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
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

	static final Pattern commandParser = Pattern.compile("(\\w*)(\\(([^(]+?)\\))");
	static final String VALUE_REPLACER = "(?<=[^\\w\\\\])n(?=(,|\\)))";
	static final String TRUE_VALUE = "true";
	static final String OTHER_PLURAL = "other";
	static final String COMMA = ",";
	static final String ENCODING = "utf-8";

	public static final class FunctionCallItem {
		static String OPENED_BRACE = "(";
		static String CLOSED_BRACE = ")";

		String functionName = null;
		FunctionCallItem[] inheritors;

		public FunctionCallItem() {
			functionName = "";
		}

		public FunctionCallItem(String name) {
			this.functionName = name;
		}

		public void addAncestors(int number) {
			inheritors = new FunctionCallItem[number];
			for (int i = 0; i < inheritors.length; ++i)
				inheritors[i] = new FunctionCallItem();
		}

		public boolean hasAncestors() {
			return (inheritors != null) ? (inheritors.length > 0) : false;
		}

		public String toString() {
			StringBuilder builder = new StringBuilder();
			builder.append(functionName);

			if (hasAncestors()) {
				if (!functionName.isEmpty()) builder.append(OPENED_BRACE);
				for (int i = 0; i < inheritors.length; i++) {
					builder.append(inheritors[i].toString());
					if (i < inheritors.length - 1) builder.append(COMMA);
				}
				if (!functionName.isEmpty()) builder.append(CLOSED_BRACE);
			}

			return builder.toString();
		}
	}

	public static Map<String, String> getPluralForms(File file) {
		StringBuilder builder = new StringBuilder();

		try (BufferedReader reader = new BufferedReader(
				new InputStreamReader(new FileInputStream(file), ENCODING)); ) {
			String currentLine = null;
			while ( (currentLine = reader.readLine()) != null ) {
				builder.append(currentLine);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}

		Map<String, String> pluralForms = new HashMap<>();

		if ( builder.length() > 0 ) {
			try {
				JSONObject jsonObject = new JSONObject(builder.toString());
				Iterator<String> it = jsonObject.keys();
	            String key;

	            while ( it.hasNext() ) {
	            	key = it.next();
					FunctionCallItem call = new FunctionCallItem();
					scanJsonParts(jsonObject.get(key), call);
					pluralForms.put(key, call.toString());
	            }
			} catch (JSONException e) {
				e.printStackTrace();
			}
		}

		return pluralForms;
	}

	static <K> String getPluralKey(int value, Map<String,K> plurals) {
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

	protected static void scanJsonParts(Object jsonPart, FunctionCallItem call) throws JSONException {
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
							
							if (item instanceof JSONObject) {
								scanJsonParts(item, call.inheritors[i]);
							}
							else if (item instanceof JSONArray) {
								scanJsonParts(item, call.inheritors[i]);
							}
							else {
								if (item instanceof Integer || item instanceof String) {
									call.inheritors[i].functionName = item.toString();
								} else
									System.out.println(" wrong item: " + item);
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
		String result = "";

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
					result = String.valueOf(inrange(Integer.valueOf(params[0]), Integer.valueOf(params[1]), Integer.valueOf(params[2])));
				break;
			case "notin":
				if (params.length == 3)
					result = String.valueOf(notin(Integer.valueOf(params[0]), Integer.valueOf(params[1]), Integer.valueOf(params[2])));
				break;
			case "mod":
				if (params.length == 2)
					result = String.valueOf( Integer.valueOf(params[0]) % Integer.valueOf(params[1]) );
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
