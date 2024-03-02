import React from "react";

const SingUpForm = ({ onChangeData, onSumbitFrom, error }) => {
    return (
        <>
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-half">
                        {error ? error : null}
                        <form onSubmit={e => onSumbitFrom(e)}>
                            <div className="field">
                                <label className="label">Imię</label>
                                <div className="control">
                                    <input className="input" type="text" 
                                    placeholder="Twoje imię" name="name" onChange={e => onChangeData(e)}/>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Nazwisko</label>
                                <div className="control">
                                    <input className="input" type="text" 
                                    placeholder="Twoje nazwisko" name="surname" onChange={e => onChangeData(e)}/>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Nazwa użytkownika</label>
                                <div className="control">
                                    <input className="input" type="text"  
                                    placeholder="Podaj nazwę do logowania" name="nick" onChange={e => onChangeData(e)}/>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">E-mail</label>
                                <div className="control">
                                    <input className="input" type="email" 
                                    placeholder="Twój e-mail" name="email" onChange={e => onChangeData(e)}/>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Hasło</label>
                                <div className="control">
                                    <input className="input" type="password" 
                                    placeholder="Podaj hasło" name="password" onChange={e => onChangeData(e)}/>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Powtórz hasło</label>
                                <div className="control">
                                    <input className="input" type="password" 
                                    placeholder="Wprowadź ponownie hasło" name="password2" onChange={e => onChangeData(e)}/>
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

export default SingUpForm