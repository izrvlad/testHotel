import {combineReducers} from 'redux'
import hotelsReducer from "./hotels/hotelsReducer";


export const rootReducer = combineReducers({
    hotelsState: hotelsReducer,

})