import React from "react";
import {Card} from "../Card/Card";
import './Cards.css'
import {useSelector} from "react-redux";
import {Loader} from "../Loader/Loader";
import {Message} from "../Message/Message";


export function Cards(props) {
    const classes = ['Cards']
    const hotelState = useSelector(state => state.hotelsState)
     const hotelList = props.hotels.map((hotel, index) => {
        return <Card
            key={index}
            isFavourite={hotel.isFavourite}
            isImage={props.isImage}
            hotelName={hotel.hotelName}
            price={hotel.price}
            stars={hotel.stars}
            date={hotel.date}
            days={hotel.days}
        />
    })
    let result = hotelList
    if (hotelState.loading) {
        classes.push('loader__wrapper')
        result = <Loader/>
    }
    if(hotelState.error){
        classes.push('loader__wrapper')
        result = <Message type={"error"}/>
    }
    return (
        <div className="cards__wrapper">
            <div className={classes.join(" ")}>
                {result}
            </div>
        </div>

    )
}