import { IsNotEmpty, IsString } from "class-validator";

export class CreateBlogDto {
    @IsString()
    @IsNotEmpty({ message: 'Title is required' })
    title: string;

}
