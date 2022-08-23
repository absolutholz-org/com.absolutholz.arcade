import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from '@arcade/library-authentication';
import { GlobalStyle, SiteColorSchemeProvider } from '@arcade/library-components';

import { Home } from './pages/Home';

function App() {
	return (
		<AuthProvider>
			<SiteColorSchemeProvider>
				<GlobalStyle />

				<BrowserRouter basename='/dotsandboxes'>
					<Suspense fallback={<>Loading</>}>
						<Routes>
							<Route path='/' element={<Home />} />
						</Routes>
					</Suspense>
				</BrowserRouter>
			</SiteColorSchemeProvider>
		</AuthProvider>
	);
}

export default App;
