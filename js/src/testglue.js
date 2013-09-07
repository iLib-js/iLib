
var path = require("path"),
	fs = require("fs"),
	util = require("util");

var nodeLoader = (function () {
	var base = path.normalize(process.cwd() + "/../data/temp");
	
	if (!fs.existsSync(path.join(base, "localeinfo.json"))) {
		base = "/usr/lib/ilib/locale";
	}
	
	// util.print("base is defined as " + base + "\n");
	
	function nextFile(context, root, paths, results, callback, json) {
		//util.print("node loader:  async load " + (json ? "succeeded" : "failed") + "\n");
		results.push(json ? JSON.parse(json) : undefined);
		if (paths.length > 0) {
			loadFiles(context, root, paths, results, callback);
		} else {
			// only call the callback at the end of the chain of files
			if (typeof(callback) === 'function') {
				callback(results);
			}
		}
	}
	
	function loadFiles(context, root, paths, results, callback) {
		if (paths.length > 0) {
			var filename = paths.shift();
			var filepath = path.join(root, filename);
			// util.print("node loader: attempting async load " + filepath + "\n");
			fs.readFile(filepath, "utf-8", function(err, json) {
				if (err) {
					filepath = path.join("resources", filename);
					// util.print("node loader: attempting async load " + filepath + "\n");
					fs.readFile(filepath, "utf-8", function(err, json) {
						nextFile(context, root, paths, results, callback, err ? undefined : json);
					});
				} else {
					nextFile(context, root, paths, results, callback, json);
				}
			});
		}
	}
	return function(paths, sync, params, callback) {
		var root = (params && params.base) ? path.normalize(params.base) : base;
		var resources = path.normalize(path.join(root, "resources"));
		var resExists = fs.existsSync(resources);

		// util.print("node loader: attempting to load paths " + JSON.stringify(paths) + "\n");
		if (sync) {
			var ret = [];
			
			// synchronous
			paths.forEach(function (p) {
				var filepath = path.join(root, p);
				// util.print("node loader: attempting sync load " + filepath + "\n");
				var json;
				if (fs.existsSync(filepath)) {
					json = fs.readFileSync(filepath, "utf-8");
				} else if (resExists) {
					filepath = path.join(resources, p);
					// util.print("node loader: attempting sync load resources " + filepath + "\n");
					if (fs.existsSync(filepath)) {
						json = fs.readFileSync(filepath, "utf-8");
					}
				}
				// util.print("node loader:  sync load " + (json ? "succeeded" : "failed") + "\n");
				ret.push(json ? JSON.parse(json) : undefined);
			});

			// only call the callback at the end of the chain of files
			if (typeof(callback) === 'function') {
				callback(ret);
			}

			return ret;
		}

		// asynchronous
		var results = [];
		loadFiles(this, root, paths, results, callback);
	};
	return undefined;
})();

ilib.setLoaderCallback(nodeLoader);

//initialize some things statically because the constructors do not load 
// the locale-independent data
ilib.CType._init(true);
ilib.String.loadPlurals(true);
ilib.NormString.init();