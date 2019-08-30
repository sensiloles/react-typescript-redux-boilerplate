import { connectRouter, RouterState } from 'connected-react-router';
import { combineReducers, Reducer, AnyAction } from 'redux';
import { History } from 'history';
import { INCREMENT, DECREMENT } from '../constants';
import { ActionTypes } from '../types';

function counter(state = 0, action: ActionTypes): number {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

const rootReducer = (
  history: History
): Reducer<{ router: RouterState; counter: number }, AnyAction> =>
  combineReducers({
    router: connectRouter(history),
    counter
  });

export default rootReducer;
