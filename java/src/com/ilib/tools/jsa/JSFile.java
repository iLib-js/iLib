/*
 * JSFile.java - 
 * 
 * Copyright © 2012-2013, JEDLSoft
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
import java.io.FileNotFoundException;
import java.io.Writer;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.log4j.Logger;

import com.ilib.IlibLocale;

/**
 * JSFile
 * 
 * @author edwin
 */
public class JSFile
	extends AssemblyFile
{
    protected Logger logger = Logger.getLogger(this.getClass());
    protected ArrayList<Pattern> dependsPatterns = new ArrayList<Pattern>();
    protected ArrayList<Pattern> dataPatterns = new ArrayList<Pattern>();
    protected ArrayList<Pattern> macroPatterns = new ArrayList<Pattern>();
    
    public JSFile(File file)
    {
        super(file);
        
        dependsPatterns.add(Pattern.compile("/\\*\\s*!depends\\s*([^\\*]+)\\*/"));
        dependsPatterns.add(Pattern.compile("\\/\\/\\s*!depends\\s*([^\\n]+)"));

        dataPatterns.add(Pattern.compile("/\\*\\s*!data\\s*([^\\*]+)\\*/"));
        dataPatterns.add(Pattern.compile("\\/\\/\\s*!data\\s*([^\\n]+)"));
        
        macroPatterns.add(Pattern.compile("/\\*\\s*!macro\\s*([^\\*]+)\\*/"));
        macroPatterns.add(Pattern.compile("\\/\\/\\s*!macro\\s*(\\S*)"));
    }
    
    /**
     * Find a javascript file somewhere on the include path.
     * 
     * @param includePath list of directories to search
     * @param fileName relative path to the javascript file
     * @param allFiles cache of all files already processed
     * @return a JSFile instance
     * @throws Exception if the file cannot be found
     */
    protected AssemblyFile find(ArrayList<File> includePath, String fileName, HashMap<String, AssemblyFile> allFiles)
        throws Exception
    {
        int i = 0;
        File newFile = new File(includePath.get(i), fileName);
        JSFile jsf;
           
        while ( !newFile.canRead() && i < includePath.size() ) {
            newFile = new File(includePath.get(i++), fileName);
        }
        
        if ( !newFile.canRead() ) {
            throw new Exception("Cannot find file " + fileName + " which " + file.getPath() + " depends upon.");
        }

        if ( allFiles.containsKey(newFile.getPath()) ) {
            return allFiles.get(newFile.getPath());
        }
        
        jsf = new JSFile(newFile);
        allFiles.put(newFile.getPath(), jsf);
        
        return jsf;
    }

    /**
     * Locate a json file somewhere on the include path.
     * 
     * @param includePath list of directories to search
     * @param baseName the base name of the json file without the locale spec attached
     * @param fileName relative path to the javascript file
     * @param allFiles cache of all files already processed
     */
    protected JSONFile locate(ArrayList<File> includePath, String baseName, String fileName, HashMap<String, AssemblyFile> allFiles)
    {
        int i = 0;
        File newFile = new File(includePath.get(i), fileName);
        JSONFile json = null;
        
        while ( !newFile.canRead() && i < includePath.size() ) {
            logger.debug("Checking path " + newFile.getPath());
            newFile = new File(includePath.get(i++), fileName);
        }
        
        if ( newFile.canRead() ) {
        	logger.debug("Found data file " + newFile.getPath());
        	if ( allFiles.containsKey(newFile.getPath()) ) {
            	json = (JSONFile) allFiles.get(newFile.getPath());
            } else {
            	json = new JSONFile(newFile, baseName);
            	allFiles.put(newFile.getPath(), json);
            }
        	dependencies.add(json);
            json.addParent(this);
        }
        
        return json;
    }
    
    /**
     * Find all json files for a particular locale with the given baseName.
     * 
     * @param includePath
     * @param baseName
     * @param locale
     * @param allFiles
     * @throws Exception
     */
    protected void findAllForLocale(ArrayList<File> includePath, String baseName, IlibLocale locale, HashMap<String, AssemblyFile> allFiles)
        throws Exception
    {
    	String baseFileName = baseName + ".json";
    	StringBuilder localeDir = new StringBuilder();
    	String fileName;
		
		if ( locale.getLanguage() != null && locale.getLanguage().length() > 0 ) {
			localeDir.append(locale.getLanguage());
			fileName = localeDir + "/" + baseFileName;
			locate(includePath, baseName+"_"+localeDir.toString().replace('/', '_'), fileName, allFiles);

			if ( locale.getScript() != null && locale.getScript().length() > 0) {
				localeDir.append("/");
				localeDir.append(locale.getScript());
				fileName = localeDir + "/" + baseFileName;
				locate(includePath, baseName+"_"+localeDir.toString().replace('/', '_'), fileName, allFiles);

				if ( locale.getRegion() != null && locale.getRegion().length() > 0) {
					localeDir.append("/");
					localeDir.append(locale.getRegion());
					fileName = localeDir + "/" + baseFileName;
					locate(includePath, baseName+"_"+localeDir.toString().replace('/', '_'), fileName, allFiles);

					if ( locale.getVariant() != null && locale.getVariant().length() > 0) {
						localeDir.append("/");
						localeDir.append(locale.getVariant());
				        fileName = localeDir + "/" + baseFileName;
				        locate(includePath, baseName+"_"+localeDir.toString().replace('/', '_'), fileName, allFiles);
					}
				}
			} else if ( locale.getRegion() != null && locale.getRegion().length() > 0) {
				localeDir.append("/");
				localeDir.append(locale.getRegion());
				fileName = localeDir + "/" + baseFileName;
				locate(includePath, baseName+"_"+localeDir.toString().replace('/', '_'), fileName, allFiles);

				if ( locale.getVariant() != null && locale.getVariant().length() > 0) {
					localeDir.append("/");
					localeDir.append(locale.getVariant());
			        fileName = localeDir + "/" + baseFileName;
			        locate(includePath, baseName+"_"+localeDir.toString().replace('/', '_'), fileName, allFiles);
				}
			}
		}
		
		localeDir = new StringBuilder();
		if ( locale.getScript() != null && locale.getScript().length() > 0) {
			localeDir.append(locale.getScript());
			fileName = localeDir + "/" + baseFileName;
			locate(includePath, baseName+"_"+localeDir.toString().replace('/', '_'), fileName, allFiles);

			if ( locale.getRegion() != null && locale.getRegion().length() > 0) {
				localeDir.append("/");
				localeDir.append(locale.getRegion());
				fileName = localeDir + "/" + baseFileName;
				locate(includePath, baseName+"_"+localeDir.toString().replace('/', '_'), fileName, allFiles);

				if ( locale.getVariant() != null && locale.getVariant().length() > 0) {
					localeDir.append("/");
					localeDir.append(locale.getVariant());
			        fileName = localeDir + "/" + baseFileName;
			        locate(includePath, baseName+"_"+localeDir.toString().replace('/', '_'), fileName, allFiles);
				}
			}
		}
		
		localeDir = new StringBuilder();
		if ( locale.getRegion() != null && locale.getRegion().length() > 0) {
			localeDir.append(locale.getRegion());
			fileName = "und/" + localeDir + "/" + baseFileName;
			locate(includePath, baseName+"_"+localeDir.toString().replace('/', '_'), fileName, allFiles);

			if ( locale.getVariant() != null && locale.getVariant().length() > 0) {
				localeDir.append("/");
				localeDir.append(locale.getVariant());
		        fileName = "und/" + localeDir + "/" + baseFileName;
		        locate(includePath, baseName+"_"+localeDir.toString().replace('/', '_'), fileName, allFiles);
			}
		}
		
		localeDir = new StringBuilder();
		if ( locale.getVariant() != null && locale.getVariant().length() > 0) {
			localeDir.append(locale.getVariant());
	        fileName = localeDir + "/" + baseFileName;
	        locate(includePath, baseName+"_"+localeDir.toString().replace('/', '_'), fileName, allFiles);
		}
    }
    
    /**
     * Find all json files for a given basename across all locales. This method always finds
     * the generic shared json, even if the locale list is empty, so that there is always a
     * default if a particular ilib function does not have locale data or if the copy of ilib
     * is used with dynamic loading instead of preassembled data.
     * 
     * @param includePath
     * @param locales
     * @param baseName
     * @param allFiles
     * @throws Exception
     */
    protected void findAll(ArrayList<File> includePath, ArrayList<IlibLocale> locales, String baseName, HashMap<String, AssemblyFile> allFiles)
    		throws Exception
    {
    	if ( locales != null && locales.size() > 0 ) {
    	    locate(includePath, baseName, baseName + ".json", allFiles);
            
            for ( int i = 0; i < locales.size(); i++ ) {
        		findAllForLocale(includePath, baseName, locales.get(i), allFiles);
        	}
        }
    }

    /* (non-Javadoc)
     * @see com.ilib.tools.jsa.AssemblyFile#process(java.util.ArrayList, java.util.ArrayList, java.util.HashMap)
     */
    public void process(ArrayList<File> includePath, ArrayList<IlibLocale> locales, HashMap<String, AssemblyFile> allFiles)
        throws Exception
    {
        int start = 0, nameStart, groupEnd, i;
        StringBuffer str;
        String fileName;
    
        logger.debug("Processing file " + file.getPath());
        
        if ( isProcessed() ) {
            // don't include the same file more than once
            logger.debug("Already processed file " + file.getPath() + " before.");
            return;
        }
        
        if ( !allFiles.containsKey(file.getPath()) ) {
            allFiles.put(file.getPath(), this);
        }
        
        try {
        	str = readFile();
        	
            for ( int p = 0; p < dependsPatterns.size(); p++ ) {
                Matcher matcher = dependsPatterns.get(p).matcher(str);
                start = 0;
                while ( matcher.find(start) ) {
                    start = matcher.end();
                    i = matcher.start(1);
                    groupEnd = matcher.end(1);
                 
                    while ( i < groupEnd ) {
                        nameStart = i;
                        while ( i < groupEnd && !Character.isWhitespace(str.charAt(i)) ) {
                            i++;
                        }
                        fileName = str.substring(nameStart, i);
                        
                        if ( fileName.length() > 0 ) {
                            AssemblyFile jsfile = find(includePath, fileName, allFiles);
                            logger.debug("Found dependency: " + file.getPath() + " -> " + jsfile.getPath());
                            
                            dependencies.add(jsfile);
                            jsfile.addParent(this);
                        }
                            
                        while ( i < groupEnd && Character.isWhitespace(str.charAt(i)) ) {
                            i++;
                        }
                    }
                }
            }

            for ( int p = 0; p < dataPatterns.size(); p++ ) {
                Matcher matcher = dataPatterns.get(p).matcher(str);
                start = 0;
                while ( matcher.find(start) ) {
                    start = matcher.end();
                    i = matcher.start(1);
                    groupEnd = matcher.end(1);
                 
                    while ( i < groupEnd ) {
                        nameStart = i;
                        while ( i < groupEnd && !Character.isWhitespace(str.charAt(i)) ) {
                            i++;
                        }
                        fileName = str.substring(nameStart, i);
                        
                        if ( fileName.length() > 0 ) {
                            logger.debug("Found data dependency: " + file.getPath() + " -> " + fileName);
                        	this.findAll(includePath, locales, fileName, allFiles);
                        }
                            
                        while ( i < groupEnd && Character.isWhitespace(str.charAt(i)) ) {
                            i++;
                        }
                    }
                }
            }

            str = null;
            setProcessed(true);
            
            /* process the dependencies after we have found them all and nulled 
             * out str so that we don't keep all the files in memory at the same
             * time. 
             */
            for ( i = 0; i < dependencies.size(); i++ ) {
                dependencies.get(i).process(includePath, locales, allFiles);
            }
        } catch ( FileNotFoundException e ) {
            System.err.println("Error: could not read file " + file.getPath());
            throw new Exception(e);
        }
    }
    
    /* (non-Javadoc)
     * @see com.ilib.tools.jsa.AssemblyFile#writeParents(java.io.Writer, java.util.ArrayList, java.util.ArrayList)
     */
    public void writeParents(Writer out, ArrayList<String> visited, ArrayList<IlibLocale> locales)
        throws Exception
    {
        int i, j;
        String thisPath = getPath();
        
        for ( i = 0; i < visited.size(); i++ ) {
            if ( thisPath.equals(visited.get(i)) ) {
                j = visited.size() - 1;
                String depends = "File " + thisPath + " depends on files that eventually depend on it again. Path:\n";
                while ( j >= i ) {
                    depends += visited.get(j--) + " -> \n";
                }
                depends += thisPath + "\n";
                throw new CircularDependencyException(depends);
            }
        }
        
        visited.add(thisPath);
       
        // recursively find the the source node
        for ( i = 0; i < parents.size(); i++ ) {
            parents.get(i).writeParents(out, visited, locales);
        }

        // start with a new visited array to catch circular dependencies
        // starting at this source node
        writeDependencies(out, new ArrayList<String>(), locales);
    }
    
    /* (non-Javadoc)
     * @see com.ilib.tools.jsa.AssemblyFile#writeDependencies(java.io.Writer, java.util.ArrayList)
     */
    public void writeDependencies(Writer out, ArrayList<String> visited, ArrayList<IlibLocale> locales)
        throws Exception
    {
        int i;
        String thisPath = getPath();
        
        if ( isWritten() ) {
            // already did this one
            return;
        }

        for ( i = 0; i < visited.size(); i++ ) {
            if ( thisPath.equals(visited.get(i)) ) {
                String depends = "File " + thisPath + " depends on files that eventually depend on it again. Path:\n";
                while ( i < visited.size() ) {
                    depends += visited.get(i++) + " ->\n";
                }
                depends += thisPath + "\n";
                throw new CircularDependencyException(depends);
            }
        }

        visited.add(thisPath);

        // do the dependencies first before the contents of this node
        for ( i = 0; i < dependencies.size(); i++ ) {
            dependencies.get(i).writeDependencies(out, visited, locales);
        }

        StringBuffer str;
    
        logger.debug("Now writing out file " + getPath());
        
        try {
            int start, groupEnd, nameStart;
            String macroName;
            
        	str = readFile();
        	
            for ( int p = 0; p < macroPatterns.size(); p++ ) {
                Matcher matcher = macroPatterns.get(p).matcher(str);
                start = 0;
                while ( matcher.find() ) {
                    i = matcher.start(1);
                    groupEnd = matcher.end(1);
                 
                    if ( i < groupEnd ) {
                        nameStart = i;
                        while ( i < groupEnd && !Character.isWhitespace(str.charAt(i)) ) {
                            i++;
                        }
                        macroName = str.substring(nameStart, i);
                        
                        if ( macroName.length() > 0 ) {
                            if ( macroName.equalsIgnoreCase("localelist") ) {
                                StringBuffer sb = new StringBuffer();
                                for ( int j = 0; j < locales.size(); j++ ) {
                                    if ( j > 0 ) {
                                        sb.append(',');
                                    }
                                    sb.append('"');
                                    sb.append(locales.get(j).toString());
                                    sb.append('"');
                                }
                                str = str.replace(matcher.start(), matcher.end(), sb.toString());
                                matcher.reset();
                            } else if ( macroName.equalsIgnoreCase("ilibVersion") ) {
                                StringBuffer sb = new StringBuffer();
                                sb.append('"');
                                sb.append(JSAssemble.version);
                                sb.append('"');
                                str = str.replace(matcher.start(), matcher.end(), sb.toString());
                                matcher.reset();
                            }
                        }
                    }
                }
            }

        	out.write(str.toString());
            out.append('\n'); // in case the file doesn't end with one
            setWritten(true);
        } catch ( FileNotFoundException e ) {
            System.err.println("Error: could not read file " + file.getPath());
            throw new Exception(e);
        }
    }
}
