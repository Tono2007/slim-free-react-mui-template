// MUI
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';

import PageHeader from '@/components/pageHeader';
import CardHeader from '@/components/cardHeader';

function PageHeaderComponentPage() {
	return (
		<>
			<PageHeader title="Page Header Component">
				<Breadcrumbs
					aria-label="breadcrumb"
					sx={{
						textTransform: 'uppercase',
					}}
				>
					<Link underline="hover" href="#!">
						Inicio
					</Link>
					<Typography color="text.tertiary">UI Components</Typography>
					<Typography color="text.tertiary">Page Header</Typography>
				</Breadcrumbs>
			</PageHeader>
			<PageHeader title="Header Title">optional page header action</PageHeader>
			<PageHeader title="Header with button">
				<Button variant="contained">Button Action</Button>
			</PageHeader>
			<PageHeader title="Header with Breadcrumbs">
				<Breadcrumbs
					aria-label="breadcrumb"
					sx={{
						textTransform: 'uppercase',
					}}
				>
					<Link underline="hover" href="#!">
						Link
					</Link>
					<Link underline="hover" href="#!">
						Link
					</Link>
					<Link underline="hover" href="#!">
						Link
					</Link>
					<Typography color="text.tertiary">Path</Typography>
				</Breadcrumbs>
			</PageHeader>
			<PageHeader title="Header without action" />
		</>
	);
}

export default PageHeaderComponentPage;
