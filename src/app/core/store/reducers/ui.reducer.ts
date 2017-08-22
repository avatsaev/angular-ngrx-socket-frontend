
import * as uiActions from '../actions/ui.actions';

export interface State {
  socketConnected: boolean;
}

export const INIT_STATE: State = {
  socketConnected: false
};


export function reducer(state = INIT_STATE, {type, payload}: uiActions.All): State {

  switch (type) {
    case uiActions.SET_SOCKET_CONECTED : {
      return {
        ...state,
        socketConnected: payload
      };
    }
    default : return state;
  }

}

export const getSocketStatus = (state: State): boolean => state.socketConnected;
