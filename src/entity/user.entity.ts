import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  @ApiProperty({
    description: 'The reply of the ask reply',
    example: 'Amirul',
  })
  name: string;

  @Column({ length: 100 })
  @ApiProperty({
    description: 'The reply of the ask reply',
    example: '01747162231',
  })
  phone: string;

  @Column({ length: 100 })
  @ApiProperty({
    description: 'The reply of the ask reply',
    example: 'amirul@gmail.com',
  })
  email: string;

  @Column({ length: 100, nullable: true })
  @ApiProperty({
    description: 'The reply of the ask reply',
    example: 'Software Developer',
  })
  occupation: string;

  @Column({ length: 100, nullable: true })
  @ApiProperty({
    description: 'The reply of the ask reply',
    example: 'Mirpur',
  })
  location: string;

  @Column({ length: 100, nullable: true })
  @ApiProperty({
    description: 'The reply of the ask reply',
    example: 'Aa@123',
  })
  password: string;

  @Column({ type: 'enum', enum: ['male', 'female'], default: 'male' })
  @ApiProperty({
    description: 'The reply of the ask reply',
    example: 'male/female',
  })
  gender: 'male' | 'female';

  @Column({ type: 'boolean', default: true })
  @ApiProperty({
    description: 'The reply of the ask reply',
    example: 'true/false',
  })
  isActive: boolean;
}
