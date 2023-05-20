import { forwardRef } from 'react';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function MuiSnackbar(props) {
	const { message, severity, title, sx, alertProps } = props;
	console.log(props);
	return (
		<Alert severity={severity} sx={{ boxShadow: 27, ...sx }} {...alertProps}>
			<AlertTitle>{title}</AlertTitle>
			{message}
		</Alert>
	);
}

const MuiSnackbarVariant = forwardRef((props, ref) => (
	<div ref={ref}>
		<MuiSnackbar {...props} />
	</div>
));

export function Provider({ children }) {
	return (
		<SnackbarProvider
			maxSnack={3}
			anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			Components={{
				muiSnackbar: MuiSnackbarVariant,
			}}
		>
			{children}
		</SnackbarProvider>
	);
}

export default enqueueSnackbar;
