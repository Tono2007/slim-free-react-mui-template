import palette from './palette';
import typography from './typography';
import { alpha } from '@mui/material/styles';

export default {
	MuiButton: {
		styleOverrides: {
			root: {
				'&.MuiButton-containedPrimary:not(:disabled)': {
					backgroundColor: palette.primary[400],
					'&:hover': {
						backgroundColor: palette.primary.main,
					},
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
	MuiPopover: {
		defaultProps: {
			elevation: 26,
		},
		styleOverrides: {
			paper: {
				border: `1px solid ${palette.border}`,
			},
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
	MuiOutlinedInput: {
		styleOverrides: {
			root: ({ ownerState }) => ({
				/* ...(ownerState.color === 'primary' && {
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
				}), */

				'&.MuiOutlinedInput-notchedOutline': {
					borderColor: palette?.[ownerState.color]?.main || '#000',
				},
				'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
					borderColor: palette?.[ownerState.color]?.[400] || '#000',
				},
				'&:hover&.Mui-focused .MuiOutlinedInput-notchedOutline': {
					borderColor: palette?.[ownerState.color]?.[400] || '#000',
				},
				'&:hover .MuiOutlinedInput-notchedOutline': {
					borderColor: palette?.[ownerState.color]?.[400] || '#000',
				},
			}),
		},
	},
	MuiTableHead: {
		styleOverrides: {
			root: {
				'& .MuiTableCell-head': {
					...typography?.h5,
					textTransform: 'uppercase',
					backgroundColor: '#fafafa',
					borderTop: `1px solid ${palette.border}`,
					borderBottom: `1px solid ${palette.border}`,
				},
			},
		},
	},
	MuiTableRow: {
		styleOverrides: {
			root: {
				'&.MuiTableRow-hover:hover': {
					backgroundColor: alpha(palette.primary.light, 0.1),
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
	MuiLink: {
		styleOverrides: {
			root: {
				color: palette.primary[300],
			},
		},
	},
};
