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
	protected static final File pseudoRoot = new File("js/data/locale");

    protected IlibLocale locale;
    protected String name;
    protected String type;
    protected Map<String, String> translations;
	protected boolean lengthen;
	protected MissingType missing = MissingType.SOURCE;
	protected String resourceFilename;
	protected Map<String, String> pseudoMap = null;
	
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
    	this.locale = (locale != null && !locale.toString().isEmpty()) ? locale : new IlibLocale("en-US");
    	this.name = (name != null) ? name : "resources";
		this.type = (type != null) ? type : "text";
		this.resourceFilename = (resFileName != null) ? resFileName : "strings.json";
		lengthen = true;

		initResources();
    }

    protected void initResources()
    {
    	initPseudoMap();
		loadAllTranslations(resourceFilename);
    }

    protected void loadAllTranslations(String filename) throws IllegalArgumentException
    {
    	if (!filename.endsWith(".json"))
    		throw new IllegalArgumentException("File " + filename + " has another extension instead of plain JSON extension.");

    	Set<String> resourceFiles = new LinkedHashSet<>();
    	String language = locale.getLanguage(),
    		   region	= locale.getRegion(),
    		   script	= locale.getScript(),
    		   variant	= locale.getVariant();
    	
    	String separator = File.separator;
    	String resources_path = name;
    	StringBuilder tmp_path = new StringBuilder();
		resourceFiles.add(resources_path + separator + filename);

		if (!language.isEmpty()) {
			tmp_path.append(resources_path).append(separator).append(language).append(separator).append(filename);
			resourceFiles.add(tmp_path.toString());
			tmp_path.setLength(0);
		}
		if (!region.isEmpty()) {
			tmp_path.append(resources_path).append(separator).append("und").append(separator).append(region).append(separator).append(filename);
			resourceFiles.add(tmp_path.toString());
			tmp_path.setLength(0);
		}
		if (!language.isEmpty()) {
			if (!script.isEmpty()) {
				tmp_path.append(resources_path).append(separator).append(language).append(separator).append(script).append(separator).append(filename);
				resourceFiles.add(tmp_path.toString());
				tmp_path.setLength(0);
			}
			if (!region.isEmpty()) {
				tmp_path.append(resources_path).append(separator).append(language).append(separator).append(region).append(separator).append(filename);
				resourceFiles.add(tmp_path.toString());
				tmp_path.setLength(0);
			}
		}
		if (!region.isEmpty() && !variant.isEmpty()) {
			tmp_path.append(resources_path).append(separator).append("und").append(separator).append(region).append(separator)
				.append(variant).append(separator).append(filename);
			resourceFiles.add(tmp_path.toString());
			tmp_path.setLength(0);
		}
		if (!language.isEmpty() && !script.isEmpty() && !region.isEmpty()) {
			tmp_path.append(resources_path).append(separator).append(language).append(separator).append(script).append(separator)
				.append(region).append(separator).append(filename);
			resourceFiles.add(tmp_path.toString());
			tmp_path.setLength(0);
		}
		if (!language.isEmpty() && !region.isEmpty() && !variant.isEmpty()) {
			tmp_path.append(resources_path).append(separator).append(language).append(separator).append(region).append(separator)
				.append(variant).append(separator).append(filename);
			resourceFiles.add(tmp_path.toString());
			tmp_path.setLength(0);
		}
		if (!language.isEmpty() && !script.isEmpty() && !region.isEmpty()) {
			tmp_path.append(resources_path).append(separator).append(language).append(separator).append(script).append(separator)
				.append(region).append(separator).append(variant).append(separator).append(filename);
			resourceFiles.add(tmp_path.toString());
			tmp_path.setLength(0);
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
			System.err.println("Exception in file: " + filename + ", file is missing or not existed.");
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
	                //System.out.println(p);
	            }
	        }
		} catch (JSONException e) {
			e.printStackTrace();
		}
    }

    protected void initPseudoMap()
    {
    	pseudoMap = new LinkedHashMap<>();

    	StringBuilder script = new StringBuilder();
    	switch(locale.getScript()) {
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
    	File pseudoMapFile = new File(pseudoRoot, script.toString() + "pseudomap.json");
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
	                pseudoMap.put(p, pseudoJSON.getString(p));
	            }
	        }
		} catch (JSONException e) {
			e.printStackTrace();
		}

    }

    /**
     * 
     * @param filename
     */
    public void setResourceFileName(String filename)
    {
    	resourceFilename = filename;
    }

    /**
     * @return the locale
     */
    public IlibLocale getLocale()
    {
        return locale;
    }

    /**
     * 
     * @param source
     * @return
     */
    public boolean containsSource(String source)
    {
    	return translations.containsKey(source);
    }

	/**
     * @return the name
     */
    public String getName()
    {
        return name;
    }

    /**
     * @return the type
     */
    public String getType()
    {
        return type;
    }

	/**
	 * @param type
	 */
	public void setType(String type) {
		this.type = type.toLowerCase();
	}

	/**
	 * @return
	 */
	public boolean isLengthen() {
		return lengthen;
	}

	/**
	 * @param lengthen
	 */
	public void setLengthen(boolean lengthen) {
		this.lengthen = lengthen;
	}
	
	/**
	 * 
	 * @return
	 */
	public MissingType getMissing() {
		return missing;
	}

	/**
	 * 
	 * @param type
	 */
	public void setMissingType(MissingType type) {
		this.missing = type;
	}

	/**
     * @param source
     * @return
     */
    protected String pseudo(String source)
    {
		if ( source == null ) {
			return null;
		}
		
		StringBuilder ret = new StringBuilder();
		int i;
		
		for ( i = 0; i < source.length(); i++ ) {
			if ( !type.equals("raw") ) {
				if ( type.equals("html") || type.equals("xml") ) {
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

    protected String getPseudoCharacter(String character)
    {
    	return pseudoMap.containsKey(character) ? pseudoMap.get(character) : character;
    }

    /**
     * @param str
     * @return
     */
    protected String escape(String str)
    {
		String ret;
		if ( str == null ) {
			return null;
		}
		ret = str.replaceAll("&", "&amp;");
		ret = ret.replaceAll("<", "&lt;");
		ret = ret.replaceAll(">", "&gt;");
		return ret;
    }

    /**
     * @param str
     * @return
     */
    protected String unescape(String str)
    {
		String ret;
		if ( str == null ) {
			return null;
		}
		ret = str.replaceAll("&amp;", "&");
		ret = ret.replaceAll("&lt;", "<");
		ret = ret.replaceAll("&gt;", ">");
		return ret;
    }

    /**
     * @param source
     * @return
     */
    protected String makeKey(String source)
    {
		String ret;

		if ( source == null ) {
			return null;
		}
		
		// compress all whitespace so that they don't matter to the key
		ret = source.replaceAll("\\s+", "\\ ");
		
		// need to escape these chars because they are special for properties files
		ret = source.replaceAll("=", "\\=");
		ret = source.replaceAll(":", "\\:");
		
		return (type.equals("xml") || type.equals("html")) ? unescape(ret) : ret;
    }
    
    /**
     * @param source
     * @param key
     * @return
     */
    public IString getString(String source, String key)
    {
		if (source == null && key == null) return null;

		if (locale.isPseudo()) {
			String str = (source != null) ? source : (translations != null ? translations.get(key) : key);
			return new IString(pseudo(str), locale.getLanguage());
		}

		String trans = getTranslation(source, key);
		return new IString(trans, locale.getLanguage());
	}

    protected String getTranslation(String source, String key)
    {
    	String keyName = (key != null && key.length() > 0) ? key : makeKey(source);
    	String trans = null;
    	switch(missing) {
			case SOURCE:
				trans = ( translations != null && translations.containsKey(keyName) ) ? translations.get(keyName) : source;
				break;
			case PSEUDO:
				String str = (source != null) ? source : (translations != null ? translations.get(key) : key);
				trans = ( translations != null && translations.containsKey(keyName) ) ? translations.get(keyName) : pseudo(str);
				break;
			case EMPTY:
				trans = ( translations != null && translations.containsKey(keyName) ) ? translations.get(keyName) : IString.EMPTY_ITEM;
				break;
			default:
				trans = ( translations != null && translations.containsKey(keyName) ) ? translations.get(keyName) : source;
				break;
		}
	
		if (type.equals("xml") || type.equals("html")) trans = escape(trans);

    	return trans;
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
     */
    public IString getStringPseudo(String source, String key) {
    	if (source == null && key == null) return null;

		String str = (source != null) ? source : (translations != null ? translations.get(key) : key);
		return new IString(pseudo(str), locale.getLanguage());
    }
}
