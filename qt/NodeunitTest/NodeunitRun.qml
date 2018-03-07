import QtQuick 2.6
import "TestSuiteModule.js" as TestSuiteModule
import "runner.js" as TestRunnerModule

QtObject {
    Component.onCompleted: {

        var TestSuite = TestSuiteModule.TestSuite;
        var TestRunner = TestRunnerModule.TestRunner;
        var runner = new TestRunner("../..");

        var suiteDefinitions = {
            //"address": "/address/nodeunit/testSuiteQml.js", /* All passed. */

            //"calendar": "/calendar/nodeunit/testSuiteQml.js", /* 36 assertions faild. */
            //"collate": "/collate/nodeunit/testSuiteQml.js", /* 166 assertions faild. it takes 652432ms almost 11 minutes.*/

            //"ctype": "/ctype/nodeunit/testSuiteQml.js", /* All passed. */

            //"date": "/date/nodeunit/testSuiteQml.js", /* All passed. */
            //"daterange": "/daterange/nodeunit/testSuiteQml.js", /* All passed. */
            //"durfmt": "/durfmt/nodeunit/testSuiteQml.js", /* All passed. */

            //"name": "/name/nodeunit/testSuiteQml.js"  /* 465 assertions failed */

            //"number": "/number/nodeunit/testSuiteQml.js", /* All passed. */
            //"maps": "/maps/nodeunit/testSuiteQml.js",  /* All passed. */
            //"phone": "/phone/nodeunit/testSuiteQml.js", /* All passed. */

            //"root": "/root/nodeunit/testSuiteQml.js",  /* 3 assertions faild. */

            "strings-ext": "/strings-ext/nodeunit/testSuiteQml.js", /* All passed. */

            //"units": "/units/nodeunit/testSuiteQml.js", /* All passed. */

            //"util": "/util/nodeunit/testSuiteQml.js" /* 41 assertions faild. */
        };

        var s, ts;
        for (s in suiteDefinitions) {
            ts = new TestSuite(suiteDefinitions[s], s);
            //console.log("[NodeunitRun.qml] <<<<< name: " + s + "  "+ suiteDefinitions[s]);
            runner.addSuite(ts);
        }
        runner.runTests();
    }
}
