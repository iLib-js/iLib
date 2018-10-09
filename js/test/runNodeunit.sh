#!/bin/sh

echo "*** Running Nodeunit Tests ***"

argsCount=$#
fileName=$0
testType=$1
feature=$2
compiled=$3
syncOption=$4

run_nodeunit_tests()
{
    if [ 2 -eq $argsCount ]
    then
        if [ "$testType" = "sync" ]
        then
            echo "argsCount:$argsCount"
            echo "fileName:$fileName"
            echo "testType:$testType"
            echo "feature:$feature"
            
            cd js/test/$feature
            node testSuite.js

            return 1
        fi
        if [ "$testType" = "async" ]
        then
            echo "argsCount:$argsCount"
            echo "fileName:$fileName"
            echo "testType:$testType"
            echo "feature:$feature"
            
            cd js/test/$feature
            node testSuiteAsync.js

            return 1
        fi
        if [ "$testType" = "debug" ]
        then
            echo "argsCount:$argsCount"
            echo "fileName:$fileName"
            echo "testType:$testType"
            echo "feature:$feature"

            cd js/test/$feature
            node --inspect-brk testSuite.js

            return 1
        fi
    else
        echo "The number of arguments is not satisfied."
    fi

    if [ 4 -eq $argsCount ]
    then
        if [ "$testType" = "all" ]
        then
            echo "argsCount:$argsCount"
            echo "fileName:$fileName"
            echo "testType:$testType"
            echo "feature:$feature"
            echo "compiled:$compiled"
            echo "syncOption:$syncOption"
            cd js/test
            node testRunner.js $feature $compiled all $syncOption

            return 1
        fi
    else
        echo "The number of arguments is not satisfied."
    fi
}

run_nodeunit_tests

exit 0

