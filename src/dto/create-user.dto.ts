import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'The name field is required.' })
  name: string;

  // @IsNotEmpty({ message: 'The email field is required.' })
  // email: string;

  // @IsNotEmpty({ message: 'The password field is required.' })
  // password: string;
}
