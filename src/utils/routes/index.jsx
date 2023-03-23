import { lazy } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from '@helpers/ScrollToTop';

import withLazyLoadably from '@/utils/hocs/withLazyLoadably';

import MinimalLayout from '@/components/layouts/minimalLayout';

const LoginPage = withLazyLoadably(lazy(() => import('@/pages/login')));
const Dashboard1Page = withLazyLoadably(
	lazy(() => import('@/pages/dashboard1')),
);

function Router() {
	return (
		<BrowserRouter>
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<MinimalLayout />}>
						<Route index element={<LoginPage />} />
						<Route path="login" element={<LoginPage />} />
						<Route path="dashboard1" element={<Dashboard1Page />} />
						<Route path="home" element={<Dashboard1Page />} />
					</Route>

					<Route path="*" element={<h1>404</h1>} />
				</Routes>
			</ScrollToTop>
		</BrowserRouter>
	);
}

export default Router;
