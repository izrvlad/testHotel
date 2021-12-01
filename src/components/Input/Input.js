import React from 'react'
import './Input.css'
import {Field, ErrorMessage } from "formik";

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = props => {
    const inputType = props.type || 'text'
    const cls = ['Input']

    if (isInvalid(props)) {
        cls.push('invalid')
    }
     const renderError = (message) => <span>{message}</span>;
    return (
        <div className={"Input"}>
            <label htmlFor={props.name}>{props.label}</label>
            <Field
                name={props.name}
                type={inputType}
            />
             <ErrorMessage name={props.name} render={renderError} />

        </div>
    )
}

export default Input