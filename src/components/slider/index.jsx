import { createContext, useContext } from 'react';

import Box from '@mui/material/Box';

const SliderContext = createContext({});

function Slider({ children, activeSlideIndex, dataLength, ...props }) {
	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<SliderContext.Provider value={{ activeSlideIndex, dataLength }}>
			<Box position="relative" display="flex" overflow="hidden" height="auto" width="auto" {...props}>
				{children}
			</Box>
		</SliderContext.Provider>
	);
}

const SLIDE_TRANSITION = {
	activeSlide: {
		position: 'relative',
		transform: 'translateX(0)',
	},
	lastSlide: {
		transform: 'translateX(-100%)',
	},
	nextSlide: {
		transform: 'translateX(100%)',
	},
};

Slider.Slide = function Slider({ index, children, transitionDuration = '0.4s', sx, ...props }) {
	const { dataLength, activeSlideIndex } = useContext(SliderContext);

	let position = 'nextSlide';
	if (index === activeSlideIndex) {
		position = 'activeSlide';
	}

	if (index === activeSlideIndex - 1 || (activeSlideIndex === 0 && index === dataLength - 1)) {
		position = 'lastSlide';
	}

	return (
		<Box
			position="absolute"
			width="100%"
			height="100%"
			overflow="hidden"
			sx={{
				inset: 0,
				transition: `transform ${transitionDuration} linear`,
				...SLIDE_TRANSITION[position],
				...sx,
			}}
			{...props}
		>
			{children}
		</Box>
	);
};

export default Slider;
