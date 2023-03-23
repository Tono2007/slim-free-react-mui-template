import palette from './palette';
import { alpha } from '@mui/material/styles';

export default {
	MuiButton: {
		styleOverrides: {
			root: {
				'&.MuiButton-containedPrimary': {
					backgroundColor: palette.primary[400],
					'&:hover': {
						backgroundColor: palette.primary.main,
					},
				},
				'&.MuiButton-outlinedPrimary': {
					// borderColor: palette.primary[200],
					'&:hover': { borderColor: palette.primary[300] },
				},
			},
		},
	},
	MuiCard: {
		defaultProps: {
			elevation: 26,
		},
		styleOverrides: {
			root: {
				border: `1px solid ${palette.border}`,
				paddingTop: 40,
				paddingBottom: 40,
				paddingLeft: 30,
				paddingRight: 30,
				'@media (max-width: 600px)': {
					padding: '5%',
				},
			},
		},
	},
	MuiPaper: {
		// defaultProps: { elevation: 26 },
	},
	MuiPopover: {
		defaultProps: {
			elevation: 3,
		},
	},
	MuiMenuItem: {
		styleOverrides: {
			root: {
				color: palette.text.secondary,
				borderRadius: 2,
				'&.Mui-selected': {
					color: palette.primary.contrastText,
					backgroundColor: palette.primary[200],
					'& .MuiListItemIcon-root': {
						color: palette.primary.contrastText,
					},
					'&:hover': {
						backgroundColor: palette.primary[300],
						color: palette.primary.contrastText,
						'& .MuiListItemIcon-root': {
							color: palette.primary.contrastText,
						},
					},
				},
				'&:hover': {
					backgroundColor: alpha(palette.primary.light, 0.2),
					color: palette.primary[400],
					'& .MuiListItemIcon-root': {
						color: palette.primary.main,
					},
				},
			},
		},
	},
	MuiLink: {
		styleOverrides: {
			root: {
				color: palette.primary[200],
			},
		},
	},
	MuiOutlinedInput: {
		styleOverrides: {
			root: {
				'&.MuiOutlinedInput-notchedOutline': {
					borderColor: palette.secondary.light,
				},
				'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
					borderColor: palette.primary[400],
				},
				'&:hover&.Mui-focused .MuiOutlinedInput-notchedOutline': {
					borderColor: palette.primary[400],
				},
				'&:hover .MuiOutlinedInput-notchedOutline': {
					borderColor: palette.primary[400],
				},
			},
		},
	},
	MuiTableCell: {
		/* defaultProps: {
			size: 'medium',
		}, */
		styleOverrides: {
			root: {
				// color: palette.text.tertiary,
				'&.MuiTableCell-head': {
					color: palette.text.primary,
				},
			},
		},
	},
	MuiTableRow: {
		styleOverrides: {
			root: {
				'&.MuiTableRow-hover:hover': {
					backgroundColor: alpha(palette.primary[400], 0.05),
				},
			},
		},
	},
	MuiRadio: {
		styleOverrides: {
			root: {
				'& .MuiSvgIcon-root': {
					fontSize: 35,
				},
			},
		},
	},
};
