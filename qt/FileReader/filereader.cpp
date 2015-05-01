#include "filereader.h"

#include <QFile>
#include <QDir>
#include <QFileInfo>
#include <QFileInfoList>
#include <QTextStream>
#include <QDateTime>

FileReader::FileReader(QQuickItem *parent):
    QQuickItem(parent)
{
}

FileReader::~FileReader()
{
}

QString FileReader::currentPath() const {
    return QDir::currentPath();
}

bool FileReader::exists(QString path) const {
    QFileInfo fileInfo(path);

    if (fileInfo.exists())
        return true;
    else
        return false;
}

QString FileReader::type(QString path) const {
    QFileInfo fileInfo(path);

    if (fileInfo.exists()) {
        if (fileInfo.isFile())
            return "file";
        else if (fileInfo.isDir())
            return "directory";
        else if (fileInfo.isSymLink()) {
            return type(fileInfo.symLinkTarget());
        }
    }
    return "";
}

QVariantMap FileReader::info(QString path) const {
    QVariantMap info;
    QFileInfo fileInfo(path);

    if (fileInfo.exists()) {
        info.insert("name", fileInfo.fileName());
        info.insert("type", type(fileInfo.canonicalFilePath()));
        info.insert("size", fileInfo.size());
        info.insert("datetime", fileInfo.lastModified());
    }
    return info;
}

QString FileReader::read(QString path) const {
    QFile file(path);
    if (!file.open(QIODevice::ReadOnly | QIODevice::Text))
        return "";
    QTextStream in(&file);
    return in.readAll();
}

QVariantList FileReader::list(QString path) const {
    QDir dir(path);
    QVariantList entryList;

    QFileInfoList fileInfoList = dir.entryInfoList(QDir::NoFilter, QDir::NoSort);
    for (QFileInfoList::iterator iter = fileInfoList.begin(); iter != fileInfoList.end(); iter++) {
        QVariantMap entry;
        entry.insert("name", iter->fileName());
        entry.insert("type", type(iter->canonicalFilePath()));
        entry.insert("size", iter->size());
        entry.insert("datetime", iter->lastModified());
        entryList.append(entry);
    }
    return entryList;
}
