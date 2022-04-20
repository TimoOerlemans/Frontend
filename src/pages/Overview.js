import React, { Component } from 'react'
import '../Components/Card.css'
import {BrowserRouter as Router} from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import OrderServices from '../services/OrderServices';
import '../Components/Style.css';


class Overview extends Component {
  constructor(props) {
    super(props)

    this.state = {
      orders: []
    }
  }

componentDidMount(){
  OrderServices.getOrders().then((res) => {
    this.setState({ orders: res.data});
  });
}

render() {
  return (
    <div className='Content'>
    {this.state.orders.map((order) => (             
<Container>
<Card>
  <Card.Header>Overview</Card.Header>
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
        Boekdatum: {order.bookdate} <br></br>
        Reisorganisatie: {order.flight}
      </p>
      
    </blockquote>
  </Card.Body>
</Card>

<Card>
  <Card.Header>Vakantie</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
    <img
     className="card-image"
     src={"./assets/vacation.png"}
       alt="First slide"
   />
      <p>
     
        {' '}
      Vakantie {''}
      </p>
      <p>
        
        Vertrek: {order.departure} <br></br>
        Reisduur: {order.tripduration} <br></br>
        Aantal reizigers: {order.tourgroup} <br></br>
        Verzorging: {order.accomodation} <br></br>
      </p>
    </blockquote>
  </Card.Body>
</Card>

<Card>
  <Card.Header>Vluchtinformatie</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
    <img
     className="card-image"
     src={"./assets/Flight.webp"}
       alt="First slide"
   />
      <p>
     
        {' '}
      Vluchtinformatie {' '}
      </p>
      <p>

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

export default Overview