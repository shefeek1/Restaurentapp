import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { restuarantListReducer } from './reducers/restaurantReducer'


const reducers = combineReducers({
    restaurantReducer:  restuarantListReducer,
})


const middleware= [thunk]

const store=createStore(reducers,applyMiddleware(...middleware))


export default store
