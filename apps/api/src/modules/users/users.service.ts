import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private readonly users: CreateUserDto[] = [];

  findAll() {
    return this.users;
  }

  create(user: CreateUserDto) {
    this.users.push(user);

    return {
      message: 'User created successfully',
      user,
    };
  }
}