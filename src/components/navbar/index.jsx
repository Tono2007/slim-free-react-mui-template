// MUI Stuff
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// Icons
import NavLinks from './navLinks';

function Navbar({ navItems, position = 'sticky' }) {
	return (
		<AppBar position={position} elevation={26}>
			<Box bgcolor="background.paper" py={2} border={1} borderColor="border">
				<Container maxWidth="lg">
					<NavLinks navItems={navItems} />
				</Container>
			</Box>
		</AppBar>
	);
}

export default Navbar;
