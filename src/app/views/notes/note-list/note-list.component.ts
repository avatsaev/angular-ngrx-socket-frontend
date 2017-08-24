import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Note} from '../../../core/models/note';
import {Store} from '@ngrx/store';
import * as fromNotesStore from '../store';
import * as notesActions from '../store/actions/notes.actions';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],

  // The state reducers return new references of state slices, so we can relax the change detection strategy
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteListComponent implements OnInit {

  notes$: Observable<Note[]>;

  constructor(
      private store: Store<fromNotesStore.State>,
  ) {}

  ngOnInit() {
    // subscribe to the store and select notes array
    this.notes$ = this.store.select(fromNotesStore.getEntitiesArray);
  }

  addNote(note: Note) {
    this.store.dispatch(new notesActions.AddNote(note));
  }


  updateNote(note: Note) {
    this.store.dispatch(new notesActions.UpdateNote(note));
  }

  deleteNote(note: Note) {
    const r = confirm('Are you sure?');
    if (r) {
      this.store.dispatch(new notesActions.DeleteNote(note));
    }

  }

}
