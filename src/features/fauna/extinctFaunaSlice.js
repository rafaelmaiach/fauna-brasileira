import { createSlice } from '@reduxjs/toolkit';

import { getExtinctFauna } from 'services';

const initialState = {
	list: [],
	isLoading: false,
	error: null,
};

const extinctFauna = createSlice({
	name: 'extinctFauna',
	initialState,
	reducers: {
		getExtinctFaunaStart(state) {
			state.isLoading = true;
		},
		getExtinctFaunaSuccess(state, action) {
			state.list = action.payload;
			state.isLoading = false;
			state.error = null;
		},
		getExtinctFaunaError(state, action) {
			state.list = [];
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const {
	getExtinctFaunaStart,
	getExtinctFaunaSuccess,
	getExtinctFaunaError,
} = extinctFauna.actions;

export default extinctFauna.reducer;

export const fetchExtinctFauna = () => async (dispatch) => {
	try {
		dispatch(getExtinctFaunaStart());
		const extinctFauna = await getExtinctFauna();
		dispatch(getExtinctFaunaSuccess(extinctFauna));
	} catch (err) {
		dispatch(getExtinctFaunaError(err.toString()));
	}
}
