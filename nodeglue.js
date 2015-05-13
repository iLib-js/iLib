/* jshint node: true */
// pass the ilib definition to our callers
var ilib = require("./js/ilib-dyn-full-compiled.js").ilib;
exports.ilib = ilib;

var path = require("path"),
	fs = require("fs"),
	util = require("util"),
	ZoneInfoFile = require("./zoneinfo.js").ZoneInfoFile;

exports.ilib.isNonLatinLocale = function(spec) {
	var li = new exports.ilib.LocaleInfo(spec),
		locale = li.getLocale();
	
    // We use the non-latin fonts for these languages (even though their scripts are technically considered latin)
    var nonLatinLanguageOverrides = ["bs", "cs", "hr", "hu", "lv", "lt", "pl", "ro", "sr", "sl", "tr", "vi"];
    // We use the latin fonts (with non-Latin fallback) for these languages (even though their scripts are non-latin)
    var latinLanguageOverrides = ["ko"];
	return ((li.getScript() !== "Latn" || exports.ilib.indexOf(nonLatinLanguageOverrides, locale.getLanguage()) !== -1) &&
		(exports.ilib.indexOf(latinLanguageOverrides, locale.getLanguage()) < 0));
};

var nodeLoader = function () {
	// util.print("new nodeLoader instance\n");

	// for use from within a check-out of ilib
	this.base = path.normalize(__dirname);
	
	// for use on-device
	if (!fs.existsSync(path.join(this.base, "locale/localeinfo.json"))) {
		this.base = "/usr/share/javascript/ilib";
	}
	
	// util.print("base is defined as " + this.base + "\n");

	// use this so that we only load from the system on webOS
	if (fs.existsSync("/usr/palm")) {
		//util.print("_createZoneFile: Loading zone info from the system\n");
		this.useSystemZoneInfo = true;
	//} else {
	//	util.print("_createZoneFile: using ilib zone info\n");
	}
};

// make this a subclass of loader
nodeLoader.prototype = new ilib.Loader();
nodeLoader.prototype.constructor = nodeLoader;

nodeLoader.prototype._createZoneFile = function (path) {
	var zone = path.substring(path.indexOf("zoneinfo"));
	
	// remove the .json suffix to get the name of the zone
	zone = zone.substring(0, zone.length-5);
	
	try {
		var zif = new ZoneInfoFile("/usr/share/" + zone);
		
		// only get the info for this year. Later we can get the info
		// for any historical or future year too
		return zif.getIlibZoneInfo(new Date());
	} catch (e) {
		return undefined;
	}
};

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
		var that = this;
		
		// synchronous
		paths.forEach(ilib.bind(this, function (p) {
			if (this.useSystemZoneInfo && p.indexOf("zoneinfo") !== -1) {
				// util.print("node loader: loading zoneinfo path " + p + "\n");
				ret.push(that._createZoneFile(p));
			} else {
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
				// util.print("node loader:  sync load failed\n");
			}
		}));

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
		if (this.useSystemZoneInfo && filename.indexOf("zoneinfo") !== -1) {
			this._nextFile(root, paths, this._createZoneFile(filename));
		} else {
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
	}
};
nodeLoader.prototype._nextFile = function (root, paths, json) {
	// util.print("node loader:  async load " + (json ? "succeeded" : "failed") + "\n");
	this.results.push(json ? (typeof(json) === "string" ? JSON.parse(json) : json) : undefined);
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

ilib.setLoaderCallback(new nodeLoader());

//initialize some things statically because the constructors do not load 
// the locale-independent data
ilib.CType._init(true);
ilib.NormString.init();

exports.$L = (function() {
	var lfunc = function (string) {
		var str;
		if (typeof(string) === 'string') {
			if (!$L.rb) {
				return string;
			}
			str = $L.rb.getString(string);
		} else if (typeof(string) === 'object') {
			if (typeof(string.key) !== 'undefined' && typeof(string.value) !== 'undefined') {
				if (!$L.rb) {
					return string.value;
				}
				str = $L.rb.getString(string.value, string.key);
			} else {
				str = "";
			}
		} else {
			str = string;
		}
		return str.toString();
	};
	lfunc.rb = new exports.ilib.ResBundle({
		type: "html",
		name: "strings",
		lengthen: true		// if pseudo-localizing, this tells it to lengthen strings
	});
	//util.print("node loader: the resource bundle is now " + JSON.stringify(lfunc.rb) + "\n");
	return lfunc;
})();


