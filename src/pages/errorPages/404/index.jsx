import { useLocation, Link } from 'react-router-dom';
// MUI
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// Icons
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

function PageNotFound() {
	return (
		<Stack direction="column" spacing={2} justifyContent="center" alignItems="center" minHeight="100vh" color="text.tertiary">
			<Typography variant="h1" fontSize={150} borderBottom={1} sx={{ textDecoration: 'dotted underline' }}>
				404
			</Typography>
			{/* <Typography variant="h2" color="inherit">
				Page not found
			</Typography> */}
			<Typography variant="h2" color="inherit">
				Oopps. The page you were looking for doesn&apos;t exist.
			</Typography>
			{/* <Typography variant="body2" color="inherit">
				You may have mistyped the address or the page may have moved.
			</Typography> */}
			<Typography variant="body2" color="inherit">
				The page you are looking for {useLocation().pathname} doesn&apos;t exist or an other error ocurred. Go back, or choose a new
				direction
			</Typography>
			<SentimentVeryDissatisfiedIcon sx={{ fontSize: 50 }} />
			<Button variant="outlined" size="small" component={Link} to="/">
				BACK TO HOME
			</Button>
			<Typography variant="caption">© Copyright 2023. All Rights Reserved. Slim React MUI Template</Typography>
		</Stack>
	);
}

export default PageNotFound;
