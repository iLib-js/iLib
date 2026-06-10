/**
 * 
 * Copyright © 2012, JEDLSoft
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

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.ilib.IlibLocale;

/**
 *
 */
public class JSONFile
	extends AssemblyFile
{
    protected Logger logger = LogManager.getLogger(this.getClass());
    protected String baseName = null;
    
	public JSONFile(File root, File file, String baseName)
	{
		super(root, file);
		
		// escape the base name to comply with Javascript identifier syntax
		this.baseName = baseName.replaceAll("[-:\\+\\.\\(\\)\\\\]", "_");
	}
	
	@Override
	public void process(ArrayList<File> includePath, ArrayList<IlibLocale> locales,
			HashMap<String, AssemblyFile> allFiles) throws Exception 
	{
	    logger.debug("Processing file " + file.getPath());
		// don't need to do anything
		return;
	}

	@Override
	public void writeParents(Writer out, ArrayList<String> visited, ArrayList<IlibLocale> locales)
			throws Exception 
	{
        int i, j;
        String thisPath = file.getPath();
        
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

	@Override
	public void writeDependencies(Writer out, ArrayList<String> visited, ArrayList<IlibLocale> locales)
			throws Exception 
	{
        int i;
        String thisPath = file.getPath();
        
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
    
        logger.debug("Now writing out file " + file.getPath());
        
        try {
            str = readFile();
            out.write("ilib.data." + baseName + " = ");
            out.write(str.toString());
            out.write(";\n"); // in case the file doesn't end with a newline
            setWritten(true);
        } catch ( FileNotFoundException e ) {
            System.err.println("Error: could not read file " + file.getPath());
            throw new Exception(e);
        }
		
		
	}

}
