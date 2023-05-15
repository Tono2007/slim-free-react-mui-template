import { alpha } from '@mui/material/styles';
import calcHeaderHeight from '@helpers/layoutHeight';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';

// Icons
import CloseIcon from '@mui/icons-material/Close';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import CardHeader from '@/components/cardHeader';

import notifications from '@/_mocks/notifications';

function NotificationsPage() {
	return (
		<>
			<Box
				position="fixed"
				left={0}
				right={0}
				top={0}
				bgcolor="primary.main"
				width="100%"
				height="40vh"
				zIndex={-1}
			/>
			<Container sx={{ my: '10vh' }} maxWidth="sm">
				<NotificationsList />
			</Container>
		</>
	);
}

function NotificationsList() {
	return (
		<Card sx={{ position: 'relative' }} elevation={20} hover={false}>
			<CardHeader title="Notifications">
				<Stack>
					<Typography>
						<Box
							width={25}
							height={25}
							color="primary.contrastText"
							bgcolor="primary.main"
							borderRadius="50%"
							display="inline-flex"
							justifyContent="center"
							alignItems="center"
							mr={1}
						>
							18
						</Box>
						Notifications
					</Typography>
					<Button size="small">Mark all as read</Button>
				</Stack>
			</CardHeader>

			<Stack direction="column" spacing={1} divider={<Divider flexItem />}>
				{notifications.map((notification) => (
					<Notification key={notification.id} notification={notification} />
				))}
			</Stack>
		</Card>
	);
}

function Notification({ notification }) {
	return (
		<ButtonBase
			sx={{
				py: 1,
				pl: 2,
				borderLeft: 3,
				borderLeftColor: notification?.checked ? '#d3d3d3' : 'primary.400',
				bgcolor: (theme) => (notification?.checked ? 'transparent' : alpha(theme.palette.primary.light, 0.2)),
			}}
		>
			<Stack width="100%" direction="row" spacing={2} alignItems="center" justifyContent="flex-start">
				<Avatar
					alt="Perfil"
					/* src={`https://picsum.photos/200/300?random=${Math.random()}`} */
					src={notification?.avatar}
					sx={{
						width: 50,
						height: 50,
						boxShadow: 2,
					}}
				/>

				<Stack direction="column" justifyContent="flex-start" alignItems="flex-start" flexGrow={1}>
					<Typography align="left">
						<strong>{notification?.name} </strong>
						{notification?.title}
					</Typography>
					<Typography variant="caption">
						<AccessTimeIcon
							fontSize="inherit"
							sx={{
								mr: 0.3,
							}}
						/>
						{notification?.date}
					</Typography>
				</Stack>
				<IconButton>
					<MoreVertIcon />
				</IconButton>
			</Stack>
		</ButtonBase>
	);
}

export default NotificationsPage;
