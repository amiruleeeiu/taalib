import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends CreateUserDto {
  @ApiProperty({
    example: 'f1ed3e49-78fb-4655-b326-f5ae49e9946c',
    description: 'The name of the user',
  })
  id: string;
}
