import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function WelcomeSection() {
	return (
		<section>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={12} md={6}>
					<WelcomeCard />
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<SideCard />
				</Grid>
			</Grid>
		</section>
	);
}

function WelcomeCard() {
	return (
		<Stack spacing={2}>
			<Typography variant="h5" fontSize={24}>
				Bienvenida de nuevo, Elizabeth!
			</Typography>
			<Typography variant="body2" color="text.tertiary" fontSize={15}>
				Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
				ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
			</Typography>
			<Typography pt={4} variant="subtitle1" fontWeight="500" textTransform="uppercase">
				Your earning summary
			</Typography>
			<Grid
				container
				sx={{
					bgcolor: 'background.paper',
					boxShadow: 26,
					'--Grid-borderWidth': '1px',
					borderTop: 'var(--Grid-borderWidth) solid',
					borderLeft: 'var(--Grid-borderWidth) solid',
					borderColor: 'border',
					'& > div': {
						borderRight: 'var(--Grid-borderWidth) solid',
						borderBottom: 'var(--Grid-borderWidth) solid',
						borderColor: 'border',
					},
				}}
			>
				<Grid item xs={12} sm={6} md={6}>
					<EarningCard title="Today's earnings" value={950} />
				</Grid>
				<Grid item xs={12} sm={6} md={6}>
					<EarningCard title="This week's earnings" value="12,420" />
				</Grid>
			</Grid>
		</Stack>
	);
}
function EarningCard({ title, value }) {
	return (
		<Stack spacing={0} p={3}>
			<Typography variant="subtitle2" textTransform="uppercase" color="text.tertiary">
				{title}
			</Typography>
			<Typography fontSize={30}>${value}</Typography>
			<Typography variant="caption">Based on list price</Typography>
		</Stack>
	);
}

function SideCard() {
	return (
		<Card sx={{ height: '100%', display: 'grid', placeItems: 'center' }}>
			<Stack p={1} spacing={4} direction="column" textAlign="center">
				<Typography variant="h3" fontWeight="500">
					Introducing the responsive admin dashboard slim template made with Reactjs and material-ui (MUIv5)
				</Typography>
				<Typography variant="body2" color="text.tertiary" fontSize={15}>
					Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus...
				</Typography>
				<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} width="100%">
					<Button variant="contained" fullWidth disableElevation size="large" color="primary">
						Account Settings
					</Button>
					<Button variant="contained" fullWidth disableElevation size="large" color="secondary">
						Upgrade account
					</Button>
				</Stack>
				{/* <Grid container spacing={2}>
					<Grid item xs={12} sm={6} md={6}>
						<Button variant="contained" fullWidth>
							sdf
						</Button>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<Button variant="contained" fullWidth>
							sdf
						</Button>
					</Grid>
				</Grid> */}
			</Stack>
		</Card>
	);
}

export default WelcomeSection;
