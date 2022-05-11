/* eslint-disable prettier/prettier */
import { Query } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { BookType } from './book.type';
import { BooksService } from './books.service';

// eslint-disable-next-line prettier/prettier
@Resolver(of => BookType)
export class BooksResolver {

  constructor(private bookService: BooksService){}
  // @Query(returns => BookType)
  // book() {
  //   return {
  //     id: 'id1',
  //     title: 'bookTitle',
  //     author: 'bookAuthor',
  //     releaseDate: new Date().toISOString(),
  //   };
  // }

  @Mutation(returns => BookType)
  addBook(
    @Args('title') title: string,
    @Args('author') author: string,
    @Args('releaseDate') releaseDate: string,
  ) {
    return this.bookService.addBook(title, author, releaseDate);
  }
}
