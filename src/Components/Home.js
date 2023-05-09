import React, {useState,useEffect } from 'react'
import {Row, Col} from 'react-bootstrap'
import RestuarentCard from './RestuarentCard'

import  { useDispatch, useSelector}  from 'react-redux'
import   { listRestaurants }  from'../actions/restuarantAction'

function Home() {

  const dispatch=useDispatch()
  const restaurantReducer = useSelector(state => state.restaurantReducer)
  const  { restaurants }= restaurantReducer
  
  useEffect(() => {
    dispatch(listRestaurants())
  },[])
  console.log(restaurants);
  // const [Hotel, setHotel] = useState([])

  //  useEffect(() => {
  //    const fetchdata= async () =>
  //    {
  //      await fetch('/restaurants.json')
  //      .then(data=>data.json())
  //      .then(data=>setHotel(data.restaurants))
  //    }
  //    fetchdata();
  // }, [])
  // console.log("our data is",Hotel);
  
  
   
  return (
    <Row className='ms-4'>
         {restaurants.map(item=>
          (
            <Col  className='py-3' sm={12} md={6} lg={4} xl={3} >
            <RestuarentCard  data={item}/>
             
            </Col>
         ))}


    </Row>
  )
}
export default Home
