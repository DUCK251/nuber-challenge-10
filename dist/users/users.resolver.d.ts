import { CreateAccountInput, CreateAccountOutput } from './dtos/create-account.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { UpdateProfileInput, UpdateProfileOutput } from './dtos/update-profile.dto';
import { UserProfileInput, UserProfileOutput } from './dtos/user-profile.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    createAccount(createAccountInput: CreateAccountInput): Promise<CreateAccountOutput>;
    login(loginInput: LoginInput): Promise<LoginOutput>;
    me(user: User): User;
    getProfile(userProfileInput: UserProfileInput): Promise<UserProfileOutput>;
    updateProfile(user: User, updateProfileInput: UpdateProfileInput): Promise<UpdateProfileOutput>;
}
