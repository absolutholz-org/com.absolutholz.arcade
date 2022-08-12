import { useState } from "react";

import { ReactComponent as IconCheck } from "@mdi/svg/svg/account.svg";

import { GlobalStyle, LogoAbsolutholz } from "@arcade/library-components";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<GlobalStyle />
			<div className="App">Landing Pages</div>
			<IconCheck height={40} />
			<LogoAbsolutholz />
		</>
	);
}

export default App;
