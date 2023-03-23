import ReduxProvider from '@/redux/store';
import '@/assets/css/style.css';
import '@fontsource/rubik/300.css';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import '@fontsource/rubik/700.css';

import {
	ThemeProvider as MuiThemeProvider,
	StyledEngineProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '@/utils/theme';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function App() {
	return (
		<ReduxProvider>
			<StyledEngineProvider injectFirst>
				<MuiThemeProvider theme={theme}>
					<CssBaseline />
					<Button variant="dashed">Tex sdf dsft</Button>
					<Button variant="contained" color="secondary">
						Contained
					</Button>
					<Button variant="contained" color="primary">
						Contained
					</Button>
					<Button variant="contained" color="tertiary">
						Contained
					</Button>
					<Button variant="outlined">Outlined</Button>
					<Box sx={{ width: '100%', maxWidth: 500 }}>
						<Typography variant="h1" gutterBottom>
							h1. Heading
						</Typography>
						<Typography variant="h2" gutterBottom>
							h2. Heading
						</Typography>
						<Typography variant="h3" gutterBottom>
							h3. Heading
						</Typography>
						<Typography variant="h4" gutterBottom>
							h4. Heading
						</Typography>
						<Typography variant="h5" gutterBottom>
							h5. Heading
						</Typography>
						<Typography variant="h6" gutterBottom>
							h6. Heading
						</Typography>
						<Typography variant="subtitle1" gutterBottom>
							subtitle1. Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. Quos blanditiis tenetur
						</Typography>
						<Typography variant="subtitle2" gutterBottom>
							subtitle2. Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. Quos blanditiis tenetur
						</Typography>
						<Typography variant="body1" gutterBottom>
							body1. Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. Quos blanditiis tenetur unde
							suscipit, quam beatae rerum inventore consectetur,
							neque doloribus, cupiditate numquam dignissimos
							laborum fugiat deleniti? Eum quasi quidem quibusdam.
						</Typography>
						<Typography variant="body2" gutterBottom>
							body2. Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. Quos blanditiis tenetur unde
							suscipit, quam beatae rerum inventore consectetur,
							neque doloribus, cupiditate numquam dignissimos
							laborum fugiat deleniti? Eum quasi quidem quibusdam.
						</Typography>
						<Typography
							variant="button"
							display="block"
							gutterBottom
						>
							button text
						</Typography>
						<Typography
							variant="caption"
							display="block"
							gutterBottom
						>
							caption text
						</Typography>
						<Typography
							variant="overline"
							display="block"
							gutterBottom
						>
							overline text
						</Typography>
					</Box>
					<Typography variant="h3">Responsive h3</Typography>
					<Typography variant="h3">Responsive h3</Typography>
					<Typography variant="h4">Responsive h4</Typography>
					<Typography variant="h5">Responsive h5</Typography>{' '}
				</MuiThemeProvider>
			</StyledEngineProvider>
		</ReduxProvider>
	);
}

export default App;
