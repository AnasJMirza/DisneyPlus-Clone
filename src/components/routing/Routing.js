import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../login/Login';
import Navbar from '../navbar/Navbar';

const Routing = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;