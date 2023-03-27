// MUI
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function PageHeader({ children, title, sx = {} }) {
	return (
		<Stack
			my={4}
			direction="row"
			justifyContent="space-between"
			flexWrap="wrap"
			textTransform="uppercase"
			sx={sx}
		>
			<Typography
				variant="h5"
				fontSize={18}
				textTransform="inherit"
				borderLeft={5}
				borderColor="primary.400"
				pl={1.5}
				height="fit-content"
			>
				{title}
			</Typography>
			{children}
		</Stack>
	);
}

export default PageHeader;
