import { useState } from 'react';
import InputMask from 'react-input-mask';
import MaskedInput from 'react-text-mask';
import { useForm } from 'react-hook-form';

// MUI
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import PaidIcon from '@mui/icons-material/Paid';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

import PageHeader from '@/components/pageHeader';
import CardHeader from '@/components/cardHeader';
import FormInput from '@/components/formInput';

function FormsComponentPage() {
	return (
		<>
			<PageHeader title="Form Elements">
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
					<Typography color="text.tertiary">Forms</Typography>
				</Breadcrumbs>
			</PageHeader>
			<Stack direction="column" spacing={5}>
				<BasicFormSection variant="outlined" />
				<BasicFormSection variant="filled" />
				<BasicFormSection variant="standard" />
				<BasicInputColorSection />
				<HelperInputSection />
				<InputGroupsSection />
				<InputMaskSection />
				<FormValidatorSection />
			</Stack>
		</>
	);
}
function BasicFormSection({ variant }) {
	return (
		<Card type="section">
			<CardHeader
				title={`Basic form input ${variant}`}
				subtitle="A basic form control with disabled and readonly mode."
			/>
			<Grid container rowSpacing={2} columnSpacing={4}>
				<Grid item xs={12} sm={4}>
					<TextField label="Input box" variant={variant} fullWidth />
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField
						InputProps={{
							readOnly: true,
						}}
						value="read only value"
						label="Input box (readonly)"
						variant={variant}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField disabled label="Input box (disabled)" variant={variant} fullWidth />
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField multiline minRows={4} label="Textarea" variant={variant} fullWidth />
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField
						InputProps={{
							readOnly: true,
						}}
						value="read only value"
						multiline
						minRows={4}
						label="Textarea (readonly)"
						variant={variant}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField disabled multiline minRows={4} label="Textarea (disabled)" variant={variant} fullWidth />
				</Grid>
			</Grid>
		</Card>
	);
}
function InputGroupsSection() {
	return (
		<Card type="section">
			<CardHeader
				title="Input Groups"
				subtitle="Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs."
			/>
			<Grid container rowSpacing={2} columnSpacing={4}>
				<Grid item xs={12} sm={4} md={4}>
					<TextField
						label="Usuario"
						variant="outlined"
						fullWidth
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AccountCircleIcon />
								</InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={4} md={4}>
					<TextField
						label="Usuario"
						variant="filled"
						fullWidth
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AccountCircleIcon />
								</InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={4} md={4}>
					<TextField
						label="Usuario"
						variant="standard"
						fullWidth
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AccountCircleIcon />
								</InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={4} md={4}>
					<TextField
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
						}}
						placeholder="Busqueda de Usuarios"
						variant="outlined"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={4} md={4}>
					<TextField
						color="primary"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton color="primary">
										<SearchIcon />
									</IconButton>
								</InputAdornment>
							),

							sx: {
								pr: 0,
								borderRadius: '30px',
							},
						}}
						placeholder="Buscar"
						variant="outlined"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={4} md={4}>
					<TextField
						label="Costo"
						variant="outlined"
						fullWidth
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<PaidIcon />
								</InputAdornment>
							),
							endAdornment: <InputAdornment position="end">.00</InputAdornment>,
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={4} md={4}>
					<TextField
						variant="outlined"
						fullWidth
						placeholder="Costo"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AttachMoneyIcon />
								</InputAdornment>
							),
							endAdornment: <InputAdornment position="end">.00</InputAdornment>,
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={4} md={4}>
					<Stack direction="row">
						<Box
							border={1}
							borderRight={0}
							px={1}
							display="grid"
							bgcolor="background.default"
							borderColor="border"
							sx={{ placeItems: 'center' }}
						>
							<AttachMoneyIcon color="action" />
						</Box>
						<TextField placeholder="Cost" variant="outlined" fullWidth />
						<Box
							border={1}
							borderLeft={0}
							px={1}
							display="grid"
							bgcolor="background.default"
							borderColor="border"
							sx={{ placeItems: 'center' }}
						>
							.00
						</Box>
					</Stack>
				</Grid>
				<Grid item xs={12} sm={4} md={4}>
					<Stack direction="row">
						<Box
							border={1}
							borderRight={0}
							px={1}
							display="grid"
							bgcolor="background.default"
							borderColor="border"
							sx={{ placeItems: 'center' }}
						>
							<PaidIcon color="action" />
						</Box>
						<TextField placeholder="Cost" variant="outlined" fullWidth />
						<Box
							border={1}
							borderLeft={0}
							px={1}
							display="grid"
							bgcolor="background.default"
							borderColor="border"
							sx={{ placeItems: 'center' }}
						>
							.00
						</Box>
					</Stack>
				</Grid>
				<Grid item xs={12} sm={4} md={4}>
					<Stack direction="row">
						<Box
							border={1}
							borderRight={0}
							px={1}
							display="grid"
							bgcolor="background.default"
							borderColor="border"
							sx={{ placeItems: 'center' }}
						>
							<AccountCircleIcon color="action" />
						</Box>
						<TextField placeholder="Nombre de Usuario" variant="outlined" fullWidth />
					</Stack>
				</Grid>
				<Grid item xs={12} sm={4} md={4}>
					<Stack direction="row">
						<TextField placeholder="Email" variant="outlined" fullWidth />
						<Typography
							component="div"
							border={1}
							borderLeft={0}
							variant="body2"
							px={1}
							display="grid"
							bgcolor="background.default"
							borderColor="border"
							sx={{ placeItems: 'center' }}
						>
							@x.com
						</Typography>
					</Stack>
				</Grid>
			</Grid>
		</Card>
	);
}
function HelperInputSection() {
	return (
		<Card type="section">
			<CardHeader title="Helpers Input" subtitle="Cuadro de ayuda popover" />
			<Grid container rowSpacing={2} columnSpacing={4}>
				<Grid item xs={12} sm={6} md={4} sx={{ position: 'relative' }}>
					<TextField label="Outlined popover" fullWidth />
					<HelperPopover>
						<Stack spacing={1} borderTop={3} borderColor="info.main" p={2}>
							<Typography variant="subtitle1">Cuadro de ayuda popover</Typography>
							<Divider />
							{[1, 2, 3, 4].map((model, index) => (
								<Typography key={index}>
									• Llena este campo -&nbsp;
									<Typography variant="caption" color="textSecondary">
										ej.
									</Typography>
								</Typography>
							))}
						</Stack>
					</HelperPopover>
				</Grid>
				<Grid item xs={12} sm={6} md={4} sx={{ position: 'relative' }}>
					<TextField label="Filled popover" variant="filled" fullWidth />
					<HelperPopover>
						<Stack spacing={1} borderTop={3} borderColor="success.main" p={2}>
							<Typography variant="subtitle1">Cuadro de ayuda popover</Typography>
							<Divider />
							{[1, 2].map((model, index) => (
								<Typography key={index}>
									• Llena este campo -&nbsp;
									<Typography variant="caption" color="textSecondary">
										ej.
									</Typography>
								</Typography>
							))}
						</Stack>
					</HelperPopover>
				</Grid>
				<Grid item xs={12} sm={6} md={4} sx={{ position: 'relative' }}>
					<TextField label="Standard popover" variant="standard" fullWidth />
					<HelperPopover>
						<Stack spacing={1} p={2}>
							<Typography variant="subtitle1">Cuadro de ayuda popover</Typography>
							<Divider />
							{[1, 2].map((model, index) => (
								<Typography key={index}>
									• Llena este campo -&nbsp;
									<Typography variant="caption" color="textSecondary">
										ej.
									</Typography>
								</Typography>
							))}
						</Stack>
					</HelperPopover>
				</Grid>
				<Grid item xs={12} sm={6} md={4} sx={{ position: 'relative' }}>
					<TextField label="MUI Helper text" variant="outlined" helperText="helper Text" fullWidth />
				</Grid>
			</Grid>
		</Card>
	);
}
function HelperPopover({ children }) {
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
				sx={{ bgcolor: 'primary.main', width: 20, height: 20, zIndex: 9 }}
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
				{children}
			</Popover>
		</div>
	);
}
function BasicInputColorSection() {
	return (
		<Card type="section">
			<CardHeader title="Color Inputs" />
			<Grid container rowSpacing={2} columnSpacing={4}>
				<Grid item xs={12} sm={6} md={4}>
					<TextField label="Outlined secondary" color="secondary" fullWidth />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<TextField label="Filled success" variant="filled" color="success" fullWidth />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<TextField label="Standard tertiary" variant="standard" color="tertiary" fullWidth />
				</Grid>
			</Grid>
		</Card>
	);
}

function InputMaskSection() {
	const [telInput, setTelInput] = useState('');
	const [telInput2, setTelInput2] = useState('');
	const [telInput3, setTelInput3] = useState('');
	const [telInput4, setTelInput4] = useState('');
	const [telInput5, setTelInput5] = useState('');
	const [dateInput, setDateInput] = useState('');
	const [dateInput2, setDateInput2] = useState('');
	return (
		<Card type="section">
			<CardHeader
				title="Input Mask"
				subtitle="Input masks allows a user to more easily enter fixed width input where you would like them to enter the data in a certain format (dates,phones, etc)."
			/>
			<Grid container rowSpacing={2} columnSpacing={4}>
				<Grid item xs={12} sm={6} md={4}>
					<MaskedInput
						mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
						placeholderChar="_"
						render={(ref, props) => (
							<TextField label="Text-Mask" required inputRef={ref} {...props} fullWidth />
						)}
					/>
				</Grid>
				<Grid item xs={6} sm={4} md={4}>
					<MaskedInput
						mask={[
							'+',
							'1',
							' ',
							'(',
							/[1-9]/,
							/\d/,
							/\d/,
							')',
							' ',
							/\d/,
							/\d/,
							/\d/,
							'-',
							/\d/,
							/\d/,
							/\d/,
							/\d/,
						]}
						placeholderChar="_"
						value={telInput5}
						onChange={(e) => setTelInput5(e.target.value)}
						render={(ref, props) => (
							<TextField label="Text-Mask" required inputRef={ref} {...props} fullWidth />
						)}
					/>
				</Grid>

				<Grid item xs={6} sm={4} md={4}>
					<InputMask mask="99/99/9999" value={dateInput} onChange={(e) => setDateInput(e.target.value)}>
						{(inputProps) => <TextField {...inputProps} fullWidth placeholder="DD/MM/YYYY" />}
					</InputMask>
				</Grid>
				<Grid item xs={6} sm={4} md={4}>
					<InputMask mask="99/99/9999" value={dateInput2} onChange={(e) => setDateInput2(e.target.value)}>
						{(inputProps) => <TextField {...inputProps} fullWidth label="Fecha Nacimiento" />}
					</InputMask>
				</Grid>
				<Grid item xs={6} sm={4} md={4}>
					<InputMask mask="(999) 999-9999" value={telInput} onChange={(e) => setTelInput(e.target.value)}>
						{(inputProps) => (
							<TextField {...inputProps} type="tel" fullWidth placeholder="(999) 999-9999" />
						)}
					</InputMask>
				</Grid>
				<Grid item xs={6} sm={4} md={4}>
					<InputMask mask="(999) 999-9999" value={telInput2} onChange={(e) => setTelInput2(e.target.value)}>
						{(inputProps) => <TextField {...inputProps} type="tel" fullWidth label="Phone number" />}
					</InputMask>
				</Grid>
				<Grid item xs={6} sm={4} md={4}>
					<InputMask mask="999-99-9999" value={telInput3} onChange={(e) => setTelInput3(e.target.value)}>
						{(inputProps) => <TextField {...inputProps} type="tel" fullWidth placeholder="999-99-9999" />}
					</InputMask>
				</Grid>
				<Grid item xs={6} sm={4} md={4}>
					<InputMask
						mask={'+4\\ 999-99-9999'}
						value={telInput4}
						onChange={(e) => setTelInput4(e.target.value)}
					>
						{(inputProps) => (
							<TextField {...inputProps} type="tel" fullWidth placeholder="+4 999-99-9999" />
						)}
					</InputMask>
				</Grid>
			</Grid>
		</Card>
	);
}

const FORM_SCHEMA = {
	nombre: { required: 'Campo Nombre es requerido' },
	apellidos: { required: 'Campo Apellidos es requerido' },
	textArea: { required: 'Campo Textarea es requerido' },
	select: { required: 'Campo select es requerido' },
	contraseña: {
		required: 'Campo contraseña es requerido',
		minLength: {
			value: 8,
			message: 'Contraseña muy corta',
		},
	},
};
function FormValidatorSection() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			nombre: '',
			apellidos: '',
			contraseña: '',
		},
	});
	const {
		register: register2,
		handleSubmit: handleSubmit2,
		formState: { errors: errors2 },
	} = useForm({ mode: 'onChange' });
	const {
		control: control2,
		handleSubmit: handleSubmit3,
		formState: { errors: errors3, dirtyFields },
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			nombre: '',
			apellidos: '',
			contraseña: '',
			textArea: '',
			select: '',
		},
	});
	const onSubmit = (data) => console.log(data);

	return (
		<>
			<Card type="section">
				<CardHeader title="Valid state Input- React Hook Form" />
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6} md={4}>
						<Typography variant="subtitle2">FormInput - Controller</Typography>
						<Divider sx={{ my: 2, borderColor: 'primary.main' }} />
						<form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
							<FormInput
								margin="dense"
								name="nombre"
								control={control}
								rules={FORM_SCHEMA.nombre}
								errors={errors}
								label="Nombre"
								fullWidth
							/>

							<FormInput
								margin="dense"
								name="apellidos"
								control={control}
								rules={FORM_SCHEMA.apellidos}
								errors={errors}
								label="Apellidos"
								fullWidth
							/>
							<FormInput
								type="password"
								margin="dense"
								name="contraseña"
								control={control}
								rules={FORM_SCHEMA.contraseña}
								errors={errors}
								label="Contraseña"
								fullWidth
							/>

							<Button type="submit" variant="contained" fullWidth>
								Submit
							</Button>
						</form>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<form autoComplete="off" onSubmit={handleSubmit2(onSubmit)}>
							<Typography variant="subtitle2">! Register </Typography>
							<Divider sx={{ my: 2, borderColor: 'primary.main' }} />
							<TextField
								label="Nombre"
								margin="dense"
								helperText={errors2?.nombre2?.message || ' '}
								error={!!errors2?.nombre2}
								{...register2('nombre2', FORM_SCHEMA.nombre)}
								fullWidth
							/>
							<TextField
								label="Apellidos"
								margin="dense"
								helperText={errors2?.apellidos2?.message || ' '}
								error={!!errors2?.apellidos2}
								{...register2('apellidos2', FORM_SCHEMA.apellidos)}
								fullWidth
							/>
							<TextField
								label="Contraseña"
								margin="dense"
								helperText={errors2?.contraseña2?.message || ' '}
								error={!!errors2?.contraseña2}
								{...register2('contraseña2', FORM_SCHEMA.contraseña)}
								fullWidth
							/>
							<Button type="submit" variant="contained" fullWidth>
								Submit
							</Button>
						</form>
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<form autoComplete="off" onSubmit={handleSubmit3(onSubmit)}>
							<Typography variant="subtitle2">FormInput - Custom</Typography>
							<Divider sx={{ my: 2, borderColor: 'primary.main' }} />
							<FormInput
								name="nombre"
								margin="dense"
								dirtyFields={dirtyFields}
								control={control2}
								rules={FORM_SCHEMA.nombre}
								errors={errors3}
								label="Nombre"
								fullWidth
							/>
							<FormInput
								name="apellidos"
								margin="dense"
								dirtyFields={dirtyFields}
								control={control2}
								rules={FORM_SCHEMA.apellidos}
								errors={errors3}
								label="Apellidos"
								fullWidth
							/>
							<FormInput
								name="contraseña"
								margin="dense"
								type="password"
								dirtyFields={dirtyFields}
								control={control2}
								rules={FORM_SCHEMA.contraseña}
								errors={errors3}
								label="Contraseña"
								fullWidth
							/>
							<FormInput
								label="TextArea"
								name="textArea"
								margin="dense"
								dirtyFields={dirtyFields}
								control={control2}
								rules={FORM_SCHEMA.textArea}
								errors={errors3}
								multiline
								minRows={4}
								fullWidth
							/>
							<FormInput
								label="Select"
								name="select"
								margin="dense"
								dirtyFields={dirtyFields}
								control={control2}
								rules={FORM_SCHEMA.select}
								errors={errors3}
								select
								fullWidth
							>
								{[1, 2, 3, 4, 5].map((option) => (
									<MenuItem key={option} value={option}>
										opcion no. {option}
									</MenuItem>
								))}
							</FormInput>

							<Button type="submit" variant="contained" fullWidth>
								Submit
							</Button>
						</form>
					</Grid>
				</Grid>
			</Card>
			<Card type="section">
				<CardHeader title="Valid state Input- Formik" subtitle="A form control with success and error state." />
				WIP
			</Card>
		</>
	);
}

export default FormsComponentPage;
