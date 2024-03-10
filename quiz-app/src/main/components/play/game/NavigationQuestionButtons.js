import React from "react";
import { useNavigate } from 'react-router-dom'

const NavigationQuestionButtons = ({ current, listLength, changeCategoryNumber, currentPoints, addPoints }) => {
    const navigateToUrl = useNavigate()

    const handleFinish = () => {
        navigateToUrl('/play/finish/view')
        addPoints(currentPoints)
    }

    return (
        <>
            <button className={`pagination-previous`}
            onClick={() => changeCategoryNumber(true)} 
            disabled={current === 0}
            >Previous</button>

            <button className={`pagination-next ${current+1 === listLength && 'is-disabled'}`}
                onClick={() => changeCategoryNumber(false)}
                disabled={current+1 === listLength}
                >Next</button>

            {current === 9 && 
                <button className="pagination-next"
                    onClick={handleFinish}
                >Finish
                </button>
            }
        </>
    )

}

export default NavigationQuestionButtons