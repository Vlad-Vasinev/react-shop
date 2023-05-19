
import './App.css';

import { Routes, Route, BrowserRouter } from "react-router-dom";

import MainPage from './components/mainPage/mainPage';
import AccountPage from './components/accountPage/accountPage';
import RegistrPage from './components/registrPage/registrPage';
import LoginPage from './components/loginPage/loginPage';
import ProductPage from './components/productPage/productPage';
import AddressPage from './components/addressPage/addressPage';
import BasketPage from './components/basketPage/basketPage';

export const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/accountPage" element={<AccountPage />} />
          <Route path="/registrPage" element={<RegistrPage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/productPage" element={<ProductPage />} />
          <Route path="/addressPage" element={<AddressPage />} />
          <Route path="/basketPage" element={<BasketPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
