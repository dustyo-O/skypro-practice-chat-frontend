import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootSaga } from './sagas';
import { loginReducer } from './login/reducer';
import { registerReducer } from './register/reducer';

const sagaMiddleware = createSagaMiddleware();

const composedEnhancer = compose(applyMiddleware(sagaMiddleware), composeWithDevTools());

const combinedReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
})

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export const store = createStore(
  combinedReducer,
  undefined,
  composedEnhancer,
);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
