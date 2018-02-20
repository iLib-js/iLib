import QtQuick 2.0
import "./TestSuiteModule.js" as TestSuiteModule
import "./runner.js" as TestRunnerModule

QtObject {
    Component.onCompleted: {
        var TestSuite = TestSuiteModule.TestSuite;
        var TestRunner = TestRunnerModule.TestRunner;
        
        var runner = new TestRunner("../..");
        
        var suiteDefinitions = {
            "core": {
                "util": "util/test/testSuite.js",
                ".": "test/testSuite.js"
            },
            "standard": {
                "util": "util/test/testSuite.js",
                ".": "test/testSuite.js",
                "calendar": "calendar/test/testSuite.js",
                "date1": "date/test/testSuite.js",
                "date2": "date/test/testSuite2.js",
                "date3": "date/test/testSuite3.js",
                "daterange1": "daterange/test/testSuite.js",
                "daterange2": "daterange/test/testSuite2.js",
                "daterange3": "daterange/test/testSuite3.js",
                "durfmt": "durfmt/test/testSuite.js",
                "number": "number/test/testSuite.js",
                "maps": "maps/test/testSuite.js",
                "ctype": "ctype/test/testSuite.js"
            },
            "full": {
                "util": "util/test/testSuite.js",
                "date1": "date/test/testSuite.js"
                   }
        };
        
        var assembly = "dynamic";
        var compilation = "uncompiled";
        var size = "full";
        var set = "modular";
        var suite = suiteDefinitions.full;
        //var suite = ["util/test/testSuite.js"];
        
        console.log("Running " + compilation + " " + assembly + " suites: " + JSON.stringify(Object.keys(suite)) + "\n");
        
        var s;
        for (s in suite) {
            var inc, ts;
            
            ts = new TestSuite(suite[s]);

            if (assembly === "dynamic") {
                //ts.include("../lib/ilib-test-dyn.js");
                if (set === "legacy") {
                    ts.include("../lib/ilib-stubs-dyn.js");
                }
            } else {
                inc = "../output/js/ilib-ut" + ((assembly === "dynamicdata") ? "-dyn" : "") + ((compilation === "compiled") ? "-compiled" : "") + ".js";
                ts.include(inc);
                ts.include("../lib/ilib-test.js");
                ts.include(set === "legacy" ? "../lib/ilib-stubs.js" : "../lib/ilib-stubs-map.js");
            }

            runner.addSuite(ts);
            // console.log("Adding suite " + suite[s]);
        }
        
        // console.log("Running all tests");
        runner.runTests();
    }
}

