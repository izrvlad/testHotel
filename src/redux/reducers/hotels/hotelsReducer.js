import {createAction, createSlice} from '@reduxjs/toolkit'

const initialState = {
    hotels: [],
    favouriteHotels: [],
    date: null,
    error:false,
    town: "",
    days: 1,
    isFetching: false,
    slides: [
        'slide1.png',
        'slide2.png',
        'slide3.png',
        'slide4.png'
    ]
}
export const asyncHotels = createAction('FETCH_HOTELS_ASYNC', (town, dateIn, days) => {
    return {
        payload: {
            town, dateIn, days
        }
    }
})

const hotelSlice = createSlice({
    name: "hotels",
    initialState,
    reducers: {
        startFetch(state, action) {
            state.isFetching = true
            state.town = action.payload.town
            state.date = action.payload.dateIn
            state.days = action.payload.days
            state.error = false
        },
        setError(state){
            state.error = true
        }
        ,
        stopFetch(state) {
            state.isFetching = false
        },
        fillHotels(state, action) {
            state.hotels = [...action.payload]
        },
        addFavourite(state, action) {
            const favouriteIndex = state.hotels.findIndex(el => el.hotelName === action.payload)
            state.hotels[favouriteIndex].isFavourite = true
            const favourite = state.hotels[favouriteIndex]
            state.favouriteHotels.push(favourite)
        },
        removeFavourite(state, action) {
            const favouriteIndex = state.hotels.findIndex(el => el.hotelName === action.payload)
            if (favouriteIndex !== -1) {
                state.hotels[favouriteIndex].isFavourite = false
            }
            state.favouriteHotels = state.favouriteHotels.filter(el => el.hotelName !== action.payload)
        }

    },
})

export default hotelSlice.reducer
export const {fillHotels, addFavourite, removeFavourite, startFetch, stopFetch,setError} = hotelSlice.actions
