import React, { useState, useEffect } from 'react'
import { Row, Col, Image, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import Rating from './Rating'
import { useSelector} from 'react-redux'
import { useParams,Link } from 'react-router-dom'

function RestaurentDetails() {
  // const [details, setDetails] = useState([])

  const { id } = useParams()
  const restuarantReducer= useSelector(state => state.restaurantReducer)
   
  const { restaurants } = restuarantReducer
  // useEffect(() => {
  //   const fetchdata = async () => {
  //     await fetch('/restaurants.json')
  //       .then(data => data.json())
  //       .then(data => setDetails(data.restaurants))
  //   }
  //   fetchdata();
  // }, [])
  //  console.log("data is ", details);

  
  const restuarentdata = restaurants.find(item => item.id == id)
  console.log("our data is ", restuarentdata);


  return (
    <>
    <Link className='btn btn-outline-dark my-2 mx-5 rounded btn-sm' to='/'>Back</Link>
      {restuarentdata ? (
        <Row className='my-3 mx-4'>
          <Col   md={3} >
            <Image  src={restuarentdata.photograph} alt={restuarentdata.name} fluid />

          </Col>
          <Col md={4}>
            <ListGroup.Item>
              <h2>{restuarentdata.name}</h2>
              <h4>{restuarentdata.neighborhood}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Cuisine: {restuarentdata.cuisine_type}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Address: {restuarentdata.address}</p>
            </ListGroup.Item>
            
          </Col>
          <Col md={5}>
            <ListGroup>
            <ListGroup.Item className='text-center'>
            <h4>Operating Hours</h4>
            <p> Monday: {restuarentdata.operating_hours.Monday}</p>
            <p> Tuesday: {restuarentdata.operating_hours.Tuesday}</p>
            <p> Wednesday: {restuarentdata.operating_hours.Wednesday}</p>
            <p> Thursday: {restuarentdata.operating_hours.Thursday}</p>
            <p> Friday: {restuarentdata.operating_hours.Friday}</p>
            <p> Saturday: {restuarentdata.operating_hours.Saturday}</p>
            <p> Sunday: {restuarentdata.operating_hours.Sunday}</p>
          </ListGroup.Item>
            </ListGroup>
          
          </Col>
         <Row>
          <Card className='my-3 mx-3 p-3 rounded card'>
            
            <Rating data={restuarentdata.reviews} />
           
             
          </Card>

         </Row>

        </Row>

        
      ) : null}



    </>

  )
}

export default RestaurentDetails