import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import PageHeader from '@/components/pageHeader';
import CardHeader from '@/components/cardHeader';

function CardHeaderComponentPage() {
	return (
		<>
			<PageHeader title="Card Header Component">
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
					<Typography color="text.tertiary">Card Header</Typography>
				</Breadcrumbs>
			</PageHeader>
			<Typography>size: &quot;small&quot; | &quot;medium&quot; | &quot;large&quot;</Typography>
			<Stack spacing={4} mt={4}>
				<Card>
					<CardHeader title="Card header Title" subtitle="Optional Card header subtitle">
						Optional card header action
					</CardHeader>
				</Card>
				<Card>
					<CardHeader title='Card header size="medium"' subtitle="default Card header size is medium">
						Optional card header action
					</CardHeader>
				</Card>
				<Card>
					<CardHeader size="small" title='Card header size="small"' subtitle="Small Card header size  ">
						Optional card header action
					</CardHeader>
				</Card>
				<Card>
					<CardHeader size="large" title='Card header size="large"' subtitle="Large Card header size  ">
						Optional card header action
					</CardHeader>
				</Card>
				<Card>
					<CardHeader title='Card header without subtitle & action"' />
				</Card>
				<Card>
					<CardHeader title="Card header with button" subtitle="Medium Card header with button action  ">
						<Button variant="contained">Button Action</Button>
					</CardHeader>
				</Card>
			</Stack>
		</>
	);
}

export default CardHeaderComponentPage;
