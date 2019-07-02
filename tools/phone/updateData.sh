#! /bin/sh

echo "Running updateData.sh..."
echo "(1): Update Metadata from libphonenumber-js"
echo "(2): Generate numplans.json files"
echo "(3): Generate phonefmt.json files"
echo "(4): Remove libphonenumber-js directory"
echo "(5): Remove temp directory"
echo "Enter the task number you want to do...: "

read -p "Selected number is ..." number

tasks()
{
    if [ $number = "1" ];
    then
        if [ ! -d "libphonenumber-js" ];then
            echo "libphonenumer-js doesn't exist!"
            git clone https://github.com/catamphetamine/libphonenumber-js.git
            sh ./libphonenumber-js/autoupdate.sh 
        else
            cd libphonenumber-js
            git pull
            sh ./autoupdate.sh
        fi
    elif [ $number = "2" ];then
        echo "Executing gennumplan.js ..."
        node gennumplan.js
    elif [ $number = 3 ];then
        echo "Executing genphonefmt.js ..."
        node genphonefmt.js
    elif [ $number = 4 ];then
        echo "Removing libphonenumber-js directory ..."
        if [ -d "libphonenumber-js" ];then
            rm -rf libphonenumber-js
        fi
    elif [ $number = 5 ];then
        echo "Removing tmp directory ..."
        if [ -d "libphonenumber-js" ];then
            rm -rf tmp
        fi
    else
        echo "Re-type the proper number"
    fi
}

tasks
exit 0
