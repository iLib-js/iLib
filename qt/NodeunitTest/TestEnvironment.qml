import QtQuick 2.0
import FS 1.0 as FS
import "../../js/lib/ilib-qt.js" as QtIlib
import "../../js/test/nodeunit/nodeunit-qml.js" as Nodeunit

QtObject {
	id: thisObj
	property string path: ""
    property string moduleName: ""
    property var ilib: {}
    property var require: {}
	
    Component.onCompleted: {
        //console.log(">>>>>>>>>>>> [TestEnvironment.qml] new context. Loading in a fresh copy of ilib.");
        
        ilib = QtIlib.ilib;
        var loader = new QtIlib.QmlLoader(FS.FileReader);
        ilib.setLoaderCallback(loader);

		require = QtIlib.require;

        var testSuites, testfile, runTest

        console.log("[TestEnvironment.qml] (path) : " + path + " (moduleName): " + moduleName);

        testSuites = require("qmltest", path);

        if (moduleName === "name") {
            for (testfile in testSuites["namefmt"]) {
                if (testSuites["namefmt"].hasOwnProperty(testfile)) {
                    runTest = require("qmltest", "/" +moduleName + "/nodeunit/"+ testSuites["namefmt"][testfile]);
                }
            }
        } else if (moduleName === "strings-ext") {
            for (testfile in testSuites["strings_ext"]) {
                if (testSuites["strings_ext"].hasOwnProperty(testfile)) {
                    runTest = require("qmltest", "/" +moduleName + "/nodeunit/"+ testSuites["strings_ext"][testfile]);
                }
            }
        } else {
            for (testfile in testSuites[moduleName]) {
                if (testSuites[moduleName].hasOwnProperty(testfile)) {
                    runTest = require("qmltest", "/" +moduleName + "/nodeunit/"+ testSuites[moduleName][testfile]);

                }
            }
        }

        Nodeunit.nodeunit.run(runTest)
        Nodeunit.nodeunit.finish();
    }
}
