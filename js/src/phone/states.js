/*
 * states.js - 
 * 
 * Copyright © 2014, JEDLSoft
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

/*
!depends 
ilibglobal.js 
locale.js 
localeinfo.js
*/

// !data states

ilib.StatesData = function(options) {
	var sync = true,
		loadParams = undefined;
	
	this.locale = new ilib.Locale();

	if (options) {
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? new ilib.Locale(options.locale) : options.locale;
		}
		
		if (typeof(options.sync) !== 'undefined') {
			sync = (options.sync == true);
		}
		
		if (options.loadParams) {
			loadParams = options.loadParams;
		}
	}	

	ilib.loadData({
		name: "states.json",
		object: ilib.StatesData,
		locale: this.locale,
		sync: sync, 
		loadParams: loadParams, 
		callback: ilib.bind(this, function (data) {
			if (!data) {
				data =[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1],[2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-3,-1,-1,-1,-1],[-4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]]
			}
			this.data = data;
			if (options && typeof(options.onLoad) === 'function') {
				options.onLoad(this);
			}
		})
	});

};

ilib.StatesData.prototype = {
	get: function (state) {

	}
};
