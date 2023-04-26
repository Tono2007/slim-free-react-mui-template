import useAutoCounter from '@hooks/useAutoCounter';

import Chart from 'react-apexcharts';
import getDefaultChartsColors from '@helpers/getDefaultChartsColors';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function GraphsSection() {
	return (
		<section>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={12} md={6}>
					<BitcoinEarningsSection />
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={12} md={12}>
							<EtereumWalletSection />
						</Grid>
						<Grid item xs={12} sm={6} md={6}>
							<MaleVisitorsSection />
						</Grid>
						<Grid item xs={12} sm={6} md={6}>
							<FemaleVisitorsSection />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</section>
	);
}

function SectionContainer({ children, background }) {
	return (
		<Card sx={{ position: 'relative', height: '100%' }}>
			<Box position="absolute" top="0" bottom="0" left="0" right="0">
				{background}
			</Box>
			{children}
		</Card>
	);
}

const bitcoinGraphConfig = {
	options: {
		colors: getDefaultChartsColors(3),
		chart: {
			toolbar: {
				show: false,
			},
			sparkline: {
				enabled: true,
			},
			parentHeightOffset: 0,
		},
		stroke: {
			width: 2,
		},
		markers: {
			size: 5,
		},
		grid: {
			show: false,
		},
		xaxis: {
			show: false,
		},
		tooltip: {
			enabled: false,
		},
		yaxis: { show: false },
	},
	series: [
		{
			name: 'series-1',
			data: [6, 8, 7, 10, 14, 11, 16, 18],
		},
		{
			name: 'series-2',
			data: [2, 4, 3, 4, 5, 3, 5, 4],
		},
	],
};

function BitcoinEarningsSection() {
	const counter = useAutoCounter({
		limiter: 0.0345,
		increment: 0.001,
		interval: 10,
	});
	return (
		<SectionContainer
			background={
				<Chart
					options={bitcoinGraphConfig.options}
					series={bitcoinGraphConfig.series}
					type="area"
					style={{
						position: 'absolute',
						bottom: '-10px',
						left: '-10px',
						right: '-10px',
					}}
					width="100%"
					height="70%"
				/>
			}
		>
			<Stack
				spacing={1}
				direction="column"
				height="100%"
				width={{ xs: '100%', md: '70%' }}
				pb={{ xs: 30, md: 0 }}
			>
				<Typography variant="subtitle1" fontSize={55}>
					{Math.round(counter * 10000) / 10000}{' '}
					<Typography variant="subtitle1" component="span">
						BTC
					</Typography>
				</Typography>
				<Typography variant="subtitle1">BITCOIN EARNINGS</Typography>
				<Typography variant="body2" color="text.secondary" pb={2}>
					Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
					rhoncus...
				</Typography>
				<Button
					variant="outlined"
					size="medium"
					endIcon={<ChevronRightIcon />}
					sx={{
						width: 'fit-content',
						textTransform: 'uppercase',
					}}
				>
					View Statements
				</Button>
			</Stack>
		</SectionContainer>
	);
}

const ethereumGraphConfig = {
	options: {
		colors: getDefaultChartsColors(2),
		plotOptions: {
			bar: {
				columnWidth: '95%',
			},
		},
		chart: {
			toolbar: {
				show: false,
			},
			sparkline: {
				enabled: true,
			},
			parentHeightOffset: 0,
		},
		grid: {
			show: false,
		},
		xaxis: {
			show: false,

			categories: [1],
		},
		tooltip: {
			enabled: false,
		},
		yaxis: { show: false },
	},
	series: [
		{
			name: 'series-1',
			data: [20, 25, 10, 20, 15, 18, 15, 3, 2, 5, 3, 2, 4, 5, 1, 2],
		},
		{
			name: 'series-2',
			data: [10, 30, 45, 30, 25, 15, 10, 4, 3, 2, 5, 2, 3, 2, 4, 5],
		},
	],
};
function EtereumWalletSection() {
	const counter = useAutoCounter({
		limiter: 0.0873,
		increment: 0.001,
		interval: 10,
	});
	return (
		<SectionContainer
			background={
				<Chart
					options={ethereumGraphConfig.options}
					series={ethereumGraphConfig.series}
					type="bar"
					style={{
						position: 'absolute',
						bottom: '0',
						left: '0',
						right: '0',
					}}
					width="100%"
					height="90%"
				/>
			}
		>
			<Stack ml="auto" width="50%" spacing={0}>
				<Typography variant="subtitle1" fontSize={35}>
					{Math.round(counter * 10000) / 10000}{' '}
					<Typography variant="subtitle1" component="span">
						ETH
					</Typography>
				</Typography>
				<Typography variant="subtitle1">ETHEREUM WALLET</Typography>
				<Typography variant="subtitle2">
					Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
					rhoncus...
				</Typography>
				<Button
					variant="text"
					size="small"
					endIcon={<ChevronRightIcon />}
					sx={{ width: 'fit-content', textTransform: 'uppercase' }}
				>
					View Report
				</Button>
			</Stack>
		</SectionContainer>
	);
}

const maleVisitorsGraphConfig = {
	options: {
		colors: getDefaultChartsColors(3),
		chart: {
			toolbar: {
				show: false,
			},
			sparkline: {
				enabled: true,
			},
			parentHeightOffset: 0,
		},
		stroke: {
			curve: 'straight',
			width: 1,
		},
		markers: {
			size: 4,
		},
		grid: {
			show: false,
		},
		xaxis: {
			show: false,
		},
		tooltip: {
			enabled: false,
		},
		yaxis: { show: false },
	},
	series: [
		{
			name: 'series-1',
			data: [5, 7, 7, 9, 8, 10, 11, 8, 7, 6, 9, 7, 10, 11],
		},
	],
};

function MaleVisitorsSection() {
	const counter = useAutoCounter({
		limiter: 29931,
		increment: 1000,
		interval: 10,
	});
	return (
		<SectionContainer
			background={
				<Chart
					options={maleVisitorsGraphConfig.options}
					series={maleVisitorsGraphConfig.series}
					type="area"
					style={{
						position: 'absolute',
						bottom: '-10px',
						left: '-10px',
						right: '-10px',
					}}
					width="100%"
					height="30%"
				/>
			}
		>
			<Stack
				spacing={0}
				direction="column"
				width="100%"
				justifyContent="center"
				alignItems="center"
			>
				<Typography variant="subtitle1" fontSize={35}>
					{counter.toLocaleString()}
				</Typography>
				<Typography variant="subtitle1">MALE VISITORS</Typography>
				<Typography variant="subtitle2" color="text.secondary" pb={2}>
					Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
					rhoncus...
				</Typography>
			</Stack>
		</SectionContainer>
	);
}
const femaleVisitorsGraphConfig = {
	options: {
		colors: getDefaultChartsColors(4),
		chart: {
			toolbar: {
				show: false,
			},
			sparkline: {
				enabled: true,
			},
			parentHeightOffset: 0,
		},
		stroke: {
			curve: 'straight',
			width: 1,
		},
		markers: {
			size: 4,
		},
		grid: {
			show: false,
		},
		xaxis: {
			show: false,
		},
		tooltip: {
			enabled: false,
		},
		yaxis: { show: false },
	},
	series: [
		{
			name: 'series-1',
			data: [5, 7, 7, 10, 8, 10, 7, 6, 7, 7, 8, 7, 11, 10],
		},
	],
};

function FemaleVisitorsSection() {
	const counter = useAutoCounter({
		limiter: 45231,
		increment: 1000,
		interval: 10,
	});
	return (
		<SectionContainer
			background={
				<Chart
					options={femaleVisitorsGraphConfig.options}
					series={femaleVisitorsGraphConfig.series}
					type="area"
					style={{
						position: 'absolute',
						bottom: '-10px',
						left: '-10px',
						right: '-10px',
					}}
					width="100%"
					height="30%"
				/>
			}
		>
			<Stack
				spacing={0}
				direction="column"
				width="100%"
				justifyContent="center"
				alignItems="center"
			>
				<Typography variant="subtitle1" fontSize={35}>
					{counter.toLocaleString()}
				</Typography>
				<Typography variant="subtitle1">FEMALE VISITORS</Typography>
				<Typography variant="subtitle2" color="text.secondary" pb={2}>
					Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
					rhoncus...
				</Typography>
			</Stack>
		</SectionContainer>
	);
}

export default GraphsSection;
