import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Comment } from "./entities/comment.entity";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { threadId } from "worker_threads";





@Injectable()
export class CommentsRepository {
   constructor(
    @InjectRepository(Comment)
    private readonly commentsRepository: Repository<Comment>
   ) {} 

   async create(createCommentDto: CreateCommentDto, blogId: number) {
      const newComment = new Comment()
      newComment.text = createCommentDto.text
      newComment.blogId = blogId
      
      return await this.commentsRepository.save(newComment)
   }

   async findAllCommentsByBlog(blogId: number) {
      return await this.commentsRepository.find({where: {blogId: blogId}})
   }
 
   async findOneComment(id: number) {
      return await this.commentsRepository.findOneBy({id})
   }

   async deleteComment(id: number) {
      return await this.commentsRepository.delete(id)
   }
   async updateComment (id: number, updateCommentDto: UpdateCommentDto) {
      const comment = await this.findOneComment(id);
      if (!comment) {
         throw new NotFoundException(`Comment with ID ${id} not found`);
      }
   
      await this.commentsRepository.update(id, updateCommentDto);
   
      return this.findOneComment(id);
   }
   
}