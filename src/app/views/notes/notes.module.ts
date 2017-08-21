import { NgModule } from '@angular/core';
import { NoteListComponent } from './note-list/note-list.component';
import {NotesRoutingModule} from './notes-routing.module';
import {SocketService} from '../../core/services/socket.service';
import {NotesService} from './services/notes.service';
import {SharedModule} from '../../core/modules/shared.module';;
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NotesRoutingModule,
    SharedModule
  ],
  declarations: [NoteListComponent],
  providers: [
      SocketService, NotesService
  ]
})
export class NotesModule { }
