import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from '../details/Details';
import Home from '../home/Home';
import Login from '../login/Login';
import Navbar from '../navbar/Navbar';

const Routing = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/details/:id" element={<Details />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;