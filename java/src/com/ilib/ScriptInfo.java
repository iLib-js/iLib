package com.ilib;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Scanner;

import org.json.JSONException;
import org.json.JSONObject;

public class ScriptInfo {
	private static Map<String, String> locales = null;
	private static final String DEFAULT_SCRIPT = "Latn";
	private static final String DASH = "-";

	static {
		initLocales();
	}

	protected static void initLocales() {
		if (locales != null) return;

		File inputFile = new File("js/data/locale/likelylocales.json");
    	if (!inputFile.exists()) return;
    	
    	String result = null;
		try {
			Scanner scanner = new Scanner(new FileInputStream(inputFile), "utf-8");
			result = scanner.useDelimiter("\\A").next();
	        scanner.close();
		} catch (FileNotFoundException e1) {
			System.err.println("Exception in file: " + inputFile.getPath() + ", file is missing or not existed.");
			return;
		}

		locales = new HashMap<>();
		try {
			JSONObject pseudoJSON = new JSONObject(result);
			if ( pseudoJSON != null ) {
	            Iterator<String> it = pseudoJSON.keys();
	            String p;

	            while ( it.hasNext() ) {
	                p = it.next();
	                locales.put(p, pseudoJSON.getString(p));
	            }
	        }
		} catch (JSONException e) {
			e.printStackTrace();
		}
	}

	/**
	 * Seeks for full locale name in locales map and returns script of target locale,
	 * otherwise - default script Latn
	 * @param target locale in BCP 47 format
	 * @return native script for given locale and default script Latn if locale is not detected
	 */
	public static String getScriptByLocale(IlibLocale target) {
		if (locales != null && !locales.isEmpty()) {
			IlibLocale extractedLocale = null;
			final String language = target.getLanguage();
			final String region = target.getRegion();
			final String langRegion = target.getLanguage() + DASH + target.getRegion();

			if ( locales.containsKey(language) ) {
				extractedLocale = new IlibLocale( locales.get(language) );
				return extractedLocale.getScript();
			} else if ( locales.containsKey(region) ) {
				extractedLocale = new IlibLocale( locales.get(region) );
				return extractedLocale.getScript();
			} else if ( locales.containsKey(langRegion) ) {
				extractedLocale = new IlibLocale( locales.get(langRegion) );
				return extractedLocale.getScript();
			}
		}

		return DEFAULT_SCRIPT;
	}
}
