package com.ilib.test;

import com.ilib.PluralFormHelper;

import junit.framework.TestCase;

public class PluralFormHelperTest extends TestCase {

	public void testArabishPluralsNotEmpty()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("ar-SA");

			assertFalse(pfh.getForms().isEmpty());
		} catch (Exception e) {
			fail();
		}
	}

	public void testArabishGetPluralZero()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("ar-SA");
			
			assertEquals("zero", pfh.getPluralKey(0));
		} catch (Exception e) {
			fail();
		}
	}

	public void testArabishGetPluralKey1()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("ar-SA");
			
			assertEquals("one", pfh.getPluralKey(1));
		} catch (Exception e) {
			fail();
		}
	}

	public void testArabishGetPluralKey2()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("ar-SA");
			
			assertEquals("two", pfh.getPluralKey(2));
		} catch (Exception e) {
			fail();
		}
	}

	public void testArabishGetPluralKeyFew1()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("ar-SA");
			assertEquals("few", pfh.getPluralKey(1003));
		} catch (Exception e) {
			fail();
		}
	}

	public void testArabishGetPluralKeyFew2()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("ar-SA");
			
			assertEquals("few", pfh.getPluralKey(7809));
		} catch (Exception e) {
			fail();
		}
	}

	public void testArabishGetPluralKeyMany()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("ar-SA");
			
			assertEquals("many", pfh.getPluralKey(1072));
		} catch (Exception e) {
			fail();
		}
	}

	public void testArabishGetPluralOther()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("ar-SA");
			
			assertEquals("other", pfh.getPluralKey(9702));
		} catch (Exception e) {
			fail();
		}
	}

	public void testBelarussianGetPluralOne()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("be-BL");
			
			assertEquals("one", pfh.getPluralKey(3001));
		} catch (Exception e) {
			fail();
		}
	}

	public void testBelarussianGetPluralEleven()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("be-BL");
			
			assertEquals("many", pfh.getPluralKey(311));
		} catch (Exception e) {
			fail();
		}
	}

	public void testBelarussianGetPluralFew()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("be-BL");

			assertEquals("few", pfh.getPluralKey(502));
		} catch (Exception e) {
			fail();
		}
	}

	public void testBelarussianGetPluralMany1()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("be-BL");

			assertEquals("many", pfh.getPluralKey(514));
		} catch (Exception e) {
			fail();
		}
	}

	public void testBelarussianGetPluralMany2()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("be-BL");

			assertEquals("many", pfh.getPluralKey(978000));
		} catch (Exception e) {
			fail();
		}
	}

	public void testFrenchGetPluralZero()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("fr-FR");

			assertEquals("one", pfh.getPluralKey(0));
		} catch (Exception e) {
			fail();
		}
	}

	public void testFrenchGetPluralOne()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("fr-FR");

			assertEquals("one", pfh.getPluralKey(1));
		} catch (Exception e) {
			fail();
		}
	}

	public void testFrenchGetPluralTwo()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("fr-FR");

			assertEquals("other", pfh.getPluralKey(2));
		} catch (Exception e) {
			fail();
		}
	}

	public void testFrenchGetPluralMany()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("fr-FR");

			assertEquals("other", pfh.getPluralKey(8124));
		} catch (Exception e) {
			fail();
		}
	}

	public void testGaelicGetPluralOne()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("ga-ES");

			assertEquals("one", pfh.getPluralKey(1));
		} catch (Exception e) {
			fail();
		}
	}

	public void testGaelicGetPlural2()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("ga-ES");

			assertEquals("two", pfh.getPluralKey(2));
		} catch (Exception e) {
			fail();
		}
	}

	public void testGaelicGetPluralFew()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("ga-ES");

			assertEquals("few", pfh.getPluralKey(4));
		} catch (Exception e) {
			fail();
		}
	}

	public void testGaelicGetPluralMany()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("ga-IR");

			assertEquals("many", pfh.getPluralKey(9));
		} catch (Exception e) {
			fail();
		}
	}

	public void testGaelicGetPluralOther()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("ga-IR");

			assertEquals("other", pfh.getPluralKey(179));
		} catch (Exception e) {
			fail();
		}
	}

	public void testHebrewGetPluralOne()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("he-IL");

			assertEquals("one", pfh.getPluralKey(1));
		} catch (Exception e) {
			fail();
		}
	}

	public void testHebrewGetPluralMany()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("he-IL");

			assertEquals("many", pfh.getPluralKey(4000));
		} catch (Exception e) {
			fail();
		}
	}

	public void testHebrewGetPluralOther()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("he-IL");

			assertEquals("other", pfh.getPluralKey(8001));
		} catch (Exception e) {
			fail();
		}
	}

	public void testMalteseGetPluralOne()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("mt-MT");

			assertEquals("one", pfh.getPluralKey(1));
		} catch (Exception e) {
			fail();
		}
	}

	public void testMalteseGetPluralFew()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("mt-MT");

			assertEquals("few", pfh.getPluralKey(11708));
		} catch (Exception e) {
			fail();
		}
	}

	public void testMalteseGetPluralMany()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("mt-MT");

			assertEquals("many", pfh.getPluralKey(416));
		} catch (Exception e) {
			fail();
		}
	}

	public void testMalteseGetPluralUndefined()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("mt-MT");

			assertEquals("other", pfh.getPluralKey(8000));
		} catch (Exception e) {
			fail();
		}
	}

	public void testPolishGetPluralOne()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("pl-PL");

			assertEquals("one", pfh.getPluralKey(1));
		} catch (Exception e) {
			fail();
		}
	}

	public void testPolishGetPluralFew()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("pl-PL");

			assertEquals("few", pfh.getPluralKey(1742));
		} catch (Exception e) {
			fail();
		}
	}

	public void testPolishGetPluralMany()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("pl-PL");

			assertEquals("many", pfh.getPluralKey(8925));
		} catch (Exception e) {
			fail();
		}
	}

	public void testRussianGetPluralOne()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("ru-RU");

			assertEquals("one", pfh.getPluralKey(812371));
		} catch (Exception e) {
			fail();
		}
	}

	public void testRussianGetPluralFew()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("ru-RU");

			assertEquals("few", pfh.getPluralKey(932));
		} catch (Exception e) {
			fail();
		}
	}

	public void testRussianGetPluralTwelve()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("ru-RU");

			assertEquals("many", pfh.getPluralKey(8925));
		} catch (Exception e) {
			fail();
		}
	}

	public void testRussianGetPluralMany()
	{
		try {
			PluralFormHelper pfh = new PluralFormHelper("ru-RU");

			assertEquals("many", pfh.getPluralKey(12000));
		} catch (Exception e) {
			fail();
		}
	}
}
