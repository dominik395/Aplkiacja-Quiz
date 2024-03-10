import React from "react";
import { useState } from "react";

const QuestionsButtons = () => {
    const [hover, setHover] = useState(0)

    return (
        <>
            <div className="buttons are-medium is-centered m-3 p-3">
                <button className={`button is-success is-outlined ${hover === 1 && 'is-hovered'}`}
                    onClick={() => setHover(1)}
                >TRUE</button>

                <button className={`button is-danger is-outlined ${hover === 2 && 'is-hovered'}`}
                    onClick={() => setHover(2)}
                >FALSE</button>
            </div>
        </>
    )
}

export default QuestionsButtons