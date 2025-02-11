import { Injectable, Logger } from '@nestjs/common';
import { NoteDto } from './dto/note.dto';

@Injectable()
export class NotesService {
  private readonly logger = new Logger(NotesService.name);
  private notes: NoteDto[] = [];
  private newId = 1;

  createNote(title: string, content: string): NoteDto {
    this.logger.log(`Creating new note with title: ${title}`);
    const newNote = { id: this.newId++, title, content, isDeleted: false };
    this.notes.push(newNote);
    this.logger.debug(`Note created successfully with ID: ${newNote.id}`);
    return newNote;
  }
  editNote(id: number, title: string, content: string): NoteDto | null {
    const note = this.notes.find((note) => note.id === id);
    if (note) {
      note.title = title;
      note.content = content;
      return note;
    }
    return null;
  }

  deleteNote(id: number): boolean {
    const note = this.notes.find((note) => note.id === id);
    if (note) {
      note.isDeleted = true;
      return true;
    }
    return false;
  }

  getAllNotes(): NoteDto[] {
    this.logger.log('Retrieving all active notes');
    const activeNotes = this.notes.filter((note) => !note.isDeleted);
    this.logger.debug(`Found ${activeNotes.length} active notes`);
    return activeNotes;
  }

  getDeletedNotes(): NoteDto[] {
    return this.notes.filter((note) => note.isDeleted);
  }

  restoreNotes(id: number): boolean {
    const note = this.notes.find((note) => note.id === id);
    if (note) {
      note.isDeleted = false;
      return true;
    }
    return false;
  }
}
