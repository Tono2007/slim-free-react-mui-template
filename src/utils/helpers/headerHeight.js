const heights = {
	header: '148',
	userHeader: '70',
	nav: '78',
	mobileHeader: '190',
};

function calcHeaderHeight(type, withPx = true) {
	const height = heights[type] || '148';
	return withPx ? `${height}px` : +height;
}

export default calcHeaderHeight;
