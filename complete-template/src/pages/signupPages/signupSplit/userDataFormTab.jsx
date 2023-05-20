import { useState } from 'react';
import { useSignupData } from './signupContext';

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';

// Icons
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

import SignupButtonsContainer from './signupButtonsContainer';

const IndustryList = [
	'Alimentación',
	'Automotriz',
	'Farmaceutica',
	'Financiera',
	'Industria pesada',
	'Informática',
	'Logistica',
	'Servicios',
	'Textil',
	'Turismo',
];
const CompanyTypeList = ['Corporación global', 'Corporación local', 'Familiar', 'PYME', 'Unipersonal'];
const SectorList = ['Gobierno', 'Privado'];
const TargetMarketList = ['América del Norte', 'Asia', 'Africa', 'Europa', 'Global', 'Latinoamerica', 'Local'];
function UserDataFormTab() {
	const { setActiveStep, userType } = useSignupData();
	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		handleNext();
	};
	return (
		<Stack direction="column" justifyContent="flex-start" alignContent="flex-start" pb={3}>
			<Typography variant="h2" fontSize="2rem" fontWeight="bold">
				Datos
			</Typography>
			<Typography variant="body2" color="textSecondary" mt={1} gutterBottom>
				Usuario de tipo {userType} te damos la bienvenida a la plataforma que impulsa tu potencial financiero.
			</Typography>
			<Typography variant="body2" color="textSecondary">
				Llena este ultimo formulario para continuar.
			</Typography>
			<form onSubmit={handleSubmit}>
				<Grid container spacing={2} mt={2}>
					<Grid
						item
						xs={12}
						sm={12}
						md={12}
						sx={{
							position: 'relative',
						}}
					>
						<TextField
							required
							autoFocus
							color="primary"
							size="medium"
							name="companyName"
							fullWidth
							label="Nombre Organización"
							variant="outlined"
						/>
						<HelperPopover />
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<TextField required select name="industry" fullWidth label="Industria" variant="outlined">
							{IndustryList.sort().map((option) => (
								<MenuItem key={option} value={option.toUpperCase()}>
									{option}
								</MenuItem>
							))}
						</TextField>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<TextField
							required
							select
							name="companyType"
							fullWidth
							label="Tipo de empresa"
							variant="outlined"
						>
							{CompanyTypeList.sort().map((option) => (
								<MenuItem key={option} value={option.toUpperCase()}>
									{option}
								</MenuItem>
							))}
						</TextField>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<TextField
							required
							select
							name="sector"
							fullWidth
							label="Sector"
							variant="outlined"
							defaultValue=""
						>
							{SectorList.sort().map((option) => (
								<MenuItem key={option} value={option.toUpperCase()}>
									{option}
								</MenuItem>
							))}
						</TextField>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<TextField
							required
							fullWidth
							select
							name="targetMarket"
							label="Mercado Objetivo"
							variant="outlined"
						>
							{TargetMarketList.sort().map((option) => (
								<MenuItem key={option} value={option.toUpperCase()}>
									{option}
								</MenuItem>
							))}
						</TextField>
					</Grid>
					<Grid item xs={12} sm={12} md={12}>
						<FormControlLabel
							control={<Checkbox />}
							label={
								<Typography variant="subtitle2">
									{'Acepto el '}
									<Link href="#!" rel="noopener noreferrer" target="_blank">
										<b>aviso de privacidad</b>
									</Link>
									{' y la jurisdicción aplicable.'}
								</Typography>
							}
						/>
					</Grid>
				</Grid>
			</form>
			<SignupButtonsContainer handleNext={handleSubmit} handleBack={handleBack} />
		</Stack>
	);
}

function HelperPopover() {
	const [anchorEl, setAnchorEl] = useState(null);

	const handlePopoverOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	return (
		<div
			style={{
				position: 'absolute',
				top: 7,
				right: -9,
			}}
		>
			<Avatar
				sx={{
					bgcolor: 'primary.main',
					width: 20,
					height: 20,
				}}
				aria-owns={open ? 'mouse-over-popover' : undefined}
				aria-haspopup="true"
				onMouseEnter={handlePopoverOpen}
				onMouseLeave={handlePopoverClose}
			>
				<QuestionMarkIcon fontSize="small" sx={{ fontSize: 15, color: 'primary.contrastText' }} />
			</Avatar>

			<Popover
				id="mouse-over-popover"
				sx={{
					pointerEvents: 'none',
				}}
				open={open}
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				onClose={handlePopoverClose}
				disableRestoreFocus
			>
				<Stack
					spacing={1}
					/* borderTop={3}
					borderColor="info.main" */
					p={2}
				>
					<Typography variant="subtitle1">Opciones Etapas de inversión</Typography>
					<Divider />
					{TargetMarketList.map((model, index) => (
						<Typography key={index}>
							• {model} -{' '}
							<Typography variant="caption" color="textSecondary">
								{model}
							</Typography>
						</Typography>
					))}
				</Stack>
			</Popover>
		</div>
	);
}

export default UserDataFormTab;
