/*
 * ZoneInfoCompiler.java - 
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

import java.io.File;
import java.util.HashMap;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

/**
 * ZoneInfoCompiler
 * 
 * @author edwin
 */
public class ZoneInfoCompiler
{
    protected static Logger logger;
    
    public static void usage()
    {
        System.out.println("Usage: zic [-c] [-f format] [-o file] [zoneinfodir]");
        System.out.println("-c          - Only write out the current rules, not historical.");
        System.out.println("-f format   - The file type for the output file. Currently supported: json");
        System.out.println("-o dir      - Name the output directory. Default: zoneinfo");
        System.out.println("zoneinfodir - Directory containing the downloaded zone info files. Default is '.'");
        System.exit(1);
    }
    
    /**
     * @param args
     */
    public static void main(String[] args)
    {
        int i = 0;
        String infoDirName = ".";
        logger = LogManager.getLogger(ZoneInfoCompiler.class);
        HashMap<String,Zone> zones = new HashMap<String,Zone>();
        HashMap<String,RuleSet> ruleSets = new HashMap<String,RuleSet>();
        boolean currentOnly = true;
        String format = "json";
        String outputDirName = "zoneinfo";
        
        while ( i < args.length && args[i].charAt(0) == '-' ) {
            if ( args[i].equalsIgnoreCase("-h") || 
                args[i].equalsIgnoreCase("--help") || 
                args[i].equalsIgnoreCase("-?") ) {
                usage();
            } else if ( args[i].equalsIgnoreCase("-c") || 
                args[i].equalsIgnoreCase("--current") ) {
                currentOnly = true;
            } else if ( args[i].equalsIgnoreCase("-f") || 
                args[i].equalsIgnoreCase("--filetype") ) {
                if ( i+1 < args.length ) {
                    String type = args[i+1];
                    if ( type == "json" || type == "xml" ) {
                        format = type;
                    }
                    i++;
                }
            } else if ( args[i].equalsIgnoreCase("-o") || 
                args[i].equalsIgnoreCase("--output") ) {
                if ( i+1 < args.length ) {
                    outputDirName = args[i+1];
                    i++;
                }
            }
            i++;
        }
        
        if ( i < args.length ) {
            infoDirName = args[i];
        }
        
        logger.info("Reading zone info directory: " + infoDirName);
        logger.info("Only output current rules:" + (currentOnly ? "true" : "false"));
        logger.info("File type is: " + format);
        logger.info("Output dir name: " + outputDirName);        
        
        File infoDir = new File(infoDirName);
        if ( !infoDir.exists() || !infoDir.isDirectory() ) {
            logger.fatal(infoDirName + " is not a directory.");
            System.exit(2);
        }

        File outputDir = new File(outputDirName);
        if ( outputDir.exists() ) {
        	if ( !outputDir.isDirectory() ) {
	            logger.fatal(outputDirName + " exists, but is not a directory.");
	            System.exit(3);
        	}
        } else {
        	outputDir.mkdirs();
        }

        // read all the files into one big clump in memory
        
        File[] infoFiles = infoDir.listFiles();
        ZoneInfoFile zif;
        for ( i = 0; i < infoFiles.length; i++ ) {
            // don't read any files with extensions -- they are not zone info files
            if ( infoFiles[i].isFile() && infoFiles[i].getName().indexOf(".") == -1 ) {
                try {
                    zif = new ZoneInfoFile(infoFiles[i]);
                    zif.parse(zones, ruleSets);
                    zif.close();
                } catch (Exception e) {
                    logger.warn("Skipping file " + infoFiles[i].getPath(), e);
                }
            }
        }
        
        // do something with the results
        try {
	        ZoneWriter zw = ZoneWriter.getInstance(format, outputDir);
	        zw.writeZones(zones, currentOnly);
        } catch (Exception e) {
        	e.printStackTrace();
        }
    }
}
