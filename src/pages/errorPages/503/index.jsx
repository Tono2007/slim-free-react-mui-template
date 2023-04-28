import { useLocation, Link } from 'react-router-dom';
// MUI
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// Icons
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

function Page503() {
	return (
		<Stack
			direction="column"
			spacing={2}
			justifyContent="center"
			alignItems="center"
			minHeight="100vh"
			color="text.tertiary"
		>
			<Typography
				variant="h1"
				fontSize={150}
				borderBottom={1}
				sx={{ textDecoration: 'dotted underline' }}
			>
				503
			</Typography>
			<Typography variant="h2" color="inherit">
				Service Temporarily Unavailable.
			</Typography>

			<Typography variant="body2" color="inherit">
				We&apos;ve been automatically alerted of the issue and will work
				to fix it asap.
			</Typography>
			<SentimentVeryDissatisfiedIcon sx={{ fontSize: 50 }} />
			<Button variant="outlined" size="small" component={Link} to="/">
				BACK TO HOME
			</Button>
			<Typography variant="caption">
				© Copyright 2023. All Rights Reserved. Slim React MUI Template
			</Typography>
		</Stack>
	);
}

export default Page503;
