import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

import PageHeader from '@/components/pageHeader';
import CardHeader from '@/components/cardHeader';

import themeColorsData from './themeColorsData';

const link = 'https://mui.com/system/palette/';

const { extraColor, mainColor, systemColor } = themeColorsData;

function ThemeColors() {
	return (
		<>
			<PageHeader title="Color Palette">
				<Breadcrumbs
					aria-label="breadcrumb"
					sx={{
						textTransform: 'uppercase',
					}}
				>
					<Link underline="hover" href="#!">
						Inicio
					</Link>
					<Link underline="hover" href="#!">
						Theme
					</Link>
					<Typography color="text.tertiary">Color Palette</Typography>
				</Breadcrumbs>
			</PageHeader>
			<Stack spacing={3}>
				<Card type="section">
					<CardHeader
						title="Main Color Palette"
						subtitle="The Template use the following palette colors (accessible under theme.palette.):"
					>
						<MuiLogo link={link} />
					</CardHeader>
					<Stack spacing={3}>
						{mainColor.map(({ title, palette }) => (
							<TypographyCard variant="outlined" key={title}>
								<Typography variant="subtitle1">{title}</Typography>
								<Divider
									sx={{
										my: 1,
										mb: 3,
									}}
								/>
								<Grid container spacing={3}>
									{palette.map((color, i) => (
										<Grid item xs={12} sm={4} md={3} lg={2} key={i}>
											<ColorBox color={color} />
										</Grid>
									))}
								</Grid>
							</TypographyCard>
						))}
					</Stack>
				</Card>
				<Card type="section">
					<CardHeader title="Default System Color Palette" />
					<Stack spacing={3}>
						{systemColor.map(({ title, palette }) => (
							<TypographyCard variant="outlined" key={title}>
								<Typography variant="subtitle1">{title}</Typography>
								<Divider
									sx={{
										my: 1,
										mb: 3,
									}}
								/>
								<Grid container spacing={3}>
									{palette.map((color, i) => (
										<Grid item xs={12} sm={4} md={3} lg={2} key={i}>
											<ColorBox color={color} />
										</Grid>
									))}
								</Grid>
							</TypographyCard>
						))}
					</Stack>
				</Card>
				<Card type="section">
					<CardHeader title="Extra Color Palette" />
					<Stack spacing={3}>
						{extraColor.map(({ title, palette }) => (
							<TypographyCard variant="outlined" key={title}>
								<Typography variant="subtitle1">{title}</Typography>
								<Divider
									sx={{
										my: 1,
										mb: 3,
									}}
								/>
								<Grid container spacing={3}>
									{palette.map((color, i) => (
										<Grid item xs={12} sm={4} md={3} lg={2} key={i}>
											<ColorBox color={color} />
										</Grid>
									))}
								</Grid>
							</TypographyCard>
						))}
					</Stack>
				</Card>
				<Card type="section">
					<CardHeader title="Dark Color Palette" subtitle="WIP" />
				</Card>
			</Stack>
		</>
	);
}

function ColorBox({ color: colorData }) {
	const { bgcolor, color, hex, dark } = colorData;
	return (
		<>
			<Box
				width="100%"
				height={130}
				bgcolor={bgcolor}
				borderRadius={5}
				display="grid"
				justifyContent="center"
				alignItems="center"
			>
				<Typography
					variant="subtitle1"
					sx={{
						color: dark ? 'grey.800' : '#ffffff',
					}}
				>
					{bgcolor}
				</Typography>
			</Box>
			<Stack mt={2} direction="row" justifyContent="space-between" alignItems="baseline">
				<Typography variant="caption">{color}</Typography>
				<Typography variant="subtitle1">{hex}</Typography>
			</Stack>
		</>
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

export default ThemeColors;
