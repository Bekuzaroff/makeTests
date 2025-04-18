import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, TypeOrmModule.forRootAsync({
    useFactory: () => ({
      type: 'postgres',
      entities: [],
      synchronize: true,
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '$2y$10$7Or08nwmYlCYz0N/MiuO8ejooZ6J4ycpx8btUJdAKH/9Ea1EkDdHy',
      database: 'testbestdb'
    })
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
