enyo.ready(function () {
	// we go ahead and run this once during loading of iLib settings are valid
	// during the loads of later libraries.
	// by youngMok
	if (!window.PalmSystem) {
		//cookieLocale = "ur-IN";
		//enyo.updateLocale("en-US", true);
	}
	//new i18n.application().renderInto(document.body);
	new i18n.localeSpec({name: "specDoc"}).renderInto(document.body);
});