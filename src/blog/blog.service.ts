import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { BlogRepository } from './blog.repository';
import { AuthorRepository } from 'src/author/author.repository';

@Injectable()
export class BlogService {

  constructor(
    private readonly blogRepository: BlogRepository,
    private readonly authorRepository: AuthorRepository,
  ) {}

  async create(createBlogDto: CreateBlogDto, authorId: number) {
    
    const author = await this.authorRepository.findOne(authorId)

    

    return await this.blogRepository.create(createBlogDto, authorId)
  }

  async findAll() {
    return await this.blogRepository.findAllBlogs()
  }

  async findOne(blogId: number) {
    return await this.blogRepository.findOneBlog(blogId)
  }


  async deleteBlog(blogId: number) {
    return await this.blogRepository.deleteBlog(blogId)
 }

 async updateBlog(blogId: number, updateBlogDto: UpdateBlogDto) {
    return await this.blogRepository.updateBlog(blogId, updateBlogDto)
 }


}
