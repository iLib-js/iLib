/*
 * testglobal.js - test the ilib static routines
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

function testGetLocaleDefault() {
    assertEquals("en-US", ilib.getLocale());
}

function testSetLocale() {
    assertEquals("en-US", ilib.getLocale());
    
    ilib.setLocale("it-IT");
    
    assertEquals("it-IT", ilib.getLocale());
    delete ilib.locale; // clean up
}

function testSetLocaleEmpty() {
    assertEquals("en-US", ilib.getLocale());
    
    ilib.setLocale();
    
    assertEquals("en-US", ilib.getLocale());
}

function testGetVersion() {
    assertEquals("1.3", ilib.getVersion());
}

function testGetTimeZoneDefault() {
    assertEquals("Europe/London", ilib.getTimeZone());
}

function testSetTimeZone() {
    assertEquals("Europe/London", ilib.getTimeZone());
    
    ilib.setTimeZone("America/Los_Angeles");
    
    assertEquals("America/Los_Angeles", ilib.getTimeZone());
    delete ilib.tz; // clean up
}

function testSetTimeZoneEmpty() {
    assertEquals("Europe/London", ilib.getTimeZone());
    
    ilib.setTimeZone();
    
    assertEquals("Europe/London", ilib.getTimeZone());
}
