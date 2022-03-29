import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GlobalStyle } from "@arcade/library-components";

import { Home } from "./pages/Home";

function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
