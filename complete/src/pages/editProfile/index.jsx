import { Link as RouterLink, useSearchParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import calcHeaderHeight from '@helpers/layoutHeight';

// MUI
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';

import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';

import PageHeader from '@/components/pageHeader';

import Account from './account';
import Profile from './profile';
import Security from './security';
import Billing from './billing';

const menuOptions = [
	{
		id: uuid(),
		name: 'account',
		Icon: Person2OutlinedIcon,
		text: 'Account',
		renderSection: <Account />,
	},
	{
		id: uuid(),
		name: 'profile',
		Icon: AccountBoxOutlinedIcon,
		text: 'Profile',
		renderSection: <Profile />,
	},
	{
		id: uuid(),
		name: 'billing',
		Icon: CreditCardIcon,
		text: 'Billing',
		renderSection: <Billing />,
	},
	{
		id: uuid(),
		name: 'security',
		Icon: VpnKeyOutlinedIcon,
		text: 'Security',
		renderSection: <Security />,
	},
];

function EditProfile() {
	const [searchParams, setSearchParams] = useSearchParams();
	const activeSection = searchParams.get('section') || menuOptions[0].name;

	const changeSectionHandler = (sectionName) => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
		setSearchParams({ section: sectionName });
	};

	return (
		<>
			<PageHeader title="Account Settings Page">
				<Breadcrumbs
					aria-label="breadcrumb"
					sx={{
						textTransform: 'uppercase',
					}}
				>
					<Link underline="hover" component={RouterLink} to="/pages/profile">
						Profile
					</Link>
					<Typography color="text.tertiary">Settings</Typography>
				</Breadcrumbs>
			</PageHeader>
			<Grid container rowSpacing={2} columnSpacing={4}>
				<Grid item xs={12} sm={4} md={3}>
					<Card
						sx={{
							position: 'sticky',
							top: `${calcHeaderHeight('nav', false) + 30}px`,
						}}
						component="aside"
					>
						<Typography variant="subtitle1">Elizabeth Lumaad Olsen</Typography>
						<Divider sx={{ borderColor: 'primary.light', my: 1 }} />
						<MenuList
							sx={{
								'& .MuiMenuItem-root': {
									borderRadius: 2,
								},
							}}
						>
							{menuOptions.map(({ id, name, Icon, text }) => (
								<MenuListItem
									key={id}
									text={text}
									Icon={Icon}
									onClick={() => changeSectionHandler(name)}
									selected={activeSection === name}
								/>
							))}
							<MenuItem>
								<ListItemIcon>
									<HandshakeOutlinedIcon fontSize="medium" />
								</ListItemIcon>
								Terms and conditions
							</MenuItem>
						</MenuList>
					</Card>
				</Grid>
				<Grid item xs={12} sm={8} md={9}>
					{menuOptions.find((option) => option.name === activeSection)?.renderSection}
				</Grid>
			</Grid>
		</>
	);
}

function MenuListItem({ Icon, text, ...props }) {
	return (
		<MenuItem {...props}>
			<ListItemIcon>
				<Icon fontSize="medium" />
			</ListItemIcon>
			{text}
		</MenuItem>
	);
}

export default EditProfile;
