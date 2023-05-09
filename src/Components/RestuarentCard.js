import React from 'react'
import { Card,} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function RestuarentCard({ data }) {
  return (
    <Link to={`/restaurents/${data.id}`}>
    <Card className='p-3' style={{ width: '17rem' }}>
    <Card.Img variant="top" src={data.photograph} />
    <Card.Body>
      <Card.Title>
          <h4>{data.name}</h4>
        </Card.Title>
      <Card.Text>
        <h5>Cuisine:{data.cuisine_type}</h5>
      </Card.Text>

      <Card.Text>
        <h5>{data.neighborhood}</h5>
      </Card.Text>
      
    </Card.Body>
    </Card>
  </Link>
  )
}

export default RestuarentCard
