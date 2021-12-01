import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './slider.css'
import {path} from "../../config";

export default (props) => {
    let count = 1
    const w = window.innerWidth
    if (w < 1050 && w > 820 || w < 480 && w > 426) count = 2
    if (w < 764 && w > 621 || w < 1140 && w > 1050) count = 3
    if (w > 764 && w < 825 || w > 1140) count = 4
    const res = props.slides.map((slide, i) => {
        return (
            <SwiperSlide key={i}>
                <img src={path + slide} alt="Пейзажи локации"/>
            </SwiperSlide>
        )
    })
    return (
        <Swiper
            className={"Slider"}
            spaceBetween={20}
            loop={true}
            slidesPerView={count}


        >
            {res}
        </Swiper>
    );
};