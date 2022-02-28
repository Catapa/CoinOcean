import './App.css';
import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import {Route, Routes} from "react-router";
import CoinDetailPage from "./pages/CoinDetailPage/CoinDetailPage";
import WalletPage from "./pages/WalletPage/WalletPage";
import MainView from "./pages/MainView/MainView";

function App() {
  return (
    <Routes>
        <Route path={'/'} element={<MainView/>}>
            <Route index element={<HomePage/>}/>
            <Route path={'/:coinID'} element={<CoinDetailPage/>}/>
            <Route path={'/wallet'} element={<WalletPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
