import React from "react";

const Home = ({ user }) => {
    return (
        <>
            { user.nick ? 
            <article className="message is-info is-size-4">
                <div className="message-header">
                    <p>Witaj {user.nick} o to twoje dane.</p>
                </div>
                <div className="message-body">            
                    <p>Email: {user.email}</p>
                    <p>Imię: {user.name}</p>
                </div>
                <div className="message-body">
                    <p>Twoja punktacja: {user.points}</p>
                </div>
            </article>:
             <h1 className="has-text-danger is-size-4">Zaloguj się!</h1>
            }

        </>
    )
}

export default Home