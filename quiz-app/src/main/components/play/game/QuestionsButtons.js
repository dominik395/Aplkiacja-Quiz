import React from "react";
import { useState } from "react";

const QuestionsButtons = ({ question }) => {
    const [hover, setHover] = useState(0)

    const handleButton = (modulo) => {
        setHover(modulo)
        if (!!question.correct_answer) {
            if (modulo === 1)  {
                console.log('correct answer')
            } else {
                console.log('wrong answer')
            }
        } else {
            console.log('correct answer')
        }
    }

    return (
        <>
            <div className="buttons are-medium is-centered m-3 p-3">
                <button className={`button is-success is-outlined ${hover === 1 && 'is-hovered'}`}
                    onClick={() => handleButton(1)}
                >TRUE</button>

                <button className={`button is-danger is-outlined ${hover === 2 && 'is-hovered'}`}
                    onClick={() => handleButton(2)}
                >FALSE</button>
            </div>
        </>
    )
}

export default QuestionsButtons