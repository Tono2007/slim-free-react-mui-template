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
 *	type: "group" | "item",
 *	title: string,
 *	Icon: NodeElement
 *	children?: {title: string, href: string}[]
 *  menuMinWidth?: number
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
				href: '/dashboard2',
			},
			{
				title: 'Dashboard03',
				href: '/dashboard3',
			},
			{
				title: 'Dashboard04',
				href: '/dashboard4',
			},
			{
				title: 'Dashboard05',
				href: '/dashboard5',
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
			{
				title: 'Edit Profile',
				href: '/login',
			},
			{
				title: 'Profile',
				href: '/login',
			},
			{
				title: 'Error Pages',
				type: 'group',
				children: [
					{
						title: '404',
						href: '/dashboard1',
					},
					{
						title: '405',
						href: '/401',
					},
					{
						title: '403',
						href: '/dashboard3',
					},
					{
						title: '401',
						href: '/dashboard5',
					},
				],
			},
			{
				title: '404 ',
				href: '/404',
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
			{
				title: 'Custom Components',
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
		type: 'item',
		title: 'Perfil',
		Icon: AccountCircleOutlinedIcon,
		href: '/profile',
	},
	{
		id: 7,
		type: 'item',
		title: 'Widgets',
		Icon: WidgetsOutlinedIcon,
		href: '/w',
	},
];

export default NAV_LINKS_CONFIG;
