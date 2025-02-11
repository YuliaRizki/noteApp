import { API_ENDPOINTS } from './config';
import { Note, CreateNoteInput, UpdateNoteInput } from '../types/note';

export const notesApi = {
  getAll: async (): Promise<Note[]> => {
    try {
      const response = await fetch(API_ENDPOINTS.notes.base);
      const data = await response.json();
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error('Error fetching notes:', error);
      return [];
    }
  },

  getDeleted: async (): Promise<Note[]> => {
    try {
      const response = await fetch(API_ENDPOINTS.notes.deleted);
      const data = await response.json();
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error('Error fetching deleted notes:', error);
      return [];
    }
  },

  create: async (note: CreateNoteInput): Promise<Note | null> => {
    try {
      const response = await fetch(API_ENDPOINTS.notes.base, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });
      return await response.json();
    } catch (error) {
      console.error('Error creating note:', error);
      return null;
    }
  },

  update: async (id: number, updatedNote: { title: string; content: string; }): Promise<Note | null> => {
    try {
      const response = await fetch(API_ENDPOINTS.notes.byId(id), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedNote),
      });
      return await response.json();
    } catch (error) {
      console.error('Error updating note:', error);
      return null;
    }
  },

  delete: async (id: number): Promise<boolean> => {
    try {
      await fetch(API_ENDPOINTS.notes.byId(id), {
        method: 'DELETE',
      });
      return true;
    } catch (error) {
      console.error('Error deleting note:', error);
      return false;
    }
  },

  restore: async (id: number): Promise<boolean> => {
    try {
      await fetch(API_ENDPOINTS.notes.restore(id), {
        method: 'POST',
      });
      return true;
    } catch (error) {
      console.error('Error restoring note:', error);
      return false;
    }
  },
};