import { configureStore } from '@reduxjs/toolkit';
import { Provider as ReduxProvider, useSelector, useDispatch } from 'react-redux';
import themeReducer from './theme';

const store = configureStore({
	devTools: process.env.NODE_ENV !== 'production',
	reducer: { theme: themeReducer },
});

function Provider({ children }) {
	return <ReduxProvider store={store}>{children}</ReduxProvider>;
}

export { useSelector, useDispatch };
export default Provider;
