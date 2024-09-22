import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractBaseEntity } from './abstract-base.entity';
import { AskReply } from './ask-reply.entity';

export enum AskStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

@Entity()
export class Ask extends AbstractBaseEntity {
  @Column()
  @ApiProperty({
    description: 'The text of the ask',
    example: 'Ask text',
  })
  text: string;

  @Column({ default: 0 })
  @ApiProperty({
    description: 'number of react 1',
    example: 2,
  })
  react1: number;

  @Column({ default: 0 })
  @ApiProperty({
    description: 'number of react 2',
    example: 1,
  })
  react2: number;

  @Column({
    type: 'enum',
    enum: AskStatus,
    default: AskStatus.ACTIVE,
  })
  @ApiProperty({
    description: 'The current status of the ask',
    example: AskStatus.ACTIVE,
    enum: AskStatus,
  })
  status: AskStatus;

  @OneToMany(() => AskReply, (askedReply) => askedReply.ask)
  @ApiProperty({
    description: 'The askedReply related to the ask',
    required: false,
    type: () => AskReply,
  })
  askReplies: AskReply[];
}
