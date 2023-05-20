const heights = {
	header: '152',
	userHeader: '74',
	nav: '78',
	mobileHeader: '194',
	footer: '427',
};

function calcLayoutHeight(type, withPx = true) {
	const height = heights[type] || '148';
	return withPx ? `${height}px` : +height;
}

export default calcLayoutHeight;
