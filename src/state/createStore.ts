import { createReducers } from '@redux';
import { rootSaga } from '@sagas';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middleware)];
  const store = createStore(
    createReducers(),
    composeWithDevTools(...enhancers)
  );

  const sagasManager = sagaMiddleware.run(rootSaga);
  return { store, sagasManager, sagaMiddleware };
};
