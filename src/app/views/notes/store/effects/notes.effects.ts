


import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {NotesService} from '../../services/notes.service';
import * as notesActions from '../actions/notes.actions';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';


@Injectable()


export class NotesEffects {

  @Effect({dispatch: false})
  listNotes$ = this.actions$
      .ofType(notesActions.LIST_NOTES)
      .startWith(new notesActions.ListNotes())
      .do(() => this.notesService.listNotes());

  @Effect()
  notesListed$: Observable<Action> = this.actions$
      .ofType(notesActions.NOTES_LISTED)
      .map((action: notesActions.NotesListed) => action.payload)
      .switchMap(note =>
          Observable.of(new notesActions.PopulateNotes(note))
      )

  @Effect({dispatch: false})
  addNote$  = this.actions$
      .ofType(notesActions.ADD_NOTE)
      .map((action: notesActions.AddNote) => action.payload)
      .do((note) => this.notesService.addNote(note));






  constructor(private actions$: Actions, private notesService: NotesService) {}
}
