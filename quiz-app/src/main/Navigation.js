import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./containers/Home";
import Template from "./Template";
import Login from './containers/Login'
import SingUp from "./containers/SingUp";
import Logout from "./containers/Logout";
import PlayMainView from "./containers/PlayMainView";
import GameView from "./containers/GameView";
import FinishView from "./components/play/FinishView";

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
                            <Route path="/play/mainView" element={<PlayMainView />} />
                            <Route path="/play/game/view/" element={<GameView />} />
                            <Route path="/play/finish/view" element={<FinishView />} />
                        </Routes>
                    </Template>
                </BrowserRouter>
        </>
    )
}

export default Navigation