import React from "react";
import SingUpForm from "./SingUpForm";
import { useState } from "react";

const SingUp = ({ addUser }) => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        nick: '',
        email: '',
        password: '',
        password2: '',
        login: false,
    })
    const [error, setError] = useState('')

    const onChangeData = (event) => {
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const onSumbitFrom = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log(formData)
            addUser(formData)
        }
    }

    const validateForm = () => {
        if (formData.name.length < 3 || formData.surname.length < 3 || formData.nick.length < 3) {
            return setError(<h1 className="has-text-danger is-size-4">Minimalna długość to 3 znaki!</h1>)
        } else if (formData.password !== formData.password2) {
            return setError(<h1 className="has-text-danger is-size-4">Hasła nie są identyczne!</h1>)
        } else {
            setError('')
            return true
        }
    }

    return (
        <>
            <SingUpForm onChangeData={e => onChangeData(e)} 
                onSumbitFrom={e => onSumbitFrom(e)}
                error={error}/>
        </>
    )
}


export default SingUp