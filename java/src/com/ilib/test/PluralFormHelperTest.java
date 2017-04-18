package com.ilib.test;

import java.io.File;
import java.io.FileInputStream;
import java.util.HashMap;
import java.util.Map;

import com.ilib.PluralFormHelper;

import junit.framework.TestCase;

public class PluralFormHelperTest extends TestCase {

	public void testArabishPluralsNotEmpty()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "ar" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertFalse(plurals.isEmpty());
		} catch (Exception e) {
			fail();
		}
	}

	public void testArabishGetPluralZero()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "ar" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("zero", PluralFormHelper.getPluralKey(0, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testArabishGetPluralKey1()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "ar" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("one", PluralFormHelper.getPluralKey(1, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testArabishGetPluralKey2()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "ar" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("two", PluralFormHelper.getPluralKey(2, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testArabishGetPluralKeyFew1()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "ar" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("few", PluralFormHelper.getPluralKey(1003, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testArabishGetPluralKeyFew2()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "ar" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("few", PluralFormHelper.getPluralKey(7809, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testArabishGetPluralKeyMany()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "ar" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("many", PluralFormHelper.getPluralKey(1072, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testArabishGetPluralOther()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "ar" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("other", PluralFormHelper.getPluralKey(9702, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testBelarussianGetPluralOne()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "be" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("one", PluralFormHelper.getPluralKey(3001, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testBelarussianGetPluralEleven()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "be" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("many", PluralFormHelper.getPluralKey(311, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testBelarussianGetPluralFew()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "be" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("few", PluralFormHelper.getPluralKey(502, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testBelarussianGetPluralMany1()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "be" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("many", PluralFormHelper.getPluralKey(514, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testBelarussianGetPluralMany2()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "be" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("many", PluralFormHelper.getPluralKey(978000, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testFrenchGetPluralZero()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "fr" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("one", PluralFormHelper.getPluralKey(0, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testFrenchGetPluralOne()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "fr" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("one", PluralFormHelper.getPluralKey(1, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testFrenchGetPluralTwo()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "fr" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("other", PluralFormHelper.getPluralKey(2, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testFrenchGetPluralMany()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "fr" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("other", PluralFormHelper.getPluralKey(8124, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testGaelicGetPluralOne()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "ga" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("one", PluralFormHelper.getPluralKey(1, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testGaelicGetPlural2()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "ga" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("two", PluralFormHelper.getPluralKey(2, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testGaelicGetPluralFew()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "ga" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("few", PluralFormHelper.getPluralKey(4, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testGaelicGetPluralMany()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "ga" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("many", PluralFormHelper.getPluralKey(9, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testGaelicGetPluralOther()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "ga" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("other", PluralFormHelper.getPluralKey(179, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testHebrewGetPluralOne()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "he" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("one", PluralFormHelper.getPluralKey(1, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testHebrewGetPluralMany()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "he" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("many", PluralFormHelper.getPluralKey(4000, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testHebrewGetPluralOther()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "he" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("other", PluralFormHelper.getPluralKey(8001, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testMalteseGetPluralOne()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "mt" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("one", PluralFormHelper.getPluralKey(1, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testMalteseGetPluralFew()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "mt" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("few", PluralFormHelper.getPluralKey(11708, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testMalteseGetPluralMany()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "mt" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("many", PluralFormHelper.getPluralKey(416, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testMalteseGetPluralUndefined()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "mt" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("other", PluralFormHelper.getPluralKey(8000, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testPolishGetPluralOne()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "pl" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("one", PluralFormHelper.getPluralKey(1, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testPolishGetPluralFew()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "pl" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("few", PluralFormHelper.getPluralKey(1742, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testPolishGetPluralMany()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "pl" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("many", PluralFormHelper.getPluralKey(8925, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testRussianGetPluralOne()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "ru" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("one", PluralFormHelper.getPluralKey(812371, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testRussianGetPluralFew()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "ru" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("few", PluralFormHelper.getPluralKey(932, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testRussianGetPluralTwelve()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "ru" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("many", PluralFormHelper.getPluralKey(8925, plurals));
		} catch (Exception e) {
			fail();
		}
	}

	public void testRussianGetPluralMany()
	{
		try {
			FileInputStream pluralsStream = new FileInputStream(PluralFormHelper.root + File.separator + "ru" + File.separator + PluralFormHelper.pluralsJSON);

			Map<String, String> plurals = new HashMap<>();
			plurals = PluralFormHelper.getPluralForms(pluralsStream);

			assertEquals("many", PluralFormHelper.getPluralKey(12000, plurals));
		} catch (Exception e) {
			fail();
		}
	}
}
