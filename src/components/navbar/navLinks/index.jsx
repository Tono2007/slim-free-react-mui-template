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

import { NavItem, NavItemButton, NavLink } from './navItem';
import NavMenu from './navMenu';

function NavLinks({ navItems }) {
	const navMenuItems = navItems.map((item) => {
		const { title, type, Icon, id, menuMinWidth, menuChildren, href } = item;

		switch (type) {
			case 'group':
				return (
					<NavMenu key={id} minWidth={menuMinWidth} menuChildren={menuChildren} Icon={Icon} title={title} />
				);
			case 'item':
				return <NavLink key={id} href={href} Icon={Icon} title={title} />;
			default:
				return (
					<Typography variant="h6" color="error" align="center">
						Menu Items Error
					</Typography>
				);
		}
	});
	return (
		<Stack width="100%" direction="row" component="nav" borderLeft={1} borderColor="border" flexWrap="wrap">
			{navMenuItems}
		</Stack>
	);
}

export default NavLinks;
