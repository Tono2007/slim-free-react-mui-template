import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { NavLink } from './navItem';
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
