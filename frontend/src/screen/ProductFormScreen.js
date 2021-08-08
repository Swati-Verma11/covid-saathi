import React , { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row , Col , Image , ListGroup ,Card , Button, ListGroupItem } from 'react-bootstrap'
import axios from 'axios' 

const ProductScreen =() => {
   
    return <div>
    <Link className = 'btn btn-light my-3 ' to ='/'>
        Go Back
    </Link>
    <Row>
        <Col md= {6}>
            <Image src = {product.image} alt ={product.type} fluid/>
        </Col>
        <Col md= {3}>
            <ListGroup variant = 'flush'>
                <ListGroup.Item>
                    <h3>{ product.type }</h3>
                </ListGroup.Item>
                <ListGroupItem>
                    Price : ${product.price}
                </ListGroupItem>
                <ListGroupItem>
                    Description : {product.description}
                </ListGroupItem>
            </ListGroup>
        </Col>
        <Col md = {3}>
            <Card>
                <ListGroup variant = 'flush' >
                    <ListGroupItem>
                        <Button type="button" className="btn btn-secondary btn-lg btn-block" >
                            Directions 
                        </Button>
                    </ListGroupItem>
                
                    
                </ListGroup>
            </Card>
        </Col>
    </Row>
    </div>
}

export default ProductScreen