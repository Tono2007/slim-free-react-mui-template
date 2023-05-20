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
			hover={false}
			elevation={20}
			sx={{
				display: 'block',
				width: {
					xs: '95%',
					sm: '450px ',
					md: '50%',
					lg: '30%',
				},
			}}
		>
			<Stack direction="column" spacing={2}>
				<Box component="img" src={logo} width="80%" mx="auto" alt="slim logo" />
				<div>
					<Typography variant="h1" fontWeight="light">
						¡Bienvenido!
					</Typography>
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
						color: (theme) => (theme.palette.mode === 'dark' ? 'text.primary' : 'grey.700'),
						backgroundColor: (theme) =>
							theme.palette.mode === 'dark' ? 'background.default' : theme.palette.grey[50],
						borderColor: 'border',
					}}
					to="/home"
					component={RouterLink}
				>
					<Box
						sx={{
							mr: {
								xs: 1,
								sm: 2,
							},
							mt: 0,
						}}
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

				<Button variant="outlined" fullWidth color="primary" to="/pages/signup" component={RouterLink}>
					Registrarse
				</Button>
				{/* <Typography>
					¿No tienes cuenta?{' '}
					<Link to="/signup" variant="body2" component={RouterLink}>
					Registrate ahora
					</Link>
				</Typography> */}
				<Divider
					sx={{
						my: 0,
					}}
				/>
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
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('submit');
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			navigate('/');
		}, 1500);
	};
	return (
		<Box onSubmit={handleSubmit} component="form">
			<TextField
				size="small"
				color="primary"
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
				name="password"
				type={showPassword ? 'text' : 'password'}
				margin="normal"
				label="Contraseña"
				variant="outlined"
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
					control={<Switch defaultChecked size="small" color="primary" />}
					label="Recordarme"
					sx={{
						ml: 0.5,
					}}
				/>
				<Typography htmlFor="showPassword" variant="caption" component="label">
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
				sx={{
					mt: 2,
					color: 'primary.contrastText',
					' &:not(:disabled)': {
						background: (theme) =>
							`linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.tertiary.main} 100%)`,
					},
					'&:hover': {
						background: (theme) =>
							`linear-gradient(90deg, ${theme.palette.primary.dark} 0%, ${theme.palette.tertiary.dark} 100%)`,
					},
				}}
				type="submit"
				variant="contained"
				disabled={isLoading}
				endIcon={
					isLoading ? (
						<CircularProgress
							color="secondary"
							size={25}
							sx={{
								my: 'auto',
							}}
						/>
					) : (
						<LoginIcon />
					)
				}
				fullWidth
				color="primary"
			>
				Iniciar Sesión
			</Button>
		</Box>
	);
}

export default LoginPage;
