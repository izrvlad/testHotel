import {all, call, put, takeEvery} from 'redux-saga/effects';
import {asyncHotels, fillHotels, setError, startFetch, stopFetch} from "../reducers/hotels/hotelsReducer";


async function fetchHotels([town, dateIn, days]) {
    const dateOut = getDayOut(dateIn, days)
    const uri = `https://engine.hotellook.com/api/v2/cache.json?location=${town}&currency=rub&checkIn=${dateIn}&checkOut=${dateOut}`;
    return fetch(uri)
}

function formatResponse(hotels, days, date) {
    return hotels.map(hotel => {
        return {
            hotelName: hotel.hotelName,
            price: hotel.priceFrom,
            stars: hotel.stars,
            isFavourite: false,
            days: days,
            date: date
        }
    })
}

function getDayOut(dayIn, days) {
    const data = dayIn.split('-')
    let date = new Date(+data[0], +data[1] - 1, +data[2] + +days)
    const year = date.getFullYear()
    const mounth = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
    const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
    return `${year}-${mounth}-${day}`
}


export function* hotelsAsync({payload: {town, dateIn, days}}) {
    try {
        yield put(startFetch({town, dateIn, days}))
        const data = yield call(fetchHotels, [town, dateIn, days])
        const json = yield call(() => new Promise(res => res(data.json())))
        console.log(json)
        const hotels = formatResponse(json, days, dateIn)
        yield put(fillHotels(hotels))
        yield put(stopFetch())
    } catch (e) {
        console.log(e)
        yield put(setError())
    }
}

function* watchHotelsAsync() {
    yield takeEvery(asyncHotels().type, hotelsAsync)
}


export default function* rootSaga() {
    yield all([
        watchHotelsAsync(),

    ])
}