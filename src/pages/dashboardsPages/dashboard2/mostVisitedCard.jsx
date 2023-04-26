import Chart from 'react-apexcharts';
import getDefaultChartsColors from '@helpers/getDefaultChartsColors';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import CardHeader from '@/components/cardHeader';

const impressionsGraphConfig = {
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
		labels: ['San Francisco', 'Los Angeles', 'San Diego'],
		legend: {
			show: true,
			position: 'bottom',
			horizontalAlign: 'left',
			formatter(seriesName, opts) {
				return [
					seriesName,
					' - ',
					opts.w.globals.series[opts.seriesIndex].toLocaleString(),
				];
			},
			fontFamily: 'inherit',
			fontSize: 13,
			floating: true,
			offsetY: 90,
			markers: {
				width: 15,
				height: 15,
			},
		},
		tooltip: {
			formatter(value) {
				return (+value).toLocaleString();
			},
		},
		plotOptions: {
			pie: {
				donut: {
					labels: {
						show: true,
						name: {
							fontFamily: 'inherit',
							fontSize: 13,
						},
						value: {
							formatter(value) {
								return (+value).toLocaleString();
							},
						},
						total: {
							show: true,
						},
					},
				},
			},
		},
	},
	series: [9212, 8768, 8355],
};
function MostVisitedCard() {
	return (
		<Card>
			<CardHeader title="Most Visited" size="small" />
			<Box
				component={Chart}
				options={impressionsGraphConfig.options}
				series={impressionsGraphConfig.series}
				type="donut"
				width="100%"
				height="100%"
				mb={12}
				mt={2}
			/>
		</Card>
	);
}

export default MostVisitedCard;
