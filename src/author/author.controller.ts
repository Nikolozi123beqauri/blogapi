import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';


@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }

  @Get()
  findAll() {
    return this.authorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorService.findOne(+id);
  }

  @Patch(':id')
  async updateAuthor(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return await this.authorService.updateAuthor(Number(id), updateAuthorDto)
  }

  @Delete(':id')
  async deleteAuthor(@Param('id') id: string) {
    return await this.authorService.deleteAuthor(Number(id))
  }
 
}
