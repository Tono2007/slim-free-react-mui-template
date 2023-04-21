import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ScrollToTopOnRouteChange from '@hocs/withScrollTopOnRouteChange';
import withLazyLoadably from '@hocs/withLazyLoadably';

import MinimalLayout from '@/components/layouts/minimalLayout';
import MainLayout from '@/components/layouts/mainLayout';

import Page404 from '@/pages/404';

const LoginPage = withLazyLoadably(lazy(() => import('@/pages/login')));
const SignupPage = withLazyLoadably(lazy(() => import('@/pages/signup')));
const Dashboard1Page = withLazyLoadably(
	lazy(() => import('@/pages/dashboard1')),
);
const Dashboard2Page = withLazyLoadably(
	lazy(() => import('@/pages/dashboard2')),
);
const Dashboard3Page = withLazyLoadably(
	lazy(() => import('@/pages/dashboard3')),
);
const Dashboard4Page = withLazyLoadably(
	lazy(() => import('@/pages/dashboard4')),
);
const Dashboard5Page = withLazyLoadably(
	lazy(() => import('@/pages/dashboard5')),
);
const ThemeTypographyPage = withLazyLoadably(
	lazy(() => import('@/pages/themeTypography')),
);
const ThemeColorsPage = withLazyLoadably(
	lazy(() => import('@/pages/themeColors')),
);
const ThemeShadowPage = withLazyLoadably(
	lazy(() => import('@/pages/themeShadow')),
);
const WIPPage = withLazyLoadably(lazy(() => import('@/pages/wip')));

function Router() {
	return (
		<BrowserRouter>
			<ScrollToTopOnRouteChange>
				<Routes>
					<Route path="/" element={<MinimalLayout />}>
						<Route path="pages/">
							<Route path="login" element={<LoginPage />} />
							<Route path="signup" element={<SignupPage />} />
						</Route>
					</Route>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<Dashboard1Page />} />
						<Route path="dashboards/">
							<Route
								path="dashboard1"
								element={<Dashboard1Page />}
							/>
							<Route
								path="dashboard2"
								element={<Dashboard2Page />}
							/>
							<Route
								path="dashboard3"
								element={<Dashboard3Page />}
							/>
							<Route
								path="dashboard4"
								element={<Dashboard4Page />}
							/>
							<Route
								path="dashboard5"
								element={<Dashboard5Page />}
							/>
						</Route>
						<Route path="theme/">
							<Route
								path="typography"
								element={<ThemeTypographyPage />}
							/>
							<Route
								path="colors"
								element={<ThemeColorsPage />}
							/>
							<Route
								path="boxShadow"
								element={<ThemeShadowPage />}
							/>
						</Route>
						<Route path="pages/">
							<Route path="error/">
								<Route path="404" element={<Page404 />} />
							</Route>
						</Route>
					</Route>
					<Route
						path="/"
						element={<MainLayout container={false} pb={false} />}
					>
						<Route path="pages/">
							<Route path="wip" element={<WIPPage />} />
						</Route>
					</Route>
					<Route path="*" element={<Page404 />} />
				</Routes>
			</ScrollToTopOnRouteChange>
		</BrowserRouter>
	);
}

export default Router;
