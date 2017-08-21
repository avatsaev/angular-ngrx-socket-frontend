import { Component } from '@angular/core';
import {SocketService} from './core/services/socket.service';
import {Note} from './core/models/note';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes$: Observable<Note[]>;

  constructor(private socket: SocketService) {
    this.notes$ = socket.listen('[Notes] Listed').map(notes => Object.values(notes));

    socket.join('notes');

  }

  addNote(note: Note) {
    this.socket.emit('[Notes] Add', note);
  }

  deleteNote(note) {
    this.socket.emit('[Notes] Delete', note);
  }

  updateNote(note){
    this.socket.emit('[Notes] Update', {...note, body: '----'});
  }
}
