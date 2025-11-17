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

# Remove deprecated AGL framework on macOS (not available in newer SDKs)
# AGL is added by Qt's OpenGL configuration and will be removed in build.xml post-processing
macx {
    QMAKE_LFLAGS -= -framework AGL
    QMAKE_LIBS -= -framework AGL
}

# Link against ICU libraries for getICUVersion() function
# Try to detect ICU paths dynamically for portability
unix {
    # Try pkg-config first (works on most Linux systems)
    PKGCONFIG_TEST = $$system(pkg-config --exists icu-uc 2>/dev/null; echo $$?)
    equals(PKGCONFIG_TEST, "0") {
        PKGCONFIG_CFLAGS = $$system(pkg-config --cflags icu-uc 2>/dev/null)
        PKGCONFIG_LIBS = $$system(pkg-config --libs icu-uc 2>/dev/null)
        INCLUDEPATH += $$PKGCONFIG_CFLAGS
        LIBS += $$PKGCONFIG_LIBS
    } else {
        # Fallback: try icu-config (if available)
        ICUCONFIG = $$system(which icu-config 2>/dev/null)
        !isEmpty(ICUCONFIG) {
            ICUCONFIG_CFLAGS = $$system($$ICUCONFIG --cppflags 2>/dev/null)
            ICUCONFIG_LIBS = $$system($$ICUCONFIG --ldflags 2>/dev/null)
            INCLUDEPATH += $$ICUCONFIG_CFLAGS
            LIBS += $$ICUCONFIG_LIBS
        } else {
            # Final fallback: try standard paths
            # On macOS with Homebrew, try common Homebrew locations
            macx {
                # Try standard Homebrew lib paths first (if libraries are symlinked)
                # Check both /opt/homebrew (Apple Silicon) and /usr/local (Intel)
                exists(/opt/homebrew/lib/libicuuc.dylib) {
                    LIBS += -L/opt/homebrew/lib
                    INCLUDEPATH += /opt/homebrew/include
                } else {
                    exists(/usr/local/lib/libicuuc.dylib) {
                        LIBS += -L/usr/local/lib
                        INCLUDEPATH += /usr/local/include
                    } else {
                        # Try to find ICU in Cellar (Homebrew-specific)
                        # Try /opt/homebrew first (Apple Silicon)
                        ICUVERSION = $$system(ls -1 /opt/homebrew/Cellar/icu4c/ 2>/dev/null | tail -1)
                        !isEmpty(ICUVERSION) {
                            ICUPATH = /opt/homebrew/Cellar/icu4c/$$ICUVERSION
                            exists($$ICUPATH/lib/libicuuc.dylib) {
                                LIBS += -L$$ICUPATH/lib
                                INCLUDEPATH += $$ICUPATH/include
                            }
                        } else {
                            # Try /usr/local (Intel Macs)
                            ICUVERSION = $$system(ls -1 /usr/local/Cellar/icu4c/ 2>/dev/null | tail -1)
                            !isEmpty(ICUVERSION) {
                                ICUPATH = /usr/local/Cellar/icu4c/$$ICUVERSION
                                exists($$ICUPATH/lib/libicuuc.dylib) {
                                    LIBS += -L$$ICUPATH/lib
                                    INCLUDEPATH += $$ICUPATH/include
                                }
                            }
                        }
                    }
                }
            }
            # Link ICU libraries (order matters: icudata before icuuc)
            LIBS += -licudata -licuuc
        }
    }
}

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

