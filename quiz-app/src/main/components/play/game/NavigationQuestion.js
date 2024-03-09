import React from "react";

const NavigationQuestion = ({ listLength, current, changeCategoryNumber }) => {
    return (
        <>
            <nav className="pagination is-medium is-centered m-1 pt-4" role="navigation" aria-label="pagination">

                <button className={`pagination-previous`}
                    onClick={() => changeCategoryNumber(true)} 
                    disabled={current === 0}
                    >Previous</button>

                <button className={`pagination-next ${current+1 === listLength && 'is-disabled'}`}
                    onClick={() => changeCategoryNumber(false)}
                    disabled={current+1 === listLength}
                    >Next page</button>

                <ul className="pagination-list">
                    {[...Array(listLength).keys()].map((el, idx) => (
                        <li key={idx+1}>
                            <i className={`pagination-link ${idx === current && 'is-current'}`}
                             aria-label="Page 1" aria-current="page">{idx+1}</i>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default NavigationQuestion