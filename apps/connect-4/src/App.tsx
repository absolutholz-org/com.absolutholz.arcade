import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalStyle, SiteColorSchemeProvider } from '@arcade/library-components';

import { Home } from './pages/Home';

function App() {
	return (
		<SiteColorSchemeProvider>
			<GlobalStyle />

			<BrowserRouter basename='/connect4'>
				<Suspense fallback={<>Loading</>}>
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</SiteColorSchemeProvider>
	);
}

export default App;
