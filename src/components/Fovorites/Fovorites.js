import React, {useState} from "react";
import './Fovorites.css'
import {Order} from "../Order/Order";
import {Cards} from "../Cards/Cards";
import {useSelector} from "react-redux";
import {orderByState} from "./utils";

export function Fovorites() {
    const hotels = useSelector(state => state.hotelsState.favouriteHotels)
    const [orderState, setOrderState] = useState({
        price: '',
        stars: ''
    })

    const favouriteHotels = orderByState(orderState, hotels)
    const orderClickHandler = (e) => {
        const id = e.target.id
        setOrderState((prev) => {
            return {
                price: '',
                stars: '',
                [id]: prev[id] === '' || prev[id] === 'desc' ? 'ask' : 'desc'
            }
        })
    }
    return (
        <div className="Favorites">
            <div className="favorites__header">Избранное</div>
            <div className="favorites__control">
                <Order id="stars" orderClass={orderState.stars} text="Рейтинг" onClick={orderClickHandler}/>
                <Order id="price" orderClass={orderState.price} text="Цена" onClick={orderClickHandler}/>
            </div>
            <Cards isImage={false} hotels={favouriteHotels}/>

        </div>
    )
}