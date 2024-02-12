import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { LiveScoresPageModule } from '../../pages/live-scores/live-scores-page.module';

const GRAPHQL_MODULES = [LiveScoresPageModule];

const SCALARS = [];

const RESOLVERS = [];

@Module({
  imports: [
    ...GRAPHQL_MODULES,
    ConfigModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [ConfigModule],
      driver: ApolloDriver,
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        sortSchema: true,
        disableHealthCheck: true,
        debug: config.get<boolean>('graphql.debug'),
        playground: config.get<boolean>('graphql.playground'),
        introspection: config.get<boolean>('graphql.introspection'),
      }),
    }),
  ],

  providers: [...SCALARS, ...RESOLVERS],
})
export class FCGraphqlModule {}
