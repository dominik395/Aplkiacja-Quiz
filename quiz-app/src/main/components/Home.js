import React from "react";

const Home = ({ users }) => {
    return (
        <>
            <h1>To jest home</h1>
            <ul>
                {users.map((el, index) => <li key={index}>{el.name}</li>)}
            </ul>
        </>
    )
}

export default Home