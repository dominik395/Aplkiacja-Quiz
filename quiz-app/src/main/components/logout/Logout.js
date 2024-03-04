import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ loginUser, logoutUser }) => {
    const naviagteToUrl = useNavigate()
    
    useEffect(() => {
        logoutUser(loginUser)
        naviagteToUrl('/login')
    }, [])

    return (
        <h1>Logout</h1>
    )
}

export default Logout