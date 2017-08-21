import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NoteItemComponent} from '../components/note-item/note-item.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    NoteItemComponent
  ],
  exports: [
    NoteItemComponent,
    FormsModule,
  ]
})
export class SharedModule { }
