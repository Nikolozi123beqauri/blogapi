import { Author } from "src/author/entities/author.entity";
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

    @Column()
    authorId: number

}
