import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async addBook(title, author, releaseDate): Promise<Book> {
    const book = this.bookRepository.create({
      id: uuid(),
      title,
      author,
      releaseDate,
    });

    return this.bookRepository.save(book);
  }
}
