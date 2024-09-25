import {
  Column,
  CreateDateColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { User } from './user.entity'; // Adjust the path accordingly

export abstract class AbstractBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @VersionColumn({ default: 1 })
  version: number;

  @ManyToOne(() => User, { nullable: true })
  createdBy: User; // Lazy loading to avoid circular dependency

  @ManyToOne(() => User, { nullable: true })
  updatedBy: User; // Lazy loading to avoid circular dependency

  @Column({ default: false })
  isDeleted: boolean;
}
