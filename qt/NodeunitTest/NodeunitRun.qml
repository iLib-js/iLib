import QtQuick 2.5
import "TestSuiteModule.js" as TestSuiteModule
import "runner.js" as TestRunnerModule

QtObject {
    Component.onCompleted: {

        var TestSuite = TestSuiteModule.TestSuite;
        var TestRunner = TestRunnerModule.TestRunner;
        var runner = new TestRunner();

        var suiteDefinitions = {
            "address": "/address/nodeunit/testSuiteQml.js",
            "calendar": "/calendar/nodeunit/testSuiteQml.js",
            "collate": "/collate/nodeunit/testSuiteQml.js",  /* It takes almost 11 minutes. */
            "ctype": "/ctype/nodeunit/testSuiteQml.js",
            "date": "/date/nodeunit/testSuiteQml.js",
            "daterange": "/daterange/nodeunit/testSuiteQml.js",
            "durfmt": "/durfmt/nodeunit/testSuiteQml.js",
            "name": "/name/nodeunit/testSuiteQml.js",
            "number": "/number/nodeunit/testSuiteQml.js",
            "maps": "/maps/nodeunit/testSuiteQml.js",
            "phone": "/phone/nodeunit/testSuiteQml.js",
            "root": "/root/nodeunit/testSuiteQml.js",
            "strings-ext": "/strings-ext/nodeunit/testSuiteQml.js",
            "units": "/units/nodeunit/testSuiteQml.js",
            "util": "/util/nodeunit/testSuiteQml.js"
        };

        var s, ts;
        for (s in suiteDefinitions) {
            ts = new TestSuite(suiteDefinitions[s], s);
            //console.log("[NodeunitRun.qml] <<<<< name: " + s + "  "+ suiteDefinitions[s]);
            runner.addSuite(ts);
        }
        runner.runTests();
        console.log("\n *************************** All of iLib Test on QML is Done. ***********************************");

    }
}
