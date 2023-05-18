import { useState } from 'react';

import { setConfigKey } from '@/store/theme';
import { selectThemeConfig } from '@/store/theme/selectors';
import { useSelector, useDispatch } from '@/store';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import ButtonBase from '@mui/material/ButtonBase';
import Slider from '@mui/material/Slider';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CloseIcon from '@mui/icons-material/Close';

function CustomizationLayout() {
	const [showDrawer, setshowDrawer] = useState(false);

	const openDrawer = (e) => {
		setshowDrawer(true);
	};
	const closeDrawer = (e) => {
		setshowDrawer(false);
	};
	return (
		<>
			<Tooltip title="Live Customize">
				<Fab
					component="div"
					size="medium"
					variant="circular"
					color="primary"
					sx={{
						borderRadius: 0,
						borderTopLeftRadius: '50%',
						borderBottomLeftRadius: '50%',
						borderTopRightRadius: '50%',
						borderBottomRightRadius: '4px',
						top: '40%',
						position: 'fixed',
						right: 10,
						zIndex: 1,
					}}
				>
					<IconButton color="inherit" size="large" disableRipple onClick={openDrawer}>
						<SettingsOutlinedIcon
							sx={{
								'@keyframes width-increase': {
									'100%': {
										WebkitTransform: 'rotate(360deg)',
										transform: 'rotate(360deg)',
									},
								},
								animation: 'width-increase 3s ease infinite',
							}}
						/>
					</IconButton>
				</Fab>
			</Tooltip>
			<Drawer anchor="right" open={showDrawer} onClose={() => setshowDrawer(false)}>
				<Stack maxWidth={400} width="100%" minWidth={300} px={3} my={1} spacing={5}>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						borderBottom={1}
						borderColor="primary.main"
					>
						<Typography variant="subtitle1">App Settings</Typography>
						<IconButton color="inherit" size="large" onClick={closeDrawer}>
							<CloseIcon />
						</IconButton>
					</Stack>
					<DrawerContent />
				</Stack>
			</Drawer>
		</>
	);
}

function DrawerContent() {
	const dispatch = useDispatch();
	const themeConfig = useSelector(selectThemeConfig);

	const handlerClick = (key, value) => {
		dispatch(setConfigKey({ key, value }));
	};

	return (
		<>
			<div>
				<Typography variant="subtitle2" gutterBottom>
					Color Scheme
				</Typography>
				<Typography variant="caption" gutterBottom>
					Some charts need page refresh
				</Typography>
				<Stack direction="row" spacing={2}>
					<OptionButton selected={themeConfig.mode === 'light'} onClick={() => handlerClick('mode', 'light')}>
						Light
					</OptionButton>
					<OptionButton selected={themeConfig.mode === 'dark'} onClick={() => handlerClick('mode', 'dark')}>
						Dark
					</OptionButton>
				</Stack>
			</div>
			<div>
				<Typography variant="subtitle2" gutterBottom>
					Sticky Header:
				</Typography>
				<Stack direction="row" spacing={2}>
					<OptionButton
						selected={themeConfig.stickyHeader === true}
						onClick={() => handlerClick('stickyHeader', true)}
					>
						Yes
					</OptionButton>
					<OptionButton
						selected={themeConfig.stickyHeader === false}
						onClick={() => handlerClick('stickyHeader', false)}
					>
						No
					</OptionButton>
				</Stack>
			</div>
			<div>
				<Typography variant="subtitle2" gutterBottom>
					Page transitions:
				</Typography>
				<Typography variant="caption" gutterBottom>
					Not work well with code splitting, lazy & suspense
				</Typography>
				<Stack direction="row" spacing={2}>
					<OptionButton
						selected={themeConfig.pageTransitions === true}
						onClick={() => handlerClick('pageTransitions', true)}
					>
						Yes
					</OptionButton>
					<OptionButton
						selected={themeConfig.pageTransitions === false}
						onClick={() => handlerClick('pageTransitions', false)}
					>
						No
					</OptionButton>
				</Stack>
			</div>
			<div>
				<Typography variant="subtitle2" gutterBottom>
					Font Family
				</Typography>
				<Stack direction="row" spacing={2} flexWrap="wrap">
					<OptionButton
						selected={themeConfig.fontFamily === 'Rubik'}
						onClick={() => handlerClick('fontFamily', 'Rubik')}
					>
						Rubik
					</OptionButton>
					<OptionButton
						selected={themeConfig.fontFamily === 'Roboto'}
						onClick={() => handlerClick('fontFamily', 'Roboto')}
					>
						Roboto
					</OptionButton>
				</Stack>
			</div>
			<div>
				<Typography variant="subtitle2" gutterBottom>
					Border Radius
				</Typography>
				<Slider
					aria-label="Always visible"
					value={themeConfig.borderRadius}
					onChange={(e, value) => handlerClick('borderRadius', value)}
					max={20}
					step={2}
					valueLabelDisplay="on"
				/>
			</div>
		</>
	);
}

function OptionButton({ children, selected = false, ...rest }) {
	return (
		<Box
			component={ButtonBase}
			py={1}
			px={2}
			bgcolor="background.default"
			borderRadius={5}
			fontSize="h5"
			sx={{
				...(selected && { outline: (theme) => `2px solid ${theme.palette.primary.main}` }),
			}}
			{...rest}
		>
			{children}
		</Box>
	);
}

export default CustomizationLayout;
