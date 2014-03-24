/*
 * JsonZoneWriter.java - 
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
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Set;

import org.apache.log4j.Logger;
import org.json.JSONObject;

/**
 * JsonZoneWriter
 * 
 * @author edwin
 */
public class JsonZoneWriter
    extends ZoneWriter
{
    protected File file;
    protected Logger logger = Logger.getLogger(this.getClass());
    
    public JsonZoneWriter(File file)
    {
        this.file = file;
    }
    
    /* (non-Javadoc)
     * @see com.ilib.tools.zic.ZoneWriter#writeZones(java.util.HashMap, boolean)
     */
    public void writeZones(HashMap<String,Zone> zones, boolean currentOnly)
    {
        JSONObject json;
        String zoneName;
        Zone zone;
        Set<String> zoneNames = zones.keySet();
        Iterator<String> it = zoneNames.iterator();
        Writer writer = null;
        
        try {
            json = new JSONObject();
            while ( it.hasNext() ) {
                zoneName = it.next();
                if (zoneName != null && zoneName.length() > 0) {
                    logger.debug("Processing zone " + zoneName);
                    zone = zones.get(zoneName);
                    json.put(zoneName, zone.getJson(currentOnly));
                }
            }
            
            writer = new OutputStreamWriter(new FileOutputStream(file), "utf-8");
            writer.write(json.toString(4));
            writer.close();
        } catch (Exception e) {
            e.printStackTrace();
            if ( writer != null ) {
                try {
                    writer.close();
                } catch ( IOException e2 ) {}
            }
        }
    }
}
