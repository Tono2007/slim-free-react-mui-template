import { useState } from 'react';

import Chart from 'react-apexcharts';
import getDefaultChartsColors from '@helpers/getDefaultChartsColors';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';

import CardHeader from '@/components/cardHeader';

function SalesOverviewCard() {
	const [viewBy, setViewBy] = useState('month');

	const changeTab = (tabKey) => {
		setViewBy(tabKey);
	};
	return (
		<Card>
			<CardHeader title="Sales Overview" size="small">
				<ButtonGroup
					variant="text"
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
			<Grid container spacing={3}>
				<Grid item xs={12} lg={6} cl={6}>
					<IncomesChart activeView={viewBy} />
				</Grid>
				<Grid item xs={12} lg={6} cl={6}>
					<ExpensesChart activeView={viewBy} />
				</Grid>
			</Grid>
		</Card>
	);
}
function TabButton({ children, tabKey, changeTab, activeView }) {
	return (
		<Button
			onClick={() => changeTab(tabKey)}
			sx={{
				...(activeView === tabKey && {
					outline: (theme) =>
						`2px solid ${theme.palette.primary.main}`,
				}),
			}}
		>
			{children}
		</Button>
	);
}
const randomArray = (length, max) =>
	Array(length)
		.fill()
		.map(() => Math.round(Math.random() * max));

/* const randomArray = (length, max) =>
	Array.from({ length }, () => Math.round(Math.random() * max)); */

const sharedGraphConfig = {
	fill: {
		opacity: 0.6,
		type: 'solid',
	},
	stroke: {
		width: 4,
		curve: 'straight',
	},
	dataLabels: {
		enabled: true,
	},
	yaxis: {
		min: 0,
		max: 20.0,
		tickAmount: 7,
		decimalsInFloat: 1,
	},
	legend: {
		show: true,
		showForSingleSeries: true,
		offsetY: 20,
	},
};

const incomesGraphConfig = {
	options: {
		colors: getDefaultChartsColors(2),
		chart: {
			id: 'incomes',
			group: 'sales',
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false,
			},
			parentHeightOffset: 0,
		},
		...sharedGraphConfig,
	},

	series: {
		day: [
			{
				name: 'Incomes',
				data: randomArray(31, 15),
			},
		],
		week: [
			{
				name: 'Incomes',
				data: randomArray(7, 15),
			},
		],
		month: [
			{
				name: 'Incomes',
				data: randomArray(12, 15),
			},
		],
	},
};
const expensesGraphConfig = {
	options: {
		colors: getDefaultChartsColors(3),
		fill: {
			opacity: 0.6,
			type: 'solid',
		},
		chart: {
			id: 'expenses',
			group: 'sales',
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false,
			},
			parentHeightOffset: 0,
		},
		...sharedGraphConfig,
	},
	series: {
		day: [
			{
				name: 'Expences',
				data: randomArray(31, 15),
			},
		],
		week: [
			{
				name: 'Expences',
				data: randomArray(7, 15),
			},
		],
		month: [
			{
				name: 'Expences',
				data: randomArray(12, 15),
			},
		],
	},
};

const xaxisCategories = {
	day: {
		type: 'category',
		categories: [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
			20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
		],
	},
	week: {
		type: 'category',
		categories: [1, 2, 3, 4, 5, 6, 7],
	},
	month: {
		type: 'category',
		categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
	},
};

function IncomesChart({ activeView }) {
	return (
		<Box
			component={Chart}
			options={{
				...incomesGraphConfig.options,
				// xaxis: xaxisCategories[activeView],
			}}
			series={incomesGraphConfig.series?.[activeView]}
			type="area"
			width="100%"
		/>
	);
}

function ExpensesChart({ activeView }) {
	return (
		<Box
			component={Chart}
			options={{
				...expensesGraphConfig.options,
				// xaxis: xaxisCategories[activeView],
			}}
			series={expensesGraphConfig.series?.[activeView]}
			type="area"
			width="100%"
		/>
	);
}

export default SalesOverviewCard;
