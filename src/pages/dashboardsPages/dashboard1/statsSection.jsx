import useAutoCounter from '@hooks/useAutoCounter';

import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
// MUI
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

const STATS_DATA = [
	{
		id: 1,
		color: 'secondary.main',
		name: 'Impressions',
		total: 822490,
		Icon: DonutSmallOutlinedIcon,
	},
	{
		id: 2,
		color: 'cuaternary.main',
		name: 'Page visits',
		total: 465183,
		Icon: QueryStatsOutlinedIcon,
	},
	{
		id: 3,
		color: 'tertiary.400',
		name: 'Comission',
		total: 781524,
		Icon: AssessmentOutlinedIcon,
	},
	{
		id: 4,
		color: 'success.light',
		name: 'Earnings',
		total: 369657,
		Icon: MonetizationOnOutlinedIcon,
	},
];

function StatsSection() {
	return (
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
			{STATS_DATA.map((stat) => (
				<Grid item xs={12} sm={6} md={3} key={stat.id}>
					<StatSection statData={stat} />
				</Grid>
			))}
		</Grid>
	);
}

function StatSection({ statData }) {
	const { name, total, color, Icon } = statData;
	const counter = useAutoCounter({
		limiter: total,
		increment: 5000,
		interval: 10,
	});

	return (
		<Stack p={3} direction="row" spacing={3} alignItems="center">
			<Icon sx={{ fontSize: 60, color }} color="disabled" />
			<span>
				<Typography color={color} variant="h5" textTransform="uppercase">
					{name}
				</Typography>
				<Typography fontSize={30}>{counter.toLocaleString()}</Typography>
			</span>
		</Stack>
	);
}

export default StatsSection;
