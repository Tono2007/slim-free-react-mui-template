import moment from 'moment';
// MUI
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import PageHeader from '@/components/pageHeader';

import Loader from '@/components/loader';

function WelcomeSection() {
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} sm={6} md={6}>
				<PageHeader
					title="Bienvenida, Elizabeth Lumaad Olsen"
					sx={{ textTransform: 'none' }}
				>
					<Stack spacing={2}>
						<Typography variant="caption">
							{moment().format('LL')}
						</Typography>
						<Typography>
							The starting point for your next project is based on
							MUI.Easy customization Helps you build apps faster
							and better.
						</Typography>
					</Stack>
				</PageHeader>
			</Grid>
			<Grid item xs={12} sm={6} md={6}>
				<Box
					boxShadow={5}
					p={3}
					mt={3}
					bgcolor="primary.400"
					color="primary.contrastText"
				>
					<Typography variant="h4" mb={3}>
						SLIM. React MUI Template
					</Typography>
					Easy to customize and extend, saving you time and money.
					<br />
					The kit is built on the principles of the atomic design
					system. It helps you to create projects fastest and easily
					customized packagefdsfsdfsdf sdfs for your projects. <br />
				</Box>
			</Grid>
		</Grid>
	);
}

export default WelcomeSection;
