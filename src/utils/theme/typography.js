import palette from './palette';

export default {
	fontFamily: `"Rubik", "Helvetica" , "-apple-system" , "Arial", sans-serif`,
	fontSize: 14,
	button: {
		textTransform: 'none',
	},
	h6: {
		fontWeight: 500,
		color: palette.text.dark,
		fontSize: '0.75rem',
	},
	h5: {
		fontSize: '0.875rem',
		color: palette.text.dark,
		fontWeight: 500,
	},
	h4: {
		fontSize: '1rem',
		color: palette.text.dark,
		fontWeight: 600,
	},
	h3: {
		fontSize: '1.25rem',
		color: palette.text.dark,
		fontWeight: 600,
	},
	h2: {
		fontSize: '1.5rem',
		color: palette.text.dark,
		fontWeight: 700,
	},
	h1: {
		fontSize: '2.125rem',
		color: palette.text.dark,
		fontWeight: 700,
	},
	subtitle1: {
		fontSize: '0.875rem',
		fontWeight: 500,
		color: palette.text.dark,
	},
	subtitle2: {
		fontSize: '0.75rem',
		fontWeight: 400,
		color: palette.text.secondary,
	},
	caption: {
		fontSize: '0.7rem',
		color: palette.text.secondary,
		fontWeight: 400,
	},
	body1: {
		fontSize: '0.775rem',
		fontWeight: 400,
		lineHeight: '1.334em',
	},
	body2: {
		fontSize: '0.875rem',
		letterSpacing: '0em',
		fontWeight: 400,
		lineHeight: '1.5em',
		color: palette.text.primary,
	},
};
