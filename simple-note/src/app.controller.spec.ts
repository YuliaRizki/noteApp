import { Test, TestingModule } from '@nestjs/testing';
import { NotesController } from './modules/notes/notes.controller';
import { NotesService } from './modules/notes/notes.service';

describe('NotesController', () => {
  let notesController: NotesController;
  let notesService: NotesService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NotesController],
      providers: [NotesService],
    }).compile();

    notesController = app.get<NotesController>(NotesController);
    notesService = app.get<NotesService>(NotesService);
  });

  describe('findAll', () => {
    it('should return an array of notes', () => {
      const result = [];
      expect(notesController.findAll()).toEqual(result);
    });
  });
});
