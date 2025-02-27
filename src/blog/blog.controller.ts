import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post(':authorId')
  create(@Body() createBlogDto: CreateBlogDto, @Param('authorId') authorId: string) {
    return this.blogService.create(createBlogDto, Number(authorId));
  }

  @Get()
  findAll() {
    return this.blogService.findAll();
  }

  @Get(':blogId')
  findOne(@Param('blogId') blogId: string) {
    return this.blogService.findOne(Number(blogId));
  }

  @Patch(':blogId')
 async updateBlog(@Param('blogId') blogId: string, @Body()  updateBlogDto: UpdateBlogDto) {
    return await this.blogService.updateBlog(Number(blogId), updateBlogDto)
 }

  @Delete(':blogId')
  async deleteBlog(@Param('blogId') blogId: string) {
    return await this.blogService.deleteBlog(Number(blogId))
 }
  


}
