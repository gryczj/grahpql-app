import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books/book.entity';
import { BooksModule } from './books/books.module';
import { BooksService } from './books/books.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/library',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Book],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    BooksModule,
  ],
  providers: [BooksService],
})
export class AppModule {}
