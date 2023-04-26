import Chart from 'react-apexcharts';
import getDefaultChartsColors from '@helpers/getDefaultChartsColors';

import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function HoursSection() {
	return (
		<section>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={12} md={4}>
					<Stack spacing={2} height="100%" justifyContent="center">
						<Typography variant="subtitle1" fontSize={65}>
							34,100
						</Typography>
						<Typography variant="subtitle1">
							Total hours spent (7 days)
						</Typography>
						<Typography variant="body2" color="text.tertiary">
							Maecenas tempus, tellus eget condimentum rhoncus,
							sem quam semper libero, sit amet adipiscing sem
						</Typography>
						<Stack direction="row" spacing={3}>
							<Link href="#!" underline="none">
								View Details
							</Link>
							<Link href="#!" underline="none">
								Edit Settings
							</Link>
						</Stack>
					</Stack>
				</Grid>
				<Grid item xs={12} sm={12} md={8}>
					<HoursGraph />
				</Grid>
			</Grid>
		</section>
	);
}

const hoursGraphConfig = {
	options: {
		colors: getDefaultChartsColors(5),
		chart: {
			toolbar: {
				show: true,
			},
			zoom: {
				enabled: true,
			},
		},
		grid: {
			xaxis: {
				lines: {
					show: true,
				},
			},
			yaxis: {
				lines: {
					show: true,
				},
			},
		},
		yaxis: {
			seriesName: 'hours cuantity',
			min: 0,
			max: 80,
			tickAmount: 8,
		},
		xaxis: {
			categories: [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec',
			],
		},
	},
	series: [
		{
			name: 'Hours',
			data: [12, 39, 20, 10, 25, 18, 12, 39, 20, 10, 25, 18],
		},
	],
};
function HoursGraph() {
	return (
		<Chart
			options={hoursGraphConfig.options}
			series={hoursGraphConfig.series}
			type="bar"
			width="100%"
		/>
	);
}

export default HoursSection;
