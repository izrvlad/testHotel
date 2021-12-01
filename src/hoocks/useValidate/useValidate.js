import {useState} from "react";

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateInput(validation, value) {
    let isValid = true
    let errorMessage = ''
    if (validation.required) {
        const res = value.trim() !== ''
        errorMessage = res ? errorMessage : 'Поле должно быть заполнено'
        isValid = isValid && res
    }
    if (validation.minLength) {
        const res = value.length >= validation.minLength
        errorMessage = res ? errorMessage : `Минимальная длина составляет ${validation.minLength} символов`
        isValid = isValid && res
    }
    if (validation.email) {
        const res = validateEmail(value)
        isValid = isValid && res
        errorMessage = res ? errorMessage : 'Введите корректный email'
    }
    if (validation.onlyLatinic) {
        const res = !/[а-яА-ЯЁё]/.test(value)
        isValid = isValid && res
        errorMessage = res ? errorMessage : 'Запрещено испоьзовать кирилицу'
    }
    return {isValid, errorMessage}
}

export default function useValidate(formControls) {
    const [controls, setControls] = useState(formControls)

    const isFormValid = Object.keys(controls).reduce((prev, current) => {
        return prev && controls[current].valid
    }, true)
    const onInputChange = (controlName, event) => {
        const currentControls = {...controls}
        const currentControl = {...currentControls[controlName]}
        currentControl.touched = true
        currentControl.value = event.target.value
        const validation = validateInput(currentControl.validation, currentControl.value)
        currentControl.valid = validation.isValid
        currentControl.errorMessage = validation.errorMessage
        currentControls[controlName] = {...currentControl}
        setControls(currentControls)
    }

    return {controls, onInputChange, isFormValid}
}