/*
 * testunifile.js - test the Unicode file loading class
 * 
 * Copyright © 2012, JEDLSoft
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

var common = require("../../tools/cldr/common.js");
var aux = require("../../tools/cldr/datefmts.js");

function testDistanceZeroIntrinsicString() {
	var left = "foo";
	var right = "foo";
    assertEquals(0, aux.distance(left, right));
}

function testDistanceZeroIntrinsicNumber() {
	var left = 5.6;
	var right = 5.600;
    assertEquals(0, aux.distance(left, right));
}

function testDistanceZeroIntrinsicBoolean() {
	var left = false;
	var right = false;
    assertEquals(0, aux.distance(left, right));
}

function testDistanceZeroIntrinsicNull() {
	var left = null;
	var right = null;
    assertEquals(0, aux.distance(left, right));
}

function testDistanceZeroIntrinsicUndefined() {
	var left = undefined;
	var right = undefined;
    assertEquals(0, aux.distance(left, right));
}

function testDistanceOneIntrinsicString() {
	var left = "foo";
	var right = "foobar";
    assertEquals(1, aux.distance(left, right));
}

function testDistanceOneIntrinsicNumber() {
	var left = 5.6;
	var right = 5.6005;
    assertEquals(1, aux.distance(left, right));
}

function testDistanceOneIntrinsicBoolean() {
	var left = false;
	var right = true;
    assertEquals(1, aux.distance(left, right));
}

function testDistanceOneIntrinsicNull() {
	var left = null;
	var right = undefined;
    assertEquals(1, aux.distance(left, right));
}

function testDistanceOneDifferentTypes() {
	var left = "1";
	var right = 1;
    assertEquals(1, aux.distance(left, right));
}

function testDistanceZeroSimple() {
	var left = {
		a: "b",
		c: "d",
		e: "f"
	};
	var right = {
		a: "b",
		c: "d",
		e: "f"
	};
    assertEquals(0, aux.distance(left, right));
}

function testDistanceZeroNonStrings() {
	var left = {
		a: 1,
		b: 0,
		c: true,
		d: false
	};
	var right = {
		a: 1,
		b: 0,
		c: true,
		d: false
	};
    assertEquals(0, aux.distance(left, right));
}

function testDistanceZeroSubObjects() {
	var left = {
		a: 1,
		b: 0,
		c: true,
		d: false,
		e: {
			a: "asdf",
			b: true,
			c: 2343.3453,
			d: null,
			e: {
				x: true,
				y: false,
				z: "string"
			}
		}
	};
	var right = {
		a: 1,
		b: 0,
		c: true,
		d: false,
		e: {
			a: "asdf",
			b: true,
			c: 2343.3453,
			d: null,
			e: {
				x: true,
				y: false,
				z: "string"
			}
		}
	};
    assertEquals(0, aux.distance(left, right));
}

function testDistanceZeroArrays() {
	var left = {
		b: ["a", "b", "c", "d"]
	};
	var right = {
		b: ["a", "b", "c", "d"]
	};
    assertEquals(0, aux.distance(left, right));
}

function testDistanceZeroArraysComplex() {
	var left = {
		b: [
		    {
		    	name: "asdf",
		    	num: 4
		    },
		    {
		    	name: "foo",
		    	age: 43
		    },
		    {
		    	name: "jjjjj",
		    	weight: 343
		    }
		]
	};
	var right = {
		b: [
		    {
		    	name: "asdf",
		    	num: 4
		    },
		    {
		    	name: "foo",
		    	age: 43
		    },
		    {
		    	name: "jjjjj",
		    	weight: 343
		    }
		]
	};
    assertEquals(0, aux.distance(left, right));
}

function testDistanceOneSimple() {
	var left = {
		a: "b",
		c: "d",
		e: "f"
	};
	var right = {
		a: "b",
		c: "d",
		e: "g"
	};
    assertEquals(1, aux.distance(left, right));
}

function testDistanceOneNonStrings() {
	var left = {
		a: 1,
		b: 0,
		c: true,
		d: false
	};
	var right = {
		a: 1,
		b: 0,
		c: false,
		d: false
	};
    assertEquals(1, aux.distance(left, right));
}

function testDistanceOneSubObjects() {
	var left = {
		a: 1,
		b: 0,
		c: true,
		d: false,
		e: {
			a: "asdf",
			b: true,
			c: 2343.3453,
			d: null,
			e: {
				x: true,
				y: false,
				z: "string"
			}
		}
	};
	var right = {
		a: 1,
		b: 0,
		c: true,
		d: false,
		e: {
			a: "asdf",
			b: true,
			c: 2343.3453,
			d: null,
			e: {
				x: true,
				y: false,
				z: "foobar"
			}
		}
	};
    assertEquals(1, aux.distance(left, right));
}

function testDistanceOneArrays() {
	var left = {
		b: ["a", "b", "c", "d"]
	};
	var right = {
		b: ["a", "b", "e", "d"]
	};
    assertEquals(1, aux.distance(left, right));
}

function testDistanceOneArraysComplex() {
	var left = {
		b: [
		    {
		    	name: "asdf",
		    	num: 4
		    },
		    {
		    	name: "foo",
		    	age: 43
		    },
		    {
		    	name: "jjjjj",
		    	weight: 343
		    }
		]
	};
	var right = {
		b: [
		    {
		    	name: "asdf",
		    	num: 4
		    },
		    {
		    	name: "foo",
		    	age: 43
		    },
		    {
		    	name: "jj",
		    	weight: 343
		    }
		]
	};
    assertEquals(1, aux.distance(left, right));
}

function testDistanceOneMissingLeft() {
	var left = {
		a: "b",
		c: "d"
	};
	var right = {
		a: "b",
		c: "d",
		e: "f"
	};
    assertEquals(1, aux.distance(left, right));
}

function testDistanceOneMissingRight() {
	var left = {
		a: "b",
		c: "d",
		e: "f"
	};
	var right = {
		a: "b",
		c: "d"
	};
    assertEquals(1, aux.distance(left, right));
}

function testDistanceDifferentSimpleTypes() {
	var left = {
		a: 1,
		c: "d"
	};
	var right = {
		a: true,
		c: true
	};
    assertEquals(2, aux.distance(left, right));
}

function testDistanceDifferentComplexTypes() {
	var left = {
		a: 1,
		c: {
			x: true,
			y: 1,
			z: "asdf"
		}
	};
	var right = {
		a: true,
		c: true
	};
    assertEquals(5, aux.distance(left, right));
}

function testDistanceArraysDifferentLengthsLeft() {
	var left = {
		b: ["a", "b", "c"]
	};
	var right = {
		b: ["a", "b", "c", "d", "e"]
	};
    assertEquals(2, aux.distance(left, right));
}

function testDistanceArraysDifferentLengthsRight() {
	var left = {
		b: ["a", "b", "c", "d", "e"]
	};
	var right = {
		b: ["a", "b", "c"]
	};
    assertEquals(2, aux.distance(left, right));
}

function testDistanceArraysDifferentLengthsAndContents() {
	var left = {
		b: ["a", "b", "c"]
	};
	var right = {
		b: ["a", "x", "c", "d", "e"]
	};
    assertEquals(3, aux.distance(left, right));
}

function testDistanceUndefinedRight() {
	var right = {
		b: true,
		c: false,
		e: "asdf"
	};
    assertEquals(3, aux.distance(undefined, right));
}

function testDistanceUndefinedLeft() {
	var left = {
		b: true,
		c: false,
		e: "asdf"
	};
    assertEquals(3, aux.distance(left, undefined));
}


function testPromoteNormal() {
	var group = {
		data: {
			"locale": "en",
			"gregorian": {
				"order": "{date} 'at' {time}",
				"date": {
					"dmy": {
						"s": "dd/MM/yy",
						"m": "dd/MM/yy",
						"l": "dd MMM yyyy",
						"f": "dd MMMM yyyy"
					}
				}
			}
		},
		"US": {
			data: {
				"locale": "en-US",
    			"gregorian": {
					"order": "{time} {date}",
					"date": {
						"dmy": {
							"s": "M/dd/yy",
							"m": "M/dd/yyyy",
							"l": "MMM d, yyyy",
							"f": "MMMM d, yyyy"
						}
					}
				}
			}
		},
		"GB": {
			data: {
				"locale": "en-GB",
    			"gregorian": {
    				"order": "{date} {time}",
    				"date": {
    					"dmy": {
    						"s": "d/MM/yy",
    						"m": "dd/MM/yyyy",
    						"l": "d MMM yyyy",
    						"f": "d MMMM yyyy"
    					}
    				}
    			}
			}
		},
		"CA" : {
			data: {
				"locale": "en-CA",
    			"gregorian": {
    				"order": "{date} {time}",
    				"date": {
    					"dmy": {
    						"s": "d/MM/yy",
    						"m": "d/MM/yyyy",
    						"l": "d MMM yyyy",
    						"f": "d MMMM yyyy"
    					}
    				}
    			}
			}
		},
		"AU" : {
			data: {
				"locale": "en-AU",
    			"gregorian": {
    				"order": "{date} {time}",
    				"date": {
    					"dmy": {
    						"s": "d/MM/yy",
    						"m": "d/MM/yyyy",
    						"l": "d MMM, yyyy",
    						"f": "d MMMM, yyyy"
    					}
    				}
    			}
			}
		}
	};
    
	aux.promoteFormats(group);
	
	assertEquals("en-CA", group.data.locale);
}

function testPromoteNotEnoughChildren() {
	var group = {
		data: {
			"locale": "en",
			"gregorian": {
				"order": "{date} 'at' {time}",
				"date": {
					"dmy": {
						"s": "dd/MM/yy",
						"m": "dd/MM/yy",
						"l": "dd MMM yyyy",
						"f": "dd MMMM yyyy"
					}
				}
			}
		},
		"US": {
			data: {
				"locale": "en-US",
    			"gregorian": {
					"order": "{time} {date}",
					"date": {
						"dmy": {
							"s": "M/dd/yy",
							"m": "M/dd/yyyy",
							"l": "MMM d, yyyy",
							"f": "MMMM d, yyyy"
						}
					}
				}
			}
		}
	};
    
	aux.promoteFormats(group);
	
	assertEquals("en", group.data.locale);
}

function testPromoteNoChildren() {
	var group = {
		data: {
			"locale": "en",
			"gregorian": {
				"order": "{date} 'at' {time}",
				"date": {
					"dmy": {
						"s": "dd/MM/yy",
						"m": "dd/MM/yy",
						"l": "dd MMM yyyy",
						"f": "dd MMMM yyyy"
					}
				}
			}
		}
	};
    
	aux.promoteFormats(group);
	
	assertEquals("en", group.data.locale);
}

function testPromoteNoParentManyChildren() {
	var group = {
		"US": {
			data: {
				"locale": "en-US",
    			"gregorian": {
					"order": "{time} {date}",
					"date": {
						"dmy": {
							"s": "M/dd/yy",
							"m": "M/dd/yyyy",
							"l": "MMM d, yyyy",
							"f": "MMMM d, yyyy"
						}
					}
				}
			}
		},
		"GB": {
			data: {
				"locale": "en-GB",
    			"gregorian": {
    				"order": "{date} {time}",
    				"date": {
    					"dmy": {
    						"s": "d/MM/yy",
    						"m": "dd/MM/yyyy",
    						"l": "d MMM yyyy",
    						"f": "d MMMM yyyy"
    					}
    				}
    			}
			}
		},
		"CA" : {
			data: {
				"locale": "en-CA",
    			"gregorian": {
    				"order": "{date} {time}",
    				"date": {
    					"dmy": {
    						"s": "d/MM/yy",
    						"m": "d/MM/yyyy",
    						"l": "d MMM yyyy",
    						"f": "d MMMM yyyy"
    					}
    				}
    			}
			}
		},
		"AU" : {
			data: {
				"locale": "en-AU",
    			"gregorian": {
    				"order": "{date} {time}",
    				"date": {
    					"dmy": {
    						"s": "d/MM/yy",
    						"m": "d/MM/yyyy",
    						"l": "d MMM, yyyy",
    						"f": "d MMMM, yyyy"
    					}
    				}
    			}
			}
		}
	};
    
	aux.promoteFormats(group);
	
	assertEquals("en-CA", group.data.locale);
}

function testPromoteNoParentOnlyChild() {
	// should promote the only child if there is no root data
	var group = {
		"US": {
			data: {
				"locale": "en-US",
    			"gregorian": {
					"order": "{time} {date}",
					"date": {
						"dmy": {
							"s": "M/dd/yy",
							"m": "M/dd/yyyy",
							"l": "MMM d, yyyy",
							"f": "MMMM d, yyyy"
						}
					}
				}
			}
		}
	};
    
	aux.promoteFormats(group);
	
	assertNotUndefined(group.data);
	assertEquals("en-US", group.data.locale);
}

function testPromoteRecursively() {
	var group = {
		data: {
			"locale": "en",
			"gregorian": {
				"order": "{date} 'at' {time}",
				"date": {
					"dmy": {
						"s": "dd/MM/yy",
						"m": "dd/MM/yy",
						"l": "dd MMM yyyy",
						"f": "dd MMMM yyyy"
					}
				}
			}
		},
		"Latn": {
			data: {
				"locale": "en-Latn",
				"gregorian": {
					"order": "{date} 'at' {time}",
					"date": {
						"dmy": {
							"s": "dd/MM/yy",
							"m": "dd/MM/yy",
							"l": "dd MMM yyyy",
							"f": "dd MMMM yyyy"
						}
					}
				}
			},
    		"US": {
    			data: {
    				"locale": "en-Latn-US",
        			"gregorian": {
    					"order": "{time} {date}",
    					"date": {
    						"dmy": {
    							"s": "M/dd/yy",
    							"m": "M/dd/yyyy",
    							"l": "MMM d, yyyy",
    							"f": "MMMM d, yyyy"
    						}
    					}
    				}
    			}
    		},
    		"GB": {
    			data: {
    				"locale": "en-Latn-GB",
        			"gregorian": {
        				"order": "{date} {time}",
        				"date": {
        					"dmy": {
        						"s": "d/MM/yy",
        						"m": "dd/MM/yyyy",
        						"l": "d MMM yyyy",
        						"f": "d MMMM yyyy"
        					}
        				}
        			}
    			}
    		},
    		"CA" : {
    			data: {
    				"locale": "en-Latn-CA",
        			"gregorian": {
        				"order": "{date} {time}",
        				"date": {
        					"dmy": {
        						"s": "d/MM/yy",
        						"m": "d/MM/yyyy",
        						"l": "d MMM yyyy",
        						"f": "d MMMM yyyy"
        					}
        				}
        			}
    			}
    		},
    		"AU" : {
    			data: {
    				"locale": "en-Latn-AU",
        			"gregorian": {
        				"order": "{date} {time}",
        				"date": {
        					"dmy": {
        						"s": "d/MM/yy",
        						"m": "d/MM/yyyy",
        						"l": "d MMM, yyyy",
        						"f": "d MMMM, yyyy"
        					}
        				}
        			}
    			}
    		}
		},
		"Dsrt": {
			data: {
				"locale": "en-Dsrt",
				"gregorian": {
					"order": "{date} {time}",
					"date": {
						"dmy": {
							"s": "dd.MM.yy",
							"m": "dd.MM.yy",
							"l": "dd MMM yyyy",
							"f": "dd MMMM yyyy"
						}
					}
				}
			},
    		"US": {
    			data: {
    				"locale": "en-Dsrt-US",
        			"gregorian": {
    					"order": "{time}, {date}",
    					"date": {
    						"dmy": {
    							"s": "M.dd.yy",
    							"m": "M.dd.yyyy",
    							"l": "MMM d yyyy",
    							"f": "MMMM d yyyy"
        					},
        					"dm": {
    							"s": "M.dd",
    							"m": "M.dd",
    							"l": "MMM d",
    							"f": "MMMM d"
    						}
    					}
    				}
    			}
    		},
    		"GB": {
    			data: {
    				"locale": "en-Dsrt-GB",
        			"gregorian": {
        				"order": "{date}, {time}",
        				"date": {
        					"dmy": {
        						"s": "d.MM.yy",
        						"m": "dd.MM.yyyy",
        						"l": "d MMM yyyy",
        						"f": "d MMMM yyyy"
        					},
        					"dm": {
        						"s": "d.MM",
        						"m": "dd.MM",
        						"l": "d MMM",
        						"f": "d MMMM"
        					}
        				}
        			}
    			}
    		},
    		"CA" : {
    			data: {
    				"locale": "en-Dsrt-CA",
        			"gregorian": {
        				"order": "{date}, {time}",
        				"date": {
        					"dmy": {
        						"s": "d.MM.yy",
        						"m": "d.MM.yyyy",
        						"l": "d MMM yyyy",
        						"f": "d MMMM yyyy"
        					},
        					"dm": {
        						"s": "d.MM",
        						"m": "d.MM",
        						"l": "d MMM",
        						"f": "d MMMM"
        					}
        				}
        			}
    			}
    		},
    		"AU" : {
    			data: {
    				"locale": "en-Dsrt-AU",
        			"gregorian": {
        				"order": "{date}, {time}",
        				"date": {
        					"dmy": {
        						"s": "d.MM.yy",
        						"m": "d.MM.yyyy",
        						"l": "d MMM, yyyy",
        						"f": "d MMMM, yyyy"
        					},
        					"dm": {
        						"s": "d.MM",
        						"m": "d.MM",
        						"l": "d MMM",
        						"f": "d MMMM"
        					}
        				}
        			}
    			}
    		}
		}
	};
    
	aux.promoteFormats(group);
	
	assertEquals("en-Latn-CA", group.data.locale);
}

function testPromoteRecursivelyBreadthFirst() {
	// this will fail if you don't promote the children first
	// and then promote this level. Otherwise, you are deciding
	// which one to promote before making sure each of the children
	// is finished promoting
	var group = {
		"Dsrt": {
			data: {
				"locale": "en-Dsrt",
				"gregorian": {
					"order": "{date} {time}",
					"date": {
						"dmy": {
							"s": "dd.MM.yy",
							"m": "dd.MM.yy",
							"l": "dd MMM yyyy",
							"f": "dd MMMM yyyy"
						}
					}
				}
			},
    		"US": {
    			data: {
    				"locale": "en-Dsrt-US",
        			"gregorian": {
    					"order": "{time}, {date}",
    					"date": {
    						"dmy": {
    							"s": "M.dd.yy",
    							"m": "M.dd.yyyy",
    							"l": "MMM d yyyy",
    							"f": "MMMM d yyyy"
        					},
        					"dm": {
    							"s": "M.dd",
    							"m": "M.dd",
    							"l": "MMM d",
    							"f": "MMMM d"
    						}
    					}
    				}
    			}
    		},
    		"GB": {
    			data: {
    				"locale": "en-Dsrt-GB",
        			"gregorian": {
        				"order": "{date}, {time}",
        				"date": {
        					"dmy": {
        						"s": "d.MM.yy",
        						"m": "dd.MM.yyyy",
        						"l": "d MMM yyyy",
        						"f": "d MMMM yyyy"
        					},
        					"dm": {
        						"s": "d.MM",
        						"m": "dd.MM",
        						"l": "d MMM",
        						"f": "d MMMM"
        					}
        				}
        			}
    			}
    		},
    		"CA" : {
    			data: {
    				"locale": "en-Dsrt-CA",
        			"gregorian": {
        				"order": "{date}, {time}",
        				"date": {
        					"dmy": {
        						"s": "d.MM.yy",
        						"m": "d.MM.yyyy",
        						"l": "d MMM yyyy",
        						"f": "d MMMM yyyy"
        					},
        					"dm": {
        						"s": "d.MM",
        						"m": "d.MM",
        						"l": "d MMM",
        						"f": "d MMMM"
        					}
        				}
        			}
    			}
    		},
    		"AU" : {
    			data: {
    				"locale": "en-Dsrt-AU",
        			"gregorian": {
        				"order": "{date}, {time}",
        				"date": {
        					"dmy": {
        						"s": "d.MM.yy",
        						"m": "d.MM.yyyy",
        						"l": "d MMM, yyyy",
        						"f": "d MMMM, yyyy"
        					},
        					"dm": {
        						"s": "d.MM",
        						"m": "d.MM",
        						"l": "d MMM",
        						"f": "d MMMM"
        					}
        				}
        			}
    			}
    		}
		},
		"Latn": {
			data: {
				"locale": "en-Latn",
				"gregorian": {
					"order": "{date} 'at' {time}",
					"date": {
						"dmy": {
							"s": "dd/MM/yy",
							"m": "dd/MM/yy",
							"l": "dd MMM yyyy",
							"f": "dd MMMM yyyy"
						}
					}
				}
			},
    		"US": {
    			data: {
    				"locale": "en-Latn-US",
        			"gregorian": {
    					"order": "{time} {date}",
    					"date": {
    						"dmy": {
    							"s": "M/dd/yy",
    							"m": "M/dd/yyyy",
    							"l": "MMM d, yyyy",
    							"f": "MMMM d, yyyy"
    						}
    					}
    				}
    			}
    		},
    		"GB": {
    			data: {
    				"locale": "en-Latn-GB",
        			"gregorian": {
        				"order": "{date} {time}",
        				"date": {
        					"dmy": {
        						"s": "d/MM/yy",
        						"m": "dd/MM/yyyy",
        						"l": "d MMM yyyy",
        						"f": "d MMMM yyyy"
        					}
        				}
        			}
    			}
    		},
    		"CA" : {
    			data: {
    				"locale": "en-Latn-CA",
        			"gregorian": {
        				"order": "{date} {time}",
        				"date": {
        					"dmy": {
        						"s": "d/MM/yy",
        						"m": "d/MM/yyyy",
        						"l": "d MMM yyyy",
        						"f": "d MMMM yyyy"
        					}
        				}
        			}
    			}
    		},
    		"AU" : {
    			data: {
    				"locale": "en-Latn-AU",
        			"gregorian": {
        				"order": "{date} {time}",
        				"date": {
        					"dmy": {
        						"s": "d/MM/yy",
        						"m": "d/MM/yyyy",
        						"l": "d MMM, yyyy",
        						"f": "d MMMM, yyyy"
        					}
        				}
        			}
    			}
    		}
		},
		"Fooo": {
			data: {
				"locale": "en-Fooo",
				"gregorian": {
					"order": "{date} 'at' {time}",
					"date": {
						"dmy": {
							"s": "dd/MM/yy ",
							"m": "dd/MM/yy ",
							"l": "dd MMM, yyyy",
							"f": "dd MMMM, yyyy"
						}
					}
				}
			},
    		"US": {
    			data: {
    				"locale": "en-Fooo-US",
        			"gregorian": {
    					"order": "{time} {date}",
    					"date": {
    						"dmy": {
    							"s": "M.dd.yy",
    							"m": "M.dd.yyyy",
    							"l": "MMM d, yyyy",
    							"f": "MMMM d, yyyy"
    						},
    						"dm": "dd MMM"
    					}
    				}
    			}
    		},
    		"GB": {
    			data: {
    				"locale": "en-Fooo-GB",
        			"gregorian": {
        				"order": "{date} {time}",
        				"date": {
        					"dmy": {
        						"s": "d.MM.yy",
        						"m": "dd.MM.yyyy",
        						"l": "d MMM yyyy",
        						"f": "d MMMM yyyy"
        					},
    						"dm": "dd MMM"
        				}
        			}
    			}
    		},
    		"CA" : {
    			data: {
    				"locale": "en-Fooo-CA",
        			"gregorian": {
        				"order": "{date} {time}",
        				"date": {
        					"dmy": {
        						"s": "d.MM.yy",
        						"m": "d.MM.yyyy",
        						"l": "d MMM yyyy",
        						"f": "d MMMM yyyy"
        					},
    						"dm": "dd MMM"
        				}
        			}
    			}
    		},
    		"AU" : {
    			data: {
    				"locale": "en-Fooo-AU",
        			"gregorian": {
        				"order": "{date} {time}",
        				"date": {
        					"dmy": {
        						"s": "d.MM.yy",
        						"m": "d.MM.yyyy",
        						"l": "d MMM, yyyy",
        						"f": "d MMMM, yyyy"
        					},
    						"dm": "dd MMM"
        				}
        			}
    			}
    		}
		}
	};
    
	aux.promoteFormats(group);
	
	assertEquals("en-Fooo-CA", group.data.locale);
}
