import React, {useEffect} from "react";
import {Search} from "../../components/Search/Search";
import './Hotels.css'
import {Fovorites} from "../../components/Fovorites/Fovorites";
import {Result} from "../../components/Result/Result";
import {useDispatch} from "react-redux";
import {asyncHotels} from "../../redux/reducers/hotels/hotelsReducer";

export function Hotels() {
    const dispatch = useDispatch()
    useEffect(() => {
        const date = new Date()
        const dateIn = date.toISOString().split("T")[0]
        dispatch(asyncHotels('Москва', dateIn, 1))
    }, [dispatch])
    return (
        <div className="Hotels">
            <Search/>
            <Fovorites/>
            <Result/>
        </div>
    )
}