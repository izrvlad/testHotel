import React from "react";
import './Card.css'
import StarRatings from 'react-star-ratings';
import {formatCardDate} from "./utils";
import {useDispatch} from "react-redux";
import {path} from "../../config";
import {addFavourite, removeFavourite} from "../../redux/reducers/hotels/hotelsReducer";

export function Card(props) {
    const dispatch = useDispatch()
    const changeFavorHandler = () => {
        if (!props.isFavourite) {
            dispatch(addFavourite(props.hotelName))
        } else {
            dispatch(removeFavourite(props.hotelName))
        }
    }
    return (
        <div className="Card">
            {props.isImage ? <div className="card__photo">
                <img src={path + "house.png"} alt="hotel"/>
            </div> : null}
            <div className={"card__content"}>
                <div className="card__top">
                    <div className="card__hotel">{props.hotelName}</div>
                    <div className="card__favor">
                        <img onClick={changeFavorHandler} src={path + "heart.svg"} alt="Добавить в избранное"/>
                    </div>
                </div>
                <div className="card__center">
                    <div className="card__date">{formatCardDate(props.date, props.days)}</div>
                </div>
                <div className="card__bottom">
                    <div className="card__raiting">
                        <StarRatings
                            rating={props.stars}
                            starRatedColor="#CDBC1E"
                            numberOfStars={5}
                            starDimension="17px"
                        />
                    </div>
                    <div className="card__price">Price:<span>{props.price} ₽</span></div>
                </div>
            </div>
        </div>
    )
}