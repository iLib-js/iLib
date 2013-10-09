/**
 * ResBundle.java - An ilib resource bundle 
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
 */
package com.ilib;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * ResBundle
 * 
 * @author edwin
 */
public class ResBundle
{
	protected static final File PSEUDOROOT 					= new File("js/data/locale");
	protected static final String HTML_TYPE 				= "html";
	protected static final String XML_TYPE 					= "xml";
	protected static final String RAW_TYPE 					= "raw";
	protected static final String DEFAULT_RESOURCES			= "resources";
	protected static final String DEFAULT_TEXT_TYPE			= "text";
	protected static final String DEFAULT_RES_FILE			= "strings.json";
	protected static final String PSEUDO_JSON				= "pseudomap.json";
	protected static final String RESOURCES_JSON			= "resources.json";
	protected static Map<String, String> sourceResources 	= null;
	protected static volatile IlibLocale sourceLocale		= new IlibLocale("en-US");

    protected IlibLocale targetLocale;
    protected String name;
    protected String type;
    protected Map<String, String> translations = null;
    protected Map<String, String> pseudoCharacters = null;
	protected boolean lengthen;
	protected MissingType missing = MissingType.SOURCE;
	protected String resourceFilename;

	public enum MissingType {
		SOURCE,
		PSEUDO,
		EMPTY
	};

    /**
     * 
     */
	public ResBundle()
	{
		this(null, null, null);
	}
    
    /**
     * @param name
     */
    public ResBundle(String name)
    {
		this(name, null, null, null);
    }
    
    /**
     * @param name
     * @param locale
     */
    public ResBundle(String name, IlibLocale locale)
    {
		this(name, locale, null, null);
    }
    
    /**
     * @param name
     * @param locale
     * @param type
     */
    public ResBundle(String name, IlibLocale locale, String type)
    {
		this(name, locale, type, null);
    }

    /**
     * 
     * @param name
     * @param locale
     * @param type
     * @param resFileName
     */
    public ResBundle(String name, IlibLocale locale, String type, String resFileName)
    {
    	this.targetLocale = (locale != null && !locale.toString().isEmpty()) ? locale : new IlibLocale("en-US");
		this.name = (name != null) ? name : DEFAULT_RESOURCES;
		this.type = (type != null) ? type : DEFAULT_TEXT_TYPE;
		this.resourceFilename = (resFileName != null) ? resFileName : DEFAULT_RES_FILE;
		lengthen = true;

		initResources();
    }

    protected void initResources()
    {
    	initResourcesMap(name);
    	initPseudoMap();
		loadAllTranslations(resourceFilename);
    }

    private static void initResourcesMap(String resourcesDir)
	{
		if (sourceResources != null) return;

		sourceResources = new HashMap<>();
		File inputFile = new File(resourcesDir + File.separator + RESOURCES_JSON);
    	if (!inputFile.exists()) return;

		StringBuilder builder = new StringBuilder();
		try (BufferedReader reader = new BufferedReader(new InputStreamReader(new FileInputStream(inputFile), "utf-8")); ) {
			String currentLine = null;
			while ( (currentLine = reader.readLine()) != null ) {
				builder.append(currentLine);
			}
		} catch (FileNotFoundException ex) {
			System.err.println("Exception in file: " + inputFile.getPath() + ", file is missing or does not exist.");
		} catch (IOException e) {
			e.printStackTrace();
			return;
		}

		try {
			JSONObject pseudoJSON = new JSONObject(builder.toString());
			if ( pseudoJSON != null ) {
	            Iterator<String> it = pseudoJSON.keys();
	            String p;

	            while ( it.hasNext() ) {
	                p = it.next();
	                sourceResources.put(p, pseudoJSON.getString(p));
	            }
	        }
		} catch (JSONException e) {
			e.printStackTrace();
		}
	}

    protected void loadAllTranslations(String filename) throws IllegalArgumentException
    {
    	if (!filename.endsWith(".json"))
    		throw new IllegalArgumentException("File " + filename + " has another extension instead of plain JSON extension.");

    	Set<String> resourceFiles = new LinkedHashSet<>();
    	String language = targetLocale.getLanguage(),
    		   region	= targetLocale.getRegion(),
    		   script	= targetLocale.getScript(),
    		   variant	= targetLocale.getVariant();
    	
    	String separator = File.separator;
    	String resources_path = name;
    	StringBuilder tmp_path = new StringBuilder();
    	tmp_path.append(resources_path).append(separator).append(filename);
		resourceFiles.add(tmp_path.toString());

		if (!language.isEmpty()) {
			tmp_path.setLength(0);
			tmp_path.append(resources_path).append(separator).append(language).append(separator).append(filename);
			resourceFiles.add(tmp_path.toString());
		}
		if (!region.isEmpty()) {
			tmp_path.setLength(0);
			tmp_path.append(resources_path).append(separator).append("und").append(separator).append(region).append(separator).append(filename);
			resourceFiles.add(tmp_path.toString());
		}
		if (!language.isEmpty()) {
			if (!script.isEmpty()) {
				tmp_path.setLength(0);
				tmp_path.append(resources_path).append(separator).append(language).append(separator).append(script).append(separator).append(filename);
				resourceFiles.add(tmp_path.toString());
			}
			if (!region.isEmpty()) {
				tmp_path.setLength(0);
				tmp_path.append(resources_path).append(separator).append(language).append(separator).append(region).append(separator).append(filename);
				resourceFiles.add(tmp_path.toString());
			}
		}
		if (!region.isEmpty() && !variant.isEmpty()) {
			tmp_path.setLength(0);
			tmp_path.append(resources_path).append(separator).append("und").append(separator).append(region).append(separator)
				.append(variant).append(separator).append(filename);
			resourceFiles.add(tmp_path.toString());
		}
		if (!language.isEmpty() && !script.isEmpty() && !region.isEmpty()) {
			tmp_path.setLength(0);
			tmp_path.append(resources_path).append(separator).append(language).append(separator).append(script).append(separator)
				.append(region).append(separator).append(filename);
			resourceFiles.add(tmp_path.toString());
		}
		if (!language.isEmpty() && !region.isEmpty() && !variant.isEmpty()) {
			tmp_path.setLength(0);
			tmp_path.append(resources_path).append(separator).append(language).append(separator).append(region).append(separator)
				.append(variant).append(separator).append(filename);
			resourceFiles.add(tmp_path.toString());
		}
		if (!language.isEmpty() && !script.isEmpty() && !region.isEmpty()) {
			tmp_path.setLength(0);
			tmp_path.append(resources_path).append(separator).append(language).append(separator).append(script).append(separator)
				.append(region).append(separator).append(variant).append(separator).append(filename);
			resourceFiles.add(tmp_path.toString());
		}

		translations = new LinkedHashMap<>();
		for (String resfile : resourceFiles)
			loadTranslationsFromFile(resfile);
		resourceFiles.clear();
    }

    protected void loadTranslationsFromFile(String filename)
    {
    	File inputFile = new File(filename);
    	if (!inputFile.exists()) return;
    	

    	StringBuilder builder = new StringBuilder();
		try (BufferedReader reader = new BufferedReader(new InputStreamReader(new FileInputStream(inputFile), "utf-8")); ) {
			String currentLine = null;
			while ( (currentLine = reader.readLine()) != null ) {
				builder.append(currentLine);
			}
		} catch (FileNotFoundException ex) {
			System.err.println("Exception in file: " + filename + ", file is missing or does not exist.");
			return;
		} catch (IOException e) {
			e.printStackTrace();
		}

		try {
			JSONObject pseudoJSON = new JSONObject(builder.toString());
			if ( pseudoJSON != null ) {
	            Iterator<String> it = pseudoJSON.keys();
	            String p;

	            while ( it.hasNext() ) {
	                p = it.next();
	                translations.put(p, pseudoJSON.getString(p));
	            }
	        }
		} catch (JSONException e) {
			e.printStackTrace();
		}
    }

    protected void initPseudoMap()
    {
    	pseudoCharacters = new LinkedHashMap<>();

    	StringBuilder script = new StringBuilder();
    	//switch(targetLocale.getScript()) {
    	switch( ScriptInfo.getScriptByLocale(targetLocale) ) {
    		case "Cyrl":
    			script = script.append("zxx").append(File.separator).append("Cyrl").append(File.separator);
    			break;
    		case "Hans":
    			script = script.append("zxx").append(File.separator).append("Hans").append(File.separator);
    			break;
    		case "Hebr":
    			script = script.append("zxx").append(File.separator).append("Hebr").append(File.separator);
    			break;
    		default:
    			break;
    	}

    	String result = null;
    	File pseudoMapFile = new File(PSEUDOROOT, script.toString() + PSEUDO_JSON);
		try {
			Scanner scanner = new Scanner(new FileInputStream(pseudoMapFile), "utf-8");
			result = scanner.useDelimiter("\\A").next();
	        scanner.close();
		} catch (FileNotFoundException e1) {
			
		}

		try {
			JSONObject pseudoJSON = new JSONObject(result);
			if ( pseudoJSON != null ) {
	            Iterator<String> it = pseudoJSON.keys();
	            String p;
	            while ( it.hasNext() ) {
	                p = it.next();
	                pseudoCharacters.put(p, pseudoJSON.getString(p));
	            }
	        }
		} catch (JSONException e) {
			e.printStackTrace();
		}

    }

    /**
     * Specifies source locale for all threads in current process
     * @param locale source locale
     */
    public static void setSourceLocale(IlibLocale locale)
    {
    	sourceLocale = locale;
    }

    /**
     * Returns source locale for all threads in current process
     * @return source locale
     */
    public static IlibLocale getSourceLocale()
    {
    	return sourceLocale;
    }

    /**
     * Specifies resources filename; default file is strings.json
     * @param filename resource filename of JSON file to look up for translations
     */
    public void setResourceFileName(String filename)
    {
    	resourceFilename = filename;
    }

    /**
     * Returns target locale object in BCP47 format
     * @return target locale instance
     */
    public IlibLocale getLocale()
    {
        return targetLocale;
    }

    /**
     * Examines if source string has already been translated or not
     * 
     * @param source source string to be examined
     * @return true if source string is found in translations, otherwise - false
     */
    public boolean containsSource(String source)
    {
    	return translations.containsKey(source);
    }

	/**
	 * Returns given name for resources location which are seeking for for translations
	 * @return given name for resources with translations
	 */
    public String getName()
    {
        return name;
    }

    /**
     * Returns type of text information which ResBundle is being operating with (default type: raw)
     * @return input text type: html, xml, raw
     */
    public String getType()
    {
        return type;
    }

	/**
	 * Specifies type of text information which ResBundle is being operating with
	 * @param type input text specified type (default type: raw).
	 */
	public void setType(String type) {
		this.type = type.toLowerCase();
	}

	/**
	 * Returns lengthen option that allows to lengthen potential length for translated string (for UI/UX issues)
	 * using pseudo-localization.
	 * @return true if lengthen option is specified, false otherwise
	 */
	public boolean isLengthen() {
		return lengthen;
	}

	/**
	 * Specifies lengthen option to lengthen potential length for translated string (for UI/UX issues)
	 * using pseudo-localization.
	 * @param lengthen option allows to lengthen potential translated string length using pseudo string
	 * as returned instead.
	 */
	public void setLengthen(boolean lengthen) {
		this.lengthen = lengthen;
	}
	
	/**
	 * Returns missing option - that option specifies behavior in case when translation is not found
	 * by given key or value.
	 * 
	 * <info>
	 * Possible values:
	 * 		SOURCE - return source string if translation is not found;
	 * 		PSEUDO - return pseudo localized string from source string if translation is not found;
	 * 		EMPTY  - return empty string if translation is not found.
	 * </info>
	 * @return missing option value
	 */
	public MissingType getMissing() {
		return missing;
	}

	/**
	 * Specifies missing option - option, that specifies behavior in case when translation is not found
	 * by given key or value.
	 * 
	 * <info>
	 * Possible values:
	 * 		SOURCE - return source string if translation is not found;
	 * 		PSEUDO - return pseudo localized string from source string if translation is not found;
	 * 		EMPTY  - return empty string if translation is not found.
	 * </info>
	 * @param type
	 */
	public void setMissingType(MissingType type) {
		this.missing = type;
	}

	/**
	 * Returns pseudo string from input one using appropriate pseudomap
     * @param source input string needed to be pseudo localized
     * @return pseudo localized string
     */
    protected String pseudo(String source)
    {
		if ( source == null ) {
			return null;
		}
		
		StringBuilder ret = new StringBuilder();
		int i;
		
		for ( i = 0; i < source.length(); i++ ) {
			if ( !type.equals(RAW_TYPE) ) {
				if ( isHTML_XML_Type() ) {
					if (source.charAt(i) == '<') {
						ret.append(source.charAt(i++));
						while (i < source.length() && source.charAt(i) != '>') {
							ret.append(source.charAt(i++));
						}
						if (i < source.length()) {
							ret.append(source.charAt(i++));
						}
					} else if (source.charAt(i) == '&') {
						ret.append(source.charAt(i++));
						while (i < source.length() && source.charAt(i) != ';' && source.charAt(i) != ' ') {
							ret.append(source.charAt(i++));
						}
						if (i < source.length()) {
							ret.append(source.charAt(i++));
						}
					}
				}
				if (i < source.length()) { 
					if (source.charAt(i) == '{') {
						ret.append(source.charAt(i++));
						while (i < source.length() && source.charAt(i) != '}') {
							ret.append(source.charAt(i++));
						}
						if (i < source.length()) {
							ret.append(source.charAt(i));
						}
					} else {
						String c = source.substring(i, i+1);
						ret.append( getPseudoCharacter(c) );
					}
				}
			} else {
				String c = source.substring(i, i+1);
				ret.append( getPseudoCharacter(c) );				
			}
		}
		if (lengthen) {
			int add;
			if (ret.length() <= 20) {
				add = Math.round(ret.length() / 2);
			} else if (ret.length() > 20 && ret.length() <= 40) {
				add = Math.round(ret.length() / 3);
			} else {
				add = Math.round(ret.length() / 5);
			}
			for (i = add-1; i >= 0; i--) {
				ret.append("" + (i % 10));
			}
		}

		return ret.toString();
    }

    /**
     * Returns string with pseudo character that corresponds to the input one
     * @param character input character string
     * @return string with pseudo character if input character is found in appropriate pseudoMap,
     * 		otherwise - input character
     */
    protected String getPseudoCharacter(String character)
    {
    	return pseudoCharacters.containsKey(character) ? pseudoCharacters.get(character) : character;
    }

    /**
     * Replaces all xml and html tags occurences with corresponding replacements
     * @param str input string
     * @return string with no html- and xml-style tags
     */
    protected String escape(String str)
    {
    	if ( str == null )
			return null;

		String ret;
		ret = str.replaceAll("&", "&amp;");
		ret = ret.replaceAll("<", "&lt;");
		ret = ret.replaceAll(">", "&gt;");
		return ret;
    }

    /**
     * Invokes retroaction for escape(String) 
     * 
     * @see String escape(String str);
     * @param str input string
     * @return string with html- and xml-style tags
     */
    protected String unescape(String str)
    {
    	if ( str == null )
			return null;

		String ret;
		ret = str.replaceAll("&amp;", "&");
		ret = ret.replaceAll("&lt;", "<");
		ret = ret.replaceAll("&gt;", ">");
		return ret;
    }

    /**
     * Creates a unique key from given source string
     * @param source input source string
     * @return unique key that contains no spaces, and modified equals and colon signs
     */
    protected String makeKey(String source)
    {
		if ( source == null )
			return null;

		String ret;
		// compress all whitespace so that they don't matter to the key
		ret = source.replaceAll("\\s+", "\\ ");

		// need to escape these chars because they are special for properties files
		ret = source.replaceAll("=", "\\=");
		ret = source.replaceAll(":", "\\:");

		return isHTML_XML_Type() ? unescape(ret) : ret;
    }
    
    /**
     * Returns translation for given source and key strings in IString format
     * @param source source string
     * @param key key item, if null - then unique key will be generated
     * @see makeKey(String source);
     * @return translation for target locale if it is existed, otherwise - 
     * @see MissingType
     */
    public IString getString(String source, String key)
    {
		if (source == null && key == null) return null;

		if (targetLocale.isPseudo()) {
			String str = (source != null) ? source : (translations != null ? translations.get(key) : key);
			return new IString(pseudo(str), targetLocale.getLanguage());
		}

		String trans = getTranslation(source, key);
		return new IString(trans, targetLocale.getLanguage());
	}

    /**
     * 
     * @param source
     * @param key
     * @return
     */
    protected String getTranslation(String source, String key)
    {
    	String keyName = null;
    	if (key != null && key.length() > 0) {
    		keyName = key;
    	} else {
    		if (source != null)
    			keyName = makeKey(source);
    		else {
    			System.err.println("Incorrect translation parameters: either key or source are both null!");
    			return IString.EMPTY_ITEM;
    		}
    	}

    	if ( sourceLocale.equals(targetLocale.toString() )) {
    		String trans = (source != null) ? source : keyName;
    		if (isHTML_XML_Type()) trans = escape(trans);
        	return trans;
    	}

    	String trans = null;
    	switch(missing) {
			case SOURCE:
				trans = ( translations != null && translations.containsKey(keyName) ) ? translations.get(keyName) :
					( sourceResources.get(keyName) != null ? sourceResources.get(keyName) : keyName );
				break;
			case PSEUDO:
				String pseudoItem = (source != null) ? pseudo(source) :
					( (translations != null && translations.get(keyName) != null) ? pseudo(translations.get(keyName)) :
						(sourceResources.get(keyName) != null ?
								pseudo(sourceResources.get(keyName)) : key) );
				trans = ( translations != null && translations.containsKey(keyName) ) ? translations.get(keyName) : pseudoItem;
				break;
			case EMPTY:
				trans = ( translations != null && translations.containsKey(keyName) ) ? translations.get(keyName) : IString.EMPTY_ITEM;
				break;
			default:
				trans = ( translations != null && translations.containsKey(keyName) ) ? translations.get(keyName) : source;
				break;
		}

		if (isHTML_XML_Type()) trans = escape(trans);
    	return trans;
    }

    protected boolean isHTML_XML_Type()
    {
    	return (type.equals(XML_TYPE) || type.equals(HTML_TYPE));
    }

    /**
     * @param source
     * @return
     */
    public IString getString(String source)
    {
        return getString(source, null);
    }

    /**
     * 
     * @param source
     * @return
     */
    public IString getStringPseudo(String source) {
    	if (source == null) return null;

		return new IString(pseudo(source), targetLocale.getLanguage());
    }
}
