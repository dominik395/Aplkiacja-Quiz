import React from "react";

const Home = ({ user }) => {
    return (
        <>
            <h1>To jest home</h1>
            <p>Nick zalogowanego użytkownika: {user.nick}</p>
            <p>Imię zalogowanego użytkownika: {user.name}</p>
        </>
    )
}

export default Home