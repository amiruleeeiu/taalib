import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractBaseEntity } from './abstract-base.entity';
import { Category } from './category.entity';

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

  @Column()
  reference: string;

  @Column({
    type: 'enum',
    enum: ['to_do', 'in_progress', 'done'],
    default: 'to_do',
  })
  status: string;

  @ManyToOne(() => Category, (category) => category.topics)
  topic: Category;

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
