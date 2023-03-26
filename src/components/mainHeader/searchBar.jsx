import constants from '@/utils/constants';
// MUI Stuff
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';

// Icons
import SearchIcon from '@mui/icons-material/Search';
// Components
import logo from '@/assets/images/logo/png/Color_logo_nobg.png';

function SearchBar() {
	return (
		<Stack component="form">
			<InputBase
				sx={{
					ml: 1,
					bgcolor: 'background.paper',
					borderRadius: '20px',
					overflow: 'hidden',
					pl: 3,
					py: 0,
					border: 2,
					borderColor: 'primary.light',
				}}
				placeholder="Buscar"
				InputProps={{
					'aria-label': 'search',
					name: 'search',
				}}
				endAdornment={
					<InputAdornment position="end">
						<IconButton color="primary" size="small" type="submit">
							<SearchIcon fontSize="small" />
						</IconButton>
					</InputAdornment>
				}
			/>
		</Stack>
	);
}

export default SearchBar;
