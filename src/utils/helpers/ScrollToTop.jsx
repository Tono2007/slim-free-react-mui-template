import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop({ children }) {
	const location = useLocation();
	const { pathname } = location;

	useEffect(() => {
		/* window.scrollTo(0, 0); */
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, [pathname]);

	return children || null;
}

export default ScrollToTop;
