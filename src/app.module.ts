import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './author/author.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Xalxtamdzleveli1',
      database: 'blogapi',
      autoLoadEntities:true,
      synchronize: true,
    }),
    BlogModule,
    AuthorModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
