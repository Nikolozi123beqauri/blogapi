import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { AuthorRepository } from './author.repository';
import { UpdateAuthorDto } from './dto/update-author.dto';


@Injectable()
export class AuthorService {

  constructor(private readonly authorRepository: AuthorRepository) {}

  async create(createAuthorDto: CreateAuthorDto) {
    return await this.authorRepository.create(createAuthorDto)
  }

  async findAll() {
    return await this.authorRepository.findAll()
  }
  
  async findOne(id: number) {
    return await this.authorRepository.findOne(id)
  } 

  async deleteAuthor(authorId: number) {
    return await this.authorRepository.deleteAuthor(authorId)
}

  async updateAuthor(authorId: number, updateAuthorDto: UpdateAuthorDto) {
    return await this.authorRepository.updateAuthor(authorId, updateAuthorDto)
  }

}
