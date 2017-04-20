import * as types from '../constants/actionTypes';

const initialState = {
	history: []
};

export default function common(state = initialState, action = {}) {
	console.log(action.type);
	switch (action.type) {
		case types.UPDATE_HISTORY: {
            const { data } = action;
			return {
				...state,
				history: [...state.history, data]
			};
		};
		case types.RESTORE_HISTORY: {
            const { history } = action;
			return {
				...state,
				history: [...history]
			};
		};
		default:
			return state;
	}
}