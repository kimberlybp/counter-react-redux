import { put, takeEvery, delay } from 'redux-saga/effects';
import { incrementByAmount, CounterActionTypes } from '../store/counter/actions';
import { Action } from './types';

// Our worker Saga: will perform the async increment task
function* incrementAsync(action: Action) {
  yield delay(1000)
  yield put(incrementByAmount(action.payload))
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery(CounterActionTypes.INCREMENT_ASYNC, incrementAsync)
}

