import { call, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { INCREMENT, DECREMENT } from '../constants';
import { ActionTypes } from '../types';

function* showAction(action: ActionTypes) {
  yield console.log(action);
}

function* watchCounter(): SagaIterator {
  yield takeLatest(INCREMENT, showAction);
  yield takeLatest(DECREMENT, showAction);
}

export default function* rootSaga(): SagaIterator {
  yield call(watchCounter);
}
