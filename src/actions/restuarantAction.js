import {
    RESTUARENT_LIST_SUCCESS,RESTUARENT_LIST_FAIL,RESTUARENT_LIST_REQUEST
} from '../constants/restuarantConstants'

import axios from 'axios'


export const listRestaurants = () => async (dispatch) =>
{
    try
    {
      const { data } = await axios.get('/restaurants.json')
      dispatch({
          type: RESTUARENT_LIST_SUCCESS, payload: data.restaurants
      })
    }
    catch(error)
    {
        dispatch({
            type: RESTUARENT_LIST_FAIL, payload: error
        })
    }
 }
