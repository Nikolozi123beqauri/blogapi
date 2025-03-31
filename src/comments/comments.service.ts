import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentsRepository } from './comments.repository';

@Injectable()
export class CommentsService {

  constructor(private readonly commentsRepository: CommentsRepository) {}

  async create(createCommentDto: CreateCommentDto, blogId: number) {
    return await this.commentsRepository.create(createCommentDto, blogId)
  }

  async findAllCommentsByBlog(blogId: number) {
    return await this.commentsRepository.findAllCommentsByBlog(blogId)
  }

  async findOne(id: number) {
    return await this.commentsRepository.findOneComment(id)
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    return await this.commentsRepository.updateComment(id, updateCommentDto);
  }

  async remove(id: number) {
    return await this.commentsRepository.deleteComment(id);
  }
}
