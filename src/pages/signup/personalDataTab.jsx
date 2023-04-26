import { useState, useEffect } from 'react';
import { useSignupData } from './signupContext';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

// Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// MUI
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';

// Icons
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

import countryList from '@/_mocks/countries';

// Components
import SignupButtonsContainer from './signupButtonsContainer';

// api

const usersConfig = {
	company: 'Organización',
	startup: 'Startup',
	investmen: 'Fondo de Inversión',
};
const hearAboutUs = ['Github', 'Facebook', 'LinkedIn', 'Web', 'Otro'];
const SexList = ['Masculino', 'Femenino'];

function PersonalDataTab() {
	const { setActiveStep, userType } = useSignupData();
	const [ShowPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => {
		setShowPassword(!ShowPassword);
	};
	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		handleNext();
	};
	return (
		<Stack
			direction="column"
			justifyContent="flex-start"
			alignContent="flex-start"
			pb={3}
		>
			<Typography variant="h1" fontWeight="bold">
				{userType}
			</Typography>
			<Typography variant="body2" color="textSecondary" mt={1}>
				Llena el formulario con tus datos de usuario
			</Typography>
			<form onSubmit={handleSubmit}>
				<Grid container spacing={2} mt={2} justifyContent="center">
					<Grid
						item
						xs={12}
						sm={12}
						md={12}
						sx={{ position: 'relative' }}
					>
						<TextField
							required
							autoFocus
							color="primary"
							size="medium"
							name="companyName"
							fullWidth
							label="Nombre Organización"
							variant="outlined"
						/>
						<HelperPopover />
					</Grid>
					<Grid item xs={12} sm={6} md={12}>
						<TextField
							required
							color="primary"
							size="medium"
							name="userName"
							fullWidth
							label="Nombre Usuario"
							helperText="Nombre de la cuenta para iniciar sesión"
							variant="outlined"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<AccountCircleIcon />
									</InputAdornment>
								),
							}}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={12}>
						<TextField
							required
							name="firstName"
							label="Nombre(s)"
							fullWidth
							variant="outlined"
							color="primary"
							size="medium"
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<TextField
							required
							color="primary"
							size="medium"
							name="lastName"
							label="Apellido paterno"
							fullWidth
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<TextField
							required
							color="primary"
							size="medium"
							name="lastName2"
							label="Apellido materno"
							fullWidth
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<Autocomplete
							selectOnFocus
							clearOnBlur
							handleHomeEndKeys
							size="medium"
							getOptionLabel={(option) => option?.name}
							options={countryList}
							renderInput={(params) => (
								<TextField {...params} label="Pais" fullWidth />
							)}
							renderOption={(props, option) => (
								<Box
									component="li"
									sx={{
										'& > img': { mr: 2, flexShrink: 0 },
									}}
									{...props}
								>
									<img
										loading="lazy"
										width="20"
										src={`https://flagcdn.com/w20/${option?.code.toLowerCase()}.png`}
										srcSet={`https://flagcdn.com/w40/${option?.code.toLowerCase()}.png 2x`}
										alt=""
									/>
									{option?.name} ({option?.code})
								</Box>
							)}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<TextField
							fullWidth
							size="medium"
							select
							name="sex"
							label="Sexo"
							SelectProps={{
								native: true,
							}}
							variant="outlined"
						>
							<option aria-label="None" value="" defaultValue />
							{SexList.map((option) => (
								<option
									key={option}
									value={option.toUpperCase()}
								>
									{option}
								</option>
							))}
						</TextField>
					</Grid>
					<Grid item xs={12} sm={6} md={12}>
						<TextField
							required
							color="primary"
							size="medium"
							name="email"
							fullWidth
							label="Correo"
							variant="outlined"
							type="email"
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={12}>
						<TextField
							required
							color="primary"
							size="medium"
							name="emailConfirm"
							fullWidth
							label="Confirma tu correo"
							variant="outlined"
							type="email"
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<TextField
							required
							color="primary"
							size="medium"
							name="password"
							fullWidth
							label="Contraseña"
							variant="outlined"
							type={ShowPassword ? 'text' : 'password'}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											onClick={handleClickShowPassword}
											edge="end"
										>
											{ShowPassword ? (
												<VisibilityOff />
											) : (
												<Visibility />
											)}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<TextField
							required
							color="primary"
							size="medium"
							name="passwordConfirm"
							fullWidth
							label="Confirmar contraseña"
							variant="outlined"
							type={ShowPassword ? 'text' : 'password'}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											onClick={handleClickShowPassword}
											edge="end"
										>
											{ShowPassword ? (
												<VisibilityOff />
											) : (
												<Visibility />
											)}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={12}>
						<TextField
							required
							select
							size="medium"
							name="hearAboutUs"
							fullWidth
							label="¿Como te enteraste?"
							SelectProps={{
								native: true,
							}}
							variant="outlined"
						>
							<option
								aria-label="None"
								value=""
								disabled
								defaultValue
							/>
							{hearAboutUs.map((option) => (
								<option
									key={option}
									value={option.toUpperCase()}
								>
									{option}
								</option>
							))}
						</TextField>
						<button type="submit" style={{ display: 'none' }}>
							dsd
						</button>
					</Grid>
				</Grid>
			</form>
			<SignupButtonsContainer
				handleNext={handleSubmit}
				handleBack={handleBack}
			/>
		</Stack>
	);
}

function HelperPopover() {
	const [anchorEl, setAnchorEl] = useState(null);

	const handlePopoverOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	return (
		<div
			style={{
				position: 'absolute',
				top: 7,
				right: -9,
			}}
		>
			<Avatar
				sx={{ bgcolor: 'primary.main', width: 20, height: 20 }}
				aria-owns={open ? 'mouse-over-popover' : undefined}
				aria-haspopup="true"
				onMouseEnter={handlePopoverOpen}
				onMouseLeave={handlePopoverClose}
			>
				<QuestionMarkIcon
					color="background.paper"
					fontSize="small"
					sx={{ fontSize: 15 }}
				/>
			</Avatar>

			<Popover
				id="mouse-over-popover"
				sx={{
					pointerEvents: 'none',
				}}
				open={open}
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				onClose={handlePopoverClose}
				disableRestoreFocus
			>
				<Stack
					spacing={1}
					/* borderTop={3}
					borderColor="info.main" */
					p={2}
				>
					<Typography variant="subtitle1">
						Cuadro de ayuda popover
					</Typography>
					<Divider />
					{[1, 2, 3, 4, 5].map((model, index) => (
						<Typography key={index}>
							• Ayuda {model} -{' '}
							<Typography variant="caption" color="textSecondary">
								descripcion {model}
							</Typography>
						</Typography>
					))}
				</Stack>
			</Popover>
		</div>
	);
}

export default PersonalDataTab;
