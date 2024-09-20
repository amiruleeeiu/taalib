import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class District {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
}
