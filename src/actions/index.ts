import { INCREMENT, DECREMENT } from '../constants';
import { ActionTypes } from '../types';

export function increaseCount(): ActionTypes {
  return {
    type: INCREMENT
  };
}

export function decreaseCount(): ActionTypes {
  return {
    type: DECREMENT
  };
}
