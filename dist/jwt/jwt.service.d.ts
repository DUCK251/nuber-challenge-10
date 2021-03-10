import { JwtModuleOptions, JwtPayload } from './jwt.interfaces';
export declare class JwtService {
    private readonly options;
    constructor(options: JwtModuleOptions);
    getToken(payload: JwtPayload): string;
    getPayload(token: string): JwtPayload;
}
