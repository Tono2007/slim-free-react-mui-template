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
				href: '/dashboards/dashboard1',
			},
			{
				title: 'Dashboard02',
				href: '/dashboards/dashboard2',
			},
			{
				title: 'Dashboard03',
				href: '/dashboards/dashboard3',
			},
			{
				title: 'Dashboard04',
				href: '/dashboards/dashboard4',
			},
			{
				title: 'Dashboard05',
				href: '/dashboards/dashboard5',
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
				href: '/pages/login',
			},
			{
				title: 'Sign up',
				href: '/pages/login',
			},
			{
				title: 'Edit Profile',
				href: '/pages/login',
			},
			{
				title: 'Profile',
				href: '/pages/login',
			},
			{
				title: 'Error Pages',
				type: 'group',
				children: [
					{
						title: '404',
						href: '/pages/error/404',
					},
					{
						title: '405',
						href: '/pages/error/404',
					},
					{
						title: '403',
						href: '/pages/error/404',
					},
					{
						title: '401',
						href: '/pages/error/404',
					},
				],
			},
			{
				title: 'Landing Pages',
				type: 'group',
				children: [
					{
						title: 'Landing01',
						href: '/pages/landing/landing1',
					},
					{
						title: 'Landing02',
						href: '/pages/landing/landing2',
					},
					{
						title: 'Landing03',
						href: '/pages/landing/landing3',
					},
					{
						title: 'Landing04',
						href: '/pages/landing/landing4',
					},
				],
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
				href: '/theme/colors',
			},
			{
				title: 'Tipografia',
				href: '/theme/typography',
			},
			{
				title: 'Sombras',
				href: '/theme/boxShadow',
			},
			{
				title: 'Iconos',
				href: '/theme/icons',
			},
			{
				title: 'Utilidades',
				href: '/theme/utils',
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
		title: 'Components',
		Icon: WidgetsOutlinedIcon,
		href: '/w',
	},
	{
		id: 7,
		type: 'item',
		title: 'Perfil',
		Icon: AccountCircleOutlinedIcon,
		href: '/profile',
	},
];

export default NAV_LINKS_CONFIG;
