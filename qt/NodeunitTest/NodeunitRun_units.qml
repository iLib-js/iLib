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
                "units": "/units/testSuiteFiles.js"
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
