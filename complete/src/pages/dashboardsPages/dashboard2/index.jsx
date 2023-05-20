import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import PageHeader from '@/components/pageHeader';

import PageImpressionsCard from './pageImpressionsCard';
import CustomerCard from './customerCard';
import SaleProgressCard from './saleProgressCard';
import MostVisitedCard from './mostVisitedCard';
import SalesOverviewCard from './salesOverviewCard';
import ShareThougtsCard from './shareThougtsCard';
import ContactCard from './contactCard';
import TodoListCard from './todoListCard';
import ActivitiesCard from './activitiesCard';

function Dashboard2() {
	return (
		<>
			<PageHeader title="Dashboard 02">
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
			<Grid container spacing={3}>
				<Grid
					item
					xs={12}
					sm={6}
					md={3}
					order={{
						xs: 2,
						sm: 1,
						md: 1,
					}}
				>
					<Stack spacing={3} direction="column">
						<PageImpressionsCard />
						<ActivitiesCard />
						<TodoListCard />
					</Stack>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={6}
					order={{
						xs: 1,
						sm: 4,
						md: 2,
					}}
				>
					<Stack spacing={3} direction="column">
						<CustomerCard />
						<SalesOverviewCard />
						<ShareThougtsCard />
					</Stack>
				</Grid>
				<Grid item xs={12} sm={6} md={3} order={3}>
					<Stack spacing={3} direction="column">
						<SaleProgressCard />
						<MostVisitedCard />
						<ContactCard />
					</Stack>
				</Grid>
			</Grid>
		</>
	);
}

export default Dashboard2;
