


import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {NotesService} from '../../services/notes.service';
import * as notesActions from '../actions/notes.actions';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';


@Injectable()

export class NotesEffects {

  @Effect({dispatch: false}) // effect will not dispatch any actions
  listNotes$ = this.actions$
      .ofType(notesActions.LIST_NOTES) // requesting the socket server to list the notes for us
      .startWith(new notesActions.NotesListed()) // List notes automatically when applications starts
      .do(() => this.notesService.listNotes());

  @Effect()
  notesListed$: Observable<Action> =
      this.notesService.notesListed$ // listen to the socket for NOTES LIST event
      .switchMap(notes =>
          Observable.of(new notesActions.NotesListed(notes)) // ask the the store to populate the notes
      );

  @Effect({dispatch: false})
  addNote$ = this.actions$
      .ofType(notesActions.ADD_NOTE)
      .map((action: notesActions.AddNote) => action.payload)
      .do((note) => this.notesService.addNote(note));

  @Effect()
  noteAdded$: Observable<Action> =
      this.notesService.noteAdded$
      .switchMap(note =>
          Observable.of(new notesActions.NoteAdded(note))
      );

  @Effect({dispatch: false})
  updateNote$ = this.actions$
      .ofType(notesActions.UPDATE_NOTE)
      .map((action: notesActions.UpdateNote) => action.payload)
      .do((note) => this.notesService.updateNote(note));

  @Effect()
  noteUpdated$: Observable<Action> =
      this.notesService.noteUpdated$
      .switchMap(note =>
          Observable.of(new notesActions.NoteUpdated(note))
      );

  @Effect({dispatch: false})
  deleteNote$ = this.actions$
      .ofType(notesActions.DELETE_NOTE)
      .map((action: notesActions.UpdateNote) => action.payload)
      .do((note) => this.notesService.deleteNote(note));

  @Effect()
  noteDeleted$: Observable<Action> =
      this.notesService.noteDeleted$
      .switchMap(note =>
          Observable.of(new notesActions.NoteDeleted(note))
      );

  constructor(private actions$: Actions, private notesService: NotesService) {}
}
