import { ThemeProvider as MuiThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { esES } from '@mui/material/locale';

import themePalette from './palette';
import themeTypography from './typography';
import componentStyleOverrides from './compStyleOverride';

const getTheme = () => {
	// make a default theme or change localStorage to your prefered state manager redux/context/zustand...
	const mode = 'light';

	const themeOptions = {
		palette: themePalette(mode),
		typography: themeTypography(mode),
		components: componentStyleOverrides(mode),
		spacing: 8,
		shape: {
			borderRadius: 2,
		},
		breakpoints: {
			values: {
				xs: 0,
				// smartphone
				sp: 400,
				sm: 600,
				md: 900,
				lg: 1200,
				xl: 1536,
			},
		},
	};
	const theme = createTheme(themeOptions, esES);
	theme.shadows[25] = '0px 10px 10px -15px #0005';
	theme.shadows[26] = '0px 15px 10px -15px #0003';
	theme.shadows[27] = '0px 15px 12px -15px #0004';
	return theme;
};

function MUITheme({ children }) {
	return (
		<StyledEngineProvider injectFirst>
			<MuiThemeProvider theme={getTheme()}>
				<CssBaseline />
				{children}
			</MuiThemeProvider>
		</StyledEngineProvider>
	);
}

export default MUITheme;
