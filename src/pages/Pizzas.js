import React, { Component } from 'react'
import '../pages/Card.css'
import { Card, Col, Container, Row } from 'react-bootstrap';
import ProductsServices from '../services/Productservices';
import '../Components/Style.css';


class Pizzas extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }

componentDidMount(){
  ProductsServices.getProducts().then((res) => {
    this.setState({ products: res.data});
  });
}

render() {
  return (
    <div className='Content'>
    {this.state.products.map((product) => (             
<Container>
<Card>
  {/* <Card.Header>{product.name}</Card.Header> */}
  <Card.Body>
    <blockquote className="blockquote mb-0">
    <img
     className="card-image"
     src={"./assets/overview.png"}
       alt="First slide"
   />  
      <p>
        {' '}
      Overview {''}
      </p>
      <p>
        {/* Price: {product.price} <br></br> */}
        {/* Ingredients: {product.ingredients} */}
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