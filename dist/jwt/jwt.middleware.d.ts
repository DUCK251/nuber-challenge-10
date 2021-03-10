import { NestMiddleware } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtModuleOptions } from './jwt.interfaces';
import { JwtService } from './jwt.service';
export declare class JwtMiddleware implements NestMiddleware {
    private readonly options;
    private readonly jwtService;
    private readonly usersService;
    constructor(options: JwtModuleOptions, jwtService: JwtService, usersService: UsersService);
    use(req: any, res: any, next: () => void): Promise<void>;
}
