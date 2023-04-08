import { Outlet, useLocation } from 'react-router-dom';
import withScrollTopFabButton from '@hocs/withScrollTopFabButton';
import WidthPageTransition from '@hocs/widthPageTransition';
// MUI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
// Icons
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// Components
import Footer from '@/components/footer';
import MainHeader from '@/components/mainHeader';
import Navbar from '@/components/navbar';

function FabButton() {
	/* <Fab
		size="small"
		aria-label="scroll back to top"
		sx={{ bgcolor: 'primary.light' }}
	>
		<KeyboardArrowUpIcon color="primary" />
	</Fab> */
	return (
		<Fab size="small" aria-label="scroll back to top" color="primary">
			<KeyboardArrowUpIcon />
		</Fab>
	);
}
function MainLayout() {
	const location = useLocation();
	return (
		<Box display="flex" minHeight="100vh" flexDirection="column">
			<Header />
			<Container
				maxWidth="lg"
				component="main"
				sx={{
					flex: '1 0 auto',
					pb: 5,
				}}
			>
				{/* <WidthPageTransition location={location.key}>
					<Outlet />
				</WidthPageTransition> */}
				<Outlet />
			</Container>
			{withScrollTopFabButton(FabButton)}
			<Footer />
		</Box>
	);
}

function Header() {
	return (
		<>
			<MainHeader />
			<Navbar />
		</>
	);
}

export default MainLayout;
