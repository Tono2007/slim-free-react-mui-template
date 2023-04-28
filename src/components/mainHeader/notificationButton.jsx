import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { alpha } from '@mui/material/styles';

// MUI
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ButtonBase from '@mui/material/ButtonBase';

// Icons
import CloseIcon from '@mui/icons-material/Close';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
// data
import notifications from '@/_mocks/notifications';

function NotificationsButton() {
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = useState(null);

	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const toNotifications = (e) => {
		handleClose();
		navigate('/notifications');
	};

	return (
		<>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'notificaciones menu',
				}}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<Stack
					sx={{
						maxWidth: 400,
						p: 2,
						pb: 0,
					}}
					direction="column"
					spacing={2}
				>
					<Stack direction="row" justifyContent="space-between" flexWrap="wrap">
						<Stack direction="row" alignItems="center" spacing={1} divider={<Divider orientation="vertical" flexItem />}>
							<Typography variant="subtitle1">Notificaciones</Typography>
							<Box
								component="span"
								bgcolor="secondary.main"
								borderRadius="20px"
								fontSize={12}
								px={1}
								py={0.5}
								color="secondary.contrastText"
							>
								3
							</Box>
						</Stack>
						<Button variant="text" color="primary" size="small" sx={{ fontSize: 11 }}>
							Marcar como leidas
						</Button>
						<IconButton
							aria-label="close notifications menu"
							onClick={handleClose}
							size="small"
							color="primary"
							sx={{
								border: 1,
								display: { sm: 'none', xs: 'inline-flex' },
							}}
						>
							<CloseIcon fontSize="inherit" />
						</IconButton>
					</Stack>

					<Divider sx={{ my: 1 }} />

					<Stack direction="column" spacing={1} divider={<Divider flexItem />}>
						{notifications.slice(0, 5).map((notification) => (
							<Notification key={notification.id} notification={notification} />
						))}
					</Stack>
					<Button variant="text" color="primary" size="small" fullWidth onClick={toNotifications}>
						Ver todas las notificaciones
					</Button>
				</Stack>
			</Menu>
			<Tooltip title="Notificaciones">
				<IconButton onClick={handleClick} size="small">
					<Badge color="secondary" overlap="rectangular" variant="dot">
						<NotificationsOutlinedIcon color="primary" fontSize="small" />
					</Badge>
				</IconButton>
			</Tooltip>
		</>
	);
}

function Notification({ notification }) {
	return (
		<ButtonBase
			sx={{
				py: 1,
				px: 2,
				'&:hover': {
					bgcolor: (theme) => alpha(theme.palette.primary.light, 0.1),
				},
				borderLeft: 3,
				borderLeftColor: notification?.checked ? '#d3d3d3' : 'primary.400',
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

				<Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
					<Typography align="left">
						<strong>{notification?.name} </strong>
						{notification?.title}
					</Typography>
					<Typography variant="caption">
						<AccessTimeIcon fontSize="inherit" sx={{ mr: 0.3 }} />
						{notification?.date}
					</Typography>
				</Stack>
			</Stack>
		</ButtonBase>
	);
}

export default NotificationsButton;
