import React from "react";

const Home = ({ user }) => {
    return (
        <>
            { user.nick ? 
            <article className="message is-info">
                <div className="message-header">
                    <p>Witaj {user.nick} o to twoje dane.</p>
                </div>
                <div className="message-body">            
                    <p>Nick zalogowanego użytkownika: {user.email}</p>
                    <p>Imię zalogowanego użytkownika: {user.name}</p>
                </div>
            </article>:
             <h1 className="has-text-danger is-size-2">Zaloguj się!</h1>
            }

        </>
    )
}

export default Home