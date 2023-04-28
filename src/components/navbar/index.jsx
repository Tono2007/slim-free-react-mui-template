// MUI Stuff
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// Icons
import NavLinks from './navLinks';

function Navbar() {
	return (
		<AppBar position="sticky" color="transparent" elevation={26}>
			<Box bgcolor="background.paper" py={2} border={1} borderColor="border">
				<Container maxWidth="lg">
					<NavLinks />
				</Container>
			</Box>
		</AppBar>
	);
}

export default Navbar;
