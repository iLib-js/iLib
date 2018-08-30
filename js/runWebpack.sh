#!/bin/sh

echo "*** Running Webpack for iLib build ***"

argsCount=$#
fileName=$0
assembly=$1
size=$2
sizecompilation=$3
target=$4
localeOption=$5

case "$localeOption" in
    "locales_default")
        echo "locales_default"
        locales="en-AU,en-CA,en-GB,en-IN,en-NG,en-PH,en-PK,en-SG,en-US,en-ZA,de-DE,fr-CA,fr-FR,es-AR,es-ES,es-MX,id-ID,it-IT,ja-JP,ko-KR,pt-BR,ru-RU,tr-TR,vi-VN,zxx-XX,zh-Hans-CN,zh-Hant-HK,zh-Hant-TW,zh-Hans-SG"
        ;;
    "locales_unittest")
        echo "locale_unittest"
        locales="aa-DJ,af-NA,agq-CM,ak-GH,am-ET,ar-AE,ar-BH,ar-DJ,ar-DZ,ar-EG,ar-IQ,ar-JO,ar-KW,ar-LB,ar-LY,ar-MA,ar-MR,ar-OM,ar-QA,ar-SA,ar-SD,ar-SY,ar-TN,ar-YE,asa-TZ,as-IN,az-Latn-AZ,bas-CM,be-BY,bem-ZM,bg-BG,bh-IN,bm-ML,bn-IN,br-FR,bs-BS,bs-Cyrl-BA,bs-Latn-BA,bs-ME,ca-FR,cop-EG,cs-CZ,da-DK,de-AT,de-DE,el-GR,en-AM,en-AU,en-CA,en-ET,en-GB,en-GH,en-GM,en-HK,en-IE,en-IN,en-IS,en-KE,en-LK,en-LR,en-MW,en-MY,en-NG,en-NZ,en-PA,en-PH,en-PK,en-PR,en-RW,en-SD,en-SG,en-SL,en-TZ,en-UG,en-US,en-ZA,en-ZM,es-AR,es-BO,es-CL,es-CO,es-CR,es-DO,es-EC,es-ES,es-GQ,es-GT,es-HN,es-MX,es-NI,es-PA,es-PE,es-PR,es-PY,es-SV,es-UY,es-VE,et-EE,fa-AF,fa-IR,ff-SN,fi-FI,fj-FJ,fo-FO,fr-AD,fr-BE,fr-BF,fr-BJ,fr-CA,fr-CD,fr-CF,fr-CG,fr-CH,fr-CI,fr-CM,fr-DJ,fr-DZ,fr-FR,fr-GA,fr-GN,fr-LB,fr-LU,fr-MG,fr-ML,fr-RW,fr-SN,fr-TG,fr-YT,ga-IE,gl-ES,gu-IN,ha-Latn-NG,he-IL,hi-IN,hr-HR,hr-ME,hu-HU,hy-AZ,hy-AM,id-ID,id-MY,it-CH,it-IT,it-SM,ja-JP,ka-IR,kk-Cyrl-KZ,km-KH,kn-IN,ko-KR,ks-Arab-IN,ku-Arab-IQ,ku-Arab-IR,ku-IR,lg-UG,ln-CF,lt-LT,lv-LV,fr-Latn-MA,mi-CK,mk-MK,ml-IN,mm-MM,mn-CN,mn-Cyrl-MN,mr-IN,ms-BN,ms-MY,ne-NP,nl-BE,nl-NL,nb-NO,nn-NO,no-NO,no-SJ,om-ET,or-IN,os-RU,pa-Arab,pa-IN,pa-Arab-PK,pl-PL,ps-AF,pt-AO,pt-BR,pt-CV,pt-GW,pt-GQ,pt-MO,pt-MZ,pt-PT,pt-ST,pt-TL,ro-RO,ro-RS,ru-GE,ru-KG,ru-KZ,ru-RU,ru-TM,shi-Tfng-MA,si-LK,sk-SK,sl-SI,sl-SL,so-ET,so-SO,sq-AL,sq-ME,sq-MK,sr-Cyrl-BA,sr-Latn-BA,sr-Latn-RS,sr-Latn-ME,sr-RS,sr-Latn-RS,ss-ZA,st-LS,sv-FI,sv-SE,sw-KE,sw-UG,ta-IN,ta-LK,ta-MY,ta-SG,te-IN,th-TH,tr-TR,uk-UA,ur-IN,ur-PK,uz-AF,uz-Arab-AF,uz-Cyrl-UZ,uz-Latn-UZ,uz-UZ,vai-Latn-LR,vi-VN,zh-Hans-CN,zh-Hant-HK,zh-Hans-HK,zh-Hans-MY,zh-Hant-TW,zh-Hans-MO,zh-Hant-MO,zh-Hans-SG,zh-Hant-US,zu-ZA,zxx-Cyrl-XX,zxx-Hans-XX,zxx-Hebr-XX,zxx-XX"
        ;;
    "locales_demo")
        echo "locale_demo"
        locales="aa-DJ,af-NA,af-ZA,agq-CM,ak-GH,am-ET,ar-AE,ar-BH,ar-DJ,ar-DZ,ar-EG,ar-IQ,ar-JO,ar-KW,ar-LB,ar-LY,ar-MA,ar-MR,ar-OM,ar-QA,ar-SA,ar-SD,ar-SY,ar-TN,ar-YE,as-IN,asa-TZ,az-AZ,bas-CM,be-BY,bem-ZM,bg-BG,bh-IN,bm-ML,bn-IN,br-FR,bs-Cyrl-BA,bs-Latn-BA,bs-ME,ca-FR,cop-EG,cs-CZ,da-DK,de-AT,de-CH,de-DE,el-GR,en-AU,en-CA,en-ET,en-GB,en-GH,en-GM,en-HK,en-IE,en-IN,en-KE,en-LK,en-LR,en-MW,en-MY,en-NG,en-NZ,en-PH,en-PK,en-PR,en-RW,en-SG,en-SL,en-TZ,en-UG,en-US,en-ZA,en-ZM,es-AR,es-CO,es-CR,es-DO,es-EC,es-ES,es-GQ,es-GT,es-HN,es-MX,es-SV,es-UY,es-VE,et-EE,fa-AF,fa-IR,ff-SN,fi-FI,fj-FJ,fr-AD,fr-BE,fr-BF,fr-BJ,fr-CA,fr-CD,fr-CF,fr-CG,fr-CH,fr-CI,fr-CM,fr-DJ,fr-DZ,fr-FR,fr-GA,fr-GN,fr-LB,fr-LU,fr-MG,fr-ML,fr-RW,fr-SN,fr-TG,fr-YT,ga-IE,gl-ES,gu-IN,ha-Latn-NG,he-IL,hi-IN,hr-HR,hr-ME,hu-HU,hy-AM,hy-AZ,id-ID,id-MY,it-CH,it-IT,it-SM,ja-JP,ka-IR,kk-Cyrl-KZ,km-KH,kn-IN,ko-KR,ks-Arab-IN,ku-IR,lg-UG,ln-CF,lt-LT,lv-LV,mi-CK,mk-MK,ml-IN,mn-CN,mr-IN,ms-BN,ms-MY,nb-NO,ne-IN,nl-BE,nl-CW,nl-GF,nl-NL,nl-SR,no-BV,no-NO,no-SJ,om-ET,or-IN,os-RU,pa-Arab-PK,pl-PL,pt-AO,pt-BR,pt-CV,pt-GW,pt-MO,pt-MZ,pt-PT,pt-ST,pt-TL,ro-RO,ro-RS,ru-KG,ru-KZ,ru-RU,ru-TM,si-LK,sk-SK,sl-SI,so-ET,so-SO,sq-AL,sq-ME,sq-MK,sr-Cyrl-BA,sr-Latn-BA,sr-Latn-ME,sr-Latn-RS,sr-RS,ss-ZA,st-LS,sv-FI,sv-SE,sw-UG,ta-LK,ta-MY,ta-SG,te-IN,th-TH,tr-TR,uk-UA,ur-IN,ur-PK,uz-AF,uz-Arab-AF,uz-Cyrl-UZ,uz-Latn-UZ,vai-Latn-LR,vi-VN,zh-Hans-CN,zh-Hans-MO,zh-Hans-MY,zh-Hans-SG,zh-Hant-HK,zh-Hant-TW,zh-Hant-US,zu-ZA,zxx-Cyrl-XX,zxx-Hans-XX,zxx-Hebr-XX,zxx-XX"
        ;;
esac

cd js;

run_webpack()
{
        if [ 4 -eq $argsCount ]
        then
                echo "argsCount:$argsCount"
                echo "fileName:$fileName"
                echo "assembly:$assembly"
                echo "size:$size"
                echo "sizecompilation:$sizecompilation"
                echo "target:$target"

                webpack --env.assembly=$assembly --env.size=$size --env.compilation=$sizecompilation --env.target=$arg4
        fi
        if [ 5 -eq $argsCount ]
        then
                echo "argsCount:$argsCount"
                echo "fileName:$fileName"
                echo "assembly:$assembly"
                echo "size:$size"
                echo "sizecompilation:$sizecompilation"
                echo "target:$target"
                echo "localeOption:$localeOption"
                echo "locales:$locales"
                webpack --env.assembly=$assembly --env.size=$size --env.compilation=$sizecompilation --env.target=$arg4 --env.locales=$locales

        fi

}

run_webpack

exit 0