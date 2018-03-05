import QtQuick 2.6
import "TestSuiteModule.js" as TestSuiteModule
import "runner.js" as TestRunnerModule

QtObject {
    Component.onCompleted: {

        var TestSuite = TestSuiteModule.TestSuite;
        var TestRunner = TestRunnerModule.TestRunner;
        var runner = new TestRunner("../..");

        var suiteDefinitions = {
            //"date": "/date/nodeunit/testSuiteQml.js",
            "date": "/date/nodeunit/testdate.js",
        };

        var s, ts;
        for (s in suiteDefinitions) {
            console.log("s: " + suiteDefinitions[s]);
            ts = new TestSuite(suiteDefinitions[s]);
            runner.addSuite(ts);
        }
        runner.runTests();
    }
}
