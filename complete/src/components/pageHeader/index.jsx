import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function PageHeader({ children, title, sx = {} }) {
	return (
		<Stack
			component="header"
			my={3}
			direction="row"
			justifyContent="space-between"
			alignItems="center"
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
