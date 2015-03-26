/* jshint node: true */
// pass the ilib definition to our callers
var ilib = require("./ilib-dyn-full-compiled.js").ilib;
exports.ilib = ilib;

var path = require("path"),
	fs = require("fs"),
	util = require("util");

var nodeLoader = function (ilibobj) {
	// util.print("new nodeLoader instance\n");

	if (typeof(module) !== 'undefined' && module.filename) {
		// loaded under nodejs
		var base = path.dirname(module.filename);
		var localeDir = path.normalize(path.join(base, "locale"));
		if (fs.existsSync(localeDir) && fs.existsSync(path.join(localeDir, "localeinfo.json"))) {
			// this was loaded via a nodejs require() call in an npm module, so the parent
			// dir of this file is where the locale dir is
			this.base = base;
		} 
		
		if (!this.base) {
			base = path.normalize(path.join(base, "/../data"));
			localeDir = path.normalize(path.join(base, "localetemp"));
			if (fs.existsSync(localeDir) && fs.existsSync(path.join(localeDir, "localeinfo.json"))) {
				// loaded from a development check-out of the ilib sources
				this.base = base;
			}
		}
		
		this.code = path.normalize(path.join(base, "js"));
	}

	if (!this.base) {
		// standard install location
		this.base = "/usr/share/javascript/ilib";
		this.code = "/usr/share/javascript/ilib/js";
	}
	
	this.ilib = ilibobj;
	this.fileNameCache = {};
	// util.print("base is defined as " + this.base + "\n");
};

// make this a subclass of loader
nodeLoader.prototype = new ilib.Loader();
nodeLoader.prototype.constructor = nodeLoader;

nodeLoader.prototype.loadFiles = function(paths, sync, params, callback) {
	var root = (params && params.base) ? path.normalize(params.base) : this.base;

	// util.print("nodeLoader loadFiles called\n");
	// make sure we know what we can load
	this._loadManifests();
	
	if (!paths) {
		// nothing to load
		// util.print("nothing to load\n");
		return;
	}
	
	var resources = path.normalize(path.join(root, "resources"));
	var resExists = fs.existsSync(resources);

	// util.print("node loader: attempting to load paths " + JSON.stringify(paths) + "\n");
	if (sync) {
		var ret = [];
		
		// synchronous
		paths.forEach(function (p) {
			var json;

			var filepath = path.join(root, "locale", p);
			// util.print("node loader: attempting sync load " + filepath + "\n");
			if (fs.existsSync(filepath)) {
				json = fs.readFileSync(filepath, "utf-8");
				// util.print("node loader: load " + filepath + (json ? " succeeded\n" : " failed\n"));
				ret.push(json ? JSON.parse(json) : undefined);
				return;
			} 
			
			if (resExists) {
				filepath = path.join(resources, p);
				// util.print("node loader: attempting sync load resources " + filepath + "\n");
				if (fs.existsSync(filepath)) {
					json = fs.readFileSync(filepath, "utf-8");
					// util.print("node loader: load " + filepath + (json ? " succeeded\n" : " failed\n"));
					ret.push(json ? JSON.parse(json) : undefined);
				}
			}
			
			ret.push(undefined);
			// util.print("node loader:  sync load failed\n");
		});

		// only call the callback at the end of the chain of files
		if (typeof(callback) === 'function') {
			callback(ret);
		}

		return ret;
	}

	// asynchronous
	this.results = [];
	this.callback = callback;
	this._loadFilesAsync(root, paths);
};

nodeLoader.prototype._loadFilesAsync = function (root, paths) {
	if (paths.length > 0) {
		var filename = paths.shift();
		var filepath = path.join(root, "locale", filename);
		// util.print("node loader: attempting async load " + filepath + "\n");
		fs.readFile(filepath, "utf-8", function(err, json) {
			if (err) {
				filepath = path.join("resources", filename);
				// util.print("node loader: attempting async load " + filepath + "\n");
				fs.readFile(filepath, "utf-8", function(err, json) {
					this._nextFile(root, paths, err ? undefined : json);
				});
			} else {
				this._nextFile(root, paths, json);
			}
		});
	}
};
nodeLoader.prototype._nextFile = function (root, paths, json) {
	// util.print("node loader:  async load " + (json ? "succeeded" : "failed") + "\n");
	this.results.push(json ? JSON.parse(json) : undefined);
	if (paths.length > 0) {
		this._loadFilesAsync(root, paths);
	} else {
		// only call the callback at the end of the chain of files
		if (typeof(callback) === 'function') {
			this.callback(this.results);
		}
	}
};
nodeLoader.prototype._loadManifests = function() {
	// util.print("node loader: load manifests\n");
	if (!this.manifest) {
		var root = this.base;
		var manifest = {};

		function loadManifest(subpath) {
			var json;
			var dirpath = path.join(root, subpath);
			var filepath = path.join(dirpath, "ilibmanifest.json");
			if (fs.existsSync(filepath)) {
				// util.print("node loader: loading manifest " + filepath + "\n");
				json = fs.readFileSync(filepath, "utf-8");
				if (json) {
					manifest[dirpath] = JSON.parse(json).files;
				}
			}
		}

		loadManifest("localetemp");
		loadManifest("locale");
		
		root = ".";
		loadManifest("resources");
		
		this.manifest = manifest;
	}
};
nodeLoader.prototype.listAvailableFiles = function() {
	// util.print("node loader: list available files called\n");
	this._loadManifests();
	return this.manifest;
};
nodeLoader.prototype.isAvailable = function(path) {
	this._loadManifests();
	
	// util.print("node loader: isAvailable " + path + "? ");
	for (var dir in this.manifest) {
		if (ilib.indexOf(this.manifest[dir], path) !== -1) {
			// util.print("true\n");
			return true;
		}
	}
	
	// util.print("false\n");
	return false;
};

// merge object2's properties into object 1
nodeLoader.prototype.merge = function (object1, object2) {
	var prop = undefined;
	for (prop in object2) {
		if (prop && typeof(object2[prop]) !== 'undefined') {
			if (object1[prop] instanceof Array && object2[prop] instanceof Array) {
				//console.log("Merging array prop " + prop);
				object1[prop] = object1[prop].concat(object2[prop]);
			} else if (typeof(object1[prop]) === 'object' && typeof(object2[prop]) === 'object') {
				//console.log("Merging object prop " + prop);
				object1[prop] = ilib.merge(object1[prop], object2[prop], replace);
			} else {
				//console.log("Copying prop " + prop);
				// for debugging. Used to determine whether or not json files are overriding their parents unnecessarily
				object1[prop] = object2[prop];
			}
		}
	}
	return object1;
};

nodeLoader.prototype.require = function(pathname) {
	//	console.log("typeof(this.code) is " + typeof(this.code));
	//	console.log("typeof(pathname) is " + typeof(pathname));
	var paths = (typeof(pathname) === 'string') ? [pathname] : pathname;
	var submodule = {};
	for (var i = 0; i < paths.length; i++) {
		if (!this.fileNameCache[paths[i]]) {
			var m = require(path.join(this.code, paths[i]));
			var mod = m(this);
			//console.log("mod is " + JSON.stringify(mod));
			this.merge(this.ilib, mod);
			this.merge(submodule, mod);
			this.fileNameCache[paths[i]] = true;
		}
	}
	//console.log("submodule is " + JSON.stringify(submodule));
	return submodule;
};

nodeLoader.prototype.clearRequireCache = function() {
	this.fileNameCache = {};
};

ilib.setLoaderCallback(new nodeLoader(ilib));

//initialize some things statically because the constructors do not load 
// the locale-independent data
ilib.CType._init(true);
ilib.NormString.init();
