import QtQuick 2.6
import "TestSuiteModule.js" as TestSuiteModule
import "runner.js" as TestRunnerModule

QtObject {
    Component.onCompleted: {

        var TestSuite = TestSuiteModule.TestSuite;
        var TestRunner = TestRunnerModule.TestRunner;
        var runner = new TestRunner("../..");

        var suiteDefinitions = {
            //"address": "/address/nodeunit/testSuiteQml.js", /* (1594 cases, 8469 assertions.) All passed. */

            //"calendar": "/calendar/nodeunit/testSuiteQml.js", /* (300 cases,1287 assertions)_36 faild. */
            //"collate": "/collate/nodeunit/testSuiteQml.js", /* 166 faild. it takes 652432ms almost 11 minutes.*/

            //"ctype": "/ctype/nodeunit/testSuiteQml.js", /* (255 cases,420 assertions) All passed. */

            //"date": "/date/nodeunit/testSuiteQml.js", /* (4763 cases, 9337 assertions) All passed. */
            //"daterange": "/daterange/nodeunit/testSuiteQml.js", /* ( 261 cases, 500 assertions)All passed. */
            //"durfmt": "/durfmt/nodeunit/testSuiteQml.js", /* ( 519 cases, 1017 assertions)All passed. */

            //"name": "/name/nodeunit/testSuiteQml.js"  /* ( 1088 cases, 2034 asserti4ons)465 failed */

            //"number": "/number/nodeunit/testSuiteQml.js", /* ( 750 cases, 1517 assertions)All passed. */
            //"maps": "/maps/nodeunit/testSuiteQml.js",  /* ( 78 cases, 75 assertions)All passed. */
            //"phone": "/phone/nodeunit/testSuiteQml.js", /* ( 1015 cases, 2282 assertions)All passed. */

            //"root": "/root/nodeunit/testSuiteQml.js",  /* ( 222 cases, 436 assertions)3 faild. */

            "strings-ext": "/strings-ext/nodeunit/testSuiteQml.js", /* ( 13 cases, 52 assertions)All passed. Directory name change. */

            //"units": "/units/nodeunit/testSuiteQml.js", /*( 195 cases, 383 assertions)All passed. */

            //"util": "/util/nodeunit/testSuiteQml.js" /* ( 187 cases, 205 assertions)41 faild. */
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
