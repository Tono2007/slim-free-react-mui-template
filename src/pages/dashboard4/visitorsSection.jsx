import { useState } from 'react';
import useAutoCounter from '@hooks/useAutoCounter';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

import {
	TransitionGroup,
	Transition as ReactTransition,
} from 'react-transition-group';
import { getDefaultTransitionStyles } from '@helpers/getTransitionStyles';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import CardHeader from '@/components/cardHeader';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';

import MoreVertIcon from '@mui/icons-material/MoreVert';

const geoUrl =
	'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';
const TIMEOUT = 300;
const transitionStyles = getDefaultTransitionStyles(TIMEOUT);

function VisitorsSection() {
	return (
		<>
			<Grid
				container
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
				<Grid item xs={12} sm={6} md={4}>
					<VisitorsOpratingCard />
				</Grid>
				<Grid item xs={12} sm={6} md={8} sx={{ p: 3 }}>
					<CardHeader title="Visitor's locations">
						<IconButton size="small">
							<MoreVertIcon />
						</IconButton>
					</CardHeader>
					<VisitorsLocationsCard />
				</Grid>
			</Grid>
			<Grid
				container
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
				<Grid item xs={12} sm={6} md={4}>
					<VisitorsOpratingCard />
				</Grid>
				<Grid item xs={12} sm={6} md={8}>
					<iframe
						title="w map"
						src="https://www.google.com/maps/d/embed?mid=15vUnZLdccDL0ZgeCevP2UOuxm2ajBS8&ehbc=2E312F&amp;z=2"
						width="100%"
						height="600"
					/>
				</Grid>
			</Grid>
		</>
	);
}

function VisitorsLocationsCard() {
	return (
		<ComposableMap>
			<Geographies geography={geoUrl}>
				{({ geographies }) =>
					geographies.map((geo) => (
						<Geography key={geo.rsmKey} geography={geo} />
					))
				}
			</Geographies>
		</ComposableMap>
	);
}

/* const VISITORS_OPERATING_DATA = [
	{
		os: 'macOS',
		progress: 30,
		color: 'warning',
		visitors: {
			day: 30,
			week: 35,
			month: 40,
		},
	},
	{ os: 'Windows', progress: 50, color: 'success' },
	{ os: 'Linux', progress: 10, color: 'error' },
	{ os: 'Ubuntu', progress: 10, color: 'error' },
]; */

const VISITORS_DATA = {
	day: {
		count: 963,
		osData: [
			{ os: 'macOS', progress: 30, color: 'warning' },
			{ os: 'Windows', progress: 50, color: 'success' },
			{ os: 'Linux', progress: 10, color: 'error' },
			{ os: 'Ubuntu', progress: 10, color: 'error' },
		],
	},
	week: {
		count: 8677,
		osData: [
			{ os: 'macOS', progress: 35, color: 'warning' },
			{ os: 'Windows', progress: 60, color: 'success' },
			{ os: 'Linux', progress: 15, color: 'error' },
			{ os: 'Ubuntu', progress: 10, color: 'error' },
		],
	},
	month: {
		count: 25766,
		osData: [
			{ os: 'macOS', progress: 25, color: 'warning' },
			{ os: 'Windows', progress: 70, color: 'success' },
			{ os: 'Linux', progress: 20, color: 'warning' },
			{ os: 'Ubuntu', progress: 10, color: 'error' },
		],
	},
};
function VisitorsOpratingCard() {
	const [viewBy, setViewBy] = useState('day');

	const changeTab = (tabKey) => {
		setViewBy(tabKey);
	};
	return (
		<Stack direction="column" spacing={3} p={3} justifyContent="center">
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
					Today
				</TabButton>
				<TabButton
					changeTab={changeTab}
					tabKey="week"
					activeView={viewBy}
				>
					This Week
				</TabButton>
				<TabButton
					changeTab={changeTab}
					tabKey="month"
					activeView={viewBy}
				>
					This Month
				</TabButton>
			</ButtonGroup>
			<TransitionGroup style={{ position: 'relative' }}>
				<ReactTransition
					key={viewBy}
					timeout={{
						enter: TIMEOUT,
						exit: TIMEOUT,
					}}
				>
					{(status) => (
						<Typography
							variant="body1"
							fontSize={100}
							fontWeight={300}
							style={{
								...transitionStyles[status],
							}}
						>
							{VISITORS_DATA?.[viewBy]?.count.toLocaleString() ||
								0}
						</Typography>
					)}
				</ReactTransition>
			</TransitionGroup>
			<Typography variant="subtitle2" textTransform="uppercase">
				Online visitors on site
			</Typography>
			<Divider />
			<Typography variant="subtitle1" textTransform="uppercase">
				Visitors operating system
			</Typography>
			<Stack spacing={3} mt={2}>
				{VISITORS_DATA?.[viewBy]?.osData.map((sale, index) => (
					<SaleProgress key={`${viewBy}${index}`} saleData={sale} />
				))}
			</Stack>
		</Stack>
	);
}
function TabButton({ children, tabKey, changeTab, activeView }) {
	return (
		<Button
			fullWidth
			size="small"
			onClick={() => changeTab(tabKey)}
			sx={{
				...(activeView === tabKey && {
					outline: (theme) =>
						`2px solid ${theme.palette.primary.main}`,
				}),
				...(activeView !== tabKey && {
					color: (theme) => theme.palette.text.secondary,
				}),
			}}
		>
			{children}
		</Button>
	);
}
function SaleProgress({ saleData }) {
	const { progress, color, os } = saleData;
	const counter = useAutoCounter({
		limiter: progress,
		increment: 1,
		interval: 10,
	});
	return (
		<div>
			<Typography variant="body2" color="text.secondary" gutterBottom>
				{os} ({counter}%)
			</Typography>
			<LinearProgress
				variant="determinate"
				color={color}
				value={counter}
				sx={{ height: 5 }}
			/>
		</div>
	);
}

export default VisitorsSection;
