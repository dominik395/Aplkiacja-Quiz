import React from "react";
import { useNavigate } from 'react-router-dom'

const NavigationQuestionButtons = ({ current, listLength, changeCategoryNumber }) => {
    const navigateToUrl = useNavigate()
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
                    onClick={() => navigateToUrl('/play/finish/view')}
                >Finish
                </button>
            }
        </>
    )

}

export default NavigationQuestionButtons