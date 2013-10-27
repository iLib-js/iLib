package com.ilib.test;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import junit.framework.TestCase;

import com.ilib.PluralFormHelper;

public class PluralFormHelperTest extends TestCase {

	public void testArabishPluralsNotEmpty()
	{
		File arabPlurals = new File(PluralFormHelper.root, "ar" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertFalse(plurals.isEmpty());
	}
	
	public void testArabishGetPluralZero()
	{
		File arabPlurals = new File(PluralFormHelper.root, "ar" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("zero", PluralFormHelper.getPluralKey(0, plurals));
	}
	
	public void testArabishGetPluralKey1()
	{
		File arabPlurals = new File(PluralFormHelper.root, "ar" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("one", PluralFormHelper.getPluralKey(1, plurals));
	}
	
	public void testArabishGetPluralKey2()
	{
		File arabPlurals = new File(PluralFormHelper.root, "ar" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("two", PluralFormHelper.getPluralKey(2, plurals));
	}
	
	public void testArabishGetPluralKeyFew1()
	{
		File arabPlurals = new File(PluralFormHelper.root, "ar" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("few", PluralFormHelper.getPluralKey(1003, plurals));
	}
	
	public void testArabishGetPluralKeyFew2()
	{
		File arabPlurals = new File(PluralFormHelper.root, "ar" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("few", PluralFormHelper.getPluralKey(7809, plurals));
	}
	
	public void testArabishGetPluralKeyMany()
	{
		File arabPlurals = new File(PluralFormHelper.root, "ar" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("many", PluralFormHelper.getPluralKey(1072, plurals));
	}

	public void testArabishGetPluralOther()
	{
		File arabPlurals = new File(PluralFormHelper.root, "ar" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("other", PluralFormHelper.getPluralKey(9702, plurals));
	}

	public void testBelarussianGetPluralOne()
	{
		File arabPlurals = new File(PluralFormHelper.root, "be" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("one", PluralFormHelper.getPluralKey(3001, plurals));
	}
	
	public void testBelarussianGetPluralEleven()
	{
		File arabPlurals = new File(PluralFormHelper.root, "be" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("many", PluralFormHelper.getPluralKey(311, plurals));
	}
	
	public void testBelarussianGetPluralFew()
	{
		File arabPlurals = new File(PluralFormHelper.root, "be" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("few", PluralFormHelper.getPluralKey(502, plurals));
	}
	
	public void testBelarussianGetPluralMany1()
	{
		File arabPlurals = new File(PluralFormHelper.root, "be" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("many", PluralFormHelper.getPluralKey(514, plurals));
	}

	public void testBelarussianGetPluralMany2()
	{
		File arabPlurals = new File(PluralFormHelper.root, "be" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("many", PluralFormHelper.getPluralKey(978000, plurals));
	}
	
	public void testFrenchGetPluralZero()
	{
		File arabPlurals = new File(PluralFormHelper.root, "fr" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("one", PluralFormHelper.getPluralKey(0, plurals));
	}

	public void testFrenchGetPluralOne()
	{
		File arabPlurals = new File(PluralFormHelper.root, "fr" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("one", PluralFormHelper.getPluralKey(1, plurals));
	}

	public void testFrenchGetPluralTwo()
	{
		File arabPlurals = new File(PluralFormHelper.root, "fr" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("other", PluralFormHelper.getPluralKey(2, plurals));
	}
	
	public void testFrenchGetPluralMany()
	{
		File arabPlurals = new File(PluralFormHelper.root, "fr" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("other", PluralFormHelper.getPluralKey(8124, plurals));
	}

	public void testGaelicGetPluralOne()
	{
		File arabPlurals = new File(PluralFormHelper.root, "ga" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("one", PluralFormHelper.getPluralKey(1, plurals));
	}

	public void testGaelicGetPlural2()
	{
		File arabPlurals = new File(PluralFormHelper.root, "ga" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("two", PluralFormHelper.getPluralKey(2, plurals));
	}

	public void testGaelicGetPluralFew()
	{
		File arabPlurals = new File(PluralFormHelper.root, "ga" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("few", PluralFormHelper.getPluralKey(4, plurals));
	}

	public void testGaelicGetPluralMany()
	{
		File arabPlurals = new File(PluralFormHelper.root, "ga" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("many", PluralFormHelper.getPluralKey(9, plurals));
	}
	
	public void testGaelicGetPluralOther()
	{
		File arabPlurals = new File(PluralFormHelper.root, "ga" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("other", PluralFormHelper.getPluralKey(179, plurals));
	}

	public void testHebrewGetPluralOne()
	{
		File arabPlurals = new File(PluralFormHelper.root, "he" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("one", PluralFormHelper.getPluralKey(1, plurals));
	}

	public void testHebrewGetPluralMany()
	{
		File arabPlurals = new File(PluralFormHelper.root, "he" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("many", PluralFormHelper.getPluralKey(4000, plurals));
	}
	
	public void testHebrewGetPluralOther()
	{
		File arabPlurals = new File(PluralFormHelper.root, "he" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("other", PluralFormHelper.getPluralKey(8001, plurals));
	}
	
	public void testMalteseGetPluralOne()
	{
		File arabPlurals = new File(PluralFormHelper.root, "mt" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("one", PluralFormHelper.getPluralKey(1, plurals));
	}

	public void testMalteseGetPluralFew()
	{
		File arabPlurals = new File(PluralFormHelper.root, "mt" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("few", PluralFormHelper.getPluralKey(11708, plurals));
	}

	public void testMalteseGetPluralMany()
	{
		File arabPlurals = new File(PluralFormHelper.root, "mt" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("many", PluralFormHelper.getPluralKey(416, plurals));
	}
	
	public void testMalteseGetPluralUndefined()
	{
		File arabPlurals = new File(PluralFormHelper.root, "mt" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("other", PluralFormHelper.getPluralKey(8000, plurals));
	}

	public void testPolishGetPluralOne()
	{
		File arabPlurals = new File(PluralFormHelper.root, "pl" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("one", PluralFormHelper.getPluralKey(1, plurals));
	}

	public void testPolishGetPluralFew()
	{
		File arabPlurals = new File(PluralFormHelper.root, "pl" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("few", PluralFormHelper.getPluralKey(1742, plurals));
	}

	public void testPolishGetPluralMany()
	{
		File arabPlurals = new File(PluralFormHelper.root, "pl" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("many", PluralFormHelper.getPluralKey(8925, plurals));
	}

	public void testRussianGetPluralOne()
	{
		File arabPlurals = new File(PluralFormHelper.root, "ru" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("one", PluralFormHelper.getPluralKey(812371, plurals));
	}
	
	public void testRussianGetPluralFew()
	{
		File arabPlurals = new File(PluralFormHelper.root, "ru" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("few", PluralFormHelper.getPluralKey(932, plurals));
	}

	public void testRussianGetPluralTwelve()
	{
		File arabPlurals = new File(PluralFormHelper.root, "ru" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("many", PluralFormHelper.getPluralKey(8925, plurals));
	}
	
	public void testRussianGetPluralMany()
	{
		File arabPlurals = new File(PluralFormHelper.root, "ru" + File.separator + PluralFormHelper.pluralsJSON);

		Map<String, String> plurals = new HashMap<>();
		plurals = PluralFormHelper.getPluralForms(arabPlurals);

		assertEquals("many", PluralFormHelper.getPluralKey(12000, plurals));
	}
}
