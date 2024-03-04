import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./containers/Home";
import Template from "./Template";
import Login from './containers/Login'
import SingUp from "./containers/SingUp";
import Logout from "./containers/Logout";

const Navigation = () => {
    return (
        <>
                <BrowserRouter>
                    <Template>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/singUp" element={<SingUp />} />
                            <Route path="/logout" element={<Logout />} />
                        </Routes>
                    </Template>
                </BrowserRouter>
        </>
    )
}

export default Navigation