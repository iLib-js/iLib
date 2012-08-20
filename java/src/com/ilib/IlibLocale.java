/*
 * IlibLocale.java - 
 * Copyright 2012, Cottage Software Inc., All Rights Reserved.
 * 
 * Created on Jun 23, 2012 by edwin
 */
package com.ilib;

import java.util.Locale;

/**
 * IlibLocale
 * 
 * @author edwin
 */
public class IlibLocale
{
    protected Locale locale;
    
    /**
     * @param spec
     */
    public IlibLocale(String spec)
    {
        String[] parts = spec.split("-");
        locale = parts.length > 2 ? new Locale(parts[0], parts[1], parts[2]) : 
                 (parts.length > 1 ? new Locale(parts[0], parts[1]) : 
                     new Locale(parts[0])); 
    }
    
    /**
     * @param language
     * @param region
     * @param variant
     */
    public IlibLocale(String language, String region, String variant)
    {
        locale = new Locale(language, region, variant);
    }

    /**
     * @return
     */
    public String getSpec()
    {
        return toString();
    }
    
    /* (non-Javadoc)
     * @see java.util.Locale#toString()
     */
    public String toString()
    {
        String ret = getLanguage() + "-" + getRegion();
        String var = getVariant();
        if (var != null && var.length() > 0) {
            ret += "-" + var;
        }
        return ret;
    }
    
    /* (non-Javadoc)
     * @see java.util.Locale#getLanguage()
     */
    public String getLanguage()
    {
        // work around the stupidity in the JDK
        String l = locale.getLanguage();
        if (l.equals("iw")) {
            l = "he";
        } else if (l.equals("ji")) {
            l = "yi";
        } else if (l.equals("in")) {
            l = "id";
        }
        return l;
    }
    
    /**
     * @return
     */
    public String getRegion()
    {
        return locale.getCountry();
    }
    
    /* (non-Javadoc)
     * @see java.util.Locale#getVariant()
     */
    public String getVariant()
    {
        return locale.getVariant();
    }
    
    /**
     * @param spec
     * @return
     */
    public boolean equals(String spec)
    {
        // TODO: fill in IlibLocale.equals
        return false;
    }
    
    /**
     * @param other
     * @return
     */
    public boolean equals(IlibLocale other)
    {
        return locale.equals(other.locale);
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
        return (locale.getLanguage().equals("xx") && locale.getCountry().equals("XX"));
    }
}
