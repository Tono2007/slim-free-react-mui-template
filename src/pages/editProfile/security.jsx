import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import EditIcon from '@mui/icons-material/Edit';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import EastIcon from '@mui/icons-material/East';
import CloseIcon from '@mui/icons-material/Close';
import DesktopWindowsTwoToneIcon from '@mui/icons-material/DesktopWindowsTwoTone';
import TabletAndroidTwoToneIcon from '@mui/icons-material/TabletAndroidTwoTone';
import PhoneAndroidTwoToneIcon from '@mui/icons-material/PhoneAndroidTwoTone';

import CardHeader from '@/components/cardHeader';

import avatar from '@/assets/images/avatars/avatar_13.jpg';

function Security() {
	return (
		<Stack spacing={6}>
			<PassworSection />
			<MultifactorSection />
			<SessionsSection />
		</Stack>
	);
}

function PassworSection() {
	return (
		<Card type="section">
			<CardHeader title="Change Password" subtitle="Update Profile Security" />
			<Stack spacing={3}>
				<Alert severity="warning">
					<AlertTitle>Alert!</AlertTitle>
					Your Password will expire in every 3 months. So change it periodically.
					<b> Do not share your password</b>
				</Alert>
				<form onSubmit={() => {}}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6} md={6}>
							<TextField label="New Password" variant="outlined" type="password" fullWidth />
						</Grid>
						<Grid item xs={12} sm={6} md={6}>
							<TextField label="Confirm Password" variant="outlined" type="password" fullWidth />
						</Grid>
						<Grid item xs={12} sm={6} md={6}>
							<TextField label="Current Password" variant="outlined" type="password" fullWidth />
						</Grid>

						<Grid item xs={12} sm={12} md={12}>
							<Button
								disableElevation
								variant="contained"
								sx={{
									float: 'right',
								}}
							>
								Change Password
							</Button>
						</Grid>
					</Grid>
				</form>
			</Stack>
		</Card>
	);
}
function MultifactorSection() {
	return (
		<Card type="section">
			<CardHeader title="Multi Factor Authentication" />
			<Grid container spacing={5}>
				<Grid item xs={12} sm={6} md={6}>
					<Stack
						spacing={1}
						border={1}
						borderColor="text.hint"
						p={2}
						sx={{
							'&:hover': {
								borderColor: 'border',
							},
						}}
					>
						<Typography color="error">
							<Box
								component="span"
								width={10}
								height={10}
								bgcolor="error.main"
								borderRadius="50%"
								display="inline-block"
								mr={1}
							/>
							Off
						</Typography>
						<Typography variant="subtitle1">Authenticator App</Typography>
						<Typography variant="body1" color="textSecondary">
							Use an authenticator app to generate one time security codes.
						</Typography>
						<Button variant="outlined" sx={{ width: 'fit-content' }} endIcon={<EastIcon />}>
							Set Up
						</Button>
					</Stack>
				</Grid>
				<Grid item xs={12} sm={6} md={6}>
					<Stack
						spacing={1}
						border={1}
						borderColor="text.hint"
						p={2}
						height="100%"
						sx={{
							'&:hover': {
								borderColor: 'border',
							},
						}}
					>
						<Typography color="error">
							<Box
								component="span"
								width={10}
								height={10}
								bgcolor="error.main"
								borderRadius="50%"
								display="inline-block"
								mr={1}
							/>
							Off
						</Typography>
						<Typography variant="subtitle1">Text Message</Typography>
						<Typography variant="body1" color="textSecondary" flexGrow={1}>
							Use your mobile phone to receive security codes via SMS.
						</Typography>
						<Button variant="outlined" sx={{ width: 'fit-content' }} endIcon={<EastIcon />}>
							Set Up
						</Button>
					</Stack>
				</Grid>
			</Grid>
		</Card>
	);
}

function createData(time, ip, client) {
	return { time, ip, client };
}

const history = [
	createData('09:06 AM 05/07/2023', '95.130.17.84', 'Chrome, Mac OS 10.15.7'),
	createData('06:46 AM 05/07/2023', '95.130.17.84', 'Chrome, Mac OS 10.15.7'),
	createData('09:06 AM 06/07/2023', '95.130.17.84', 'Chrome, Mac OS 10.15.7'),
];

const devices = [
	{
		TypeIcon: DesktopWindowsTwoToneIcon,
		device: 'Cent Desktop',
		ubication: '4351 Deans Lane, Chelmsford',
		active: true,
	},
	{
		TypeIcon: TabletAndroidTwoToneIcon,
		device: 'Imho Tablet ',
		ubication: '4185 Michigan Avenue',
		active: false,
		last: '5 days ago',
	},
	{
		TypeIcon: PhoneAndroidTwoToneIcon,
		device: 'Albs Mobile',
		ubication: '3462 Fairfax Drive, Montcalm',
		active: false,
		last: '1 month ago',
	},
];
function SessionsSection() {
	return (
		<Card type="section">
			<CardHeader title="Login history" subtitle="Your recent login activity" />
			<TableContainer>
				<Table size="small" aria-label="results table">
					<TableHead>
						<TableRow>
							<TableCell>Login Type</TableCell>
							<TableCell align="left">Ip Address</TableCell>
							<TableCell align="left">Client</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{history.slice(0, 5).map((row, i) => (
							<TableRow hover key={i}>
								<TableCell>
									<Typography variant="subtitle2">Credential login</Typography>
									{row.time}
								</TableCell>
								<TableCell align="left">{row.ip} </TableCell>
								<TableCell align="left">{row.client} </TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<CardHeader size="small" title="Recognized devices" sx={{ mt: 6 }} />
			<Stack spacing={1}>
				{devices.map(({ TypeIcon, device, ubication, active, last }, i) => (
					<Stack key={i} direction="row" alignItems="center" spacing={1}>
						<TypeIcon />
						<Typography variant="body1" flexGrow={1}>
							{device} <Typography variant="caption">| {ubication}</Typography>
						</Typography>
						<Typography color={active ? 'success.main' : 'text.secondary'} variant="caption">
							<Box
								width={10}
								height={10}
								bgcolor={active ? 'success.main' : '#d3d3d3'}
								borderRadius="50%"
								display="inline-block"
								mr={1}
							/>
							{active ? 'Current Active' : `Active ${last}`}
						</Typography>
						<IconButton aria-label="close" size="small" sx={{ float: 'right' }}>
							<CloseIcon fontSize="small" />
						</IconButton>
					</Stack>
				))}
			</Stack>
			<CardHeader size="small" title="Active Sessions" sx={{ mt: 6 }} />
			<Stack spacing={1}>
				{devices.map(({ TypeIcon, device, ubication, active, last }, i) => (
					<Stack key={i} direction="row" alignItems="center" spacing={1}>
						<TypeIcon color="success" />
						<Typography variant="body1" flexGrow={1}>
							{device} <Typography variant="caption">| {ubication}</Typography>
						</Typography>
						<Button variant="text" color="error">
							Logout
						</Button>
					</Stack>
				))}
			</Stack>
		</Card>
	);
}

export default Security;
