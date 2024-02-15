import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import graphqlConfig from './core/config/graphql.config';
import { FCGraphqlModule } from './routes/graphql/graphql.module';
import { HealthModule } from './routes/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [graphqlConfig],
      validationSchema: Joi.object({}),
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
