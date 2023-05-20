import { v4 as uuid } from 'uuid';

import WebOutlinedIcon from '@mui/icons-material/WebOutlined';

/**
 * @example
 * {
 *	id: number,
 *	type: "group" | "item",
 *	title: string,
 *	Icon: NodeElement
 *	menuChildren?: {title: string, href: string}[]
 *  menuMinWidth?: number
 * }
 */

const NAV_LINKS_CONFIG = [
	{
		id: uuid(),
		type: 'item',
		title: 'Sample Tab',
		Icon: WebOutlinedIcon,
		href: '/samplePage',
	},
];

export default NAV_LINKS_CONFIG;
