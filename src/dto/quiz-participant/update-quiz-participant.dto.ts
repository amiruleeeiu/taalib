import { ApiProperty } from '@nestjs/swagger';
import { CreateQuizParticipantDto } from './create-quiz-participant.dto';

export class UpdateQuizParticipantDto extends CreateQuizParticipantDto {
  @ApiProperty({
    example: 'fa4c85cb-5fbc-4c59-84e1-70dba6f4f25a',
    description: 'The id of the quiz participant',
  })
  id: string;
}
