import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
	GlobalStyle,
	SiteColorSchemeProvider,
} from '@arcade/library-components';

import { Home } from './pages';

function App() {
	return (
		<SiteColorSchemeProvider>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</BrowserRouter>
		</SiteColorSchemeProvider>
	);
}

export default App;
