import { Blog } from "src/blog/entities/blog.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text: string

    @ManyToOne(() => Blog, (blog) => blog.comments)
    blog: Blog

    @Column()
    blogId: number
}
