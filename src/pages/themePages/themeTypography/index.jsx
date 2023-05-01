import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import PageHeader from '@/components/pageHeader';
import BasicTypography from './basicTypography';

function ThemeTypography() {
	return (
		<>
			<PageHeader title="Typography">
				<Breadcrumbs
					aria-label="breadcrumb"
					sx={{
						textTransform: 'uppercase',
					}}
				>
					<Link underline="hover" href="#!">
						Inicio
					</Link>
					<Link underline="hover" href="#!">
						Theme
					</Link>
					<Typography color="text.tertiary">Typography</Typography>
				</Breadcrumbs>
			</PageHeader>
			<BasicTypography />
		</>
	);
}

export default ThemeTypography;
