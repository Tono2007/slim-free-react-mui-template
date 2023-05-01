import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import PostAddIcon from '@mui/icons-material/PostAdd';
import BarChartIcon from '@mui/icons-material/BarChart';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

import CardHeader from '@/components/cardHeader';

import customersData from '@/_mocks/customers';

const ACTIVITIES_DATA = [
	{
		title: 'Closed a deal!',
		user: customersData.find((product) => product?.id === 6),
	},
	{
		title: 'Just achive daily budget!',
		user: customersData.find((product) => product?.id === 7),
	},
	{
		title: 'Hot!',
		user: customersData.find((product) => product?.id === 8),
	},
	{
		title: 'Just archive monthly budget',
		user: customersData.find((product) => product?.id === 9),
	},
	{
		title: 'Just archive monthly budget',
		user: customersData.find((product) => product?.id === 10),
	},
];

function ActivitiesCard() {
	return (
		<Card
			sx={{
				height: '100%',
			}}
		>
			<CardHeader title="Users Activities" size="small" subtitle="Last activity was 1 hour ago">
				<Button size="small">See All</Button>
			</CardHeader>
			<Stack direction="column" height="100%" py={2}>
				{ACTIVITIES_DATA.map((activity, index) => (
					<ActivityListItem key={index} activity={activity} />
				))}
			</Stack>
		</Card>
	);
}

function ActivityListItem({ activity: { title, user } }) {
	return (
		<Stack
			flexGrow={1}
			direction="row"
			position="relative"
			spacing={2}
			overflow="hidden"
			sx={{
				'&:not(:last-child)::before': {
					content: '""',
					position: 'absolute',
					top: 0,
					left: 18.5,
					height: '100%',
					border: 0,
					borderLeft: 3,
					borderStyle: 'dashed',
					borderColor: (theme) => theme.palette.border,
				},
			}}
		>
			<Avatar
				sx={{
					width: 40,
					height: 40,
				}}
				src={user.avatarImg}
			/>
			<Stack spacing={0.5} pb={2} pt={0}>
				<Typography variant="h5">{user.name}</Typography>
				<Typography variant="body1" color="text.secondary">
					{title}
				</Typography>
			</Stack>
		</Stack>
	);
}

export default ActivitiesCard;
