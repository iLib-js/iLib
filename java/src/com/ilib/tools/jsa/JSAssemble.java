/*
 * JSAssemble.java - 
 * 
 * Copyright © 2012, JEDL Software, Inc.
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
package com.ilib.tools.jsa;

import java.io.File;
import java.io.FileOutputStream;
import java.io.FilenameFilter;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Locale;

import org.apache.log4j.Logger;

/**
 * JSAssemble
 * 
 * @author edwin
 */
public class JSAssemble
{
    public static Logger logger = null;
    public static FilenameFilter filter = new JsFilenameFilter();
    protected static ArrayList<File> ipath;
     
    public class JsFilter
    {
    }
    
    public static void usage()
    {
        System.out.println("jsa: process includes to assemble a single js file");
        System.out.println("Usage: jsa [-i include_dir] [-o outfile] [-l locale_list] [js_file_name ...]");
        
        System.out.println("-i include_dir      - add an include directory to the path to find other\n" +
        		           "                      js files.");
        System.out.println("-o outfile          - specify the resulting assembled output file. Default is\n" +
        		           "                      to send the output to stdout.");
        System.out.println("-l locale_list      - specify a comma-separated list of locales to use when including data files.");
        System.out.println("js_file_name        - name of a Javascript file to process. If none given, the \n" +
        	               "                      current directory is recursively searched for all\n" +
        	               "                      Javascript files.");
    }
    
    public static void findAllJS(File dir, ArrayList<AssemblyFile> jsFiles)
    {
        int i;
        
        logger.debug("Searching directory " + dir.toString());
        File[] files = dir.listFiles(filter);
        if ( files != null ) {
            for ( i = 0; i < files.length; i++ ) {
                if (files[i].isDirectory()) {
                    findAllJS(files[i], jsFiles);
                } else {
                    jsFiles.add(new JSFile(files[i]));
                }
            }
        }
    }
    
    public static void main(String[] args)
    {
        String target, lower;
        ArrayList<AssemblyFile> files = new ArrayList<AssemblyFile>();
        HashMap<String, AssemblyFile> jsFiles = new HashMap<String, AssemblyFile>();
        AssemblyFile file;
        Writer out = null;
        String localesString = null;
        ArrayList<Locale> locales = new ArrayList<Locale>();
        
        logger = Logger.getLogger(JSAssemble.class.toString());
        
        target = "iliball.js";
        
        ipath = new ArrayList<File>();
        int i = 0;
        
        logger.debug("Current directory is " + System.getProperty("user.dir"));
        while ( i < args.length ) {
            lower = args[i].toLowerCase();
            if ( lower.equalsIgnoreCase("-h") || lower.equalsIgnoreCase("--help") ) {
                usage();
                System.exit(1);
            } else if ( lower.equalsIgnoreCase("-i") || lower.equalsIgnoreCase("--include") ) {
                if ( i + 1 < args.length ) {
                    ipath.add(new File(args[i+1]));
                    logger.debug("Adding " + args[i+1] + " to include path.");
                    i++;
                } else {
                    System.err.println("Error: missing parameter to -i argument");
                    System.exit(2);
                }
            } else if ( lower.equalsIgnoreCase("-o") || lower.equalsIgnoreCase("--output") ) {
                if ( i + 1 < args.length ) {
                    target = args[i+1];
                    i++;
                    logger.debug("Sending output to file " + target);
                } else {
                    System.err.println("Error: missing parameter to -o argument");
                    System.exit(2);
                }
            } else if ( lower.equalsIgnoreCase("-l") || lower.equalsIgnoreCase("--locales") ) {
                if ( i + 1 < args.length ) {
                    localesString = args[i+1];
                    i++;
                    logger.debug("Only reading data for locales " + localesString);
                } else {
                    System.err.println("Error: missing parameter to -l argument");
                    System.exit(2);
                }
            } else if ( lower.charAt(0) != '-' ) {
                File f = new File(args[i]);
                if ( f.isFile() ) {
                    files.add(new JSFile(f));
                } else {
                    // recursively search any directory parameters
                    findAllJS(f, files);
                }
            } else {
                logger.warn("Warning: unrecognized argument " + args[i] + ". Ignoring...");
            }
            i++;
        }
        
        // always search the current directory as the last thing on the path
        ipath.add(new File("."));
        
        if ( files.size() == 0 ) {
            // search for js files instead
            findAllJS(new File("."), files);
        }
        
        if (localesString != null) {
        	String[] parts;
        	String[] locs = localesString.split(",");
        	Locale locale;
        	for ( i = 0; i < locs.length; i++ ) {
        		parts = locs[i].split("-");
        		locale = parts.length > 2 ? new Locale(parts[0], parts[1], parts[2]) : 
        		         (parts.length > 1 ? new Locale(parts[0], parts[1]) : 
        		             new Locale(parts[0])); 
        		locales.add(locale);
        	}
        }
        
        try {
           // now process each file
            for ( i = 0; i < files.size(); i++ ) {
                file = files.get(i);
                logger.info("Reading dependencies for file " + file.getPath());
                file.process(ipath, locales, jsFiles);
            }
            
            out = new OutputStreamWriter(new FileOutputStream(target), "utf-8");
            
            for ( i = 0; i < files.size(); i++ ) {
                file = files.get(i);
                logger.info("Writing dependencies for file " + file.getPath());
                file.writeParents(out, new ArrayList<String>());
            }
        } catch ( Exception e ) {
            logger.error("Cannot write to file " + target);
            e.printStackTrace();
            System.exit(1);
        } finally {
            try {
                if ( out != null ) {
                    out.close();
                } 
            } catch ( IOException e2 ) {}
        }
        
        logger.info("Done");
        System.exit(0);
    }
}
