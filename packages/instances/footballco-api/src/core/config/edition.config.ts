import { Logger } from '@nestjs/common';
import { registerAs } from '@nestjs/config';

import { config as goalEditionConfig } from '../../config/editions/goal.edition.config';
import { EditionsConfig } from '../../config/editions/types';
import { config as vzEditionConfig } from '../../config/editions/vz.edition.config';
import { Portals } from '../enums/portals';

const getPortalEditionConfig = (portal: string) => {
  const logger = new Logger('EditionConfig');

  logger.log(`Getting config for ${portal}`);
  const portalConfig: Record<Portals, EditionsConfig<Portals>> = {
    [Portals.GOAL]: goalEditionConfig,
    [Portals.VZ]: vzEditionConfig,
    [Portals.SPOX]: {} as EditionsConfig<Portals.SPOX>,
  };

  const config = portalConfig[portal];

  if (!config) {
    throw new Error(`Portal ${portal} not found in config`);
  }

  return config;
};

export default registerAs('edition', () =>
  getPortalEditionConfig(process.env.PORTAL),
);
