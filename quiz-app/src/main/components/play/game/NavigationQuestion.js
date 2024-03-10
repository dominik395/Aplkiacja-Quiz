import React from "react";
import NavigationQuestionButtons from "../../../containers/NavigationQuestionButtons";

const NavigationQuestion = ({ listLength, current, changeCategoryNumber, changeCategoryNumber2 }) => {
    return (
        <>
            <nav className="pagination is-medium is-centered m-1 pt-4" role="navigation" aria-label="pagination">
                <NavigationQuestionButtons
                    current={current} 
                    changeCategoryNumber={changeCategoryNumber}
                    listLength={listLength}/>

                <ul className="pagination-list">
                    {[...Array(listLength).keys()].map((el, idx) => (
                        <li key={idx+1}>
                            <button className={`pagination-link ${idx === current && 'is-current'}`}
                             aria-label="Page 1" 
                             aria-current="page"
                             value={idx}
                             onClick={e => changeCategoryNumber2(e.target.value)}
                             >{idx+1}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default NavigationQuestion