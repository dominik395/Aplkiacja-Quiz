import React from "react";
import { Link } from "react-router-dom";

const Template = ({ children }) => {
    return (
        <>
            <section>
                <div className="columns is-size-5">
                    <div className="column is-narrow">
                        <Link to={'/'}>Home</Link>
                    </div>
                    <div className="column is-narrow">
                        <Link to={'/login'}>Login</Link>
                    </div>
                    <div className="column is-narrow">
                        <Link to={'/singUp'}>Sing Up</Link>
                    </div>
                    <div className="column is-narrow">
                        <Link to={'/logout'}>Logout</Link>
                    </div>
                </div>
            </section>
            
            <div>{children}</div>
        </>
    )
}

export default Template