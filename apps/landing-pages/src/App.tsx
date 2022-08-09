import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
	GlobalStyle,
	SiteColorSchemeProvider,
	SiteFooter,
	Theme,
} from '@arcade/library-components';

import { AccessibilityStatement, Home } from './pages';
import { PrivacyPolicy } from './pages';
import { TermsOfService } from './pages';
import { Suspense } from 'react';

function App() {
	return (
		<SiteColorSchemeProvider>
			<GlobalStyle />
			<BrowserRouter>
				<Suspense fallback={<>Loading</>}>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route
							path='/accessibility-statement'
							element={<AccessibilityStatement />}
						/>
						<Route
							path='/privacy-policy'
							element={<PrivacyPolicy />}
						/>
						<Route
							path='/terms-of-service'
							element={<TermsOfService />}
						/>
					</Routes>
				</Suspense>
				<SiteFooter />
			</BrowserRouter>
		</SiteColorSchemeProvider>
	);
}

export default App;
