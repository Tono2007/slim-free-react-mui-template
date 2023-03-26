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
import avatar2 from '@/assets/images/avatar2.jpg';

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
					'& .MuiPaper-root': { border: 1, borderColor: 'border' },
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
				<MenuList sx={{ minWidth: 200, p: 1 }}>
					<Typography variant="subtitle1" textAlign="center">
						Katherine Lumaad
					</Typography>
					<Typography variant="subtitle2" textAlign="center">
						Executive Director
					</Typography>
					<Divider sx={{ borderColor: 'primary.light', my: 1 }} />

					<MenuItem
						onClick={handleClose}
						to="/profile"
						component={RouterLink}
					>
						<ListItemIcon>
							<Person2OutlinedIcon fontSize="small" />
						</ListItemIcon>
						Perfil
					</MenuItem>
					<MenuItem
						onClick={handleClose}
						to="/profile/edit"
						component={RouterLink}
					>
						<ListItemIcon>
							<ManageAccountsOutlinedIcon fontSize="small" />
						</ListItemIcon>
						Editar Perfil
					</MenuItem>
					<MenuItem
						onClick={handleClose}
						component={RouterLink}
						to="/"
					>
						<ListItemIcon>
							<ExitToAppIcon fontSize="small" />
						</ListItemIcon>
						Cerrar Sesión
					</MenuItem>
				</MenuList>
			</Menu>
			<ButtonBase
				onClick={handleClick}
				variant="outlined"
				sx={{
					pr: 1,
					borderRadius: '20px',
					transition: '.2s',
					transitionProperty: 'background,color ',
					'&:hover': {
						bgcolor: (theme) =>
							alpha(theme.palette.primary[400], 0.8),
					},
					'&:hover .MuiSvgIcon-root': {
						opacity: '1',
						ml: 2,
					},
				}}
			>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					spacing={1}
				>
					<Avatar
						alt="User Img"
						src={avatar2}
						sx={{
							mr: 0.5,
							width: 40,
							height: 40,
							boxShadow: (theme) =>
								`0px 0px 0px 4px ${theme.palette.primary.main} ,0px 0px 0px 5px ${theme.palette.background.paper}`,
						}}
					/>
					<Typography
						color="primary.contrastText"
						variant="body2"
						display={{
							xs: 'none',
							sm: 'inline-block',
						}}
					>
						Katherine Lumaad
					</Typography>
					<ExpandMoreIcon
						fontSize="small"
						sx={{
							transition: '0.5s',
							opacity: '0',
							ml: 0,
							color: 'primary.contrastText',
						}}
					/>
				</Stack>
			</ButtonBase>
		</>
	);
}
export default LoggedUser;
