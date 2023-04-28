import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import CardHeader from '@/components/cardHeader';

function ContactCard() {
	return (
		<Card>
			<CardHeader title="Quick contact form" size="small" sx={{ mb: 2 }} />
			<Stack spacing={2} direction="column">
				<TextField id="outlined-basic" placeholder="Enter your Name" variant="outlined" />
				<TextField id="outlined-basic" placeholder="Enter your Email" variant="outlined" />
				<TextField placeholder="Enter your message" multiline minRows={4} />
				<Button variant="contained" disableElevation>
					Send message
				</Button>
			</Stack>
		</Card>
	);
}

export default ContactCard;
