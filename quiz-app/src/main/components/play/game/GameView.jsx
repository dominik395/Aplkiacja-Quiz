import React from "react";
import { useEffect, useState } from "react";
import { getQuestions } from "../../../../API/getQuestion";

const GameView = ({ selectedCategory }) => {
    const [categoriesList, setCategoriesList] = useState('')

    useEffect(() => {
        const getData = async (ID) => {
            const data = await getQuestions(ID)
            setCategoriesList(data)
        }

        getData(selectedCategory.categoryId)
    }, [selectedCategory.categoryId])
    
    console.log(categoriesList)
    return (
        <>
            <h1>Game View</h1>
        </>
    )
}

export default GameView