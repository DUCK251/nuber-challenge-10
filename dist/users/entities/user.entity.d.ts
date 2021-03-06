import { CoreEntity } from 'src/common/entities/core.entity';
declare enum UserRole {
    Host = 0,
    Listener = 1
}
export declare class User extends CoreEntity {
    email: string;
    password: string;
    role: UserRole;
    hashPassword(): Promise<void>;
    checkPassword(passwordInput: string): Promise<boolean>;
}
export {};
