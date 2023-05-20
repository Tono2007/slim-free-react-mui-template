const scrollTop = () => {
	if (window === 'undefined') return;
	try {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	} catch (error) {
		// just a fallback for older browsers
		window.scrollTo(0, 0);
	}
};

export default scrollTop;
