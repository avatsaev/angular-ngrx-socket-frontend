


import {Action} from '@ngrx/store';

export const SET_SOCKET_CONECTED = '[UI] Set Socket Connected';

export class SetSocketConnected implements Action {
  readonly type = SET_SOCKET_CONECTED;
  constructor(public payload?: boolean) {}
}

export type All = SetSocketConnected;
