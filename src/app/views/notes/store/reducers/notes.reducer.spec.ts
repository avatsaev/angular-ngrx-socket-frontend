
import * as fromNotes from './notes.reducer';
import * as notesActions from '../actions/notes.actions';
import {Note} from '../../../../core/models/note';


// TODO: remove f from fdescribe to enable the rest of the tests
fdescribe('Notes state management', () => {

  let state: fromNotes.State;

  beforeEach(() => {

    state = {
      ids: ['a', 'b'],
      entities: {
        'a': {
          id: 'a',
          username: 'user_a',
          body: 'content a'
        },
        'b': {
          id: 'b',
          username: 'b',
          body: 'content b'
        }
      },
      selectedNoteId: 'a'
    };

  });

  describe('Notes state reducers', () => {

    it('should return init state when action is unknown', () => {
      const action = {} as any;
      const newState = fromNotes.reducer(undefined, action);
      expect(newState).toEqual(fromNotes.INIT_STATE);
    });


    it('should list notes', () => {

      const notes = {
        'a': {
          id: 'a',
          username: 'user_a',
          body: 'content a'
        },
        'c': {
          id: 'c',
          username: 'c',
          body: 'content c'
        }
      };

      const action = new notesActions.NotesListed(notes);

      const newState = fromNotes.reducer(state, action);

      expect(newState.ids.length).toEqual(2);
      expect(newState.ids).toEqual(['a', 'c']);
      expect(Object.values(newState.entities)).toEqual(Object.values(notes));

    });


    it('should not add an existing note', () => {

      const note =  {
        id: 'b',
        username: 'b',
        body: 'content b'
      };


      const action = new notesActions.NoteAdded(note);

      const newState = fromNotes.reducer(state, action);

      expect(newState.ids.length).toEqual(2);
      expect(newState.ids).toEqual(['a', 'b']);

    });

    it('should add a new note', () => {

      const note =  {
        id: 'c',
        username: 'c',
        body: 'content c'
      };

      const action = new notesActions.NoteAdded(note);
      const newState = fromNotes.reducer(state, action);

      expect(newState.ids.length).toEqual(3);
      expect(newState.ids).toEqual(['a', 'b', 'c']);
    });

    it('should update an existing note', () => {
      const note: Note = {
        id: 'b',
        username: 'new name',
        body: 'new body'
      };

      const action = new notesActions.NoteUpdated(note);

      const newState = fromNotes.reducer(state, action);

      expect(newState.ids.length).toEqual(2);
      expect(newState.entities[note.id]).toEqual({
        username: 'new name',
        id: note.id,
        body: 'new body'
      });

    });

    it('should create an non existing note on update', () => {
      const note: Note = {
        id: 'd',
        username: 'd',
        body: 'd'
      };

      const action = new notesActions.NoteUpdated(note);

      const newState = fromNotes.reducer(state, action);

      expect(newState.ids.length).toEqual(3);
      expect(newState.entities[note.id]).toEqual({
        username: 'd',
        id: note.id,
        body: 'd'
      });

    });

    it('should delete a note', () => {
      const note = {
        id: 'b',
      } as Note;

      const action = new notesActions.NoteDeleted(note);

      const newState = fromNotes.reducer(state, action);

      expect(newState.ids.length).toEqual(1);
      expect(newState.entities[note.id]).toBeUndefined();
    });


  });


  describe('Notes state selectors', () => {

    it('should select current id', () => {
      const slice = fromNotes.getSelectedId(state);
      expect(slice).toEqual('a');
    });

    it('should select entities', () => {
      const slice = fromNotes.getEntites(state);
      expect(slice).toEqual(state.entities);
    });

    it('should select ids', () => {
      const slice = fromNotes.getIds(state);
      expect(slice).toEqual(state.ids);
    });

    it('should select current note', () => {
      const slice = fromNotes.getSelected(state);
      expect(slice).toEqual(state.entities[state.selectedNoteId]);
    });

    it('should select all entities array', () => {
      const slice = fromNotes.getEntitesArray(state);
      expect(slice.length).toEqual(2);
      expect(slice).toEqual([
        {
          id: 'a',
          username: 'user_a',
          body: 'content a'
        },
        {
          id: 'b',
          username: 'b',
          body: 'content b'
        }
      ]);
    });

  });

});


