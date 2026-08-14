import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';

import { BaseRepository } from '../../common/database/base.repository';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';

const userSelect = {
  id: true,
  name: true,
  email: true,
  role: true,
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.UserSelect;

export type UserResponse = Prisma.UserGetPayload<{
  select: typeof userSelect;
}>;

@Injectable()
export class UsersRepository extends BaseRepository {
  constructor(
    private readonly prismaService: PrismaService,
  ) {
    super(prismaService);
  }

  async create(dto: CreateUserDto): Promise<UserResponse> {
    return this.prisma.user.create({
      data: dto,
      select: userSelect,
    });
  }

  async findAll(): Promise<UserResponse[]> {
    return this.prisma.user.findMany({
      select: userSelect,
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string): Promise<UserResponse | null> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
      select: userSelect,
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async update(
    id: string,
    data: Partial<CreateUserDto>,
  ): Promise<UserResponse> {
    return this.prisma.user.update({
      where: {
        id,
      },
      data,
      select: userSelect,
    });
  }

  async delete(id: string): Promise<UserResponse> {
    return this.prisma.user.delete({
      where: {
        id,
      },
      select: userSelect,
    });
  }

  async exists(email: string): Promise<boolean> {
    const count = await this.prisma.user.count({
      where: {
        email,
      },
    });

    return count > 0;
  }

  async count(): Promise<number> {
    return this.prisma.user.count();
  }

  async deleteAll(): Promise<void> {
    await this.prisma.user.deleteMany();
  }
}