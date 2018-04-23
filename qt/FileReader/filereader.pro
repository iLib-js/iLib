TEMPLATE = lib
TARGET = "FileReader"
CONFIG(debug, debug|release) {
    unix: TARGET = $$join(TARGET, , , _debug)
    win32: TARGET = $$join(TARGET, , , d)
}
TARGET = $$qtLibraryTarget($$TARGET)
DESTDIR = ../output/qt
QT += qml quick
CONFIG += qt plugin debug_and_release build_all
QML_IMPORT_PATH = imports

uri = com.jedlsoft.filesystem

# Input
SOURCES += \
    filereader_plugin.cpp \
    filereader.cpp

HEADERS += \
    filereader_plugin.h \
    filereader.h

DISTFILES = qmldir

!equals(_PRO_FILE_PWD_, $$OUT_PWD) {
    copy_qmldir.target = $$OUT_PWD/qmldir
    copy_qmldir.depends = $$_PRO_FILE_PWD_/qmldir
    copy_qmldir.commands = $(COPY_FILE) \"$$replace(copy_qmldir.depends, /, $$QMAKE_DIR_SEP)\" \"$$replace(copy_qmldir.target, /, $$QMAKE_DIR_SEP)\"
    QMAKE_EXTRA_TARGETS += copy_qmldir
    PRE_TARGETDEPS += $$copy_qmldir.target
}

qmldir.files = qmldir
unix {
    QML_IMPORT_PATH = imports
    installPath = $$[QT_INSTALL_QML]/$$replace(uri, \\., /)
    qmldir.path = $$installPath
    target.path = $$installPath
    INSTALLS += target qmldir
}

OTHER_FILES += \
    main.qml

