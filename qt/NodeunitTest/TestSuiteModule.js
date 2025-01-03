/*
 * TestSuiteModule.js - Define the TestSuite class to run JsUnit tests under Qt/QML
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

function TestSuite(pathname, name) {
    this.moduleName = name;
    this.path = pathname;
    //console.log("[TestSuiteModule.js] new test suite (name) " + this.name + " (path)" + this.path);
};

TestSuite.prototype = {
    /**
     * Add the given subsuite, and run it for the given number of
     * iterations. If iterations is not specified or if it is a number
     * less than 0, iterations will assumed to be 1.
     *
     * @param suite {TestSuite} suite to add
     * @param iterations {number|undefined} number of times to run the suite
     */
    addSuite: function (suite, iterations) {
        this.subSuites.push({
            tests: suite,
            iterations: (typeof(iterations) === 'number' && iterations > 0) ? iterations : 1
        });
    },

    runTests: function() {
        //console.log("[TestSuiteModule.js] TestSuite.runTests: for suite (this.moduleName) " + this.moduleName);
        var suiteComponent = Qt.createComponent("./TestEnvironment.qml");
        if (suiteComponent.status !== Component.Ready) {
            if (suiteComponent.status === Component.Error)
                console.debug("[TestSuiteModules.js] TestSuite.runTests: Error: "+ suiteComponent.errorString());
            return; // or maybe throw
        }
        var suiteRunner = suiteComponent.createObject(null, {
            path: this.path,
            moduleName: this.moduleName
        });
        if (suiteRunner === null) {
            console.log("TestSuite.runTests: failed to run test suite " + this.path);
        }
    }
};

if (!module) {
    var module = {
        exports: {}
    };
}
module.exports = TestSuite;
