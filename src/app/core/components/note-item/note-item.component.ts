import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Note} from '../../models/note';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit, OnChanges {

  @Input() note: Note;
  newNoteBody: string;

  @Output() onNoteUpdated = new EventEmitter<Note>();
  @Output() onNoteDeleted = new EventEmitter<Note>();

  editMode = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.newNoteBody = this.note.body;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
    if (!this.editMode) {
      // reset new body value on edit cancel
      this.newNoteBody = this.note.body;
    }
  }

  updateNote() {
    this.note.body = this.newNoteBody;
    this.onNoteUpdated.emit(this.note);
    this.toggleEditMode();
  }

  deleteNote() {
    this.onNoteDeleted.emit(this.note);
  }


}
