var suite1 = {
    'test one': function (test) {
    	//console.log("[main_goun.js] test_one!!!")
        test.ok(true, 'everythings ok');
        test.ok(false, 'everythings not ok');
        test.done();
    },
    'apples and oranges': function (test) {
    	//console.log("[main_goun.js] apples and oranges!!!")
        test.equal('apples', 'oranges', 'comparing apples and oranges');
        test.done();
    }
};
