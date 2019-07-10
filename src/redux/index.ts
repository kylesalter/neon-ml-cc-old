import produce from 'immer';
import { Reducer, combineReducers } from 'redux-immer';

export const createReducers = (): any =>
  combineReducers(produce, {
    /* eslint-disable global-require */
    /* eslint-enable global-require */
  });
