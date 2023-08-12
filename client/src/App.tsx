import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate to="/dashboard" />} />
					<Route path="/dashboard" element={<DashboardPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		);
	}
}
export default App;
