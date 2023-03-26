import { Outlet } from 'react-router-dom';
// MUI Stuff
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// Components
import Footer from '@/components/footer';
import MainHeader from '@/components/mainHeader';
import Navbar from '@/components/navbar';

function MainLayout() {
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
				<Outlet />
			</Container>
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
