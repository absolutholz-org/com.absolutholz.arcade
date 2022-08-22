import { Suspense } from 'react';

import { GlobalStyle, SiteColorSchemeProvider } from '@arcade/library-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';

function App() {
	return (
		<SiteColorSchemeProvider>
			<GlobalStyle />

			<BrowserRouter basename='/travelbingo'>
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
