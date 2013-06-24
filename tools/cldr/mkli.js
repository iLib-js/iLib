var fs = require('fs');
var util = require('util');
var common = require('./common');



function usage() {
	util.print("Usage: gennumfmts [-h] CLDR_json_dir locale_data_dir\n" +
		"Generate number formats information files.\n\n" +
		"-h or --help\n" +
		"  this help\n" +
		"locale_data_dir\n" +
		"  the top level of the ilib locale data directory\n");
	process.exit(1);
}

localeDirName = process.argv[2];
util.print("locale dir: " + localeDirName + "\n");
fs.exists(localeDirName, function (exists) {
		if (!exists) {
			util.print("Could not access locale data directory " + localeDirName);
			usage();
		}
	});


if (process.argv.length < 3) {
	util.print('Error: not enough arguments');
	usage();
}

var walk = function(dir) {
	var results = [];
	var list = fs.readdirSync(dir);
	list.forEach(function(file){
		file = dir + '/' + file;
		var merged = {};
        	var stat = fs.statSync(file);
        	if (stat && stat.isDirectory()) (walk(file));
	
      		else{
			var obj={};
			if(file.match(/[a-z]+\.jf/)){			
				var data = fs.readFileSync(file,'utf8');
				try {	
  					obj = JSON.parse(data);
				 }
				catch(err){
					fs.unlink(file);
					file='[]';
				     }
	
				if(file != '[]'){
					results.push(file);
				}
			}
			
	
		}
	
	});
 
	var merged = {};
	for (i = 0; i < results.length; i++) {
		var json = fs.readFileSync(results[i],'utf8');
		var root = JSON.parse(json);
		merged = common.merge(merged, root);
	}
	var path = dir;
	if(Object.keys(merged).length!=0) {
	    fs.writeFileSync(path + "/localeinfo.json",JSON.stringify(merged),'utf8');
	}  
	
	return results;
}

if (process.argv.length < 3) {
	util.print('Error: not enough arguments');
	usage();
}

walk(localeDirName);
