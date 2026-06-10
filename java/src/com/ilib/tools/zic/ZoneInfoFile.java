/*
 * ZoneInfoFile.java - 
 *
 * Copyright © 2014 JEDLSoft, All Rights Reserved.
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
package com.ilib.tools.zic;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

/**
 * ZoneInfoFile - models a zone information file, which contains a number
 * of time zone definitions in it.
 * 
 * @author edwin
 */
public class ZoneInfoFile
{
    protected BufferedReader in;
    protected File file;
    protected String buffer = null;
    protected Logger logger = LogManager.getLogger(this.getClass());

    protected String getLine()
        throws IOException
    {
        String line;
        if ( buffer != null ) {
            line = buffer;
            buffer = null;
        } else {
            line = in.readLine();
            while ( line != null && 
                   (line.length() == 0 || 
                    line.charAt(0) == '#' || 
                    line.matches("^\\s+(#.*)?$")) ) {
                line = in.readLine();
            }
            if ( line != null ) {
                int index = line.indexOf('#');
                if (index >= 0) {
                    line = line.substring(0, index);
                }
            }
        }
        
        return line;
    }
    
    protected void stuffLine(String line)
    {
        buffer = line;
    }
    
    public void parse(HashMap<String,Zone> zones, HashMap<String,RuleSet> ruleSets)
        throws ParseException
    {
        Zone zone = null;
        RuleSet rules = null;
        String line;
        Rule rule;
        String[] tokens;
        Offset offset;
        
        try {
            line = getLine();
            
            while (line != null) {
                logger.debug("Parsing line " + line);
    
                if ( line.startsWith("Zone") ) {
                    zone = new Zone(line, ruleSets);
                    zones.put(zone.getName(), zone);
                    line = getLine();
                    while ( line != null && Character.isWhitespace(line.charAt(0)) ) {
                        offset = new Offset(line, ruleSets, zone.getName());
                        zone.addOffset(offset);
                        line = getLine();
                    }
                } else if ( line.startsWith("Rule") ) {
                    rule = new Rule(line);
                    rules = ruleSets.get(rule.getRuleSetName());
                    if ( rules == null ) {
                        rules = new RuleSet();
                        rules.setName(rule.getRuleSetName());
                        ruleSets.put(rule.getRuleSetName(), rules);
                    }
                    rules.add(rule);
                    line = getLine();
                } else if ( line.startsWith("Link") ) {
                    tokens = line.split("[ \t]");
                    if ( tokens.length > 2 ) {
                        zone = zones.get(tokens[1]);
                        if ( zone != null ) {
                            zones.put(tokens[2], zone);
                        }
                    }
                    line = getLine();
                } else {
                    line = getLine();
                }
            }
        } catch ( IOException e ) {
            logger.error("Could not read file " + file.getPath());
        }
    }

    public void close() throws IOException
    {
        in.close();
    }
    
    public ZoneInfoFile(File file)
        throws IOException
    {
        this.file = file;
        
        logger.debug("Reading file " + file.getPath());
        
        try {
            in = new BufferedReader(new FileReader(file));
        } catch (IOException e) {
            logger.error("Could not open file " + file.getPath());
        }
    }
}
