/**
 * 
 * Copyright © 2013, JEDLSoft
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
     * @param script
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
     * @return the locale specifier
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
    	
    	if ( script != null && script.length() > 0 ) {
    		if ( ret.length() > 0 ) {
    			ret.append("-");
    		}
    		ret.append(script);
    	}

    	if ( region != null && region.length() > 0 ) {
    		if ( ret.length() > 0 ) {
    			ret.append("-");
    		}
    		ret.append(region);
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
    
    /* (non-Javadoc)
     * @see java.lang.Object#equals(java.lang.Object)
     */
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
     * @return whether this locale represents the same locale as the given spec
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
     * @return true if this is the pseudolocalization locale
     */
    public boolean isPseudo()
    {
        return language.equals("xx") && region.equals("XX");
    }
}
