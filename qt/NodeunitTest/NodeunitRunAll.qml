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
                "address": "/address/testSuiteFiles.js",
                "calendar": "/calendar/testSuiteFiles.js",
                "collate": "/collate/testSuiteFiles.js",  /* It takes almost 11 minutes. */
                "ctype": "/ctype/testSuiteFiles.js",
                "date": "/date/testSuiteFiles.js",
                "daterange": "/daterange/testSuiteFiles.js",
                "durfmt": "/durfmt/testSuiteFiles.js",
                "name": "/name/testSuiteFiles.js",
                "number": "/number/testSuiteFiles.js",
                "maps": "/maps/testSuiteFiles.js",
                "phone": "/phone/testSuiteFiles.js",
                "root": "/root/testSuiteFiles.js",
                "strings-ext": "/strings-ext/testSuiteFiles.js",
                "units": "/units/testSuiteFiles.js",
                "util": "/util/testSuiteFiles.js"
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
