import {Button} from "../Button/Button";
import React from "react";
import Input from "../Input/Input";
import './Search.css'
import {useDispatch, useSelector} from "react-redux";
import {asyncHotels} from "../../redux/reducers/hotels/hotelsReducer";
import {Form, Formik} from "formik";
import {validationSchemaOfSearchForm} from "../../hoocks/useValidate/controls";


export function Search() {

    const dispatch = useDispatch()
    return (
        <div className={'Search'}>
                 <Formik
                    initialValues={validationSchemaOfSearchForm.initialValues}
                    validationSchema={validationSchemaOfSearchForm.validationSchema}
                    onSubmit={(values)=>{
                         dispatch(asyncHotels(values.town, values.date, +values.days))
                    }}

                >
                <Form>
                    <Input
                        label={"Локация"}
                        type={"text"}
                        name={"town"}
                    />
                    <Input
                        label={"Дата заселения"}
                        type={"date"}
                        name={"date"}

                    />
                    <Input
                        label={"Колличество дней"}
                        type={"number"}
                        name={"days"}
                    />

                    <Button content={"Подобрать"} />
                </Form>
                </Formik>
        </div>
    )
}