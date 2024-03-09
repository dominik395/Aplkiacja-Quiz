import React from "react";
import { useEffect, useState } from "react";
import { getQuestions } from "../../../../API/getQuestion";
import Questions from "./Questions";
import NavigationQuestion from "./NavigationQuestion";

const GameView = ({ selectedCategory }) => {
    const [categoryNumber, setCategoryNumber] = useState(0)
    const [categoriesList, setCategoriesList] = useState('')

    useEffect(() => {
        const getData = async (ID) => {
            const data = await getQuestions(ID)
            setCategoriesList(data)
        }

        getData(selectedCategory.categoryId)
    }, [selectedCategory.categoryId])
    
    return (
        <>
        {categoriesList && 
            <div>
                <Questions 
                    question={categoriesList[+categoryNumber]}
                />

                <NavigationQuestion 
                    listLength={categoriesList.length}
                    current={categoryNumber}
                    changeCategoryNumber={(modulo) => setCategoryNumber(prev => modulo ? prev - 1 : prev + 1)}
                />
            </div>}
        </>
    )
}

export default GameView