import React from "react";
import SingUpForm from "./SingUpForm";
import { useState } from "react";

const SingUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        nick: '',
        email: '',
        password: '',
        password2: ''
    })

    const onChangeData = (event) => {
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const onSumbitFrom = (event) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <>
            <SingUpForm onChangeData={e => onChangeData(e)} 
                onSumbitFrom={e => onSumbitFrom(e)}/>
        </>
    )
}


export default SingUp