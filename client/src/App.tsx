import React, { Component } from 'react';
import { DASHBOARDPAGE, LISTOVERVIEWPAGE, CARTPAGE, CREATEPAGE, FAVOURITECOLLECTIONPAGE, USERPAGE } from "./utils/routes";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ListOverviewPage from './pages/ListOverviewPage/ListOverviewPage';
import CreatePage from './pages/CreatePage/CreatePage';
import FavouriteCollectionPage from './pages/FavouriteCollectionPage/FavouriteCollectionPage';
import CartPage from './pages/CartPage/CartPage';
import UserPage from './pages/UserPage/UserPage';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navigate to="/dashboard" />} />
                        <Route path={DASHBOARDPAGE} element={<DashboardPage />} />
                        <Route path={LISTOVERVIEWPAGE + "/*"} element={<ListOverviewPage />} />
                        <Route path={CREATEPAGE} element={<CreatePage />} />
                        <Route path={FAVOURITECOLLECTIONPAGE} element={<FavouriteCollectionPage />} />
                        <Route path={CARTPAGE} element={<CartPage />} />
                        <Route path={USERPAGE} element={<UserPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
            </BrowserRouter>
        );
    }
}
export default App;
