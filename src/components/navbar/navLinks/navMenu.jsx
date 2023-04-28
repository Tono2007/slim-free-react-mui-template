import { useState, useEffect } from 'react';
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
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import Popper from '@mui/material/Popper';

// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { NavItem, NavItemButton } from './navItem';

const MENUITEM_FONTSIZE = 14;

function NavMenu({ minWidth = '100%', menuChildren = [], Icon, title }) {
	const location = useLocation();
	const [anchorEl, setAnchorEl] = useState(null);
	const match = menuChildren.some((el) => location.pathname.includes(el.href));

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};
	useEffect(() => {
		handlePopoverClose();
	}, [location]);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handlePopoverOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const open = Boolean(anchorEl);
	return (
		<NavItemButton
			selected={match}
			onClick={handleClick}
			aria-owns={open ? `${title} popover` : undefined}
			aria-haspopup="true"
			disableRipple
			onMouseEnter={handlePopoverOpen}
			onMouseLeave={handlePopoverClose}
		>
			<NavItem showExpand Icon={Icon} title={title} selected={match} />
			<Popper
				open={open}
				anchorEl={anchorEl}
				placement="bottom-start"
				keepMounted
				onClose={handlePopoverClose}
				disablePortal
				sx={{ zIndex: 9999, minWidth }}
				transition
			>
				{({ TransitionProps }) => (
					<Fade {...TransitionProps} timeout={350}>
						<Paper>
							<MenuList sx={{ px: 1 }}>
								{menuChildren.map((item, i) => {
									const { href = '', title, type = 'item', children } = item;
									const match = useMatch({ path: href });
									switch (type) {
										case 'group':
											return <NavCollapse key={i} title={title} menuChildren={children} />;
										case 'item':
											return (
												<MenuItem
													key={i}
													component={RouterLink}
													to={href}
													sx={{
														fontSize: MENUITEM_FONTSIZE,
													}}
													selected={Boolean(match)}
												>
													{title}
												</MenuItem>
											);
										default:
											return (
												<Typography variant="h6" color="error" align="center">
													Menu Items Error
												</Typography>
											);
									}
								})}
							</MenuList>
						</Paper>
					</Fade>
				)}
			</Popper>
		</NavItemButton>
	);
}

function NavCollapse({ title, menuChildren, level = 1 }) {
	const { pathname } = useLocation();
	const match = menuChildren.some((el) => pathname.includes(el.href));
	const [anchorEl, setAnchorEl] = useState(null);

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const handlePopoverOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const open = Boolean(anchorEl);
	return (
		<MenuItem
			sx={{
				fontSize: MENUITEM_FONTSIZE,
			}}
			selected={open || match}
			aria-owns={open ? `${title} popover` : undefined}
			aria-haspopup="true"
			onMouseEnter={handlePopoverOpen}
			onMouseLeave={handlePopoverClose}
		>
			<ListItemText
				primary={
					<Typography variant="inherit" align="left">
						{title}
					</Typography>
				}
			/>
			<ExpandMoreIcon fontSize="small" />
			<Popper
				open={open}
				anchorEl={anchorEl}
				placement="right-start"
				keepMounted
				onClose={handlePopoverClose}
				disablePortal
				sx={{ zIndex: 9999 }}
				transition
			>
				{({ TransitionProps }) => (
					<Fade {...TransitionProps} timeout={350}>
						<Paper>
							<MenuList>
								{menuChildren.map((item, i) => {
									const { href = '', title, type = 'item', children } = item;
									const match = useMatch({ path: href });
									switch (type) {
										case 'group':
											return <NavCollapse key={i} title={title} menuChildren={children} level={level + 1} />;
										case 'item':
											return (
												<MenuItem
													key={i}
													component={RouterLink}
													to={href}
													selected={Boolean(match)}
													sx={{
														fontSize: 'inherit',
													}}
												>
													{item.title}
												</MenuItem>
											);
										default:
											return (
												<Typography variant="h6" color="error" align="center">
													Nav Menu Items Error
												</Typography>
											);
									}
								})}
							</MenuList>
						</Paper>
					</Fade>
				)}
			</Popper>
		</MenuItem>
	);
}

export default NavMenu;
