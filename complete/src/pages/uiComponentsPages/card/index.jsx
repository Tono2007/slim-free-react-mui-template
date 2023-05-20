import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';

import PageHeader from '@/components/pageHeader';

function CardPage() {
	return (
		<>
			<PageHeader title="Card Component">
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
					<Typography color="text.tertiary">Card</Typography>
				</Breadcrumbs>
			</PageHeader>
			<Typography>
				variant: &quot;outlinedElevation&quot; | &quot;outlined&quot; | &quot;elevation&quot;
			</Typography>
			<Typography>
				<Typography>type: &quot;card&quot; | &quot;section&quot; | &quot;none&quot;</Typography>
			</Typography>
			<Typography>hover: &quot;light&quot; | &quot;color&quot; | &quot;none&quot;</Typography>
			<Stack spacing={4} mt={4}>
				<Card>
					<CardContent
						title='variant="outlinedElevation"'
						subtitle='Default Card variant is "outlinedElevation"'
					/>
				</Card>
				<Card variant="outlined">
					<CardContent
						title='variant="outlined"'
						subtitle="Outlined variant, borders without shadow elevation"
					/>
				</Card>
				<Card variant="elevation">
					<CardContent
						title='variant="elevation"'
						subtitle="Elevation variant, without borders and default shadow elevation"
					/>
				</Card>
				<Card variant="elevation" elevation="15">
					<CardContent
						title='variant="elevation" elevation="15"'
						subtitle="Elevation variant, without borders and custom shadow elevation"
					/>
				</Card>
				<Card>
					<CardContent border title='type="card"' subtitle='Default Card type is "card", same padding' />
				</Card>
				<Card type="section">
					<CardContent border title='type="section"' subtitle='Section Card type, more "y" Padding' />
				</Card>
				<Card type="none">
					<CardContent title='type="none"' subtitle="None type Card, no padding" />
				</Card>
				<Card>
					<CardContent title='hover="light"' subtitle='Default Card hover is "light", shadow on hover' />
				</Card>
				<Card hover="color">
					<CardContent title='hover="color"' subtitle="Color Card hover, primary color shadow on hover" />
				</Card>
				<Card hover="none">
					<CardContent title='hover="none"' subtitle="none Card hover, no shadow on hover" />
				</Card>
			</Stack>
		</>
	);
}

function CardContent({ title, subtitle, border }) {
	return (
		<Box height={150} border={border ? 2 : 0}>
			<Typography variant="subtitle1">{title}</Typography>
			<Typography>{subtitle}</Typography>
		</Box>
	);
}

export default CardPage;
