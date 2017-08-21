

import {Note} from '../../../../core/models/note';
import * as notesActions from '../actions/notes.actions';
import {createSelector} from '@ngrx/store';

export interface State {
  ids: string[];
  entities: { [id: string]: Note };
  selectedNoteId: string;
}

export const INIT_STATE: State = {
  ids: [],
  entities: {},
  selectedNoteId: null
};


export function reducer(state = INIT_STATE, action: notesActions.All): State {

  switch (action.type) {

    case notesActions.POPULATE_NOTES : {

      const ids = Object.keys(action.payload);
      return {

        ...state,
        ids,
        entities: action.payload

      };

    }

    case notesActions.NOTE_ADDED : {

      if (state.ids.includes(action.payload.id)) {
        return state;
      }

      return {
        ...state,
        ids: [...state.ids, action.payload.id],
        entities: Object.assign({}, state.entities, {[action.payload.id]: action.payload})
      };

    }

    default: return state;
  }
}

export const getEntites = (state: State) => state.entities;
export const getIds = (state: State) => state.ids;
export const getSelectedId = (state: State) => state.selectedNoteId;

export const getSelected = createSelector(
    getEntites,
    getSelectedId,
    (entities, id) => entities[id]
);

export const getEntitesArray = createSelector(getEntites, (entities) => Object.values(entities));
