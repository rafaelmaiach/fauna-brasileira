import { combineReducers } from '@reduxjs/toolkit';

import endangeredFaunaReducer from 'features/fauna/endangeredFaunaSlice';
import extinctFaunaReducer from 'features/fauna/extinctFaunaSlice';

const rootReducer = combineReducers({
	endangeredFauna: endangeredFaunaReducer,
	extinctFauna: extinctFaunaReducer,
});

export default rootReducer;
