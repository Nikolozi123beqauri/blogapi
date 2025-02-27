import { Blog } from "src/blog/entities/blog.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar', length: 50})
    name: string

    @OneToMany(() => Blog, (blog) => blog.author)
    blogs: Blog[]
}
