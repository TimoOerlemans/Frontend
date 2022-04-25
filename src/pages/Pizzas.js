import React, { Component } from 'react'
import '../pages/Pizza.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Button from "@mui/material/Button";
import axios from "axios";
import ProductServices from '../services/Productservices';
import { List } from '@material-ui/core';

class Pizzas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }
  componentDidMount(){
    ProductServices.getProducts().then((res) => {
      this.setState({ products: res.data});
    });
    }

render() {
  return (
    <div className='Empty'>          
    {this.state.products.map((product) => (     
<Container>
<Card>
<Card.Header>{ product.name }</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
    <img
     className="card-image"
     src={"./assets/overview.png"}
       alt="First slide"
       width="50px;"
       height="50px;"
       />  

      <p>
        Ingredients: { product.ingredients }
      </p>
      <p>
        Price: {product.price }
      </p>
    </blockquote>
  </Card.Body>
</Card>
</Container>
))}
  </div>
    )  
}
}

export default Pizzas