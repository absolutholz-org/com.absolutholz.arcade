import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Settings } from './pages/Settings';

function App() {
	return (
		<BrowserRouter basename='/settings'>
			<Routes>
				<Route path='/'>
					<Route index element={<Settings />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
