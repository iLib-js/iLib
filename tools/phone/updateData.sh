#! /bin/sh

echo "Running updateData.sh..."
echo "(1): Update Metadata from libphonenumber-js"
echo "(2): Get a geo info from libphonenumber"
echo "(3): Generate JSON data related PhoneNumber information ..."
echo "(4): Remove libphonenumber-js/ and libphonenumber/ directory"
echo "(5): Remove temp directory"
echo "Enter the task number you want to do...: "

read -p "Selected number is ..." number

tasks()
{
    if [ $number = "1" ];
    then
        if [ ! -d "libphonenumber-js" ];then
            echo "libphonenumer-js doesn't exist!"
            git clone git@gitlab.com:catamphetamine/libphonenumber-js.git
        fi
        cd libphonenumber-js
        git pull
        sh ./autoupdate.sh
        cp metadata.json ../
    elif [ $number = "2" ];then
        if [ ! -d "libphonenumber" ];then
            echo "libphonenumer doesn't exist!"
            git clone git@github.com:google/libphonenumber.git
        else
            cd libphonenumber
            git pull
        fi
    elif [ $number = "3" ];then
        echo "Executing gennumplan.js ..."
        node gennumplan.js
        echo "Executing genphonefmt.js ..."
        node genphonefmt.js
        echo "Executing gengeoinfo.js ..."
        node gengeoinfo.js
        echo "Executing geniddarea.js ..."
        node geniddarea.js
        echo "Executing genphoneloc.js ..."
        node genphoneloc.js
    elif [ $number = 4 ];then
        echo "Removing libphonenumber directory ..."
        if [ -d "libphonenumber-js" ];then
            rm -rf libphonenumber
        fi
    elif [ $number = 5 ];then
        echo "Removing libphonenumber-js directory ..."
        if [ -d "libphonenumber-js" ];then
            rm -rf libphonenumber-js
        fi
    else
        echo "Re-type the proper number"
    fi
}

tasks
exit 0
