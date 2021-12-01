import React, {useContext} from "react";
import Input from "../../components/Input/Input";
import {Form, Formik} from "formik";
import './Auth.css'
import {Button} from "../../components/Button/Button";
import {AuthContext} from "../../context/AuthContext";
import {validationSchemaOfLoginForm} from "../../hoocks/useValidate/controls";


export const Auth = () => {
    const auth = useContext(AuthContext)


    return (
        <div className={'fullscreen'}>
            <div className={'form'}>
                <Formik
                    initialValues={validationSchemaOfLoginForm.initialValues}
                    validationSchema={validationSchemaOfLoginForm.validationSchema}
                    onSubmit={(values)=>{
                        auth.login(values.login)
                    }}

                >
                <Form>
                    <h1>Simple Hotel Check</h1>
                    <Input
                        label={"Логин"}
                        type={"email"}
                        name={"login"}
                    />
                    <Input
                        label={"Пароль"}
                        type={"password"}
                        name={"password"}
                    />
                    <Button content={"Войти"} />
                </Form>
                </Formik>
            </div>
        </div>
    )
}