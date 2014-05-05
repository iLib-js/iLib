/* jshint node: true */
// pass the ilib definition to our callers
var ilib = require("./ilib-dyn-full.js").ilib;
exports.ilib = ilib;

var path = require("path"),
	fs = require("fs"),
	util = require("util");

var nodeLoader;

(function () {
	// for use from within a check-out of ilib
	var base = path.normalize(process.cwd() + "/../data");  
	
	// for use on-device
	if (!fs.existsSync(path.join(base, "locale/localeinfo.json"))) {
		base = "/usr/share/javascript/ilib";
	}
	
	util.print("base is defined as " + base + "\n");
	
	nodeLoader = function(paths, sync, params, callback) {
		this.root = (params && params.base) ? path.normalize(params.base) : base;

		util.print("nodeLoader constructor called\n");
		// make sure we know what we can load
		this.loadManifests();
		
		if (!paths) {
			// nothing to load
			util.print("nothing to load\n");
			return;
		}
		
		var resources = path.normalize(path.join(this.root, "resources"));
		var resExists = fs.existsSync(resources);
	
		util.print("node loader: attempting to load paths " + JSON.stringify(paths) + "\n");
		if (sync) {
			var ret = [];
			
			// synchronous
			paths.forEach(function (p) {
				var json;

				var filepath = path.join(this.root, "locale", p);
				util.print("node loader: attempting sync load " + filepath + "\n");
				if (fs.existsSync(filepath)) {
					json = fs.readFileSync(filepath, "utf-8");
					ret.push(json ? JSON.parse(json) : undefined);
					return;
				} 
				
				if (resExists) {
					filepath = path.join(resources, p);
					util.print("node loader: attempting sync load resources " + filepath + "\n");
					if (fs.existsSync(filepath)) {
						json = fs.readFileSync(filepath, "utf-8");
						ret.push(json ? JSON.parse(json) : undefined);
					} 
				}
				util.print("node loader:  sync load failed\n");
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
		this.loadFiles(paths);
	};
	
	// make this a subclass of loader
	nodeLoader.prototype = new ilib.Loader();
	nodeLoader.prototype.constructor = nodeLoader;
	nodeLoader.prototype.loadFiles = function (paths) {
		if (paths.length > 0) {
			var filename = paths.shift();
			var filepath = path.join(this.root, "locale", filename);
			util.print("node loader: attempting async load " + filepath + "\n");
			fs.readFile(filepath, "utf-8", function(err, json) {
				if (err) {
					filepath = path.join("resources", filename);
					util.print("node loader: attempting async load " + filepath + "\n");
					fs.readFile(filepath, "utf-8", function(err, json) {
						this.nextFile(paths, err ? undefined : json);
					});
				} else {
					this.nextFile(paths, json);
				}
			});
		}
	};
	nodeLoader.prototype.nextFile = function (paths, json) {
		util.print("node loader:  async load " + (json ? "succeeded" : "failed") + "\n");
		this.results.push(json ? JSON.parse(json) : undefined);
		if (paths.length > 0) {
			this.loadFiles(paths);
		} else {
			// only call the callback at the end of the chain of files
			if (typeof(callback) === 'function') {
				this.callback(this.results);
			}
		}
	};
	nodeLoader.prototype.loadManifests = function() {
		util.print("node loader: load manifests\n");
		if (!this.manifest) {
			var root = this.root;
			var manifest = {};

			function loadManifest(subpath) {
				var json;
				var dirpath = path.join(root, subpath);
				var filepath = path.join(dirpath, "ilibmanifest.json");
				if (fs.existsSync(filepath)) {
					util.print("node loader: loading manifest " + filepath + "\n");
					json = fs.readFileSync(filepath, "utf-8");
					if (json) {
						manifest[dirpath] = JSON.parse(json).files;
					}
				}
			}

			loadManifest("localetemp");
			loadManifest("locale");
			loadManifest("resources");
			
			this.manifest = manifest;
		}
	};
	nodeLoader.prototype.listAvailableFiles = function() {
		this.loadManifests();
		return this.manifest;
	};
	nodeLoader.prototype.isAvailable = function(path) {
		this.loadManifests();
		
		util.print("node loader: isAvailable " + path + "? ");
		for (var dir in this.manifest) {
			if (ilib.indexOf(this.manifest[dir], path) !== -1) {
				util.print("true\n");
				return true;
			}
		}
		
		util.print("false\n");
		return false;
	};
})();

ilib.setLoaderCallback(new nodeLoader());

//initialize some things statically because the constructors do not load 
// the locale-independent data
ilib.CType._init(true);
ilib.NormString.init();
