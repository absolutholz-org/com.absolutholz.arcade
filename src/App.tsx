import { BrowserRouter, Route, Routes } from "react-router-dom";

import * as S from './Global.styled';

import { Home } from './Pages/Home';
import { Games } from './Games';
import { UserProvider } from './Context/User';

function App(): JSX.Element {
    return (
      <UserProvider>
        <S.GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<Games />} />
            </Routes>
        </BrowserRouter>
      </UserProvider>
    );
}

export default App;
