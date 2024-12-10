import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './User.entity';
import { Repository } from 'typeorm';
import { CreateRegDto } from './dto/createReg.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
  ) {}
  async findAll(): Promise<User[]> {
    return this.UserRepository.find();
  }
  async create(createUserDto: CreateRegDto): Promise<User> {
    const user = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    return this.UserRepository.save(user);
  }
  async remove(id: number): Promise<void> {
    await this.UserRepository.delete(id);
  }
  async edit(id: number, createUserDto: CreateRegDto): Promise<User> {
    return this.UserRepository.save({ id, ...createUserDto });
  }
  async checkDatabaseConnection(): Promise<boolean> {
    try {
      await this.UserRepository.query('SELECT 1');
      return true;
    } catch {
      return false;
    }
  }
}
