enyo.kind({
	name: "i18n.localeSpec",
	kind: "Panels",
	classes: "panels-sample-flickr-panels enyo-unselectable enyo-fit",
	arrangerKind: "CollapsingArranger",
	components: [
		{layoutKind: "FittableRowsLayout", style:"width:25%", components: [
			{kind: "onyx.Toolbar", components: [
				{kind: "onyx.InputDecorator", style: "width: 90%;", layoutKind: "FittableColumnsLayout", components: [
					{name: "searchInput", fit: true, kind: "onyx.Input", value: "ko-KR", onchange: "search"},
					{name:"searchImg", kind: "Image", src: "assets/search-input-search.png", style: "width: 20px; height: 20px;"}
				]},
			]},
			{name:"list", kind: "List", fit: true, touch: true, onSetupItem: "setupItem", components: [
				{name: "item", style: "padding: 10px;", classes: "panels-sample-flickr-item enyo-border-box", ontap: "itemTap", components: [
					{name: "title", classes: "panels-sample-flickr-title"}
				]}
			]}
		]},
		{name:"targetDocument", fit:true},
		{name: "flickrSearch", kind: "enyo.sample.PanelsFlickrSearch", onResults: "searchResults"}
	],
	create: function () {
		this.inherited(arguments);
		var ajx = new enyo.Ajax({url: "./assets/localeList.json",  sync:false});
			ajx.go();
			ajx.response(this, function(inSender, inResponse) {
				this.localesDetail = inResponse.locales;
				this.locales = Object.keys(inResponse.locales);
				var localeCount = Object.keys(inResponse.locales).length
				//console.log("localeCount : ", localeCount)
				for (var i = 0; i < localeCount; i++) {
					//console.log(this.locales[i] + this.localesDetail[this.locales[i]])
				}
		    });
	},
	rendered: enyo.inherit(function(sup) {
		return function() {
			sup.apply(this, arguments);
			this.createINode();
			document.getElementById(this.$.targetDocument.getId()).appendChild(this.iFrameNode);
			this.search();
		};
	}),
	createINode: function(locale) {
		var locale = "en-GB"
		this.iFrameNode = document.createElement("iframe");
		this.iFrameNode.border = 1
		this.iFrameNode.width = "100%";
		this.iFrameNode.height = "100%";
		this.iFrameNode.src = "localeSpec_" + locale +".html";
	},
	removeINode: function() {
		var list = document.getElementById(this.$.targetDocument.getId()); 
		list.removeChild(list.childNodes[0]);
	},
	search: function() {
		this.searchText = this.$.searchInput.getValue();
		this.page = 0;
		this.results = [];
		this.$.flickrSearch.search(this.searchText);
	},
	searchResults: function(inSender, inResults) {
		this.results = this.results.concat(inResults);
		this.$.list.setCount(this.results.length);
		if (this.page === 0) {
			this.$.list.reset();
		} else {
			this.$.list.refresh();
		}
	},
	setupItem: function(inSender, inEvent) {
		var i = inEvent.index;
		this.$.item.addRemoveClass("onyx-selected", inSender.isSelected(inEvent.index));
		var item = this.locales[i];
		var list =  this.locales[i] + " ( " + this.localesDetail[this.locales[i]] + " )";
		//console.log("list: ", list)
		this.$.title.setContent(list);
		//this.$.more.canGenerate = !this.results[i+1];
		return true;
	},
	itemTap: function(inSender, inEvent) {
		this.removeINode();
		var value = inEvent.originator.content;
		console.log("itemTap: ", value);
		this.createINode(value);
		document.getElementById(this.$.targetDocument.getId()).appendChild(this.iFrameNode)
	}
});

// A simple component to do a Flickr search.
enyo.kind({
	name: "enyo.sample.PanelsFlickrSearch",
	kind: "Component",
	published: {
		searchText: ""
	},
	events: {
		onResults: ""
	},
	url: "https://api.flickr.com/services/rest/",
	pageSize: 400,
	api_key: "2a21b46e58d207e4888e1ece0cb149a5",
	search: function(inSearchText, inPage) {
		this.searchText = inSearchText || this.searchText;
		var i = (inPage || 0) * this.pageSize;
		var params = {
			method: "flickr.photos.search",
			format: "json",
			api_key: this.api_key,
			per_page: this.pageSize,
			page: i,
			text: this.searchText
		};
		var req;
		if (window.location.protocol === "ms-appx:") {
			params.nojsoncallback = 1;
			// Use ajax for platforms with no jsonp support (Windows 8)
			req = new enyo.Ajax({url: this.url, handleAs: "text"})
				.response(this, "processAjaxResponse")
				.go(params);
		} else {
			req = new enyo.JsonpRequest({url: this.url, callbackName: "jsoncallback"})
				.response(this, "processResponse")
				.go(params);
		}
		return req;
	},
	processAjaxResponse: function(inSender, inResponse) {
		inResponse = enyo.json.parse(inResponse);
		this.processResponse(inSender, inResponse);
	},
	processResponse: function(inSender, inResponse) {
		var photos = inResponse.photos ? inResponse.photos.photo || [] : [];
		for (var i=0, p; (p=photos[i]); i++) {
			var urlprefix = "http://farm" + p.farm + ".static.flickr.com/" + p.server + "/" + p.id + "_" + p.secret;
			
			p.original = urlprefix + ".jpg";
		}
		this.doResults(photos);
		return photos;
	}
});