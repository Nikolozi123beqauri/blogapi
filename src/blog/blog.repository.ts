import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Blog } from "./entities/blog.entity";
import { CreateBlogDto } from "./dto/create-blog.dto";
import { UpdateBlogDto } from "./dto/update-blog.dto";
import { BadRequestException } from "@nestjs/common";




export class BlogRepository {
     authorRepository: any;
     constructor(
        @InjectRepository(Blog)
        private readonly blogRepository: Repository<Blog>
     ) {}

     async create(createBlogDto: CreateBlogDto, authorId: number) {


         const newBlog = new Blog()
         newBlog.title = createBlogDto.title
         newBlog.authorId = authorId
         
         return await this.blogRepository.save(newBlog)
     }


    async findAllBlogs() {
      return await this.blogRepository.find()
   }

   async findOneBlog(id: number) {
      const blog = await this.blogRepository.findOneBy({id})
      if(!blog) {         

         throw new BadRequestException(`blog with id ${id} not found`)
      }
      return  blog;
   }


   async deleteBlog(blogId: number) {
      return await this.blogRepository.delete(blogId)
   }

   async updateBlog(blogId: number, updateBlogDto: UpdateBlogDto) {
      await this.blogRepository.update(blogId, updateBlogDto)
      const blog = this.findOneBlog(blogId)
      return blog
   }
}