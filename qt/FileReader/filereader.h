#ifndef FILEREADER_H
#define FILEREADER_H

#include <QQuickItem>
#include <QString>

class FileReader : public QQuickItem
{
    Q_OBJECT
    Q_DISABLE_COPY(FileReader)

public:
    FileReader(QQuickItem *parent = 0);
    ~FileReader();

    Q_INVOKABLE QString currentPath() const;
    Q_INVOKABLE bool exists(QString path) const;
    Q_INVOKABLE QString type(QString path) const;
    Q_INVOKABLE QVariantMap info(QString path) const;
    Q_INVOKABLE QString read(QString path) const;
    Q_INVOKABLE QVariantList readBinary(QString path) const;
    Q_INVOKABLE QVariantList list(QString path) const;
};

#endif // FILEREADER_H

