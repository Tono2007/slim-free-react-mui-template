import { useState, forwardRef } from 'react';
// MUI
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Slide from '@mui/material/Slide';
import Collapse from '@mui/material/Collapse';
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';

import CardHeader from '@/components/cardHeader';
import Modal from '@/components/modal';

const SlideTransition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
const CollapseTransition = forwardRef((props, ref) => <Collapse orientation="vertical" ref={ref} {...props} />);
const FadeTransition = forwardRef((props, ref) => <Fade ref={ref} {...props} />);
const ZoomTransition = forwardRef((props, ref) => <Zoom ref={ref} {...props} />);

const TRANSITIONS = {
	slide: SlideTransition,
	collapse: CollapseTransition,
	fade: FadeTransition,
	zoom: ZoomTransition,
};

function OptionsModal() {
	const [isBasicModal, setIsBasicModal] = useState(false);
	const [type, setType] = useState('clean');
	const [maxWidth, setMaxWidth] = useState('xs');
	const [padding, setPadding] = useState('false');
	const [transition, setTransition] = useState('fade');

	const openModal = () => {
		setIsBasicModal(true);
	};
	const closeModal = () => {
		setIsBasicModal(false);
	};
	return (
		<>
			<Modal
				type={type}
				openModal={isBasicModal}
				maxWidth={maxWidth}
				padding={padding === 'true'}
				fnCloseModal={closeModal}
				title="Message Preview"
				TransitionComponent={TRANSITIONS?.[transition] || FadeTransition}
			>
				<Stack p={3} spacing={3}>
					<Typography variant="subtitle1">Why actual feminism is useless?</Typography>
					<Typography variant="body2" color="textSecondary">
						It is a long established fact that a reader will be distracted by the readable content of a page
						when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it
						look like readable English.
					</Typography>
					<Divider />
					<Stack direction="row" spacing={3} justifyContent="flex-end">
						<Button size="small" onClick={closeModal}>
							Save Changes
						</Button>
						<Button size="small" onClick={closeModal}>
							Close
						</Button>
					</Stack>
				</Stack>
			</Modal>

			<Card type="section">
				<CardHeader
					title="Modal Options"
					subtitle="Below is an interactive demo that lets you explore the visual results of the different settings:"
				/>
				<Box textAlign="center" border={4} p={5} borderColor="tertiary.main" sx={{ borderStyle: 'dotted' }}>
					<Button variant="contained" onClick={openModal}>
						Open Custom Modal
					</Button>
				</Box>
				<Stack spacing={3} mt={3}>
					<FormControl>
						<FormLabel id="modal type options">Type</FormLabel>
						<RadioGroup
							row
							aria-labelledby="modal type options"
							value={type}
							onChange={(e) => setType(e.target.value)}
						>
							<FormControlLabel value="contained" control={<Radio color="primary" />} label="Contained" />
							<FormControlLabel value="underline" control={<Radio color="primary" />} label="Underline" />
							<FormControlLabel value="clean" control={<Radio color="primary" />} label="Clean" />
						</RadioGroup>
					</FormControl>
					<FormControl>
						<FormLabel id="modal width options">Max Width</FormLabel>
						<RadioGroup
							row
							aria-labelledby="modal width options"
							value={maxWidth}
							onChange={(e) => setMaxWidth(e.target.value)}
						>
							<FormControlLabel value="xs" control={<Radio color="primary" />} label="xs" />
							<FormControlLabel value="sm" control={<Radio color="primary" />} label="sm" />
							<FormControlLabel value="md" control={<Radio color="primary" />} label="md" />
							<FormControlLabel value="lg" control={<Radio color="primary" />} label="lg" />
							<FormControlLabel value="xl" control={<Radio color="primary" />} label="xl" />
							<FormControlLabel
								value="fullScreen"
								control={<Radio color="primary" />}
								label="fullScreen"
							/>
						</RadioGroup>
					</FormControl>
					<FormControl>
						<FormLabel id="modal padding options">Padding</FormLabel>
						<RadioGroup
							row
							aria-labelledby="modal padding options"
							value={padding}
							onChange={(e) => setPadding(e.target.value)}
						>
							<FormControlLabel value="false" control={<Radio color="primary" />} label="false" />
							<FormControlLabel value="true" control={<Radio color="primary" />} label="true" />
						</RadioGroup>
					</FormControl>
					<FormControl>
						<FormLabel id="modal content options">Transitions</FormLabel>
						<RadioGroup
							row
							aria-labelledby="modal content options"
							value={transition}
							onChange={(e) => setTransition(e.target.value)}
						>
							<FormControlLabel value="slide" control={<Radio color="primary" />} label="Slide" />
							<FormControlLabel value="collapse" control={<Radio color="primary" />} label="Collapse" />
							<FormControlLabel value="fade" control={<Radio color="primary" />} label="Fade" />
							<FormControlLabel value="zoom" control={<Radio color="primary" />} label="Zoom" />
						</RadioGroup>
					</FormControl>
				</Stack>
			</Card>
		</>
	);
}

export default OptionsModal;
