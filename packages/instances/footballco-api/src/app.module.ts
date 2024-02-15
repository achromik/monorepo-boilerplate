import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import editionConfig from './core/config/edition.config';
import graphqlConfig from './core/config/graphql.config';
import { Portals } from './core/enums/portals';
import { FCGraphqlModule } from './routes/graphql/graphql.module';
import { HealthModule } from './routes/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [graphqlConfig, editionConfig],
      validationSchema: Joi.object({
        PORTAL: Joi.string()
          .valid(...Object.keys(Portals))
          .required(),
      }),
      validationOptions: {
        abortEarly: true,
      },
    }),
    HealthModule,
    FCGraphqlModule,
  ],
  providers: [],
})
export class AppModule {}
