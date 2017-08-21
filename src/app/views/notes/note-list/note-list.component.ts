import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Note} from '../../../core/models/note';

import {NotesService} from '../services/notes.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  notes$: Observable<Note[]>;

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.notes$ = this.notesService
        .notesListed$
        .map(notes => Object.values(notes));

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
