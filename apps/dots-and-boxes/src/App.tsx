import { useState } from "react";

import { GlobalStyle } from "@arcade/library-components";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<GlobalStyle />
			<div className="App">Dots & Boxes Homepage</div>;
		</>
	);
}

export default App;
