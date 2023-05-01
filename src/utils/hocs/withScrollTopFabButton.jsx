import useScrollTrigger from '@mui/material/useScrollTrigger';
import scrollToTop from '@helpers/scrollToTop';
// MUI
import Box from '@mui/material/Box';

import Fade from '@mui/material/Fade';

function withScrollTopFabButton(Component) {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 1200,
	});

	const handleClick = () => {
		scrollToTop();
	};

	return (
		<Fade in={trigger}>
			<Box
				onClick={handleClick}
				role="presentation"
				sx={{
					position: 'fixed',
					bottom: 16,
					right: 16,
				}}
			>
				<Component />
			</Box>
		</Fade>
	);
}

export default withScrollTopFabButton;
