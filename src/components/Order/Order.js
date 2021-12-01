import React from "react";
import './Order.css'

export function Order(props) {
    const cls = ['Order', props.orderClass].join(' ')
    return (
        <span id={props.id} onClick={props.onClick} className={cls}>{props.text} </span>
    )
}