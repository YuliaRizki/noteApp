import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';

@Injectable()
export class NotesService {
  private notes: CreateNoteDto[] = [];
  private newId = 1;

  createNote(title: string, content: string): CreateNoteDto {
    const newNote = { id: this.newId++, title, content, isDeleted: false };
    this.notes.push(newNote);
    console.log('Created note:', newNote);
    console.log('All notes:', this.notes);
    return newNote;
  }

  editNote(id: number, title: string, content: string): CreateNoteDto | null {
    const note = this.notes.find(note => note.id === id);
    if (note) {
      note.title = title;
      note.content = content;
      return note;
    }
    return null;
  }

  deleteNote(id: number): boolean {
    const note = this.notes.find(note => note.id === id);
    if (note) {
      note.isDeleted = true;
      return true;
    }
    return false;
  }

  getAllNotes(): CreateNoteDto[] {
    // console.log('Returning all notes:', this.notes);
    return this.notes.filter(note => !note.isDeleted);
  }

  getDeletedNotes(): CreateNoteDto[] {
    return this.notes.filter(note => note.isDeleted)
  }

  restoreNotes(id: number): boolean {
    const note = this.notes.find(note => note.id === id);
    if (note) {
      note.isDeleted = false;
      return true;
    }
    return false;
  }
}