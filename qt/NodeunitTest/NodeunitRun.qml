import QtQuick 2.5
import "TestSuiteModule.js" as TestSuiteModule
import "runner.js" as TestRunnerModule

QtObject {
    property Timer timer: Timer {
        interval: 500
        running: true
        onTriggered: {

            var TestSuite = TestSuiteModule.TestSuite;
            var TestRunner = TestRunnerModule.TestRunner;
            var runner = new TestRunner();

            var suiteDefinitions = {
                "address": "/address/nodeunit/testSuiteFiles.js",
                //"calendar": "/calendar/nodeunit/testSuiteFiles.js",
                //"collate": "/collate/nodeunit/testSuiteFiles.js",  /* It takes almost 11 minutes. */
                /*"ctype": "/ctype/nodeunit/testSuiteFiles.js",
                "date": "/date/nodeunit/testSuiteFiles.js",
                "daterange": "/daterange/nodeunit/testSuiteFiles.js",
                "durfmt": "/durfmt/nodeunit/testSuiteFiles.js",
                "name": "/name/nodeunit/testSuiteFiles.js",
                "number": "/number/nodeunit/testSuiteFiles.js",
                "maps": "/maps/nodeunit/testSuiteFiles.js",
                "phone": "/phone/nodeunit/testSuiteFiles.js",
                "root": "/root/nodeunit/testSuiteFiles.js",
                "strings-ext": "/strings-ext/nodeunit/testSuiteFiles.js",
                "units": "/units/nodeunit/testSuiteFiles.js",
                "util": "/util/nodeunit/testSuiteFiles.js"*/
            };

            var s, ts;
            for (s in suiteDefinitions) {
                ts = new TestSuite(suiteDefinitions[s], s);
                //console.log("[NodeunitRun.qml] <<<<< name: " + s + "  "+ suiteDefinitions[s]);
                runner.addSuite(ts);
            }
            runner.runTests();
            console.log("\n *************************** All iLib tests on QML are done. ***********************************");
            Qt.quit();
        }
    }
}
