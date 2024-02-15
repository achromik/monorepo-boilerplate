import { Edition, GoalEdition, VZEdition } from '../core/enums/editions';

export enum Locale {
  AR = 'ar', // arabic
  AR_EG = 'ar-eg',
  AR_SA = 'ar-sa',
  DE = 'de', // german
  EN = 'en', // english
  EN_AE = 'en-ae',
  EN_AU = 'en-au',
  EN_BH = 'en-bh',
  EN_CM = 'en-cm',
  EN_GB = 'en-gb',
  EN_GH = 'en-gh',
  EN_IN = 'en-in',
  EN_KE = 'en-ke',
  EN_KW = 'en-kw',
  EN_MY = 'en-my',
  EN_NG = 'en-ng',
  EN_OM = 'en-om',
  EN_QA = 'en-qa',
  EN_SA = 'en-sa',
  EN_SG = 'en-sg',
  EN_TZA = 'en-tza',
  EN_UG = 'en-ug',
  EN_US = 'en-us',
  EN_ZA = 'en-za',
  ES = 'es', // spanish
  ES_AR = 'es-ar',
  ES_CL = 'es-cl',
  ES_CO = 'es-co',
  ES_MX = 'es-mx',
  FR = 'fr', // french
  HU_HU = 'hu-hu', // hungarian
  ID_ID = 'id-id', // indonesian
  IT = 'it', // italian
  JA = 'ja', // japanese
  KO = 'ko', // korean
  PT_BR = 'pt-br', // portuguese
  TH_TH = 'th-th', // thai
  TR_TR = 'tr-tr', // turkish
  VI_VN = 'vi-vn', // vietnamese
  NL = 'NL', //Voetbalzone   //TODO: TBC
}

export const DEFAULT_LOCALE = 'xh';

export interface ILocaleConfig {
  isoLanguageCode: string;
  pcmsLocale: string;
  sdapiLocale: string;
  edition: Edition;
  name: string;
  parentLocale: Locale | typeof DEFAULT_LOCALE;
  sdlLanguage: string;
  epg?: {
    language: string;
    country: string;
  };
}

//see ED-1073
export const localesConfig: Record<Locale, ILocaleConfig> = {
  [Locale.AR]: {
    pcmsLocale: 'ar',
    sdapiLocale: 'ar-sa',
    edition: GoalEdition.AR,
    isoLanguageCode: 'ar',
    parentLocale: DEFAULT_LOCALE,
    name: `Arabic (${GoalEdition.AR})`,
    sdlLanguage: 'ar',
    epg: {
      language: 'ar',
      country: 'jo',
    },
  },
  [Locale.AR_EG]: {
    pcmsLocale: 'ar',
    sdapiLocale: 'ar-sa',
    edition: GoalEdition.AR_EG,
    isoLanguageCode: 'ar',
    parentLocale: Locale.AR,
    name: `Arabic – Egypt (${GoalEdition.AR_EG})`,
    sdlLanguage: 'ar',
    epg: {
      language: 'ar',
      country: 'eg',
    },
  },
  [Locale.AR_SA]: {
    pcmsLocale: 'ar',
    sdapiLocale: 'ar-sa',
    edition: GoalEdition.AR_SA,
    isoLanguageCode: 'ar',
    parentLocale: Locale.AR,
    name: `Arabic – Saudi Arabia (${GoalEdition.AR_SA})`,
    sdlLanguage: 'ar',
  },
  [Locale.DE]: {
    pcmsLocale: 'de',
    sdapiLocale: 'de-de',
    edition: GoalEdition.DE,
    isoLanguageCode: 'de',
    parentLocale: DEFAULT_LOCALE,
    name: `German (${GoalEdition.DE})`,
    sdlLanguage: 'de',
    epg: {
      language: 'de',
      country: 'de',
    },
  },
  [Locale.EN]: {
    pcmsLocale: 'en',
    sdapiLocale: 'en-gb',
    edition: GoalEdition.EN,
    isoLanguageCode: 'en',
    parentLocale: DEFAULT_LOCALE,
    name: `English – International (${GoalEdition.EN})`,
    sdlLanguage: 'en',
  },
  [Locale.EN_AE]: {
    pcmsLocale: 'en',
    sdapiLocale: 'en-gb',
    edition: GoalEdition.EN_AE,
    isoLanguageCode: 'en',
    parentLocale: Locale.EN,
    name: `English – United Arab Emirates (${GoalEdition.EN_AE})`,
    sdlLanguage: 'en',
    epg: {
      language: 'en',
      country: 'ae',
    },
  },
  [Locale.EN_AU]: {
    pcmsLocale: 'en',
    sdapiLocale: 'en-gb',
    edition: GoalEdition.EN_AU,
    isoLanguageCode: 'en',
    parentLocale: Locale.EN,
    name: `English – Australia (${GoalEdition.EN_AU})`,
    sdlLanguage: 'en',
  },
  [Locale.EN_BH]: {
    pcmsLocale: 'en',
    sdapiLocale: 'en-gb',
    edition: GoalEdition.EN_BH,
    isoLanguageCode: 'en',
    parentLocale: Locale.EN,
    name: `English – Bahrain (${GoalEdition.EN_BH})`,
    sdlLanguage: 'en',
    epg: {
      language: 'en',
      country: 'bh',
    },
  },
  [Locale.EN_CM]: {
    pcmsLocale: 'en',
    sdapiLocale: 'en-gb',
    edition: GoalEdition.EN_CM,
    isoLanguageCode: 'en',
    parentLocale: Locale.EN,
    name: `English – Cameroon (${GoalEdition.EN_CM})`,
    sdlLanguage: 'en',
  },
  [Locale.EN_GB]: {
    pcmsLocale: 'en',
    sdapiLocale: 'en-gb',
    edition: GoalEdition.EN_GB,
    isoLanguageCode: 'en',
    parentLocale: Locale.EN,
    name: `English – UK (${GoalEdition.EN_GB})`,
    sdlLanguage: 'en',
    epg: {
      language: 'en',
      country: 'gb',
    },
  },
  [Locale.EN_GH]: {
    pcmsLocale: 'en',
    sdapiLocale: 'en-gb',
    edition: GoalEdition.EN_GH,
    isoLanguageCode: 'en',
    parentLocale: Locale.EN,
    name: `English – Ghana (${GoalEdition.EN_GH})`,
    sdlLanguage: 'en',
  },
  [Locale.EN_IN]: {
    pcmsLocale: 'en',
    sdapiLocale: 'en-gb',
    edition: GoalEdition.EN_IN,
    isoLanguageCode: 'en',
    parentLocale: Locale.EN,
    name: `English – India (${GoalEdition.EN_IN})`,
    sdlLanguage: 'en',
  },
  [Locale.EN_KE]: {
    pcmsLocale: 'en',
    sdapiLocale: 'en-gb',
    edition: GoalEdition.EN_KE,
    isoLanguageCode: 'en',
    parentLocale: Locale.EN,
    name: `English – Kenya (${GoalEdition.EN_KE})`,
    sdlLanguage: 'en',
  },
  [Locale.EN_KW]: {
    pcmsLocale: 'en',
    sdapiLocale: 'en-gb',
    edition: GoalEdition.EN_KW,
    isoLanguageCode: 'en',
    parentLocale: Locale.EN,
    name: `English – Kuwait (${GoalEdition.EN_KW})`,
    sdlLanguage: 'en',
    epg: {
      language: 'en',
      country: 'kw',
    },
  },
  [Locale.EN_MY]: {
    pcmsLocale: 'en',
    sdapiLocale: 'en-gb',
    edition: GoalEdition.EN_MY,
    isoLanguageCode: 'en',
    parentLocale: Locale.EN,
    name: `English – Malesia (${GoalEdition.EN_MY})`,
    sdlLanguage: 'en',
  },
  [Locale.EN_NG]: {
    pcmsLocale: 'en',
    sdapiLocale: 'en-gb',
    edition: GoalEdition.EN_NG,
    isoLanguageCode: 'en',
    parentLocale: Locale.EN,
    name: `English – Nigeria (${GoalEdition.EN_NG})`,
    sdlLanguage: 'en',
  },
  [Locale.EN_OM]: {
    pcmsLocale: 'en',
    sdapiLocale: 'en-gb',
    edition: GoalEdition.EN_OM,
    isoLanguageCode: 'en',
    parentLocale: Locale.EN,
    name: `English – Oman (${GoalEdition.EN_OM})`,
    sdlLanguage: 'en',
    epg: {
      language: 'en',
      country: 'om',
    },
  },
  [Locale.EN_QA]: {
    pcmsLocale: 'en',
    sdapiLocale: 'en-gb',
    edition: GoalEdition.EN_QA,
    isoLanguageCode: 'en',
    parentLocale: Locale.EN,
    name: `English – Qatar (${GoalEdition.EN_QA})`,
    sdlLanguage: 'en',
    epg: {
      language: 'en',
      country: 'qa',
    },
  },
  [Locale.EN_SA]: {
    pcmsLocale: 'en',
    sdapiLocale: 'en-gb',
    edition: GoalEdition.EN_SA,
    isoLanguageCode: 'en',
    parentLocale: Locale.EN,
    name: `English – Saudi Arabia (${GoalEdition.EN_SA})`,
    sdlLanguage: 'en',
  },
  [Locale.EN_SG]: {
    pcmsLocale: 'en',
    sdapiLocale: 'en-gb',
    edition: GoalEdition.EN_SG,
    isoLanguageCode: 'en',
    parentLocale: Locale.EN,
    name: `English – Singapore (${GoalEdition.EN_SG})`,
    sdlLanguage: 'en',
  },
  [Locale.EN_TZA]: {
    pcmsLocale: 'en',
    sdapiLocale: 'en-gb',
    edition: GoalEdition.EN_TZA,
    isoLanguageCode: 'en',
    parentLocale: Locale.EN,
    name: `English – Tanzania (${GoalEdition.EN_TZA})`,
    sdlLanguage: 'en',
  },
  [Locale.EN_UG]: {
    pcmsLocale: 'en',
    sdapiLocale: 'en-gb',
    edition: GoalEdition.EN_UG,
    isoLanguageCode: 'en',
    parentLocale: Locale.EN,
    name: `English – Uganda (${GoalEdition.EN_UG})`,
    sdlLanguage: 'en',
  },
  [Locale.EN_US]: {
    pcmsLocale: 'en',
    sdapiLocale: 'en-gb',
    edition: GoalEdition.EN_US,
    isoLanguageCode: 'en',
    parentLocale: Locale.EN,
    name: `English – US (${GoalEdition.EN_US})`,
    sdlLanguage: 'en',
    epg: {
      language: 'en',
      country: 'us',
    },
  },
  [Locale.EN_ZA]: {
    pcmsLocale: 'en',
    sdapiLocale: 'en-gb',
    edition: GoalEdition.EN_ZA,
    isoLanguageCode: 'en',
    parentLocale: Locale.EN,
    name: `English – South Africa (${GoalEdition.EN_ZA})`,
    sdlLanguage: 'en',
  },
  [Locale.ES]: {
    pcmsLocale: 'es',
    sdapiLocale: 'es-es',
    edition: GoalEdition.ES,
    isoLanguageCode: 'es',
    parentLocale: DEFAULT_LOCALE,
    name: `Spanish (${GoalEdition.ES})`,
    sdlLanguage: 'es',
    epg: {
      language: 'es',
      country: 'es',
    },
  },
  [Locale.ES_AR]: {
    pcmsLocale: 'es',
    sdapiLocale: 'es-es',
    edition: GoalEdition.ES_AR,
    isoLanguageCode: 'es',
    parentLocale: Locale.ES,
    name: `Spanish – Argentina (${GoalEdition.ES_AR})`,
    sdlLanguage: 'es',
  },
  [Locale.ES_CL]: {
    pcmsLocale: 'es',
    sdapiLocale: 'es-es',
    edition: GoalEdition.ES_CL,
    isoLanguageCode: 'es',
    parentLocale: Locale.ES,
    name: `Spanish – Chile (${GoalEdition.ES_CL})`,
    sdlLanguage: 'es',
  },
  [Locale.ES_CO]: {
    pcmsLocale: 'es',
    sdapiLocale: 'es-es',
    edition: GoalEdition.ES_CO,
    isoLanguageCode: 'es',
    parentLocale: Locale.ES,
    name: `Spanish – Colombia (${GoalEdition.ES_CO})`,
    sdlLanguage: 'es',
  },
  [Locale.ES_MX]: {
    pcmsLocale: 'es',
    sdapiLocale: 'es-es',
    edition: GoalEdition.ES_MX,
    isoLanguageCode: 'es',
    parentLocale: Locale.ES,
    name: `Spanish – Mexico (${GoalEdition.ES_MX})`,
    sdlLanguage: 'es',
  },
  [Locale.FR]: {
    pcmsLocale: 'fr',
    sdapiLocale: 'fr-fr',
    edition: GoalEdition.FR,
    isoLanguageCode: 'fr',
    parentLocale: DEFAULT_LOCALE,
    name: `French (${GoalEdition.FR})`,
    sdlLanguage: 'fr',
  },
  [Locale.HU_HU]: {
    pcmsLocale: 'hu',
    sdapiLocale: 'hu-hu',
    edition: GoalEdition.HU,
    isoLanguageCode: 'hu',
    parentLocale: DEFAULT_LOCALE,
    name: `Hungarian (${GoalEdition.HU})`,
    sdlLanguage: 'hu_HU',
  },
  [Locale.ID_ID]: {
    pcmsLocale: 'id',
    sdapiLocale: 'id-id',
    edition: GoalEdition.ID,
    isoLanguageCode: 'id',
    parentLocale: DEFAULT_LOCALE,
    name: `Indonesian (${GoalEdition.ID})`,
    sdlLanguage: 'id_ID',
  },
  [Locale.IT]: {
    pcmsLocale: 'it',
    sdapiLocale: 'it-it',
    edition: GoalEdition.IT,
    isoLanguageCode: 'it',
    parentLocale: DEFAULT_LOCALE,
    name: `Italian (${GoalEdition.IT})`,
    sdlLanguage: 'it',
    epg: {
      language: 'it',
      country: 'it',
    },
  },
  [Locale.JA]: {
    pcmsLocale: 'ja',
    sdapiLocale: 'ja-jp',
    edition: GoalEdition.JP,
    isoLanguageCode: 'ja',
    parentLocale: DEFAULT_LOCALE,
    name: `Japanese (${GoalEdition.JP})`,
    sdlLanguage: 'ja',
    epg: {
      language: 'ja',
      country: 'jp',
    },
  },
  [Locale.KO]: {
    pcmsLocale: 'ko',
    sdapiLocale: 'ko-kr',
    edition: GoalEdition.KR,
    isoLanguageCode: 'ko',
    parentLocale: DEFAULT_LOCALE,
    name: `Korean (${GoalEdition.KR})`,
    sdlLanguage: 'ko',
  },
  [Locale.PT_BR]: {
    pcmsLocale: 'pt-br',
    sdapiLocale: 'pt-br',
    edition: GoalEdition.BR,
    isoLanguageCode: 'pt',
    parentLocale: DEFAULT_LOCALE,
    name: `Portuguese – Brazil (${GoalEdition.BR})`,
    sdlLanguage: 'pt_BR',
  },
  [Locale.TH_TH]: {
    pcmsLocale: 'th',
    sdapiLocale: 'th-th',
    edition: GoalEdition.TH,
    isoLanguageCode: 'th',
    parentLocale: DEFAULT_LOCALE,
    name: `Thai (${GoalEdition.TH})`,
    sdlLanguage: 'th_TH',
  },
  [Locale.TR_TR]: {
    pcmsLocale: 'tr',
    sdapiLocale: 'tr-tr',
    edition: GoalEdition.TR,
    isoLanguageCode: 'tr',
    parentLocale: DEFAULT_LOCALE,
    name: `Turkish (${GoalEdition.TR})`,
    sdlLanguage: 'tr_TR',
  },
  [Locale.VI_VN]: {
    pcmsLocale: 'vi',
    sdapiLocale: 'vi-vn',
    edition: GoalEdition.VN,
    isoLanguageCode: 'vi',
    parentLocale: DEFAULT_LOCALE,
    name: `Vietnamese (${GoalEdition.VN})`,
    sdlLanguage: 'vi_VN',
  },
  //TBC
  [Locale.NL]: {
    pcmsLocale: 'nl',
    sdapiLocale: 'nl-nl',
    edition: VZEdition.NL,
    isoLanguageCode: 'nl',
    parentLocale: DEFAULT_LOCALE,
    name: `Voetbalzone`,
    sdlLanguage: 'nl',
  },
};
