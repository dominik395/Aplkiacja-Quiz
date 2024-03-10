import React from "react";
import { useState } from "react";

const QuestionsButtons = ({ question, uploadStats }) => {
    const [hover, setHover] = useState(0)
    const stats = { points: true, correct: question.question, wrong: '' }

    const handleButton = (modulo) => {
        setHover(modulo)

        if (question.correct_answer === 'True' && modulo === 1) {
            console.log('correct answer')
            uploadStats(stats)
        } else if (question.correct_answer === 'False' && modulo === 2) {
            console.log('correct answer')
            uploadStats(stats)
        } else {
            console.log('wrong answser')
            uploadStats({
                points: false,
                wrong: question.question,
                correct: ''
            })
        }
    }

    return (
        <>
            <div className="buttons are-medium is-centered m-3 p-3">
                <button className={`button is-success ${hover === 1 && 'is-hovered'}`}
                    disabled={hover === 1}
                    onClick={() => handleButton(1)}
                >TRUE</button>

                <button className={`button is-danger ${hover === 2 && 'is-hovered'}`}
                    disabled={hover === 2}
                    onClick={() => handleButton(2)}
                >FALSE</button>
            </div>
        </>
    )
}

export default QuestionsButtons
