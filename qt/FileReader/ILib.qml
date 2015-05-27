import QtQuick 2.0
import iLib 1.0 as I
import "/usr/share/javascript/ilib/lib/ilib-qt.js" as QtILib

QtObject {
    readonly property var path: function(m){return"/usr/share/javascript/ilib/lib/"+m;}
    readonly property var require: {
        console.log('ILib require initialized');
        QtILib.ilib.setLoaderCallback(new QtILib.QmlLoader(I.FileReader));
        return QtILib.require;
    }
}
