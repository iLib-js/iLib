/**
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
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.io.Writer;
import java.util.ArrayList;
import java.util.HashMap;

import com.ilib.IlibLocale;

/**
 * @author edwin
 *
 */
public abstract class AssemblyFile 
{
	protected File file;
    protected ArrayList<AssemblyFile> dependencies = new ArrayList<AssemblyFile>();
    protected ArrayList<AssemblyFile> parents = new ArrayList<AssemblyFile>();
    private boolean written = false;
    private boolean processed = false;

    /**
     * Construct a new assembly file instance. This can only be called from the
     * concrete subclasses.
     * 
     * @param file
     */
    protected AssemblyFile(File file)
    {
        this.file = file;
    }

    /**
     * Return the path to the current node's file in the file system.
     * 
     * @return the path to the current node's file in the file system
     */
    public String getPath()
    {
        return file.getPath();
    }
    
    /**
     * Add a parent to the list of parents for this node.
     * 
     * @param parent node to add
     */
    public void addParent(AssemblyFile parent)
    {
        parents.add(parent);
    }

    /**
     * Set the written flag to true, which indicates that this file has been written
     * to the output already and does not need to be written again.
     * @param wr the value to set the written flag to
     */
    protected void setWritten(boolean wr)
    {
    	written = wr;
    }
    
    /**
     * Return whether or not this file has been written to the output yet. If so, it should
     * not be written again.
     * @return whether or not this file has been written to the output already
     */
    public boolean isWritten()
    {
        return written;
    }
    
    /**
     * Set the processed flag, which indicates that the file has been processed for
     * dependencies already and does not need to be processed again.
     * 
     * @param pro the value to set the processed flag to
     */
    protected void setProcessed(boolean pro)
    {
    	processed = pro;
    }
    
    /**
     * Return whether or not this file has been processed already for dependencies.
     * 
     * @return whether or not this file has been processed already for dependencies.
     */
    public boolean isProcessed()
    {
        return processed;
    }
    
    /**
     * Read a file into memory in the form of a StringBuffer and then return it.
     * @return a StringBuffer containing the contents of the file.
     * @throws IOException if the file could not be read
     * @throws FileNotFoundException if the file could not be opened
     */
    protected StringBuffer readFile()
    	throws IOException, FileNotFoundException
    {
    	char[] charBuf = new char[1024];
    	int len;
    	StringBuffer str = new StringBuffer();
        InputStreamReader reader = null;
        
        try {
        	reader = new InputStreamReader(new FileInputStream(file), "utf-8");
        	
	        while ( (len = reader.read(charBuf, 0, 1024)) != -1 ) {
	            str.append(charBuf, 0, len);
	        }
	        reader.close();    
        } catch ( UnsupportedEncodingException e2 ) {
            // should never happen because utf-8 is built in
        } finally {
        	if ( reader != null ) {
        		try {
        			reader.close();
        		} catch ( IOException e3 ) {}
        	}
        }
        return str;
    }
    
	/**
	 * Process the file to find all the dependencies on other files and on data. This method reads
	 * the file contents and searches for comments of the form "// @depends" or "/* @depends *\/".
	 * The contents of the comment with that form is a list of files that the current file depends
	 * upon. The includePath is a list of directories in which to search for the depended files.
	 * The path of a file that is depended upon should be listed as relative to one of the directories
	 * in the include path. This method adds all the files found to the allFile hash, mapping the
	 * file name to the assembly file instance. In the case where the file already exists in the 
	 * allFiles hash because some other assembly file already depended upon it, then the dependency
	 * is stored, but the mapping is not added again to allFiles.
	 * 
	 * @param includePath a path to search for depended upon files
	 * @param allFiles a hash where all the depended upon files are stored
	 * @throws Exception
	 */
	public abstract void process(ArrayList<File> includePath, ArrayList<IlibLocale> locales, HashMap<String, AssemblyFile> allFiles)
	        throws Exception;

	/**
     * Write the dependencies for the farthest ancestors above the current node.
     * 
     * To get all the dependencies right, we start with any arbitrary node
     * in the graph. From there, we traverse the parent links until we find
     * a source node. That is, a node with no parents. From there, we do
     * a depth-first search of the dependencies of that source until we get
     * to a sink node. (A node with no dependencies.) Then, we write out that
     * sink node and recurse back up. Each level writes out all its 
     * dependencies first, then itself and then returns to the previous
     * level. We keep track of all the nodes we have already done so that
     * if a subsequent depth first search hits a node that was already
     * done, we can avoid doing that subtree more than once. Once all the
     * dependencies of the source have been satisfied, we recurse back
     * again to find other sources. Once all the parents for a node have
     * been done, we attempt to do the dependencies for the current
     * node if there are any left.
     * 
     * This method is the one that traces the ancestry to the source node
     * and then calls the writeDependencies call to actually write out
     * the entire dependency tree from there. 
     * 
     * @param out a writer to write the files to
     * @param visited an array of paths to nodes that have already been visited
     * @param locales set of locales to generate data for
     * @exception CircularDependencyException if there are any circular 
     * dependencies in the code
     */
    public abstract void writeParents(Writer out, ArrayList<String> visited, ArrayList<IlibLocale> locales)
        throws Exception;
    
    /**
     * Write out the files that this file is dependent upon to the out writer,
     * and recorded that the files have already been visited in the visited
     * array.
     * 
     * @param out
     * @param visited
     * @param locales set of locales to generate data for
     * @throws Exception
     */
    public abstract void writeDependencies(Writer out, ArrayList<String> visited, ArrayList<IlibLocale> locales)
            throws Exception;
}
