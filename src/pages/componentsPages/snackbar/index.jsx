import { useSnackbar, enqueueSnackbar } from 'notistack';
// MUI
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import PageHeader from '@/components/pageHeader';
import CardHeader from '@/components/cardHeader';

function SnackbarPage() {
	return (
		<>
			<PageHeader title="Snackbar / Toast">
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
					<Typography color="text.tertiary">Snackbar</Typography>
				</Breadcrumbs>
			</PageHeader>

			<Stack spacing={5}>
				<BasicSnackbarSection />
				<MuiSnackbarSection />
				<CustomSnackbarSection />
			</Stack>
		</>
	);
}

const MESSAGES = {
	success: {
		title: 'Well done! ',
		description: 'You successfully read this important alert message.',
	},
	info: {
		title: 'Heads up!',
		description: "This alert needs your attention, but it's not super important.",
	},
	warning: {
		title: 'Warning!',
		description: "Better check yourself, you're not looking too good.",
	},
	error: {
		title: 'Oh snap!',
		description: 'Change a few things up and try submitting again.',
	},
	default: {
		title: 'Attention',
		description: 'Pay attention to this alert',
	},
};

function BasicSnackbarSection() {
	const handleClick = () => {
		enqueueSnackbar(MESSAGES.default.description);
	};

	const handleClickVariant = (variant) => () => {
		// variant could be success, error, warning, info, or default
		enqueueSnackbar(MESSAGES?.[variant]?.description, { variant });
	};
	const handleClickVariantIconHide = (variant) => () => {
		enqueueSnackbar(MESSAGES?.[variant]?.description, { variant, hideIconVariant: true });
	};
	return (
		<Card component="section" type="section">
			<CardHeader title="Basic Snackbar" subtitle="We use notistack and its variants" />
			<Button variant="contained" disableElevation onClick={handleClick}>
				default
			</Button>
			<Typography variant="h5" mt={5}>
				Variants:
			</Typography>
			<Stack direction="row" spacing={3}>
				<Button variant="contained" color="success" disableElevation onClick={handleClickVariant('success')}>
					success
				</Button>
				<Button variant="contained" color="warning" disableElevation onClick={handleClickVariant('warning')}>
					warning
				</Button>
				<Button variant="contained" color="info" disableElevation onClick={handleClickVariant('info')}>
					info
				</Button>
				<Button variant="contained" color="error" disableElevation onClick={handleClickVariant('error')}>
					error
				</Button>
			</Stack>
			<Typography variant="h5" mt={5}>
				Variants without icon:
			</Typography>
			<Stack direction="row" spacing={3}>
				<Button
					variant="contained"
					color="success"
					disableElevation
					onClick={handleClickVariantIconHide('success')}
				>
					success
				</Button>
				<Button
					variant="contained"
					color="warning"
					disableElevation
					onClick={handleClickVariantIconHide('warning')}
				>
					warning
				</Button>
				<Button variant="contained" color="info" disableElevation onClick={handleClickVariantIconHide('info')}>
					info
				</Button>
				<Button
					variant="contained"
					color="error"
					disableElevation
					onClick={handleClickVariantIconHide('error')}
				>
					error
				</Button>
			</Stack>
		</Card>
	);
}
function MuiSnackbarSection() {
	const handleClickSeverity = (severity) => () => {
		// severity could be success, error, warning, info, or default
		enqueueSnackbar(MESSAGES?.[severity]?.description, { variant: 'muiSnackbar', severity });
	};
	const handleClickSeverityTitle = (severity) => () => {
		enqueueSnackbar(MESSAGES?.[severity]?.description, {
			variant: 'muiSnackbar',
			title: MESSAGES?.[severity]?.title,
			severity,
		});
	};
	const handleClickSeverityAction = (severity) => () => {
		enqueueSnackbar(MESSAGES?.[severity]?.description, {
			variant: 'muiSnackbar',
			severity,
			alertProps: {
				action: (
					<Button color="inherit" size="small">
						UNDO
					</Button>
				),
			},
		});
	};
	const handleClickSeverityActionClose = (severity) => () => {
		enqueueSnackbar(MESSAGES?.[severity]?.description, {
			variant: 'muiSnackbar',
			severity,
			alertProps: {
				onClose: () => {},
			},
		});
	};
	const handleClickSeverityOutlined = (severity) => () => {
		enqueueSnackbar(MESSAGES?.[severity]?.description, {
			variant: 'muiSnackbar',
			severity,
			alertProps: {
				variant: 'outlined',
			},
		});
	};
	const handleClickSeverityFilled = (severity) => () => {
		enqueueSnackbar(MESSAGES?.[severity]?.description, {
			variant: 'muiSnackbar',
			severity,
			alertProps: {
				variant: 'filled',
			},
		});
	};
	return (
		<Card component="section" type="section">
			<CardHeader title="MUI Snackbar" subtitle="We use MUI alert component" />

			<Typography variant="h5" mt={5}>
				Severity:
			</Typography>
			<Stack direction="row" spacing={3}>
				<Button variant="contained" color="success" disableElevation onClick={handleClickSeverity('success')}>
					success
				</Button>
				<Button variant="contained" color="warning" disableElevation onClick={handleClickSeverity('warning')}>
					warning
				</Button>
				<Button variant="contained" color="info" disableElevation onClick={handleClickSeverity('info')}>
					info
				</Button>
				<Button variant="contained" color="error" disableElevation onClick={handleClickSeverity('error')}>
					error
				</Button>
			</Stack>
			<Typography variant="h5" mt={5}>
				Variants with title:
			</Typography>
			<Stack direction="row" spacing={3}>
				<Button
					variant="contained"
					color="success"
					disableElevation
					onClick={handleClickSeverityTitle('success')}
				>
					success
				</Button>
				<Button
					variant="contained"
					color="warning"
					disableElevation
					onClick={handleClickSeverityTitle('warning')}
				>
					warning
				</Button>
				<Button variant="contained" color="info" disableElevation onClick={handleClickSeverityTitle('info')}>
					info
				</Button>
				<Button variant="contained" color="error" disableElevation onClick={handleClickSeverityTitle('error')}>
					error
				</Button>
			</Stack>
			<Typography variant="h5" mt={5}>
				Variant outlined
			</Typography>
			<Stack direction="row" spacing={3}>
				<Button
					variant="contained"
					color="success"
					disableElevation
					onClick={handleClickSeverityOutlined('success')}
				>
					success
				</Button>
				<Button
					variant="contained"
					color="warning"
					disableElevation
					onClick={handleClickSeverityOutlined('warning')}
				>
					warning
				</Button>
				<Button variant="contained" color="info" disableElevation onClick={handleClickSeverityOutlined('info')}>
					info
				</Button>
				<Button
					variant="contained"
					color="error"
					disableElevation
					onClick={handleClickSeverityOutlined('error')}
				>
					error
				</Button>
			</Stack>
			<Typography variant="h5" mt={5}>
				Variant Filled
			</Typography>
			<Stack direction="row" spacing={3}>
				<Button
					variant="contained"
					color="success"
					disableElevation
					onClick={handleClickSeverityFilled('success')}
				>
					success
				</Button>
				<Button
					variant="contained"
					color="warning"
					disableElevation
					onClick={handleClickSeverityFilled('warning')}
				>
					warning
				</Button>
				<Button variant="contained" color="info" disableElevation onClick={handleClickSeverityFilled('info')}>
					info
				</Button>
				<Button variant="contained" color="error" disableElevation onClick={handleClickSeverityFilled('error')}>
					error
				</Button>
			</Stack>
			<Typography variant="h5" mt={5}>
				Variants with Action:
			</Typography>
			<Stack direction="row" spacing={3} flexWrap="wrap">
				<Button
					variant="contained"
					color="success"
					disableElevation
					onClick={handleClickSeverityAction('success')}
				>
					success
				</Button>
				<Button
					variant="contained"
					color="warning"
					disableElevation
					onClick={handleClickSeverityAction('warning')}
				>
					warning
				</Button>
				<Button variant="contained" color="info" disableElevation onClick={handleClickSeverityAction('info')}>
					info
				</Button>
				<Button variant="contained" color="error" disableElevation onClick={handleClickSeverityAction('error')}>
					error
				</Button>
				<Button
					variant="contained"
					color="primary"
					disableElevation
					onClick={handleClickSeverityActionClose('success')}
				>
					close
				</Button>
			</Stack>
		</Card>
	);
}
function CustomSnackbarSection() {
	return (
		<Card component="section" type="section">
			<CardHeader title="Custom MUI Snackbar" subtitle="WIP" />
		</Card>
	);
}

export default SnackbarPage;
