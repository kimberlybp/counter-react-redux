import { createStore, applyMiddleware, Middleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './rootReducer';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from "@redux-saga/core";
import { watchIncrementAsync } from '../saga/counterSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware: Middleware[] = [createLogger(), sagaMiddleware];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
sagaMiddleware.run(watchIncrementAsync);

export default store;