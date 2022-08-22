import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalStyle, SiteColorSchemeProvider, SiteFooter } from '@arcade/library-components';

import { Home } from './pages/Home';
import { AccessibilityStatement } from './pages/AccessibilityStatement';

function App() {
	return (
		<SiteColorSchemeProvider>
			<GlobalStyle />

			<BrowserRouter>
				<Suspense fallback={<>Loading</>}>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/accessibility-statement' element={<AccessibilityStatement />} />
					</Routes>
				</Suspense>

				<SiteFooter />
			</BrowserRouter>
		</SiteColorSchemeProvider>
	);
}

export default App;
