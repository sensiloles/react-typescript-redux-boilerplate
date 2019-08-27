import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { History } from 'history';
import { INCREMENT, DECREMENT } from '../constants';
import { ActionTypes } from '../types';

function counter(state: number = 0, action: ActionTypes) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    counter
  });

export default rootReducer;
