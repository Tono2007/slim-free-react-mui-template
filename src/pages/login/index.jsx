import { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
// MUI
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
// Icons
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';

// assets
import logo from '@/assets/images/logo/png/Color_logo_nobg.png';
import Google from '@/assets/icons/social-google.svg';

function LoginPage() {
	return (
		<Card
			elevation={20}
			sx={{
				display: 'block',
				width: {
					xs: '95%',
					sm: '450px ',
					md: '50%',
					lg: '30%',
				},
				border: 0,
				px: 3,
				py: 2,
			}}
		>
			<Stack direction="column" spacing={2}>
				<Box
					component="img"
					src={logo}
					width="90%"
					mx="auto"
					alt="slim logo"
				/>
				<div>
					<Typography variant="h1">¡Bienvenido!</Typography>
					<Typography variant="body2" color="textSecondary">
						Inicia sesión para poder continuar.
					</Typography>
				</div>
				<Button
					disableElevation
					fullWidth
					size="small"
					variant="outlined"
					sx={{
						color: 'grey.700',
						backgroundColor: (theme) => theme.palette.grey[50],
						borderColor: (theme) => theme.palette.grey[100],
					}}
					to="/home"
					component={RouterLink}
				>
					<Box
						sx={{ mr: { xs: 1, sm: 2 }, mt: 0 }}
						width={16}
						height={16}
						component="img"
						src={Google}
						alt="google"
					/>
					Ingresar con Google
				</Button>
				<Divider>
					<Chip label="OR" variant="outlined" size="small" />
				</Divider>

				<Typography variant="body2" color="textSecondary">
					Ingresa con tu usuario o correo de registro.
				</Typography>
				<LoginForm />

				<Button
					variant="outlined"
					fullWidth
					color="primary"
					to="/signup"
					size="small"
					component={RouterLink}
				>
					Registrarse
				</Button>
				{/* <Typography>
					¿No tienes cuenta?{' '}
					<Link to="/signup" variant="body2" component={RouterLink}>
					Registrate ahora
					</Link>
				</Typography> */}
				<Divider sx={{ my: 0 }} />
				<Link
					textAlign="center"
					to="/resetPassword"
					variant="body2"
					component={RouterLink}
					color="tertiary.main"
				>
					¿Has olvidado tu contraseña?
				</Link>
			</Stack>
		</Card>
	);
}

function LoginForm() {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState({ error: false, message: '' });
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('submit');
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			navigate('/');
		}, 3000);
	};
	return (
		<Box onSubmit={handleSubmit} component="form">
			<TextField
				size="small"
				color="primary"
				error={error.error}
				autoFocus
				name="nickname"
				label="Usuario"
				margin="normal"
				variant="outlined"
				fullWidth
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<AccountCircleIcon />
						</InputAdornment>
					),
				}}
			/>
			<TextField
				size="small"
				color="primary"
				error={error.error}
				name="password"
				type={showPassword ? 'text' : 'password'}
				margin="normal"
				label="Contraseña"
				variant="outlined"
				helperText={error.message}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<LockOpenOutlinedIcon />
						</InputAdornment>
					),
				}}
				fullWidth
			/>
			<Stack direction="row" justifyContent="space-between">
				<FormControlLabel
					control={
						<Switch defaultChecked size="small" color="primary" />
					}
					label="Recordarme"
					sx={{ ml: 0.5 }}
				/>
				<Typography
					htmlFor="showPassword"
					variant="caption"
					component="label"
				>
					<Checkbox
						color="secondary"
						name="showPassword"
						inputProps={{
							'aria-label': 'Mostrar/Ocultar contraseña',
							id: 'showPassword',
						}}
						onClick={handleClickShowPassword}
					/>
					Mostrar contraseña
				</Typography>
			</Stack>

			<Button
				sx={{ mt: 2 }}
				type="submit"
				variant="contained"
				disabled={isLoading}
				endIcon={
					isLoading ? (
						<CircularProgress
							color="secondary"
							size={25}
							sx={{ my: 'auto' }}
						/>
					) : (
						<LoginIcon />
					)
				}
				size="small"
				fullWidth
				color="primary"
			>
				Iniciar Sesión
			</Button>
		</Box>
	);
}

export default LoginPage;
