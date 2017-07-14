/*
 * testlistfmt.js - test the list formatter object
 *
 * Copyright © 2017, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSe-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ListFmt = require("./../lib/ListFmt.js");

function testListFmtConstructorEmpty() {
    var fmt = new ListFmt();

    assertNotNull(fmt);
}

function testListFmtDefaults() {
    var fmt = new ListFmt();

    assertNotNull(fmt);
    assertEquals("en-US", fmt.getLocale());
}

function testListFmtDefaultStyle() {
    var fmt = new ListFmt();

    assertNotNull(fmt);
    assertEquals("standard", fmt.getStyle());
}

function testListFmtTestProperty1() {
    var fmt = new ListFmt();

    assertNotNull(fmt);
    assertEquals("", fmt.format([""]));
}

function testListFmtTestProperty2() {
    var fmt = new ListFmt();

    assertNotNull(fmt);
    assertEquals("", fmt.format());
}

function testListFmtTestProperty3() {
    var fmt = new ListFmt();

    assertNotNull(fmt);
    assertEquals("", fmt.format(undefined));
}

function testListFmtTestProperty4() {
    var fmt = new ListFmt();

    assertNotNull(fmt);
    assertEquals("", fmt.format("one"));
}

function testListFmtTestProperty5() {
    var fmt = new ListFmt();

    assertNotNull(fmt);
    assertEquals("", fmt.format("one", "two"));
}

function testListFmtTestProperty6() {
    var fmt = new ListFmt();

    assertNotNull(fmt);
    assertEquals("", fmt.format(100));
}

function testListFmtTestProperty7() {
    var fmt = new ListFmt();

    assertNotNull(fmt);
    assertEquals("", fmt.format(false));
}

function testListFmtTestProperty8() {
    var fmt = new ListFmt();

    assertNotNull(fmt);
    assertEquals("true and false", fmt.format(["true", "false"]));
}

function testListFmtNumberFormatOne() {
    var fmt = new ListFmt();

    assertNotNull(fmt);
    assertEquals("one", fmt.format(["one"]));
}

function testListFmtNumberFormatTwo() {
    var fmt = new ListFmt();

    assertNotNull(fmt);
    assertEquals("one and two", fmt.format(["one", "two"]));
}

function testListFmtNumberFormatThree() {
    var fmt = new ListFmt();

    assertNotNull(fmt);
    assertEquals("one, two, and three", fmt.format(["one", "two", "three"]));
}

function testListFmtNumberFormatFour() {
    var fmt = new ListFmt();

    assertNotNull(fmt);
    assertEquals("one, two, three, and four", fmt.format(["one", "two", "three", "four"]));
}

// de-DE
function testListFmtdeDENumberFormatOne() {
    var fmt = new ListFmt({
    	locale: "de-DE"
    });

    assertNotNull(fmt);
    assertEquals("eins", fmt.format(["eins"]));
}

function testListFmtdeDENumberFormatTwo() {
    var fmt = new ListFmt({
    	locale: "de-DE"
    });

    assertNotNull(fmt);
    assertEquals("eins und zwei", fmt.format(["eins", "zwei"]));
}

function testListFmtdeDENumberFormatThree() {
    var fmt = new ListFmt({
    	locale: "de-DE"
    });

    assertNotNull(fmt);
    assertEquals("eins, zwei und drei", fmt.format(["eins", "zwei", "drei"]));
}

function testListFmtdeDENumberFormatFour() {
    var fmt = new ListFmt({
    	locale: "de-DE"
    });

    assertNotNull(fmt);
    assertEquals("eins, zwei, drei und vier", fmt.format(["eins", "zwei", "drei", "vier"]));
}

// ko-KR

function testListFmtkoKRNumberFormatOne() {
    var fmt = new ListFmt({
    	locale: "ko-KR"
    });

    assertNotNull(fmt);
    assertEquals("하나", fmt.format(["하나"]));
}

function testListFmtkoKRNumberFormatTwo() {
    var fmt = new ListFmt({
    	locale: "ko-KR"
    });

    assertNotNull(fmt);
    assertEquals("하나 및 둘", fmt.format(["하나", "둘"]));
}

function testListFmtkoKRNumberFormatThree() {
    var fmt = new ListFmt({
    	locale: "ko-KR"
    });

    assertNotNull(fmt);
    assertEquals("하나, 둘 및 셋", fmt.format(["하나", "둘", "셋"]));
}

function testListFmtkoKRNumberFormatFour() {
    var fmt = new ListFmt({
    	locale: "ko-KR"
    });

    assertNotNull(fmt);
    assertEquals("하나, 둘, 셋 및 넷", fmt.format(["하나", "둘", "셋", "넷"]));
}

function testListFmtUnitStyleNamekoKR() {
    var fmt = new ListFmt({
        locale: "ko-KR",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("unit", fmt.getStyle());
}

function testListFmtUnitStylekoKRNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "ko-KR",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("1월", fmt.format(["1월"]));
}

function testListFmtUnitStylekoKRNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "ko-KR",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("1월 2월", fmt.format(["1월","2월"]));
}

function testListFmtUnitStylekoKRNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "ko-KR",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("1월 2월 3월", fmt.format(["1월","2월","3월"]));
}

function testListFmtUnitStylekoKRNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "ko-KR",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("1월 2월 3월 4월", fmt.format(["1월","2월","3월","4월"]));
}

function testListFmtUnitStylekoKRNumberFormatFive() {
    var fmt = new ListFmt({
        locale: "ko-KR",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("1월 2월 3월 4월 5월", fmt.format(["1월","2월","3월","4월","5월"]));
}

// id-ID

function testListFmtidIDStyleName() {
    var fmt = new ListFmt({
        locale: "id-ID"
    });

    assertNotNull(fmt);
    assertEquals("standard", fmt.getStyle());
}

function testListFmtidIDNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "id-ID"
    });

    assertNotNull(fmt);
    assertEquals("satu", fmt.format(["satu"]));
}

function testListFmtitIDNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "id-ID"
    });

    assertNotNull(fmt);
    assertEquals("satu dan dua", fmt.format(["satu", "dua"]));
}

function testListFmtidIDNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "id-ID"
    });

    assertNotNull(fmt);
    assertEquals("satu, dua, dan tiga", fmt.format(["satu", "dua", "tiga"]));
}

function testListFmtidIDNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "id-ID"
    });

    assertNotNull(fmt);
    assertEquals("satu, dua, tiga, dan empat", fmt.format(["satu", "dua", "tiga", "empat"]));
}

function testListFmtidIDUnitStyleName() {
    var fmt = new ListFmt({
        locale: "id-ID",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("unit", fmt.getStyle());
}

function testListFmtUnitStyleidIDNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "id-ID",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("satu", fmt.format(["satu"]));
}

function testListFmtUnitStyleidIDNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "id-ID",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("satu, dua", fmt.format(["satu", "dua"]));
}

function testListFmtUnitStyleidIDNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "id-ID",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("satu, dua, tiga", fmt.format(["satu", "dua", "tiga"]));
}

function testListFmtUnitStyleidIDNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "id-ID",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("satu, dua, tiga, empat", fmt.format(["satu", "dua", "tiga", "empat"]));
}

function testListFmtUnitStyleidIDNumberFormatFive() {
    var fmt = new ListFmt({
        locale: "id-ID",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("satu, dua, tiga, empat, lima", fmt.format(["satu", "dua", "tiga", "empat", "lima"]));
}

// it-IT

function testListFmtitITNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "it-IT"
    });

    assertNotNull(fmt);
    assertEquals("uno", fmt.format(["uno"]));
}

function testListFmtitITNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "it-IT"
    });

    assertNotNull(fmt);
    assertEquals("uno e due", fmt.format(["uno", "due"]));
}

function testListFmtitITNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "it-IT"
    });

    assertNotNull(fmt);
    assertEquals("uno, due e tre", fmt.format(["uno", "due", "tre"]));
}

function testListFmtitITNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "it-IT"
    });

    assertNotNull(fmt);
    assertEquals("uno, due, tre e quattro", fmt.format(["uno", "due", "tre", "quattro"]));
}

function testListFmtitITUnitStyleName() {
    var fmt = new ListFmt({
        locale: "it-IT",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("unit", fmt.getStyle());
}

function testListFmtUnitStyleitITNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "it-IT",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("uno", fmt.format(["uno"]));
}

function testListFmtUnitStyleitITNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "it-IT",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("uno due", fmt.format(["uno", "due"]));
}

function testListFmtUnitStyleitITNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "it-IT",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("uno due tre", fmt.format(["uno", "due", "tre"]));
}

function testListFmtUnitStyleitITNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "it-IT",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("uno due tre quattro", fmt.format(["uno", "due", "tre", "quattro"]));
}

function testListFmtUnitStyleitITNumberFormatFive() {
    var fmt = new ListFmt({
        locale: "it-IT",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("uno due tre quattro cinque", fmt.format(["uno", "due", "tre", "quattro", "cinque"]));
}

function testListFmtUnitStyleitITNumberFormatOneMedium() {
    var fmt = new ListFmt({
        locale: "it-IT",
        style: "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("uno", fmt.format(["uno"]));
}

function testListFmtUnitStyleitITNumberFormatTwoMedium() {
    var fmt = new ListFmt({
        locale: "it-IT",
        style: "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("uno e due", fmt.format(["uno", "due"]));
}

function testListFmtUnitStyleitITNumberFormatThreeMedium() {
    var fmt = new ListFmt({
        locale: "it-IT",
        style: "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("uno, due e tre", fmt.format(["uno", "due", "tre"]));
}

function testListFmtUnitStyleitITNumberFormatFourMedium() {
    var fmt = new ListFmt({
        locale: "it-IT",
        style: "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("uno, due, tre e quattro", fmt.format(["uno", "due", "tre", "quattro"]));
}

function testListFmtUnitStyleitITNumberFormatFiveMedium() {
    var fmt = new ListFmt({
        locale: "it-IT",
        style: "unit",
        length: "medium"
    });

    assertNotNull(fmt);
    assertEquals("uno, due, tre, quattro e cinque", fmt.format(["uno", "due", "tre", "quattro", "cinque"]));
}

// pt-BR

function testListFmtptBRNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "pt-BR"
    });

    assertNotNull(fmt);
    assertEquals("um", fmt.format(["um"]));
}

function testListFmtptBRNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "pt-BR"
    });

    assertNotNull(fmt);
    assertEquals("um e dois", fmt.format(["um", "dois"]));
}

function testListFmtptBRNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "pt-BR"
    });

    assertNotNull(fmt);
    assertEquals("um, dois e três", fmt.format(["um", "dois", "três"]));
}

function testListFmtptBRNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "pt-BR"
    });

    assertNotNull(fmt);
    assertEquals("um, dois, três e quatro", fmt.format(["um", "dois", "três", "quatro"]));
}

function testListFmtptBRUnitStyleName() {
    var fmt = new ListFmt({
        locale: "pt-BR",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("unit", fmt.getStyle());
}

function testListFmtUnitStyleptBRNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "pt-BR",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("um", fmt.format(["um"]));
}

function testListFmtUnitStyleptBRNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "pt-BR",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("um e dois", fmt.format(["um", "dois"]));
}

function testListFmtUnitStyleptBRNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "pt-BR",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("um, dois e três", fmt.format(["um", "dois", "três"]));
}

function testListFmtUnitStyleptBRNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "pt-BR",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("um, dois, três e quatro", fmt.format(["um", "dois", "três", "quatro"]));
}

function testListFmtUnitStyleptBRNumberFormatFive() {
    var fmt = new ListFmt({
        locale: "pt-BR",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("um, dois, três, quatro e cinco", fmt.format(["um", "dois", "três", "quatro", "cinco"]));
}

// ru-RU

function testListFmtruRUNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "ru-RU"
    });

    assertNotNull(fmt);
    assertEquals("один", fmt.format(["один"]));
}

function testListFmtruRUNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "ru-RU"
    });

    assertNotNull(fmt);
    assertEquals("один и два", fmt.format(["один", "два"]));
}

function testListFmtruRUNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "ru-RU"
    });

    assertNotNull(fmt);
    assertEquals("один, два и три", fmt.format(["один", "два", "три"]));
}

function testListFmtruRUNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "ru-RU"
    });

    assertNotNull(fmt);
    assertEquals("один, два, три и четыре", fmt.format(["один", "два", "три", "четыре"]));
}

function testListFmtUnitStyleruRUNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "ru-RU",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("один", fmt.format(["один"]));
}

function testListFmtUnitStyleruRUNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "ru-RU",
        style:"unit"
    });

    assertNotNull(fmt);
    assertEquals("один два", fmt.format(["один", "два"]));
}

function testListFmtUnitStyleruRUNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "ru-RU",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("один два три", fmt.format(["один", "два", "три"]));
}

function testListFmtUnitStyleruRUNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "ru-RU",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("один два три четыре", fmt.format(["один", "два", "три", "четыре"]));
}

function testListFmtUnitStyleruRUNumberFormatFive() {
    var fmt = new ListFmt({
        locale: "ru-RU",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("один два три четыре пять", fmt.format(["один", "два", "три", "четыре", "пять"]));
}

function testListFmtUnitStyleruRUNumberFormatOneFull() {
    var fmt = new ListFmt({
        locale: "ru-RU",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("один", fmt.format(["один"]));
}

function testListFmtUnitStyleruRUNumberFormatTwoFull() {
    var fmt = new ListFmt({
        locale: "ru-RU",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("один и два", fmt.format(["один", "два"]));
}

function testListFmtUnitStyleruRUNumberFormatThreeFull() {
    var fmt = new ListFmt({
        locale: "ru-RU",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("один два и три", fmt.format(["один", "два", "три"]));
}

function testListFmtUnitStyleruRUNumberFormatFourFull() {
    var fmt = new ListFmt({
        locale: "ru-RU",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("один два три и четыре", fmt.format(["один", "два", "три", "четыре"]));
}

function testListFmtUnitStyleruRUNumberFormatFiveFull() {
    var fmt = new ListFmt({
        locale: "ru-RU",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("один два три четыре и пять", fmt.format(["один", "два", "три", "четыре", "пять"]));
}

// tr-TR

function testListFmttrTRNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "tr-TR"
    });

    assertNotNull(fmt);
    assertEquals("bir", fmt.format(["bir"]));
}

function testListFmttrTRNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "tr-TR"
    });

    assertNotNull(fmt);
    assertEquals("bir ve два", fmt.format(["bir", "два"]));
}

function testListFmttrTRNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "tr-TR"
    });

    assertNotNull(fmt);
    assertEquals("bir, два ve три", fmt.format(["bir", "два", "три"]));
}

function testListFmttrTRNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "tr-TR"
    });

    assertNotNull(fmt);
    assertEquals("bir, два, три ve четыре", fmt.format(["bir", "два", "три", "четыре"]));
}

function testListFmtUnitStyletrTRNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "tr-TR",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("bir", fmt.format(["bir"]));
}

function testListFmtUnitStyletrTRNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "tr-TR",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("bir два", fmt.format(["bir", "два"]));
}

function testListFmtUnitStyletrTRNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "tr-TR",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("bir два три", fmt.format(["bir", "два", "три"]));
}

function testListFmtUnitStyletrTRNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "tr-TR",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("bir два три четыре", fmt.format(["bir", "два", "три", "четыре"]));
}

function testListFmtUnitStyletrTRNumberFormatFive() {
    var fmt = new ListFmt({
        locale: "tr-TR",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("bir два три четыре пять", fmt.format(["bir", "два", "три", "четыре", "пять"]));
}

// vi-VI

function testListFmttrTRNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "vi-VI"
    });

    assertNotNull(fmt);
    assertEquals("một", fmt.format(["một"]));
}

function testListFmttrTRNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "vi-VI"
    });

    assertNotNull(fmt);
    assertEquals("một và hai", fmt.format(["một", "hai"]));
}

function testListFmttrTRNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "vi-VI"
    });

    assertNotNull(fmt);
    assertEquals("một, hai và ba", fmt.format(["một", "hai", "ba"]));
}

function testListFmttrTRNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "vi-VI"
    });

    assertNotNull(fmt);
    assertEquals("một, hai, ba và bốn", fmt.format(["một", "hai", "ba", "bốn"]));
}

function testListFmtUnitStyletrTRNumberFormatOne() {
    var fmt = new ListFmt({
        locale: "vi-VI",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("bir", fmt.format(["bir"]));
}

function testListFmtUnitStyletrTRNumberFormatTwo() {
    var fmt = new ListFmt({
        locale: "vi-VI",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("bir два", fmt.format(["bir", "два"]));
}

function testListFmtUnitStyletrTRNumberFormatThree() {
    var fmt = new ListFmt({
        locale: "vi-VI",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("bir два три", fmt.format(["bir", "два", "три"]));
}

function testListFmtUnitStyletrTRNumberFormatFour() {
    var fmt = new ListFmt({
        locale: "vi-VI",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("bir два три четыре", fmt.format(["bir", "два", "три", "четыре"]));
}

function testListFmtUnitStyletrTRNumberFormatFive() {
    var fmt = new ListFmt({
        locale: "vi-VI",
        style: "unit"
    });

    assertNotNull(fmt);
    assertEquals("bir два три четыре пять", fmt.format(["bir", "два", "три", "четыре", "пять"]));
}

function testListFmtUnitStyletrTRNumberFormatOneFull() {
    var fmt = new ListFmt({
        locale: "vi-VI",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("bir", fmt.format(["bir"]));
}

function testListFmtUnitStyletrTRNumberFormatTwoFull() {
    var fmt = new ListFmt({
        locale: "vi-VI",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("bir, два", fmt.format(["bir", "два"]));
}

function testListFmtUnitStyletrTRNumberFormatThreeFull() {
    var fmt = new ListFmt({
        locale: "vi-VI",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("bir, два, три", fmt.format(["bir", "два", "три"]));
}

function testListFmtUnitStyletrTRNumberFormatFourFull() {
    var fmt = new ListFmt({
        locale: "vi-VI",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("bir, два, три, четыре", fmt.format(["bir", "два", "три", "четыре"]));
}

function testListFmtUnitStyletrTRNumberFormatFiveFull() {
    var fmt = new ListFmt({
        locale: "vi-VI",
        style: "unit",
        length: "full"
    });

    assertNotNull(fmt);
    assertEquals("bir, два, три, четыре, пять", fmt.format(["bir", "два", "три", "четыре", "пять"]));
}