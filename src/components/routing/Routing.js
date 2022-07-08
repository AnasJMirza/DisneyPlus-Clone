import React from 'react';
import { BrowserRouter, Router, Routes } from 'react-router-dom';
import Login from '../login/Login';

const Routing = () => {
    return (
        <BrowserRouter>
            <Router>
                <Routes path="/" element={<Login />} />
            </Router>
        </BrowserRouter>
    );
};

export default Routing;