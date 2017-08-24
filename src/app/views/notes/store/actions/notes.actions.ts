
import {Action} from '@ngrx/store';
import {Note} from '../../../../core/models/note';

export const LIST_NOTES    = '[Notes] List'; // client -> socket server (side effect)
export const NOTES_LISTED  = '[Notes] Listed';         // client -> store

export const ADD_NOTE      = '[Notes] Add';  // client -> socket server (side effect)
export const NOTE_ADDED    = '[Notes] Added';          // client -> store

export const UPDATE_NOTE   = '[Notes] Update'; // same for the rest ...
export const NOTE_UPDATED  = '[Notes] Updated';

export const DELETE_NOTE   = '[Notes] Delete';
export const NOTE_DELETED  = '[Notes] Deleted';


export class ListNotes implements Action {
  readonly type = LIST_NOTES;
}

export class NotesListed implements Action {
  readonly type = NOTES_LISTED;
  constructor(public payload?: {[id: string]: Note}) {}
}

export class AddNote implements Action {
  readonly type = ADD_NOTE;
  constructor(public payload?: Note) {}
}

export class NoteAdded implements Action {
  readonly type = NOTE_ADDED;
  constructor(public payload?: Note) {}
}

export class UpdateNote implements Action {
  readonly type = UPDATE_NOTE;
  constructor(public payload?: Note) {}
}

export class NoteUpdated implements Action {
  readonly type = NOTE_UPDATED;
  constructor(public payload?: Note) {}
}

export class DeleteNote implements Action {
  readonly type = DELETE_NOTE;
  constructor(public payload?: Note) {}
}

export class NoteDeleted implements Action {
  readonly type = NOTE_DELETED;
  constructor(public payload?: Note) {}
}

export type All =
    ListNotes
    | NotesListed
    | AddNote
    | NoteAdded
    | UpdateNote
    | NoteUpdated
    | DeleteNote
    | NoteDeleted;
