import React from "react"
import Question from "./Question"

const Questions = ({ categoriesList }) => {
    return (
        <>
            {categoriesList.map((el, idx) => (
                <Question key={idx} element={el}/>
            ))}
        </>
    )
}

export default Questions