// MUI
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';

import PageHeader from '@/components/pageHeader';
import CardHeader from '@/components/cardHeader';
import SampleTabsPage from './sampleTabsPage';

function SamplePage() {
	return (
		<>
			<PageHeader title="Sample Page">
				<Breadcrumbs
					aria-label="breadcrumb"
					sx={{ textTransform: 'uppercase' }}
				>
					<Link underline="hover" href="#!">
						Inicio
					</Link>
					<Typography color="text.tertiary">Sample</Typography>
				</Breadcrumbs>
			</PageHeader>
			<Card type="section" sx={{ minHeight: '60vh' }}>
				<CardHeader title="Section Title" subtitle="Section subtitle">
					Optional Action
				</CardHeader>
			</Card>
			<SampleTabsPage />
		</>
	);
}

export default SamplePage;
