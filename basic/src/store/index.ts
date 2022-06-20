import { createStore, applyMiddleware, Middleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './rootReducer';
import { createLogger } from 'redux-logger';

const middleware: Middleware[] = [createLogger()];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;