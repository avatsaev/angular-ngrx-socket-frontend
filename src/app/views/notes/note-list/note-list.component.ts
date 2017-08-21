import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Note} from '../../../core/models/note';

import {NotesService} from '../services/notes.service';
import {Store} from '@ngrx/store';
import * as fromNotesStore from '../store';
import * as notesActions from '../store/actions/notes.actions';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  notes$: Observable<Note[]>;

  constructor(
      private store: Store<fromNotesStore.State>,
      private notesService: NotesService
  ) {}

  ngOnInit() {

    this.store.dispatch(new notesActions.ListNotes());

    this.notesService.notesListed$
        .map(notes => new notesActions.PopulateNotes(notes))
        .subscribe(this.store);


    this.notes$ = this.store.select(fromNotesStore.getEntitiesArray);

  }

  addNote(note: Note) {
    this.notesService.addNote(note);

  }


  updateNote(note: Note) {
    this.notesService.updateNote(note);
  }

  deleteNote(note: Note) {
    const r = confirm('Are you sure?');
    if (r) {
      this.notesService.deleteNote(note);
    }

  }


}
