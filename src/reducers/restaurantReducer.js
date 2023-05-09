import {
    RESTUARENT_LIST_SUCCESS,RESTUARENT_LIST_FAIL,RESTUARENT_LIST_REQUEST
} from '../constants/restuarantConstants'


export const restuarantListReducer = (states = {restaurants: []}, actions) => {

    switch(actions.type){
        case RESTUARENT_LIST_SUCCESS:
            return { restaurants: actions.payload }

        case  RESTUARENT_LIST_FAIL: 
            return  { restaurants: actions.payload }   

        default: return states    
    }

}