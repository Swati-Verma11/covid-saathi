import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({product}) =>{
    return (
        <Card className='my-3 p-3 w-75 rounded'>
            <Card.Body>
            <a href = {`/product/${product._id}`}>
                <Card.Title as ='div'>
                    <strong>{ product.type}</strong>
                </Card.Title>
            </a>
            <Card.Text as ='div'>
                {product.location}
            </Card.Text>
            <Card.Text as ='h3'>${product.price}
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product