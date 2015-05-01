/*
 * testloader.js - test the loader object for whatever platform this test 
 * is running on
 * 
 * Copyright © 2015, JEDLSoft
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

var ilib = require("./../lib/ilib.js");

function testLoaderExists() {
    var loader = ilib.getLoader();
    
    assertNotUndefined(loader);
}

function testLoaderIsAvailable() {
    var loader = ilib.getLoader();
    assertNotUndefined(loader);
    
    assertTrue(loader.isAvailable("dateformats.json"));
}

function testLoaderIsAvailableFalse() {
    var loader = ilib.getLoader();
    assertNotUndefined(loader);
    
    assertFalse(loader.isAvailable("notavailable.json"));
}

function testLoaderIsAvailableWithDirectory() {
    var loader = ilib.getLoader();
    assertNotUndefined(loader);
    
    assertTrue(loader.isAvailable("am/dateformats.json"));
}

function testLoaderIsAvailableWithDirectories() {
    var loader = ilib.getLoader();
    assertNotUndefined(loader);
    
    assertTrue(loader.isAvailable("und/US/localeinfo.json"));
}

function testLoaderListAvailableFilesNotEmpty() {
    var loader = ilib.getLoader();
    assertNotUndefined(loader);
    
    var files = loader.listAvailableFiles();
    assertNotUndefined(files);
}

function testLoaderListAvailableFilesRightContents() {
    var loader = ilib.getLoader();
    assertNotUndefined(loader);
    
    var files = loader.listAvailableFiles();
    
    var found = false;
    for (var list in files) {
    	if (files[list].indexOf("und/US/localeinfo.json") !== -1) found = true;
    }
    assertTrue(found);
}

function testLoaderLoadFilesSingle() {
    var loader = ilib.getLoader();
    assertNotUndefined(loader);

    var files = loader.loadFiles(["und/US/localeinfo.json"], true, undefined, undefined);
    
    assertNotUndefined(files);
    assertEquals(1, files.length);
}

function testLoaderLoadFilesSingleRightContents() {
    var loader = ilib.getLoader();
    assertNotUndefined(loader);

    var files = loader.loadFiles(["und/US/localeinfo.json"], true, undefined, undefined);
    var json = files[0];
    
    assertEquals("USD", json.currency);
    assertEquals(0, json.firstDayOfWeek);
    assertEquals("United States", json["region.name"]);
    assertEquals("US", json.locale);
}

function testLoaderLoadFilesMultiple() {
    var loader = ilib.getLoader();
    assertNotUndefined(loader);

    var files = loader.loadFiles([
        "localeinfo.json",
        "en/localeinfo.json",
        "und/US/localeinfo.json"
    ], true, undefined, undefined);
    
    assertNotUndefined(files);
    assertEquals(3, files.length);
}

function testLoaderLoadFilesMultipleRightContents() {
    var loader = ilib.getLoader();
    assertNotUndefined(loader);

    var files = loader.loadFiles([
        "localeinfo.json",
        "en/localeinfo.json",
        "und/US/localeinfo.json"
    ], true, undefined, undefined);
    
    assertNotUndefined(files);

    assertEquals("24", files[0].clock);
    assertEquals("gregorian", files[0].calendar);
    assertEquals(1, files[0].firstDayOfWeek);
    assertEquals("Etc/UTC", files[0].timezone);
    assertEquals("metric", files[0].units);

    assertEquals("12", files[1].clock);
    assertEquals(".", files[1].numfmt.decimalChar);
    assertEquals(",", files[1].numfmt.groupChar);
    assertEquals("English", files[1]["language.name"]);
    assertEquals("en", files[1].locale);

    assertEquals("USD", files[2].currency);
    assertEquals(0, files[2].firstDayOfWeek);
    assertEquals("United States", files[2]["region.name"]);
    assertEquals("US", files[2].locale);
}

function testLoaderLoadFilesMultipleMissingFile() {
    var loader = ilib.getLoader();
    assertNotUndefined(loader);

    var files = loader.loadFiles([
        "localeinfo.json",
        "en/localeinfo.json",
        "en/US/localeinfo.json",
        "und/US/localeinfo.json"
    ], true, undefined, undefined);
    
    assertNotUndefined(files);
    assertEquals(4, files.length);
}

function testLoaderLoadFilesMultipleMissingFileRightContents() {
    var loader = ilib.getLoader();
    assertNotUndefined(loader);

    var files = loader.loadFiles([
        "localeinfo.json",
        "en/localeinfo.json",
        "en/US/localeinfo.json", // this one doesn't exist
        "und/US/localeinfo.json"
    ], true, undefined, undefined);
    
    assertNotUndefined(files);

    assertEquals("24", files[0].clock);
    assertEquals("gregorian", files[0].calendar);
    assertEquals(1, files[0].firstDayOfWeek);
    assertEquals("Etc/UTC", files[0].timezone);
    assertEquals("metric", files[0].units);

    assertEquals("12", files[1].clock);
    assertEquals(".", files[1].numfmt.decimalChar);
    assertEquals(",", files[1].numfmt.groupChar);
    assertEquals("English", files[1]["language.name"]);
    assertEquals("en", files[1].locale);
    
    assertUndefined(files[2]);

    assertEquals("USD", files[3].currency);
    assertEquals(0, files[3].firstDayOfWeek);
    assertEquals("United States", files[3]["region.name"]);
    assertEquals("US", files[3].locale);
}
