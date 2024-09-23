import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Expose()
  phone: string;

  @Expose()
  occupation: string;

  @Expose()
  location: string;

  @Expose()
  gender: string;

  @Expose()
  isActive: boolean;
}
