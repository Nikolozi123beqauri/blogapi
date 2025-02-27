import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';
import { BlogService } from './blog.service';
import { BlogRepository } from './blog.repository';
import { BlogController } from './blog.controller';
import { AuthorRepository } from 'src/author/author.repository';
import { Author } from 'src/author/entities/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Blog, Author])],
  controllers: [BlogController],
  providers: [BlogService, BlogRepository, AuthorRepository],
})
export class BlogModule {}
