import React from 'react'
import '../pages/Pizza.css';
import { Card } from 'react-bootstrap';
import Button from "@mui/material/Button";
import ProductServices from '../services/Productservices';


class OwnPizzas extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [],
      update: false
    }
    this.getProductByAccount = this.getProductByAccount.bind(this)
    this.deleteProducts = this.deleteProducts.bind(this)
  }
  componentDidMount(){
    const accountID = localStorage.getItem('userId');
    ProductServices.getProductByAccount(accountID).then((res) => {
      this.setState({ products : res.data});
    });

    }

  getProductByAccount() {
      ProductServices.getProductByAccount().then((res) => {
        this.setState({ products: res.data});
      });
  }

  deleteProducts(productId) {
  ProductServices.deleteProducts(productId).then(() => {
    this.getProductByAccount()
  })
  }

render() {
  return (
    <div className='Empty'>          
      <h1 className='Test' data-testid="pizza" >Here are all the pizza's</h1>
<Button id="add-page-link" href="/AddProduct">Add Pizza</Button>
<div  className='cardContainer'>

{this.state.products.map((product) => (   
  
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
    <div className='Deletebtn'> 
      <Button className="Delete" onClick={() => this.deleteProducts(product.id)}>
        Delete
      </Button>
      <Button variant="outlined" onClick={() => {window.location.href=`/UpdateProduct/${product.id}`}}>
        Update Item
      </Button>
    </div>
  </Card.Body>
</Card>
))}
</div>
</div>
    )  
}
}

export default OwnPizzas