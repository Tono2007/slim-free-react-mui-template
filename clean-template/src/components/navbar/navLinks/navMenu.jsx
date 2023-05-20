import { useState, useEffect } from 'react';
import { Link as RouterLink, useMatch, useLocation } from 'react-router-dom';
// MUI
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import Popper from '@mui/material/Popper';
// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { NavItem, NavItemButton } from './navItem';

const MENUITEM_FONTSIZE = 14;

const deepMatch = ({ items, match }) =>
	items.some((el) => {
		if (el?.type === 'group') {
			return deepMatch({ items: el?.menuChildren, match });
		}
		return match.includes(el?.href);
	});
function NavMenu({ minWidth = '100%', menuChildren = [], Icon, title }) {
	const location = useLocation();
	const [anchorEl, setAnchorEl] = useState(null);
	const pathnamee = location.pathname + location.hash;
	const match = deepMatch({ items: menuChildren, match: pathnamee });

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
				onClose={handlePopoverClose}
				disablePortal
				sx={{
					zIndex: 9999,
					minWidth,
				}}
				transition
			>
				{({ TransitionProps }) => (
					<Fade {...TransitionProps} timeout={350}>
						<Paper>
							<MenuList
								sx={{
									px: 1,
									'& .MuiMenuItem-root': {
										borderRadius: 2,
									},
								}}
							>
								{menuChildren.map((item, i) => {
									const { href = '', title, type = 'item', menuChildren, Icon } = item;
									const match = useMatch({
										path: href,
									});
									switch (type) {
										case 'group':
											return (
												<NavCollapse
													key={i}
													title={title}
													menuChildren={menuChildren}
													Icon={Icon}
												/>
											);
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
													{Icon && (
														<ListItemIcon>
															<Icon />
														</ListItemIcon>
													)}
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

function NavCollapse({ title, menuChildren, Icon, level = 1 }) {
	const { pathname } = useLocation();
	const match = menuChildren.some((el) => pathname.includes(el?.href));
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
			{Icon && (
				<ListItemIcon>
					<Icon />
				</ListItemIcon>
			)}
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
				sx={{
					zIndex: 9999,
				}}
				transition
			>
				{({ TransitionProps }) => (
					<Fade {...TransitionProps} timeout={350}>
						<Paper>
							<MenuList
								sx={{
									px: 1,
								}}
							>
								{menuChildren.map((item, i) => {
									const { href = '', title, type = 'item', menuChildren, Icon } = item;
									const match = useMatch({
										path: href,
									});
									switch (type) {
										case 'group':
											return (
												<NavCollapse
													key={i}
													title={title}
													menuChildren={menuChildren}
													level={level + 1}
													Icon={Icon}
												/>
											);
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
													{Icon && (
														<ListItemIcon>
															<Icon />
														</ListItemIcon>
													)}
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
