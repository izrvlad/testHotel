import React from "react";
import './Button.css'


export const Button = (props) => {
    return (
        <button
            type={"Submit"}
            className={"Button"}
        >{props.content}</button>
    )
}