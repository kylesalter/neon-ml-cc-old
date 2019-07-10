import { put } from 'redux-saga/effects';

import StartupActions from '../redux/startup';

// process STARTUP actions
export function* startup(): void {
  yield put(StartupActions.startupComplete);
}
