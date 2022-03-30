import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GlobalStyle } from "@arcade/library-components";

import { GameProvider } from "./context/GameContext";
import { GamePage, HomePage } from "./pages";

export function App(): JSX.Element {
	return (
		<GameProvider>
			<GlobalStyle />
			<BrowserRouter basename="/dotsandboxes">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="game" element={<GamePage />} />
				</Routes>
			</BrowserRouter>
		</GameProvider>
	);
}

export default App;
