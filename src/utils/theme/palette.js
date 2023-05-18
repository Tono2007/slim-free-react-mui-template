const defaultPalette = {
	primary: {
		light: '#96C0F3',
		100: '#84B5F1',
		200: '#5F9FED',
		300: '#3A88E9',
		400: '#1973E2',
		main: '#1560BD',
		dark: '#0F468B',
		700: '#0A2D58',
		800: '#041326',
		contrastText: '#fff',
	},
	secondary: {
		light: '#FFF3CA',
		100: '#FFEEB6',
		200: '#FEE58D',
		300: '#FEDC65',
		400: '#FED33C',
		main: '#FEC604',
		dark: '#C99C01',
		700: '#917101',
		800: '#594500',
		contrastText: '#343A40',
	},
	tertiary: {
		light: '#F7BBF4',
		100: '#F5A9F1',
		200: '#F184EB',
		300: '#ED5FE6',
		400: '#E93AE0',
		main: '#E219D7',
		dark: '#BD15B4',
		700: '#8B0F84',
		800: '#580A54',
		contrastText: '#fff',
	},
	cuaternary: {
		light: '#C4E8FB',
		100: '#B1E0FA',
		200: '#8AD1F8',
		300: '#64C2F5',
		400: '#3EB3F3',
		main: '#17A3F1',
		dark: '#0D8CD2',
		700: '#0A699D',
		800: '#064668',
		contrastText: '#fff',
	},
	success: {
		light: '#D9EEDA',
		100: '#BCE2BE',
		200: '#A0D6A2',
		300: '#83C986',
		400: '#67BD6A',
		main: '#4CAF50',
		dark: '#3B883E',
		700: '#2A612C',
		800: '#193A1A',
		contrastText: '#fff',
	},
	warning: {
		light: '#ff9800',
		main: '#ed6c02',
		dark: '#e65100',
	},
	error: {
		light: '#F3C7C7',
		100: '#EFB6B6',
		200: '#E89494',
		300: '#E17272',
		400: '#DA5151',
		main: '#D32F2F',
		dark: '#A72323',
		700: '#781919',
		800: '#4A1010',
		contrastText: '#fff',
	},
};

const lightPalette = {
	...defaultPalette,
	mode: 'light',
	border: '#DEE2E6',
	text: {
		// #121926  #212121
		primary: '#343A40',
		secondary: '#868BA1',
		tertiary: '#6C757D',
		hint: '#EEF2F6',
	},
	background: {
		// #fafafa || #E3E7EB
		paper: '#fff',
		default: '#F0F2F7',
	},
};

const darkPalette = {
	...defaultPalette,
	mode: 'dark',
	border: '#fff2',
	text: {
		primary: '#F3F6F9',
		secondary: '#B2BAC2',
		tertiary: '#bdbdbd',
		hint: '#fff2',
	},
	background: {
		/* paper: '#212529',
		default: '#282D31',
		dark: '#1A1D21', */
		paper: '#001E3C',
		default: '#0A1929',
	},
};

// https://www.tailwindshades.com/
// this template needs four color shades
// for now manual color change for scroll bar  src/assets/css/styles.css

const getPalette = (mode) => {
	if (mode === 'light') return lightPalette;
	if (mode === 'dark') return darkPalette;
	return lightPalette;
};

export default getPalette;
