import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GlobalStyle } from "@arcade/library-components";

import { GameConfigurationProvider } from "./context/GameConfiguration";
import { PlayersProvider } from "./context/Players";
import { GamePage, HomePage } from "./pages";

export function App(): JSX.Element {
	return (
		<>
			<GameConfigurationProvider>
				<PlayersProvider>
					<GlobalStyle />
					<BrowserRouter basename="/tictactoe">
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="game" element={<GamePage />} />
						</Routes>
					</BrowserRouter>
				</PlayersProvider>
			</GameConfigurationProvider>
		</>
	);
}

export default App;
