import React from "react"
import QuestionsButtons from "./QuestionsButtons"
import QuestionHead from "./QuestionsHead"

const Questions = ({ question, isVisible }) => {
    console.log(question, 'z questions')
    return (
        <>  
            <div style={{ display: isVisible ? 'block' : 'none' }}>
                <QuestionHead question={question} />
                <QuestionsButtons question={question}/>
            </div>
        </>
    )
}

export default Questions