import { useState } from 'react';
// MUI
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import PageHeader from '@/components/pageHeader';
import CardHeader from '@/components/cardHeader';
import Modal from '@/components/modal';
import ModalOptions from './modalOptions';

function ModalComponentPage() {
	return (
		<>
			<PageHeader title="Modal Elements">
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
					<Typography color="text.tertiary">Modal</Typography>
				</Breadcrumbs>
			</PageHeader>

			<Stack spacing={5}>
				<BasicModal />
				<ModalOptions />
			</Stack>
		</>
	);
}
function BasicModal() {
	const [isBasicModal, setIsBasicModal] = useState(false);

	const openModal = () => {
		setIsBasicModal(true);
	};
	const closeModal = () => {
		setIsBasicModal(false);
	};
	return (
		<>
			<Modal openModal={isBasicModal} fnCloseModal={closeModal} title="Basic Modal Message" padding>
				<Box height="50vh">Content</Box>
			</Modal>
			<Card type="section">
				<CardHeader title="Basic Modal" subtitle="Below is the static example of the basic custom modal." />
				<Box textAlign="center" border={4} p={5} borderColor="tertiary.main" sx={{ borderStyle: 'dotted' }}>
					<Button variant="contained" onClick={openModal}>
						Open Modal
					</Button>
				</Box>
			</Card>
		</>
	);
}

export default ModalComponentPage;
