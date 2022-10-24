/* eslint-disable import/no-extraneous-dependencies */
export const localizeNamespaceLoader = /** @param {string} locale */ locale => {
  switch (locale) {
    case 'bg-BG':
      return import('@lion/components/input-tel-translations/bg-BG.js');
    case 'bg':
      return import('@lion/components/input-tel-translations/bg.js');
    case 'cs-CZ':
      return import('@lion/components/input-tel-translations/cs-CZ.js');
    case 'cs':
      return import('@lion/components/input-tel-translations/cs.js');
    case 'de-DE':
      return import('@lion/components/input-tel-translations/de-DE.js');
    case 'de':
      return import('@lion/components/input-tel-translations/de.js');
    case 'en-AU':
      return import('@lion/components/input-tel-translations/en-AU.js');
    case 'en-GB':
      return import('@lion/components/input-tel-translations/en-GB.js');
    case 'en-US':
      return import('@lion/components/input-tel-translations/en-US.js');
    case 'en-PH':
    case 'en':
      return import('@lion/components/input-tel-translations/en.js');
    case 'es-ES':
      return import('@lion/components/input-tel-translations/es-ES.js');
    case 'es':
      return import('@lion/components/input-tel-translations/es.js');
    case 'fr-FR':
      return import('@lion/components/input-tel-translations/fr-FR.js');
    case 'fr-BE':
      return import('@lion/components/input-tel-translations/fr-BE.js');
    case 'fr':
      return import('@lion/components/input-tel-translations/fr.js');
    case 'hu-HU':
      return import('@lion/components/input-tel-translations/hu-HU.js');
    case 'hu':
      return import('@lion/components/input-tel-translations/hu.js');
    case 'it-IT':
      return import('@lion/components/input-tel-translations/it-IT.js');
    case 'it':
      return import('@lion/components/input-tel-translations/it.js');
    case 'nl-BE':
      return import('@lion/components/input-tel-translations/nl-BE.js');
    case 'nl-NL':
      return import('@lion/components/input-tel-translations/nl-NL.js');
    case 'nl':
      return import('@lion/components/input-tel-translations/nl.js');
    case 'pl-PL':
      return import('@lion/components/input-tel-translations/pl-PL.js');
    case 'pl':
      return import('@lion/components/input-tel-translations/pl.js');
    case 'ro-RO':
      return import('@lion/components/input-tel-translations/ro-RO.js');
    case 'ro':
      return import('@lion/components/input-tel-translations/ro.js');
    case 'ru-RU':
      return import('@lion/components/input-tel-translations/ru-RU.js');
    case 'ru':
      return import('@lion/components/input-tel-translations/ru.js');
    case 'sk-SK':
      return import('@lion/components/input-tel-translations/sk-SK.js');
    case 'sk':
      return import('@lion/components/input-tel-translations/sk.js');
    case 'uk-UA':
      return import('@lion/components/input-tel-translations/uk-UA.js');
    case 'uk':
      return import('@lion/components/input-tel-translations/uk.js');
    case 'zh-CN':
    case 'zh':
      return import('@lion/components/input-tel-translations/zh.js');
    default:
      return import('@lion/components/input-tel-translations/en.js');
  }
};
