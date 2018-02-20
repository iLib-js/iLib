import QtQuick 2.6
import FS 1.0 as FS
import "../../goun/Source/opensource_iLib/qtBuild/js/lib/ilib-qt.js"
import "./work/nodeunit.js" as Nodeunit

QtObject {
    property var require: {}
    property var ilib: {}

    Component.onCompleted: {
        console.log("TestRunner.qml -- new conext!!!");
        ilib = QtIlib.ilib;
        var loader = new QtIlib.QmlLoader(FS.FileReader);
        ilib.setLoaderCallback(loader);


        console.log("TestRunner.ilib : " + ilib);
        Nodeunit.exports.runFiles("./testSample/test.js");

    }
}

