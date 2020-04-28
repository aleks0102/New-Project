import React from "react";
import style from "./main-button.module.css"

const MainButton = props => {
    return(
        <div>
            <h2>{props.title}</h2>
            <button className={style.but} onClick={props.onSubmit}>{props.text}</button>
        </div>
    )
};

export default MainButton;
