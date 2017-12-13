import QtQuick 2.0
import "./TestSuiteModule.js" as TestSuiteModule
import "./runner.js" as TestRunnerModule

QtObject {
    Component.onCompleted: {
    	var TestSuite = TestSuiteModule.TestSuite;
    	var TestRunner = TestRunnerModule.TestRunner;
    	
		var runner = new TestRunner("../..");
		
		var suiteDefinitions = {
			"full": {
				"util": "util/nodeunit/testSuite.js",
                //".": "test/testSuite.js",
                // "calendar": "calendar/test/testSuite.js",
                //"date1": "date/test/testSuite.js",
                //"date2": "date/test/testSuite2.js",
                //"date3": "date/test/testSuite3.js",
                //"daterange1": "daterange/test/testSuite.js",
                //"daterange2": "daterange/test/testSuite2.js",
                //"daterange3": "daterange/test/testSuite3.js",
                //"durfmt": "durfmt/test/testSuite.js",
                //"number": "number/test/testSuite.js",
                //"maps": "maps/test/testSuite.js",
                //"ctype": "ctype/test/testSuite.js",
                //"strings-ext": "strings-ext/test/testSuite.js",
                //"phone1": "phone/test/testSuite.js",
                //"phone2": "phone/test/testSuite2.js",
                //"phone3": "phone/test/testSuite3.js",
                //"units": "units/test/testSuite.js",
                //"name": "name/test/testSuite.js",
                //"address1": "address/test/testSuite.js",
                //"address2": "address/test/testSuite2.js",
                //"address3": "address/test/testSuite3.js",
                //"collate": "collate/test/testSuite.js"
			}
		};
		
		var assembly = "dynamic";
		var compilation = "uncompiled";
		var size = "full";
		var set = "modular";
		var suite = suiteDefinitions.full;
		//var suite = ["util/nodeunit/testSuite.js"];
		
		console.log("Running " + compilation + " " + assembly + " suites: " + JSON.stringify(Object.keys(suite)) + "\n");
		
		var s;
		for (s in suite) {
			var inc, ts;
			
			ts = new TestSuite(suite[s]);

			runner.addSuite(ts);
			// console.log("Adding suite " + suite[s]);
		}
		
		// console.log("Running all tests");
		runner.runTests();
    }
}

