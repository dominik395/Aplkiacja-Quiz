import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home";
import Blog from "./components/Blog";
import Template from "./Template";

const Navigation = () => {
    return (
        <>
            <BrowserRouter>
                <Template>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blog" element={<Blog />} />
                    </Routes>
                </Template>
            </BrowserRouter>
        </>
    )
}

export default Navigation