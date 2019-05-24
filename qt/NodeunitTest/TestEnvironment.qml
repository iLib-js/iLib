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
        console.log("[TestEnvironment.qml] (path) : " + path + " (moduleName): " + moduleName);

        ilib = QtIlib.ilib;
        var loader = new QtIlib.QmlLoader(FS.FileReader);
        ilib.setLoaderCallback(loader);
		require = QtIlib.require;

        var testSuites, runTest, i;
        testSuites = require("qmltest", path);

        for (i=0; i < testSuites["files"].length; i++) {
            //console.log("fileNames...." + testSuites["files"][i]);
            runTest = require("qmltest", "/" + moduleName + "/"+ testSuites["files"][i]);
            Nodeunit.nodeunit.run(runTest)
        }
        Nodeunit.nodeunit.finish();
    }
}
