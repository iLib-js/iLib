import QtQuick 2.6
//import "../Source/webpack-demo3/dist/bundle.js" as Bundle;
//import "../Source/nodeunit-repo/examples/browser/nodeunit.js" as Nodeunit;
import "../nodeunit-qml/nodeunit_goun.js" as Nodeunit;
//import "../nodeunit-qml/main_goun.js" as Test;

QtObject {
    Component.onCompleted: {

        var suite = {
            'test one': function (test) {
                    console.log("[main_goun.js] test_one!!!")
                    test.ok(true, 'everythings ok');
                    test.done();
                },
                'apples and oranges': function (test) {
                    console.log("[main_goun.js] apples and oranges!!!")
                    test.equal('apples', 'oranges', 'comparing apples and oranges');
                    test.done();
                }
        }

        var Temp = new Array()
        Temp.push(suite);
        Nodeunit.nodeunit.run(Temp)
        console.log("TEST DONE")

        /* Test for Browser. Not working.
        var suite1 = {
            'test one': function (test) {
                test.ok(true, 'everythings ok');
             },
             'apples and oranges': function (test) {
                  test.equal('apples', 'oranges', 'comparing apples and oranges');
                  test.done();
             }
        }

        Nodeunit.nodeunit.run({'suite1': suite1});
        */

    }
}
