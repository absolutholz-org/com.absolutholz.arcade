import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalStyle } from '@arcade/components';

import { Home } from './pages/Home';
// import { Games } from './games';
import { UserProvider } from '@arcade/common/context/User';

export function App(): JSX.Element {
	return (
		<UserProvider>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					{/* <Route path='/*' element={<Games />} /> */}
				</Routes>
			</BrowserRouter>
		</UserProvider>
	);
}
