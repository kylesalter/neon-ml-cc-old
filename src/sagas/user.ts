import api from '@api';
import { call } from 'redux-saga/effects';
// import UserActions from '../redux/user';

export function* signUp(): void {
  const response = yield call(api.user.signUp);
  console.log('user signup', response);
}
