import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ScrollToTopOnRouteChange from '@hocs/withScrollTopOnRouteChange';
import withLazyLoadably from '@hocs/withLazyLoadably';

import MinimalLayout from '@/components/layouts/minimalLayout';
import MainLayout from '@/components/layouts/mainLayout';

const LoginPage = withLazyLoadably(lazy(() => import('@/pages/login')));
const Dashboard1Page = withLazyLoadably(
	lazy(() => import('@/pages/dashboard1')),
);

function Router() {
	return (
		<BrowserRouter>
			<ScrollToTopOnRouteChange>
				<Routes>
					<Route path="/" element={<MinimalLayout />}>
						<Route index element={<LoginPage />} />
						<Route path="login" element={<LoginPage />} />
					</Route>
					<Route path="/" element={<MainLayout />}>
						<Route path="dashboard1" element={<Dashboard1Page />} />
						<Route path="home" element={<Dashboard1Page />} />
					</Route>

					<Route path="*" element={<h1>404</h1>} />
				</Routes>
			</ScrollToTopOnRouteChange>
		</BrowserRouter>
	);
}

export default Router;
