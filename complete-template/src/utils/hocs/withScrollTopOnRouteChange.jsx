import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import scrollToTop from '@/utils/helpers/scrollToTop';

function WithScrollTopOnRouteChange({ children }) {
	const location = useLocation();
	const { pathname } = location;

	useEffect(() => {
		scrollToTop();
	}, [pathname]);

	return children || null;
}

export default WithScrollTopOnRouteChange;
