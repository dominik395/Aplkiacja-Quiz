import React from "react";
import PlayMainViewForm from "../../containers/PlayMainViewForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const PlayMainView = ({ selectedCategory }) => {
    const navigateToUrl = useNavigate()
    const [category, setCategory] = useState({
        categoryName: 'Vehicles',
        categoryId: 28
    })

    const onChangeData = (event) => {
        setCategory({
            categoryName: event.target.value,
            categoryId: +event.target.selectedOptions[0].dataset.id
        })
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        console.log(category)
        selectedCategory(category)
        navigateToUrl('/play/game/view')
    }

    return (
        <>
            <h1>Main View</h1>
            <PlayMainViewForm 
                onSubmitForm={e => onSubmitForm(e)}
                onChangeData={e => onChangeData(e)}
            />
        </>
    )
}

export default PlayMainView