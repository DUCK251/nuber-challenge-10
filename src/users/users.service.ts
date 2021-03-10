import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-account.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { User } from './entities/user.entity';
import { JwtService } from 'src/jwt/jwt.service';
import { UserProfileInput, UserProfileOutput } from './dtos/user-profile.dto';
import {
  UpdateProfileInput,
  UpdateProfileOutput,
} from './dtos/update-profile.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<CreateAccountOutput> {
    try {
      const user = await this.users.findOne({ email });
      if (user) {
        return {
          error: 'User already exists',
          ok: false,
        };
      }
      const newUser = await this.users.create({ email, password, role });
      await this.users.save(newUser);
      return {
        ok: true,
      };
    } catch (error) {
      return {
        error,
        ok: false,
      };
    }
  }

  async login({ email, password }: LoginInput): Promise<LoginOutput> {
    try {
      const user = await this.users.findOne(
        { email },
        { select: ['id', 'password'] },
      );
      if (!user) {
        return {
          ok: false,
          error: 'User does not exist',
        };
      }
      const isPasswordValid = await user.checkPassword(password);
      if (!isPasswordValid) {
        return {
          ok: false,
          error: 'Password is invalid',
        };
      }
      const token = this.jwtService.getToken({ id: user.id });
      return {
        ok: true,
        token,
      };
    } catch (error) {
      return { ok: false, error };
    }
  }

  async findById(id: number): Promise<User> {
    return await this.users.findOne({ id });
  }

  async getProfile({ userId }: UserProfileInput): Promise<UserProfileOutput> {
    try {
      const user = await this.users.findOne({ id: userId });
      if (!user) {
        return {
          error: 'User Not Found',
          ok: false,
        };
      }
      return {
        ok: true,
        user,
      };
    } catch (error) {
      return {
        error,
        ok: false,
      };
    }
  }

  async updateProfile(
    id: number,
    { email, password }: UpdateProfileInput,
  ): Promise<UpdateProfileOutput> {
    try {
      const user = await this.users.findOne(id);
      if (!user) {
        return {
          ok: false,
          error: 'User Not Found',
        };
      }
      if (email) {
        user.email = email;
      }
      if (password) {
        user.password = password;
      }
      await this.users.save(user);
      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }
}
