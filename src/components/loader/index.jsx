import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import LinearProgress from '@mui/material/LinearProgress';

import logo from '@/assets/images/logo/png/Color_logotext_nobg.png';

export function LogoLoader({ addSx, ...rest }) {
	return (
		<Card
			sx={{
				mx: { xs: 1, sm: 'auto' },
				my: 'auto',
				width: { xs: '100%', sm: 'fit-content' },
				...addSx,
			}}
			{...rest}
		>
			<Stack direction="column" spacing={1}>
				<Box component="img" src={logo} alt="Slim Logo" width={{ xs: '30vw', md: '15vw' }} />
				<LinearProgress />
				<Typography my={1} textAlign="center" variant="caption">
					Cargando Contenido, favor de esperar.
				</Typography>
			</Stack>
		</Card>
	);
}

export function Loader1({ addSx, size = 40, color = 'primary.main' }) {
	return (
		<Box
			sx={{
				'@keyframes rotatePlane': {
					'0%': {
						webkitTransform: 'perspective(120px) rotateX(0) rotateY(0)',
						transform: 'perspective(120px) rotateX(0) rotateY(0)',
					},

					'50%': {
						webkitTransform: 'perspective(120px) rotateX(-180.1deg) rotateY(0)',
						transform: 'perspective(120px) rotateX(-180.1deg) rotateY(0)',
					},

					'100%': {
						webkitTransform: 'perspective(120px) rotateX(-180deg) rotateY(-179.9deg)',
						transform: 'perspective(120px) rotateX(-180deg) rotateY(-179.9deg)',
					},
				},
				width: size,
				height: size,
				backgroundColor: color,
				animation: 'rotatePlane 1.2s infinite ease-in-out',
				...addSx,
			}}
		/>
	);
}

const doubleBounceKeyframe = keyframes`
	0%, 100% {
		-webkit-transform: scale(0);
		transform: scale(0);
	}
	50% {
		-webkit-transform: scale(1);
		transform: scale(1);
	}
`;

const DoubleBounceChild = styled('div')(({ theme, color }) => ({
	opacity: '.6',
	borderRadius: '50%',
	width: '100%',
	height: '100%',
	backgroundColor: theme.palette?.[color]?.main || theme.palette.primary.main,
	position: 'absolute',
	top: 0,
	left: 0,
	animation: `${doubleBounceKeyframe} 2s infinite ease-in-out`,
	webkitAnimation: `${doubleBounceKeyframe} 2s infinite ease-in-out`,
	'&:nth-of-type(2)': {
		animationDelay: '-1s',
	},
}));

export function Loader2({ size = 40, color = 'primary', addSx }) {
	return (
		<Box position="relative" width={size} height={size} sx={{ ...addSx }}>
			<DoubleBounceChild color={color} />
			<DoubleBounceChild color={color} />
		</Box>
	);
}

const waveStretchKeyframe = keyframes`
	0%, 100%, 40% {
		-webkit-transform: scaleY(.4);
		transform: scaleY(.4);
	}

	20% {
		-webkit-transform: scaleY(1);
		transform: scaleY(1);
	} 
`;
const WaveChild = styled('div')(({ theme, color }) => ({
	width: '100%',
	height: '100%',
	backgroundColor: theme.palette?.[color]?.main || theme.palette.primary.main,
	animation: `${waveStretchKeyframe} 2s infinite ease-in-out`,
	webkitAnimation: `${waveStretchKeyframe} 2s infinite ease-in-out`,
	'&:nth-of-type(1)': {
		animationDelay: '-1.2s',
	},
	'&:nth-of-type(2)': {
		animationDelay: '-1.1s',
	},
	'&:nth-of-type(3)': {
		animationDelay: '-1s',
	},
	'&:nth-of-type(4)': {
		animationDelay: '-.9s',
	},
	'&:nth-of-type(5)': {
		animationDelay: '-.8s',
	},
}));
export function Loader3({ size = 40, color = 'primary', addSx }) {
	return (
		<Stack direction="row" width={size} height={size} spacing="3px" alignItems="center" sx={{ ...addSx }}>
			<WaveChild color={color} />
			<WaveChild color={color} />
			<WaveChild color={color} />
			<WaveChild color={color} />
			<WaveChild color={color} />
		</Stack>
	);
}

const wanderingCubeKeyframe = keyframes`
	0% {
		-webkit-transform: rotate(0);
		transform: rotate(0);
	}
	25% {
		-webkit-transform: translateX(30px) rotate(-90deg) scale(.5);
		transform: translateX(30px) rotate(-90deg) scale(.5);
	}
	50% {
		-webkit-transform: translateX(30px) translateY(30px) rotate(-179deg);
		transform: translateX(30px) translateY(30px) rotate(-179deg);
	}
	50.1% {
		-webkit-transform: translateX(30px) translateY(30px) rotate(-180deg);
		transform: translateX(30px) translateY(30px) rotate(-180deg);
	}
	75% {
		-webkit-transform: translateX(0) translateY(30px) rotate(-270deg) scale(.5);
		transform: translateX(0) translateY(30px) rotate(-270deg) scale(.5);
	}

	100% {
		-webkit-transform: rotate(-360deg);
		transform: rotate(-360deg);
	}
`;
const CubeChild = styled('div')(({ theme, color }) => ({
	width: '10px',
	height: '10px',
	position: 'absolute',
	top: 0,
	left: 0,
	backgroundColor: theme.palette?.[color]?.main || theme.palette.primary.main,
	animation: `${wanderingCubeKeyframe}  1.8s ease-in-out -1.8s infinite both`,
	webkitAnimation: `${wanderingCubeKeyframe}  1.8s ease-in-out -1.8s infinite both`,

	'&:nth-of-type(2)': {
		animationDelay: '-.9s',
	},
}));
export function Loader4({ color = 'primary', addSx }) {
	return (
		<Box position="relative" width={40} height={40} sx={{ ...addSx }}>
			<CubeChild color={color} />
			<CubeChild color={color} />
		</Box>
	);
}

const chasingDotsBounceKeyframe = keyframes`
	0%, 100% {
		-webkit-transform: scale(0);
		transform: scale(0);
	}

	50% {
		-webkit-transform: scale(1);
		transform: scale(1);
	}
`;
const DotsChild = styled('div')(({ theme, color }) => ({
	width: '60%',
	height: '60%',
	position: 'absolute',
	borderRadius: '50%',
	top: 0,
	backgroundColor: theme.palette?.[color]?.main || theme.palette.primary.main,
	animation: `${chasingDotsBounceKeyframe} 2s infinite ease-in-out`,
	webkitAnimation: `${chasingDotsBounceKeyframe} 2s infinite ease-in-out`,

	'&:nth-of-type(2)': {
		animationDelay: '-1s',
		top: 'auto',
		bottom: 0,
	},
}));
export function Loader5({ size = 40, color = 'primary', addSx }) {
	return (
		<Box
			position="relative"
			width={size}
			height={size}
			sx={{
				'@keyframes chasingDotsBounceKeyframe': {
					'100%': {
						webkitTransform: 'rotate(360deg)',
						transform: 'rotate(360deg)',
					},
				},
				animation: 'chasingDotsBounceKeyframe 2s  linear infinite',
				webkitAnimation: 'chasingDotsBounceKeyframe 2s infinite linear',
				...addSx,
			}}
		>
			<DotsChild color={color} />
			<DotsChild color={color} />
		</Box>
	);
}

const threeBounceKeyframe = keyframes`
	0%, 100%, 80% {
		-webkit-transform: scale(0);
		transform: scale(0);
	}

	40% {
		-webkit-transform: scale(1);
		transform: scale(1);
	}
`;
const BounceChild = styled('div')(({ theme, color, size }) => ({
	width: size,
	height: size,
	borderRadius: '50%',
	backgroundColor: theme.palette?.[color]?.main || theme.palette.primary.main,
	animation: `${threeBounceKeyframe}  1.4s ease-in-out 0s infinite both`,
	webkitAnimation: `${threeBounceKeyframe}  1.4s ease-in-out 0s infinite both`,

	'&:nth-of-type(1)': {
		animationDelay: '-.32s',
	},
	'&:nth-of-type(2)': {
		animationDelay: '-.16s',
	},
}));
export function Loader6({ size = 30, color = 'primary', addSx }) {
	return (
		<Stack direction="row" spacing="5px" sx={{ ...addSx }}>
			<BounceChild color={color} size={size} />
			<BounceChild color={color} size={size} />
			<BounceChild color={color} size={size} />
		</Stack>
	);
}

const cubeGridScaleDelayKeyFrame = keyframes`
	0%, 100%, 70% {
		-webkit-transform: scale3D(1,1,1);
		transform: scale3D(1,1,1);
	}
	35% {
		-webkit-transform: scale3D(0,0,1);
		transform: scale3D(0,0,1);
	}
`;
const CubeGridChild = styled('div')(({ theme, color }) => ({
	width: '33.33%',
	height: '33.33%',
	float: 'left',
	backgroundColor: theme.palette?.[color]?.main || theme.palette.primary.main,
	animation: `${cubeGridScaleDelayKeyFrame} 1.3s infinite ease-in-out`,
	webkitAnimation: `${cubeGridScaleDelayKeyFrame} 1.3s infinite ease-in-out`,

	'&:nth-of-type(1)': {
		animationDelay: '.2s',
	},
	'&:nth-of-type(2)': {
		animationDelay: '.3s',
	},
	'&:nth-of-type(3)': {
		animationDelay: '.4s',
	},
	'&:nth-of-type(4)': {
		animationDelay: '.1s',
	},
	'&:nth-of-type(5)': {
		animationDelay: '.2s',
	},
	'&:nth-of-type(6)': {
		animationDelay: '.3s',
	},
	'&:nth-of-type(8)': {
		animationDelay: '.1s',
	},
	'&:nth-of-type(9)': {
		animationDelay: '.2s',
	},
}));
export function Loader7({ size = 40, color = 'primary', addSx }) {
	return (
		<Box width={size} height={size} sx={{ ...addSx }}>
			<CubeGridChild color={color} />
			<CubeGridChild color={color} />
			<CubeGridChild color={color} />
			<CubeGridChild color={color} />
			<CubeGridChild color={color} />
			<CubeGridChild color={color} />
			<CubeGridChild color={color} />
			<CubeGridChild color={color} />
			<CubeGridChild color={color} />
		</Box>
	);
}
const circleBounceDelayKeyframe = keyframes`
	0%, 100%, 80% {
		-webkit-transform: scale(0);
		transform: scale(0);
	}

	40% {
		-webkit-transform: scale(1);
		transform: scale(1);
	}
`;

const FadingCircleChild = styled('div')(({ theme, color, keyframe }) => ({
	width: '100%',
	height: '100%',
	position: 'absolute',
	top: 0,
	left: 0,

	'&:before': {
		content: '""',
		margin: '0 auto',
		width: '15%',
		height: '15%',
		display: 'block',
		borderRadius: '50%',
		backgroundColor: theme.palette?.[color]?.main || theme.palette.primary.main,
		animation: `${keyframe} 1.2s infinite ease-in-out both`,
		webkitAnimation: `${keyframe} 1.2s infinite ease-in-out both`,
	},

	'&:nth-of-type(2):before': {
		animationDelay: '-1.1s',
	},
	'&:nth-of-type(3):before': {
		animationDelay: '-1s',
	},
	'&:nth-of-type(4):before': {
		animationDelay: '-.9s',
	},
	'&:nth-of-type(5):before': {
		animationDelay: '-.8s',
	},
	'&:nth-of-type(6):before': {
		animationDelay: '-.7s',
	},
	'&:nth-of-type(7):before': {
		animationDelay: '-.6s',
	},
	'&:nth-of-type(8):before': {
		animationDelay: '-.5s',
	},
	'&:nth-of-type(9):before': {
		animationDelay: '-.4s',
	},
	'&:nth-of-type(10):before': {
		animationDelay: '-.3s',
	},
	'&:nth-of-type(11):before': {
		animationDelay: '-.2s',
	},
	'&:nth-of-type(12):before': {
		animationDelay: '-.1s',
	},

	'&:nth-of-type(2)': {
		transform: 'rotate(30deg)',
	},
	'&:nth-of-type(3)': {
		transform: 'rotate(60deg)',
	},
	'&:nth-of-type(4)': {
		transform: 'rotate(90deg)',
	},
	'&:nth-of-type(5)': {
		transform: 'rotate(120deg)',
	},
	'&:nth-of-type(6)': {
		transform: 'rotate(150deg)',
	},
	'&:nth-of-type(7)': {
		transform: 'rotate(180deg)',
	},
	'&:nth-of-type(8)': {
		transform: 'rotate(210deg)',
	},
	'&:nth-of-type(9)': {
		transform: 'rotate(240deg)',
	},
	'&:nth-of-type(10)': {
		transform: 'rotate(270deg)',
	},
	'&:nth-of-type(11)': {
		transform: 'rotate(300deg)',
	},
	'&:nth-of-type(12)': {
		transform: 'rotate(330deg)',
	},
}));
export function Loader8({ size = 50, color = 'primary', addSx }) {
	return (
		<Box width={size} height={size} position="relative" sx={{ ...addSx }}>
			<FadingCircleChild color={color} keyframe={circleBounceDelayKeyframe} />
			<FadingCircleChild color={color} keyframe={circleBounceDelayKeyframe} />
			<FadingCircleChild color={color} keyframe={circleBounceDelayKeyframe} />
			<FadingCircleChild color={color} keyframe={circleBounceDelayKeyframe} />
			<FadingCircleChild color={color} keyframe={circleBounceDelayKeyframe} />
			<FadingCircleChild color={color} keyframe={circleBounceDelayKeyframe} />
			<FadingCircleChild color={color} keyframe={circleBounceDelayKeyframe} />
			<FadingCircleChild color={color} keyframe={circleBounceDelayKeyframe} />
			<FadingCircleChild color={color} keyframe={circleBounceDelayKeyframe} />
			<FadingCircleChild color={color} keyframe={circleBounceDelayKeyframe} />
			<FadingCircleChild color={color} keyframe={circleBounceDelayKeyframe} />
			<FadingCircleChild color={color} keyframe={circleBounceDelayKeyframe} />
		</Box>
	);
}

const circleFadeDelayKeyframe = keyframes`
	0%,100%,39% {
		opacity: 0
	}

	40% {
		opacity: 1
	}
`;
export function Loader9({ size = 50, color = 'primary', addSx }) {
	return (
		<Box width={size} height={size} position="relative" sx={{ ...addSx }}>
			<FadingCircleChild color={color} keyframe={circleFadeDelayKeyframe} />
			<FadingCircleChild color={color} keyframe={circleFadeDelayKeyframe} />
			<FadingCircleChild color={color} keyframe={circleFadeDelayKeyframe} />
			<FadingCircleChild color={color} keyframe={circleFadeDelayKeyframe} />
			<FadingCircleChild color={color} keyframe={circleFadeDelayKeyframe} />
			<FadingCircleChild color={color} keyframe={circleFadeDelayKeyframe} />
			<FadingCircleChild color={color} keyframe={circleFadeDelayKeyframe} />
			<FadingCircleChild color={color} keyframe={circleFadeDelayKeyframe} />
			<FadingCircleChild color={color} keyframe={circleFadeDelayKeyframe} />
			<FadingCircleChild color={color} keyframe={circleFadeDelayKeyframe} />
			<FadingCircleChild color={color} keyframe={circleFadeDelayKeyframe} />
			<FadingCircleChild color={color} keyframe={circleFadeDelayKeyframe} />
		</Box>
	);
}

export default LogoLoader;
