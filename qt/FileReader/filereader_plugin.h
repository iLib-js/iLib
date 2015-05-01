#ifndef FILEREADER_PLUGIN_H
#define FILEREADER_PLUGIN_H

#include <QQmlExtensionPlugin>

class FileReaderPlugin : public QQmlExtensionPlugin
{
    Q_OBJECT
    Q_PLUGIN_METADATA(IID "com.jedlsoft.filesystem")

public:
    void registerTypes(const char *uri);
};

#endif // FILEREADER_PLUGIN_H

