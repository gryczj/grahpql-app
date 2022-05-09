import { Query } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';
import { Book } from './book.type';

@Resolver((of) => Book)
export class BooksResolver {
  @Query((returns) => Book)
  book(): Book {
    return {
      id: 'id1',
      title: 'bookTitle',
      author: 'bookAuthor',
      releaseDate: new Date().toISOString(),
    };
  }
}
