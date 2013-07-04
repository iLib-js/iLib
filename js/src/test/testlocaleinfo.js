/*
  *  testlocaleinfo.js  -  test  the  locale  info  object
  *  
  *  Copyright  ©  2012-2013,  JEDLSoft
  *
  *  Licensed  under  the  Apache  License,  Version  2.0  (the  "License");
  *  you  may  not  use  this  file  except  in  compliance  with  the  License.
  *  You  may  obtain  a  copy  of  the  License  at
  *
  *          http://www.apache.org/licenses/LICENSE-2.0
  *
  *  Unless  required  by  applicable  law  or  agreed  to  in  writing,  software
  *  distributed  under  the  License  is  distributed  on  an  "AS  IS"  BASIS,
  *  WITHOUT  WARRANTIES  OR  CONDITIONS  OF  ANY  KIND,  either  express  or  implied.
  *
  *  See  the  License  for  the  specific  language  governing  permissions  and
  *  limitations  under  the  License.
  */

function  testLocaleInfoConstructor()  {
        var  loc  =  new  ilib.LocaleInfo();
        
        assertNotNull(loc);
}

function  testLocaleInfoConstructorCurrentLocale()  {
        var  loc,  info  =  new  ilib.LocaleInfo();  //  gives  locale  of  the  host  JS  engine
        
        assertNotNull(info);

        loc  =  info.getLocale();
        
        assertEquals("en",  loc.getLanguage());
        assertEquals("US",  loc.getRegion());
        assertUndefined(loc.getVariant());
}

function  testLocaleInfoConstructorGivenLocale()  {
        var  loc,  info  =  new  ilib.LocaleInfo("de-DE");
        
        assertNotNull(info);

        loc  =  info.getLocale();
        
        assertEquals("de",  loc.getLanguage());
        assertEquals("DE",  loc.getRegion());
        assertUndefined(loc.getVariant());
}

function  testLocaleInfoGetClockUS()  {
        var  info  =  new  ilib.LocaleInfo("en-US");
        assertNotNull(info);

        assertEquals("12",  info.getClock());
}

function  testLocaleInfoGetClockCA()  {
        var  info  =  new  ilib.LocaleInfo("en-CA");
        assertNotNull(info);

        assertEquals("12",  info.getClock());
}

function  testLocaleInfoGetClockGB()  {
        var  info  =  new  ilib.LocaleInfo("en-GB");
        assertNotNull(info);

        assertEquals("24",  info.getClock());
}

function  testLocaleInfoGetClockDE()  {
        var  info  =  new  ilib.LocaleInfo("de-DE");
        assertNotNull(info);

        assertEquals("24",  info.getClock());
}

function  testLocaleInfoGetCalendarUS()  {
        var  info  =  new  ilib.LocaleInfo("en-US");
        assertNotNull(info);

        assertEquals("gregorian",  info.getCalendar());
}

function  testLocaleInfoGetCalendarDE()  {
        var  info  =  new  ilib.LocaleInfo("de-DE");        
        assertNotNull(info);

        assertEquals("gregorian",  info.getCalendar());
}

function  testLocaleInfoGetUnitsUS()  {
        var  info  =  new  ilib.LocaleInfo("en-US");
        assertNotNull(info);

        assertEquals("uscustomary",  info.getUnits());
}

function  testLocaleInfoGetUnitsCA()  {
        var  info  =  new  ilib.LocaleInfo("en-CA");
        assertNotNull(info);

        assertEquals("metric",  info.getUnits());
}

function  testLocaleInfoGetUnitsGB()  {
        var  info  =  new  ilib.LocaleInfo("en-GB");
        assertNotNull(info);

        assertEquals("imperial",  info.getUnits());
}

function  testLocaleInfoGetCalendarDE()  {
        var  info  =  new  ilib.LocaleInfo("de-DE");        
        assertNotNull(info);

        assertEquals("metric",  info.getUnits());
}

function  testLocaleInfoGetFirstDayOfWeekUS()  {
        var  info  =  new  ilib.LocaleInfo("en-US");        
        assertNotNull(info);

        assertEquals(0,  info.getFirstDayOfWeek());
}

function  testLocaleInfoGetFirstDayOfWeekDE()  {
        var  info  =  new  ilib.LocaleInfo("de-DE");        
        assertNotNull(info);

        assertEquals(1,  info.getFirstDayOfWeek());
}

function  testLocaleInfoGetFirstDayOfWeekFR()  {
        var  info  =  new  ilib.LocaleInfo("fr-FR");        
        assertNotNull(info);

        assertEquals(1,  info.getFirstDayOfWeek());
}

function  testLocaleInfoGetTimeZoneUS()  {
        var  info  =  new  ilib.LocaleInfo("en-US");        
        assertNotNull(info);

        assertEquals("America/Los_Angeles",  info.getTimeZone());
}

function  testLocaleInfoGetTimeZoneUS()  {
        var  info  =  new  ilib.LocaleInfo("de-DE");        
        assertNotNull(info);

        assertEquals("Europe/Berlin",  info.getTimeZone());
}

function  testLocaleInfoGetTimeZoneES()  {
        var  info  =  new  ilib.LocaleInfo("es-ES");        
        assertNotNull(info);

        assertEquals("Europe/Madrid",  info.getTimeZone());
}

function  testLocaleInfoGetTimeZoneDefault()  {
        var  info  =  new  ilib.LocaleInfo("zz-ZZ");        
        assertNotNull(info);

        assertEquals("Etc/UTC",  info.getTimeZone());
}

function  testLocaleInfoGetCurrency()  {
        var  info  =  new  ilib.LocaleInfo("en-US");        
        assertNotNull(info);

        assertEquals("USD",  info.getCurrency());
}

function  testLocaleInfoGetCurrencyDE()  {
        var  info  =  new  ilib.LocaleInfo("de-DE");        
        assertNotNull(info);

        assertEquals("EUR",  info.getCurrency());
}

function  testLocaleInfoGetCurrencyGB()  {
        var  info  =  new  ilib.LocaleInfo("en-GB");        
        assertNotNull(info);

        assertEquals("GBP",  info.getCurrency());
}

function  testLocaleInfoGetCurrencyUnknown()  {
        var  info  =  new  ilib.LocaleInfo("zxx-XX");        
        assertNotNull(info);

        assertEquals("USD",  info.getCurrency());
}

function  testLocaleInfoGetRoundingModeDefault()  {
        var  info  =  new  ilib.LocaleInfo();        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

function  testLocaleInfoGetRoundingModexx()  {
        var  info  =  new  ilib.LocaleInfo("zxx-XX");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

function  testLocaleInfoGetDecimalSeparator1()  {
        var  info  =  new  ilib.LocaleInfo();        
        assertNotNull(info);

        assertEquals(".",  info.getDecimalSeparator());
}

function  testLocaleInfoGetDecimalSeparator2()  {
        var  info  =  new  ilib.LocaleInfo("de-DE");        
        assertNotNull(info);

        assertEquals(",",  info.getDecimalSeparator());
}
/*************************************************Added  By  Birendra  23/05**********************************************************/



//test  cases  for  en-GB  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_GB()  {
        var  info  =  new  ilib.LocaleInfo("en-GB");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_GB()  {
        var  info  =  new  ilib.LocaleInfo("en-GB");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_GB()  {
        var  info  =  new  ilib.LocaleInfo("en-GB");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_GB()  {
        var  info  =  new  ilib.LocaleInfo("en-GB");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}



//test  cases  for  ko-KR  number  format
function  testLocaleInfoGetDecimalSeparatorfor_ko_KR()  {
        var  info  =  new  ilib.LocaleInfo("ko-KR");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ko_KR()  {
        var  info  =  new  ilib.LocaleInfo("ko-KR");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ko_KR()  {
        var  info  =  new  ilib.LocaleInfo("ko-KR");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ko_KR()  {
        var  info  =  new  ilib.LocaleInfo("ko-KR");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}



//test  cases  for  zh-CN-Hans  number  format
function  testLocaleInfoGetDecimalSeparatorfor_zh_CN_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-CN-Hans");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_zh_CN_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-CN-Hans");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_zh_CN_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-CN-Hans");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_zh_CN_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-CN-Hans");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}


//test  cases  for  zh-HK-Hans

function  testLocaleInfoGetDecimalSeparatorfor_zh_HK_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-HK-Hans");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_zh_HK_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-HK-Hans");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_zh_HK_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-HK-Hans");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_zh_HK_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-HK-Hans");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

//test  cases  fot  zh-TW-Hant
function  testLocaleInfoGetDecimalSeparatorfor_zh_TW_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-TW-Hant");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_zh_TW_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-TW-Hant");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_zh_TW_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-TW-Hant");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_zh_TW_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-TW-Hant");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

//test  cases  for  fr-FR  number  format
function  testLocaleInfoGetDecimalSeparatorfor_fr_FR()  {
        var  info  =  new  ilib.LocaleInfo("fr-FR");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_FR()  {
        var  info  =  new  ilib.LocaleInfo("fr-FR");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fr_FR()  {
        var  info  =  new  ilib.LocaleInfo("fr-FR");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_fr_FR()  {
        var  info  =  new  ilib.LocaleInfo("fr-FR");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

//test  cases  for  fr-CA  unmber  format
function  testLocaleInfoGetDecimalSeparatorfor_fr_CA()  {
        var  info  =  new  ilib.LocaleInfo("fr-CA");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_CA()  {
        var  info  =  new  ilib.LocaleInfo("fr-CA");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fr_CA()  {
        var  info  =  new  ilib.LocaleInfo("fr-CA");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_fr_CA()  {
        var  info  =  new  ilib.LocaleInfo("fr-CA");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}


//test  cases  for  pt_BR  numberformat
function  testLocaleInfoGetDecimalSeparatorfor_pt_BR()  {
        var  info  =  new  ilib.LocaleInfo("pt-BR");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_pt_BR()  {
        var  info  =  new  ilib.LocaleInfo("pt-BR");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_pt_BR()  {
        var  info  =  new  ilib.LocaleInfo("pt-BR");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_pt_BR()  {
        var  info  =  new  ilib.LocaleInfo("pt-BR");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}


//test  cases  for  pt_PT
function  testLocaleInfoGetDecimalSeparatorfor_pt_PT()  {
        var  info  =  new  ilib.LocaleInfo("pt-PT");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_pt_PT()  {
        var  info  =  new  ilib.LocaleInfo("pt-PT");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_pt_PT()  {
        var  info  =  new  ilib.LocaleInfo("pt-PT");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_pt_PT()  {
        var  info  =  new  ilib.LocaleInfo("pt-PT");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}


//test  cases  for  es_ES  number  format

function  testLocaleInfoGetDecimalSeparatorfor_es_ES()  {
        var  info  =  new  ilib.LocaleInfo("es-ES");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_es_ES()  {
        var  info  =  new  ilib.LocaleInfo("es-ES");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_es_ES()  {
        var  info  =  new  ilib.LocaleInfo("es-ES");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_es_ES()  {
        var  info  =  new  ilib.LocaleInfo("es-ES");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}


//test  case  for  es_Co
function  testLocaleInfoGetDecimalSeparatorfor_es_CO()  {
        var  info  =  new  ilib.LocaleInfo("es-CO");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_es_CO()  {
        var  info  =  new  ilib.LocaleInfo("es-CO");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_es_CO()  {
        var  info  =  new  ilib.LocaleInfo("es-CO");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_es_CO()  {
        var  info  =  new  ilib.LocaleInfo("es-CO");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}


//test  cases  for  ja-JP
function  testLocaleInfoGetDecimalSeparatorfor_ja_JP()  {
        var  info  =  new  ilib.LocaleInfo("ja-JP");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ja_JP()  {
        var  info  =  new  ilib.LocaleInfo("ja-JP");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ja_JP()  {
        var  info  =  new  ilib.LocaleInfo("ja-JP");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ja_JP()  {
        var  info  =  new  ilib.LocaleInfo("ja-JP");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}


//test  cases  for  de-DE
function  testLocaleInfoGetDecimalSeparatorfor_de_DE()  {
        var  info  =  new  ilib.LocaleInfo("de-DE");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_de_DE()  {
        var  info  =  new  ilib.LocaleInfo("de-DE");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_de_DE()  {
        var  info  =  new  ilib.LocaleInfo("de-DE");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_de_DE()  {
        var  info  =  new  ilib.LocaleInfo("de-DE");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

//test  cases  for  it-IT
function  testLocaleInfoGetDecimalSeparatorfor_it_IT()  {
        var  info  =  new  ilib.LocaleInfo("it-IT");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_it_IT()  {
        var  info  =  new  ilib.LocaleInfo("it-IT");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_it_IT()  {
        var  info  =  new  ilib.LocaleInfo("it-IT");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_it_IT()  {
        var  info  =  new  ilib.LocaleInfo("it-IT");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

//test  cases  for  sv-SE
function  testLocaleInfoGetDecimalSeparatorfor_sv_SE()  {
        var  info  =  new  ilib.LocaleInfo("sv-SE");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_sv_SE()  {
        var  info  =  new  ilib.LocaleInfo("sv-SE");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_sv_SE()  {
        var  info  =  new  ilib.LocaleInfo("sv-SE");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_sv_SE()  {
        var  info  =  new  ilib.LocaleInfo("sv-SE");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

//test  cases  for  fi-FI
function  testLocaleInfoGetDecimalSeparatorfor_fi_FI()  {
        var  info  =  new  ilib.LocaleInfo("fi-FI");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fi_FI()  {
        var  info  =  new  ilib.LocaleInfo("fi-FI");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fi_FI()  {
        var  info  =  new  ilib.LocaleInfo("fi-FI");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_fi_FI()  {
        var  info  =  new  ilib.LocaleInfo("fi-FI");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

//test  cases  for  cs_CZ  

function  testLocaleInfoGetDecimalSeparatorfor_cs_CZ()  {
        var  info  =  new  ilib.LocaleInfo("cs-CZ");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_cs_CZ()  {
        var  info  =  new  ilib.LocaleInfo("cs-CZ");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_cs_CZ()  {
        var  info  =  new  ilib.LocaleInfo("cs-CZ");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_cs_CZ()  {
        var  info  =  new  ilib.LocaleInfo("cs-CZ");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

//test  cases  for  el_GR


function  testLocaleInfoGetDecimalSeparatorfor_el_GR()  {
        var  info  =  new  ilib.LocaleInfo("el-GR");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_el_GR()  {
        var  info  =  new  ilib.LocaleInfo("el-GR");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_el_GR()  {
        var  info  =  new  ilib.LocaleInfo("el-GR");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_el_GR()  {
        var  info  =  new  ilib.LocaleInfo("el-GR");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

//test  cases  for  hu-HU

function  testLocaleInfoGetDecimalSeparatorfor_hu_HU()  {
        var  info  =  new  ilib.LocaleInfo("hu-HU");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_hu_HU()  {
        var  info  =  new  ilib.LocaleInfo("hu-HU");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_hu_HU()  {
        var  info  =  new  ilib.LocaleInfo("hu-HU");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_hu_HU()  {
        var  info  =  new  ilib.LocaleInfo("hu-HU");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

//test  cases  for  nl_NL


function  testLocaleInfoGetDecimalSeparatorfor_nl_NL()  {
        var  info  =  new  ilib.LocaleInfo("nl-NL");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_nl_NL()  {
        var  info  =  new  ilib.LocaleInfo("nl-NL");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_nl_NL()  {
        var  info  =  new  ilib.LocaleInfo("nl-NL");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_nl_NL()  {
        var  info  =  new  ilib.LocaleInfo("nl-NL");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

//test  cases  for  pl_PL
function  testLocaleInfoGetDecimalSeparatorfor_pl_PL()  {
        var  info  =  new  ilib.LocaleInfo("pl-PL");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_pl_PL()  {
        var  info  =  new  ilib.LocaleInfo("pl-PL");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_pl_PL()  {
        var  info  =  new  ilib.LocaleInfo("pl-PL");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_pl_PL()  {
        var  info  =  new  ilib.LocaleInfo("pl-PL");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}



//test  cases  for  da-DK
function  testLocaleInfoGetDecimalSeparatorfor_da_Dk()  {
        var  info  =  new  ilib.LocaleInfo("da-DK");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_da_Dk()  {
        var  info  =  new  ilib.LocaleInfo("da-DK");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_da_Dk()  {
        var  info  =  new  ilib.LocaleInfo("da-DK");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_da_Dk()  {
        var  info  =  new  ilib.LocaleInfo("da-DK");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

//test  cases  for  roRO
function  testLocaleInfoGetDecimalSeparatorfor_ro_RO()  {
        var  info  =  new  ilib.LocaleInfo("ro-RO");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ro_RO()  {
        var  info  =  new  ilib.LocaleInfo("ro-RO");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ro_RO()  {
        var  info  =  new  ilib.LocaleInfo("ro-RO");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ro_RO()  {
        var  info  =  new  ilib.LocaleInfo("ro-RO");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

//test  cases  for  aa-DJ
function  testLocaleInfoGetDecimalSeparatorfor_aa_DJ()  {
        var  info  =  new  ilib.LocaleInfo("aa-DJ");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_aa_DJ()  {
        var  info  =  new  ilib.LocaleInfo("aa-DJ");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_aa_DJ()  {
        var  info  =  new  ilib.LocaleInfo("aa-DJ");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_aa_DJ()  {
        var  info  =  new  ilib.LocaleInfo("aa-DJ");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_aa_DJ()  {
        var  info  =  new  ilib.LocaleInfo("aa-DJ");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_aa_DJ()  {
        var  info  =  new  ilib.LocaleInfo("aa-DJ");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_aa_DJ()  {
        var  info  =  new  ilib.LocaleInfo("aa-DJ");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

//test  cases  for  af-NA
function  testLocaleInfoGetDecimalSeparatorfor_af_NA()  {
        var  info  =  new  ilib.LocaleInfo("af-NA");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_af_NA()  {
        var  info  =  new  ilib.LocaleInfo("af-NA");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_af_NA()  {
        var  info  =  new  ilib.LocaleInfo("af-NA");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_af_NA()  {
        var  info  =  new  ilib.LocaleInfo("af-NA");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_af_NA()  {
        var  info  =  new  ilib.LocaleInfo("af-NA");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_af_NA()  {
        var  info  =  new  ilib.LocaleInfo("af-NA");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_af_NA()  {
        var  info  =  new  ilib.LocaleInfo("af-NA");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  ak-GH
function  testLocaleInfoGetDecimalSeparatorfor_ak_GH()  {
        var  info  =  new  ilib.LocaleInfo("ak-GH");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ak_GH()  {
        var  info  =  new  ilib.LocaleInfo("ak-GH");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ak_GH()  {
        var  info  =  new  ilib.LocaleInfo("ak-GH");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ak_GH()  {
        var  info  =  new  ilib.LocaleInfo("ak-GH");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ak_GH()  {
        var  info  =  new  ilib.LocaleInfo("ak-GH");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ak_GH()  {
        var  info  =  new  ilib.LocaleInfo("ak-GH");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ak_GH()  {
        var  info  =  new  ilib.LocaleInfo("ak-GH");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}
//test  cases  for  am-ET
function  testLocaleInfoGetDecimalSeparatorfor_am_ET()  {
        var  info  =  new  ilib.LocaleInfo("am-ET");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_am_ET()  {
        var  info  =  new  ilib.LocaleInfo("am-ET");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_am_ET()  {
        var  info  =  new  ilib.LocaleInfo("am-ET");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_am_ET()  {
        var  info  =  new  ilib.LocaleInfo("am-ET");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_am_ET()  {
        var  info  =  new  ilib.LocaleInfo("am-ET");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_am_ET()  {
        var  info  =  new  ilib.LocaleInfo("am-ET");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_am_ET()  {
        var  info  =  new  ilib.LocaleInfo("am-ET");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

//test  casess  for  ar-AE
function  testLocaleInfoGetDecimalSeparatorfor_ar_AE()  {
        var  info  =  new  ilib.LocaleInfo("ar-AE");        
        assertNotNull(info);
        assertEquals("٫",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ar_AE()  {
        var  info  =  new  ilib.LocaleInfo("ar-AE");        
        assertNotNull(info);

        assertEquals("٬",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ar_AE()  {
        var  info  =  new  ilib.LocaleInfo("ar-AE");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ar_AE()  {
        var  info  =  new  ilib.LocaleInfo("ar-AE");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ar_AE()  {
        var  info  =  new  ilib.LocaleInfo("ar-AE");        
        assertNotNull(info);

        assertEquals(0,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ar_AE()  {
        var  info  =  new  ilib.LocaleInfo("ar-AE");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ar_AE()  {
        var  info  =  new  ilib.LocaleInfo("ar-AE");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

//test  cases  for  ar-DZ
function  testLocaleInfoGetDecimalSeparatorfor_ar_DZ()  {
        var  info  =  new  ilib.LocaleInfo("ar-DZ");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ar_DZ()  {
        var  info  =  new  ilib.LocaleInfo("ar-DZ");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ar_DZ()  {
        var  info  =  new  ilib.LocaleInfo("ar-DZ");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ar_DZ()  {
        var  info  =  new  ilib.LocaleInfo("ar-DZ");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ar_DZ()  {
        var  info  =  new  ilib.LocaleInfo("ar-DZ");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ar_DZ()  {
        var  info  =  new  ilib.LocaleInfo("ar-DZ");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ar_DZ()  {
        var  info  =  new  ilib.LocaleInfo("ar-DZ");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

//test  cases  for  ar-TN
function  testLocaleInfoGetDecimalSeparatorfor_ar_TN()  {
        var  info  =  new  ilib.LocaleInfo("ar-TN");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ar_TN()  {
        var  info  =  new  ilib.LocaleInfo("ar-TN");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ar_TN()  {
        var  info  =  new  ilib.LocaleInfo("ar-TN");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ar_TN()  {
        var  info  =  new  ilib.LocaleInfo("ar-TN");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ar_TN()  {
        var  info  =  new  ilib.LocaleInfo("ar-TN");        
        assertNotNull(info);

        assertEquals(0,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ar_TN()  {
        var  info  =  new  ilib.LocaleInfo("ar-TN");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ar_TN()  {
        var  info  =  new  ilib.LocaleInfo("ar-TN");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}
//test  cases  for  as-IN
function  testLocaleInfoGetDecimalSeparatorfor_as_IN()  {
        var  info  =  new  ilib.LocaleInfo("as-IN");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_as_IN()  {
        var  info  =  new  ilib.LocaleInfo("as-IN");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_as_IN()  {
        var  info  =  new  ilib.LocaleInfo("as-IN");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_as_IN()  {
        var  info  =  new  ilib.LocaleInfo("as-IN");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_as_IN()  {
        var  info  =  new  ilib.LocaleInfo("as-IN");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_as_IN()  {
        var  info  =  new  ilib.LocaleInfo("as-IN");        
        assertNotNull(info);

        assertEquals(2,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_as_IN()  {
        var  info  =  new  ilib.LocaleInfo("as-IN");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}
//test  cases  for  asa_TZ

function  testLocaleInfoGetDecimalSeparatorfor_asa_TZ()  {
        var  info  =  new  ilib.LocaleInfo("asa-TZ");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_asa_TZ()  {
        var  info  =  new  ilib.LocaleInfo("asa-TZ");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_asa_TZ()  {
        var  info  =  new  ilib.LocaleInfo("asa-TZ");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_asa_TZ()  {
        var  info  =  new  ilib.LocaleInfo("asa-TZ");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_asa_TZ()  {
        var  info  =  new  ilib.LocaleInfo("asa-TZ");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_asa_TZ()  {
        var  info  =  new  ilib.LocaleInfo("asa-TZ");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_asa_TZ()  {
        var  info  =  new  ilib.LocaleInfo("asa-TZ");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

//test  cases  for  az-AZ
function  testLocaleInfoGetDecimalSeparatorfor_az_AZ()  {
        var  info  =  new  ilib.LocaleInfo("az-AZ");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_az_AZ()  {
        var  info  =  new  ilib.LocaleInfo("az-AZ");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_az_AZ()  {
        var  info  =  new  ilib.LocaleInfo("az-AZ");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_az_AZ()  {
        var  info  =  new  ilib.LocaleInfo("az-AZ");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_az_AZ()  {
        var  info  =  new  ilib.LocaleInfo("az-AZ");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_az_AZ()  {
        var  info  =  new  ilib.LocaleInfo("az-AZ");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_az_AZ()  {
        var  info  =  new  ilib.LocaleInfo("az-AZ");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

//test  cases  for  be-BY
function  testLocaleInfoGetDecimalSeparatorfor_be_BY()  {
        var  info  =  new  ilib.LocaleInfo("be-BY");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_be_BY()  {
        var  info  =  new  ilib.LocaleInfo("be-BY");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_be_BY()  {
        var  info  =  new  ilib.LocaleInfo("be-BY");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_be_BY()  {
        var  info  =  new  ilib.LocaleInfo("be-BY");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_be_BY()  {
        var  info  =  new  ilib.LocaleInfo("be-BY");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_be_BY()  {
        var  info  =  new  ilib.LocaleInfo("be-BY");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_be_BY()  {
        var  info  =  new  ilib.LocaleInfo("be-BY");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



function  testLocaleInfoGetDecimalSeparatorfor_bg_BG()  {
        var  info  =  new  ilib.LocaleInfo("bg-BG");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_bg_BG()  {
        var  info  =  new  ilib.LocaleInfo("bg-BG");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_bg_BG()  {
        var  info  =  new  ilib.LocaleInfo("bg-BG");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_bg_BG()  {
        var  info  =  new  ilib.LocaleInfo("bg-BG");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_bg_BG()  {
        var  info  =  new  ilib.LocaleInfo("bg-BG");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_bg_BG()  {
        var  info  =  new  ilib.LocaleInfo("bg-BG");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoGetDecimalSeparatorfor_bm_ML()  {
        var  info  =  new  ilib.LocaleInfo("bm-ML");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_bm_ML()  {
        var  info  =  new  ilib.LocaleInfo("bm-ML");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_bm_ML()  {
        var  info  =  new  ilib.LocaleInfo("bm-ML");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_bm_ML()  {
        var  info  =  new  ilib.LocaleInfo("bm-ML");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_bm_ML()  {
        var  info  =  new  ilib.LocaleInfo("bm-ML");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_bm_ML()  {
        var  info  =  new  ilib.LocaleInfo("bm-ML");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_bm_ML()  {
        var  info  =  new  ilib.LocaleInfo("bm-ML");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

function  testLocaleInfoGetDecimalSeparatorfor_bn_IN()  {
        var  info  =  new  ilib.LocaleInfo("bn-IN");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_bn_IN()  {
        var  info  =  new  ilib.LocaleInfo("bn-IN");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_bn_IN()  {
        var  info  =  new  ilib.LocaleInfo("bn-IN");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_bn_IN()  {
        var  info  =  new  ilib.LocaleInfo("bn-IN");        
        assertNotNull(info);

        assertEquals("{n}{s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_bn_IN()  {
        var  info  =  new  ilib.LocaleInfo("bn-IN");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_bn_IN()  {
        var  info  =  new  ilib.LocaleInfo("bn-IN");        
        assertNotNull(info);

        assertEquals(2,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_bn_IN()  {
        var  info  =  new  ilib.LocaleInfo("bn-IN");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}
//test  cases  for  br-FR

function  testLocaleInfoGetDecimalSeparatorfor_br_FR()  {
        var  info  =  new  ilib.LocaleInfo("br-FR");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_br_FR()  {
        var  info  =  new  ilib.LocaleInfo("br-FR");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_br_FR()  {
        var  info  =  new  ilib.LocaleInfo("br-FR");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_br_FR()  {
        var  info  =  new  ilib.LocaleInfo("br-FR");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_br_FR()  {
        var  info  =  new  ilib.LocaleInfo("br-FR");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_br_FR()  {
        var  info  =  new  ilib.LocaleInfo("br-FR");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_br_FR()  {
        var  info  =  new  ilib.LocaleInfo("br-FR");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  bs-Cyrl-BA

function  testLocaleInfoGetDecimalSeparatorfor_bs_Cyrl_BA()  {
        var  info  =  new  ilib.LocaleInfo("bs-Cyrl-BA");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_bs_Cyrl_BA()  {
        var  info  =  new  ilib.LocaleInfo("bs-Cyrl-BA");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_bs_Cyrl_BA()  {
        var  info  =  new  ilib.LocaleInfo("bs-Cyrl-BA");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_bs_Cyrl_BA()  {
        var  info  =  new  ilib.LocaleInfo("bs-Cyrl-BA");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_bs_Cyrl_BA()  {
        var  info  =  new  ilib.LocaleInfo("bs-Cyrl-BA");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_bs_Cyrl_BA()  {
        var  info  =  new  ilib.LocaleInfo("bs-Cyrl-BA");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_bs_Cyrl_BA()  {
        var  info  =  new  ilib.LocaleInfo("bs-Cyrl-BA");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}
//test  cases  for  bs-ME
function  testLocaleInfoGetDecimalSeparatorfor_bs_ME()  {
        var  info  =  new  ilib.LocaleInfo("bs-ME");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_bs_ME()  {
        var  info  =  new  ilib.LocaleInfo("bs-ME");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_bs_ME()  {
        var  info  =  new  ilib.LocaleInfo("bs-ME");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_bs_ME()  {
        var  info  =  new  ilib.LocaleInfo("bs-ME");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_bs_ME()  {
        var  info  =  new  ilib.LocaleInfo("bs-ME");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_bs_ME()  {
        var  info  =  new  ilib.LocaleInfo("bs-ME");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_bs_ME()  {
        var  info  =  new  ilib.LocaleInfo("bs-ME");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}
//test  cases  for  ca-FR
function  testLocaleInfoGetDecimalSeparatorfor_ca_FR()  {
        var  info  =  new  ilib.LocaleInfo("ca-FR");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ca_FR()  {
        var  info  =  new  ilib.LocaleInfo("ca-FR");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ca_FR()  {
        var  info  =  new  ilib.LocaleInfo("ca-FR");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ca_FR()  {
        var  info  =  new  ilib.LocaleInfo("ca-FR");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ca_FR()  {
        var  info  =  new  ilib.LocaleInfo("ca-FR");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ca_FR()  {
        var  info  =  new  ilib.LocaleInfo("ca-FR");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ca_FR()  {
        var  info  =  new  ilib.LocaleInfo("ca-FR");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}
//test  cases  for  de-AT
function  testLocaleInfoGetDecimalSeparatorfor_de_AT()  {
        var  info  =  new  ilib.LocaleInfo("de-AT");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_de_AT()  {
        var  info  =  new  ilib.LocaleInfo("de-AT");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_de_AT()  {
        var  info  =  new  ilib.LocaleInfo("de-AT");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_de_AT()  {
        var  info  =  new  ilib.LocaleInfo("de-AT");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_de_AT()  {
        var  info  =  new  ilib.LocaleInfo("de-AT");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_de_AT()  {
        var  info  =  new  ilib.LocaleInfo("de-AT");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_de_AT()  {
        var  info  =  new  ilib.LocaleInfo("de-AT");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//************************************************End  23/05/2013**********************************************************
//****************************Added  by  kariyappa  28-May-2013**************************************************************


//test  cases  for  fa-AF

function  testLocaleInfoGetDecimalSeparatorfor_fa_AF()  {
        var  info  =  new  ilib.LocaleInfo("fa-AF");        
        assertNotNull(info);
        assertEquals("٫",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fa_AF()  {
        var  info  =  new  ilib.LocaleInfo("fa-AF");        
        assertNotNull(info);

        assertEquals("٬",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fa_AF()  {
        var  info  =  new  ilib.LocaleInfo("fa-AF");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_fa_AF()  {
        var  info  =  new  ilib.LocaleInfo("fa-AF");        
        assertNotNull(info);

        assertEquals("‎{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_fa_AF()  {
        var  info  =  new  ilib.LocaleInfo("fa-AF");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_fa_AF()  {
        var  info  =  new  ilib.LocaleInfo("fa-AF");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_fa_AF()  {
        var  info  =  new  ilib.LocaleInfo("fa-AF");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  ff-SN

function  testLocaleInfoGetDecimalSeparatorfor_ff_SN()  {
        var  info  =  new  ilib.LocaleInfo("ff-SN");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ff_SN()  {
        var  info  =  new  ilib.LocaleInfo("ff-SN");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ff_SN()  {
        var  info  =  new  ilib.LocaleInfo("ff-SN");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ff_SN()  {
        var  info  =  new  ilib.LocaleInfo("ff-SN");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ff_SN()  {
        var  info  =  new  ilib.LocaleInfo("ff-SN");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ff_SN()  {
        var  info  =  new  ilib.LocaleInfo("ff-SN");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ff_SN()  {
        var  info  =  new  ilib.LocaleInfo("ff-SN");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}




//test  cases  for  fj-FJ

function  testLocaleInfoGetDecimalSeparatorfor_fj_FJ()  {
        var  info  =  new  ilib.LocaleInfo("fj-FJ");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fj_FJ()  {
        var  info  =  new  ilib.LocaleInfo("fj-FJ");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fj_FJ()  {
        var  info  =  new  ilib.LocaleInfo("fj-FJ");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_fj_FJ()  {
        var  info  =  new  ilib.LocaleInfo("fj-FJ");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_fj_FJ()  {
        var  info  =  new  ilib.LocaleInfo("fj-FJ");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_fj_FJ()  {
        var  info  =  new  ilib.LocaleInfo("fj-FJ");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_fj_FJsss()  {
        var  info  =  new  ilib.LocaleInfo("fj-FJ");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

//test  cases  for  ga-IE

function  testLocaleInfoGetDecimalSeparatorfor_ga_IE()  {
        var  info  =  new  ilib.LocaleInfo("ga-IE");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ga_IE()  {
        var  info  =  new  ilib.LocaleInfo("ga-IE");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ga_IE()  {
        var  info  =  new  ilib.LocaleInfo("ga-IE");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ga_IE()  {
        var  info  =  new  ilib.LocaleInfo("ga-IE");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ga_IE()  {
        var  info  =  new  ilib.LocaleInfo("ga-IE");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ga_IE()  {
        var  info  =  new  ilib.LocaleInfo("ga-IE");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ga_IE()  {
        var  info  =  new  ilib.LocaleInfo("ga-IE");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

//test  cases  for  gl-ES

function  testLocaleInfoGetDecimalSeparatorfor_gl_ES()  {
        var  info  =  new  ilib.LocaleInfo("gl-ES");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_gl_ES()  {
        var  info  =  new  ilib.LocaleInfo("gl-ES");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_gl_ES()  {
        var  info  =  new  ilib.LocaleInfo("gl-ES");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_gl_ES()  {
        var  info  =  new  ilib.LocaleInfo("gl-ES");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_gl_ES()  {
        var  info  =  new  ilib.LocaleInfo("gl-ES");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_gl_ES()  {
        var  info  =  new  ilib.LocaleInfo("gl-ES");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_gl_ES()  {
        var  info  =  new  ilib.LocaleInfo("gl-ES");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  ha-NG-Latn

function  testLocaleInfoGetDecimalSeparatorfor_ha_NG_Latn()  {
        var  info  =  new  ilib.LocaleInfo("ha-NG-Latn");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ha_NG_Latn()  {
        var  info  =  new  ilib.LocaleInfo("ha-NG-Latn");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ha_NG_Latn()  {
        var  info  =  new  ilib.LocaleInfo("ha-NG-Latn");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ha_NG_Latn()  {
        var  info  =  new  ilib.LocaleInfo("ha-NG-Latn");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ha_NG_Latn()  {
        var  info  =  new  ilib.LocaleInfo("ha-NG-Latn");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ha_NG_Latn()  {
        var  info  =  new  ilib.LocaleInfo("ha-NG-Latn");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ha_NG_Latn()  {
        var  info  =  new  ilib.LocaleInfo("ha-NG-Latn");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

//test  cases  for  hi-IN

function  testLocaleInfoGetDecimalSeparatorfor_hi_IN()  {
        var  info  =  new  ilib.LocaleInfo("hi-IN");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_hi_IN()  {
        var  info  =  new  ilib.LocaleInfo("hi-IN");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_hi_IN()  {
        var  info  =  new  ilib.LocaleInfo("hi-IN");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_hi_IN()  {
        var  info  =  new  ilib.LocaleInfo("hi-IN");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_hi_IN()  {
        var  info  =  new  ilib.LocaleInfo("hi-IN");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_hi_IN()  {
        var  info  =  new  ilib.LocaleInfo("hi-IN");        
        assertNotNull(info);

        assertEquals(2,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_hi_IN()  {
        var  info  =  new  ilib.LocaleInfo("hi-IN");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

//test  cases  for  hr-HR

function  testLocaleInfoGetDecimalSeparatorfor_hr_HR()  {
        var  info  =  new  ilib.LocaleInfo("hr-HR");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_hr_HR()  {
        var  info  =  new  ilib.LocaleInfo("hr-HR");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_hr_HR()  {
        var  info  =  new  ilib.LocaleInfo("hr-HR");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_hr_HR()  {
        var  info  =  new  ilib.LocaleInfo("hr-HR");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_hr_HR()  {
        var  info  =  new  ilib.LocaleInfo("hr-HR");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_hr_HR()  {
        var  info  =  new  ilib.LocaleInfo("hr-HR");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_hr_HR()  {
        var  info  =  new  ilib.LocaleInfo("hr-HR");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

//test  cases  for  hy-AZ

function  testLocaleInfoGetDecimalSeparatorfor_hy_AZ()  {
        var  info  =  new  ilib.LocaleInfo("hy-AZ");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_hy_AZ()  {
        var  info  =  new  ilib.LocaleInfo("hy-AZ");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_hy_AZ()  {
        var  info  =  new  ilib.LocaleInfo("hy-AZ");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_hy_AZ()  {
        var  info  =  new  ilib.LocaleInfo("hy-AZ");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_hy_AZ()  {
        var  info  =  new  ilib.LocaleInfo("hy-AZ");        
        assertNotNull(info);

        assertEquals(2,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_hy_AZ()  {
        var  info  =  new  ilib.LocaleInfo("hy-AZ");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_hy_AZ()  {
        var  info  =  new  ilib.LocaleInfo("hy-AZ");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

//test  cases  for  id-MY

function  testLocaleInfoGetDecimalSeparatorfor_id_MY()  {
        var  info  =  new  ilib.LocaleInfo("id-MY");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_id_MY()  {
        var  info  =  new  ilib.LocaleInfo("id-MY");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_id_MY()  {
        var  info  =  new  ilib.LocaleInfo("id-MY");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_id_MY()  {
        var  info  =  new  ilib.LocaleInfo("id-MY");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_id_MY()  {
        var  info  =  new  ilib.LocaleInfo("id-MY");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_id_MY()  {
        var  info  =  new  ilib.LocaleInfo("id-MY");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_id_MY()  {
        var  info  =  new  ilib.LocaleInfo("id-MY");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

//test  cases  for  it-CH

function  testLocaleInfoGetDecimalSeparatorfor_it_CH()  {
        var  info  =  new  ilib.LocaleInfo("it-CH");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_it_CH()  {
        var  info  =  new  ilib.LocaleInfo("it-CH");        
        assertNotNull(info);

        assertEquals("'",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_it_CH()  {
        var  info  =  new  ilib.LocaleInfo("it-CH");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_it_CH()  {
        var  info  =  new  ilib.LocaleInfo("it-CH");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_it_CH()  {
        var  info  =  new  ilib.LocaleInfo("it-CH");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_it_CH()  {
        var  info  =  new  ilib.LocaleInfo("it-CH");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_it_CH()  {
        var  info  =  new  ilib.LocaleInfo("it-CH");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  it-SM

function  testLocaleInfoGetDecimalSeparatorfor_it_SM()  {
        var  info  =  new  ilib.LocaleInfo("it-SM");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_it_SM()  {
        var  info  =  new  ilib.LocaleInfo("it-SM");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_it_SM()  {
        var  info  =  new  ilib.LocaleInfo("it-SM");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_it_SM()  {
        var  info  =  new  ilib.LocaleInfo("it-SM");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_it_SM()  {
        var  info  =  new  ilib.LocaleInfo("it-SM");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_it_SM()  {
        var  info  =  new  ilib.LocaleInfo("it-SM");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_it_SM()  {
        var  info  =  new  ilib.LocaleInfo("it-SM");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  ka-IR

function  testLocaleInfoGetDecimalSeparatorfor_ka_IR()  {
        var  info  =  new  ilib.LocaleInfo("ka-IR");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ka_IR()  {
        var  info  =  new  ilib.LocaleInfo("ka-IR");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ka_IR()  {
        var  info  =  new  ilib.LocaleInfo("ka-IR");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ka_IR()  {
        var  info  =  new  ilib.LocaleInfo("ka-IR");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ka_IR()  {
        var  info  =  new  ilib.LocaleInfo("ka-IR");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ka_IR()  {
        var  info  =  new  ilib.LocaleInfo("ka-IR");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ka_IR()  {
        var  info  =  new  ilib.LocaleInfo("ka-IR");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

//test  cases  for  kk-KZ-Cyrl

function  testLocaleInfoGetDecimalSeparatorfor_kk_KZ_Cyrl()  {
        var  info  =  new  ilib.LocaleInfo("kk-KZ-Cyrl");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_kk_KZ_Cyrl()  {
        var  info  =  new  ilib.LocaleInfo("kk-KZ-Cyrl");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_kk_KZ_Cyrl()  {
        var  info  =  new  ilib.LocaleInfo("kk-KZ-Cyrl");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_kk_KZ_Cyrl()  {
        var  info  =  new  ilib.LocaleInfo("kk-KZ-Cyrl");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_kk_KZ_Cyrl()  {
        var  info  =  new  ilib.LocaleInfo("kk-KZ-Cyrl");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_kk_KZ_Cyrl()  {
        var  info  =  new  ilib.LocaleInfo("kk-KZ-Cyrl");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_kk_KZ_Cyrl()  {
        var  info  =  new  ilib.LocaleInfo("kk-KZ-Cyrl");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  ko-KR

function  testLocaleInfoGetDecimalSeparatorfor_ko_KR()  {
        var  info  =  new  ilib.LocaleInfo("ko-KR");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ko_KR()  {
        var  info  =  new  ilib.LocaleInfo("ko-KR");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ko_KR()  {
        var  info  =  new  ilib.LocaleInfo("ko-KR");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ko_KR()  {
        var  info  =  new  ilib.LocaleInfo("ko-KR");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ko_KR()  {
        var  info  =  new  ilib.LocaleInfo("ko-KR");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ko_KR()  {
        var  info  =  new  ilib.LocaleInfo("ko-KR");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ko_KR()  {
        var  info  =  new  ilib.LocaleInfo("ko-KR");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

//test  cases  for  ks-IN-Arab

function  testLocaleInfoGetDecimalSeparatorfor_ks_IN_Arab()  {
        var  info  =  new  ilib.LocaleInfo("ks-IN-Arab");        
        assertNotNull(info);
        assertEquals("٫",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ks_IN_Arab()  {
        var  info  =  new  ilib.LocaleInfo("ks-IN-Arab");        
        assertNotNull(info);

        assertEquals("٬",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ks_IN_Arab()  {
        var  info  =  new  ilib.LocaleInfo("ks-IN-Arab");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ks_IN_Arab()  {
        var  info  =  new  ilib.LocaleInfo("ks-IN-Arab");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ks_IN_Arab()  {
        var  info  =  new  ilib.LocaleInfo("ks-IN-Arab");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ks_IN_Arab()  {
        var  info  =  new  ilib.LocaleInfo("ks-IN-Arab");        
        assertNotNull(info);

        assertEquals(2,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ks_IN_Arab()  {
        var  info  =  new  ilib.LocaleInfo("ks-IN-Arab");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  ku-IR

function  testLocaleInfoGetDecimalSeparatorfor_ku_IR()  {
        var  info  =  new  ilib.LocaleInfo("ku-IR");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ku_IR()  {
        var  info  =  new  ilib.LocaleInfo("ku-IR");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ku_IR()  {
        var  info  =  new  ilib.LocaleInfo("ku-IR");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ku_IR()  {
        var  info  =  new  ilib.LocaleInfo("ku-IR");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ku_IR()  {
        var  info  =  new  ilib.LocaleInfo("ku-IR");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ku_IR()  {
        var  info  =  new  ilib.LocaleInfo("ku-IR");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ku_IR()  {
        var  info  =  new  ilib.LocaleInfo("ku-IR");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}




//test  cases  for  lg-UG

function  testLocaleInfoGetDecimalSeparatorfor_lg_UG()  {
        var  info  =  new  ilib.LocaleInfo("lg-UG");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_lg_UG()  {
        var  info  =  new  ilib.LocaleInfo("lg-UG");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_lg_UG()  {
        var  info  =  new  ilib.LocaleInfo("lg-UG");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_lg_UG()  {
        var  info  =  new  ilib.LocaleInfo("lg-UG");        
        assertNotNull(info);

        assertEquals("{n}{s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_lg_UG()  {
        var  info  =  new  ilib.LocaleInfo("lg-UG");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_lg_UG()  {
        var  info  =  new  ilib.LocaleInfo("lg-UG");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_lg_UG()  {
        var  info  =  new  ilib.LocaleInfo("lg-UG");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

//test  cases  for  ln-CF

function  testLocaleInfoGetDecimalSeparatorfor_ln_CF()  {
        var  info  =  new  ilib.LocaleInfo("ln-CF");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ln_CF()  {
        var  info  =  new  ilib.LocaleInfo("ln-CF");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ln_CF()  {
        var  info  =  new  ilib.LocaleInfo("ln-CF");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ln_CF()  {
        var  info  =  new  ilib.LocaleInfo("ln-CF");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ln_CF()  {
        var  info  =  new  ilib.LocaleInfo("ln-CF");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ln_CF()  {
        var  info  =  new  ilib.LocaleInfo("ln-CF");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ln_CF()  {
        var  info  =  new  ilib.LocaleInfo("ln-CF");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  mi-CK

function  testLocaleInfoGetDecimalSeparatorfor_mi_CK()  {
        var  info  =  new  ilib.LocaleInfo("mi-CK");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_mi_CK()  {
        var  info  =  new  ilib.LocaleInfo("mi-CK");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_mi_CK()  {
        var  info  =  new  ilib.LocaleInfo("mi-CK");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_mi_CK()  {
        var  info  =  new  ilib.LocaleInfo("mi-CK");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_mi_CK()  {
        var  info  =  new  ilib.LocaleInfo("mi-CK");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_mi_CK()  {
        var  info  =  new  ilib.LocaleInfo("mi-CK");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_mi_CK()  {
        var  info  =  new  ilib.LocaleInfo("mi-CK");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

//test  cases  for  mn-CN

function  testLocaleInfoGetDecimalSeparatorfor_mn_CN()  {
        var  info  =  new  ilib.LocaleInfo("mn-CN");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_mn_CN()  {
        var  info  =  new  ilib.LocaleInfo("mn-CN");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_mn_CN()  {
        var  info  =  new  ilib.LocaleInfo("mn-CN");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_mn_CN()  {
        var  info  =  new  ilib.LocaleInfo("mn-CN");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_mn_CN()  {
        var  info  =  new  ilib.LocaleInfo("mn-CN");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_mn_CN()  {
        var  info  =  new  ilib.LocaleInfo("mn-CN");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_mn_CN()  {
        var  info  =  new  ilib.LocaleInfo("mn-CN");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

//test  cases  for  ms-BN

function  testLocaleInfoGetDecimalSeparatorfor_ms_BN()  {
        var  info  =  new  ilib.LocaleInfo("ms-BN");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ms_BN()  {
        var  info  =  new  ilib.LocaleInfo("ms-BN");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ms_BN()  {
        var  info  =  new  ilib.LocaleInfo("ms-BN");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ms_BN()  {
        var  info  =  new  ilib.LocaleInfo("ms-BN");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ms_BN()  {
        var  info  =  new  ilib.LocaleInfo("ms-BN");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ms_BN()  {
        var  info  =  new  ilib.LocaleInfo("ms-BN");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ms_BN()  {
        var  info  =  new  ilib.LocaleInfo("ms-BN");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  ne-IN

function  testLocaleInfoGetDecimalSeparatorfor_ne_IN()  {
        var  info  =  new  ilib.LocaleInfo("ne-IN");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ne_IN()  {
        var  info  =  new  ilib.LocaleInfo("ne-IN");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ne_IN()  {
        var  info  =  new  ilib.LocaleInfo("ne-IN");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ne_IN()  {
        var  info  =  new  ilib.LocaleInfo("ne-IN");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ne_IN()  {
        var  info  =  new  ilib.LocaleInfo("ne-IN");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ne_IN()  {
        var  info  =  new  ilib.LocaleInfo("ne-IN");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ne_IN()  {
        var  info  =  new  ilib.LocaleInfo("ne-IN");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}






//test  cases  for  nl-BE

function  testLocaleInfoGetDecimalSeparatorfor_nl_BE()  {
        var  info  =  new  ilib.LocaleInfo("nl-BE");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_nl_BE()  {
        var  info  =  new  ilib.LocaleInfo("nl-BE");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_nl_BE()  {
        var  info  =  new  ilib.LocaleInfo("nl-BE");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_nl_BE()  {
        var  info  =  new  ilib.LocaleInfo("nl-BE");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_nl_BE()  {
        var  info  =  new  ilib.LocaleInfo("nl-BE");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_nl_BE()  {
        var  info  =  new  ilib.LocaleInfo("nl-BE");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_nl_BE()  {
        var  info  =  new  ilib.LocaleInfo("nl-BE");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}




//test  cases  for  nl-CW

function  testLocaleInfoGetDecimalSeparatorfor_nl_CW()  {
        var  info  =  new  ilib.LocaleInfo("nl-CW");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_nl_CW()  {
        var  info  =  new  ilib.LocaleInfo("nl-CW");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_nl_CW()  {
        var  info  =  new  ilib.LocaleInfo("nl-CW");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_nl_CW()  {
        var  info  =  new  ilib.LocaleInfo("nl-CW");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_nl_CW()  {
        var  info  =  new  ilib.LocaleInfo("nl-CW");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_nl_CW()  {
        var  info  =  new  ilib.LocaleInfo("nl-CW");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_nl_CW()  {
        var  info  =  new  ilib.LocaleInfo("nl-CW");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}




//test  cases  for  nl-GF

function  testLocaleInfoGetDecimalSeparatorfor_nl_GF()  {
        var  info  =  new  ilib.LocaleInfo("nl-GF");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_nl_GF()  {
        var  info  =  new  ilib.LocaleInfo("nl-GF");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_nl_GF()  {
        var  info  =  new  ilib.LocaleInfo("nl-GF");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_nl_GF()  {
        var  info  =  new  ilib.LocaleInfo("nl-GF");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_nl_GF()  {
        var  info  =  new  ilib.LocaleInfo("nl-GF");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_nl_GF()  {
        var  info  =  new  ilib.LocaleInfo("nl-GF");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_nl_GF()  {
        var  info  =  new  ilib.LocaleInfo("nl-GF");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}




//test  cases  for  nl-SR

function  testLocaleInfoGetDecimalSeparatorfor_nl_SR()  {
        var  info  =  new  ilib.LocaleInfo("nl-SR");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_nl_SR()  {
        var  info  =  new  ilib.LocaleInfo("nl-SR");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_nl_SR()  {
        var  info  =  new  ilib.LocaleInfo("nl-SR");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_nl_SR()  {
        var  info  =  new  ilib.LocaleInfo("nl-SR");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_nl_SR()  {
        var  info  =  new  ilib.LocaleInfo("nl-SR");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_nl_SR()  {
        var  info  =  new  ilib.LocaleInfo("nl-SR");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_nl_SR()  {
        var  info  =  new  ilib.LocaleInfo("nl-SR");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}





//test  cases  for  no-BV

function  testLocaleInfoGetDecimalSeparatorfor_no_BV()  {
        var  info  =  new  ilib.LocaleInfo("no-BV");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_no_BV()  {
        var  info  =  new  ilib.LocaleInfo("no-BV");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_no_BV()  {
        var  info  =  new  ilib.LocaleInfo("no-BV");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_no_BV()  {
        var  info  =  new  ilib.LocaleInfo("no-BV");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_no_BV()  {
        var  info  =  new  ilib.LocaleInfo("no-BV");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_no_BV()  {
        var  info  =  new  ilib.LocaleInfo("no-BV");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_no_BV()  {
        var  info  =  new  ilib.LocaleInfo("no-BV");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}





//test  cases  for  no-SJ

function  testLocaleInfoGetDecimalSeparatorfor_no_SJ()  {
        var  info  =  new  ilib.LocaleInfo("no-SJ");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_no_SJ()  {
        var  info  =  new  ilib.LocaleInfo("no-SJ");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_no_SJ()  {
        var  info  =  new  ilib.LocaleInfo("no-SJ");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_no_SJ()  {
        var  info  =  new  ilib.LocaleInfo("no-SJ");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_no_SJ()  {
        var  info  =  new  ilib.LocaleInfo("no-SJ");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_no_SJ()  {
        var  info  =  new  ilib.LocaleInfo("no-SJ");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_no_SJ()  {
        var  info  =  new  ilib.LocaleInfo("no-SJ");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  om-ET

function  testLocaleInfoGetDecimalSeparatorfor_om_ET()  {
        var  info  =  new  ilib.LocaleInfo("om-ET");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_om_ET()  {
        var  info  =  new  ilib.LocaleInfo("om-ET");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_om_ET()  {
        var  info  =  new  ilib.LocaleInfo("om-ET");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_om_ET()  {
        var  info  =  new  ilib.LocaleInfo("om-ET");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_om_ET()  {
        var  info  =  new  ilib.LocaleInfo("om-ET");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_om_ET()  {
        var  info  =  new  ilib.LocaleInfo("om-ET");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_om_ET()  {
        var  info  =  new  ilib.LocaleInfo("om-ET");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  os-RU

function  testLocaleInfoGetDecimalSeparatorfor_os_RU()  {
        var  info  =  new  ilib.LocaleInfo("os-RU");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_os_RU()  {
        var  info  =  new  ilib.LocaleInfo("os-RU");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_os_RU()  {
        var  info  =  new  ilib.LocaleInfo("os-RU");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_os_RU()  {
        var  info  =  new  ilib.LocaleInfo("os-RU");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_os_RU()  {
        var  info  =  new  ilib.LocaleInfo("os-RU");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_os_RU()  {
        var  info  =  new  ilib.LocaleInfo("os-RU");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_os_RU()  {
        var  info  =  new  ilib.LocaleInfo("os-RU");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}




//test  cases  for  pa-PK-Arab

function  testLocaleInfoGetDecimalSeparatorfor_pa()  {
        var  info  =  new  ilib.LocaleInfo("pa-PK-Arab");        
        assertNotNull(info);
        assertEquals("٫",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_pa()  {
        var  info  =  new  ilib.LocaleInfo("pa-PK-Arab");        
        assertNotNull(info);

        assertEquals("٬",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_pa()  {
        var  info  =  new  ilib.LocaleInfo("pa-PK-Arab");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_pa()  {
        var  info  =  new  ilib.LocaleInfo("pa-PK-Arab");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_pa()  {
        var  info  =  new  ilib.LocaleInfo("pa-PK-Arab");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_pa()  {
        var  info  =  new  ilib.LocaleInfo("pa-PK-Arab");        
        assertNotNull(info);

        assertEquals(2,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_pa()  {
        var  info  =  new  ilib.LocaleInfo("pa-PK-Arab");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  pt-AO

function  testLocaleInfoGetDecimalSeparatorfor_pt_AO()  {
        var  info  =  new  ilib.LocaleInfo("pt-AO");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_pt_AO()  {
        var  info  =  new  ilib.LocaleInfo("pt-AO");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_pt_AO()  {
        var  info  =  new  ilib.LocaleInfo("pt-AO");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_pt_AO()  {
        var  info  =  new  ilib.LocaleInfo("pt-AO");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_pt_AO()  {
        var  info  =  new  ilib.LocaleInfo("pt-AO");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_pt_AO()  {
        var  info  =  new  ilib.LocaleInfo("pt-AO");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_pt_AO()  {
        var  info  =  new  ilib.LocaleInfo("pt-AO");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  pt-CV

function  testLocaleInfoGetDecimalSeparatorfor_pt_CV()  {
        var  info  =  new  ilib.LocaleInfo("pt-CV");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_pt_CV()  {
        var  info  =  new  ilib.LocaleInfo("pt-CV");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_pt_CV()  {
        var  info  =  new  ilib.LocaleInfo("pt-CV");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_pt_CV()  {
        var  info  =  new  ilib.LocaleInfo("pt-CV");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_pt_CV()  {
        var  info  =  new  ilib.LocaleInfo("pt-CV");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_pt_CV()  {
        var  info  =  new  ilib.LocaleInfo("pt-CV");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_pt_CV()  {
        var  info  =  new  ilib.LocaleInfo("pt-CV");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  pt-GW

function  testLocaleInfoGetDecimalSeparatorfor_pt_GW()  {
        var  info  =  new  ilib.LocaleInfo("pt-GW");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_pt_GW()  {
        var  info  =  new  ilib.LocaleInfo("pt-GW");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_pt_GW()  {
        var  info  =  new  ilib.LocaleInfo("pt-GW");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_pt_GW()  {
        var  info  =  new  ilib.LocaleInfo("pt-GW");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_pt_GW()  {
        var  info  =  new  ilib.LocaleInfo("pt-GW");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_pt_GW()  {
        var  info  =  new  ilib.LocaleInfo("pt-GW");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_pt_GW()  {
        var  info  =  new  ilib.LocaleInfo("pt-GW");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  pt-MO

function  testLocaleInfoGetDecimalSeparatorfor_pt_MO()  {
        var  info  =  new  ilib.LocaleInfo("pt-MO");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_pt_MO()  {
        var  info  =  new  ilib.LocaleInfo("pt-MO");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_pt_MO()  {
        var  info  =  new  ilib.LocaleInfo("pt-MO");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_pt_MO()  {
        var  info  =  new  ilib.LocaleInfo("pt-MO");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_pt_MO()  {
        var  info  =  new  ilib.LocaleInfo("pt-MO");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_pt_MO()  {
        var  info  =  new  ilib.LocaleInfo("pt-MO");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_pt_MO()  {
        var  info  =  new  ilib.LocaleInfo("pt-MO");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  pt-MZ

function  testLocaleInfoGetDecimalSeparatorfor_pt_MZ()  {
        var  info  =  new  ilib.LocaleInfo("pt-MZ");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_pt_MZ()  {
        var  info  =  new  ilib.LocaleInfo("pt-MZ");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_pt_MZ()  {
        var  info  =  new  ilib.LocaleInfo("pt-MZ");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_pt_MZ()  {
        var  info  =  new  ilib.LocaleInfo("pt-MZ");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_pt_MZ()  {
        var  info  =  new  ilib.LocaleInfo("pt-MZ");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_pt_MZ()  {
        var  info  =  new  ilib.LocaleInfo("pt-MZ");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_pt_MZ()  {
        var  info  =  new  ilib.LocaleInfo("pt-MZ");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  pt-PT

function  testLocaleInfoGetDecimalSeparatorfor_pt_PT()  {
        var  info  =  new  ilib.LocaleInfo("pt-PT");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_pt_PT()  {
        var  info  =  new  ilib.LocaleInfo("pt-PT");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_pt_PT()  {
        var  info  =  new  ilib.LocaleInfo("pt-PT");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_pt_PT()  {
        var  info  =  new  ilib.LocaleInfo("pt-PT");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_pt_PT()  {
        var  info  =  new  ilib.LocaleInfo("pt-PT");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_pt_PT()  {
        var  info  =  new  ilib.LocaleInfo("pt-PT");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_pt_PT()  {
        var  info  =  new  ilib.LocaleInfo("pt-PT");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  pt-ST

function  testLocaleInfoGetDecimalSeparatorfor_pt_ST()  {
        var  info  =  new  ilib.LocaleInfo("pt-ST");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_pt_ST()  {
        var  info  =  new  ilib.LocaleInfo("pt-ST");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_pt_ST()  {
        var  info  =  new  ilib.LocaleInfo("pt-ST");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_pt_ST()  {
        var  info  =  new  ilib.LocaleInfo("pt-ST");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_pt_ST()  {
        var  info  =  new  ilib.LocaleInfo("pt-ST");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_pt_ST()  {
        var  info  =  new  ilib.LocaleInfo("pt-ST");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_pt_ST()  {
        var  info  =  new  ilib.LocaleInfo("pt-ST");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  pt-TL

function  testLocaleInfoGetDecimalSeparatorfor_pt_TL()  {
        var  info  =  new  ilib.LocaleInfo("pt-TL");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_pt_TL()  {
        var  info  =  new  ilib.LocaleInfo("pt-TL");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_pt_TL()  {
        var  info  =  new  ilib.LocaleInfo("pt-TL");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_pt_TL()  {
        var  info  =  new  ilib.LocaleInfo("pt-TL");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_pt_TL()  {
        var  info  =  new  ilib.LocaleInfo("pt-TL");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_pt_TL()  {
        var  info  =  new  ilib.LocaleInfo("pt-TL");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_pt_TL()  {
        var  info  =  new  ilib.LocaleInfo("pt-TL");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}






//test  cases  for  ro-RS

function  testLocaleInfoGetDecimalSeparatorfor_ro_RS()  {
        var  info  =  new  ilib.LocaleInfo("ro-RS");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ro_RS()  {
        var  info  =  new  ilib.LocaleInfo("ro-RS");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ro_RS()  {
        var  info  =  new  ilib.LocaleInfo("ro-RS");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ro_RS()  {
        var  info  =  new  ilib.LocaleInfo("ro-RS");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ro_RS()  {
        var  info  =  new  ilib.LocaleInfo("ro-RS");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ro_RS()  {
        var  info  =  new  ilib.LocaleInfo("ro-RS");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ro_RS()  {
        var  info  =  new  ilib.LocaleInfo("ro-RS");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  ru-KZ

function  testLocaleInfoGetDecimalSeparatorfor_ru_KZ()  {
        var  info  =  new  ilib.LocaleInfo("ru-KZ");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ru_KZ()  {
        var  info  =  new  ilib.LocaleInfo("ru-KZ");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ru_KZ()  {
        var  info  =  new  ilib.LocaleInfo("ru-KZ");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ru_KZ()  {
        var  info  =  new  ilib.LocaleInfo("ru-KZ");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ru_KZ()  {
        var  info  =  new  ilib.LocaleInfo("ru-KZ");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ru_KZ()  {
        var  info  =  new  ilib.LocaleInfo("ru-KZ");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ru_KZ()  {
        var  info  =  new  ilib.LocaleInfo("ru-KZ");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  ru-TM

function  testLocaleInfoGetDecimalSeparatorfor_ru_TM()  {
        var  info  =  new  ilib.LocaleInfo("ru-TM");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ru_TM()  {
        var  info  =  new  ilib.LocaleInfo("ru-TM");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ru_TM()  {
        var  info  =  new  ilib.LocaleInfo("ru-TM");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ru_TM()  {
        var  info  =  new  ilib.LocaleInfo("ru-TM");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ru_TM()  {
        var  info  =  new  ilib.LocaleInfo("ru-TM");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ru_TM()  {
        var  info  =  new  ilib.LocaleInfo("ru-TM");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ru_TM()  {
        var  info  =  new  ilib.LocaleInfo("ru-TM");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  sk-SK

function  testLocaleInfoGetDecimalSeparatorfor_sk_SK()  {
        var  info  =  new  ilib.LocaleInfo("sk-SK");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_sk_SK()  {
        var  info  =  new  ilib.LocaleInfo("sk-SK");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_sk_SK()  {
        var  info  =  new  ilib.LocaleInfo("sk-SK");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_sk_SK()  {
        var  info  =  new  ilib.LocaleInfo("sk-SK");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_sk_SK()  {
        var  info  =  new  ilib.LocaleInfo("sk-SK");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_sk_SK()  {
        var  info  =  new  ilib.LocaleInfo("sk-SK");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_sk_SK()  {
        var  info  =  new  ilib.LocaleInfo("sk-SK");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  so-ET

function  testLocaleInfoGetDecimalSeparatorfor_so_ET()  {
        var  info  =  new  ilib.LocaleInfo("so-ET");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_so_ET()  {
        var  info  =  new  ilib.LocaleInfo("so-ET");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_so_ET()  {
        var  info  =  new  ilib.LocaleInfo("so-ET");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_so_ET()  {
        var  info  =  new  ilib.LocaleInfo("so-ET");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_so_ET()  {
        var  info  =  new  ilib.LocaleInfo("so-ET");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_so_ET()  {
        var  info  =  new  ilib.LocaleInfo("so-ET");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_so_ET()  {
        var  info  =  new  ilib.LocaleInfo("so-ET");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}




//test  cases  for  so-SO

function  testLocaleInfoGetDecimalSeparatorfor_so_SO()  {
        var  info  =  new  ilib.LocaleInfo("so-SO");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_so_SO()  {
        var  info  =  new  ilib.LocaleInfo("so-SO");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_so_SO()  {
        var  info  =  new  ilib.LocaleInfo("so-SO");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_so_SO()  {
        var  info  =  new  ilib.LocaleInfo("so-SO");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_so_SO()  {
        var  info  =  new  ilib.LocaleInfo("so-SO");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_so_SO()  {
        var  info  =  new  ilib.LocaleInfo("so-SO");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_so_SO()  {
        var  info  =  new  ilib.LocaleInfo("so-SO");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  sq-MK

function  testLocaleInfoGetDecimalSeparatorfor_sq_MK()  {
        var  info  =  new  ilib.LocaleInfo("sq-MK");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_sq_MK()  {
        var  info  =  new  ilib.LocaleInfo("sq-MK");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_sq_MK()  {
        var  info  =  new  ilib.LocaleInfo("sq-MK");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_sq_MK()  {
        var  info  =  new  ilib.LocaleInfo("sq-MK");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_sq_MK()  {
        var  info  =  new  ilib.LocaleInfo("sq-MK");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_sq_MK()  {
        var  info  =  new  ilib.LocaleInfo("sq-MK");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_sq_MK()  {
        var  info  =  new  ilib.LocaleInfo("sq-MK");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  sr-BA-Cyrl

function  testLocaleInfoGetDecimalSeparatorfor_sr_BA_Cyrl()  {
        var  info  =  new  ilib.LocaleInfo("sr-BA-Cyrl");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_sr_BA_Cyrl()  {
        var  info  =  new  ilib.LocaleInfo("sr-BA-Cyrl");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_sr_BA_Cyrl()  {
        var  info  =  new  ilib.LocaleInfo("sr-BA-Cyrl");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_sr_BA_Cyrl()  {
        var  info  =  new  ilib.LocaleInfo("sr-BA-Cyrl");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_sr_BA_Cyrl()  {
        var  info  =  new  ilib.LocaleInfo("sr-BA-Cyrl");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_sr_BA_Cyrl()  {
        var  info  =  new  ilib.LocaleInfo("sr-BA-Cyrl");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_sr_BA_Cyrl()  {
        var  info  =  new  ilib.LocaleInfo("sr-BA-Cyrl");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  sr-BA-Latn

function  testLocaleInfoGetDecimalSeparatorfor_sr_BA_Latn()  {
        var  info  =  new  ilib.LocaleInfo("sr-BA-Latn");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_sr_BA_Latn()  {
        var  info  =  new  ilib.LocaleInfo("sr-BA-Latn");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_sr_BA_Latn()  {
        var  info  =  new  ilib.LocaleInfo("sr-BA-Latn");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_sr_BA_Latn()  {
        var  info  =  new  ilib.LocaleInfo("sr-BA-Latn");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_sr_BA_Latn()  {
        var  info  =  new  ilib.LocaleInfo("sr-BA-Latn");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_sr_BA_Latn()  {
        var  info  =  new  ilib.LocaleInfo("sr-BA-Latn");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_sr_BA_Latn()  {
        var  info  =  new  ilib.LocaleInfo("sr-BA-Latn");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  sr-ME-Latn

function  testLocaleInfoGetDecimalSeparatorfor_sr_ME_Latn()  {
        var  info  =  new  ilib.LocaleInfo("sr-ME-Latn");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_sr_ME_Latn()  {
        var  info  =  new  ilib.LocaleInfo("sr-ME-Latn");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_sr_ME_Latn()  {
        var  info  =  new  ilib.LocaleInfo("sr-ME-Latn");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_sr_ME_Latn()  {
        var  info  =  new  ilib.LocaleInfo("sr-ME-Latn");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_sr_ME_Latn()  {
        var  info  =  new  ilib.LocaleInfo("sr-ME-Latn");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_sr_ME_Latn()  {
        var  info  =  new  ilib.LocaleInfo("sr-ME-Latn");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_sr_ME_Latn()  {
        var  info  =  new  ilib.LocaleInfo("sr-ME-Latn");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  sr-RS-Latn

function  testLocaleInfoGetDecimalSeparatorfor_sr_RS_Latn()  {
        var  info  =  new  ilib.LocaleInfo("sr-RS-Latn");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_sr_RS_Latn()  {
        var  info  =  new  ilib.LocaleInfo("sr-RS-Latn");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_sr_RS_Latn()  {
        var  info  =  new  ilib.LocaleInfo("sr-RS-Latn");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_sr_RS_Latn()  {
        var  info  =  new  ilib.LocaleInfo("sr-RS-Latn");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_sr_RS_Latn()  {
        var  info  =  new  ilib.LocaleInfo("sr-RS-Latn");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_sr_RS_Latn()  {
        var  info  =  new  ilib.LocaleInfo("sr-RS-Latn");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_sr_RS_Latn()  {
        var  info  =  new  ilib.LocaleInfo("sr-RS-Latn");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  sr-RS

function  testLocaleInfoGetDecimalSeparatorfor_sr_RS()  {
        var  info  =  new  ilib.LocaleInfo("sr-RS");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_sr_RS()  {
        var  info  =  new  ilib.LocaleInfo("sr-RS");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_sr_RS()  {
        var  info  =  new  ilib.LocaleInfo("sr-RS");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_sr_RS()  {
        var  info  =  new  ilib.LocaleInfo("sr-RS");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_sr_RS()  {
        var  info  =  new  ilib.LocaleInfo("sr-RS");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_sr_RS()  {
        var  info  =  new  ilib.LocaleInfo("sr-RS");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_sr_RS()  {
        var  info  =  new  ilib.LocaleInfo("sr-RS");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  ss-ZA

function  testLocaleInfoGetDecimalSeparatorfor_ss_ZA()  {
        var  info  =  new  ilib.LocaleInfo("ss-ZA");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ss_ZA()  {
        var  info  =  new  ilib.LocaleInfo("ss-ZA");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ss_ZA()  {
        var  info  =  new  ilib.LocaleInfo("ss-ZA");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ss_ZA()  {
        var  info  =  new  ilib.LocaleInfo("ss-ZA");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ss_ZA()  {
        var  info  =  new  ilib.LocaleInfo("ss-ZA");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ss_ZA()  {
        var  info  =  new  ilib.LocaleInfo("ss-ZA");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ss_ZA()  {
        var  info  =  new  ilib.LocaleInfo("ss-ZA");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  st-LS

function  testLocaleInfoGetDecimalSeparatorfor_st_LS()  {
        var  info  =  new  ilib.LocaleInfo("st-LS");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_st_LS()  {
        var  info  =  new  ilib.LocaleInfo("st-LS");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_st_LS()  {
        var  info  =  new  ilib.LocaleInfo("st-LS");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_st_LS()  {
        var  info  =  new  ilib.LocaleInfo("st-LS");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_st_LS()  {
        var  info  =  new  ilib.LocaleInfo("st-LS");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_st_LS()  {
        var  info  =  new  ilib.LocaleInfo("st-LS");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_st_LS()  {
        var  info  =  new  ilib.LocaleInfo("st-LS");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  sv-FI

function  testLocaleInfoGetDecimalSeparatorfor_sv_FI()  {
        var  info  =  new  ilib.LocaleInfo("sv-FI");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_sv_FI()  {
        var  info  =  new  ilib.LocaleInfo("sv-FI");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_sv_FI()  {
        var  info  =  new  ilib.LocaleInfo("sv-FI");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_sv()  {
        var  info  =  new  ilib.LocaleInfo("sv-FI");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_sv_FI()  {
        var  info  =  new  ilib.LocaleInfo("sv-FI");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_sv_FI()  {
        var  info  =  new  ilib.LocaleInfo("sv-FI");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_sv_FI()  {
        var  info  =  new  ilib.LocaleInfo("sv-FI");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  sw-UG

function  testLocaleInfoGetDecimalSeparatorfor_sw_UG()  {
        var  info  =  new  ilib.LocaleInfo("sw-UG");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_sw_UG()  {
        var  info  =  new  ilib.LocaleInfo("sw-UG");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_sw_UG()  {
        var  info  =  new  ilib.LocaleInfo("sw-UG");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_sw_UG()  {
        var  info  =  new  ilib.LocaleInfo("sw-UG");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_sw_UG()  {
        var  info  =  new  ilib.LocaleInfo("sw-UG");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_sw_UG()  {
        var  info  =  new  ilib.LocaleInfo("sw-UG");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_sw_UG()  {
        var  info  =  new  ilib.LocaleInfo("sw-UG");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  ta-LK

function  testLocaleInfoGetDecimalSeparatorfor_ta_LK()  {
        var  info  =  new  ilib.LocaleInfo("ta-LK");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ta_LK()  {
        var  info  =  new  ilib.LocaleInfo("ta-LK");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ta_LK()  {
        var  info  =  new  ilib.LocaleInfo("ta-LK");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ta_LK()  {
        var  info  =  new  ilib.LocaleInfo("ta-LK");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ta_LK()  {
        var  info  =  new  ilib.LocaleInfo("ta-LK");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ta_LK()  {
        var  info  =  new  ilib.LocaleInfo("ta-LK");        
        assertNotNull(info);

        assertEquals(2,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ta_LK()  {
        var  info  =  new  ilib.LocaleInfo("ta-LK");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  ta-MY

function  testLocaleInfoGetDecimalSeparatorfor_ta_MY()  {
        var  info  =  new  ilib.LocaleInfo("ta-MY");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ta_MY()  {
        var  info  =  new  ilib.LocaleInfo("ta-MY");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ta_MY()  {
        var  info  =  new  ilib.LocaleInfo("ta-MY");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ta_MY()  {
        var  info  =  new  ilib.LocaleInfo("ta-MY");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ta_MY()  {
        var  info  =  new  ilib.LocaleInfo("ta-MY");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ta_MY()  {
        var  info  =  new  ilib.LocaleInfo("ta-MY");        
        assertNotNull(info);

        assertEquals(2,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ta_MY()  {
        var  info  =  new  ilib.LocaleInfo("ta-MY");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  ta-SG

function  testLocaleInfoGetDecimalSeparatorfor_ta_SG()  {
        var  info  =  new  ilib.LocaleInfo("ta-SG");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ta_SG()  {
        var  info  =  new  ilib.LocaleInfo("ta-SG");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ta_SG()  {
        var  info  =  new  ilib.LocaleInfo("ta-SG");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ta_SG()  {
        var  info  =  new  ilib.LocaleInfo("ta-SG");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ta_SG()  {
        var  info  =  new  ilib.LocaleInfo("ta-SG");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ta_SG()  {
        var  info  =  new  ilib.LocaleInfo("ta-SG");        
        assertNotNull(info);

        assertEquals(2,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ta_SG()  {
        var  info  =  new  ilib.LocaleInfo("ta-SG");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  te

function  testLocaleInfoGetDecimalSeparatorfor_te()  {
        var  info  =  new  ilib.LocaleInfo("te");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_te()  {
        var  info  =  new  ilib.LocaleInfo("te");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_te()  {
        var  info  =  new  ilib.LocaleInfo("te");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_te()  {
        var  info  =  new  ilib.LocaleInfo("te");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_te()  {
        var  info  =  new  ilib.LocaleInfo("te");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_te()  {
        var  info  =  new  ilib.LocaleInfo("te");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_te()  {
        var  info  =  new  ilib.LocaleInfo("te");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}




//test  cases  for  uk-UA

function  testLocaleInfoGetDecimalSeparatorfor_uk_UA()  {
        var  info  =  new  ilib.LocaleInfo("uk-UA");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_uk_UA()  {
        var  info  =  new  ilib.LocaleInfo("uk-UA");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_uk_UA()  {
        var  info  =  new  ilib.LocaleInfo("uk-UA");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_uk_UA()  {
        var  info  =  new  ilib.LocaleInfo("uk-UA");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_uk_UA()  {
        var  info  =  new  ilib.LocaleInfo("uk-UA");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_uk_UA()  {
        var  info  =  new  ilib.LocaleInfo("uk-UA");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_uk_UA()  {
        var  info  =  new  ilib.LocaleInfo("uk-UA");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  ur-IN

function  testLocaleInfoGetDecimalSeparatorfor_ur_IN()  {
        var  info  =  new  ilib.LocaleInfo("ur-IN");        
        assertNotNull(info);
        assertEquals("٫",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ur_IN()  {
        var  info  =  new  ilib.LocaleInfo("ur-IN");        
        assertNotNull(info);

        assertEquals("٬",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ur_IN()  {
        var  info  =  new  ilib.LocaleInfo("ur-IN");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ur_IN()  {
        var  info  =  new  ilib.LocaleInfo("ur-IN");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ur_IN()  {
        var  info  =  new  ilib.LocaleInfo("ur-IN");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ur_IN()  {
        var  info  =  new  ilib.LocaleInfo("ur-IN");        
        assertNotNull(info);

        assertEquals(2,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ur_IN()  {
        var  info  =  new  ilib.LocaleInfo("ur-IN");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  ur-PK

function  testLocaleInfoGetDecimalSeparatorfor_ur_PK()  {
        var  info  =  new  ilib.LocaleInfo("ur-PK");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ur_PK()  {
        var  info  =  new  ilib.LocaleInfo("ur-PK");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ur_PK()  {
        var  info  =  new  ilib.LocaleInfo("ur-PK");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ur_PK()  {
        var  info  =  new  ilib.LocaleInfo("ur-PK");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ur_PK()  {
        var  info  =  new  ilib.LocaleInfo("ur-PK");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ur_PK()  {
        var  info  =  new  ilib.LocaleInfo("ur-PK");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ur_PK()  {
        var  info  =  new  ilib.LocaleInfo("ur-PK");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  uz-AF-Arab

function  testLocaleInfoGetDecimalSeparatorfor_ur_AF_Arab()  {
        var  info  =  new  ilib.LocaleInfo("uz-AF-Arab");        
        assertNotNull(info);
        assertEquals("٫",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ur_AF_Arab()  {
        var  info  =  new  ilib.LocaleInfo("uz-AF-Arab");        
        assertNotNull(info);

        assertEquals("٬",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ur_AF_Arab()  {
        var  info  =  new  ilib.LocaleInfo("uz-AF-Arab");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ur_AF_Arab()  {
        var  info  =  new  ilib.LocaleInfo("uz-AF-Arab");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ur_AF_Arab()  {
        var  info  =  new  ilib.LocaleInfo("uz-AF-Arab");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ur_AF_Arab()  {
        var  info  =  new  ilib.LocaleInfo("uz-AF-Arab");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ur_AF_Arab()  {
        var  info  =  new  ilib.LocaleInfo("uz-AF-Arab");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  uz-UZ-Latn

function  testLocaleInfoGetDecimalSeparatorfor_uz_UZ_Latn()  {
        var  info  =  new  ilib.LocaleInfo("uz-UZ-Latn");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_uz_UZ_Latn()  {
        var  info  =  new  ilib.LocaleInfo("uz-UZ-Latn");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_uz_UZ_Latn()  {
        var  info  =  new  ilib.LocaleInfo("uz-UZ-Latn");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_uz_UZ_Latn()  {
        var  info  =  new  ilib.LocaleInfo("uz-UZ-Latn");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_uz_UZ_Latn()  {
        var  info  =  new  ilib.LocaleInfo("uz-UZ-Latn");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_uz_UZ_Latn()  {
        var  info  =  new  ilib.LocaleInfo("uz-UZ-Latn");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_uz_UZ_Latn()  {
        var  info  =  new  ilib.LocaleInfo("uz-UZ-Latn");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  vai-LR-Latn

function  testLocaleInfoGetDecimalSeparatorfor_vai_LR_Latn()  {
        var  info  =  new  ilib.LocaleInfo("vai-LR-Latn");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_vai_LR_Latn()  {
        var  info  =  new  ilib.LocaleInfo("vai-LR-Latn");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_vai_LR_Latn()  {
        var  info  =  new  ilib.LocaleInfo("vai-LR-Latn");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_vai_LR_Latn()  {
        var  info  =  new  ilib.LocaleInfo("vai-LR-Latn");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_vai_LR_Latn()  {
        var  info  =  new  ilib.LocaleInfo("vai-LR-Latn");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_vai_LR_Latn()  {
        var  info  =  new  ilib.LocaleInfo("vai-LR-Latn");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_vai_LR_Latn()  {
        var  info  =  new  ilib.LocaleInfo("vai-LR-Latn");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}




//test  cases  for  zh-SG-Hans

function  testLocaleInfoGetDecimalSeparatorfor_zh_SG_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-SG-Hans");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_zh_SG_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-SG-Hans");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_zh_SG_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-SG-Hans");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_zh_SG_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-SG-Hans");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_zh_SG_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-SG-Hans");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_zh_SG_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-SG-Hans");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_zh_SG_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-SG-Hans");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  zh-MO-Hant

function  testLocaleInfoGetDecimalSeparatorfor_zh_MO_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-MO-Hant");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_zh_MO_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-MO-Hant");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_zh_MO_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-MO-Hant");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_zh_MO_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-MO-Hant");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_zh_MO_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-MO-Hant");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_zh_MO_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-MO-Hant");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_zh_MO_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-MO-Hant");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  zh-US-Hant

function  testLocaleInfoGetDecimalSeparatorfor_zh_US_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-US-Hant");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_zh_US_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-US-Hant");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_zh_US_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-US-Hant");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_zh_US_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-US-Hant");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_zh_US_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-US-Hant");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_zh_US_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-US-Hant");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_zh_US_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-US-Hant");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  zh-MY

function  testLocaleInfoGetDecimalSeparatorfor_zh_MY()  {
        var  info  =  new  ilib.LocaleInfo("zh-MY");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_zh_MY()  {
        var  info  =  new  ilib.LocaleInfo("zh-MY");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_zh_MY()  {
        var  info  =  new  ilib.LocaleInfo("zh-MY");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_zh_MY()  {
        var  info  =  new  ilib.LocaleInfo("zh-MY");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_zh_MY()  {
        var  info  =  new  ilib.LocaleInfo("zh-MY");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_zh_MY()  {
        var  info  =  new  ilib.LocaleInfo("zh-MY");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_zh_MY()  {
        var  info  =  new  ilib.LocaleInfo("zh-MY");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  sq-AL


function  testLocaleInfoGetDecimalSeparatorfor_sq_AL()  {
        var  info  =  new  ilib.LocaleInfo("sq-AL");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());

}

function  testLocaleInfoGetGroupingSeparatorfor_sq_AL()  {
        var  info  =  new  ilib.LocaleInfo("sq-AL");        

        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());

}

function  testLocaleInfoGetPercentageFormat_sq_AL()  {
        var  info  =  new  ilib.LocaleInfo("sq-AL");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_sq_AL()  {
        var  info  =  new  ilib.LocaleInfo("sq-AL");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_sq_AL()  {
        var  info  =  new  ilib.LocaleInfo("sq-AL");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_sq_AL()  {
        var  info  =  new  ilib.LocaleInfo("sq-AL");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_sq_AL()  {
        var  info  =  new  ilib.LocaleInfo("sq-AL");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  sq-ME

function  testLocaleInfoGetDecimalSeparatorfor_sq_ME()  {
        var  info  =  new  ilib.LocaleInfo("sq-ME");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_sq_ME()  {
        var  info  =  new  ilib.LocaleInfo("sq-ME");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}


function  testLocaleInfoGetPercentageFormat_sq_ME()  {
        var  info  =  new  ilib.LocaleInfo("sq-ME");        
        assertNotNull(info);


        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_sq_ME()  {
        var  info  =  new  ilib.LocaleInfo("sq-ME");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());

}

function  testLocaleInfoGetPrimaryGroupingDigits_sq_ME()  {
        var  info  =  new  ilib.LocaleInfo("sq-ME");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());

}

function  testLocaleInfoGetSecondaryGroupingDigits_sq_ME()  {
        var  info  =  new  ilib.LocaleInfo("sq-ME");        

        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}


function  testLocaleInfoRoundingMode_sq_ME()  {
        var  info  =  new  ilib.LocaleInfo("sq-ME");        

        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  casess  for  ar-AE
function  testLocaleInfoGetDecimalSeparatorfor_ar_AE()  {
        var  info  =  new  ilib.LocaleInfo("ar-AE");        
        assertNotNull(info);
        assertEquals("٫",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ar_AE()  {
        var  info  =  new  ilib.LocaleInfo("ar-AE");        
        assertNotNull(info);

        assertEquals("٬",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ar_AE()  {
        var  info  =  new  ilib.LocaleInfo("ar-AE");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ar_AE()  {
        var  info  =  new  ilib.LocaleInfo("ar-AE");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ar_AE()  {
        var  info  =  new  ilib.LocaleInfo("ar-AE");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ar_AE()  {
        var  info  =  new  ilib.LocaleInfo("ar-AE");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ar_AE()  {
        var  info  =  new  ilib.LocaleInfo("ar-AE");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  casess  for  ar-BH
function  testLocaleInfoGetDecimalSeparatorfor_ar_BH()  {
        var  info  =  new  ilib.LocaleInfo("ar-BH");        
        assertNotNull(info);
        assertEquals("٫",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ar_BH()  {
        var  info  =  new  ilib.LocaleInfo("ar-BH");        
        assertNotNull(info);

        assertEquals("٬",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ar_BH()  {
        var  info  =  new  ilib.LocaleInfo("ar-BH");        

        assertNotNull(info);


        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ar_BH()  {
        var  info  =  new  ilib.LocaleInfo("ar-BH");        
        assertNotNull(info);


        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ar_BH()  {

        var  info  =  new  ilib.LocaleInfo("ar-BH");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());

}

function  testLocaleInfoGetSecondaryGroupingDigits_ar_BH()  {
        var  info  =  new  ilib.LocaleInfo("ar-BH");        

        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ar_BH()  {
        var  info  =  new  ilib.LocaleInfo("ar-BH");        

        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  casess  for  ar-DJ
function  testLocaleInfoGetDecimalSeparatorfor_ar_DJ()  {
        var  info  =  new  ilib.LocaleInfo("ar-DJ");        
        assertNotNull(info);
        assertEquals("٫",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ar_DJ()  {
        var  info  =  new  ilib.LocaleInfo("ar-DJ");        
        assertNotNull(info);

        assertEquals("٬",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ar_DJ()  {
        var  info  =  new  ilib.LocaleInfo("ar-DJ");        
        assertNotNull(info);


        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ar_DJ()  {
        var  info  =  new  ilib.LocaleInfo("ar-DJ");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ar_DJ()  {
        var  info  =  new  ilib.LocaleInfo("ar-DJ");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ar_DJ()  {
        var  info  =  new  ilib.LocaleInfo("ar-DJ");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ar_DJ()  {
        var  info  =  new  ilib.LocaleInfo("ar-DJ");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

//test  cases  for  ar-DZ
function  testLocaleInfoGetDecimalSeparatorfor_ar_DZ()  {
        var  info  =  new  ilib.LocaleInfo("ar-DZ");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ar_DZ()  {
        var  info  =  new  ilib.LocaleInfo("ar-DZ");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ar_DZ()  {
        var  info  =  new  ilib.LocaleInfo("ar-DZ");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ar_DZ()  {
        var  info  =  new  ilib.LocaleInfo("ar-DZ");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ar_DZ()  {
        var  info  =  new  ilib.LocaleInfo("ar-DZ");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ar_DZ()  {
        var  info  =  new  ilib.LocaleInfo("ar-DZ");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ar_DZ()  {
        var  info  =  new  ilib.LocaleInfo("ar-DZ");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  casess  for  ar-EG
function  testLocaleInfoGetDecimalSeparatorfor_ar_EG()  {
        var  info  =  new  ilib.LocaleInfo("ar-EG");        
        assertNotNull(info);
        assertEquals("٫",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ar_EG()  {
        var  info  =  new  ilib.LocaleInfo("ar-EG");        
        assertNotNull(info);

        assertEquals("٬",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ar_EG()  {
        var  info  =  new  ilib.LocaleInfo("ar-EG");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ar_EG()  {
        var  info  =  new  ilib.LocaleInfo("ar-EG");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ar_EG()  {
        var  info  =  new  ilib.LocaleInfo("ar-EG");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ar_EG()  {
        var  info  =  new  ilib.LocaleInfo("ar-EG");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ar_EG()  {
        var  info  =  new  ilib.LocaleInfo("ar-EG");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  casess  for  ar-IQ
function  testLocaleInfoGetDecimalSeparatorfor_ar_IQ()  {
        var  info  =  new  ilib.LocaleInfo("ar-IQ");        
        assertNotNull(info);
        assertEquals("٫",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ar_IQ()  {
        var  info  =  new  ilib.LocaleInfo("ar-IQ");        
        assertNotNull(info);

        assertEquals("٬",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ar_IQ()  {
        var  info  =  new  ilib.LocaleInfo("ar-IQ");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ar_IQ()  {
        var  info  =  new  ilib.LocaleInfo("ar-IQ");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ar_IQ()  {
        var  info  =  new  ilib.LocaleInfo("ar-IQ");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ar_IQ()  {
        var  info  =  new  ilib.LocaleInfo("ar-IQ");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ar_IQ()  {
        var  info  =  new  ilib.LocaleInfo("ar-IQ");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}




//test  casess  for  ar-JO
function  testLocaleInfoGetDecimalSeparatorfor_ar_JO()  {
        var  info  =  new  ilib.LocaleInfo("ar-JO");        
        assertNotNull(info);
        assertEquals("٫",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ar_JO()  {
        var  info  =  new  ilib.LocaleInfo("ar-JO");        
        assertNotNull(info);

        assertEquals("٬",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ar_JO()  {
        var  info  =  new  ilib.LocaleInfo("ar-JO");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ar_JO()  {
        var  info  =  new  ilib.LocaleInfo("ar-JO");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ar_JO()  {
        var  info  =  new  ilib.LocaleInfo("ar-JO");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ar_JO()  {
        var  info  =  new  ilib.LocaleInfo("ar-JO");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ar_JO()  {
        var  info  =  new  ilib.LocaleInfo("ar-JO");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}





//test  casess  for  ar-KW
function  testLocaleInfoGetDecimalSeparatorfor_ar_KW()  {
        var  info  =  new  ilib.LocaleInfo("ar-KW");        
        assertNotNull(info);
        assertEquals("٫",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ar_KW()  {
        var  info  =  new  ilib.LocaleInfo("ar-KW");        
        assertNotNull(info);

        assertEquals("٬",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ar_KW()  {
        var  info  =  new  ilib.LocaleInfo("ar-KW");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ar_KW()  {
        var  info  =  new  ilib.LocaleInfo("ar-KW");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ar_KW()  {
        var  info  =  new  ilib.LocaleInfo("ar-KW");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ar_KW()  {
        var  info  =  new  ilib.LocaleInfo("ar-KW");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ar_KW()  {
        var  info  =  new  ilib.LocaleInfo("ar-KW");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}






//test  casess  for  ar-LB
function  testLocaleInfoGetDecimalSeparatorfor_ar_LB()  {
        var  info  =  new  ilib.LocaleInfo("ar-LB");        
        assertNotNull(info);
        assertEquals("٫",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ar_LB()  {
        var  info  =  new  ilib.LocaleInfo("ar-LB");        
        assertNotNull(info);

        assertEquals("٬",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ar_LB()  {
        var  info  =  new  ilib.LocaleInfo("ar-LB");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ar_LB()  {
        var  info  =  new  ilib.LocaleInfo("ar-LB");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ar_LB()  {
        var  info  =  new  ilib.LocaleInfo("ar-LB");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ar_LB()  {
        var  info  =  new  ilib.LocaleInfo("ar-LB");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ar_LB()  {
        var  info  =  new  ilib.LocaleInfo("ar-LB");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}





//test  casess  for  ar-LY
function  testLocaleInfoGetDecimalSeparatorfor_ar_LY()  {
        var  info  =  new  ilib.LocaleInfo("ar-LY");        
        assertNotNull(info);
        assertEquals("٫",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ar_LY()  {
        var  info  =  new  ilib.LocaleInfo("ar-LY");        
        assertNotNull(info);

        assertEquals("٬",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ar_LY()  {
        var  info  =  new  ilib.LocaleInfo("ar-LY");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ar_LY()  {
        var  info  =  new  ilib.LocaleInfo("ar-LY");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ar_LY()  {
        var  info  =  new  ilib.LocaleInfo("ar-LY");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ar_LY()  {
        var  info  =  new  ilib.LocaleInfo("ar-LY");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ar_LY()  {
        var  info  =  new  ilib.LocaleInfo("ar-LY");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}





//test  casess  for  ar-MR
function  testLocaleInfoGetDecimalSeparatorfor_ar_MR()  {
        var  info  =  new  ilib.LocaleInfo("ar-MR");        
        assertNotNull(info);
        assertEquals("٫",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ar_MR()  {
        var  info  =  new  ilib.LocaleInfo("ar-MR");        
        assertNotNull(info);

        assertEquals("٬",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ar_MR()  {
        var  info  =  new  ilib.LocaleInfo("ar-MR");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ar_MR()  {
        var  info  =  new  ilib.LocaleInfo("ar-MR");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ar_MR()  {
        var  info  =  new  ilib.LocaleInfo("ar-MR");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ar_MR()  {
        var  info  =  new  ilib.LocaleInfo("ar-MR");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ar_MR()  {
        var  info  =  new  ilib.LocaleInfo("ar-MR");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}





//test  casess  for  ar-MA
function  testLocaleInfoGetDecimalSeparatorfor_ar_MA()  {
        var  info  =  new  ilib.LocaleInfo("ar-MA");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ar_MA()  {
        var  info  =  new  ilib.LocaleInfo("ar-MA");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ar_MA()  {
        var  info  =  new  ilib.LocaleInfo("ar-MA");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ar_MA()  {
        var  info  =  new  ilib.LocaleInfo("ar-MA");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ar_MA()  {
        var  info  =  new  ilib.LocaleInfo("ar-MA");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ar_MA()  {
        var  info  =  new  ilib.LocaleInfo("ar-MA");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ar_MA()  {
        var  info  =  new  ilib.LocaleInfo("ar-MA");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}





//test  casess  for  ar-OM
function  testLocaleInfoGetDecimalSeparatorfor_ar_OM()  {
        var  info  =  new  ilib.LocaleInfo("ar-OM");        
        assertNotNull(info);
        assertEquals("٫",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ar_OM()  {
        var  info  =  new  ilib.LocaleInfo("ar-OM");        
        assertNotNull(info);

        assertEquals("٬",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ar_OM()  {
        var  info  =  new  ilib.LocaleInfo("ar-OM");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ar_OM()  {
        var  info  =  new  ilib.LocaleInfo("ar-OM");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ar_OM()  {
        var  info  =  new  ilib.LocaleInfo("ar-OM");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ar_OM()  {
        var  info  =  new  ilib.LocaleInfo("ar-OM");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ar_OM()  {
        var  info  =  new  ilib.LocaleInfo("ar-OM");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}





//test  casess  for  ar-QA
function  testLocaleInfoGetDecimalSeparatorfor_ar_QA()  {
        var  info  =  new  ilib.LocaleInfo("ar-QA");        
        assertNotNull(info);
        assertEquals("٫",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ar_QA()  {
        var  info  =  new  ilib.LocaleInfo("ar-QA");        
        assertNotNull(info);

        assertEquals("٬",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ar_QA()  {
        var  info  =  new  ilib.LocaleInfo("ar-QA");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ar_QA()  {
        var  info  =  new  ilib.LocaleInfo("ar-QA");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ar_QA()  {
        var  info  =  new  ilib.LocaleInfo("ar-QA");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ar_QA()  {
        var  info  =  new  ilib.LocaleInfo("ar-QA");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ar_QA()  {
        var  info  =  new  ilib.LocaleInfo("ar-QA");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}





//test  casess  for  ar-SA
function  testLocaleInfoGetDecimalSeparatorfor_ar_SA()  {
        var  info  =  new  ilib.LocaleInfo("ar-SA");        
        assertNotNull(info);
        assertEquals("٫",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ar_SA()  {
        var  info  =  new  ilib.LocaleInfo("ar-SA");        
        assertNotNull(info);

        assertEquals("٬",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ar_SA()  {
        var  info  =  new  ilib.LocaleInfo("ar-SA");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ar_SA()  {
        var  info  =  new  ilib.LocaleInfo("ar-SA");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ar_SA()  {
        var  info  =  new  ilib.LocaleInfo("ar-SA");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ar_SA()  {
        var  info  =  new  ilib.LocaleInfo("ar-SA");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ar_SA()  {
        var  info  =  new  ilib.LocaleInfo("ar-SA");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}





//test  casess  for  ar-SD
function  testLocaleInfoGetDecimalSeparatorfor_ar_SD()  {
        var  info  =  new  ilib.LocaleInfo("ar-SD");        
        assertNotNull(info);
        assertEquals("٫",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ar_SD()  {
        var  info  =  new  ilib.LocaleInfo("ar-SD");        
        assertNotNull(info);

        assertEquals("٬",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ar_SD()  {
        var  info  =  new  ilib.LocaleInfo("ar-SD");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ar_SD()  {
        var  info  =  new  ilib.LocaleInfo("ar-SD");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ar_SD()  {
        var  info  =  new  ilib.LocaleInfo("ar-SD");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ar_SD()  {
        var  info  =  new  ilib.LocaleInfo("ar-SD");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ar_SD()  {
        var  info  =  new  ilib.LocaleInfo("ar-SD");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}





//test  casess  for  ar-SY
function  testLocaleInfoGetDecimalSeparatorfor_ar_SY()  {
        var  info  =  new  ilib.LocaleInfo("ar-SY");        
        assertNotNull(info);
        assertEquals("٫",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ar_SY()  {
        var  info  =  new  ilib.LocaleInfo("ar-SY");        
        assertNotNull(info);

        assertEquals("٬",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ar_SY()  {
        var  info  =  new  ilib.LocaleInfo("ar-SY");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ar_SY()  {
        var  info  =  new  ilib.LocaleInfo("ar-SY");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ar_SY()  {
        var  info  =  new  ilib.LocaleInfo("ar-SY");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ar_SY()  {
        var  info  =  new  ilib.LocaleInfo("ar-SY");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ar_SY()  {
        var  info  =  new  ilib.LocaleInfo("ar-SY");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

//test  cases  for  ar-TN
function  testLocaleInfoGetDecimalSeparatorfor_ar_TN()  {
        var  info  =  new  ilib.LocaleInfo("ar-TN");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ar_TN()  {
        var  info  =  new  ilib.LocaleInfo("ar-TN");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ar_TN()  {
        var  info  =  new  ilib.LocaleInfo("ar-TN");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ar_TN()  {
        var  info  =  new  ilib.LocaleInfo("ar-TN");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ar_TN()  {
        var  info  =  new  ilib.LocaleInfo("ar-TN");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ar_TN()  {
        var  info  =  new  ilib.LocaleInfo("ar-TN");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ar_TN()  {
        var  info  =  new  ilib.LocaleInfo("ar-TN");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}





//test  casess  for  ar-YE
function  testLocaleInfoGetDecimalSeparatorfor_ar_YE()  {
        var  info  =  new  ilib.LocaleInfo("ar-YE");        
        assertNotNull(info);
        assertEquals("٫",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_ar_YE()  {
        var  info  =  new  ilib.LocaleInfo("ar-YE");        
        assertNotNull(info);

        assertEquals("٬",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_ar_YE()  {
        var  info  =  new  ilib.LocaleInfo("ar-YE");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_ar_YE()  {
        var  info  =  new  ilib.LocaleInfo("ar-YE");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_ar_YE()  {
        var  info  =  new  ilib.LocaleInfo("ar-YE");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_ar_YE()  {
        var  info  =  new  ilib.LocaleInfo("ar-YE");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_ar_YE()  {
        var  info  =  new  ilib.LocaleInfo("ar-YE");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  zh-SG-Hans

function  testLocaleInfoGetDecimalSeparatorfor_zh_SG_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-SG-Hans");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_zh_SG_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-SG-Hans");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_zh_SG_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-SG-Hans");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_zh_SG_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-SG-Hans");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_zh_SG_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-SG-Hans");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_zh_SG_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-SG-Hans");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_zh_SG_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-SG-Hans");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}




//test  cases  for  zh-CN-Hans

function  testLocaleInfoGetDecimalSeparatorfor_zh_CN_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-CN-Hans");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_zh_CN_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-CN-Hans");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_zh_CN_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-CN-Hans");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_zh_SG_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-SG-Hans");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_zh_CN_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-CN-Hans");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_zh_CN_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-CN-Hans");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_zh_CN_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-CN-Hans");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}




//test  cases  for  zh-HK-Hans

function  testLocaleInfoGetDecimalSeparatorfor_zh_HK_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-HK-Hans");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_zh_HK_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-HK-Hans");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_zh_HK_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-HK-Hans");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_zh_HK_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-HK-Hans");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_zh_HK_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-HK-Hans");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_zh_HK_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-HK-Hans");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_zh_HK_Hans()  {
        var  info  =  new  ilib.LocaleInfo("zh-HK-Hans");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}





//test  cases  for  zh-MY-Hant

function  testLocaleInfoGetDecimalSeparatorfor_zh_MY_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-MY-Hant");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_zh_MY_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-MY-Hant");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_zh_MY_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-MY-Hant");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_zh_MY_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-MY-Hant");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_zh_MY_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-MY-Hant");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_zh_MY_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-MY-Hant");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_zh_MY_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-MY-Hant");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}




//test  cases  for  zh-TW-Hant

function  testLocaleInfoGetDecimalSeparatorfor_zh_TW_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-TW-Hant");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_zh_TW_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-TW-Hant");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_zh_TW_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-TW-Hant");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_zh_TW_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-TW-Hant");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_zh_TW_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-TW-Hant");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_zh_TW_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-TW-Hant");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_zh_TW_Hant()  {
        var  info  =  new  ilib.LocaleInfo("zh-TW-Hant");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  hr-ME

function  testLocaleInfoGetDecimalSeparatorfor_hr_ME()  {
        var  info  =  new  ilib.LocaleInfo("hr-ME");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_hr_ME()  {
        var  info  =  new  ilib.LocaleInfo("hr-ME");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_hr_ME()  {
        var  info  =  new  ilib.LocaleInfo("hr-ME");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}


function  testLocaleInfogetCurrencyFmt_hr_ME()  {
        var  info  =  new  ilib.LocaleInfo("hr-ME");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_hr_ME()  {
        var  info  =  new  ilib.LocaleInfo("hr-ME");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_hr_ME()  {
        var  info  =  new  ilib.LocaleInfo("hr-ME");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_hr_ME()  {
        var  info  =  new  ilib.LocaleInfo("hr-ME");        
        assertNotNull(info);


        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  da-DK
function  testLocaleInfoGetDecimalSeparatorfor_da_Dk()  {
        var  info  =  new  ilib.LocaleInfo("da-DK");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_da_Dk()  {
        var  info  =  new  ilib.LocaleInfo("da-DK");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_da_Dk()  {
        var  info  =  new  ilib.LocaleInfo("da-DK");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_da_Dk()  {
        var  info  =  new  ilib.LocaleInfo("da-DK");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}
function  testLocaleInfoGetPrimaryGroupingDigits_da_Dk()  {
        var  info  =  new  ilib.LocaleInfo("da-DK");        
        assertNotNull(info);


        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_da_Dk()  {
        var  info  =  new  ilib.LocaleInfo("da-DK");        
        assertNotNull(info);


        assertEquals(0,  info.getSecondaryGroupingDigits());
}


function  testLocaleInfoRoundingMode_da_Dk()  {
        var  info  =  new  ilib.LocaleInfo("da-DK");        
        assertNotNull(info);


        assertEquals("halfdown",  info.getRoundingMode());

}




//test  cases  for  nl-BE

function  testLocaleInfoGetDecimalSeparatorfor_nl_BE()  {
        var  info  =  new  ilib.LocaleInfo("nl-BE");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_nl_BE()  {
        var  info  =  new  ilib.LocaleInfo("nl-BE");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_nl_BE()  {
        var  info  =  new  ilib.LocaleInfo("nl-BE");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_nl_BE()  {
        var  info  =  new  ilib.LocaleInfo("nl-BE");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_nl_BE()  {
        var  info  =  new  ilib.LocaleInfo("nl-BE");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_nl_BE()  {
        var  info  =  new  ilib.LocaleInfo("nl-BE");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_nl_BE()  {
        var  info  =  new  ilib.LocaleInfo("nl-BE");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}




//test  cases  for  nl-NL


function  testLocaleInfoGetDecimalSeparatorfor_nl_NL()  {
        var  info  =  new  ilib.LocaleInfo("nl-NL");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_nl_NL()  {
        var  info  =  new  ilib.LocaleInfo("nl-NL");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_nl_NL()  {
        var  info  =  new  ilib.LocaleInfo("nl-NL");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_nl_NL()  {
        var  info  =  new  ilib.LocaleInfo("nl-NL");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_nl_NL()  {
        var  info  =  new  ilib.LocaleInfo("nl-NL");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_nl_NL()  {
        var  info  =  new  ilib.LocaleInfo("nl-NL");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_nl_NL()  {
        var  info  =  new  ilib.LocaleInfo("nl-NL");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

//test  cases  for  en-AU  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_AU()  {
        var  info  =  new  ilib.LocaleInfo("en-AU");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_AU()  {
        var  info  =  new  ilib.LocaleInfo("en-AU");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_AU()  {
        var  info  =  new  ilib.LocaleInfo("en-AU");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_GB()  {
        var  info  =  new  ilib.LocaleInfo("en-GB");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_en_AU()  {

        var  info  =  new  ilib.LocaleInfo("en-AU");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_AU()  {
        var  info  =  new  ilib.LocaleInfo("en-AU");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_AU()  {
        var  info  =  new  ilib.LocaleInfo("en-AU");        

        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  en-CA  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_CA()  {
        var  info  =  new  ilib.LocaleInfo("en-CA");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_CA()  {
        var  info  =  new  ilib.LocaleInfo("en-CA");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_CA()  {
        var  info  =  new  ilib.LocaleInfo("en-CA");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_CA()  {
        var  info  =  new  ilib.LocaleInfo("en-CA");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}
function  testLocaleInfoGetPrimaryGroupingDigits_en_CA()  {
        var  info  =  new  ilib.LocaleInfo("en-CA");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_CA()  {
        var  info  =  new  ilib.LocaleInfo("en-CA");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_CA()  {
        var  info  =  new  ilib.LocaleInfo("en-CA");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  en-ET  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_ET()  {
        var  info  =  new  ilib.LocaleInfo("en-ET");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_ET()  {
        var  info  =  new  ilib.LocaleInfo("en-ET");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_ET()  {
        var  info  =  new  ilib.LocaleInfo("en-ET");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_ET()  {
        var  info  =  new  ilib.LocaleInfo("en-ET");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}
function  testLocaleInfoGetPrimaryGroupingDigits_en_ET()  {
        var  info  =  new  ilib.LocaleInfo("en-ET");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_ET()  {
        var  info  =  new  ilib.LocaleInfo("en-ET");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_ET()  {
        var  info  =  new  ilib.LocaleInfo("en-ET");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

//test  cases  for  en-GB  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_GB()  {
        var  info  =  new  ilib.LocaleInfo("en-GB");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_GB()  {
        var  info  =  new  ilib.LocaleInfo("en-GB");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_GB()  {
        var  info  =  new  ilib.LocaleInfo("en-GB");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_GB()  {
        var  info  =  new  ilib.LocaleInfo("en-GB");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_en_GB()  {

        var  info  =  new  ilib.LocaleInfo("en-GB");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_GB()  {
        var  info  =  new  ilib.LocaleInfo("en-GB");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_GB()  {
        var  info  =  new  ilib.LocaleInfo("en-GB");        

        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  en-GH  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_GH()  {
        var  info  =  new  ilib.LocaleInfo("en-GH");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_GH()  {
        var  info  =  new  ilib.LocaleInfo("en-GH");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_GH()  {
        var  info  =  new  ilib.LocaleInfo("en-GH");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_GH()  {
        var  info  =  new  ilib.LocaleInfo("en-GH");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_en_GH()  {
        var  info  =  new  ilib.LocaleInfo("en-GH");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_GH()  {
        var  info  =  new  ilib.LocaleInfo("en-GH");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_GH()  {
        var  info  =  new  ilib.LocaleInfo("en-GH");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}




//test  cases  for  en-GM  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_GM()  {
        var  info  =  new  ilib.LocaleInfo("en-GM");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_GM()  {
        var  info  =  new  ilib.LocaleInfo("en-GM");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_GM()  {
        var  info  =  new  ilib.LocaleInfo("en-GM");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_GM()  {
        var  info  =  new  ilib.LocaleInfo("en-GM");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}


function  testLocaleInfoGetPrimaryGroupingDigits_en_GM()  {
        var  info  =  new  ilib.LocaleInfo("en-GM");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_GM()  {
        var  info  =  new  ilib.LocaleInfo("en-GM");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_GM()  {
        var  info  =  new  ilib.LocaleInfo("en-GM");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}




//test  cases  for  en-HK  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_HK()  {
        var  info  =  new  ilib.LocaleInfo("en-HK");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_HK()  {
        var  info  =  new  ilib.LocaleInfo("en-HK");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_HK()  {
        var  info  =  new  ilib.LocaleInfo("en-HK");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_HK()  {
        var  info  =  new  ilib.LocaleInfo("en-HK");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_en_HK()  {
        var  info  =  new  ilib.LocaleInfo("en-HK");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_HK()  {
        var  info  =  new  ilib.LocaleInfo("en-HK");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_HK()  {
        var  info  =  new  ilib.LocaleInfo("en-HK");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}




//test  cases  for  en-IN  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_IN()  {
        var  info  =  new  ilib.LocaleInfo("en-IN");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_IN()  {
        var  info  =  new  ilib.LocaleInfo("en-IN");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_IN()  {
        var  info  =  new  ilib.LocaleInfo("en-IN");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_IN()  {
        var  info  =  new  ilib.LocaleInfo("en-IN");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_en_IN()  {
        var  info  =  new  ilib.LocaleInfo("en-IN");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_IN()  {
        var  info  =  new  ilib.LocaleInfo("en-IN");        
        assertNotNull(info);

        assertEquals(2,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_IN()  {
        var  info  =  new  ilib.LocaleInfo("en-IN");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  en-IE  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_IE()  {
        var  info  =  new  ilib.LocaleInfo("en-IE");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_IE()  {
        var  info  =  new  ilib.LocaleInfo("en-IE");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_IE()  {
        var  info  =  new  ilib.LocaleInfo("en-IE");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_IE()  {
        var  info  =  new  ilib.LocaleInfo("en-IE");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_en_IE()  {
        var  info  =  new  ilib.LocaleInfo("en-IE");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_IE()  {
        var  info  =  new  ilib.LocaleInfo("en-IE");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_IE()  {
        var  info  =  new  ilib.LocaleInfo("en-IE");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  en-KE  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_KE()  {
        var  info  =  new  ilib.LocaleInfo("en-KE");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_KE()  {
        var  info  =  new  ilib.LocaleInfo("en-KE");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_KE()  {
        var  info  =  new  ilib.LocaleInfo("en-KE");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_KE()  {
        var  info  =  new  ilib.LocaleInfo("en-KE");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_en_IE()  {
        var  info  =  new  ilib.LocaleInfo("en-IE");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_KE()  {
        var  info  =  new  ilib.LocaleInfo("en-KE");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_KE()  {
        var  info  =  new  ilib.LocaleInfo("en-KE");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  en-LR  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_LR()  {
        var  info  =  new  ilib.LocaleInfo("en-LR");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_LR()  {
        var  info  =  new  ilib.LocaleInfo("en-LR");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_LR()  {
        var  info  =  new  ilib.LocaleInfo("en-LR");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_LR()  {
        var  info  =  new  ilib.LocaleInfo("en-LR");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_en_LR()  {
        var  info  =  new  ilib.LocaleInfo("en-LR");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_LR()  {
        var  info  =  new  ilib.LocaleInfo("en-LR");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_LR()  {
        var  info  =  new  ilib.LocaleInfo("en-LR");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  en-MW  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_MW()  {
        var  info  =  new  ilib.LocaleInfo("en-MW");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_MW()  {
        var  info  =  new  ilib.LocaleInfo("en-MW");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_MW()  {
        var  info  =  new  ilib.LocaleInfo("en-MW");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_MW()  {
        var  info  =  new  ilib.LocaleInfo("en-MW");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_en_MW()  {
        var  info  =  new  ilib.LocaleInfo("en-MW");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_MW()  {
        var  info  =  new  ilib.LocaleInfo("en-MW");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_MW()  {
        var  info  =  new  ilib.LocaleInfo("en-MW");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  en-MY  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_MY()  {
        var  info  =  new  ilib.LocaleInfo("en-MY");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_MY()  {
        var  info  =  new  ilib.LocaleInfo("en-MY");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_MY()  {
        var  info  =  new  ilib.LocaleInfo("en-MY");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_MY()  {
        var  info  =  new  ilib.LocaleInfo("en-MY");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_en_MY()  {
        var  info  =  new  ilib.LocaleInfo("en-MY");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_MY()  {
        var  info  =  new  ilib.LocaleInfo("en-MY");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_MY()  {
        var  info  =  new  ilib.LocaleInfo("en-MY");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  en-NG  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_NG()  {
        var  info  =  new  ilib.LocaleInfo("en-NG");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_NG()  {
        var  info  =  new  ilib.LocaleInfo("en-NG");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_NG()  {
        var  info  =  new  ilib.LocaleInfo("en-NG");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_NG()  {
        var  info  =  new  ilib.LocaleInfo("en-NG");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_en_NG()  {
        var  info  =  new  ilib.LocaleInfo("en-NG");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_NG()  {
        var  info  =  new  ilib.LocaleInfo("en-NG");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_NG()  {
        var  info  =  new  ilib.LocaleInfo("en-NG");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  en-NZ  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_NZ()  {
        var  info  =  new  ilib.LocaleInfo("en-NZ");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_NZ()  {
        var  info  =  new  ilib.LocaleInfo("en-NZ");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_NZ()  {
        var  info  =  new  ilib.LocaleInfo("en-NZ");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_NZ()  {
        var  info  =  new  ilib.LocaleInfo("en-NZ");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_en_NZ()  {
        var  info  =  new  ilib.LocaleInfo("en-NZ");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_NZ()  {
        var  info  =  new  ilib.LocaleInfo("en-NZ");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_NZ()  {
        var  info  =  new  ilib.LocaleInfo("en-NZ");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  en-PH  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_PH()  {
        var  info  =  new  ilib.LocaleInfo("en-PH");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_PH()  {
        var  info  =  new  ilib.LocaleInfo("en-PH");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_PH()  {
        var  info  =  new  ilib.LocaleInfo("en-PH");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_PH()  {
        var  info  =  new  ilib.LocaleInfo("en-PH");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_en_PH()  {
        var  info  =  new  ilib.LocaleInfo("en-PH");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_PH()  {
        var  info  =  new  ilib.LocaleInfo("en-PH");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_PH()  {
        var  info  =  new  ilib.LocaleInfo("en-PH");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  en-PK  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_PK()  {
        var  info  =  new  ilib.LocaleInfo("en-PK");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_PK()  {
        var  info  =  new  ilib.LocaleInfo("en-PK");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_PK()  {
        var  info  =  new  ilib.LocaleInfo("en-PK");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_PK()  {
        var  info  =  new  ilib.LocaleInfo("en-PK");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_en_PK()  {
        var  info  =  new  ilib.LocaleInfo("en-PK");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_PK()  {
        var  info  =  new  ilib.LocaleInfo("en-PK");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_PK()  {
        var  info  =  new  ilib.LocaleInfo("en-PK");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  en-PR  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_PR()  {
        var  info  =  new  ilib.LocaleInfo("en-PR");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_PR()  {
        var  info  =  new  ilib.LocaleInfo("en-PR");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_PR()  {
        var  info  =  new  ilib.LocaleInfo("en-PR");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_PR()  {
        var  info  =  new  ilib.LocaleInfo("en-PR");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_en_PR()  {
        var  info  =  new  ilib.LocaleInfo("en-PR");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_PR()  {
        var  info  =  new  ilib.LocaleInfo("en-PR");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_PR()  {
        var  info  =  new  ilib.LocaleInfo("en-PR");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  en-RW  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_RW()  {
        var  info  =  new  ilib.LocaleInfo("en-RW");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_RW()  {
        var  info  =  new  ilib.LocaleInfo("en-RW");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_RW()  {
        var  info  =  new  ilib.LocaleInfo("en-RW");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_RW()  {
        var  info  =  new  ilib.LocaleInfo("en-RW");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_en_RW()  {
        var  info  =  new  ilib.LocaleInfo("en-RW");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_RW()  {
        var  info  =  new  ilib.LocaleInfo("en-RW");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_RW()  {
        var  info  =  new  ilib.LocaleInfo("en-RW");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  en-SG  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_SG()  {
        var  info  =  new  ilib.LocaleInfo("en-SG");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_SG()  {
        var  info  =  new  ilib.LocaleInfo("en-SG");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_SG()  {
        var  info  =  new  ilib.LocaleInfo("en-SG");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_SG()  {
        var  info  =  new  ilib.LocaleInfo("en-SG");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_en_SG()  {
        var  info  =  new  ilib.LocaleInfo("en-SG");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_SG()  {
        var  info  =  new  ilib.LocaleInfo("en-SG");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_SG()  {
        var  info  =  new  ilib.LocaleInfo("en-SG");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  en-SL  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_SL()  {
        var  info  =  new  ilib.LocaleInfo("en-SL");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_SL()  {
        var  info  =  new  ilib.LocaleInfo("en-SL");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_SL()  {
        var  info  =  new  ilib.LocaleInfo("en-SL");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_SL()  {
        var  info  =  new  ilib.LocaleInfo("en-SL");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_en_SL()  {
        var  info  =  new  ilib.LocaleInfo("en-SL");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_SL()  {
        var  info  =  new  ilib.LocaleInfo("en-SL");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_SL()  {
        var  info  =  new  ilib.LocaleInfo("en-SL");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  en-ZA  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_ZA()  {
        var  info  =  new  ilib.LocaleInfo("en-ZA");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_ZA()  {
        var  info  =  new  ilib.LocaleInfo("en-ZA");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_ZA()  {
        var  info  =  new  ilib.LocaleInfo("en-ZA");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_ZA()  {
        var  info  =  new  ilib.LocaleInfo("en-ZA");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_en_ZA()  {
        var  info  =  new  ilib.LocaleInfo("en-ZA");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_ZA()  {
        var  info  =  new  ilib.LocaleInfo("en-ZA");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_ZA()  {
        var  info  =  new  ilib.LocaleInfo("en-ZA");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  en-LK  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_LK()  {
        var  info  =  new  ilib.LocaleInfo("en-LK");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_LK()  {
        var  info  =  new  ilib.LocaleInfo("en-LK");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_LK()  {
        var  info  =  new  ilib.LocaleInfo("en-LK");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_LK()  {
        var  info  =  new  ilib.LocaleInfo("en-LK");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_en_LK()  {
        var  info  =  new  ilib.LocaleInfo("en-LK");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_LK()  {
        var  info  =  new  ilib.LocaleInfo("en-LK");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_LK()  {
        var  info  =  new  ilib.LocaleInfo("en-LK");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  en-TZ  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_TZ()  {
        var  info  =  new  ilib.LocaleInfo("en-TZ");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_TZ()  {
        var  info  =  new  ilib.LocaleInfo("en-TZ");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_TZ()  {
        var  info  =  new  ilib.LocaleInfo("en-TZ");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_TZ()  {
        var  info  =  new  ilib.LocaleInfo("en-TZ");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_en_TZ()  {
        var  info  =  new  ilib.LocaleInfo("en-TZ");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_TZ()  {
        var  info  =  new  ilib.LocaleInfo("en-TZ");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_TZ()  {
        var  info  =  new  ilib.LocaleInfo("en-TZ");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  en-UG  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_UG()  {
        var  info  =  new  ilib.LocaleInfo("en-UG");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_UG()  {
        var  info  =  new  ilib.LocaleInfo("en-UG");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_UG()  {
        var  info  =  new  ilib.LocaleInfo("en-UG");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_UG()  {
        var  info  =  new  ilib.LocaleInfo("en-UG");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_en_UG()  {
        var  info  =  new  ilib.LocaleInfo("en-UG");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_UG()  {
        var  info  =  new  ilib.LocaleInfo("en-UG");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_UG()  {
        var  info  =  new  ilib.LocaleInfo("en-UG");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  en-US  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_US()  {
        var  info  =  new  ilib.LocaleInfo("en-US");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_US()  {
        var  info  =  new  ilib.LocaleInfo("en-US");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_US()  {
        var  info  =  new  ilib.LocaleInfo("en-US");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_US()  {
        var  info  =  new  ilib.LocaleInfo("en-US");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_en_US()  {
        var  info  =  new  ilib.LocaleInfo("en-US");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_US()  {
        var  info  =  new  ilib.LocaleInfo("en-US");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_US()  {
        var  info  =  new  ilib.LocaleInfo("en-US");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  en-ZM  number  format

function  testLocaleInfoGetDecimalSeparatorfor_en_ZM()  {
        var  info  =  new  ilib.LocaleInfo("en-ZM");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_en_ZM()  {
        var  info  =  new  ilib.LocaleInfo("en-ZM");        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_en_ZM()  {
        var  info  =  new  ilib.LocaleInfo("en-ZM");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_en_ZM()  {
        var  info  =  new  ilib.LocaleInfo("en-ZM");        
        assertNotNull(info);

        assertEquals("{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_en_ZM()  {
        var  info  =  new  ilib.LocaleInfo("en-ZM");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_en_ZM()  {
        var  info  =  new  ilib.LocaleInfo("en-ZM");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_en_ZM()  {
        var  info  =  new  ilib.LocaleInfo("en-ZM");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

//test  cases  for  fa-IR

function  testLocaleInfoGetDecimalSeparatorfor_fa_IR()  {
        var  info  =  new  ilib.LocaleInfo("fa-IR");        
        assertNotNull(info);
        assertEquals("٫",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fa_IR()  {
        var  info  =  new  ilib.LocaleInfo("fa-IR");        
        assertNotNull(info);

        assertEquals("٬",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fa_IR()  {
        var  info  =  new  ilib.LocaleInfo("fa-IR");        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_fa_IR()  {
        var  info  =  new  ilib.LocaleInfo("fa-IR");        
        assertNotNull(info);

        assertEquals("‎{s}{n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_fa_IR()  {
        var  info  =  new  ilib.LocaleInfo("fa-IR");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_fa_IR()  {
        var  info  =  new  ilib.LocaleInfo("fa-IR");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_fa_IR()  {
        var  info  =  new  ilib.LocaleInfo("fa-IR");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}

//test  cases  for  fr-BE

function  testLocaleInfoGetDecimalSeparatorfor_fr_BE()  {
        var  info  =  new  ilib.LocaleInfo("fr-BE");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_BE()  {
        var  info  =  new  ilib.LocaleInfo("fr-BE");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fr_BE()  {
        var  info  =  new  ilib.LocaleInfo("fr-BE");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_fr_BE()  {
        var  info  =  new  ilib.LocaleInfo("fr-BE");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_fr_BE()  {
        var  info  =  new  ilib.LocaleInfo("fr-BE");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_fr_BE()  {
        var  info  =  new  ilib.LocaleInfo("fr-BE");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_fr_BE()  {
        var  info  =  new  ilib.LocaleInfo("fr-BE");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  fr-BF

function  testLocaleInfoGetDecimalSeparatorfor_fr_BF()  {
        var  info  =  new  ilib.LocaleInfo("fr-BF");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_BF()  {
        var  info  =  new  ilib.LocaleInfo("fr-BF");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());

}

function  testLocaleInfoGetPercentageFormat_fr_BF()  {
        var  info  =  new  ilib.LocaleInfo("fr-BF");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_fr_BF()  {
        var  info  =  new  ilib.LocaleInfo("fr-BF");        

        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_fr_BF()  {
        var  info  =  new  ilib.LocaleInfo("fr-BF");        
        assertNotNull(info);


        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_fr_BF()  {
        var  info  =  new  ilib.LocaleInfo("fr-BF");        
        assertNotNull(info);


        assertEquals(0,  info.getSecondaryGroupingDigits());
}


function  testLocaleInfoRoundingMode_fr_BF()  {
        var  info  =  new  ilib.LocaleInfo("fr-BF");        
        assertNotNull(info);


        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  fr-BJ

function  testLocaleInfoGetDecimalSeparatorfor_fr_BJ()  {
        var  info  =  new  ilib.LocaleInfo("fr-BJ");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_BJ()  {
        var  info  =  new  ilib.LocaleInfo("fr-BJ");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fr_BJ()  {
        var  info  =  new  ilib.LocaleInfo("fr-BJ");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_fr_BJ()  {
        var  info  =  new  ilib.LocaleInfo("fr-BJ");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_fr_BJ()  {
        var  info  =  new  ilib.LocaleInfo("fr-BJ");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_fr_BJ()  {
        var  info  =  new  ilib.LocaleInfo("fr-BJ");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_fr_BJ()  {
        var  info  =  new  ilib.LocaleInfo("fr-BJ");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  fr-CA

function  testLocaleInfoGetDecimalSeparatorfor_fr_CA()  {
        var  info  =  new  ilib.LocaleInfo("fr-CA");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_CA()  {
        var  info  =  new  ilib.LocaleInfo("fr-CA");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fr_CA()  {
        var  info  =  new  ilib.LocaleInfo("fr-CA");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_fr_CA()  {
        var  info  =  new  ilib.LocaleInfo("fr-CA");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_fr_CA()  {
        var  info  =  new  ilib.LocaleInfo("fr-CA");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_fr_CA()  {
        var  info  =  new  ilib.LocaleInfo("fr-CA");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_fr_CA()  {
        var  info  =  new  ilib.LocaleInfo("fr-CA");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  fr-CD

function  testLocaleInfoGetDecimalSeparatorfor_fr_CD()  {
        var  info  =  new  ilib.LocaleInfo("fr-CD");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_CD()  {
        var  info  =  new  ilib.LocaleInfo("fr-CD");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fr_CD()  {
        var  info  =  new  ilib.LocaleInfo("fr-CD");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_fr_CD()  {
        var  info  =  new  ilib.LocaleInfo("fr-CD");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_fr_CD()  {
        var  info  =  new  ilib.LocaleInfo("fr-CD");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_fr_CD()  {
        var  info  =  new  ilib.LocaleInfo("fr-CD");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_fr_CD()  {
        var  info  =  new  ilib.LocaleInfo("fr-CD");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  fr-CG

function  testLocaleInfoGetDecimalSeparatorfor_fr_CG()  {
        var  info  =  new  ilib.LocaleInfo("fr-CG");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_CG()  {
        var  info  =  new  ilib.LocaleInfo("fr-CG");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fr_CG()  {
        var  info  =  new  ilib.LocaleInfo("fr-CG");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_fr_CG()  {
        var  info  =  new  ilib.LocaleInfo("fr-CG");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_fr_CG()  {
        var  info  =  new  ilib.LocaleInfo("fr-CG");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_fr_CG()  {
        var  info  =  new  ilib.LocaleInfo("fr-CG");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_fr_CG()  {
        var  info  =  new  ilib.LocaleInfo("fr-CG");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  fr-CH

function  testLocaleInfoGetDecimalSeparatorfor_fr_CH()  {
        var  info  =  new  ilib.LocaleInfo("fr-CH");        
        assertNotNull(info);
        assertEquals(".",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_CH()  {
        var  info  =  new  ilib.LocaleInfo("fr-CH");        
        assertNotNull(info);

        assertEquals("'",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fr_CH()  {
        var  info  =  new  ilib.LocaleInfo("fr-CH");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_fr_CH()  {
        var  info  =  new  ilib.LocaleInfo("fr-CH");        
        assertNotNull(info);

        assertEquals("{s} {n}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_fr_CH()  {
        var  info  =  new  ilib.LocaleInfo("fr-CH");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_fr_CH()  {
        var  info  =  new  ilib.LocaleInfo("fr-CH");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_fr_CH()  {
        var  info  =  new  ilib.LocaleInfo("fr-CH");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  fr-CF

function  testLocaleInfoGetDecimalSeparatorfor_fr_CF()  {
        var  info  =  new  ilib.LocaleInfo("fr-CF");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_CF()  {
        var  info  =  new  ilib.LocaleInfo("fr-CF");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fr_CF()  {
        var  info  =  new  ilib.LocaleInfo("fr-CF");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_fr_CF()  {
        var  info  =  new  ilib.LocaleInfo("fr-CF");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_fr_CF()  {
        var  info  =  new  ilib.LocaleInfo("fr-CF");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_fr_CF()  {
        var  info  =  new  ilib.LocaleInfo("fr-CF");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_fr_CF()  {
        var  info  =  new  ilib.LocaleInfo("fr-CF");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}




//test  cases  for  fr-CI

function  testLocaleInfoGetDecimalSeparatorfor_fr_CI()  {
        var  info  =  new  ilib.LocaleInfo("fr-CI");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_CI()  {
        var  info  =  new  ilib.LocaleInfo("fr-CI");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fr_CI()  {
        var  info  =  new  ilib.LocaleInfo("fr-CI");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_fr_CI()  {
        var  info  =  new  ilib.LocaleInfo("fr-CI");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_fr_CI()  {
        var  info  =  new  ilib.LocaleInfo("fr-CI");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_fr_CI()  {
        var  info  =  new  ilib.LocaleInfo("fr-CI");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_fr_CI()  {
        var  info  =  new  ilib.LocaleInfo("fr-CI");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  fr-CM

function  testLocaleInfoGetDecimalSeparatorfor_fr_CM()  {
        var  info  =  new  ilib.LocaleInfo("fr-CM");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_CM()  {
        var  info  =  new  ilib.LocaleInfo("fr-CM");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fr_CM()  {
        var  info  =  new  ilib.LocaleInfo("fr-CM");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_fr_CM()  {
        var  info  =  new  ilib.LocaleInfo("fr-CM");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_fr_CM()  {
        var  info  =  new  ilib.LocaleInfo("fr-CM");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_fr_CM()  {
        var  info  =  new  ilib.LocaleInfo("fr-CM");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_fr_CM()  {
        var  info  =  new  ilib.LocaleInfo("fr-CM");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  fr-DZ

function  testLocaleInfoGetDecimalSeparatorfor_fr_DZ()  {
        var  info  =  new  ilib.LocaleInfo("fr-DZ");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_DZ()  {
        var  info  =  new  ilib.LocaleInfo("fr-DZ");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fr_DZ()  {
        var  info  =  new  ilib.LocaleInfo("fr-DZ");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_fr_DZ()  {
        var  info  =  new  ilib.LocaleInfo("fr-DZ");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_fr_DZ()  {
        var  info  =  new  ilib.LocaleInfo("fr-DZ");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_fr_DZ()  {
        var  info  =  new  ilib.LocaleInfo("fr-DZ");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_fr_DZ()  {
        var  info  =  new  ilib.LocaleInfo("fr-DZ");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  fr-DJ


function  testLocaleInfoGetDecimalSeparatorfor_fr_DJ()  {
        var  info  =  new  ilib.LocaleInfo("fr-DJ");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_DJ()  {

        var  info  =  new  ilib.LocaleInfo("fr-DJ");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());

}

function  testLocaleInfoGetPercentageFormat_fr_DJ()  {
        var  info  =  new  ilib.LocaleInfo("fr-DJ");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}


function  testLocaleInfogetCurrencyFmt_fr_DJ()  {
        var  info  =  new  ilib.LocaleInfo("fr-DJ");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}


function  testLocaleInfoGetPrimaryGroupingDigits_fr_DJ()  {
        var  info  =  new  ilib.LocaleInfo("fr-DJ");        
        assertNotNull(info);


        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_fr_DJ()  {
        var  info  =  new  ilib.LocaleInfo("fr-DJ");        
        assertNotNull(info);


        assertEquals(0,  info.getSecondaryGroupingDigits());
}


function  testLocaleInfoRoundingMode_fr_DJ()  {
        var  info  =  new  ilib.LocaleInfo("fr-DJ");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  fr-FR


function  testLocaleInfoGetDecimalSeparatorfor_fr_FR()  {
        var  info  =  new  ilib.LocaleInfo("fr-FR");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_FR()  {
        var  info  =  new  ilib.LocaleInfo("fr-FR");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fr_FR()  {
        var  info  =  new  ilib.LocaleInfo("fr-FR");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}


function  testLocaleInfogetCurrencyFmt_fr_FR()  {
        var  info  =  new  ilib.LocaleInfo("fr-FR");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_fr_FR()  {
        var  info  =  new  ilib.LocaleInfo("fr-FR");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_fr_FR()  {
        var  info  =  new  ilib.LocaleInfo("fr-FR");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_fr_FR()  {
        var  info  =  new  ilib.LocaleInfo("fr-FR");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  fr-GA

function  testLocaleInfoGetDecimalSeparatorfor_fr_GA()  {
        var  info  =  new  ilib.LocaleInfo("fr-GA");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_GA()  {
        var  info  =  new  ilib.LocaleInfo("fr-GA");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fr_GA()  {
        var  info  =  new  ilib.LocaleInfo("fr-GA");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_fr_GA()  {
        var  info  =  new  ilib.LocaleInfo("fr-GA");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_fr_GA()  {
        var  info  =  new  ilib.LocaleInfo("fr-GA");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_fr_GA()  {
        var  info  =  new  ilib.LocaleInfo("fr-GA");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_fr_GA()  {
        var  info  =  new  ilib.LocaleInfo("fr-GA");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  fr-GN

function  testLocaleInfoGetDecimalSeparatorfor_fr_GN()  {
        var  info  =  new  ilib.LocaleInfo("fr-GN");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_GN()  {
        var  info  =  new  ilib.LocaleInfo("fr-GN");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fr_GN()  {
        var  info  =  new  ilib.LocaleInfo("fr-GN");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_fr_GN()  {
        var  info  =  new  ilib.LocaleInfo("fr-GN");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_fr_GN()  {
        var  info  =  new  ilib.LocaleInfo("fr-GN");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_fr_GN()  {
        var  info  =  new  ilib.LocaleInfo("fr-GN");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_fr_GN()  {
        var  info  =  new  ilib.LocaleInfo("fr-GN");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  fr-LB

function  testLocaleInfoGetDecimalSeparatorfor_fr_LB()  {
        var  info  =  new  ilib.LocaleInfo("fr-LB");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_LB()  {
        var  info  =  new  ilib.LocaleInfo("fr-LB");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fr_LB()  {
        var  info  =  new  ilib.LocaleInfo("fr-LB");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}


function  testLocaleInfogetCurrencyFmt_fr_LB()  {
        var  info  =  new  ilib.LocaleInfo("fr-LB");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());

}

function  testLocaleInfoGetPrimaryGroupingDigits_fr_LB()  {
        var  info  =  new  ilib.LocaleInfo("fr-LB");        

        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}


function  testLocaleInfoGetSecondaryGroupingDigits_fr_LB()  {
        var  info  =  new  ilib.LocaleInfo("fr-LB");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}


function  testLocaleInfoRoundingMode_fr_LB()  {
        var  info  =  new  ilib.LocaleInfo("fr-LB");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  fr-LU

function  testLocaleInfoGetDecimalSeparatorfor_fr_LU()  {
        var  info  =  new  ilib.LocaleInfo("fr-LU");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_LU()  {
        var  info  =  new  ilib.LocaleInfo("fr-LU");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fr_LU()  {
        var  info  =  new  ilib.LocaleInfo("fr-LU");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_fr_LU()  {
        var  info  =  new  ilib.LocaleInfo("fr-LU");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_fr_LU()  {
        var  info  =  new  ilib.LocaleInfo("fr-LU");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_fr_LU()  {
        var  info  =  new  ilib.LocaleInfo("fr-LU");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_fr_LU()  {
        var  info  =  new  ilib.LocaleInfo("fr-LU");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  fr-MG

function  testLocaleInfoGetDecimalSeparatorfor_fr_MG()  {
        var  info  =  new  ilib.LocaleInfo("fr-MG");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_MG()  {
        var  info  =  new  ilib.LocaleInfo("fr-MG");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fr_MG()  {
        var  info  =  new  ilib.LocaleInfo("fr-MG");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_fr_MG()  {
        var  info  =  new  ilib.LocaleInfo("fr-MG");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_fr_MG()  {
        var  info  =  new  ilib.LocaleInfo("fr-MG");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_fr_MG()  {
        var  info  =  new  ilib.LocaleInfo("fr-MG");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_fr_MG()  {
        var  info  =  new  ilib.LocaleInfo("fr-MG");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}




//test  cases  for  fr-ML

function  testLocaleInfoGetDecimalSeparatorfor_fr_ML()  {
        var  info  =  new  ilib.LocaleInfo("fr-ML");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_ML()  {
        var  info  =  new  ilib.LocaleInfo("fr-ML");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fr_ML()  {
        var  info  =  new  ilib.LocaleInfo("fr-ML");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_fr_ML()  {
        var  info  =  new  ilib.LocaleInfo("fr-ML");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_fr_ML()  {
        var  info  =  new  ilib.LocaleInfo("fr-ML");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_fr_ML()  {
        var  info  =  new  ilib.LocaleInfo("fr-ML");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_fr_ML()  {
        var  info  =  new  ilib.LocaleInfo("fr-ML");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}



//test  cases  for  fr-RW

function  testLocaleInfoGetDecimalSeparatorfor_fr_RW()  {
        var  info  =  new  ilib.LocaleInfo("fr-RW");        
        assertNotNull(info);

        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_RW()  {
        var  info  =  new  ilib.LocaleInfo("fr-RW");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());

}

function  testLocaleInfoGetPercentageFormat_fr_RW()  {
        var  info  =  new  ilib.LocaleInfo("fr-RW");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());

}

function  testLocaleInfogetCurrencyFmt_fr_RW()  {
        var  info  =  new  ilib.LocaleInfo("fr-RW");        

        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}


function  testLocaleInfoGetPrimaryGroupingDigits_fr_RW()  {
        var  info  =  new  ilib.LocaleInfo("fr-RW");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}


function  testLocaleInfoGetSecondaryGroupingDigits_fr_RW()  {
        var  info  =  new  ilib.LocaleInfo("fr-RW");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}


function  testLocaleInfoRoundingMode_fr_RW()  {
        var  info  =  new  ilib.LocaleInfo("fr-RW");        
        assertNotNull(info);


        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  fr-SN

function  testLocaleInfoGetDecimalSeparatorfor_fr_SN()  {
        var  info  =  new  ilib.LocaleInfo("fr-SN");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_SN()  {
        var  info  =  new  ilib.LocaleInfo("fr-SN");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fr_SN()  {
        var  info  =  new  ilib.LocaleInfo("fr-SN");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_fr_SN()  {
        var  info  =  new  ilib.LocaleInfo("fr-SN");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_fr_SN()  {
        var  info  =  new  ilib.LocaleInfo("fr-SN");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_fr_SN()  {
        var  info  =  new  ilib.LocaleInfo("fr-SN");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_fr_SN()  {
        var  info  =  new  ilib.LocaleInfo("fr-SN");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}


//test  cases  for  fr-TG

function  testLocaleInfoGetDecimalSeparatorfor_fr_TG()  {
        var  info  =  new  ilib.LocaleInfo("fr-TG");        
        assertNotNull(info);

        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_TG()  {
        var  info  =  new  ilib.LocaleInfo("fr-TG");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());

}

function  testLocaleInfoGetPercentageFormat_fr_TG()  {
        var  info  =  new  ilib.LocaleInfo("fr-TG");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());

}

function  testLocaleInfogetCurrencyFmt_fr_TG()  {
        var  info  =  new  ilib.LocaleInfo("fr-TG");        

        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}


function  testLocaleInfoGetPrimaryGroupingDigits_fr_TG()  {
        var  info  =  new  ilib.LocaleInfo("fr-TG");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}


function  testLocaleInfoGetSecondaryGroupingDigits_fr_TG()  {
        var  info  =  new  ilib.LocaleInfo("fr-TG");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}


function  testLocaleInfoRoundingMode_fr_TG()  {
        var  info  =  new  ilib.LocaleInfo("fr-TG");        
        assertNotNull(info);


        assertEquals("halfdown",  info.getRoundingMode());
}




//test  cases  for  fr-YT

function  testLocaleInfoGetDecimalSeparatorfor_fr_YT()  {
        var  info  =  new  ilib.LocaleInfo("fr-YT");        
        assertNotNull(info);
        assertEquals(",",info.getDecimalSeparator());
}

function  testLocaleInfoGetGroupingSeparatorfor_fr_YT()  {
        var  info  =  new  ilib.LocaleInfo("fr-YT");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetPercentageFormat_fr_YT()  {
        var  info  =  new  ilib.LocaleInfo("fr-YT");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfogetCurrencyFmt_fr_YT()  {
        var  info  =  new  ilib.LocaleInfo("fr-YT");        
        assertNotNull(info);

        assertEquals("{n} {s}",  info.getCurrencyFmt());
}

function  testLocaleInfoGetPrimaryGroupingDigits_fr_YT()  {
        var  info  =  new  ilib.LocaleInfo("fr-YT");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetSecondaryGroupingDigits_fr_YT()  {
        var  info  =  new  ilib.LocaleInfo("fr-YT");        
        assertNotNull(info);

        assertEquals(0,  info.getSecondaryGroupingDigits());
}

function  testLocaleInfoRoundingMode_fr_YT()  {
        var  info  =  new  ilib.LocaleInfo("fr-YT");        
        assertNotNull(info);

        assertEquals("halfdown",  info.getRoundingMode());
}










//************************************************end  04-JUN-2013**********************************************************
function  testLocaleInfoGetGroupingSeparator1()  {
        var  info  =  new  ilib.LocaleInfo();        
        assertNotNull(info);

        assertEquals(",",  info.getGroupingSeparator());
}

function  testLocaleInfoGetGroupingSeparator2()  {
        var  info  =  new  ilib.LocaleInfo("de-DE");        
        assertNotNull(info);

        assertEquals(".",  info.getGroupingSeparator());
}

function  testLocaleInfoGetGroupingSeparator3()  {
        var  info  =  new  ilib.LocaleInfo("fr-FR");        
        assertNotNull(info);

        assertEquals(" ",  info.getGroupingSeparator());
}

function  testLocaleInfoGetGroupingDigits1()  {
        var  info  =  new  ilib.LocaleInfo();        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetGroupingDigits2()  {
        var  info  =  new  ilib.LocaleInfo("de-DE");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}

function  testLocaleInfoGetGroupingDigits3()  {
        var  info  =  new  ilib.LocaleInfo("zh-CN");        
        assertNotNull(info);

        assertEquals(3,  info.getPrimaryGroupingDigits());
}


function  testLocaleInfoGetPercentageFormat2()  {
        var  info  =  new  ilib.LocaleInfo("fr-FR");        
        assertNotNull(info);

        assertEquals("{n} %",  info.getPercentageFormat());
}

function  testLocaleInfoGetPercentageFormat1()  {
        var  info  =  new  ilib.LocaleInfo();        
        assertNotNull(info);

        assertEquals("{n}%",  info.getPercentageFormat());
}


function  testLocaleInfoGetPercentageSymbol1()  {
        var  info  =  new  ilib.LocaleInfo();        
        assertNotNull(info);

        assertEquals("%",  info.getPercentageSymbol());
}

function  testLocaleInfoGetPercentageSymbol2()  {
        var  info  =  new  ilib.LocaleInfo("fr-FR");        
        assertNotNull(info);

        assertEquals("%",  info.getPercentageSymbol());
}

function  mockLoader(paths,  sync,  params,  callback)  {
var  data  =  [];
data.push(ilib.data.localeinfo);  //  for  the  generic,  shared  stuff
paths.shift();
paths.forEach(function  (path)  {
data.push((path.indexOf('mm')  ===  -1)  ?  undefined  :  {
"clock":  "24",
"currencyFormats":  {
"common":  "common  {s} {n}",
"iso":  "iso  {s} {n}"
},
"units":  "metric",
"calendar":  "hebrew",
"firstDayOfWeek":  4,
"currency":  "JPY",
"timezone":  "Asia/Tokyo",
"numfmt":  {
"decimalChar":  ".",
"groupChar":  ",",
"groupSize":  4,
"pctFmt":  "{n} %",
"pctChar":  "%"
},
"locale":  "zxx-XX"
});
});
if  (typeof(callback)  !==  'undefined')  {
callback.call(this,  data);	
}
return  data;
};

function  testLocaleInfoLoadMissingDataAsynch()  {
var  callbackCalled  =  false;
ilib.setLoaderCallback(mockLoader);
ilib.LocaleInfo.cache  =  {};  //  empty  the  cache
        var  info  =  new  ilib.LocaleInfo("mm-MM",  {
        sync:  false,
        onLoad:  function  (li)  {
              assertNotNull(li);

            //  assertEquals("{s} {n}",  li.getCurrencyFmts().iso);
              assertEquals(4,  li.getFirstDayOfWeek());
              assertEquals("%",  li.getPercentageSymbol());
              callbackCalled  =  true;
        }
        });
        assertNotNull(info);
        assertTrue(callbackCalled);
}

function  testLocaleInfoLoadMissingDataSync()  {
ilib.LocaleInfo.cache  =  {};  //  empty  the  cache
ilib.setLoaderCallback(undefined);
        var  info  =  new  ilib.LocaleInfo("mm-MM");
        assertNotNull(info);

       // assertEquals("{s} {n}",  info.getCurrencyFmts().iso);
        assertEquals(4,  info.getFirstDayOfWeek());
        assertEquals("%",  info.getPercentageSymbol());
}

function  testLocaleInfoLoadMissingDataAsynchNoData()  {
var  callbackCalled  =  false;
ilib.LocaleInfo.cache  =  {};  //  empty  the  cache
ilib.setLoaderCallback(mockLoader);
        var  info  =  new  ilib.LocaleInfo("qq-QQ",  {
        sync:  false,
        onLoad:  function  (li)  {
              assertNotUndefined(li);
              callbackCalled  =  true;
              //  should  return  the  shared  data  only
             // assertEquals("{s} {n}",  li.getCurrencyFmts().iso);
              assertEquals(0,  li.getFirstDayOfWeek());
              assertEquals("%",  li.getPercentageSymbol());
        }
        });
        assertNotNull(info);
        assertTrue(callbackCalled);
}

function  testLocaleInfoLoadMissingDataSyncNoData()  {
ilib.LocaleInfo.cache  =  {};  //  empty  the  cache
        var  li  =  new  ilib.LocaleInfo("qq-QQ");
        ilib.setLoaderCallback(undefined);
        assertNotUndefined(li);
        //  should  return  the  shared  data  only
        //assertEquals("{s} {n}",  li.getCurrencyFmts().iso);
        assertEquals(0,  li.getFirstDayOfWeek());
        assertEquals("%",  li.getPercentageSymbol());
}

function  testLocaleInfoLoadPreassembledDataAsynch()  {
var  callbackCalled  =  false;
ilib.LocaleInfo.cache  =  {};  //  empty  the  cache
ilib.setLoaderCallback(mockLoader);
        var  info  =  new  ilib.LocaleInfo("fr-FR",  {
        sync:  false,
        onLoad:  function  (li)  {
              assertNotUndefined(li);
              callbackCalled  =  true;
              //  should  return  the  shared  data  only
              assertEquals("EUR",  li.getCurrency());
              assertEquals(1,  li.getFirstDayOfWeek());
              assertEquals("FR",  li.info.locale);
              assertEquals("Europe/Paris",  li.getTimeZone());
        }
        });
        assertNotNull(info);
        assertTrue(callbackCalled);
}

//  locale  with  no  script
ilib.data.localeinfo_fr_FR_overseas  =  {
    "currency":  "USD",
    "locale":  "fr-FR-overseas",
    "timezone":  "Pacific/Tahiti"
};

function  testLocaleInfoLoadMissingLocaleParts()  {
ilib.LocaleInfo.cache  =  {};  //  empty  the  cache
var  li  =  new  ilib.LocaleInfo("fr-FR-overseas");
        assertNotUndefined(li);
        assertEquals("USD",  li.getCurrency());
        assertEquals(1,  li.getFirstDayOfWeek());
        assertEquals("fr-FR-overseas",  li.info.locale);
        assertEquals("Pacific/Tahiti",  li.getTimeZone());
}

function  testLocaleInfoGetAllScriptsSingle()  {
var  li  =  new  ilib.LocaleInfo("nl-NL");
        assertNotUndefined(li);
        assertArrayEqualsIgnoringOrder(["Latn"],  li.getAllScripts());
}

function  testLocaleInfoGetAllScriptsMultiple1()  {
var  li  =  new  ilib.LocaleInfo("de-DE");
        assertNotUndefined(li);
        assertArrayEqualsIgnoringOrder(["Latn","Runr"],  li.getAllScripts());
}

function  testLocaleInfoGetAllScriptsMultiple2()  {
var  li  =  new  ilib.LocaleInfo("uz-UZ");
        assertNotUndefined(li);
        assertArrayEqualsIgnoringOrder(["Arab","Cyrl","Latn"],  li.getAllScripts());
}

function  testLocaleInfoGetDefaultScriptSingle()  {
var  li  =  new  ilib.LocaleInfo("nl-NL");
        assertNotUndefined(li);
        assertEquals("Latn",  li.getDefaultScript());
}

function  testLocaleInfoGetDefaultScriptMultiple()  {
var  li  =  new  ilib.LocaleInfo("uz-UZ");
        assertNotUndefined(li);
        assertEquals("Arab",  li.getDefaultScript());
}

function  testLocaleInfoGetScriptSingle()  {
var  li  =  new  ilib.LocaleInfo("nl-NL");
        assertNotUndefined(li);
        assertEquals("Latn",  li.getScript());
}

function  testLocaleInfoGetScriptMultiple()  {
var  li  =  new  ilib.LocaleInfo("uz-UZ");
        assertNotUndefined(li);
        assertEquals("Arab",  li.getScript());
}

function  testLocaleInfoGetScriptMultipleLocaleOverride()  {
var  li  =  new  ilib.LocaleInfo("uz-Cyrl-UZ");
        assertNotUndefined(li);
        assertEquals("Cyrl",  li.getScript());
}


function  testLocaleInfoGetLikelyLocaleByLanguage()  {
var  li  =  new  ilib.LocaleInfo("uz");
        assertNotUndefined(li);
        var  locale  =  li.getLikelyLocale();
        assertNotUndefined(locale);
        assertEquals("uz-Cyrl-UZ",  locale.getSpec());
}

function  testLocaleInfoGetLikelyLocaleByRegion()  {
var  li  =  new  ilib.LocaleInfo("UZ");
        assertNotUndefined(li);
        var  locale  =  li.getLikelyLocale();
        assertNotUndefined(locale);
        assertEquals("uz-Cyrl-UZ",  locale.getSpec());
}

function  testLocaleInfoGetLikelyLocaleByScript()  {
var  li  =  new  ilib.LocaleInfo("Arab");
        assertNotUndefined(li);
        var  locale  =  li.getLikelyLocale();
        assertNotUndefined(locale);
        assertEquals("ar-Arab-EG",  locale.getSpec());
}

function  testLocaleInfoGetLikelyLocaleByLanguageAndScript()  {
var  li  =  new  ilib.LocaleInfo("pa-Arab");
        assertNotUndefined(li);
        var  locale  =  li.getLikelyLocale();
        assertNotUndefined(locale);
        assertEquals("pa-Arab-PK",  locale.getSpec());
}

function  testLocaleInfoGetLikelyLocaleByLanguageAndRegion()  {
var  li  =  new  ilib.LocaleInfo("uz-AF");
        assertNotUndefined(li);
        var  locale  =  li.getLikelyLocale();
        assertNotUndefined(locale);
        assertEquals("uz-Arab-AF",  locale.getSpec());
}

function  testLocaleInfoGetLikelyLocaleByRegionAndScript()  {
var  li  =  new  ilib.LocaleInfo("MA-Latn");
        assertNotUndefined(li);
        var  locale  =  li.getLikelyLocale();
        assertNotUndefined(locale);
        assertEquals("fr-Latn-MA",  locale.getSpec());
}

function  testLocaleInfoGetLikelyLocaleAlreadySpecified()  {
var  li  =  new  ilib.LocaleInfo("en-CA-Latn");
        assertNotUndefined(li);
        var  locale  =  li.getLikelyLocale();
        assertNotUndefined(locale);
        assertEquals("en-Latn-CA",  locale.getSpec());
}

function  testLocaleInfoGetLikelyLocaleByLanguageMissing()  {
var  li  =  new  ilib.LocaleInfo("zxx");
        assertNotUndefined(li);
        var  locale  =  li.getLikelyLocale();
        assertNotUndefined(locale);
        assertEquals("zxx",  locale.getSpec());
}

function  testLocaleInfoGetLikelyLocaleByLanguageAndRegionMissing()  {
var  li  =  new  ilib.LocaleInfo("en-GB");
        assertNotUndefined(li);
        var  locale  =  li.getLikelyLocale();
        assertNotUndefined(locale);
        assertEquals("en-GB",  locale.getSpec());
}
