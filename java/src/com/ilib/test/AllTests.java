/**
 * 
 * Copyright © 2016, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,R
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.ilib.test;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

/**
 * @author edwin
 *
 */
public class AllTests extends TestCase {
	@SuppressWarnings("rawtypes")
	public static Test suite() {
		System.out.println("runing tests");
		Class[] testClasses = { 
			//PluralFormHelperTest.class,
			IlibLocaleTest.class, 
			IStringTest.class,
			ResBundleTest.class
		};
		return new TestSuite(testClasses);
	}
}
