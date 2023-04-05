// MUI
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import PageHeader from '@/components/pageHeader';

function WelcomeSection() {
	return (
		<PageHeader
			title="Bienvenida, Elizabeth Lumaad Olsen"
			sx={{ textTransform: 'none', mb: 0 }}
		>
			<Breadcrumbs
				aria-label="breadcrumb"
				sx={{ textTransform: 'uppercase' }}
			>
				<Link underline="hover" color="primary" href="#!">
					Inicio
				</Link>
				<Typography color="text.tertiary">Dashboard1</Typography>
			</Breadcrumbs>
		</PageHeader>
	);
}

export default WelcomeSection;
