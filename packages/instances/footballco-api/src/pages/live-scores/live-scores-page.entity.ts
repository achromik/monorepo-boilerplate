import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LiveScoresPage {
  //todo implement live scores
  @Field((_type) => String)
  foo: string;
}
