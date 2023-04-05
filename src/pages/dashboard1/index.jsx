// MUI
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import WelcomeSection from './welcomeSection';
import StatsSection from './statsSection';
import GraphsSection from './graphsSection';
import BitcoinSection from './bitcoinSection';
import ProductsSection from './productsSection';
import TransactionsSection from './transactionsSection';

function Dashboard1Page() {
	return (
		<Stack spacing={3}>
			<WelcomeSection />
			<GraphsSection />
			<StatsSection />
			<section>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={12} md={6}>
						<ProductsSection />
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<TransactionsSection />
					</Grid>
				</Grid>
			</section>
			<BitcoinSection />
		</Stack>
	);
}

export default Dashboard1Page;
