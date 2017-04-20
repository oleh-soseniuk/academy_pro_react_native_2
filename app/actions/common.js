import * as types from '../constants/actionTypes';

export function updateHistory(data) {
  return {
    type: types.UPDATE_HISTORY,
    data
  };
}

export function restoreHistory(history) {
  return {
    type: types.RESTORE_HISTORY,
    history
  };
}

