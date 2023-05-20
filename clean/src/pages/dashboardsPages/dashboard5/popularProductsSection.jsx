import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';

import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

import CardHeader from '@/components/cardHeader';

const PRODUCTS_DATA = [
	{
		id: 'PD-1754',
		name: 'US 360 Home Security IP Camera Night',
		earnings: 1885,
		expenses: '12,056',
	},
	{
		id: 'PD-1753',
		name: 'US KS-5 Junior Lite DVD Karaoke 9500',
		earnings: 1862,
		expenses: '13,113',
	},
	{
		id: 'PD-1752',
		name: 'US 360 Home Security IP Camera Night',
		earnings: 1799,
		expenses: '11,091',
	},
];

function PopularProductsSection() {
	return (
		<section>
			<Header />
			<Grid container spacing={2}>
				{PRODUCTS_DATA.map((product) => (
					<Grid item xs={12} sm={6} md={4} key={product.id}>
						<ProductCard product={product} />
					</Grid>
				))}
			</Grid>
		</section>
	);
}

function ProductCard({ product }) {
	const { id, name, earnings, expenses } = product;
	return (
		<Card>
			<Stack>
				<Typography variant="caption">Product ID: #{id}</Typography>
				<Typography variant="subtitle1">{name} </Typography>
				<Typography variant="caption">
					By:
					<Link href="!#" underline="none">
						&nbsp;AY Dev Company
					</Link>
				</Typography>
				<Stack mt={2} divider={<Divider orientation="vertical" flexItem />} direction="row" spacing={2}>
					<div>
						<Typography variant="subtitle1" fontSize={30}>
							{earnings}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Earnings for today
						</Typography>
					</div>
					<div>
						<Typography variant="subtitle1" fontSize={30}>
							${expenses}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Expenses for today
						</Typography>
					</div>
				</Stack>
			</Stack>
		</Card>
	);
}
function Header() {
	return (
		<CardHeader
			size="large"
			title="Most Popular Products"
			subtitle={
				<>
					<CalendarMonthOutlinedIcon fontSize="small" /> January 01, 2023 - January 31, 2023
				</>
			}
		>
			<Stack direction="row" alignItems="center" spacing={1}>
				<Button variant="contained" size="medium" color="primary">
					Top Rated Products
				</Button>
				<Button variant="contained" size="medium" color="primary">
					View All Products
				</Button>
			</Stack>
		</CardHeader>
	);
}

export default PopularProductsSection;
