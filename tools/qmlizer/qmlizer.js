var fs = require('fs');

function qmlize(text) {
	// replace reserved keyword as with "as"
	text = text.replace(/([\,\{]\s*)(as)(\s*:)/gm, '$1"$2"$3')
	text = text.replace(/(new\s+[^\(\)\{\}\s;]+)(\s*;)/gm, '$1()$2')
	text = text.replace(/(new\s+[^\(\)\{\}\s;]+)(\s*\})/gm, '$1();$2')
	text = text.replace(/(\{\s*break)(\s*\})/gm, '$1;$2')
	return text;
}

(function () {
	console.log(process.argv);
	if (process.argv.length == 4) {
		var data = fs.readFileSync(process.argv[2], {encoding: 'utf8'});
		fs.writeFileSync(process.argv[3], qmlize(data), {encoding: 'utf8'});
	}
})();
