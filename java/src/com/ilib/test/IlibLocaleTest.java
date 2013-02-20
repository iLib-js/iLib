/**
 *
 */
package com.ilib.test;

import junit.framework.TestCase;

import com.ilib.IlibLocale;

/**
 * @author edwin
 *
 */
public class IlibLocaleTest extends TestCase
{
	public void testConstructorSpec()
	{
		IlibLocale loc = new IlibLocale("en-US");
		assertNotNull(loc);
	}

	public void testConstructorParts()
	{
		IlibLocale loc = new IlibLocale("en", "US", "Latn", "govt");
		assertNotNull(loc);
	}

	public void testGetLanguage()
	{
		IlibLocale loc = new IlibLocale("en-US");
		assertNotNull(loc);

		assertEquals("en", loc.getLanguage());
	}

	public void testGetLanguageParts()
	{
		IlibLocale loc = new IlibLocale("en", "US", "Latn", "govt");
		assertNotNull(loc);

		assertEquals("en", loc.getLanguage());
	}

	public void testGetRegion()
	{
		IlibLocale loc = new IlibLocale("en-US");
		assertNotNull(loc);

		assertEquals("US", loc.getRegion());
	}

	public void testGetRegionParts()
	{
		IlibLocale loc = new IlibLocale("en", "US", "Latn", "govt");
		assertNotNull(loc);

		assertEquals("US", loc.getRegion());
	}

	public void testGetScript()
	{
		IlibLocale loc = new IlibLocale("en-US-Latn");
		assertNotNull(loc);

		assertEquals("Latn", loc.getScript());
	}

	public void testGetScriptParts()
	{
		IlibLocale loc = new IlibLocale("en", "US", "Latn", "govt");
		assertNotNull(loc);

		assertEquals("Latn", loc.getScript());
	}

	public void testGetVariant()
	{
		IlibLocale loc = new IlibLocale("en-US-govt");
		assertNotNull(loc);

		assertEquals("govt", loc.getVariant());
	}

	public void testGetVariantParts()
	{
		IlibLocale loc = new IlibLocale("en", "US", "Latn", "govt");
		assertNotNull(loc);

		assertEquals("govt", loc.getVariant());
	}

	public void testGetOutOfOrder()
	{
		IlibLocale loc = new IlibLocale("US-govt-en-Latn");
		assertNotNull(loc);

		assertEquals("en", loc.getLanguage());
		assertEquals("US", loc.getRegion());
		assertEquals("Latn", loc.getScript());
		assertEquals("govt", loc.getVariant());
	}

	public void testGetLanguageSpecEmpty()
	{
		IlibLocale loc = new IlibLocale("");
		assertNotNull(loc);

		assertEquals("", loc.getLanguage());
	}

	public void testGetRegionSpecEmpty()
	{
		IlibLocale loc = new IlibLocale("");
		assertNotNull(loc);

		assertEquals("", loc.getRegion());
	}

	public void testGetVariantSpecEmpty()
	{
		IlibLocale loc = new IlibLocale("");
		assertNotNull(loc);

		assertEquals("", loc.getVariant());
	}

	public void testGetLanguageSpecMissing()
	{
		IlibLocale loc = new IlibLocale("-US-govt");
		assertNotNull(loc);

		assertEquals("", loc.getLanguage());
	}

	public void testGetRegionSpecMissing()
	{
		IlibLocale loc = new IlibLocale("en--govt");
		assertNotNull(loc);

		assertEquals("", loc.getRegion());
	}

	public void testGetRegionSpecOnlyLang()
	{
		IlibLocale loc = new IlibLocale("en");
		assertNotNull(loc);

		assertEquals("", loc.getRegion());
	}

	public void testGetVariantSpecOnlyLangAndReg()
	{
		IlibLocale loc = new IlibLocale("en-US");
		assertNotNull(loc);

		assertEquals("", loc.getVariant());
	}

	public void testGetVariantSpecMissing()
	{
		IlibLocale loc = new IlibLocale("en-US-");
		assertNotNull(loc);

		assertEquals("", loc.getVariant());
	}

	public void testGetLanguageSpecNull()
	{
		IlibLocale loc = new IlibLocale(null);
		assertNotNull(loc);

		assertEquals("", loc.getLanguage());
	}

	public void testGetRegionSpecNull()
	{
		IlibLocale loc = new IlibLocale(null);
		assertNotNull(loc);

		assertEquals("", loc.getRegion());
	}

	public void testGetVariantSpecNull()
	{
		IlibLocale loc = new IlibLocale(null);
		assertNotNull(loc);

		assertEquals("", loc.getVariant());
	}

	public void testGetLanguagePartsNull()
	{
		IlibLocale loc = new IlibLocale(null, "US", "Latn", "govt");
		assertNotNull(loc);

		assertEquals("", loc.getLanguage());
	}

	public void testGetRegionPartsNull()
	{
		IlibLocale loc = new IlibLocale("en", null, "Latn", "govt");
		assertNotNull(loc);

		assertEquals("", loc.getRegion());
	}

	public void testGetScriptPartsNull()
	{
		IlibLocale loc = new IlibLocale("en", "US", null, "govt");
		assertNotNull(loc);

		assertEquals("", loc.getScript());
	}

	public void testGetVariantPartsNull()
	{
		IlibLocale loc = new IlibLocale("en", "US", "Latn", null);
		assertNotNull(loc);

		assertEquals("", loc.getVariant());
	}

	public void testGetLanguageOldISOCodes1()
	{
		IlibLocale loc = new IlibLocale("he-IL");
		assertNotNull(loc);

		// JDK gives you back old obsolete code for this language, so make sure
		// it returns the same thing you gave it
		assertEquals("he", loc.getLanguage());
	}
	public void testGetLanguageOldISOCodes2()
	{
		IlibLocale loc = new IlibLocale("yi");
		assertNotNull(loc);

		// JDK gives you back old obsolete code for this language, so make sure
		// it returns the same thing you gave it
		assertEquals("yi", loc.getLanguage());
	}
	public void testGetLanguageOldISOCodes3()
	{
		IlibLocale loc = new IlibLocale("id-ID");
		assertNotNull(loc);

		// JDK gives you back old obsolete code for this language, so make sure
		// it returns the same thing you gave it
		assertEquals("id", loc.getLanguage());
	}

	public void testIsPseudoTrue()
	{
		IlibLocale loc = new IlibLocale("xx-XX");
		assertNotNull(loc);

		assertTrue(loc.isPseudo());
	}

	public void testIsPseudoFalse()
	{
		IlibLocale loc = new IlibLocale("de-DE");
		assertNotNull(loc);

		assertFalse(loc.isPseudo());
	}

	public void testGetSpec()
	{
		IlibLocale loc = new IlibLocale("en", "US", "Latn", "govt");
		assertNotNull(loc);

		assertEquals("en-US-Latn-govt", loc.getSpec());
	}

	public void testGetSpecPartsMissing()
	{
		IlibLocale loc = new IlibLocale("en", null, "Latn", "govt");
		assertNotNull(loc);

		assertEquals("en-Latn-govt", loc.getSpec());
	}

	public void testGetSpecNoVariant()
	{
		IlibLocale loc = new IlibLocale("en", "US", "Latn", null);
		assertNotNull(loc);

		assertEquals("en-US-Latn", loc.getSpec());
	}

	public void testGetSpecRearrange()
	{
		IlibLocale loc = new IlibLocale("US-en-GOVT-Latn");
		assertNotNull(loc);

		assertEquals("en-US-Latn-GOVT", loc.getSpec());
	}

	public void testEquals()
	{
		IlibLocale loc1 = new IlibLocale("en-US-Latn-govt");
		IlibLocale loc2 = new IlibLocale("en", "US", "Latn", "govt");
		assertNotNull(loc1);
		assertNotNull(loc2);

		assertTrue(loc1.equals(loc2));
	}

	public void testEqualsSymmetric()
	{
		IlibLocale loc1 = new IlibLocale("en-US-Latn-govt");
		IlibLocale loc2 = new IlibLocale("en", "US", "Latn", "govt");
		assertNotNull(loc1);
		assertNotNull(loc2);

		assertTrue(loc2.equals(loc1));
	}

	public void testNotEquals()
	{
		IlibLocale loc1 = new IlibLocale("de-DE");
		IlibLocale loc2 = new IlibLocale("en", "US", "Latn", "govt");
		assertNotNull(loc1);
		assertNotNull(loc2);

		assertFalse(loc1.equals(loc2));
	}

	public void testNotEqualsClose()
	{
		IlibLocale loc1 = new IlibLocale("de-DE-govt");
		IlibLocale loc2 = new IlibLocale("de", "DE", "Latn", "govt");
		assertNotNull(loc1);
		assertNotNull(loc2);

		assertFalse(loc1.equals(loc2));
	}

	public void testEqualsNull()
	{
		IlibLocale loc1 = new IlibLocale("en-US-govt");
		assertNotNull(loc1);

		assertFalse(loc1.equals((IlibLocale)null));
	}

	public void testEqualsMissingParts()
	{
		IlibLocale loc1 = new IlibLocale("en-US-govt");
		IlibLocale loc2 = new IlibLocale("en", "US", null, null);
		assertNotNull(loc1);
		assertNotNull(loc2);

		assertFalse(loc1.equals(loc2));
	}

	public void testEqualsBothMissingParts()
	{
		IlibLocale loc1 = new IlibLocale("en-US");
		IlibLocale loc2 = new IlibLocale("en", "US", null, null);
		assertNotNull(loc1);
		assertNotNull(loc2);

		assertTrue(loc1.equals(loc2));
	}

	public void testIsCompatibleWithSelf()
	{
		IlibLocale loc1 = new IlibLocale("en-US");
		assertNotNull(loc1);

		assertTrue(loc1.isCompatibleWith(loc1));
	}

	public void testIsCompatibleWithEqual()
	{
		IlibLocale loc1 = new IlibLocale("en-US");
		IlibLocale loc2 = new IlibLocale("en-US");
		assertNotNull(loc1);
		assertNotNull(loc2);

		assertTrue(loc1.isCompatibleWith(loc2));
	}

	public void testIsCompatibleWithParentWithRegion()
	{
		IlibLocale loc1 = new IlibLocale("en-US-govt");
		IlibLocale loc2 = new IlibLocale("en-US");
		assertNotNull(loc1);
		assertNotNull(loc2);

		assertTrue(loc1.isCompatibleWith(loc2));
	}

	public void testIsCompatibleWithParentWithLanguage()
	{
		IlibLocale loc1 = new IlibLocale("en-US");
		IlibLocale loc2 = new IlibLocale("en");
		assertNotNull(loc1);
		assertNotNull(loc2);

		assertTrue(loc1.isCompatibleWith(loc2));
	}

	public void testIsCompatibleWithParentWithRoot()
	{
		IlibLocale loc1 = new IlibLocale("en");
		IlibLocale loc2 = new IlibLocale("");
		assertNotNull(loc1);
		assertNotNull(loc2);

		assertTrue(loc1.isCompatibleWith(loc2));
	}

	public void testIsCompatibleWithGrandFather()
	{
		IlibLocale loc1 = new IlibLocale("en-US-govt");
		IlibLocale loc2 = new IlibLocale("en");
		assertNotNull(loc1);
		assertNotNull(loc2);

		assertTrue(loc1.isCompatibleWith(loc2));
	}

	public void testIsCompatibleWithGreatGrandFather2()
	{
		IlibLocale loc1 = new IlibLocale("en-US-Latn-govt");
		IlibLocale loc2 = new IlibLocale("en");
		assertNotNull(loc1);
		assertNotNull(loc2);

		assertTrue(loc1.isCompatibleWith(loc2));
	}

	public void testIsCompatibleWithGreatGrandFather()
	{
		IlibLocale loc1 = new IlibLocale("en-US-govt");
		IlibLocale loc2 = new IlibLocale("");
		assertNotNull(loc1);
		assertNotNull(loc2);

		assertTrue(loc1.isCompatibleWith(loc2));
	}

	public void testIsCompatibleWithGrandFather3()
	{
		IlibLocale loc1 = new IlibLocale("en-US");
		IlibLocale loc2 = new IlibLocale("");
		assertNotNull(loc1);
		assertNotNull(loc2);

		assertTrue(loc1.isCompatibleWith(loc2));
	}

	public void testIsCompatibleWithCousinVariant()
	{
		IlibLocale loc1 = new IlibLocale("en-US-govt");
		IlibLocale loc2 = new IlibLocale("en-US-SCIENTIFIC");
		assertNotNull(loc1);
		assertNotNull(loc2);

		assertTrue(loc1.isCompatibleWith(loc2));
	}

	/*
	public void testIsCompatibleWithCousinRegion()
	{
		IlibLocale loc1 = new IlibLocale("en-US");
		IlibLocale loc2 = new IlibLocale("en-CA");
		assertNotNull(loc1);
		assertNotNull(loc2);

		assertFalse(loc1.isCompatibleWith(loc2));
	}

	public void testIsCompatibleWithCousinLang()
	{
		IlibLocale loc1 = new IlibLocale("pt");
		IlibLocale loc2 = new IlibLocale("es");
		assertNotNull(loc1);
		assertNotNull(loc2);

		assertFalse(loc1.isCompatibleWith(loc2));
	}
	*/
}