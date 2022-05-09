import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Book')
export class Book {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  author: string;

  @Field()
  releaseDate: string;
}
