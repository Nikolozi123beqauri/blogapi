import { Author } from "src/author/entities/author.entity";
import { Comment } from "src/comments/entities/comment.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @CreateDateColumn()
    publishedDate!: Date;
  
    @ManyToOne(() => Author, (author) => author.blogs)
    author: Author

    @OneToMany(() => Comment, (comment) => comment.blogId)
    comments: Comment[]

    @Column()
    authorId: number


    @Column()
    text: string

}
