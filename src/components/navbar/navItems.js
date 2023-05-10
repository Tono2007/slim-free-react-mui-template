import { v4 as uuid } from 'uuid';
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
		id: uuid(),
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
		id: uuid(),
		type: 'group',
		title: 'Components',
		Icon: GridViewOutlinedIcon,
		children: [
			{
				title: 'Forms',
				href: '/components/forms',
			},
			{
				title: 'Tables',
				href: '/components/tables',
			},
			{
				title: 'Modal',
				href: '/components/modal',
			},
			{
				title: 'Loaders',
				href: '/components/loaders',
			},
			{
				title: 'Snackbar/Toast',
				href: '/components/snackbar',
			},
			{
				title: 'Carousel WIP',
				href: '/components/new',
			},
			{
				title: 'Navigation WIP',
				// navbar
				href: '/components/new',
			},
			{
				title: 'UI Elements WIP',
				type: 'group',
				children: [
					{
						title: 'Card',
						href: '/theme/components/paper',
					},
					{
						title: 'CardHeader',
						href: '/theme/components/paper',
					},
					{
						title: 'PageHeader',
						href: '/theme/components/paper',
					},
					{
						title: 'Menu',
						href: '/theme/components/paper',
					},
					{
						title: 'Paper',
						href: '/components/ui/paper',
					},
					{
						title: 'Buttons',
						href: '/components/ui/buttons',
					},
					{
						title: 'Inputs',
						href: '/components/ui/inputs',
					},
				],
			},

			{
				title: 'Level 0',
				type: 'group',
				children: [
					{
						title: 'Level 1a',
						href: '/1a',
					},
					{
						title: 'Level 1b',
						type: 'group',
						children: [
							{
								title: 'Level 2a',
								href: '/2a',
							},
							{
								title: 'Level 2b',
								href: '/2b',
							},
							{
								title: 'Level 2c',
								type: 'group',
								children: [
									{
										title: 'Level 3a',
										href: '/3a',
									},
									{
										title: 'Level 3b',
										type: 'group',
										children: [
											{
												title: 'Level 4a',
												href: '/3b',
											},
										],
									},
									{
										title: 'Level 3c',
										href: '/3c',
									},
								],
							},
						],
					},
					{
						title: 'Level 1c',
						href: '/1c',
					},
				],
			},
		],
	},
	{
		id: uuid(),
		type: 'group',
		title: 'Pages',
		Icon: AutoStoriesOutlinedIcon,
		children: [
			{
				id: uuid(),
				title: 'Sign in',
				type: 'group',
				children: [
					{
						title: 'Sign in',
						href: '/pages/login',
					},
					{
						title: 'Sign in Simple',
						href: '/pages/login/simple',
					},
					{
						title: 'Sign in Split',
						href: '/pages/login/split',
					},
				],
			},
			{
				id: uuid(),
				title: 'Sign up',
				type: 'group',
				children: [
					{
						title: 'Sign up',
						href: '/pages/signup',
					},
					{
						title: 'Sign up Simple',
						href: '/pages/signup/simple',
					},
					{
						title: 'Sign up Split',
						href: '/pages/signup/split',
					},
				],
			},
			{
				title: 'WIP',
				href: '/pages/wip',
			},
			{
				title: 'Account Settings',
				href: '/pages/settings',
			},
			{
				title: 'Notifications WIP',
				href: '/pages/login',
			},
			{
				title: 'Profile WIP',
				href: '/pages/login',
			},
			{
				title: 'Pricing WIP',
				href: '/pages/login',
			},
			{
				id: uuid(),
				title: 'Error Pages',
				type: 'group',
				children: [
					{
						title: '403 Unauthorized',
						href: '/pages/error/403',
					},
					{
						title: '404 Not Found',
						href: '/pages/error/404',
					},
					{
						title: '500 Internal Server',
						href: '/pages/error/500',
					},
					{
						title: '503 Service Unavailable',
						href: '/pages/error/503',
					},
					{
						title: '505 Forbidden',
						href: '/pages/error/505',
					},
				],
			},
			{
				id: uuid(),
				title: 'Landing Pages WIP',
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
		id: uuid(),
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

			/* {
				title: 'Iconos',
				href: '/theme/icons',
			}, */
			{
				title: 'Utilities WIP',
				// Breakpoints
				href: '/theme/utils',
			},
			// libraries/ packgaes ej.> moment
		],
	},
	{
		id: uuid(),
		type: 'group',
		title: 'Apps',
		Icon: InventoryOutlinedIcon,
		children: [
			{
				title: 'Ecommerce WIP',
				href: '/profile WIP',
			},
			{
				title: 'Social Feed WIP',
				href: '/profile WIP',
			},
			{
				title: 'Calendar WIP',
				href: '/profile WIP',
			},
			{
				title: 'Chat WIP',
				href: '/profile WIP',
			},
		],
	},
	{
		id: uuid(),
		type: 'item',
		// 	title: 'Components',
		title: 'Sample Tab',
		Icon: WidgetsOutlinedIcon,
		href: '/samplePage',
	},
	{
		id: uuid(),
		type: 'item',
		title: 'Perfil',
		Icon: AccountCircleOutlinedIcon,
		href: '/profile',
	},
];

export default NAV_LINKS_CONFIG;
