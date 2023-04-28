import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';

import CardHeader from '@/components/cardHeader';

const link = 'https://mui.com/system/typography/';
function BasicTypography() {
	return (
		<Stack spacing={3}>
			<Card type="section">
				<CardHeader title="Basic Typography" subtitle="Basic Typography examples.">
					<MuiLogo link={link} />
				</CardHeader>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={12} md={6}>
						<TypographyCard variant="outlined">
							<Typography variant="subtitle1">Heading</Typography>
							<Divider sx={{ my: 2 }} />
							<Typography variant="h1" gutterBottom>
								h1. Heading
							</Typography>
							<Typography variant="h2" gutterBottom>
								h2. Heading
							</Typography>
							<Typography variant="h3" gutterBottom>
								h3. Heading
							</Typography>
							<Typography variant="h4" gutterBottom>
								h4. Heading
							</Typography>
							<Typography variant="h5" gutterBottom>
								h5. Heading
							</Typography>
							<Typography variant="h6" gutterBottom>
								h6. Heading
							</Typography>
						</TypographyCard>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<TypographyCard variant="outlined">
							<Typography variant="subtitle1">Subtitles</Typography>
							<Divider sx={{ my: 2 }} />
							<Typography variant="subtitle1" gutterBottom>
								subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
							</Typography>
							<Typography variant="subtitle2" gutterBottom>
								subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
							</Typography>
						</TypographyCard>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<TypographyCard variant="outlined">
							<Typography variant="subtitle1">Body</Typography>
							<Divider sx={{ my: 2 }} />
							<Typography variant="body1" gutterBottom>
								body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
								beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
								Eum quasi quidem quibusdam.
							</Typography>
							<Typography variant="body2" gutterBottom>
								body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
								beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
								Eum quasi quidem quibusdam.
							</Typography>
						</TypographyCard>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<TypographyCard variant="outlined">
							<Typography variant="subtitle1">Extra</Typography>
							<Divider sx={{ my: 2 }} />
							<Typography variant="button" display="block" gutterBottom>
								button text
							</Typography>
							<Typography variant="caption" display="block" gutterBottom>
								caption text
							</Typography>
							<Typography variant="overline" display="block" gutterBottom>
								overline text
							</Typography>
							<Link href="https://github.com/Tono2007/slim-free-react-mui-template">React MUI Template</Link>
						</TypographyCard>
					</Grid>
					<Grid item xs={12} sm={12} md={12}>
						<TypographyCard variant="outlined">
							<Typography variant="subtitle1">Font Family</Typography>
							<Divider sx={{ my: 2 }} />
							<Typography variant="h2" gutterBottom>
								Rubik Font
							</Typography>
							<Stack spacing={2} direction="row">
								<Typography variant="body1" fontWeight="light">
									Light
								</Typography>
								<Typography variant="body1" fontWeight="medium">
									medium
								</Typography>
								<Typography variant="body1" fontWeight="bold">
									bold
								</Typography>
							</Stack>
						</TypographyCard>
					</Grid>
					<Grid item xs={12} md={6}>
						<TypographyCard variant="outlined">
							<Typography variant="subtitle1">Text Color</Typography>
							<Divider sx={{ my: 2 }} />
							<Typography variant="h1" gutterBottom color="text.primary">
								text.primary.
							</Typography>
							<Typography variant="h1" gutterBottom color="text.secondary">
								text.secondary.
							</Typography>
							<Typography variant="h1" gutterBottom color="text.tertiary">
								text.tertiary.
							</Typography>
						</TypographyCard>
					</Grid>
					<Grid item xs={12} md={6}>
						<TypographyCard variant="outlined">
							<Typography variant="subtitle1">Theme Color</Typography>
							<Divider sx={{ my: 2 }} />
							<Typography variant="h1" gutterBottom color="primary.main">
								primary.main
							</Typography>
							<Typography variant="h1" gutterBottom color="secondary.main">
								secondary.main
							</Typography>
							<Typography variant="h1" gutterBottom color="tertiary.main">
								tertiary.main
							</Typography>
							<Typography variant="h1" gutterBottom color="cuaternary.main">
								cuaternary.main
							</Typography>
						</TypographyCard>
					</Grid>
				</Grid>
			</Card>
			<Card type="section">
				<CardHeader title="Dark Theme Typography" subtitle="WIP" />
				<Divider sx={{ mb: 6 }} />
			</Card>
		</Stack>
	);
}

function TypographyCard({ children }) {
	return (
		<Card
			variant="outlined"
			sx={{
				'&:hover': {
					boxShadow: 26,
				},
			}}
		>
			{children}
		</Card>
	);
}

function MuiLogo({ link }) {
	return (
		<Tooltip title="Reference" placement="left">
			<Avatar
				component={Link}
				href={link}
				target="_blank"
				alt="MUI Logo"
				sx={{
					bgcolor: 'transparent',
					border: '2px solid #2196F3',
				}}
			>
				<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clipPath="url(#clip0)">
						<path d="M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z" fill="#2196F3" />
						<path
							d="M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z"
							fill="#347AC9"
						/>
						<path d="M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z" fill="#2196F3" />
						<path
							d="M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z"
							fill="#347AC9"
						/>
					</g>
					<defs>
						<clipPath id="clip0">
							<rect width="300" height="238.3" fill="white" transform="translate(100 131)" />
						</clipPath>
					</defs>
				</svg>
			</Avatar>
		</Tooltip>
	);
}

export default BasicTypography;
