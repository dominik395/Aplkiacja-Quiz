import React from "react"
import QuestionsButtons from "../../../containers/QuestionsButtons"
import QuestionHead from "./QuestionsHead"

const Questions = ({ question, isVisible }) => {
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