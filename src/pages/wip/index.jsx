import constants from '@/utils/constants';
// Icons
import CodeIcon from '@mui/icons-material/Code';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import calcLayoutHeight from '@/utils/helpers/layoutHeight';

function WorkInProgress() {
	return (
		<Box
			minHeight={`calc(100vh - ${
				calcLayoutHeight('header', false) +
				calcLayoutHeight('footer', false)
			}px)`}
			p="5%"
			display="grid"
			sx={{
				placeItems: 'center',
				color: '#fff',
				opacity: 0.8,
				background: (theme) =>
					`repeating-linear-gradient( -45deg, ${theme.palette.primary.main}, ${theme.palette.primary.main} 5px, transparent 5px, transparent 25px )`,
			}}
		>
			<Box
				maxWidth="lg"
				bgcolor="primary.dark"
				textAlign="center"
				p="5%"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 1,
				}}
			>
				<CodeIcon sx={{ fontSize: 110 }} />
				<Typography
					color="inherit"
					variant="subtitle2"
					fontSize={{ xs: '50px', sm: '96px' }}
					lineHeight={{ xs: '50px', sm: '96px' }}
				>
					Work In Progress
				</Typography>
				<Typography
					variant="h4"
					my={2}
					textTransform="uppercase"
					color="inherit"
				>
					coming soon
				</Typography>
				<Typography
					variant="h6"
					paragraph
					align="center"
					color="inherit"
				>
					If you want to check in the development process, you are
					welcome to take a peek on{' '}
					<Link
						title="Repo Github"
						underline="hover"
						color="secondary.main"
						href={constants.siteData.siteRepo}
						target="_blank"
						rel="noreferrer noopener"
						fontWeight="medium"
					>
						GitHub
					</Link>
				</Typography>
			</Box>
		</Box>
	);
}

export default WorkInProgress;
