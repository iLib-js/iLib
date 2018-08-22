#!/bin/sh

echo "*** Running Nodeunit Tests ***"

argc=$#
argv0=$0
argv1=$1
argv2=$2
argv3=$3
argv4=$4

run_nodeunit_tests()
{
    if [ 2 -eq $argc ]
    then
        if [ "$argv1" = "sync" ]
        then
            echo "argc:$argc"
            echo "argv0:$argv0"
            echo "argv1:$argv1"
            echo "argv2:$argv2"
            
            cd js/test/$argv2/nodeunit
            node testSuite.js

            return 1
        fi
        if [ "$argv1" = "async" ]
        then
            echo "argc:$argc"
            echo "argv0:$argv0"
            echo "argv1:$argv1"
            echo "argv2:$argv2"
            
            cd js/test/$argv2/nodeunit
            node testSuiteAsync.js

            return 1
        fi
        if [ "$argv1" = "debug" ]
        then
            echo "argc:$argc"
            echo "argv0:$argv0"
            echo "argv1:$argv1"
            echo "argv2:$argv2"

            cd js/test/$argv2/nodeunit
            node --inspect-brk testSuite.js

            return 1
        fi
    else
        echo "The number of arguments is not satisfied."
    fi

    if [ 4 -eq $argc ]
    then
        if [ "$argv1" = "all" ]
        then
            echo "argc:$argc"
            echo "argv0:$argv0"
            echo "argv1:$argv1"
            echo "argv2:$argv2"
            echo "argv3:$argv3"
            echo "argv4:$argv4"
            cd js/test
            node testRunner.js $argv2 $argv3 all $argv4

            return 1
        fi
    else
        echo "The number of arguments is not satisfied."
    fi
}

run_nodeunit_tests

exit 0

