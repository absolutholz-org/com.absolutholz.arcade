import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from '@arcade/library-authentication';
import { GlobalStyle, ScrollToTop, SiteColorSchemeProvider, SiteFooter } from '@arcade/library-components';

import { Home } from './pages/Home';
import { AccessibilityStatement } from './pages/AccessibilityStatement';

function App() {
	return (
		<AuthProvider>
			<SiteColorSchemeProvider>
				<GlobalStyle />

				<BrowserRouter>
					<ScrollToTop>
						<Suspense fallback={<>Loading</>}>
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='/accessibility-statement' element={<AccessibilityStatement />} />
							</Routes>
						</Suspense>

						<SiteFooter />
					</ScrollToTop>
				</BrowserRouter>
			</SiteColorSchemeProvider>
		</AuthProvider>
	);
}

export default App;
