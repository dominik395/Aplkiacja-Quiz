import React from "react";

const PlayMainViewForm = ({ categoryList, onSubmitForm, onChangeData }) => {
    return (
        <>
            <div className="containter">
                <div className="columns is-centered">
                    <div className="column is-half">
                        <form onSubmit={(e) => onSubmitForm(e)}>
                            <div className="field is-medium">
                                <label className="label is-medium">Chosse category</label>
                                <div className="control">
                                    <div className="select is-medium">
                                        <select onChange={e => onChangeData(e)}>
                                            {categoryList.map((el, idx) => (
                                                <option key={idx} data-id={el.categoryId}>{el.categoryName}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <button className="button is-primary is-rounded">START</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayMainViewForm