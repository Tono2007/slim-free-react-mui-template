import { useState } from 'react';
import { useSignupData } from './signupContext';
//
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// Icons
import PeopleIcon from '@mui/icons-material/People';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import BusinessIcon from '@mui/icons-material/Business';
// Components
import SignupButtonsContainer from './signupButtonsContainer';

function SelectUserTab() {
	const { setActiveStep, setUserType } = useSignupData();
	const [userTypeSelected, setUserTypeSelected] = useState('');

	const handleNext = () => {
		setUserType(userTypeSelected);
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};
	return (
		<Stack direction="column" justifyContent="flex-start" alignContent="flex-start" spacing={1} pb={2}>
			<Typography variant="h1">Tipo de usuario</Typography>
			<Typography variant="body2" color="textSecondary">
				Selecciona que tipo de usuario serás en el ecosistema
			</Typography>
			<Stack direction="column" spacing={2} pt={5} pb={3}>
				<UserTypeCard
					type="Invitado"
					text={{
						title: 'Invitado',
						description:
							'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos, cupiditate ducimus.Lorem ipsum dolor sit amet consectetur a',
						btn: 'Seleccionar',
					}}
					Icon={PeopleIcon}
					setUserTypeSelected={setUserTypeSelected}
					userTypeSelected={userTypeSelected}
				/>

				<UserTypeCard
					type="Empleado"
					text={{
						title: 'Empleado',
						description:
							'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos, cupiditate ducimus.Lorem ipsum dolor sit amet consectetur a',
						btn: 'Seleccionar',
					}}
					Icon={BusinessIcon}
					setUserTypeSelected={setUserTypeSelected}
					userTypeSelected={userTypeSelected}
				/>
				<UserTypeCard
					type="Administrador"
					text={{
						title: 'Administrador',
						description:
							'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos, cupiditate ducimus.Lorem ipsum dolor sit amet consectetur a',
						btn: 'Seleccionar',
					}}
					Icon={EmojiPeopleIcon}
					setUserTypeSelected={setUserTypeSelected}
					userTypeSelected={userTypeSelected}
				/>
			</Stack>
			<SignupButtonsContainer handleNext={handleNext} handleBack={handleBack} />
		</Stack>
	);
}
function UserTypeCard({ text, Icon, type, userTypeSelected, setUserTypeSelected }) {
	return (
		<Stack
			direction="row"
			onClick={() => setUserTypeSelected(type)}
			component="button"
			alignItems="center"
			spacing={2}
			width="100%"
			border={0}
			py={1}
			px={{
				xs: 1,
				sm: 2,
			}}
			sx={{
				cursor: 'pointer',
				bgcolor: 'background.paper',
				transition: '0.1s all',
				/* bgcolor:
					userTypeSelected === type ? 'secondary.light' : 'white', */
				border: 2,
				borderColor: userTypeSelected === type ? 'primary.300' : 'transparent',
				borderRadius: '5px',
				boxShadow: '0px 10px 30px -5px #0002',
				'&:hover': {
					boxShadow: '0px 10px 30px -5px #0003',
				},
			}}
		>
			<Icon
				{...(userTypeSelected !== type && {
					color: 'action',
				})}
				fontSize="medium"
				sx={{
					display: {
						xs: 'none',
						sm: 'block',
					},
				}}
			/>

			<span>
				<Typography variant="subtitle1" align="left">
					{text.title}
				</Typography>
				<Typography variant="body2" color="textSecondary" align="left">
					{text.description}
				</Typography>
			</span>
		</Stack>
	);
}
export default SelectUserTab;
