import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';

import CardHeader from '@/components/cardHeader';

function SuggestedPeople() {
	return (
		<Card type="none">
			<CardHeader
				title="People you may know"
				subtitle="Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi."
				size="small"
				sx={{ p: 3, pb: 0 }}
			/>
			<List
				sx={{
					'& > li:not(:last-child)': {
						borderBottom: 1,
						borderColor: (theme) => theme.palette.border,
					},
				}}
			>
				<UserListItem />
				<UserListItem />
				<UserListItem />
				<UserListItem />
				<UserListItem />
			</List>
		</Card>
	);
}

function UserListItem() {
	return (
		<ListItem disablePadding alignItems="flex-start">
			<ListItemButton>
				<ListItemAvatar>
					<Avatar alt="Remy Sharp" />
				</ListItemAvatar>
				<span style={{ width: '100%' }}>
					<Typography
						variant="subtitle2"
						fontSize={13}
						color="primary.main"
					>
						Amber Heard
					</Typography>
					<Typography variant="caption">Software Engineer</Typography>
				</span>
				<Tooltip title="Add Friend">
					<IconButton>
						<PersonAddAlt1OutlinedIcon
							fontSize="small"
							color="primary"
						/>
					</IconButton>
				</Tooltip>
			</ListItemButton>
		</ListItem>
	);
}

export default SuggestedPeople;
