import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { IsJWT } from 'class-validator';
import { CoreOutput } from 'src/common/entities/core.entity';
import { User } from '../entities/user.entity';

@InputType()
export class LoginInput extends PickType(User, ['email', 'password']) {}

@ObjectType()
export class LoginOutput extends CoreOutput {
  @Field(type => String, { nullable: true })
  @IsJWT()
  token?: string;
}
