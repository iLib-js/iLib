/**
 * 
 * Copyright 2013, JEDLSoft, All Rights Reserved.
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
 * 
 */
package com.ilib.test;

import junit.framework.TestCase;

import com.ilib.IlibLocale;
import com.ilib.ResBundle;


/**
 * @author edwin
 *
 */
public class ResBundleTest extends TestCase
{
	public void testConstructor1()
	{
		ResBundle rb = new ResBundle();
		assertNotNull(rb);
	}
	
	public void testConstructor2()
	{
		ResBundle rb = new ResBundle("resources");
		assertNotNull(rb);
	}

	public void testConstructor3()
	{
		IlibLocale l = new IlibLocale("fr-FR");
		ResBundle rb = new ResBundle("resources", l);
		assertNotNull(rb);
	}

	public void testConstructor4()
	{
		IlibLocale l = new IlibLocale("fr-FR");
		ResBundle rb = new ResBundle("resources", l, "html");
		assertNotNull(rb);
	}

}
