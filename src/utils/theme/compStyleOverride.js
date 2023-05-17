import getPalette from './palette';
import typography from './typography';
import { alpha } from '@mui/material/styles';

const getComponentStyleOverride = (mode) => ({
	MuiButton: {
		styleOverrides: {
			root: {
				'&.MuiButton-containedPrimary:not(:disabled)': {
					backgroundColor: getPalette(mode)?.primary[400],
					'&:hover': {
						backgroundColor: getPalette(mode)?.primary.main,
					},
				},
			},
		},
	},
	MuiPaper: {
		styleOverrides: {
			elevation: {
				backgroundImage: 'none',
			},
		},
		defaultProps: {
			elevation: 26,
			variant: 'outlinedElevation',
		},
		variants: [
			{
				props: {
					variant: 'outlinedElevation',
				},
				style: ({ ownerState, theme }) => ({
					boxShadow: theme.shadows[ownerState.elevation],
					border: `1px solid ${getPalette(mode)?.border}`,
				}),
			},
		],
	},
	MuiCard: {
		variants: [
			{
				props: {
					type: 'none',
				},
				style: {
					padding: 0,
				},
			},
			{
				props: {
					type: 'card',
				},
				style: {
					padding: 25,
					'@media (max-width: 600px)': {
						padding: '5%',
					},
				},
			},
			{
				props: {
					type: 'section',
				},
				style: {
					paddingTop: 40,
					paddingBottom: 40,
					paddingLeft: 30,
					paddingRight: 30,
					'@media (max-width: 600px)': {
						padding: '5%',
					},
				},
			},
			{
				props: {
					hover: 'light',
				},
				style: {
					'&:hover': {
						boxShadow: '0px 10px 20px -10px #0005',
					},
				},
			},
			{
				props: {
					hover: 'color',
				},
				style: {
					'&:hover': {
						boxShadow: `0px 10px 20px -15px ${getPalette(mode)?.primary.main}`,
					},
				},
			},
		],
		defaultProps: {
			hover: 'light',
			type: 'card',
			variant: 'outlinedElevation',
		},
	},
	MuiPopover: {
		defaultProps: {
			elevation: 26,
		},
	},
	MuiMenuItem: {
		styleOverrides: {
			root: {
				color: getPalette(mode)?.text.secondary,
				borderRadius: 2,
				'&.Mui-selected': {
					color: getPalette(mode)?.primary.contrastText,
					backgroundColor: getPalette(mode)?.primary[200],
					'&>.MuiListItemIcon-root': {
						color: getPalette(mode)?.primary.contrastText,
					},
					'&:hover': {
						backgroundColor: getPalette(mode)?.primary[300],
						color: getPalette(mode)?.primary.contrastText,
						'&>.MuiListItemIcon-root': {
							color: getPalette(mode)?.primary.contrastText,
						},
					},
				},
				'&:hover': {
					backgroundColor: alpha(getPalette(mode)?.primary.light, 0.2),

					...(mode === 'light' && {
						color: getPalette(mode)?.primary[400],
						'&>.MuiListItemIcon-root': {
							color: getPalette(mode)?.primary.main,
						},
					}),
					...(mode === 'dark' && {
						color: getPalette(mode)?.primary.contrastText,
					}),
				},
			},
		},
	},

	MuiOutlinedInput: {
		styleOverrides: {
			root: ({ ownerState }) => ({
				...(mode === 'light' && {
					'&:hover': {
						backgroundColor: '#eee8',
					},
				}),
				...(mode === 'dark' && {
					'&:hover': {
						backgroundColor: '#eee1',
					},
				}),

				/* ...(ownerState.color === 'primary' && {
					'&.MuiOutlinedInput-notchedOutline': {
						borderColor: getPalette(mode)?.secondary.light,
					},
					'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
						borderColor: getPalette(mode)?.primary[400],
					},
					'&:hover&.Mui-focused .MuiOutlinedInput-notchedOutline': {
						borderColor: getPalette(mode)?.primary[400],
					},
					'&:hover .MuiOutlinedInput-notchedOutline': {
						borderColor: getPalette(mode)?.primary[400],
					},
				}), */

				'&:not(.Mui-error).Mui-focused .MuiOutlinedInput-notchedOutline': {
					borderColor: getPalette(mode)?.[ownerState?.color]?.[400] || '#000',
				},
				'&:not(.Mui-error):hover .MuiOutlinedInput-notchedOutline': {
					borderColor: getPalette(mode)?.[ownerState?.color]?.[400] || '#000',
				},
			}),
		},
	},
	MuiInputBase: {
		styleOverrides: {
			root: {
				'&.Mui-disabled, &.Mui-readOnly': {
					pointerEvents: 'none',
				},
			},
		},
	},
	MuiTableHead: {
		styleOverrides: {
			root: {
				backgroundColor: getPalette(mode)?.background.default,
				'& .MuiTableCell-head': {
					...typography?.h5,
					textTransform: 'uppercase',
					borderTop: `1px solid ${getPalette(mode)?.border}`,
					borderBottom: `1px solid ${getPalette(mode)?.border}`,
				},
			},
		},
	},
	MuiTableRow: {
		styleOverrides: {
			root: {
				'&.MuiTableRow-hover:hover': {
					backgroundColor: alpha(getPalette(mode)?.background.default, 0.4),
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
				color: getPalette(mode)?.primary[300],
			},
		},
	},

	MuiAlert: {
		styleOverrides: {
			outlined: {
				backgroundColor: getPalette(mode)?.background.paper,
			},
			filled: {
				border: 0,
			},
			standard: {
				border: 0,
			},
			filledSuccess: {
				color: getPalette(mode)?.success.contrastText,
			},
		},
	},
	MuiMobileStepper: {
		styleOverrides: {
			root: {
				background: getPalette(mode)?.background.paper,
			},
		},
	},
});

export default getComponentStyleOverride;
