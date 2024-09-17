import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AskedReplyController } from './controllers/ask-reply.controller';
import { AskController } from './controllers/ask.controller';
import { CategoryController } from './controllers/category.controller';
import { DiscussionController } from './controllers/discussion.controller';
import { DistrictController } from './controllers/district.controller';
import { ExamController } from './controllers/exam.controller';
import { QuestionController } from './controllers/question.controller';
import { QuizParticipantController } from './controllers/quiz-participant.controller';
import { QuizController } from './controllers/quiz.controllers';
import { TaskController } from './controllers/task.controller';
import { ThanaController } from './controllers/thana.controller';
import { UserExamController } from './controllers/user-exam.controller';
import { UserController } from './controllers/user.controller';
import { AskReply } from './entity/ask-reply.entity';
import { Ask } from './entity/ask.entites';
import { Category } from './entity/category.entity';
import { Discussion } from './entity/discussion.entity';
import { District } from './entity/district.entity';
import { Exam } from './entity/exam.entity';
import { Question } from './entity/question.entity';
import { QuizParticipant } from './entity/quiz-participants.entity';
import { Quiz } from './entity/quiz.entity';
import { Task } from './entity/task.entity';
import { Thana } from './entity/Thana.entites';
import { UserExam } from './entity/user-exam.entity';
import { User } from './entity/user.entity';
import { AskService } from './services/ask.service';
import { AskReplyService } from './services/asked-reply.service';
import { CategoryService } from './services/category.service';
import { DiscussionService } from './services/discussion.service';
import { ExamService } from './services/exam.service';
import { QuestionService } from './services/question.service';
import { QuizParticipantService } from './services/quiz-qarticipant.service';
import { QuizService } from './services/quiz.service';
import { TaskService } from './services/task.service';
import { UserExamService } from './services/user-exam.service';
import { UserService } from './services/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Your PostgreSQL host
      port: 5432,
      username: 'postgres', // Your PostgreSQL username
      password: '12345', // Your PostgreSQL password
      database: 'amirul', // Your PostgreSQL database name
      entities: [
        User,
        District,
        Thana,
        Question,
        Category,
        Ask,
        AskReply,
        Discussion,
        Quiz,
        QuizParticipant,
        Exam,
        Task,
        UserExam,
      ], // List your entities here
      synchronize: true, // Automatically synchroniz
    }),
    TypeOrmModule.forFeature([
      User,
      District,
      Thana,
      Question,
      Category,
      Ask,
      AskReply,
      Discussion,
      Quiz,
      QuizParticipant,
      Exam,
      Task,
      UserExam,
    ]),
  ],
  controllers: [
    UserController,
    DistrictController,
    ThanaController,
    QuestionController,
    CategoryController,
    AskController,
    AskedReplyController,
    DiscussionController,
    QuizController,
    QuizParticipantController,
    ExamController,
    TaskController,
    UserExamController,
  ],
  providers: [
    CategoryService,
    AskService,
    AskReplyService,
    DiscussionService,
    QuizService,
    QuizParticipantService,
    ExamService,
    TaskService,
    UserExamService,
    QuestionService,
    UserService,
  ],
})
export class AppModule {}
