import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Skeleton from '@mui/material/Skeleton';
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress';

import PageHeader from '@/components/pageHeader';
import CardHeader from '@/components/cardHeader';
import {
	LogoLoader,
	Loader1,
	Loader2,
	Loader3,
	Loader4,
	Loader5,
	Loader6,
	Loader7,
	Loader8,
	Loader9,
} from '@/components/loader';

const COLORS = ['primary', 'secondary', 'tertiary', 'cuaternary', 'error', 'warning', 'success', 'info'];

function LoadersComponentsPage() {
	return (
		<>
			<PageHeader title="Loaders Elements">
				<Breadcrumbs
					aria-label="breadcrumb"
					sx={{
						textTransform: 'uppercase',
					}}
				>
					<Link underline="hover" href="#!">
						Inicio
					</Link>
					<Typography color="text.tertiary">Components</Typography>
					<Typography color="text.tertiary">Loaders</Typography>
				</Breadcrumbs>
			</PageHeader>
			<Stack spacing={3}>
				<Card type="section">
					<CardHeader title="MUI Loaders" subtitle="React progress MUI components" />
					<Stack spacing={3}>
						<Stack direction="row" spacing={2} flexWrap="wrap">
							{COLORS.map((color, i) => (
								<Stack key={i} spacing={1}>
									<CircularProgress color={color} />
									<Typography variant="caption">{color}</Typography>
								</Stack>
							))}
						</Stack>
						<Typography variant="subtitle1">Thickness</Typography>
						<Stack direction="row" spacing={2} flexWrap="wrap">
							{COLORS.map((color, i) => (
								<Stack key={i} spacing={1}>
									<CircularProgress color={color} thickness={9} />
									<Typography variant="caption">{color}</Typography>
								</Stack>
							))}
						</Stack>
						<Typography variant="subtitle1">Size</Typography>
						<Stack direction="row" spacing={2} flexWrap="wrap">
							{COLORS.map((color, i) => (
								<Stack key={i} spacing={1}>
									<CircularProgress color={color} size={70} />
									<Typography variant="caption">{color}</Typography>
								</Stack>
							))}
						</Stack>
						<Typography variant="subtitle1">Custom Circle progress</Typography>
						<Stack direction="row" spacing={2} flexWrap="wrap">
							{COLORS.map((color, i) => (
								<Stack key={i} spacing={1}>
									<Box
										sx={{
											position: 'relative',
										}}
									>
										<CircularProgress
											variant="determinate"
											sx={{
												color: (theme) =>
													theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
											}}
											size={70}
											thickness={6}
											value={100}
										/>
										<CircularProgress
											variant="indeterminate"
											disableShrink
											color={color}
											sx={{
												animationDuration: '1000ms',
												position: 'absolute',
												left: 0,
												[`& .${circularProgressClasses.circle}`]: {
													strokeLinecap: 'round',
												},
											}}
											size={70}
											thickness={6}
										/>
									</Box>
									<Typography variant="caption">{color}</Typography>
								</Stack>
							))}
						</Stack>
						<Typography variant="subtitle1">Linear Progress</Typography>
						<Stack direction="column" spacing={2} flexWrap="wrap">
							{COLORS.map((color, i) => (
								<div key={i}>
									<Typography variant="caption">{color}</Typography>
									<LinearProgress color={color} />
								</div>
							))}
						</Stack>
					</Stack>
				</Card>
				<Card type="section">
					<CardHeader title="Custom Logo Loader" />
					<LogoLoader />
					<Box bgcolor="background.default" py={4} mt={3}>
						<LogoLoader />
					</Box>
				</Card>
				<Card type="section">
					<CardHeader title="Custom Loaders" subtitle="Use the one you like best" />
					<Stack spacing={3}>
						<Typography variant="subtitle1">Rotating plane</Typography>
						<Stack direction="row" spacing={2} flexWrap="wrap">
							{COLORS.map((color, i) => (
								<Stack key={i} spacing={1}>
									<Loader1 color={`${color}.main`} />
									<Typography variant="caption">{color}</Typography>
								</Stack>
							))}
						</Stack>
						<Typography variant="subtitle1">Double bounce</Typography>
						<Stack direction="row" spacing={2} flexWrap="wrap">
							{COLORS.map((color, i) => (
								<Stack key={i} spacing={1}>
									<Loader2 color={color} />
									<Typography variant="caption">{color}</Typography>
								</Stack>
							))}
						</Stack>
						<Typography variant="subtitle1">Wave</Typography>
						<Stack direction="row" spacing={5} flexWrap="wrap">
							{COLORS.map((color, i) => (
								<Stack key={i} spacing={1}>
									<Loader3 color={color} />
									<Typography variant="caption">{color}</Typography>
								</Stack>
							))}
						</Stack>
						<Typography variant="subtitle1">Wandering cubes</Typography>
						<Stack direction="row" spacing={5} flexWrap="wrap">
							{COLORS.map((color, i) => (
								<Stack key={i} spacing={1}>
									<Loader4 color={color} />
									<Typography variant="caption">{color}</Typography>
								</Stack>
							))}
						</Stack>
						<Typography variant="subtitle1">Chasing dots</Typography>
						<Stack direction="row" spacing={5} flexWrap="wrap">
							{COLORS.map((color, i) => (
								<Stack key={i} spacing={1}>
									<Loader5 color={color} />
									<Typography variant="caption">{color}</Typography>
								</Stack>
							))}
						</Stack>
						<Typography variant="subtitle1">Three bounce</Typography>
						<Stack direction="row" spacing={5} flexWrap="wrap">
							{COLORS.map((color, i) => (
								<Stack key={i} spacing={1}>
									<Loader6 color={color} />
									<Typography variant="caption">{color}</Typography>
								</Stack>
							))}
						</Stack>
						<Typography variant="subtitle1">Cube grid</Typography>
						<Stack direction="row" spacing={5} flexWrap="wrap">
							{COLORS.map((color, i) => (
								<Stack key={i} spacing={1}>
									<Loader7 color={color} />
									<Typography variant="caption">{color}</Typography>
								</Stack>
							))}
						</Stack>
						<Typography variant="subtitle1">Circle</Typography>
						<Stack direction="row" spacing={5} flexWrap="wrap">
							{COLORS.map((color, i) => (
								<Stack key={i} spacing={1}>
									<Loader8 color={color} />
									<Typography variant="caption">{color}</Typography>
								</Stack>
							))}
						</Stack>
						<Typography variant="subtitle1">Fading circle</Typography>
						<Stack direction="row" spacing={5} flexWrap="wrap">
							{COLORS.map((color, i) => (
								<Stack key={i} spacing={1}>
									<Loader9 color={color} />
									<Typography variant="caption">{color}</Typography>
								</Stack>
							))}
						</Stack>
					</Stack>
				</Card>
				<Card type="section">
					<CardHeader title="MUI Skeleton" />
					<Stack spacing={1}>
						<Skeleton
							variant="text"
							sx={{
								fontSize: '1rem',
							}}
						/>
						<Skeleton variant="circular" width={40} height={40} />
						<Skeleton variant="rectangular" width={210} height={60} />
						<Skeleton variant="rounded" width={210} height={60} />
						<Skeleton />
						<Skeleton animation="wave" />
						<Skeleton animation={false} />
					</Stack>
				</Card>
			</Stack>
		</>
	);
}

export default LoadersComponentsPage;
