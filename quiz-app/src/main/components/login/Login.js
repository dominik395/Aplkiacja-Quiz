import React from "react";
import LoginForm from "./LoginForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ users, loginUser }) => {
    const navigateToUrl = useNavigate()
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({
        nick: '',
        password: ''
    })

    const onChangeForm = (event) => {
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log(formData, 'success')
            setError('')
            navigateToUrl('/')
        } else {
            setError(<h1 className="has-text-danger is-size-4">Błędne dane!</h1>)
        }
    }
    
    const validateForm = () => {
        const matchingUser = users.find(el => el.nick === formData.nick && el.password === formData.password);

        if (!!matchingUser) {
            loginUser(matchingUser)
        }
 
        return !!matchingUser;
    };
    
    

    return (
        <>
            <LoginForm 
                onSubmitForm={onSubmitForm}
                onChangeForm={onChangeForm}
                formData={formData}
                error={error}
            />
        </>
    )
}

export default Login