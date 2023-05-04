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

function SignupPage() {
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
			}}
		>
			<Stack direction="column" spacing={5}>
				<Box component="img" src={logo} width="80%" mx="auto" alt="slim logo" />
				<div>
					<Typography variant="h2">Get Started!</Typography>
					<Typography variant="body2" color="textSecondary">
						It&#39;s free to signup and only takes a minute.
					</Typography>
				</div>

				<LoginForm />
				<Typography>
					Already have an account?{' '}
					<Link to="/login" component={RouterLink}>
						Sign In
					</Link>
				</Typography>
			</Stack>
		</Card>
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
		}, 3000);
	};
	return (
		<form onSubmit={handleSubmit}>
			<TextField
				color="primary"
				autoFocus
				name="nickname"
				label="User"
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

			<Button
				sx={{
					mt: 2,
					textTransform: 'uppercase',
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
				Sign Up
			</Button>
		</form>
	);
}

export default SignupPage;
