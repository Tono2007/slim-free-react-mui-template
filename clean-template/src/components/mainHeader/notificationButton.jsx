import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

function NotificationsButton() {
	return (
		<Tooltip title="Notificaciones">
			<IconButton size="small">
				<Badge color="secondary" overlap="rectangular" variant="dot">
					<NotificationsOutlinedIcon color="primary" fontSize="small" />
				</Badge>
			</IconButton>
		</Tooltip>
	);
}

export default NotificationsButton;
