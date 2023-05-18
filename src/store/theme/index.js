/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	themeConfig: {
		mode: 'light',
		stickyHeader: true,
		pageTransitions: false,
		fontFamily: 'Rubik',
		borderRadius: 2,
	},
};

const useSlice = createSlice({
	name: 'themeSlice',
	initialState,
	reducers: {
		setDefaultConfig: (state) => {
			state.themeConfig = initialState;
		},
		setConfig: (state, action) => {
			state.themeConfig = action.payload;
		},
		setConfigKey: (state, action) => {
			state.themeConfig[action.payload.key] = action.payload.value;
		},
	},
});

export const { setConfig, setDefaultConfig, setConfigKey } = useSlice.actions;

export default useSlice.reducer;
