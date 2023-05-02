import useAutoCounter from '@hooks/useAutoCounter';

import Chart from 'react-apexcharts';
import getDefaultChartsColors from '@helpers/getDefaultChartsColors';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import CardHeader from '@/components/cardHeader';

const impressionsGraphConfig = {
	options: {
		fill: {
			colors: getDefaultChartsColors(3),
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
		stroke: {
			colors: getDefaultChartsColors(3),
			width: 2,
		},
		markers: {
			size: 0,
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
		yaxis: {
			show: false,
		},
	},
	series: [
		{
			name: 'series-1',
			data: [9, 13, 12, 15, 12, 11, 15, 16, 17, 10, 15],
		},
	],
};
function PageImpressionsCard() {
	const counter = useAutoCounter({
		limiter: 323360,
		increment: 5000,
		interval: 10,
	});
	return (
		<Card type="none">
			<Stack direction="column" spacing={0} px={3} pt={3}>
				<CardHeader title="Page Impressions" size="small" />
				<Typography variant="body2" fontSize={35} color="primary.main">
					{counter.toLocaleString()}
				</Typography>
				<Typography variant="body1" color="text.secondary" display="flex" alignItems="center">
					<Avatar
						sx={{
							bgcolor: 'error.light',
							color: 'error.dark',
							width: 24,
							height: 24,
						}}
						variant="rounded"
					>
						<ArrowDownwardIcon fontSize="small" />
					</Avatar>
					<Typography color="error.main" component="span" ml={1}>
						2.5%{' '}
					</Typography>
					change from yesterday
				</Typography>
			</Stack>
			<Chart
				options={impressionsGraphConfig.options}
				series={impressionsGraphConfig.series}
				type="area"
				width="100%"
				height="100px"
			/>
		</Card>
	);
}

export default PageImpressionsCard;
