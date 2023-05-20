import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

import PageHeader from '@/components/pageHeader';

import SalesOverviewCard from './salesCard';
import StatsSection from './statsSection';
import EarningsSection from './earningsSection';
import SuggestedPeople from './suggestedPeople';
import ProductsSection from './productsSection';
import ActivitiesCard from './activitiesSection';

function Dashboard3() {
	return (
		<>
			<PageHeader title="Dashboard 03">
				<Breadcrumbs
					aria-label="breadcrumb"
					sx={{
						textTransform: 'uppercase',
					}}
				>
					<Link underline="hover" href="#!">
						Inicio
					</Link>
					<Typography color="text.tertiary">Dashboard</Typography>
				</Breadcrumbs>
			</PageHeader>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={12} md={12}>
					<StatsSection />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<ActivitiesCard />
				</Grid>
				<Grid item xs={12} sm={6} md={5}>
					<EarningsSection />
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<SuggestedPeople />
				</Grid>
				<Grid item xs={12} sm={12} md={12}>
					<ProductsSection />
				</Grid>
				<Grid item xs={12} sm={12} md={12}>
					<SalesOverviewCard />
				</Grid>
			</Grid>
		</>
	);
}

export default Dashboard3;
