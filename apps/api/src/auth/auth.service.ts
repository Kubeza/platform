import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hash, verify } from '@node-rs/argon2';

import { UsersRepository } from '../users/repositories/users.repository';

import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const exists = await this.usersRepository.exists(dto.email);

    if (exists) {
      throw new BadRequestException('User already exists');
    }

    const hashedPassword = await hash(dto.password);

    const user = await this.usersRepository.create({
      ...dto,
      password: hashedPassword,
    });

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    return {
      user,
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  async login(dto: LoginDto) {
    const user = await this.usersRepository.findByEmail(dto.email);

    if (!user) {
      throw new UnauthorizedException(
        'Invalid email or password',
      );
    }

    const validPassword = await verify(
      user.password,
      dto.password,
    );

    if (!validPassword) {
      throw new UnauthorizedException(
        'Invalid email or password',
      );
    }

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  async validateUser(userId: string) {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      return null;
    }

    return user;
  }
}