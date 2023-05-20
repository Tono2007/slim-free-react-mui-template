import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
// Icons
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
	return (
		<Stack
			component="form"
			display={{
				xs: 'none',
				md: 'inline-block',
			}}
		>
			<TextField
				size="small"
				color="primary"
				InputProps={{
					name: 'search',
					endAdornment: (
						<InputAdornment position="end">
							<IconButton color="primary">
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					),

					sx: {
						pr: 0,
						bgcolor: 'background.paper',
						borderRadius: '20px',
						overflow: 'hidden',
						height: 40,
					},
					inputProps: {
						sx: {
							transition: '0.3s padding',
							pl: 1.5,
							'&:not(:placeholder-shown), &:focus': {
								pl: 3,
							},
						},
					},
				}}
				placeholder="Buscar"
				variant="outlined"
				fullWidth
			/>
			{/* <InputBase
				sx={{
					ml: 1,
					bgcolor: 'background.paper',
					borderRadius: '20px',
					overflow: 'hidden',
					pl: 2,
					py: 0,
					border: 2,
					borderColor: 'primary.light',
					fontSize: '13px',
				}}
				placeholder="Buscar"
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							color="primary"
							size="small"
							type="submit"
							sx={{ bgcolor: 'primary.main' }}
						>
							<SearchIcon
								fontSize="small"
								sx={{ color: 'primary.contrastText' }}
							/>
						</IconButton>
					</InputAdornment>
				}
			/> */}
		</Stack>
	);
}

export default SearchBar;
