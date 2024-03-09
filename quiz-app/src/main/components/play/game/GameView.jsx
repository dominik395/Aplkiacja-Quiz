import React from "react";
import { useEffect, useState } from "react";
import { getQuestions } from "../../../../API/getQuestion";
import Questions from "./Questions";

const GameView = ({ selectedCategory }) => {
    const [categoriesList, setCategoriesList] = useState('')

    useEffect(() => {
        const getData = async (ID) => {
            const data = await getQuestions(ID)
            setCategoriesList(data)
        }

        getData(selectedCategory.categoryId)
    }, [selectedCategory.categoryId])
    
    console.log(categoriesList, 'lista kategori z GameVIew')
    return (
        <>
        {categoriesList && 
            <Questions 
                categoriesList={categoriesList}
            />}
        </>
    )
}

export default GameView