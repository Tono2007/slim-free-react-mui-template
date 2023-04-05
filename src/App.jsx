import '@/assets/css/style.css';
import '@fontsource/rubik/300.css';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import '@fontsource/rubik/700.css';

import ReduxProvider from '@/redux/store';

import {
	ThemeProvider as MuiThemeProvider,
	StyledEngineProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '@/utils/theme';
import Router from '@/utils/routes';

function App() {
	return (
		<ReduxProvider>
			<StyledEngineProvider injectFirst>
				<MuiThemeProvider theme={theme}>
					<CssBaseline />
					<Router />
				</MuiThemeProvider>
			</StyledEngineProvider>
		</ReduxProvider>
	);
}

export default App;
