import { useState } from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import ListItem from '@mui/material/ListItem';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';

import CheckIcon from '@mui/icons-material/Check';

import PageHeader from '@/components/pageHeader';
import CardHeader from '@/components/cardHeader';

const plans = [
	{
		name: 'Started',
		cost: '$29',
		benefits: [
			'10,000 visitors',
			'Create unlimited widgets',
			'All widget Types',
			'3rd Party Integrations',
			'Advanced Targeting',
			'Widget A/B Testing',
		],
	},
	{
		name: 'Pro',
		cost: '$46',
		benefits: [
			'10,000 visitors',
			'All in Started',
			'Website Personalization',
			'A/B Testing and Experimentation',
			'Manage Multiples Websites',
			'Priority Support',
		],
	},
	{
		name: 'Enterprise',
		cost: '$122',
		benefits: [
			'10,000 visitors',
			'All in Started and Pro',
			'Custom contract',
			'Crearbit and Albacross',
			'Custom Integrations',
			'Dedicated Manager',
		],
	},
];

function Pricing1Page() {
	const [period, setPeriod] = useState(false);
	return (
		<>
			<PageHeader title="Pricing Page">
				<Breadcrumbs
					aria-label="breadcrumb"
					sx={{
						textTransform: 'uppercase',
					}}
				>
					<Link underline="hover" href="#!">
						Pages
					</Link>
					<Typography color="text.tertiary">Pricing</Typography>
				</Breadcrumbs>
			</PageHeader>
			<Container maxWidth="md">
				<Stack spacing={3} alignItems="center">
					<Typography variant="h2" fontSize={30} fontWeight="medium">
						Choose your plan
					</Typography>
					<Typography variant="body2" color="text.tertiary">
						14 days unlimited free trial. No contract or credit card required.
					</Typography>
					<Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
						<Typography variant="subtitle1" color={period ? 'textSecondary' : 'textPrimary'}>
							Monthly
						</Typography>
						<Switch
							value={period}
							onChange={(e) => setPeriod(e.target.checked)}
							sx={{
								'& .MuiSwitch-thumb': {
									backgroundColor: 'primary.main',
								},
								'& .MuiSwitch-track': {
									opacity: 1,
									backgroundColor: 'primary.light',
								},
							}}
						/>
						<Typography variant="subtitle1" color={!period ? 'textSecondary' : 'textPrimary'}>
							Yearly
						</Typography>
						<Chip label="20% OFF" variant="outlined" color="primary" />
					</Stack>
					<Stack width="100%" spacing={1}>
						<Typography textTransform="uppercase" color="textSecondary">
							Number of monthly visitors
						</Typography>
						<Slider
							defaultValue={8000}
							aria-label="Default"
							valueLabelDisplay="on"
							step={1000}
							marks={[{ value: 10000, label: '10k' }]}
							min={0}
							max={10000}
							sx={{
								'& .MuiSlider-thumb': {
									height: 25,
									width: 25,
									backgroundColor: 'primary.main',
									border: '7px solid #fff',
									boxShadow: 2,
									'&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
										boxShadow: 4,
									},
								},
							}}
						/>
					</Stack>
					<div style={{ width: '100%' }}>
						<Grid container spacing={3} pt={4}>
							{plans.map((plan, i) => (
								<Grid item xs={12} sm={4} md={4} key={i}>
									<PlanCard plan={plan} />
								</Grid>
							))}
						</Grid>
					</div>
				</Stack>
			</Container>
		</>
	);
}

function PlanCard({ plan }) {
	const { cost, name, benefits } = plan;
	return (
		<Card sx={{ height: '100%', position: 'relative', overflow: 'visible' }} type="none">
			<Box
				height={50}
				width={50}
				position="absolute"
				top={-10}
				right={10}
				sx={{
					'&::before': {
						content: "'Best Value'",
						position: 'absolute',
						top: 0,
						left: 0,
						fontSize: 8,
						width: '100%',
						height: '100%',
						display: 'grid',
						placeItems: 'center',
						textTransform: 'uppercase',
						textAlign: 'center',
						color: 'cuaternary.contrastText',
						fontWeight: 'bold',
						bgcolor: 'cuaternary.main',
						letterSpacing: '.1em',
						clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)',
						pb: 1,
					},
					'&::after': {
						content: "''",
						position: 'absolute',
						top: 0,
						left: 0.5,
						transform: 'translateX(-100%)',
						clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
						width: 10,
						height: 10,
						bgcolor: 'cuaternary.dark',
					},
				}}
			/>
			<Typography
				variant="h3"
				bgcolor="primary.main"
				align="center"
				fontWeight="light"
				width="100%"
				p={2}
				color="primary.contrastText"
			>
				{name}
			</Typography>
			<Stack spacing={3} alignItems="center" p={3}>
				<Typography
					textAlign="center"
					variant="h1"
					component="h5"
					borderBottom={2}
					borderColor="secondary.main"
				>
					{cost} <Typography variant="caption">/MO</Typography>
				</Typography>
				<Divider flexItem>
					<Chip label="Free 30 days trial" color="primary" variant="outlined" size="small" />
				</Divider>
				<Stack spacing={1} height="100%">
					{benefits.map((benefit, i) => (
						<Feature title={benefit} key={i} />
					))}
				</Stack>
				<Button variant="contained" disableElevation>
					GET STARTED
				</Button>
			</Stack>
		</Card>
	);
}

function Feature({ title, addSX, ...props }) {
	return (
		<Stack
			direction="row"
			spacing={2}
			alignItems="center"
			sx={{
				transition: 'transform .3s',
				'&:hover': {
					transform: 'translateX(5px)',
					'& .MuiTypography-root': {
						color: (theme) => theme.palette.secondary.dark,
					},
				},
				...addSX,
			}}
			{...props}
		>
			<CheckIcon color="success" fontSize="small" />
			<Typography variant="body1" color="textSecondary">
				{title}
			</Typography>
		</Stack>
	);
}

export default Pricing1Page;
