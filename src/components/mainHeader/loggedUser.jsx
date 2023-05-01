import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
// MUI Stuff
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import ButtonBase from '@mui/material/ButtonBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';

// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';

// assets
import avatar2 from '@/assets/images/avatars/avatar_13.jpg';

// Components
import NotificationsButton from './notificationButton';

function LoggedUser() {
	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<Menu
				elevation={26}
				sx={{
					'& .MuiMenuItem-root': {
						mt: 0.5,
					},
				}}
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuList
					sx={{
						p: 1,
					}}
				>
					<Typography variant="subtitle1" textAlign="center">
						Elizabeth Lumaad Olsen
					</Typography>
					<Typography variant="subtitle2" textAlign="center">
						Executive Director
					</Typography>
					<Divider
						sx={{
							borderColor: 'primary.light',
							my: 1,
						}}
					/>

					<MenuItem onClick={handleClose} to="/profile" component={RouterLink}>
						<ListItemIcon>
							<Person2OutlinedIcon fontSize="small" />
						</ListItemIcon>
						Perfil
					</MenuItem>
					<MenuItem onClick={handleClose} to="/profile/edit" component={RouterLink}>
						<ListItemIcon>
							<ManageAccountsOutlinedIcon fontSize="small" />
						</ListItemIcon>
						Editar Perfil
					</MenuItem>
					<MenuItem onClick={handleClose} component={RouterLink} to="/">
						<ListItemIcon>
							<ExitToAppIcon fontSize="small" />
						</ListItemIcon>
						Cerrar Sesión
					</MenuItem>
				</MenuList>
			</Menu>
			<Stack height="100%" direction="row" flex={1} justifyContent="flex-end" alignItems="center" spacing={1}>
				<NotificationsButton />
				<ButtonBase
					onClick={handleClick}
					variant="outlined"
					sx={{
						height: '100%',
						overflow: 'hidden',
						borderRadius: '25px',
						transition: '.2s',
						px: 1,
						transitionProperty: 'background,color',
						'&:hover': {
							bgcolor: (theme) => alpha(theme.palette.primary.main, 0.06),
						},
						'&:hover .MuiSvgIcon-root': {
							opacity: '1',
							// transform: 'translateX(10px)',
						},
					}}
				>
					<Stack width="100%" direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
						<Avatar
							alt="User Img"
							src={avatar2}
							sx={{
								width: 35,
								height: 35,
								boxShadow: (theme) =>
									`0px 0px 0px 4px ${theme.palette.background.paper} ,0px 0px 0px 5px ${theme.palette.primary.main} `,
							}}
						/>
						<Typography
							variant="body2"
							display={{
								xs: 'none',
								sm: 'inline-block',
							}}
						>
							Elizabeth
						</Typography>
						<ExpandMoreIcon
							fontSize="small"
							sx={{
								transition: '0.2s',
								opacity: '0',
							}}
						/>
					</Stack>
				</ButtonBase>
			</Stack>
		</>
	);
}
export default LoggedUser;
