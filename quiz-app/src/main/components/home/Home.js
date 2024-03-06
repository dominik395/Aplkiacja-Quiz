import React from "react";
import TestyAPI from "./TestyAPI";
import { Link } from "react-router-dom";

const Home = ({ user }) => {
    return (
        <>
            { user.nick ? 
            <article className="message is-info is-size-4">
                <div className="message-header">
                    <p>Hello {user.nick}! <Link to={'/play/mainView'}>PLAY</Link></p>
                </div>
                <div className="message-body">            
                    <p>Email: {user.email}</p>
                    <p>Name: {user.name}</p>
                </div>
                <div className="message-body">
                    <p>Your score: {user.points}</p>
                </div>
            </article>:
             <h1 className="has-text-danger is-size-4">Login!</h1>
            }

            <TestyAPI />
        </>
    )
}

export default Home