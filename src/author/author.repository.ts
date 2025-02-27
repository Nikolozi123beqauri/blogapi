import { InjectRepository } from "@nestjs/typeorm";
import { Author } from "./entities/author.entity";
import { Repository } from "typeorm";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { UpdateAuthorDto } from "./dto/update-author.dto";


export class AuthorRepository {
    constructor(
        @InjectRepository(Author)
        private readonly authorRepository: Repository<Author>
    ) {}


    async create(createAuthorDto: CreateAuthorDto) {
        const newAuthor = new Author
        newAuthor.name = createAuthorDto.name


        return await this.authorRepository.save(newAuthor)
    }


    async findAll() {
        return await this.authorRepository.find()
    }

    async findOne(id: number) {

        const author = await this.authorRepository.findOneBy({id})
        if(!author) {
            throw new BadRequestException('author not found')
        }

        return author;
    }


    async deleteAuthor(authorId: number) {
        const author = await this.findOne(authorId)
        if(!author) {
            throw new BadRequestException(`author with id ${authorId} not found`)
        }
        return await this.authorRepository.delete(authorId)
    }


    async updateAuthor(authorId: number, updateAuthorDto: UpdateAuthorDto) {
        const author = await this.findOne(authorId);
        if (!author) {
            throw new NotFoundException(`Author with ID ${authorId} not found`);
        }
    
        await this.authorRepository.update(authorId, updateAuthorDto);
        return this.findOne(authorId); // Return the updated author
    }
    

    

}