import { registerAs } from '@nestjs/config';

export default registerAs('graphql', () => ({
  debug: process.env.GRAPHQL_DEBUG === 'true',
  playground: true,
  introspection: true,
}));
