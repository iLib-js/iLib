/**
 * Copyright (c) 2016, HealthTap, Inc. All Rights Reserved.
 */
package com.ilib;

import java.io.File;
import java.io.InputStream;
import java.util.Enumeration;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.ResourceBundle;
import java.util.Scanner;

import org.json.JSONObject;

/**
 * A class that represents a resource bundle for Android with methods 
 * that can look up
 * translated strings by the source string or by unique key. The Java
 * ResourceBundle class does not offer those methods and is not subclassable
 * because many of its methods are final. So, this class is a wrapper 
 * around ResourceBundle which delegates much of its functionality to 
 * ResourceBundle and adds the look-up by source string functionality.<p>
 * 
 * The class ResBundle looks up strings in json files. This class uses
 * the regular Java properties files (in properties or xml format) so
 * it can be used as a replacement for regular ResourceBundles and does
 * not require rewriting existing resources as json.
 *
 * @author edwinhoogerbeets
 *
 */
public class IResourceBundle {
	public static final String HTML_TYPE 				= "html";
	public static final String XML_TYPE 				= "xml";
	public static final String RAW_TYPE 				= "raw";
	public static final String JAVA_TYPE 				= "java";
	
	private static final String PSEUDO_JSON				= "pseudomap.json";
	
	protected static volatile IlibLocale sourceLocale		= new IlibLocale("en-US");

	protected ResourceBundle rb;
    protected IlibLocale targetLocale;
    protected String name;
    protected String type;
    protected Map<String, String> pseudoCharacters = null;
	protected boolean lengthen;
	protected MissingType missing = MissingType.SOURCE;
	
	public enum MissingType {
		SOURCE,
		PSEUDO,
		EMPTY,
		PLACEHOLDER
	};

	/**
	 * Construct a new IResourceBundle and load in the Java
	 * ResourceBundle for delegation.
	 * @param baseName the baseName for this bundle, or null to use
	 * the default
	 * @param locale the ilib locale for this bundle, or null to use
	 * the current locale
	 */
	public IResourceBundle(String baseName, IlibLocale locale) {
		// TODO Auto-generated constructor stub
	}

	/**
	 * Construct a new IResourceBundle and load in the Java
	 * ResourceBundle for delegation. This uses the given base name
	 * but the default locale.
	 * 
	 * @param baseName the baseName for this bundle, or null to use
	 * the default
	 */
	public IResourceBundle(String baseName) {
		this(baseName, null);
	}

	/**
	 * Construct a new IResourceBundle and load in the Java
	 * ResourceBundle for delegation. This method uses the default
	 * locale and the default base name.
	 */
	public IResourceBundle() {
		this(null, null);
	}

	/**
	 * Delegated
	 * @return
	 */
	public Enumeration<String> getKeys() {
		return rb.getKeys();
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
    	ClassLoader cl = this.getClass().getClassLoader();
    	// File pseudoMapFile = new File(PSEUDOROOT, script.toString() + PSEUDO_JSON);
		try {
	    	InputStream is = cl.getResourceAsStream("locale/" + script.toString() + "/" + PSEUDO_JSON);
			if (is != null) {
		    	Scanner scanner = new Scanner(is, "utf-8");
				result = scanner.useDelimiter("\\A").next();
		        scanner.close();

		        JSONObject pseudoJSON = new JSONObject(result);
				if ( pseudoJSON != null ) {
		            Iterator<String> it = pseudoJSON.keys();
		            String p;
		            while ( it.hasNext() ) {
		                p = it.next();
		                pseudoCharacters.put(p, pseudoJSON.getString(p));
		            }
		        }
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
    }

    /**
     * Returns target locale object as an IlibLocale object
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
    	return rb.containsKey(makeKey(source));
    }

    /**
     * Examines if given unique key or source string has already been 
     * translated or not.
     * 
     * @param sourceOrKey unique key or source string to be examined
     * @return true if source string or unique key are found in translations. False otherwise.
     */
    public boolean containsKey(String sourceOrKey)
    {
    	return rb.containsKey(sourceOrKey) || rb.containsKey(makeKey(sourceOrKey));
    }

    /**
     * Gets a string array for the given key from this resource bundle or one of its parents.
     * 
     * @param key unique key of the string array
     * @return an array of string for the unique key
     */
    public String[] getStringArray(String key) {
    	return rb.getStringArray(key);
    }
    
    
	/**
	 * Returns the base name of this bundle, if known, or null if unknown.
	 * @return base name of this bundle
	 */
    public String getBaseBundleName()
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
				if (type.equals(JAVA_TYPE)) {
					if (i < source.length()) { 
						if (source.charAt(i) == '\\') {
							if (source.charAt(i+1) == 'u') {
								// unicode character
								if (i+5 < source.length()) {
									ret.append(source.substring(i, i+6));
									i += 6;
								}
							} else {
								// non-unicode character, so just skip the next character instead of pseudo-localizing it
								ret.append('\\');
								ret.append(source.charAt(i+1));
								i += 2;
							}
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
     * Returns translation for given source and key strings.
     * @param source source string to look up
     * @param key unique key for the string. If null - then unique key will be generated
     * based on the source string
     * @see #makeKey(String)
     * @return translation for target locale if it is exists, otherwise the source string 
     * @see MissingType
     */
    public String getString(String source, String key)
    {
		if (source == null && key == null) return null;

		if (targetLocale.isPseudo()) {
			String str = (source != null) ? source : ((rb != null) ? rb.getString(key) : key);
			return pseudo(str);
		}

		return getTranslation(source, key);
	}

    /**
     * Get the translation of the given source string and key combination. At
     * least one of the source or the key must be specified.
     * 
     * @param source The source string written in the source language, or null
     * if no source string is available
     * @param key The unique key being sought, or null if no key is available
     * @return the translation for the given source string/key combination
     */
    protected String getTranslation(String source, String key)
    {
    	String keyName = null;
    	if (key != null && key.length() > 0) {
    		keyName = key;
    	} else {
    		if (source != null) {
    			keyName = rb.containsKey(source) ? source : makeKey(source);
    		} else {
    			System.err.println("IResourceBundle: Incorrect translation parameters: key and source are both null!");
    			return "";
    		}
    	}

    	if ( sourceLocale.equals(targetLocale.toString() )) {
    		String trans = (source != null) ? source : keyName;
    		if (isHTML_XML_Type()) trans = escape(trans);
        	return trans;
    	}

    	String trans = rb.getString(keyName);
    	
    	if (trans == null) {
	    	switch (missing) {
	    		default:
				case SOURCE:
					trans = source;
					break;
				case PSEUDO:
					trans = (source != null) ? pseudo(source) : null;
					break;
				case EMPTY:
					trans = "";
					break;
				case PLACEHOLDER:
					trans = "????";
					break;
			}
    	}
    	
		if (isHTML_XML_Type() && trans != null) {
			trans = escape(trans);
		}
		
    	return trans;
    }

    /**
     * Return true if the output file type is HTML or XML.
     * 
     * @return true if the output file type is HTML or XML.
     */
    protected boolean isHTML_XML_Type()
    {
    	return (type.equals(XML_TYPE) || type.equals(HTML_TYPE));
    }

    /**
     * Retrieve a string from the resources based on the source
     * string or the key. If the source string is given, a key
     * will be made out of it and the key will be looked up in 
     * the resources. If a key is given, the key will be looked
     * up directly in the resources. If the string cannot be
     * looked up by either the source or the key, this method 
     * will use the current missing string strategy.
     * 
     * @param sourceOrKey A source string or unique key to look
     * up in the resources
     * @return the translation for the given source string or
     * key string
     */
    public String getString(String sourceOrKey)
    {
        return getString(sourceOrKey, null);
    }

    /**
     * Return the pseudo-translated version of the source string.
     * 
     * @param source the source string to translate.
     * @return the pseudo-translated version of the source string
     */
    public String getStringPseudo(String source) {
    	if (source == null) return null;

		return pseudo(source);
    }	
}
