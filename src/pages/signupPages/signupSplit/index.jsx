import { UserProvider, useSignupData } from './signupContext';
import { Link as RouterLink } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import logo from '@/assets/images/logo/png/Color_logo_nobg.png';
// import logo from '@/assets/images/logo/png/White_logo_nobg.png';
import Google from '@/assets/icons/social-google.svg';
import Facebook from '@/assets/icons/social-facebook.png';

import UserTypeTab from './userTypeTab';
import PersonalDataTab from './personalDataTab';
import UserDataFormTab from './userDataFormTab';
import SuccessfulRegistration from './successfulRegistration';

function Signup() {
	return (
		<Container>
			<Card elevation={20} type="none" variant="elevation" hover={false}>
				<Grid
					container
					spacing={0}
					sx={{
						minHeight: 500,
					}}
				>
					<Grid item xs={12} sm={12} md={5} lg={4}>
						<Stack
							bgcolor="primary.700"
							direction="column"
							justifyContent="space-between"
							alignItems="center"
							height="100%"
							color="primary.contrastText"
							p="5%"
							spacing={5}
						>
							<Box
								p={1.5}
								component="img"
								src={logo}
								alt="slim logo"
								sx={{
									width: '100%',
									objectFit: 'contain',
									borderBottom: 1,
									borderColor: 'secondary.main',
								}}
							/>

							<Typography
								variant="h4"
								align="center"
								mb={5}
								fontSize={{
									xs: '20px',
									sm: '20px',
									md: 29,
								}}
								color="inherit"
							>
								Regístrate en SLIM React MUI Template
							</Typography>

							<Stack direction="column" spacing={1} width="100%">
								<Button
									fullWidth
									size="small"
									variant="outlined"
									sx={{
										color: 'inherit',
									}}
									to="/"
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
									Registrarse con Google
								</Button>
								<Button
									fullWidth
									size="small"
									variant="outlined"
									sx={{
										color: 'inherit',
									}}
									to="/"
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
										src={Facebook}
										alt="google"
									/>
									Registrarse con Facebook
								</Button>
							</Stack>
							<Typography variant="body2" align="left" color="inherit">
								Ya tengo una cuenta.{' '}
								<Link
									to="/pages/login"
									variant="body2"
									component={RouterLink}
									color="tertiary.light"
									sx={{
										mt: 0.5,
										mb: 0,
									}}
								>
									Iniciar Sesión
								</Link>
							</Typography>
						</Stack>
					</Grid>
					<Grid item xs={12} sm={12} md={7} lg={8}>
						<UserProvider>
							<SignupContainer />
						</UserProvider>
					</Grid>
				</Grid>
			</Card>
		</Container>
	);
}

function SignupContainer() {
	const { activeStep, setActiveStep } = useSignupData();
	const steps = ['Usuario', 'Perfil', 'Cuenta'];

	const changeActiveStep = (step) => {
		setActiveStep(step);
	};
	return (
		<Stack
			width="100%"
			py={5}
			px={{
				xs: 1,
				md: 5,
			}}
			direction="column"
			height="100%"
			maxHeight={{
				xs: '100%',
				md: '80vh',
			}}
			overflow="auto"
		>
			<Stepper activeStep={activeStep}>
				{steps.map((label, index) => {
					const stepProps = {};
					const labelProps = {};
					return (
						<Step key={label} {...stepProps}>
							<StepLabel {...labelProps}>{label}</StepLabel>
						</Step>
					);
				})}
			</Stepper>
			<Box p={2} height="100%" pt={4}>
				{activeStep === steps.length ? (
					<SuccessfulRegistration />
				) : (
					<>
						{activeStep === 0 && <UserTypeTab />}
						{activeStep === 1 && <PersonalDataTab />}
						{activeStep === 2 && <UserDataFormTab />}
					</>
				)}
			</Box>
		</Stack>
	);
}

export default Signup;
