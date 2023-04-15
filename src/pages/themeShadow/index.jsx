import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

import PageHeader from '@/components/pageHeader';
import CardHeader from '@/components/cardHeader';

const link = 'https://next.material-ui.com/system/shadows/';
function ThemeShadow() {
	return (
		<>
			<PageHeader title="Shadow">
				<Breadcrumbs
					aria-label="breadcrumb"
					sx={{ textTransform: 'uppercase' }}
				>
					<Link underline="hover" href="#!">
						Inicio
					</Link>
					<Link underline="hover" href="#!">
						Theme
					</Link>
					<Typography color="text.tertiary">BoxShadow</Typography>
				</Breadcrumbs>
			</PageHeader>
			<Card type="section">
				<CardHeader title="Basic Shadow">
					<MuiLogo link={link} />
				</CardHeader>
			</Card>
		</>
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
				<svg
					width="500"
					height="500"
					viewBox="0 0 500 500"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0)">
						<path
							d="M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z"
							fill="#2196F3"
						/>
						<path
							d="M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z"
							fill="#347AC9"
						/>
						<path
							d="M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z"
							fill="#2196F3"
						/>
						<path
							d="M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z"
							fill="#347AC9"
						/>
					</g>
					<defs>
						<clipPath id="clip0">
							<rect
								width="300"
								height="238.3"
								fill="white"
								transform="translate(100 131)"
							/>
						</clipPath>
					</defs>
				</svg>
			</Avatar>
		</Tooltip>
	);
}

export default ThemeShadow;
