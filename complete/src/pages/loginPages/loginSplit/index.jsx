import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

import logo from '@/assets/images/logo/png/White_logo_nobg.png';
import LoginIcon from '@mui/icons-material/Login';

function LoginSplit() {
	return (
		<Container>
			<Card elevation={20} type="none" variant="elevation" sx={{ my: 6 }} hover={false}>
				<Grid
					container
					spacing={0}
					sx={{
						minHeight: 500,
					}}
				>
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<Box
							py={8}
							px={{
								xs: 2,
								md: 8,
							}}
							sx={{ display: 'grid', placeItems: 'center', height: '100%' }}
						>
							<Stack direction="column" spacing={5} justifyContent="space-between" height="100%">
								<div>
									<Typography variant="h1" fontWeight="medium">
										Welcome back!
									</Typography>
									<Typography variant="body2" color="textSecondary">
										Sign in to your account to continue
									</Typography>
								</div>

								<LoginForm />

								<Typography>
									¿No tienes cuenta?{' '}
									<Link to="/pages/signup" variant="body2" component={RouterLink}>
										Registrate ahora
									</Link>
								</Typography>
							</Stack>
						</Box>
					</Grid>
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<Stack
							bgcolor="primary.main"
							direction="column"
							justifyContent="space-between"
							height="100%"
							width="100%"
							color="primary.light"
							p="10%"
							spacing={3}
						>
							<Box
								component="img"
								src={logo}
								alt="slim logo"
								sx={{
									mx: 'auto',
									width: { xs: '100%', sm: '70%' },
									objectFit: 'contain',
									borderBottom: 1,
									borderColor: 'secondary.main',
								}}
							/>

							<Typography variant="body2" color="inherit">
								We work with clients big and small across a range of sectors and we utilise all forms of
								media to get your name out there in a way that’s right for you. We believe that analysis
								of your company and your customers is key in responding effectively to your promotional
								needs and we will work with you to fully understand your business to achieve the
								greatest amount of publicity possible so that you can see a return from the advertising.
							</Typography>
							<Typography color="primary.contrastText">OR ADDRESS:</Typography>
							<Typography variant="body2" color="inherit">
								Ayala Center, Cebu Business Park, Cebu City, Cebu, Philippines 6000
							</Typography>
						</Stack>
					</Grid>
				</Grid>
			</Card>
		</Container>
	);
}

function LoginForm() {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('submit');
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			navigate('/');
		}, 1000);
	};
	return (
		<form onSubmit={handleSubmit}>
			<TextField
				autoFocus
				color="primary"
				name="Email"
				label="Email"
				margin="normal"
				variant="outlined"
				fullWidth
			/>
			<TextField
				color="primary"
				name="password"
				type="password"
				margin="normal"
				label="Password"
				variant="outlined"
				fullWidth
			/>
			<Link to="/resetPassword" component={RouterLink} color="tertiary.main">
				Forgot password?
			</Link>
			<Button
				sx={{
					mt: 2,
					textTransform: 'uppercase',
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
				Sign In
			</Button>
		</form>
	);
}

export default LoginSplit;
