import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

import Chart from 'react-apexcharts';
import getDefaultChartsColors from '@helpers/getDefaultChartsColors';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import CardHeader from '@/components/cardHeader';

function SalesOverviewCard() {
	const [viewBy, setViewBy] = useState('month');

	const changeTab = (tabKey) => {
		setViewBy(tabKey);
	};
	return (
		<Card>
			<CardHeader title="Sales Overview" size="small">
				<Stack direction="row" alignItems="center" spacing={0}>
					{['day', 'week', 'month'].map((tab, i) => (
						<Button
							key={i}
							size="small"
							onClick={() => setViewBy(tab)}
							variant={viewBy === tab ? 'outlined' : 'text'}
							sx={{
								textTransform: 'capitalize',
								color: viewBy === tab ? 'primary.main' : 'text.secondary',
							}}
						>
							{tab}
						</Button>
					))}
				</Stack>
				{/* <ButtonGroup
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
						tabKey="Month"
						activeView={viewBy}
					>
						Month
					</TabButton>
				</ButtonGroup> */}
			</CardHeader>
			<CustomersChart activeView={viewBy} />
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

function getCustomerGraphConfig(config) {
	return {
		options: {
			colors: getDefaultChartsColors(3),
			chart: {
				...(config?.mode === 'dark' && { foreColor: '#fff' }),
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
			dataLabels: {
				enabled: false,
			},

			grid: {
				row: {
					colors: [config?.mode === 'dark' ? '#0008' : '#0001', 'transparent'],
					opacity: 0.5,
				},
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
			xaxis: {
				categories: [1, 2, 3, 4, 5, 6, 7, 8],
				labels: {
					formatter(val) {
						return `${val}°`;
					},
				},
			},
		},
		series: {
			day: [
				{
					name: 'Incomes',
					data: [2.0, 3.0, 6.0, 5.0, 7.0, 8.0, 10.0],
				},
				{
					name: 'Expenses',
					data: [1.0, 2.0, 5.0, 3.0, 5.0, 6.0, 9.0],
				},
			],
			week: [
				{
					name: 'Incomes',
					data: [5.0, 4.0, 9.0, 6.0, 8.0, 11.0, 7.0],
				},
				{
					name: 'Expenses',
					data: [4.0, 3.0, 7.0, 4.0, 6.0, 9.0, 7.0],
				},
			],
			month: [
				{
					name: 'Incomes',
					data: [5.0, 6.0, 3.0, 5.0, 6.0, 11.0, 4.0, 6.7],
				},
				{
					name: 'Expenses',
					data: [4.0, 5.0, 2.0, 4.0, 5.0, 7.0, 3.0, 2.3],
				},
			],
		},
	};
}
function CustomersChart({ activeView }) {
	const theme = useTheme();
	return (
		<Box
			component={Chart}
			options={getCustomerGraphConfig({ mode: theme.palette.mode })?.options}
			series={getCustomerGraphConfig()?.series?.[activeView]}
			type="bar"
			width="100%"
			ml={-1}
		/>
	);
}

export default SalesOverviewCard;
