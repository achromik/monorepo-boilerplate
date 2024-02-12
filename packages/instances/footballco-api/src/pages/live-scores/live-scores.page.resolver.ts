import { Injectable } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { LiveScoresPage } from './live-scores-page.entity';

@Injectable()
@Resolver((_of) => LiveScoresPage)
export class LiveScoresPageResolver {
  @Query((_returns) => LiveScoresPage)
  async liveScoresPage(): Promise<LiveScoresPage> {
    return {
      foo: 'bar',
    };
  }
}
