import React from "react";
import { useNavigate } from 'react-router-dom'

const FinishView = ({ stats }) => {
    const navigateToUrl = useNavigate()
    return (
        <>
            <div className="message is-info is-medium p-2 m-2">
                <div className="message-header">
                    <p>Your score: {stats.points}</p>
                    <button className="delete" 
                        aria-label="delete" 
                        onClick={() => navigateToUrl('/')}
                        ></button>
                </div>

                <div className="message-body" style={{ display: "none"}}></div>

                <div className="message-body">
                    <p className="is-size-3 has-text-danger">Wrong Answer: </p>
                    <br />
                    <ul>
                        {stats.wrongAnswer.map((el, idx) => (
                            <li key={idx}>{el}</li>
                        ))}
                    </ul>
                </div>
                <hr />
                <div className="message-body">
                    <p className="is-size-3 has-text-success">Correct Answer:</p>
                    <br></br>
                    <ul>
                        {stats.correctAnswer.map((el, idx) => (
                            <li key={idx}>{el}</li>
                        ))}
                    </ul>
                </div>
            </div>            
        </>
    )
}

export default FinishView