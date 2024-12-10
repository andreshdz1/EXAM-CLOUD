import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './User.service';
import { CreateRegDto } from './dto/createReg.dto';
import { User } from './User.entity';
@Controller('Users')

//CRUD PRINCIPAL
export class UsersController {
  constructor(private UserService: UserService) {}

  //crear registro
  @Post()
  create(@Body() createUsersDto: CreateRegDto): Promise<User> {
    return this.UserService.create(createUsersDto);
  }

  //obtener todos los registros
  @Get()
  async findAll(): Promise<User[]> {
    return await this.UserService.findAll();
  }

  //Eliminar registro
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return await this.UserService.remove(id);
  }

  //actualizar registro
  @Post(':id')
  async editExam(
    @Param('id') id: number,
    @Body() CreateRegDto: CreateRegDto,
  ): Promise<User> {
    return this.UserService.edit(id, CreateRegDto);
  }
  //PUNTO EXTRA :)
  @Get('health')
  async checkHealth(): Promise<{ status: string }> {
    const isHealthy = await this.UserService.checkDatabaseConnection();
    if (isHealthy) {
      return { status: 'Database connection is healthy' };
    } else {
      return { status: 'Database connection is not healthy' };
    }
  }
}
