import { INCREMENT, DECREMENT } from '../constants';

export interface IncreaseCount {
  type: typeof INCREMENT;
}

export interface DecreaseCount {
  type: typeof DECREMENT;
}

export interface Store {
  counter: number;
}

export interface ActionProps {
  increaseCount: () => void;
  decreaseCount: () => void;
}

export type ActionTypes = IncreaseCount | DecreaseCount;
