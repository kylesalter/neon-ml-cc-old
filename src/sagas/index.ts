import { SagaIterator } from 'redux-saga';
import { all, takeLatest } from 'redux-saga/effects';

// import { StartupTypes } from '../redux/startup';
// import { UserTypes } from '../redux/user';
// import { startup } from './startup';
// import { signUp } from './user';

/* ------------- Types ------------- */

/* ------------- Sagas ------------- */

/* ------------- Connect Types To Sagas ------------- */

export function* rootSaga(): SagaIterator {
  yield all([]);
}
