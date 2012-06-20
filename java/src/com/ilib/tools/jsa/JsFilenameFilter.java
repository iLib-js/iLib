/*
 * JsFilenameFilter.java - 
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
import java.io.FilenameFilter;

/**
 * JsFilenameFilter
 * 
 * @author edwin
 */
public class JsFilenameFilter implements FilenameFilter
{
    public JsFilenameFilter() {}
    
    /* (non-Javadoc)
     * @see java.io.FilenameFilter#accept(java.io.File, java.lang.String)
     */
    @Override
    public boolean accept(File dir, String name)
    {
        int i = name.lastIndexOf('.');
        String extension;
        
        if ( i < 0 ) {
            File f = new File(dir, name);
            return f.isDirectory();
        }
        
        extension = name.substring(i);
        return extension.compareToIgnoreCase(".js") == 0;
    }

}
