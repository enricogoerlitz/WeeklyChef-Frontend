import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import TestPage from "./TestPage"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<TestPage />} />
                <Route path="*" element={<TestPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
