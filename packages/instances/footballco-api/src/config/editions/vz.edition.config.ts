import { VZEdition } from '../../core/enums/editions';
import { PCMSLanguage } from '../../core/enums/pcms-language';
import { Portals } from '../../core/enums/portals';
import { SDLLanguage } from '../../core/enums/sdl-language';
import { Locale } from '../locales.config';
import { EditionsConfig } from './types';

// TBC
export const config: EditionsConfig<Portals.VZ> = {
  [VZEdition.NL]: {
    language: Locale.NL,
    pcmsLanguage: PCMSLanguage.nl,
    sdlLanguage: SDLLanguage.NL,
    intlLocale: 'nl-NL',
    betting: false,
    bettingE2: false,
    betterCollectiveBetting: false,
    hreflangs: ['nl'],
    withVideoIcon: false,
    seo: {
      name: 'Voetbalzone',
    },
    localazy: 'nl',
  },
};
