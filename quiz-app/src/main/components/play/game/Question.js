import React from "react";

const Question = ({ element }) => {
    return (
        <>
            <h1>Question: {element.question}</h1>
            <button>TRUE</button>
            <button>FALSE</button>
        </>
    )
}

export default Question