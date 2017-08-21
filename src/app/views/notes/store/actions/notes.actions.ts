
import {Action} from '@ngrx/store';
import {Note} from '../../../../core/models/note';

export const LIST_NOTES = '[Notes] List';
export const NOTES_LISTED = '[Notes] Listed';

export const ADD_NOTE = '[Notes] Add';
export const NOTE_ADDED = '[Notes] Added';

export const UPDATE_NOTE = '[Notes] Update';
export const NOTE_UPDATED = '[Notes] Updated';

export const DELETE_NOTE = '[Notes] Delete';
export const NOTE_DELETE = '[Notes] Deleted';


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

export type All = AddNote | NoteAdded | ListNotes | NotesListed;
