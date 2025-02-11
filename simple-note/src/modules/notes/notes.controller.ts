import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { NoteDto } from './dto/note.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}
  @Post()
  create(@Body() createNoteDto: NoteDto) {
    return this.notesService.createNote(
      createNoteDto.title,
      createNoteDto.content,
    );
  }

  @Get()
  findAll() {
    return this.notesService.getAllNotes();
  }

  @Get('deleted')
  findDeleted() {
    return this.notesService.getDeletedNotes();
  }
  @Put(':id')
  edit(@Param('id') id: string, @Body() createNoteDto: NoteDto) {
    const noteId = parseInt(id, 10);
    return this.notesService.editNote(
      noteId,
      createNoteDto.title,
      createNoteDto.content,
    );
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    const noteId = parseInt(id, 10);
    return this.notesService.deleteNote(noteId);
  }

  @Post('restore/:id')
  restore(
    @Param('id') id: string,
  ): boolean {
    const noteId = parseInt(id, 10);
    return this.notesService.restoreNotes(noteId);
  }
}
