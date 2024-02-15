import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloResolver {
  @Query(() => String)
  async helloQuery(): Promise<string> {
    return 'Hello! This is a test query';
  }
}
