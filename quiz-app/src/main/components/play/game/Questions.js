import React from "react"

const Questions = ({ question }) => {
    console.log(question, 'z questions')
    return (
        <>
            <div className="message is-info is-medium m-3 p-3">
                <p className="message-body is-centered">Question: {question.question}</p>
            </div>

            <div className="buttons are-medium is-centered m-3 p-3">
                <button className="button is-success">TRUE</button>
                <button className="button is-danger">FALSE</button>
            </div>
        </>
    )
}

export default Questions