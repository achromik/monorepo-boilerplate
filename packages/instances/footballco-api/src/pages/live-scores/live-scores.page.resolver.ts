import { Injectable } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Countries } from '../../core/enums/countries';
import { Edition } from '../../core/enums/editions';
import { EnvironmentName } from '../../core/enums/environment-name.enum';
import { CountryScalar } from '../../core/scalars/country.scalar';
import { DateScalar } from '../../core/scalars/date.scalar';
import { EditionScalar } from '../../core/scalars/edition.scalar';
import { TimezoneOffsetScalar } from '../../core/scalars/timezone-offset.scalar';
import { LiveScoresPage } from './live-scores-page.entity';

@Injectable()
@Resolver((_of) => LiveScoresPage)
export class LiveScoresPageResolver {
  @Query((_returns) => LiveScoresPage)
  async liveScoresPage(
    @Args('edition', {
      nullable: false,
      type: () => EditionScalar,
    })
    edition: Edition,

    @Args('country', {
      nullable: false,
      type: () => CountryScalar,
    })
    country: Countries,

    @Args('environment', {
      nullable: false,
      type: () => EnvironmentName,
      defaultValue: EnvironmentName.LIVE,
    })
    _environment: EnvironmentName,

    @Args('date', {
      nullable: false,
      type: () => DateScalar,
      description:
        'Date to query in YYYY-MM-DD format, please note tzOffset argument',
    })
    date: string,

    @Args('tzOffset', {
      nullable: false,
      defaultValue: 0,
      type: () => TimezoneOffsetScalar,
      description:
        'Date timezone offset in minutes, can range from -720 to 840, only multiples of 15.',
    })
    tzOffset: number,

    @Args('onlyLive', {
      nullable: false,
      defaultValue: 0,
      type: () => Boolean,
      description: 'Only live',
    })
    onlyLive: boolean,
  ): Promise<LiveScoresPage> {
    return {
      foo: edition,
    };
  }
}
