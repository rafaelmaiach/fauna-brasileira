import { createSlice } from '@reduxjs/toolkit';

import { getEndangeredFauna } from 'services';

const initialState = {
	list: [],
	isLoading: false,
	error: null,
};

const endangeredFauna = createSlice({
	name: 'endangeredFauna',
	initialState,
	reducers: {
		getEndangeredFaunaStart(state) {
			state.isLoading = true;
		},
		getEndangeredFaunaSuccess(state, action) {
			state.list = action.payload;
			state.isLoading = false;
			state.error = null;
		},
		getEndangeredFaunaError(state, action) {
			state.list = [];
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const {
	getEndangeredFaunaStart,
	getEndangeredFaunaSuccess,
	getEndangeredFaunaError,
} = endangeredFauna.actions;

export default endangeredFauna.reducer;

export const fetchEndangeredFauna = () => async (dispatch) => {
	try {
		dispatch(getEndangeredFaunaStart());
		const endangeredFauna = await getEndangeredFauna();
		dispatch(getEndangeredFaunaSuccess(endangeredFauna));
	} catch (err) {
		dispatch(getEndangeredFaunaError(err.toString()));
	}
}
