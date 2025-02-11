export interface Note {
    id: number;
    title: string;
    content: string;
    isDeleted?: boolean;
  }
  
  export interface CreateNoteInput {
    title: string;
    content: string;
  }
  
  export interface UpdateNoteInput extends CreateNoteInput {
    id: number;
  }