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

// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { NavItem, NavItemButton } from './navItem';

const MENUITEM_FONTSIZE = 14;

function NavMenu({ minWidth = 200, menuChildren = [], Icon, title }) {
	const location = useLocation();
	const [anchorEl, setAnchorEl] = useState(null);
	const match = menuChildren.some((el) =>
		location.pathname.includes(el.href),
	);

	const handleClose = () => {
		setAnchorEl(null);
	};
	useEffect(() => {
		handleClose();
	}, [location]);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	return (
		<>
			<Menu
				sx={{
					'& .MuiMenuItem-root': {
						// mt: 0.5,
					},
				}}
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuList sx={{ minWidth, width: 'auto', px: 1 }}>
					{menuChildren.map((item, i) => {
						const {
							href = '',
							title,
							type = 'item',
							children,
						} = item;
						const match = useMatch({ path: href });
						switch (type) {
							case 'group':
								return (
									<NavCollapse
										key={i}
										title={title}
										menuChildren={children}
									/>
								);
							case 'item':
								return (
									<MenuItem
										key={i}
										onClick={handleClose}
										component={RouterLink}
										to={href}
										sx={{ fontSize: MENUITEM_FONTSIZE }}
										selected={Boolean(match)}
									>
										{title}
									</MenuItem>
								);
							default:
								return (
									<Typography
										variant="h6"
										color="error"
										align="center"
									>
										Menu Items Error
									</Typography>
								);
						}
					})}
				</MenuList>
			</Menu>
			<NavItemButton selected={match} onClick={handleClick}>
				<NavItem
					showExpand
					Icon={Icon}
					title={title}
					selected={match}
				/>
			</NavItemButton>
		</>
	);
}

function NavCollapse({ title, menuChildren, level = 1 }) {
	const { pathname } = useLocation();
	const location = useLocation();

	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState(false);

	const match = menuChildren.some((el) =>
		location.pathname.includes(el.href),
	);
	useEffect(() => {
		const match = menuChildren.some((el) =>
			location.pathname.includes(el.href),
		);
		setOpen(match);
		setSelected(match);
	}, []);

	const handleClick = () => {
		setOpen(!open);
		setSelected(!selected);
	};

	return (
		<>
			<MenuItem
				onClick={handleClick}
				sx={{
					fontSize: MENUITEM_FONTSIZE,
				}}
				/* selected={open || Boolean(selected)} */
			>
				<ListItemText
					primary={<Typography variant="inherit">{title}</Typography>}
				/>
				<ExpandMoreIcon fontSize="small" />
			</MenuItem>
			<Collapse in={open} timeout="auto">
				<MenuList
					component="div"
					sx={{
						'&>a': {
							ml: 2 * level,
							borderTopLeftRadius: 0,
							borderBottomLeftRadius: 0,
							borderLeft: 1,
							borderColor: 'primary.light',
						},
					}}
				>
					{menuChildren.map((item, i) => {
						const {
							href = '',
							title,
							type = 'item',
							children,
						} = item;
						const match = useMatch({ path: href });
						switch (type) {
							case 'group':
								return (
									<NavCollapse
										key={i}
										title={title}
										menuChildren={children}
										level={level + 1}
									/>
								);
							case 'item':
								return (
									<MenuItem
										key={i}
										component={RouterLink}
										to={href}
										selected={Boolean(match)}
										sx={
											{
												/* '&::before': {
												content: '""',
												display: 'inline-block',
												borderRadius: '50%',
												bgcolor: 'primary.main',
												width: '6px',
												height: '6px',
												mb: '2px',
												mr: 2,
											}, */
											}
										}
									>
										{item.title}
									</MenuItem>
								);
							default:
								return (
									<Typography
										variant="h6"
										color="error"
										align="center"
									>
										Menu Items Error
									</Typography>
								);
						}
					})}
				</MenuList>
			</Collapse>
		</>
	);
}

export default NavMenu;
