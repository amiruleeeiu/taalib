import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Thana {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;

  // @OneToMany(() => User, (user) => user.district)
  // users: User[];
}
