import calcHeaderHeight from '@helpers/layoutHeight';
// MUI
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// Icons
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

function Page403() {
	return (
		<Stack
			direction="column"
			spacing={1}
			justifyContent="center"
			alignItems="center"
			minHeight={`calc(100vh - ${calcHeaderHeight('header')})`}
			color="text.tertiary"
		>
			<Typography variant="h1" fontSize={150} borderBottom={1} sx={{ textDecoration: 'dotted underline' }}>
				403
			</Typography>
			{/* <Typography variant="h2" color="inherit">
				Page not found
			</Typography> */}
			<Typography variant="h2" color="inherit">
				Lo sentimos...
			</Typography>
			{/* <Typography variant="body2" color="inherit">
				You may have mistyped the address or the page may have moved.
			</Typography> */}
			<Typography variant="body2" color="inherit">
				La página que intenta acceder tiene un acceso restringido.
			</Typography>
			<Typography variant="body2" color="inherit">
				Por favor comunicate con el administrador.
			</Typography>
			<SentimentVeryDissatisfiedIcon sx={{ fontSize: 110 }} />
			<Typography variant="caption">SLIM React MUI Template. 2023</Typography>
		</Stack>
	);
}

export default Page403;
