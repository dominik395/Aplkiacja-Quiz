import React from "react"

const Questions = ({ question }) => {
    console.log(question, 'z questions')
    return (
        <>
            <h1>test z questions: {question.question}</h1>
            <button>TRUE</button>
            <button>FALSE</button>
        </>
    )
}

export default Questions