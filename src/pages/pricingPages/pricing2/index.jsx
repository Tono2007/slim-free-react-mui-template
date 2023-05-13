import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// MUI Stuff
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Alert from '@mui/material/Alert';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Icons
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import DevicesIcon from '@mui/icons-material/Devices';
import SchoolIcon from '@mui/icons-material/School';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PeopleIcon from '@mui/icons-material/People';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import BusinessIcon from '@mui/icons-material/Business';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import StarsIcon from '@mui/icons-material/Stars';

import avatar from '@/assets/images/avatars/avatar_13.jpg';

const features = {
	free: [
		'Acceso a Estadisticas',
		'Acceso a contenidos gratuitos',
		'Acceso a tu Perfil',
		'Acceso a foros publicos',
		'Creación de comentarios y publicaciones en foros',
	],
	basic: [
		'Acceso a Estadisticas',
		'Acceso a contenidos exclusivos',
		'Acceso a tu Perfil',
		'Consulta de usuarios del ecosistema',
		'Chat entre participantes',
		'Acceso y creación de foros',
		'Creación de comentarios y publicaciones en foros',
	],
	pro: [
		'Acceso a Estadisticas',
		'Acceso con expertos',
		'Acceso a contenidos gratuitos',
		'Acceso a tu Perfil',
		'Acceso a foros publicos',
		'Creación de comentarios y publicaciones en foros',
	],
};
function Pricing2() {
	return (
		<>
			<Card>
				<Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
					<Avatar sx={{ width: 45, height: 45 }} alt="Remy Sharp" src={avatar} />
					<Typography variant="h5" flexGrow={1}>
						Elizabeth Lumaad Olsen
					</Typography>
					<Typography variant="subtitle2">
						Tipo Usuario: &nbsp;
						<Typography variant="caption" color="textPrimary" fontWeight="bold">
							Invitado
						</Typography>
					</Typography>
					<Typography variant="subtitle2">
						Tipo Cuenta: &nbsp;
						<Typography variant="caption" color="textPrimary" fontWeight="bold">
							Administrador
						</Typography>
					</Typography>
				</Stack>
			</Card>
			<Stack
				my={5}
				direction={{ xs: 'column', sm: 'row' }}
				spacing={2}
				alignItems="center"
				justifyContent="space-between"
			>
				<Typography variant="h4" textAlign="center" fontWeight="300" gutterBottom>
					Escoje tu Plan
				</Typography>
				<Alert severity="info">
					Tu plan actual es : <strong>Gratuito</strong>
				</Alert>
			</Stack>

			<Grid container spacing={7} alignItems="stretch" alignContent="stretch" mb={10}>
				<Grid item xs={12} sm={6} md={4}>
					<PriceCard icon={StarBorderIcon} type="Gratuito" price="0.0" isActual features={features.free} />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<PriceCard icon={StarIcon} type="Basico" price="5.99" features={features.basic} main />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<PriceCard icon={StarsIcon} type="Pro" price="23.99" features={features.pro} />
				</Grid>
			</Grid>
			<FeaturesTable />
		</>
	);
}

function PriceCard(props) {
	const { type, isActual, icon: Icon, price, features, upgradeAccount, main } = props;

	return (
		<Stack
			component={Card}
			height="100%"
			p={3}
			direction="column"
			spacing={2}
			sx={{
				overflow: 'visible',
				transition: 'all 0.5s',
				position: 'relative',
				border: main ? 2 : 0,
				borderColor: main ? 'primary.main' : 'border',
				'&:hover': {
					transform: 'translateY(-10px)',
				},
			}}
		>
			<Box
				height={80}
				width={80}
				position="absolute"
				top={-10}
				left={-10}
				sx={{
					display: 'grid',
					placeItems: 'center',
					overflow: 'hidden',
					'&::before': {
						position: 'absolute',
						content: "'Best Value'",
						fontSize: 8,
						width: '150%',
						height: 30,
						display: 'grid',
						placeItems: 'center',
						textTransform: 'uppercase',
						color: 'cuaternary.contrastText',
						fontWeight: 'bold',
						bgcolor: 'cuaternary.main',
						transform: 'rotate(-45deg) translateY(-15px)',
						letterSpacing: '.1em',
						boxShadow: 27,
					},
					'&::after': {
						content: "''",
						position: 'absolute',
						bottom: 0,
						left: 0,
						zIndex: -1,
						width: 10,
						height: 10,
						bgcolor: 'cuaternary.dark',
						boxShadow: (theme) => `71px -70px ${theme.palette.cuaternary.dark}`,
					},
				}}
			/>
			<Stack direction="row" alignItems="center" justifyContent="space-between">
				<Avatar
					sx={{
						backgroundColor: 'cuaternary.main',
					}}
				>
					<Icon />
				</Avatar>
				<Typography
					fontSize="20px"
					textAlign="center"
					fontWeight="400"
					borderBottom={2}
					borderColor="secondary.main"
				>
					{type}
				</Typography>
			</Stack>

			<Typography textAlign="center" variant="h1" component="h5">
				${price} <Typography variant="caption">Pago único</Typography>
			</Typography>
			<Divider variant="middle" />
			<Stack spacing={1.5} py={2} flexGrow={1}>
				{features.map((feature, index) => (
					<Feature title={feature} key={index} />
				))}
			</Stack>
			{isActual ? (
				<Button variant="contained" disabled>
					Mejorar Cuenta
				</Button>
			) : (
				<Button variant="contained" onClick={upgradeAccount}>
					Mejorar Cuenta
				</Button>
			)}
		</Stack>
	);
}

function Feature({ title, addSX, ...props }) {
	return (
		<Stack
			direction="row"
			spacing={2}
			alignItems="center"
			sx={{
				transition: 'transform .3s',
				'&:hover': {
					transform: 'translateX(10px)',
					'& .MuiTypography-root': {
						color: (theme) => theme.palette.secondary.dark,
					},
				},
				...addSX,
			}}
			{...props}
		>
			<CheckCircleOutlineIcon color="success" />
			<Typography variant="body1" color="textSecondary">
				{title}
			</Typography>
		</Stack>
	);
}

const FEAT_STAT_TYPES = {
	check: 'type-check',
	none: 'type-none',
	text: 'type-text',
};

const tableFeatures = [
	{
		name: 'Basic Features',
		free: {
			type: FEAT_STAT_TYPES.check,
		},
		basic: {
			type: FEAT_STAT_TYPES.check,
		},
		pro: {
			type: FEAT_STAT_TYPES.check,
		},
	},
	{
		name: 'Users',
		free: {
			type: FEAT_STAT_TYPES.text,
			text: '10',
		},
		basic: {
			type: FEAT_STAT_TYPES.text,
			text: '20',
		},
		pro: {
			type: FEAT_STAT_TYPES.text,
			text: 'Unlimited',
		},
	},
	{
		name: 'Individual Data',
		free: {
			type: FEAT_STAT_TYPES.text,
			text: '200GB',
		},
		basic: {
			type: FEAT_STAT_TYPES.text,
			text: '400GB',
		},
		pro: {
			type: FEAT_STAT_TYPES.text,
			text: 'Unlimited',
		},
	},
	{
		name: 'Support',
		free: {
			type: FEAT_STAT_TYPES.check,
		},
		basic: {
			type: FEAT_STAT_TYPES.check,
		},
		pro: {
			type: FEAT_STAT_TYPES.check,
		},
	},
	{
		name: 'Automated Workflows',
		free: {
			type: FEAT_STAT_TYPES.none,
		},
		basic: {
			type: FEAT_STAT_TYPES.check,
		},
		pro: {
			type: FEAT_STAT_TYPES.check,
		},
	},
	{
		name: '200+ Integrations',
		free: {
			type: FEAT_STAT_TYPES.none,
		},
		basic: {
			type: FEAT_STAT_TYPES.check,
		},
		pro: {
			type: FEAT_STAT_TYPES.check,
		},
	},
];

function FeaturesTable() {
	return (
		<Card type="none">
			<TableContainer>
				<Table aria-label="results table">
					<TableHead
						sx={{
							bgcolor: 'primary.main',
							'& .MuiTableCell-head': {
								color: 'primary.contrastText',
							},
						}}
					>
						<TableRow>
							<TableCell align="left" />
							<TableCell align="center">Free</TableCell>
							<TableCell align="center">Basic</TableCell>
							<TableCell align="center">Pro</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{tableFeatures.map((feat, i) => (
							<TableRow hover key={i}>
								<TableCell align="left">
									<Typography variant="subtitle1">{feat.name}</Typography>
								</TableCell>
								<TableCellType type={feat?.free?.type} text={feat?.free?.text} />
								<TableCellType type={feat?.basic?.type} text={feat?.basic?.text} />
								<TableCellType type={feat?.pro?.type} text={feat?.pro?.text} />
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Card>
	);
}

function TableCellType({ cellProps, type, text }) {
	return (
		<TableCell align="center" {...cellProps}>
			{type === FEAT_STAT_TYPES.check && <CheckCircleOutlineIcon color="success" />}
			{type === FEAT_STAT_TYPES.none && '--'}
			{type === FEAT_STAT_TYPES.text && text}
		</TableCell>
	);
}

export default Pricing2;
