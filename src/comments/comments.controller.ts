import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post(':blogId')
  create(@Body() createCommentDto: CreateCommentDto, @Param('blogId') blogId: string) {
    return this.commentsService.create(createCommentDto, Number(blogId));
  }


  @Get('blogscomments/:blogId')
  findAllCommentsByBlog(@Param('blogId') blogId: number) {
    return this.commentsService.findAllCommentsByBlog(blogId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }
}
