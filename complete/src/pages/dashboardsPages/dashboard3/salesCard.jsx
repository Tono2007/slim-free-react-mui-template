import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

import Chart from 'react-apexcharts';
import getDefaultChartsColors from '@helpers/getDefaultChartsColors';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
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
				<ButtonGroup variant="text" size="small" aria-label="temporaly button group">
					<TabButton changeTab={changeTab} tabKey="day" activeView={viewBy}>
						Day
					</TabButton>
					<TabButton changeTab={changeTab} tabKey="week" activeView={viewBy}>
						Week
					</TabButton>
					<TabButton changeTab={changeTab} tabKey="month" activeView={viewBy}>
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
					outline: (theme) => `2px solid ${theme.palette.primary.main}`,
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

const getIncomesGraphConfig = (config) => ({
	options: {
		colors: getDefaultChartsColors(2),
		chart: {
			...(config?.mode === 'dark' && { foreColor: '#fff' }),
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
		...(config?.mode === 'dark' && {
			tooltip: {
				theme: 'dark',
			},
		}),
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
});

const getExpensesGraphConfig = (config) => ({
	options: {
		colors: getDefaultChartsColors(3),
		fill: {
			opacity: 0.6,
			type: 'solid',
		},
		...(config?.mode === 'dark' && {
			tooltip: {
				theme: 'dark',
			},
		}),
		chart: {
			...(config?.mode === 'dark' && { foreColor: '#fff' }),
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
});
function IncomesChart({ activeView }) {
	const theme = useTheme();
	return (
		<Box
			component={Chart}
			options={getIncomesGraphConfig({ mode: theme.palette.mode })?.options}
			series={getIncomesGraphConfig()?.series?.[activeView]}
			type="area"
			width="100%"
		/>
	);
}

function ExpensesChart({ activeView }) {
	const theme = useTheme();
	return (
		<Box
			component={Chart}
			options={getExpensesGraphConfig({ mode: theme.palette.mode })?.options}
			series={getExpensesGraphConfig()?.series?.[activeView]}
			type="area"
			width="100%"
		/>
	);
}

export default SalesOverviewCard;
