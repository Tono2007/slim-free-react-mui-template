import useAutoCounter from '@hooks/useAutoCounter';

import Chart from 'react-apexcharts';
import getDefaultChartsColors from '@helpers/getDefaultChartsColors';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const earningsGraphConfig = {
	options: {
		colors: getDefaultChartsColors(1),
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
			data: [20, 25, 10, 15, 20, 40, 15, 40, 25],
		},
		{
			name: 'series-2',
			data: [10, 30, 45, 30, 42, 20, 30, 15, 20],
		},
	],
};
function EarningsSection() {
	const counter = useAutoCounter({
		limiter: 3350,
		increment: 50,
		interval: 10,
	});
	return (
		<Card
			type="none"
			sx={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Stack direction="column" spacing={1} px={3} pt={3} flexGrow={1}>
				<Typography fontSize={30} variant="subtitle1">
					${counter.toLocaleString()}
				</Typography>
				<Typography variant="h5" fontWeight="500" textTransform="uppercase">
					Today&apos;s earnings
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus...
				</Typography>
				<Button
					variant="text"
					size="small"
					endIcon={<ChevronRightIcon />}
					sx={{
						width: 'fit-content',
						textTransform: 'uppercase',
					}}
				>
					View Report
				</Button>
			</Stack>
			<Chart
				style={{
					marginTop: 'auto',
				}}
				options={earningsGraphConfig.options}
				series={earningsGraphConfig.series}
				type="bar"
				width="100%"
				height="50%"
			/>
		</Card>
	);
}

export default EarningsSection;
