import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import {
  UserResponse,
  UsersRepository,
} from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
  ) {}

  async create(
    createUserDto: CreateUserDto,
  ): Promise<UserResponse> {
    const exists = await this.usersRepository.exists(
      createUserDto.email,
    );

    if (exists) {
      throw new BadRequestException('User already exists');
    }

    return this.usersRepository.create(createUserDto);
  }

  async findAll(): Promise<UserResponse[]> {
    return this.usersRepository.findAll();
  }

  async findOne(id: string): Promise<UserResponse> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findByEmail(email: string) {
    return this.usersRepository.findByEmail(email);
  }

  async update(
    id: string,
    data: Partial<CreateUserDto>,
  ): Promise<UserResponse> {
    await this.findOne(id);

    return this.usersRepository.update(id, data);
  }

  async remove(id: string): Promise<UserResponse> {
    await this.findOne(id);

    return this.usersRepository.delete(id);
  }

  async count(): Promise<number> {
    return this.usersRepository.count();
  }

  async clear(): Promise<void> {
    await this.usersRepository.deleteAll();
  }
}