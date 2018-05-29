/*
 * app.js - iLib Locale Reference page
 * 
 * Copyright © 2018, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

enyo.kind({
	name: "i18n.localeSpec",
	kind: "FittableRows",
	classes: 'enyo-fit',
	components: [
		{kind:"FittableColumns", classes:"left-layout", components:[
			{name:"logoImg", kind: "Image", style:"width:116;", src: "assets/localespec_img.png"},
			{kind:"onyx.Button", style:"visibility:hidden;", fit:true},
			{style:"float:right;", components:[
				{name:"headerDate", classes:"left-header-date", content: "Generated on"}
			]}
		]},
		{kind: "FittableColumns", fit:true, components: [
			{name:"left", style:"width:300px;", components:[
				{kind: "onyx.Toolbar", classes:"left-toolbar", components: [
					{kind: "onyx.InputDecorator", style: "width: 98%;", height:"300px", layoutKind: "FittableColumnsLayout", components: [
						{name: "searchInput", kind: "onyx.Input", oninput: "search"},
						{name:"searchImg", kind: "Image", src: "assets/search-input-search.png", style: "float:right;margin-top: 5px !important;;width: 20px; height: 20px;"}
					]}
				]},
				{name:"list", kind: "List", style:"width:300px;height:94%", fit: true, ontap: "itemTap",count: 191, /*touch: true,*/ onSetupItem: "setupItem", components: [
					{name: "item", style: "padding: 10px;", components: [
						{name: "title", classes: "list-item-font"}
					]}
				]}
			]},
			{name:"targetDocument", classes:"right-iframe", fit:true}
		]}
	],
	listCount : 191,
	renewList : [],
	create: function () {
		this.inherited(arguments);
		this.getLocaleArray();
		//console.log("Object.keys(this.localeList).length: ", Object.keys(this.localeList).length);
	},
	rendered: enyo.inherit(function(sup) {
		return function() {
		sup.apply(this, arguments);
		this.createINode();
		document.getElementById(this.$.targetDocument.getId()).appendChild(this.iFrameNode);
		};
	}),
	createINode: function(locale) {
		this.iFrameNode = document.createElement("iframe");
		this.iFrameNode.name= "iframeName";
		this.iFrameNode.value= locale;
		this.iFrameNode.frameBorder= "0";
		this.iFrameNode.width = "100%";
		this.iFrameNode.height = "100%";
		this.iFrameNode.src = "./localePage/localeRef.html";
	},
	removeINode: function() {
		var list = document.getElementById(this.$.targetDocument.getId()); 
		list.removeChild(list.childNodes[0]);
	},
	search: function() {
		this.renewList = [];
		this.searchText = this.$.searchInput.getValue();
		if (this.searchText !== "") {
			for (i =0,j=0; i < this.listCount; i++) {
				if ((Object.keys(this.localeList)[i]).match(eval('/'+this.searchText+'{1,}/ig')) !==null) {
					this.renewList[j] = Object.keys(this.localeList)[i];
					j++;
				} 
			}
			this.renewList = this.renewList.sort();
		} else {
			j = this.listCount;
			this.renewList = this.localeList;
		}
		
		this.$.list.setCount(j);
		this.$.list.refresh();
	},
	setupItem: function(inSender, inEvent) {
		var i = inEvent.index;
		this.sortedList = Object.keys(this.localeList).sort();
		//this.localeList = Object.keys(this.localeList);
		this.$.item.addRemoveClass("onyx-selected", inSender.isSelected(inEvent.index));
		if (inSender.count !== this.listCount ) {
			this.$.title.setContent(this.renewList[i]);
		} else {
			this.$.title.setContent(this.sortedList[i]);
		}
		return true;
	},

	itemTap: function(inSender, inEvent) {
		this.removeINode();
		var value = this.localeList[inEvent.originator.content];
		//console.log("itemTap: ", value);
		this.createINode(value);
		document.getElementById(this.$.targetDocument.getId()).appendChild(this.iFrameNode)
	},
	getLocaleArray: function() {
		this.localeList = {
			"Arabic - Egypt":"ar-EG",
			"Arabic - Iraq":"ar-IQ",
			"Arabic - Morocco":"ar-MA",
			"Assamese - India":"as-IN",
			"Azerbaijani - Azerbaijan":"az-Latn-AZ",
			"Bulgarian - Bulgaria":"bg-BG",
			"Bengali - India":"bn-IN", 
			"Bosnian - Bosnia & Herzegovina":"bs-Latn-BA",
			"Bosnian - Montenegro":"bs-Latn-ME",
			"Czech - Czech Republic":"cs-CZ",
			"Danish - Denmark":"da-DK",
			"German - Austria":"de-AT",
			"German - Switzerland":"de-CH",
			"German - Germany":"de-DE",
			"German - Luxembourg":"de-LU",
			"Greek - Cyprus":"el-CY",
			"Greek - Greece":"el-GR",
			"English - Armenia" : "en-AM",
			"English - Australia":"en-AU",
			"English - Azerbaijan":"en-AZ",
			"English - Canada":"en-CA",
			"English - United Kingdom":"en-GB",
			"English - Ghana":"en-GH",
			"English - Hong Kong SAR China":"en-HK",
			"English - Ireland":"en-IE",
			"English - India":"en-IN",
			"English - Iceland":"en-IS",
			"English - Japan":"en-JP",
			"English - South Korea":"en-KR",
			"English - Kenya":"en-KE",
			"English - Sri Lanka":"en-LK",
			"English - Myanmar (Burma)":"en-MM",
			"English - Malawi":"en-MW",
			"English - Malaysia":"en-MY",
			"English - Nigeria":"en-NG",
			"English - New Zealand":"en-NZ",
			"English - Philippines":"en-PH",
			"English - Puerto Rico":"en-PR",
			"English - Singapore":"en-SG",
			"English - United States":"en-US",
			"English - Uganda":"en-UG",
			"English - South Africa":"en-ZA",
			"English - Zambia":"en-ZM",
			"Spanish - Argentina":"es-AR",
			"Spanish - Bolivia":"es-BO",
			"Spanish - Chile":"es-CL",
			"Spanish - Colombia":"es-CO",
			"Spanish - Dominican Republic":"es-DO",
			"Spanish - Ecuador":"es-EC",
			"Spanish - Spain":"es-ES",
			"Spanish - Guatamala":"es-GT",
			"Spanish - Honduras":"es-HN",
			"Spanish - Mexico":"es-MX",
			"Spanish - Nicaragua":"es-NI",
			"Spanish - Panama":"es-PA",
			"Spanish - Peru":"es-PE",
			"Spanish - Puerto Rico":"es-PR",
			"Spanish - Paraguay":"es-PY",
			"Spanish - El Salvador":"es-SV",
			"Spanish - United States":"es-US",
			"Spanish - Uruguay":"es-UY",
			"Spanish - Venezuela":"es-VE",
			"Estonian - Estonia":"et-EE",
			"Persian - Afghanistan":"fa-AF",
			"Persian - Iran":"fa-IR",
			"Finnish - Finland":"fi-FI",
			"French - Belgium":"fr-BE",
			"French - Canada":"fr-CA",
			"French - Switzerland":"fr-CH",
			"French - France":"fr-FR",
			"French - Luxembourg":"fr-LU",
			"Irish - Ireland":"ga-IE",
			"Gujarati - India":"gu-IN",
			"Hebrew - Israel":"he-IL",
			"Hindi - India":"hi-IN",
			"Croatian - Croatia":"hr-HR",
			"Croatian - Montenegro":"hr-ME",
			"Hungarian - Hungary":"hu-HU",
			"Indonesian - Indonesia":"id-ID",
			"Icelandic - Iceland":"is-IS",
			"Italian - Switzerland":"it-CH",
			"Italian - Italy":"it-IT",
			"Japanese - Japan":"ja-JP",
			"Kazakh - Kazakhstan":"kk-KZ",
			"Kannada - India":"kn-IN",
			"Khmer - Cambodia":"km-KH",
			"Korean - South Korea":"ko-KR",
			"Kurdish - Iraq":"ku-Arab-IQ",
			"Lithuanian - Lithuania":"lt-LT",
			"Latvian - Latvia":"lv-LV",
			"Macedonian - Former Yugoslav Republic of Macedonia":"mk-MK",
			"Malayalam - India":"ml-IN",
			"Marathi - India":"mr-IN",
			"Malay - Malaysia":"ms-Latn-MY",
			"Norwegian - Norway":"nb-NO",
			"Dutch - Belgium":"nl-BE",
			"Dutch - Netherlands":"nl-NL",
			"Punjabi - India":"pa-Guru-IN",
			"Polish - Poland":"pl-PL",
			"Portuguese - Brazil":"pt-BR",
			"Portuguese - Portugal":"pt-PT",
			"Romanian - Romania":"ro-RO",
			"Serbian - Cyrl -Serbia":"sr-Cyrl-RS",
			"Serbian - Latn - Serbia":"sr-Latn-RS",
			"Russian - Belarus":"ru-BY",
			"Russian - Kyrgyzstan":"ru-KG",
			"Russian - Kazakhstan":"ru-KZ",
			"Russian - Georgia":"ru-GE",
			"Russian - Russia":"ru-RU",
			"Russian - Ukraine":"ru-UA",
			"Sinhala - Sri Lanka":"si-LK",
			"Slovak - Slovakia":"sk-SK",
			"Slovene - Slovenia":"sl-SI",
			"Swahili - Kenya":"sw-Latn-KE",
			"Albanian - Albania":"sq-AL", 
			"Albanian - Montenegro":"sq-ME",
			"Swedish - Finland":"sv-FI",
			"Swedish - Sweden":"sv-SE",
			"Tamil - India":"ta-IN",
			"Telugu - India":"te-IN",
			"Thai - Thailand":"th-TH",
			"Turkish - Armenia":"tr-AM",
			"Turkish - Azerbaijan":"tr-AZ",
			"Turkish - Cyprus":"tr-CY",
			"Turkish - Turkey":"tr-TR",
			"Ukrainian - Ukraine":"uk-UA",
			"Urdu - India":"ur-IN",
			"Uzbek - Latn - Uzbekistan":"uz-Latn-UZ",
			"Vietnamese - Vietnam":"vi-VN",
			"Chinese - Hans - China":"zh-Hans-CN",
			"Chinese - Hant -  Hong Kong SAR China":"zh-Hant-HK",
			"Chinese - Hant - Taiwan":"zh-Hant-TW",
			"English - Georgia":"en-GE",
			"English - China":"en-CN",
			"English - Mexico":"en-MX",
			"English - Taiwan":"en-TW",
			"Mongolian - Mongolia":"mn-Cyrl-MN",
			"Spanish - Canada":"es-CA",
			"Afrikaans - South Africa":"af-ZA",
			"Amharic - Ethiopia":"am-ET",
			"Hausa - Nigeria":"ha-Latn-NG",
			"Odia - India":"or-IN",
			"Arabic - United Arab Emirates":"ar-AE",
			"Arabic - Bahrain":"ar-BH",
			"Arabic - Djibouti":"ar-DJ",
			"Arabic - Algeria":"ar-DZ",
			"Arabic - Jordan":"ar-JO",
			"Arabic - Kuwait":"ar-KW", 
			"Arabic - Lebanon":"ar-LB", 
			"Arabic - Libya":"ar-LY",
			"Arabic - Mauritania":"ar-MR",
			"Arabic - Oman":"ar-OM",
			"Arabic - Qatar":"ar-QA",
			"Arabic - Saudi Arabia":"ar-SA",
			"Arabic - Sudan":"ar-SD",
			"Arabic - Syria":"ar-SY",
			"Arabic - Tunisia":"ar-TN",
			"Arabic - Yemen":"ar-YE",
			"English - Ethiopia":"en-ET",
			"English - Gambia":"en-GM",
			"English - Liberia":"en-LR",
			"English - Pakistan":"en-PK",
			"English - Rwanda":"en-RW",
			"English - Sudan":"en-SD",
			"English - Sierra Leone":"en-SL",
			"English - Tanzania":"en-TZ",
			"Spanish - Costa Rica":"es-CR",
			"Spanish - Equatorial Guinea":"es-GQ",
			"Spanish - Philippines":"es-PH",
			"French - Burkina Faso":"fr-BF",
			"French - Benin":"fr-BJ",
			"French - Democratic Republic of the Congo":"fr-CD",
			"French - Central African Republic":"fr-CF",
			"French - Congo":"fr-CG",
			"French - Ivory Coast":"fr-CI",
			"French - Cameroon":"fr-CM",
			"French - Equatorial Guinea":"fr-GQ",
			"French - Djibouti":"fr-DJ",
			"French - Algeria":"fr-DZ",
			"French - Gabon":"fr-GA",
			"French - Guinea":"fr-GN",
			"French - Lebanon":"fr-LB",
			"French - Mali":"fr-ML",
			"French - Rwanda":"fr-RW",
			"French - Senegal":"fr-SN",
			"French - Togo":"fr-TG",
			"Malay - Singapore":"ms-Latn-SG",
			"Punjabi - Pakistan":"pa-Arab-PK",
			"Portuguese - Angola":"pt-AO",
			"Portuguese - Equitorial Guinea":"pt-GQ",
			"Portuguese - Cape Verde":"pt-CV",
			"Urdu - Pakistan":"ur-PK",
			"Chinese - Hans - Singapore":"zh-Hans-SG",
			"Chinese - Hans - Malaysia":"zh-Hans-MY"
		};
	}
});
