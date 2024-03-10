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
                {categoriesList.map((question, idx) => (
                    <Questions key={idx} question={question} isVisible={idx === categoryNumber} />
                ))}

                <NavigationQuestion 
                    listLength={categoriesList.length}
                    current={categoryNumber}
                    changeCategoryNumber={(modulo) => setCategoryNumber(prev => modulo ? prev - 1 : prev + 1)}
                    changeCategoryNumber2={(e) => setCategoryNumber(+e)}
                />
            </div>}
        </>
    )
}

export default GameView