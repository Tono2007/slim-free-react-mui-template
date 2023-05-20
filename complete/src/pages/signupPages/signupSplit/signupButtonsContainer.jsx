import { useSignupData } from './signupContext';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function SignupButtonsContainer(props) {
	const { activeStep } = useSignupData();
	const { handleBack, handleNext, steps = 3, isLoading = false } = props;
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				mt: 4,
			}}
			borderTop={2}
			borderColor="primary.main"
		>
			<Button
				color="primary"
				disabled={activeStep === 0}
				onClick={handleBack}
				sx={{
					mr: 1,
				}}
			>
				{activeStep === 0 ? ' ' : 'Regresar'}
			</Button>
			<Box
				sx={{
					flex: '1 1 auto',
				}}
			/>

			<Button
				color="primary"
				size="medium"
				onClick={handleNext}
				variant={isLoading ? 'contained' : 'text'}
				disabled={isLoading}
			>
				{!isLoading && (activeStep === steps - 1 ? 'Registrarse' : 'Continuar')}
				{isLoading && (
					<CircularProgress
						color="secondary"
						size={20}
						sx={{
							mx: '2rem',
						}}
					/>
				)}
			</Button>
		</Box>
	);
}

export default SignupButtonsContainer;
