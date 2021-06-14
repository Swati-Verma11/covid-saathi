import React , { useState , useEffect } from 'react'
import {Row ,Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
    const [ products , setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/products')
            setProducts(data)
        }

        fetchProducts()
    },[])
    
    return (
        <>
        <h1>Nearest Items</h1>
        <Col>
            {products.map(product =>
                <Row key={product._id } sm={12} md={6} lg={4} xl ={3}>
                <Product product ={product}/>
                </Row>)}
        </Col>
        </>
    )
} 

export default HomeScreen 