/*
 * IlibLocale.java - 
 * Copyright 2012, JEDLSoft, All Rights Reserved.
 * 
 * Created on Jun 23, 2012 by edwin
 */
package com.ilib;

/**
 * IlibLocale
 * 
 * @author edwin
 */
public class IlibLocale
{
    protected String language = "";
    protected String region = "";
    protected String script = "";
    protected String variant = "";
    
    protected boolean isLanguageCode(String str)
    {
    	if ( str.length() < 2 || str.length() > 3 ) {
    		return false;
    	}
    	
    	for ( int i = 0; i < str.length(); i++ ) {
    		if ( !Character.isLowerCase(str.charAt(i)) ) {
    			return false;
    		}
    	}
		
		return true;
    }

    protected boolean isRegionCode(String str)
    {
    	if ( str.length() != 2 ) {
    		return false;
    	}
    	
		return Character.isUpperCase(str.charAt(0)) && Character.isUpperCase(str.charAt(1));
    }

    protected boolean isScriptCode(String str)
    {
    	if ( str.length() != 4 || !Character.isUpperCase(str.charAt(0)) ) {
    		return false;
    	}
    	
    	for ( int i = 1; i < str.length(); i++ ) {
    		if ( !Character.isLowerCase(str.charAt(i)) ) {
    			return false;
    		}
    	}
		
		return true;
    }

    /**
     * @param spec
     */
    public IlibLocale(String spec)
    {
    	if ( spec != null ) {
	        String[] parts = spec.split("-");
	        for ( int i = 0; i < parts.length; i++ ) {
	        	if ( isLanguageCode(parts[i]) ) {
	        		language = parts[i];
	        	} else if ( isRegionCode(parts[i]) ) {
	        		region = parts[i];
	        	} else if ( isScriptCode(parts[i]) ) {
	        		script = parts[i];
	        	} else {
	        		variant = parts[i];
	        	}
	        }
    	}
    }
    
    /**
     * @param language
     * @param region
     * @param variant
     */
    public IlibLocale(String language, String region, String script, String variant)
    {
    	this.language = language != null ? language : "";
    	this.region = region != null ? region : "";
    	this.script = script != null ? script : "";
    	this.variant = variant != null ? variant : "";
    }

    /**
     * @return
     */
    public String getSpec()
    {
        return toString();
    }
    
    public String toString()
    {
    	StringBuilder ret = new StringBuilder();
    	if ( language != null && language.length() > 0 ) {
    		ret.append(language);
    	}
    	
    	if ( region != null && region.length() > 0 ) {
    		if ( ret.length() > 0 ) {
    			ret.append("-");
    		}
    		ret.append(region);
    	}

    	if ( script != null && script.length() > 0 ) {
    		if ( ret.length() > 0 ) {
    			ret.append("-");
    		}
    		ret.append(script);
    	}

    	if ( variant != null && variant.length() > 0 ) {
    		if ( ret.length() > 0 ) {
    			ret.append("-");
    		}
    		ret.append(variant);
    	}

        return ret.toString();
    }
    
    public String getLanguage()
    {
    	return language;
    }
    
    /**
     * @return
     */
    public String getRegion()
    {
        return region;
    }

    public String getScript()
    {
    	return script;
    }
    
    public String getVariant()
    {
        return variant;
    }
    
    @Override
	public boolean equals(Object obj) {
    	if ( obj instanceof IlibLocale ) {
    		IlibLocale other = (IlibLocale) obj;
    		return (this.language.equals(other.language) &&
    				this.region.equals(other.region) &&
    				this.script.equals(other.script) &&
    				this.variant.equals(other.variant));
    	}
    	
		return super.equals(obj);
	}

	/**
     * @param spec
     * @return
     */
    public boolean equals(String spec)
    {
    	if ( this.getSpec().equals(spec) ) {
    		return true;
    	}
        return false;
    }
    
    /**
     * Return whether or not the current locale is compatible
     * with the given locale. A locale is compatible with another locale if
     * the other locale is one of its ancestors. That is, if the current
     * locale inherits from the given locale eventually, then they are
     * compatible.
     * 
     * @param other the locale to check against
     * @return true if the the current locale is compatible with the
     * other locale
     */
    public boolean isCompatibleWith(IlibLocale other)
    {
        // TODO: fill in IlibLocale.isCompatibleWith
        return true;
    }
    
    /**
     * @return
     */
    public boolean isPseudo()
    {
        return language.equals("xx") && region.equals("XX");
    }
}
