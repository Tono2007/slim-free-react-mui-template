import Stack from '@mui/material/Stack';

import VisitorsSection from './visitorsSection';
import WelcomeSection from './welcomeSection';

function Dashboard4() {
	return (
		<Stack spacing={3} mt={4}>
			<WelcomeSection />
			<VisitorsSection />
		</Stack>
	);
}

export default Dashboard4;
