import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import PostAddIcon from '@mui/icons-material/PostAdd';

import CardHeader from '@/components/cardHeader';

function ShareThougts() {
	return (
		<Card>
			<Stack spacing={3} direction="column">
				<CardHeader title="Share your thoughts" size="small" />
				<TextField placeholder="What's on your mind?" multiline minRows={4} />
				<Stack direction="row" justifyContent="space-between">
					<Button variant="contained" disableElevation>
						Share Post
					</Button>
					<Stack direction="row">
						<IconButton size="medium">
							<AddPhotoAlternateOutlinedIcon fontSize="inherit" />
						</IconButton>
						<IconButton size="medium">
							<AddLocationAltOutlinedIcon fontSize="inherit" />
						</IconButton>
						<IconButton size="medium">
							<PostAddIcon fontSize="inherit" />
						</IconButton>
					</Stack>
				</Stack>
			</Stack>
		</Card>
	);
}

export default ShareThougts;
