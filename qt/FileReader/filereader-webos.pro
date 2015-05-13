TEMPLATE = lib
CONFIG += qt plugin
TARGET = $$qtLibraryTarget(FileReader)

QT += qml quick

uri = com.jedlsoft.filesystem

# Input
SOURCES += \
    filereader_plugin.cpp \
    filereader.cpp

HEADERS += \
    filereader_plugin.h \
    filereader.h

MOC_DIR = .moc
OBJECTS_DIR = .obj


!defined(WEBOS_INSTALL_QML, var) {
	instbase = $$[QT_INSTALL_QML]
} else {
	instbase = $$WEBOS_INSTALL_QML
}

target.path = $$instbase/iLib

INSTALLS += target

qmldir.base = $$_PRO_FILE_PWD_
qmldir.files = qmldir ILib.qml
qmldir.path = $$instbase/iLib
qmldir.extra = cp $$PWD/qmldir.webos $$PWD/qmldir
 
INSTALLS += qmldir
