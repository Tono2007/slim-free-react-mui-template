import { useState } from 'react';
import { Link as RouterLink, useMatch, useLocation } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
// MUI Stuff
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ButtonBase from '@mui/material/ButtonBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import Collapse from '@mui/material/Collapse';

// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function NavItem({ Icon, title, showExpand = false, selected = false }) {
	return (
		<Stack
			width="100%"
			direction="row"
			p={1.5}
			border={1}
			borderLeft={0}
			borderColor="border"
			alignItems="center"
			alignContent="center"
			justifyContent="center"
			spacing={0.5}
			title={title}
		>
			<Icon
				sx={{
					fontSize: 18,
					color: (theme) => (selected ? theme.palette.primary.contrastText : theme.palette.primary[300]),
				}}
			/>
			<Typography
				pt={0.2}
				display={{ xs: 'none', md: 'inline' }}
				textTransform="uppercase"
				fontWeight="500"
				fontSize="13px"
				color={selected ? 'primary.contrastText' : 'text.tertiary'}
			>
				{title}
			</Typography>
			{showExpand && (
				<ExpandMoreIcon
					fontSize="small"
					sx={{
						color: selected ? 'primary.contrastText' : 'text.secondary',
						fontSize: 17,
					}}
				/>
			)}
		</Stack>
	);
}

export function NavItemButton({ children, selected, sx, ...rest }) {
	return (
		<ButtonBase
			sx={{
				flexGrow: 1,
				...(selected && {
					backgroundImage: (theme) =>
						`linear-gradient(90deg, ${theme.palette.primary[300]} 0%,${theme.palette.primary.dark} 100% )`,
					// bgcolor: selected ? '#000' : 'transparent',
				}),
				'&:hover': {
					bgcolor: (theme) => alpha(theme.palette.primary.light, 0.1),
				},
				...sx,
			}}
			{...rest}
		>
			{children}
		</ButtonBase>
	);
}
export function NavLink({ href, Icon, title }) {
	const match = useMatch({ path: href });

	return (
		<NavItemButton selected={match} component={RouterLink} to={href}>
			<NavItem Icon={Icon} title={title} selected={match} />
		</NavItemButton>
	);
}

export default NavLink;
