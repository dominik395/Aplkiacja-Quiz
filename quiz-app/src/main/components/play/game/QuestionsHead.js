import React from "react";

const QuestionHead = ({ question }) => {
    return (
        <>
            <div className="message is-info is-medium m-3 p-3">
                <p className="message-body is-centered">Question: {question.question}</p>
            </div>
        </>
    )
}

export default QuestionHead