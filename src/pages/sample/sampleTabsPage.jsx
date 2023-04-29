import { useState } from 'react';
import calcHeaderHeight from '@helpers/layoutHeight';
// MUI
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ListItemIcon from '@mui/material/ListItemIcon';

import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';

import PageHeader from '@/components/pageHeader';
import CardHeader from '@/components/cardHeader';

const menuOptions = [
	{
		id: 1,
		Icon: Person2OutlinedIcon,
		text: 'Seccion 1 ...',
	},
	{
		id: 2,
		Icon: AccountBoxOutlinedIcon,
		text: 'Sección 2 lorem',
	},
	{
		id: 3,
		Icon: VpnKeyOutlinedIcon,
		text: 'Sección 3 lorem',
	},
	{
		id: 4,
		Icon: HandshakeOutlinedIcon,
		text: 'Sección 4 lorem',
	},
];

function SampleTabsPage() {
	const [activeIndex, setActiveIndex] = useState(1);
	return (
		<>
			<PageHeader title="Sample Tabs Page">
				<Breadcrumbs aria-label="breadcrumb" sx={{ textTransform: 'uppercase' }}>
					<Link underline="hover" href="#!">
						Inicio
					</Link>
					<Typography color="text.tertiary">Sample Tab Page</Typography>
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
						<MenuList>
							{menuOptions.map(({ id, Icon, text }) => (
								<MenuListItem
									key={id}
									text={text}
									Icon={Icon}
									onClick={() => setActiveIndex(id)}
									selected={activeIndex === id}
								/>
							))}
							<MenuItem component={Link} href="#!">
								<ListItemIcon>
									<Person2OutlinedIcon fontSize="medium" />
								</ListItemIcon>
								Link
							</MenuItem>
						</MenuList>
					</Card>
				</Grid>
				<Grid item xs={12} sm={8} md={9}>
					{activeIndex === 1 && <Section text={activeIndex} />}
					{activeIndex === 2 && <Section text={activeIndex} />}
					{activeIndex === 3 && <Section text={activeIndex} />}
					{activeIndex === 4 && <Section text={activeIndex} />}
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

function Section({ text }) {
	return (
		<Card sx={{ minHeight: '100vh' }} type="section">
			<CardHeader title={`Section ${text} Title`} subtitle="Section subtitle">
				Optional Action
			</CardHeader>
			{text}
		</Card>
	);
}

export default SampleTabsPage;
