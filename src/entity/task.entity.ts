import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractBaseEntity } from './abstract-base.entity';
import { Category } from './category.entity';
import { User } from './user.entity';

@Entity()
export class Task extends AbstractBaseEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column({
    type: 'enum',
    enum: ['PENDING', 'ACCEPTED', 'REJECTED'],
    default: 'PENDING',
  })
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';

  @ManyToOne(() => Category, (category) => category.topics)
  topic: Category;

  @ManyToOne(() => User, (user) => user.noFroms)
  noFrom: User;

  @ManyToOne(() => User, (user) => user.noTos)
  noTo: User;

  //reference json
}

// {
//   bookId:'',
//   chapterFrom:10,
//   chapterTo:20,
//   pageNoFrom:5,
//   pageNoTo:7,
//   startFrom:1,
//   startTo:2

// }
