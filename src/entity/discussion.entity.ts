import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Discussion {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  text: string;

  // @ManyToOne(() => User, (user) => user.discussions)
  // user: User;

  @Column({ default: true })
  status: boolean;
}
