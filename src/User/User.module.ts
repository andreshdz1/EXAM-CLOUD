import { Module } from '@nestjs/common';
import { UserService } from './User.service';
import { UsersController } from './User.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './User.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [UsersController],
})
export class UserModule {}
