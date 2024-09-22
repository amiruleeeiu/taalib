import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractBaseEntity } from './abstract-base.entity';
import { Ask } from './ask.entites';

export enum AskReaplyStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

@Entity()
export class AskReply extends AbstractBaseEntity {
  @Column()
  @ApiProperty({
    description: 'The reply of the ask reply',
    example: 'Ask realy',
  })
  reply: string;

  @Column({ default: false })
  @ApiProperty({
    description: 'Is it ans ? ',
    example: false,
  })
  isAns: boolean;

  @Column({
    type: 'enum',
    enum: AskReaplyStatus,
    default: AskReaplyStatus.ACTIVE,
  })
  @ApiProperty({
    description: 'The current status of the ask reply',
    example: AskReaplyStatus.ACTIVE,
    enum: AskReaplyStatus,
  })
  status: AskReaplyStatus;

  @ManyToOne(() => Ask, (asked) => asked.askReplies)
  ask: Ask;
}
