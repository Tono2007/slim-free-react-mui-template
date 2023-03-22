const heights = {
	header: '150',
	userHeader: '72',
	nav: '78',
	mobileHeader: '60',
};

function calcHeaderHeight(type, withPx = true) {
	const height = heights[type] || '80';
	return withPx ? `${height}px}` : +height;
}

export default calcHeaderHeight;
