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
					<Grid item xs={12} sm={12} md={12}>
						<TextField
							required
							autoFocus
							color="primary"
							size="small"
							name="companyName"
							fullWidth
							label="Nombre Organización"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={12}>
						<TextField
							required
							color="primary"
							size="small"
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
							size="small"
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<TextField
							required
							color="primary"
							size="small"
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
							size="small"
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
							size="small"
							getOptionLabel={(option) =>
								option.descripcion_objeto
							}
							options={countryList.sort()}
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
										src={`https:// countryflagsapi.com/png/${option.nombre_objeto.toLowerCase()}`}
										srcSet={`https:// countryflagsapi.com/png/${option.nombre_objeto.toLowerCase()}`}
										alt=""
									/>
									{option.descripcion_objeto} (
									{option.nombre_objeto})
								</Box>
							)}
						/>
						{/*  <TextField
                required
                fullWidth
                size="small"
                select
                name="country"
                value={formValues.country}
                error={error.error}
                onChange={handleChange}
                label="Pais"
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                <option aria-label="None" value="" disabled defaultValue />
                {countryList.sort().map((option) => (
                  <option key={option.nombre_objeto} value={option.objeto_id}>
                    {option.descripcion_objeto}
                  </option>
                ))}
              </TextField> */}
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<TextField
							fullWidth
							size="small"
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
							size="small"
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
							size="small"
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
							size="small"
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
							size="small"
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
							size="small"
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

export default PersonalDataTab;
