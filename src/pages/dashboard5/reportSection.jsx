import Chart from 'react-apexcharts';
import getDefaultChartsColors from '@helpers/getDefaultChartsColors';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Rating from '@mui/material/Rating';

import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Inventory2Icon from '@mui/icons-material/Inventory2';

import CardHeader from '@/components/cardHeader';

const REPORTS_DATA = [
	{
		total: 420,
		type: 'employee',
		Icon: AccessibilityNewIcon,
		series: [
			{ name: 'Female', percentage: 66, color: 'cuaternary' },
			{ name: 'Male', percentage: 34, color: 'error' },
		],
	},
	{
		total: 55,
		type: 'products',
		Icon: Inventory2Icon,
		series: [
			{ name: 'Digital products', percentage: 85, color: 'warning' },
			{ name: 'Non-digital products', percentage: 15, color: 'success' },
		],
	},
	{
		total: 30,
		type: 'franchise',
		Icon: LocationOnIcon,
		series: [
			{ name: 'Local', percentage: 75, color: 'tertiary' },
			{ name: 'International', percentage: 25, color: 'secondary' },
		],
	},
];

function ReportSection() {
	return (
		<section>
			<Header />
			<Grid
				container
				columns={13}
				sx={{
					bgcolor: 'background.paper',
					boxShadow: 26,
					'--Grid-borderWidth': '1px',
					borderTop: 'var(--Grid-borderWidth) solid',
					borderLeft: 'var(--Grid-borderWidth) solid',
					borderColor: 'border',
					'& > div': {
						borderRight: 'var(--Grid-borderWidth) solid',
						borderBottom: 'var(--Grid-borderWidth) solid',
						borderColor: 'border',
					},
				}}
			>
				{REPORTS_DATA.map((report, i) => (
					<Grid item xs={12} sm={6} md={3} key={i}>
						<ReportCard report={report} />
					</Grid>
				))}
				<Grid item xs={12} sm={6} md={4}>
					<RevenueCard />
				</Grid>
			</Grid>
		</section>
	);
}

function ReportCard({ report }) {
	const { total, type, Icon, series } = report;
	return (
		<Stack
			direction="column"
			height="100%"
			spacing={2}
			p={3}
			justifyContent="center"
			alignItems="center"
		>
			<Typography variant="subtitle1" fontSize={65} lineHeight={1}>
				{total}
			</Typography>
			<Typography
				variant="subtitle2"
				textTransform="uppercase"
				color="text.tertiary"
				pb={3}
			>
				Total {type}
			</Typography>
			<Rating
				name="read-only"
				value={Math.floor(Math.random() * (8 - 1) + 1)}
				readOnly
				max={8}
				size="medium"
				icon={<Icon fontSize="inherit" color="action" />}
				emptyIcon={<Icon fontSize="inherit" color="disabled" />}
			/>
			{series.map(({ percentage, name, color }, i) => (
				<div style={{ width: '100%' }} key={i}>
					<Typography
						variant="body2"
						color="text.secondary"
						gutterBottom
					>
						{name} {percentage}%
					</Typography>
					<LinearProgress
						variant="determinate"
						color={color}
						value={percentage}
						sx={{
							height: 5,
							backgroundColor: 'background.default',
						}}
					/>
				</div>
			))}
		</Stack>
	);
}

const revenueGraphConfig = {
	options: {
		// colors: getDefaultChartsColors(3),
		fill: {
			opacity: 0,
			type: 'solid',
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
			width: 2,
			colors: getDefaultChartsColors(3),
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
		yaxis: { show: false },
	},
	series: [
		{
			name: 'series-1',
			data: [5, 7, 10, 11, 12, 10, 9, 7, 6, 8, 9, 10, 7, 10],
		},
	],
};
function RevenueCard() {
	return (
		<Stack direction="column" spacing={1} p={3}>
			<Typography variant="h5" fontSize={20}>
				Monthly Revenue
			</Typography>
			<Typography variant="body2" color="text.secondary">
				Monthly Revenue
			</Typography>
			<Typography variant="subtitle1" fontSize={35}>
				$32,500
				<Typography variant="caption" color="success.light">
					1.4% up
				</Typography>
			</Typography>
			<Chart
				options={revenueGraphConfig.options}
				series={revenueGraphConfig.series}
				type="area"
				width="100%"
				height="30%"
			/>
			<Typography variant="body1" color="text.secondary" align="center">
				Last month: &nbsp;
				<Typography variant="body2" component="span">
					$79,554
				</Typography>
			</Typography>
		</Stack>
	);
}

function Header() {
	return (
		<CardHeader
			size="large"
			title="Overall Report Summary"
			subtitle={
				<>
					<CalendarMonthOutlinedIcon fontSize="small" /> January 01,
					2023 - January 31, 2023
				</>
			}
		>
			<Stack direction="row" alignItems="center" spacing={1}>
				<Button
					variant="contained"
					size="medium"
					color="primary"
					startIcon={<AccessTimeOutlinedIcon />}
				>
					Activity logs
				</Button>
				<Button
					variant="contained"
					size="medium"
					color="primary"
					startIcon={<SettingsOutlinedIcon />}
				>
					Edit Settings
				</Button>
			</Stack>
		</CardHeader>
	);
}

export default ReportSection;
