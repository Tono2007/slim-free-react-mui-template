// MUI
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

import WelcomeSection from './welcomeSection';
import StatsSection from './statsSection';
import GraphsSection from './graphsSection';

function Dashboard1Page() {
	return (
		<Stack spacing={3}>
			<WelcomeSection />

			<StatsSection />

			<GraphsSection />
		</Stack>
	);
}

export default Dashboard1Page;
