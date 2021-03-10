import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { CONFIG_OPTIONS } from './jwt.constants';
import { JwtModuleOptions, JwtPayload } from './jwt.interfaces';
import { JwtService } from './jwt.service';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: JwtModuleOptions,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}
  async use(req: any, res: any, next: () => void) {
    if (this.options.tokenType in req.headers) {
      const token: string = req.headers[this.options.tokenType];
      try {
        const payload: JwtPayload = this.jwtService.getPayload(token);
        const user: User = await this.usersService.findById(payload['id']);
        req['user'] = user;
      } catch (e) {}
    }
    next();
  }
}
