import { CoreOutput } from 'src/common/entities/core.entity';
import { User } from '../entities/user.entity';
export declare class UpdateProfileOutput extends CoreOutput {
}
declare const UpdateProfileInput_base: import("@nestjs/common").Type<Partial<Pick<User, "email" | "password" | "role" | "hashPassword" | "id" | "checkPassword" | "createdAt" | "updatedAt">>>;
export declare class UpdateProfileInput extends UpdateProfileInput_base {
}
export {};
