import QtQuick 2.0
import FS 1.0 as FS

Rectangle {
    width: 800
    height: 600

    Text {
        id: display

        anchors.fill: parent
        text: "Hello!"
    }

    Component.onCompleted: {
        var currentPath = FS.FileReader.currentPath();
        display.text += ("# currentPath: "+FS.currentPath+"\n");
        display.text += ("# exist data.json: "+FS.FileReader.exists("data.json")+"\n");
        display.text += ("# type data.json: "+FS.FileReader.type("data.json")+"\n");
        var list = FS.FileReader.list(currentPath);
        display.text += ("# list of current folder\n");
        for (var idx in list) {
            display.text += (" - "+list[idx].name+": "+list[idx].type+" "+list[idx].size+" "+list[idx].datetime+"\n");
        }
        display.text += ("# read data.json\n");
        var json = FS.FileReader.read("data.json");
        display.text += (json+"\n");
        var parsed = JSON.parse(json);
        display.text += ("# parsed json: name: "+parsed.name+" age: "+parsed.age+" sex: "+parsed.sex+"\n");
    }
}
