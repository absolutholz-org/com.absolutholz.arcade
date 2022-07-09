import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GlobalStyle } from "@arcade/library-components";

import { GamePage, HomePage } from "./pages";

export function App(): JSX.Element {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter basename="/REPLACEME">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="game" element={<GamePage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
