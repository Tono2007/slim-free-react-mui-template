import { useState } from 'react';
import { Link as RouterLink, useMatch, useLocation } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
// MUI Stuff
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import ButtonBase from '@mui/material/ButtonBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';

// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';

/**
 * @example
 * {
 *	id: number,
 *	type: "group" | "only",
 *	title: string,
 *	Icon: NodeElement
 *	children?: {title: string, href: string}[]
 * }
 */

const NAV_LINKS_CONFIG = [
	{
		id: 1,
		type: 'group',
		title: 'Dashboard',
		Icon: BarChartOutlinedIcon,
		children: [
			{
				title: 'Dashboard01',
				href: '/dashboard1',
			},
			{
				title: 'Dashboard02',
				href: '/dashboard1',
			},
			{
				title: 'Dashboard03',
				href: '/dashboard1',
			},
		],
	},
	{
		id: 2,
		type: 'group',
		title: 'UI Elements',
		Icon: GridViewOutlinedIcon,
		children: [
			{
				title: 'Buttons',
				href: '/producers',
			},
			{
				title: 'Forms',
				href: '/producers/new',
			},
		],
	},
	{
		id: 3,
		type: 'group',
		title: 'Pages',
		Icon: AutoStoriesOutlinedIcon,
		children: [
			{
				title: 'Sign in',
				href: '/login',
			},
			{
				title: 'Sign up',
				href: '/login',
			},
		],
	},
	{
		id: 4,
		type: 'group',
		title: 'Theme',
		Icon: PaletteOutlinedIcon,
		children: [
			{
				title: 'Paleta de Colores',
				href: '/colors',
			},
			{
				title: 'Tipografia',
				href: '/Tipografia',
			},
		],
	},
	{
		id: 5,
		type: 'group',
		title: 'Apps',
		Icon: InventoryOutlinedIcon,
		children: [
			{
				title: 'Ecommerce',
				href: '/profile',
			},
			{ title: 'Social Feed', href: '/profile' },
			{ title: 'Calendar', href: '/profile' },
			{ title: 'Chat', href: '/profile' },
		],
	},
	{
		id: 6,
		type: 'only',
		title: 'Perfil',
		Icon: AccountCircleOutlinedIcon,
		href: '/profile',
	},
	{
		id: 7,
		type: 'only',
		title: 'Widgets',
		Icon: WidgetsOutlinedIcon,
		href: '/w',
	},
];
function Navbar() {
	return (
		<AppBar position="sticky" color="transparent" elevation={26}>
			<Box
				bgcolor="background.paper"
				py={2}
				border={1}
				borderColor="border"
			>
				<Container maxWidth="lg">
					<Stack
						width="100%"
						direction="row"
						component="nav"
						borderLeft={1}
						borderColor="border"
						flexWrap="wrap"
					>
						{NAV_LINKS_CONFIG.map((navLink) => {
							const { title, type, Icon, id } = navLink;
							if (type === 'group') {
								return (
									<NavDropLink
										key={id}
										minWidth={navLink?.menuMinWidth}
										options={navLink?.children}
										Icon={Icon}
										title={title}
									/>
								);
							}
							return (
								<NavLink
									key={id}
									href={navLink?.href}
									Icon={Icon}
									title={title}
								/>
							);
						})}
					</Stack>
				</Container>
			</Box>
		</AppBar>
	);
}

function NavLink({ href, Icon, title }) {
	const match = useMatch({ path: href });

	return (
		<ButtonBase
			component={RouterLink}
			to={href}
			sx={{
				...(match && {
					backgroundImage: (theme) =>
						`linear-gradient(90deg, ${theme.palette.primary[200]} 0%,${theme.palette.primary.main} 100% )`,
				}),
				// bgcolor: match ? '#000' : 'transparent',
				flexGrow: 1,
				'&:hover': {
					bgcolor: (theme) => alpha(theme.palette.primary.light, 0.1),
				},
			}}
		>
			<NavItem Icon={Icon} title={title} selected={match} />
		</ButtonBase>
	);
}

function NavDropLink({ minWidth = 200, options = [], Icon, title }) {
	const location = useLocation();
	const [anchorEl, setAnchorEl] = useState(null);
	const match = options.some((el) => location.pathname.includes(el.href));

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<Menu
				elevation={26}
				sx={{
					// mt: '16px',
					'& .MuiMenuItem-root': {
						mt: 0.5,
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
					{options.map((option, i) => {
						const match = useMatch({ path: option.href });
						return (
							<MenuItem
								key={i}
								onClick={handleClose}
								component={RouterLink}
								sx={{ fontSize: 14 }}
								/* selected={Boolean(match)} */
								to={option.href}
							>
								{option.title}
							</MenuItem>
						);
					})}
				</MenuList>
			</Menu>
			<ButtonBase
				onClick={handleClick}
				sx={{
					flexGrow: 1,
					...(match && {
						backgroundImage: (theme) =>
							`linear-gradient(90deg, ${theme.palette.primary[300]} 0%,${theme.palette.primary.dark} 100% )`,
					}),
					'&:hover': {
						bgcolor: (theme) =>
							alpha(theme.palette.primary.light, 0.1),
					},
				}}
			>
				<NavItem expand Icon={Icon} title={title} selected={match} />
			</ButtonBase>
		</>
	);
}

function NavItem({ Icon, title, expand = false, selected = false }) {
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
					color: (theme) =>
						selected
							? theme.palette.primary.contrastText
							: theme.palette.primary[300],
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
			{expand && (
				<ExpandMoreIcon
					fontSize="small"
					sx={{
						color: (theme) =>
							selected ? 'white' : 'text.secondary',
						fontSize: 17,
					}}
				/>
			)}
		</Stack>
	);
}

export default Navbar;
