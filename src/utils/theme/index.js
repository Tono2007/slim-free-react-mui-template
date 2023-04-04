import { createTheme } from '@mui/material/styles';
import themePalette from './palette';

import themeTypography from './typography';
import componentStyleOverrides from './compStyleOverride';

const themeOptions = {
	palette: themePalette,
	typography: themeTypography,
	components: componentStyleOverrides,
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
const theme = createTheme(themeOptions);
theme.shadows[25] = '0px 10px 10px -15px #0005';
theme.shadows[26] = '0px 15px 10px -15px #0003';
export default theme;
