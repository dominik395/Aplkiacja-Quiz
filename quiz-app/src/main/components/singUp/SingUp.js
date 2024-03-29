import React from "react";
import SingUpForm from "./SingUpForm";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SingUp = ({ users, addUser }) => {
    const navigateToUrl = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        nick: '',
        email: '',
        password: '',
        password2: '',
        points: 0
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
            setFormData({
                name: '',
                surname: '',
                nick: '',
                email: '',
                password: '',
                password2: '',
                points: 0
            })
            navigateToUrl('/login')
        }
    }

    const validateForm = () => {
        if (formData.name.length < 2 || formData.surname.length < 2 || formData.nick.length < 2) {
            return setError(<h1 className="has-text-danger is-size-4">Minimalna długość to 3 znaki!</h1>)
        } else if (formData.password !== formData.password2) {
            return setError(<h1 className="has-text-danger is-size-4">Hasła nie są identyczne!</h1>)
        } else if (users.some(el => el.nick === formData.nick)){
            return setError(<h1 className="has-text-danger is-size-4">Taki login już istnieje!</h1>)
        }else {
            setError('')
            return true
        }
    }

    return (
        <>
            <SingUpForm 
                onChangeData={e => onChangeData(e)} 
                onSumbitFrom={e => onSumbitFrom(e)}
                error={error}
                formData={formData}
            />
        </>
    )
}


export default SingUp