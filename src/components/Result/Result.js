import React from "react";
import './Result.css'
import Slider from "../Slider/Slider";
import {Cards} from "../Cards/Cards";
import {useSelector} from "react-redux";
import {correctCounter, formatHeaderDate} from "./utils";


export function Result() {
    const hotels = useSelector(state => state.hotelsState)
    const count = hotels.favouriteHotels.length
    return (
        <div className="Result">
            <div className="results__header">
                <div className="results__info">
                    <span>Отели</span>
                    <span>{hotels.town}</span>
                </div>
                <div className="results__date">{formatHeaderDate(hotels.date)}</div>
            </div>
            <div className="swiper__wrap">
                <Slider slides={hotels.slides}/>
            </div>
            <div className="favorite__wrap">
                <p>Добавлено в Избранное: <span>{count} </span>{correctCounter(count, 'отель', 'отеля', 'отелей')}</p>
            </div>
            <Cards isImage={true} hotels={hotels.hotels}/>

        </div>
    )
}