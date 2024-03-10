import React from "react";
import { Link } from "react-router-dom";

const Home = ({ user, reset }) => {
    return (
        <>
            { user.nick ? 
            <article className="message is-info is-size-4">
                <div className="message-header">
                    <p>Hello {user.nick}! 
                        <Link to={'/play/mainView'}>
                            <button onClick={reset} className="button is-success ml-3">PLAY!</button>
                        </Link>
                    </p>
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

        </>
    )
}

export default Home