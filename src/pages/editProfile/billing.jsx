import { useState } from 'react';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Switch from '@mui/material/Switch';
import Chip from '@mui/material/Chip';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import EditIcon from '@mui/icons-material/Edit';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import StarsIcon from '@mui/icons-material/Stars';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import CardHeader from '@/components/cardHeader';

import visa from '@/assets/images/visa_card.png';
import discover from '@/assets/images/discover_card.png';
import mastercard from '@/assets/images/mastercard_card.png';

const planStats = [
	{
		title: 'Bill Due',
		subtitle: '$150.00',
		btnText: 'Pay Now',
		color: 'error',
	},
	{
		title: 'Total Credits',
		subtitle: '1570 GB',
		btnText: 'Full Report',
		color: 'cuaternary',
	},
	{
		title: 'Plan',
		subtitle: 'Basic',
		btnText: 'Upgrade?',
		color: 'success',
	},
];
function Billing() {
	return (
		<Stack spacing={6}>
			<ChangePlanSection />
			<PaymentSection />
		</Stack>
	);
}

const plansData = [
	{
		type: 'Startup',
		cost: '0.00',
		Icon: StarBorderIcon,
	},
	{
		type: 'Standard',
		cost: '4.99',
		Icon: StarIcon,
		using: true,
	},
	{
		type: 'Business',
		cost: '29.99',
		Icon: StarsIcon,
	},
];

function ChangePlanSection() {
	const [userTypeSelected, setUserTypeSelected] = useState('Standard');

	return (
		<Card type="section">
			<CardHeader title="Change Plan" subtitle="You can upgrade and downgrade whenever you want" />
			<Stack spacing={3} direction={{ xs: 'column', md: 'row' }}>
				{plansData.map(({ type, cost, Icon, using }) => (
					<UserPlanCard
						key={type}
						type={type}
						cost={cost}
						Icon={Icon}
						using={using}
						setUserTypeSelected={() => setUserTypeSelected(type)}
						userTypeSelected={userTypeSelected === type}
					/>
				))}
			</Stack>
		</Card>
	);
}

function UserPlanCard({ cost, Icon, type, using, userTypeSelected, setUserTypeSelected }) {
	return (
		<Stack
			width="100%"
			direction="column"
			onClick={setUserTypeSelected}
			component="button"
			spacing={2}
			py={3}
			px={{
				xs: 2,
				sm: 4,
			}}
			sx={{
				cursor: 'pointer',
				bgcolor: 'background.paper',
				transition: '0.1s all',
				border: 2,
				borderColor: userTypeSelected ? 'primary.300' : 'text.hint',
				borderRadius: '10px',
				'&:hover': {
					boxShadow: '0px 10px 30px -15px #0003',
				},
			}}
		>
			<Icon color="primary" fontSize="medium" />

			<Typography variant="h3" align="left">
				${cost}
				<Typography variant="caption">/mo</Typography>
			</Typography>
			<Stack direction="row" justifyContent="space-between" spacing={3} width="100%">
				<Typography variant="subtitle1" align="left" textTransform="uppercase">
					{type}
				</Typography>
				{using && (
					<Typography variant="caption" color="success.main">
						Using Now
					</Typography>
				)}
			</Stack>
		</Stack>
	);
}

const paymentMethodsData = [
	{
		img: visa,
		type: 'Visa Card',
		card: '5269 07XX XXXX 8110',
		isdefault: true,
	},
	{
		img: discover,
		type: 'Discover',
		card: '6109 07XX XXXX 8020',
		isdefault: false,
	},
	{
		img: mastercard,
		type: 'Mastercard',
		card: '7278 07XX XXXX 4290',
		isdefault: false,
	},
];

const historyData = [
	{
		id: '12877227695',
		date: '26 Feb 2021 9:16 am',
		price: '56.32',
		status: 'Awaiting',
	},
	{
		id: '12901477937',
		date: '30 Jan 2021 2:54 pm',
		price: '75.56',
		status: 'Paid',
	},
	{
		id: '12767886919',
		date: '22 Jan 2021 12:01 pm',
		price: '34.23',
		status: 'Paid',
	},
];
function PaymentSection() {
	return (
		<Card type="section">
			<CardHeader title="Stats" />
			<Stack spacing={6} direction="column">
				<Stack spacing={3} direction={{ xs: 'column', md: 'row' }} width="100%">
					{planStats.map(({ title, subtitle, btnText, color }, i) => (
						<PlanStat key={i} title={title} subtitle={subtitle} btnText={btnText} color={color} />
					))}
				</Stack>
				<Box border={1} borderColor="border" p={2} borderRadius="10px">
					<CardHeader size="small" title="Payment Methods" sx={{ mb: 1 }}>
						<Button variant="contained">Add New Method</Button>
					</CardHeader>
					<Divider />
					<Stack>
						{paymentMethodsData.map((card, i) => (
							<PaymentMethod card={card} key={i} />
						))}
					</Stack>
				</Box>
				<Box border={1} borderColor="border" p={2} borderRadius="10px">
					<CardHeader size="small" title="Billing History" sx={{ mb: 1 }} />
					<TableContainer>
						<Table aria-label="results table">
							<TableHead
								sx={{
									bgcolor: 'background.paper',
								}}
							>
								<TableRow>
									<TableCell>Order No.</TableCell>
									<TableCell align="left">Date</TableCell>
									<TableCell align="right">Price</TableCell>
									<TableCell align="right">Status</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{historyData.map(({ id, date, price, status }) => (
									<TableRow hover key={id}>
										<TableCell>{id}</TableCell>
										<TableCell align="left">{date}</TableCell>
										<TableCell align="right">${price}</TableCell>
										<TableCell align="right">
											{status === 'Paid' ? (
												<Chip label={status} color="success" size="small" />
											) : (
												<Chip label={status} color="warning" size="small" />
											)}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</Stack>
		</Card>
	);
}

function PlanStat({ title, subtitle, btnText, color }) {
	return (
		<Stack
			width="100%"
			border={1}
			borderLeft={10}
			borderColor={`${color}.main`}
			p={2}
			borderRadius="10px"
			spacing={0.5}
		>
			<Typography variant="body2">{title}</Typography>
			<Typography variant="h4">{subtitle}</Typography>
			<Button endIcon={<ArrowRightAltIcon />} sx={{ width: 'fit-content' }} size="small" color={color}>
				{btnText}
			</Button>
		</Stack>
	);
}

function PaymentMethod({ card }) {
	const { img, type, card: cardNumber, isdefault } = card;
	return (
		<Stack direction="row" alignItems="center" spacing={2}>
			<Box component="img" src={img} width={60} height={60} />
			<div style={{ flexGrow: 1 }}>
				<Typography variant="subtitle1">{type}</Typography>
				<Typography variant="subtitle2">Ending in {cardNumber}</Typography>
			</div>
			{isdefault ? <Chip label="Default" size="small" /> : <Link href="#!">Make Default</Link>}
			<Link href="#!">Edit</Link>
		</Stack>
	);
}

export default Billing;
