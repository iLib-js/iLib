#include "filereader_plugin.h"
#include "filereader.h"

#include <qqml.h>
#include <QtQml>

static QObject *singletonTypeFactory(QQmlEngine *engine, QJSEngine *scriptEngine)
{
    Q_UNUSED(engine)
    Q_UNUSED(scriptEngine)

    FileReader *example = new FileReader();
    return example;
}

void FileReaderPlugin::registerTypes(const char *uri)
{
    // @uri com.jedlsoft.filereader
    // qmlRegisterType<FileReader>(uri, 1, 0, "FileReader");
    qmlRegisterSingletonType<FileReader>(uri, 1, 0, "FileReader", singletonTypeFactory);
}


