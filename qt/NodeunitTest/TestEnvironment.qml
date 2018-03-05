import QtQuick 2.0
import FS 1.0 as FS
import "../../js/lib/ilib-qt.js" as QtIlib
import "../../js/test/nodeunit/nodeunit-qml.js" as Nodeunit;

QtObject {
	id: thisObj
	
	property string path: ""
	property string root: ""
	property var includes: [""]
	property var results: {}
	property var module: {}
	property var ilib: {}
	property var require: {}
	
    Component.onCompleted: {
        console.log(">>>>>> [TestEnvironment.qml] new context. Loading in a fresh copy of ilib.");
        
        ilib = QtIlib.ilib;
        var loader = new QtIlib.QmlLoader(FS.FileReader);
        ilib.setLoaderCallback(loader);

		require = QtIlib.require;

        /*iLib Usage Sample
        var DateFmt = require("DateFmt.js");
        var fmt = new DateFmt({locale:"ko-KR", length:"full"});
        var fortatted  = fmt.format("new Date()");
        console.log("iLib Test:: "+ fortatted);
        */

        var modules = {};
        //console.log(">>>>>> [TestEnvironment.qml] path: " + path);
        var test = require("qmltest", path);
        modules["testdate"] = test["testdate"];

        Nodeunit.nodeunit.run(modules)
        Nodeunit.nodeunit.finish();

    }
}
