/*
 * ZoneWriter.java - 
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

/**
 * ZoneWriter
 * 
 * @author edwin
 */
public abstract class ZoneWriter
{
    public static ZoneWriter getInstance(String type, File outputFileName)
    {
        if ( type.equalsIgnoreCase("json") ) {
            return new JsonZoneWriter(outputFileName);
        }
        return null;
    }
    
    public abstract void writeZones(HashMap<String,Zone> zones, boolean currentOnly);
}
