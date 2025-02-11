import { ApiProperty } from '@nestjs/swagger';

export class NoteDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  isDeleted?: boolean = false
}