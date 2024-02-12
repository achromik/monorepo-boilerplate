import { Module } from '@nestjs/common';
import { LiveScoresPageResolver } from './live-scores.page.resolver';

@Module({
  imports: [],
  providers: [LiveScoresPageResolver],
})
export class LiveScoresPageModule {}
