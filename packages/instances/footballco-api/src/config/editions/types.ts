import { GoalEdition, SpoxEdition, VZEdition } from '../../core/enums/editions';
import { PCMSLanguage } from '../../core/enums/pcms-language';
import { Portals } from '../../core/enums/portals';
import { SDLLanguage } from '../../core/enums/sdl-language';
import { Locale } from '../locales.config';

export type EditionsConfig<T extends Portals> = Record<
  T extends Portals.GOAL
    ? GoalEdition
    : T extends Portals.VZ
      ? VZEdition
      : T extends Portals.SPOX
        ? SpoxEdition
        : never,
  {
    language: Locale;
    pcmsLanguage: PCMSLanguage;
    sdlLanguage: SDLLanguage;
    intlLocale: string;
    hreflangs: string[];
    betting: boolean;
    bettingE2: boolean;
    betterCollectiveBetting: boolean;
    withVideoIcon: boolean;
    seo: {
      name: string;
    };
    localazy: string;
  }
>;
