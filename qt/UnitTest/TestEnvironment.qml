import QtQuick 2.0
import FS 1.0 as FS
import "../../js/lib/ilib-qt.js" as QtIlib
import "./runtests.js" as TestRunner

QtObject {
	id: thisObj
	
	property string path: ""
	property string root: ""
	property var includes: [""]
	property var results: {}
	property var module: {}
	property var ilib: {}
	property var window: {}
	property var top: {}
	property var navigator: {}
	property var require: {}
	
    Component.onCompleted: {
    	//console.log("Test.qml -- new context. Loading in a fresh copy of ilib.");
        
        ilib = QtIlib.ilib;
        var loader = new QtIlib.QmlLoader(FS.FileReader);
        ilib.setLoaderCallback(loader);

		// set up the global environment first so that JsUnit loads correctly		
		top = {};
		window = {
			document: {},
			top: {}
		};
		navigator = {
			userAgent: "Qt"
		};
		require = QtIlib.require;
		
		//console.log("Test.qml: parameter includes is " + JSON.stringify(includes));
        //console.log("Test.qml: parameter path is " + JSON.stringify(path));
        //console.log("Test.qml: parameter root is " + JSON.stringify(root));
        //console.log("Test.qml: parameter results is " + JSON.stringify(results));
		//console.log("TestEnvironment.qml: require is " + typeof(require));
		
		TestRunner.runTests(path, root, includes, results); 
		
		// thisObj.destroy();	        
    }
}
