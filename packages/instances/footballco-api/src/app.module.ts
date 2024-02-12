import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import graphqlConfig from './config/graphql.config';
import { FCGraphqlModule } from './routes/graphql/graphql.module';
import { HealthModule } from './routes/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [graphqlConfig],
    }),
    HealthModule,
    FCGraphqlModule,
  ],
  providers: [],
})
export class AppModule {}
