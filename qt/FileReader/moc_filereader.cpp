/****************************************************************************
** Meta object code from reading C++ file 'filereader.h'
**
** Created by: The Qt Meta Object Compiler version 67 (Qt 5.4.1)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include "filereader.h"
#include <QtCore/qbytearray.h>
#include <QtCore/qmetatype.h>
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'filereader.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 67
#error "This file was generated using the moc from 5.4.1. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
struct qt_meta_stringdata_FileReader_t {
    QByteArrayData data[9];
    char stringdata[55];
};
#define QT_MOC_LITERAL(idx, ofs, len) \
    Q_STATIC_BYTE_ARRAY_DATA_HEADER_INITIALIZER_WITH_OFFSET(len, \
    qptrdiff(offsetof(qt_meta_stringdata_FileReader_t, stringdata) + ofs \
        - idx * sizeof(QByteArrayData)) \
    )
static const qt_meta_stringdata_FileReader_t qt_meta_stringdata_FileReader = {
    {
QT_MOC_LITERAL(0, 0, 10), // "FileReader"
QT_MOC_LITERAL(1, 11, 11), // "currentPath"
QT_MOC_LITERAL(2, 23, 0), // ""
QT_MOC_LITERAL(3, 24, 5), // "exist"
QT_MOC_LITERAL(4, 30, 4), // "path"
QT_MOC_LITERAL(5, 35, 4), // "type"
QT_MOC_LITERAL(6, 40, 4), // "info"
QT_MOC_LITERAL(7, 45, 4), // "read"
QT_MOC_LITERAL(8, 50, 4) // "list"

    },
    "FileReader\0currentPath\0\0exist\0path\0"
    "type\0info\0read\0list"
};
#undef QT_MOC_LITERAL

static const uint qt_meta_data_FileReader[] = {

 // content:
       7,       // revision
       0,       // classname
       0,    0, // classinfo
       6,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       0,       // signalCount

 // methods: name, argc, parameters, tag, flags
       1,    0,   44,    2, 0x02 /* Public */,
       3,    1,   45,    2, 0x02 /* Public */,
       5,    1,   48,    2, 0x02 /* Public */,
       6,    1,   51,    2, 0x02 /* Public */,
       7,    1,   54,    2, 0x02 /* Public */,
       8,    1,   57,    2, 0x02 /* Public */,

 // methods: parameters
    QMetaType::QString,
    QMetaType::Bool, QMetaType::QString,    4,
    QMetaType::QString, QMetaType::QString,    4,
    QMetaType::QVariantMap, QMetaType::QString,    4,
    QMetaType::QString, QMetaType::QString,    4,
    QMetaType::QVariantList, QMetaType::QString,    4,

       0        // eod
};

void FileReader::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    if (_c == QMetaObject::InvokeMetaMethod) {
        FileReader *_t = static_cast<FileReader *>(_o);
        switch (_id) {
        case 0: { QString _r = _t->currentPath();
            if (_a[0]) *reinterpret_cast< QString*>(_a[0]) = _r; }  break;
        case 1: { bool _r = _t->exist((*reinterpret_cast< QString(*)>(_a[1])));
            if (_a[0]) *reinterpret_cast< bool*>(_a[0]) = _r; }  break;
        case 2: { QString _r = _t->type((*reinterpret_cast< QString(*)>(_a[1])));
            if (_a[0]) *reinterpret_cast< QString*>(_a[0]) = _r; }  break;
        case 3: { QVariantMap _r = _t->info((*reinterpret_cast< QString(*)>(_a[1])));
            if (_a[0]) *reinterpret_cast< QVariantMap*>(_a[0]) = _r; }  break;
        case 4: { QString _r = _t->read((*reinterpret_cast< QString(*)>(_a[1])));
            if (_a[0]) *reinterpret_cast< QString*>(_a[0]) = _r; }  break;
        case 5: { QVariantList _r = _t->list((*reinterpret_cast< QString(*)>(_a[1])));
            if (_a[0]) *reinterpret_cast< QVariantList*>(_a[0]) = _r; }  break;
        default: ;
        }
    }
}

const QMetaObject FileReader::staticMetaObject = {
    { &QQuickItem::staticMetaObject, qt_meta_stringdata_FileReader.data,
      qt_meta_data_FileReader,  qt_static_metacall, Q_NULLPTR, Q_NULLPTR}
};


const QMetaObject *FileReader::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->dynamicMetaObject() : &staticMetaObject;
}

void *FileReader::qt_metacast(const char *_clname)
{
    if (!_clname) return Q_NULLPTR;
    if (!strcmp(_clname, qt_meta_stringdata_FileReader.stringdata))
        return static_cast<void*>(const_cast< FileReader*>(this));
    return QQuickItem::qt_metacast(_clname);
}

int FileReader::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QQuickItem::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 6)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 6;
    } else if (_c == QMetaObject::RegisterMethodArgumentMetaType) {
        if (_id < 6)
            *reinterpret_cast<int*>(_a[0]) = -1;
        _id -= 6;
    }
    return _id;
}
QT_END_MOC_NAMESPACE
