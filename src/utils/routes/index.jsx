import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from '@helpers/ScrollToTop';

function Router() {
	return (
		<BrowserRouter>
			<ScrollToTop>
				<Routes>
					<Route path="/" element="HW">
						<Route index element="HW" />
					</Route>
					<Route path="*" element="404" />
				</Routes>
			</ScrollToTop>
		</BrowserRouter>
	);
}

export default Router;
