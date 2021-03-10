import { Inject, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { CONFIG_OPTIONS } from './jwt.constants';
import { JwtModuleOptions, JwtPayload } from './jwt.interfaces';

@Injectable()
export class JwtService {
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: JwtModuleOptions,
  ) {}

  getToken(payload: JwtPayload): string {
    return jwt.sign(payload, this.options.privateKey);
  }

  getPayload(token: string): JwtPayload {
    return jwt.verify(token, this.options.privateKey);
  }
}
