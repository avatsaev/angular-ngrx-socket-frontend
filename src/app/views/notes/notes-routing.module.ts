

import {RouterModule, Routes} from '@angular/router';
import {NoteListComponent} from './note-list/note-list.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: NoteListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NotesRoutingModule {}
