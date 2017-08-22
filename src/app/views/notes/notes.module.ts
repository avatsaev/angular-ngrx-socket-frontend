import { NgModule } from '@angular/core';
import { NoteListComponent } from './note-list/note-list.component';
import {NotesRoutingModule} from './notes-routing.module';
import {SocketService} from '../../core/services/socket.service';
import {NotesService} from './services/notes.service';
import {SharedModule} from '../../core/modules/shared.module';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromNotesStore from './store';
import {EffectsModule} from '@ngrx/effects';
import {NotesEffects} from './store/effects/notes.effects';

@NgModule({
  imports: [
    CommonModule,
    NotesRoutingModule,
    SharedModule,
    StoreModule.forFeature('notes', fromNotesStore.reducers),
    EffectsModule.forFeature([NotesEffects]),
  ],
  declarations: [NoteListComponent],
  providers: [
      SocketService, NotesService
  ]
})
export class NotesModule { }
