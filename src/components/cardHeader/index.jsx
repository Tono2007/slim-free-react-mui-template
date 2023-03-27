import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function CardHeader({ children, title, subtitle }) {
	return (
		<Stack
			mb={4}
			direction="row"
			justifyContent="space-between"
			flexWrap="wrap"
		>
			<Stack>
				<Typography
					variant="h5"
					mb={1}
					fontWeight="700"
					textTransform="uppercase"
				>
					{title}
				</Typography>
				<Typography variant="body1" color="text.secondary">
					{subtitle}
				</Typography>
			</Stack>
			{children}
		</Stack>
	);
}

export default CardHeader;
