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

import java.util.HashMap;
import java.util.Map;

import junit.framework.TestCase;

import com.ilib.IString;
import com.ilib.IlibLocale;
import com.ilib.ResBundle;
import com.ilib.ResBundle.MissingType;


/**
 * @author edwin
 *
 */
public class ResBundleTest extends TestCase
{
	public void testConstructorNotNull()
	{
		ResBundle rb = new ResBundle();
		assertNotNull(rb);
	}
	
	public void testConstructorResourcesNotNull()
	{
		ResBundle rb = new ResBundle("resources");
		assertNotNull(rb);
	}
	
	public void testNullLocale()
	{
		ResBundle rb = new ResBundle("resources", null);
		assertNotNull(rb);
		
		assertEquals("en-US", rb.getLocale().toString());
	}
	
	public void testEmptyLocale()
	{
		IlibLocale l = new IlibLocale("");
		ResBundle rb = new ResBundle("resources", l);
		assertNotNull(rb);
		
		assertEquals("en-US", rb.getLocale().toString());
	}

	public void testConstructorResourcesAndLocale()
	{
		IlibLocale l = new IlibLocale("fr-FR");
		ResBundle rb = new ResBundle("resources", l);
		assertNotNull(rb);
	}

	public void testConstructorResourcesLocaleType()
	{
		IlibLocale l = new IlibLocale("fr-CA");
		ResBundle rb = new ResBundle("resources", l, "html");
		assertNotNull(rb);
	}
	
	public void testContainsSourceTrue()
	{
		ResBundle resBundle = new ResBundle("resources", new IlibLocale("fr-FR"));
		assertNotNull(resBundle);
		
		IString result = resBundle.getString("Signing in...");
		assertEquals("Connexion en cours...", result.toString());
	}

	public void testContainsSourceFalse()
	{
		ResBundle resBundle = new ResBundle("resources", new IlibLocale("fr-FR"));
		assertNotNull(resBundle);
		
		IString result = resBundle.getString("Services Palm");
		assertEquals("Services Palm", result.toString());
		assertNotSame("Palm Services", result.toString());
	}

	public void testGetLocStringBaseLocale1()
	{
		ResBundle resBundle = new ResBundle("resources", new IlibLocale("es-ES"));
		assertNotNull(resBundle);
		
		IString result = resBundle.getString("Opt out failed. Try later");
		assertEquals("Falló la opción de no participar. Intentarlo más tarde.", result.toString());
	}

	public void testGetLocStringNonBaseLocale1()
	{
		ResBundle resBundle = new ResBundle("resources", new IlibLocale("es-MX"));
		assertNotNull(resBundle);
		
		IString result = resBundle.getString("Opt out failed. Try later");
		assertEquals("Falló la opción de no participar. Intenta más tarde", result.toString());
		assertNotSame("Falló la opción de no participar. Intentarlo más tarde.", result.toString());
	}
	
	public void testGetLocStringBaseLocale2()
	{
		ResBundle resBundle = new ResBundle("resources", new IlibLocale("es-ES"));
		assertNotNull(resBundle);
		
		IString result = resBundle.getString("Done");
		assertEquals("Aceptar", result.toString());
	}

	public void testGetLocStringNonBaseLocale2()
	{
		ResBundle resBundle = new ResBundle("resources", new IlibLocale("es-MX"));
		assertNotNull(resBundle);
		
		IString result = resBundle.getString("Done");
		assertEquals("Listo", result.toString());
		assertNotSame("Aceptar", result.toString());
	}
	
	public void testGetLocStringBaseLocale3()
	{
		ResBundle resBundle = new ResBundle("resources", new IlibLocale("zh-Hans-CN"));
		assertNotNull(resBundle);
		
		IString result = resBundle.getString("Keep Backup On");
		assertEquals("保持备份打开", result.toString());
	}

	public void testGetLocStringNonBaseLocale3()
	{
		ResBundle resBundle = new ResBundle("resources", new IlibLocale("zh-HK"));
		assertNotNull(resBundle);
		
		IString result = resBundle.getString("Keep Backup On");
		assertEquals("保持備份打開", result.toString());
		assertNotSame("保持备份打开", result.toString());
	}
	
	public void testGetLocStringWithExistedKey1()
	{
		ResBundle resBundle = new ResBundle("resources", new IlibLocale("es-ES"));
		assertNotNull(resBundle);
		
		IString result = resBundle.getString("A verification email was sent to {email}.");
		Map<String, String> values = new HashMap<>();
		values.put("email", "https://www.google.com.ua");
		assertEquals("Se envió un mensaje de verificación a https://www.google.com.ua.", result.format(values));
	}

	public void testGetLocStringWithExistedKey2()
	{
		ResBundle resBundle = new ResBundle("resources", new IlibLocale("es-MX"));
		assertNotNull(resBundle);
		
		IString result = resBundle.getString("A verification email was sent to {email}.");
		Map<String, String> values = new HashMap<>();
		values.put("email", "www.sourceforge.net");
		assertNotSame("Se envió un mensaje de verificación a www.sourceforge.net.", result.format(values));
		assertEquals("Se ha enviado un mensaje de verificación a www.sourceforge.net.", result.format(values));
	}

	public void testGetLocStringWithNonExistedKey1()
	{
		ResBundle resBundle = new ResBundle("resources", new IlibLocale("it-IT"));
		assertNotNull(resBundle);
		
		IString result = resBundle.getString("Email Sent", "emailsent");
		assertEquals("Email Sent", result.toString());
	}

	public void testGetLocStringWithNonExistedKey2()
	{
		ResBundle resBundle = new ResBundle("resources", new IlibLocale("it-IT"));
		assertNotNull(resBundle);
		
		IString result = resBundle.getString("You must use a valid email address format.", "usevalidemail");
		assertEquals("You must use a valid email address format.", result.toString());
		assertNotSame("usevalidemail", result.toString());
	}
	
	public void testGetLocaleWithResourcesGerman()
	{
		final IlibLocale locale = new IlibLocale("de-DE");
		ResBundle resBundle = new ResBundle("resources", locale);
		assertNotNull(resBundle);

		assertEquals(locale.toString(), resBundle.getLocale().toString());
	}

	public void testGetLocaleWithResourcesNewZeland()
	{
		final IlibLocale locale = new IlibLocale("nl-NL");
		ResBundle resBundle = new ResBundle("resources", locale);
		assertNotNull(resBundle);
		
		assertEquals(locale.toString(), resBundle.getLocale().toString());
	}
	
	public void testGetStringDefaultPseudo()
	{
		final IlibLocale locale = new IlibLocale("zxx");
		ResBundle resBundle = new ResBundle("resources", locale);
		assertNotNull(resBundle);

		assertEquals("Ïñvàľíð Ňëţŵõŕķ Ňàmë9876543210", resBundle.getString("Invalid Network Name").toString());
	}

	public void testGetStringCyrlPseudo()
	{
		final IlibLocale locale = new IlibLocale("zxx-Cyrl-RU");
		ResBundle resBundle = new ResBundle("resources", locale);
		assertNotNull(resBundle);
		
		assertEquals("Инвалид Нэтwорк Намэ9876543210", resBundle.getString("Invalid Network Name").toString());
	}

	public void testGetStringPseudo()
	{
		final IlibLocale locale = new IlibLocale("de-DE");
		ResBundle resBundle = new ResBundle("resources", locale);
		assertNotNull(resBundle);

		assertEquals("àçţüàľ šţàţë fõŕ Ŵífí: 6543210", resBundle.getStringPseudo("actual state for Wifi: ", null).toString());
	}

	public void testGetStringPseudoMissing()
	{
		final IlibLocale locale = new IlibLocale("de-DE");
		ResBundle resBundle = new ResBundle("resources", locale);
		resBundle.setMissingType(MissingType.PSEUDO);
		assertNotNull(resBundle);

		assertEquals("Nicht aktualisieren", resBundle.getString("Don't Update").toString());
		assertEquals("Ðõñ'ţ Úþðàţë àñ ëmàíľ6543210", resBundle.getString("Don't Update an email").toString());

	}

	public void testGetStringPseudoMissingLengthenFalse()
	{
		final IlibLocale locale = new IlibLocale("de-DE");
		ResBundle resBundle = new ResBundle("resources", locale);
		resBundle.setMissingType(MissingType.PSEUDO);
		resBundle.setLengthen(false);
		assertNotNull(resBundle);

		assertEquals("Ðõñ'ţ Úþðàţë àñ ëmàíľ", resBundle.getString("Don't Update an email").toString());
	}

	public void testGetStringEmptyMissing()
	{
		final IlibLocale locale = new IlibLocale("de-DE");
		ResBundle resBundle = new ResBundle("resources", locale);
		resBundle.setMissingType(MissingType.EMPTY);
		assertNotNull(resBundle);

		assertEquals("", resBundle.getString("Don't Update an email").toString());
	}
}
