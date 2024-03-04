import React from "react";

const LoginForm = ({ onSubmitForm, onChangeForm, formData, error }) => {
    return (
        <>
        <div className="container">
                <div className="columns is-centered">
                    <div className="column is-half">
                        {error ? error : null}
                        <form onSubmit={e => onSubmitForm(e)}>
                            <div className="field">
                                <label className="label">Nazwa użytkownika</label>
                                <div className="control">
                                    <input className="input" type="text" value={formData.nick}
                                    placeholder="Podaj nazwę do logowania" name="nick" onChange={e => onChangeForm(e)}/>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Hasło</label>
                                <div className="control">
                                    <input className="input" type="password" value={formData.password}
                                    placeholder="Podaj hasło" name="password" onChange={e => onChangeForm(e)}/>
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <button className="button is-primary">Zaloguj</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


export default LoginForm