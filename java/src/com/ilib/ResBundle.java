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

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.util.MissingResourceException;
import java.util.Properties;
import java.util.ResourceBundle;

/**
 * ResBundle
 * 
 * @author edwin
 */
public class ResBundle
{
    protected IlibLocale locale;
    protected String name;
    protected String type;
    //protected Map<String,String> map;
    protected ResourceBundle map;
	protected boolean lengthen;
    
	static Properties pseudoMap;
	static {
		pseudoMap = new Properties();
		ClassLoader cl = ResBundle.class.getClassLoader();
		try {
		    // TODO: switch this to use json syntax instead so it can read the ilib pseudomap.json files
			pseudoMap.load(new InputStreamReader(cl.getResourceAsStream("pseudo.properties"), "utf-8"));
		} catch (UnsupportedEncodingException e) {
			// should never happen because utf-8 is built-in
			e.printStackTrace();
		} catch (IOException e) {
			// also should never happen because if you can load this class, you can load the properties
			e.printStackTrace();
		}
	}

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
		this(name, null, null);
    }
    
    /**
     * @param name
     * @param locale
     */
    public ResBundle(String name, IlibLocale locale)
    {
		this(name, locale, null);
    }
    
    /**
     * @param name
     * @param locale
     * @param type
     */
    public ResBundle(String name, IlibLocale locale, String type)
    {
    	this.locale = (locale != null) ? locale : new IlibLocale("en-US");
    	this.name = (name != null) ? name : "resources";
		this.type = (type != null) ? type : "text";
		lengthen = true;
		// if the resources aren't there, just ignore it
		try {
		    // TODO: switch this to loading in a json file resource
	        java.util.Locale jl = new java.util.Locale(this.locale.getLanguage(), this.locale.getRegion());
			map = ResourceBundle.getBundle(name, jl);
		} catch ( MissingResourceException e ) {}
    }

    /**
     * @return the locale
     */
    public IlibLocale getLocale()
    {
        return locale;
    }

	/**
	 * @param locale
	 */
	public void setLocale(IlibLocale locale) 
	{
		this.locale = locale;
		// if the resources aren't there, just ignore it
		try {
		    // TODO: switch this to loading in a json file resource
	        map = ResourceBundle.getBundle(name, new java.util.Locale(locale.getLanguage(), locale.getRegion()));
		} catch ( MissingResourceException e ) {}
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
						ret.append(pseudoMap.getProperty(c, c));
					}
				}
			} else {
				String c = source.substring(i, i+1);
				ret.append(pseudoMap.getProperty(c, c));				
			}
		}
		if (this.lengthen) {
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
			String str = (source != null) ? source : (map != null ? map.getString(key) : key),
				ret = pseudo(str);
			return new IString(ret);
		}
		
		String keyName = (key != null && key.length() > 0) ? key : makeKey(source);
		String trans = (map != null && map.containsKey(keyName)) ? map.getString(keyName) : source;
		return new IString((type.equals("xml") || type.equals("html")) ? escape(trans) : trans);
	}
    
    /**
     * @param source
     * @return
     */
    public IString getString(String source)
    {
        return this.getString(source, null);
    }
}
