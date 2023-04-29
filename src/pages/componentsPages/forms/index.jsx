// MUI
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';

import PageHeader from '@/components/pageHeader';
import CardHeader from '@/components/cardHeader';

function FormsComponentPage() {
	return (
		<>
			<PageHeader title="Forms Elements">
				<Breadcrumbs aria-label="breadcrumb" sx={{ textTransform: 'uppercase' }}>
					<Link underline="hover" href="#!">
						Inicio
					</Link>
					<Typography color="text.tertiary">Components</Typography>
					<Typography color="text.tertiary">Forms</Typography>
				</Breadcrumbs>
			</PageHeader>
			<BasicForm />
		</>
	);
}
function BasicForm() {
	return (
		<Card type="section">
			<CardHeader title="Basic form input" subtitle="A basic form control with disabled and readonly mode." />
			<Grid container rowSpacing={2} columnSpacing={4}>
				<Grid item xs={6} sm={4} md={4}>
					<TextField label="Input box" variant="outlined" fullWidth />
				</Grid>
				<Grid item xs={6} sm={4} md={4}>
					<TextField label="Input box" variant="outlined" fullWidth />
				</Grid>
				<Grid item xs={6} sm={4} md={4}>
					<TextField label="Input box" variant="outlined" fullWidth />
				</Grid>
				<Grid item xs={6} sm={4} md={4}>
					<TextField multiline rows={4} label="Textarea" variant="outlined" fullWidth />
				</Grid>
				<Grid item xs={6} sm={4} md={4}>
					<TextField multiline rows={4} label="Textarea" variant="outlined" fullWidth />
				</Grid>
				<Grid item xs={6} sm={4} md={4}>
					<TextField multiline rows={4} label="Textarea" variant="outlined" fullWidth />
				</Grid>
			</Grid>
		</Card>
	);
}

export default FormsComponentPage;
