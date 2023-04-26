import { useState } from 'react';

import Chart from 'react-apexcharts';
import getDefaultChartsColors from '@helpers/getDefaultChartsColors';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import CardHeader from '@/components/cardHeader';

function CustomersOverviewCard() {
	const [viewBy, setViewBy] = useState('day');

	const changeTab = (tabKey) => {
		setViewBy(tabKey);
	};
	return (
		<Card>
			<CardHeader title="Customer Overview" size="small">
				<ButtonGroup
					variant="outlined"
					size="small"
					aria-label="temporaly button group"
				>
					<TabButton
						changeTab={changeTab}
						tabKey="day"
						activeView={viewBy}
					>
						Day
					</TabButton>
					<TabButton
						changeTab={changeTab}
						tabKey="week"
						activeView={viewBy}
					>
						Week
					</TabButton>
					<TabButton
						changeTab={changeTab}
						tabKey="month"
						activeView={viewBy}
					>
						Month
					</TabButton>
				</ButtonGroup>
			</CardHeader>
			<CustomersChart activeView={viewBy} />
		</Card>
	);
}
function TabButton({ children, tabKey, changeTab, activeView }) {
	return (
		<Button
			onClick={() => changeTab(tabKey)}
			disableElevation
			variant={activeView === tabKey ? 'contained' : 'outlined'}
		>
			{children}
		</Button>
	);
}

const customerGraphConfig = {
	options: {
		colors: getDefaultChartsColors(1),
		fill: {
			opacity: 0.6,
			type: 'solid',
		},
		chart: {
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false,
			},
			parentHeightOffset: 0,
		},
		stroke: {
			width: 0,
			curve: 'straight',
		},
		dataLabels: {
			enabled: false,
		},
		yaxis: {
			seriesName: 'customers cuantity',
			min: 0,
			max: 15.0,
			tickAmount: 7,
			decimalsInFloat: 1,
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
		legend: {
			show: true,
			position: 'bottom',
			floating: true,
			offsetY: 20,
		},
	},
	series: {
		day: [
			{
				name: 'New Customer',
				data: [2.0, 3.0, 6.0, 5.0, 7.0, 8.0, 10.0],
			},
			{
				name: 'Returning Customer',
				data: [1.0, 2.0, 5.0, 3.0, 5.0, 6.0, 9.0],
			},
		],
		week: [
			{
				name: 'New Customer',
				data: [5.0, 4.0, 9.0, 6.0, 8.0, 11.0, 7.0],
			},
			{
				name: 'Returning Customer',
				data: [4.0, 3.0, 7.0, 4.0, 6.0, 9.0, 7.0],
			},
		],
		month: [
			{
				name: 'New Customer',
				data: [5.0, 6.0, 3.0, 5.0, 6.0, 11.0, 4.0],
			},
			{
				name: 'Returning Customer',
				data: [4.0, 5.0, 2.0, 4.0, 5.0, 7.0, 3.0],
			},
		],
	},
};
function CustomersChart({ activeView }) {
	return (
		<Box
			component={Chart}
			options={customerGraphConfig.options}
			series={customerGraphConfig.series?.[activeView]}
			type="area"
			width="100%"
			ml={-1}
		/>
	);
}

export default CustomersOverviewCard;
