import { BrowserRouter, Route, Routes } from 'react-router-dom';

import * as S from './Global.styled';

import { Home } from './pages/Home';
import { Games } from './games';
import { UserProvider } from './context/User';

function App(): JSX.Element {
    return (
      <UserProvider>
        <S.GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/*' element={<Games />} />
            </Routes>
        </BrowserRouter>
      </UserProvider>
    );
}

export default App;
