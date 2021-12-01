import React from "react";
import './Message.css'

export function Message(props){
    return <div className={props.type}>Во время загрузки данных произошла ошибка, попробуйте снова</div>
}