import React, { Component } from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import '../pages/AddProduct.css'
import Productservices from "../services/Productservices";

class UpdateProduct extends Component{
    constructor(props){
        super(props)

        this.state= {
            productId: this.props.match.params.productId,
            name: '',
            ingredients: '',
            price: ''
        }
        this.UpdateProduct = this.UpdateProduct.bind(this);

    }

    componentDidMount(){
        Productservices.getProductById(this.state.productId).then((res) => {
            let product = res.data;
            this.setState({name: product.name,
            ingredients: product.ingredients,
            price: product.price
        });
        });
    }

    UpdateProduct = (e) => {
        e.PreventDefault();
        let product = {name: this.state.name, ingredients: this.state.ingredients, price: this.state.price};
        console.log('product => ' + JSON.stringify(product));
    }

    changeNameHandler =  (event) => {
        this.setState({name: event.target.value});
    }   
    changeIngredientsHandler =  (event) => {
        this.setState({ingredients: event.target.value});
    }   
    changePriceHandler =  (event) => {
        this.setState({price: event.target.value});
    }   
    cancel() {
        this.props.history.push('/products');
    }

    render(){
        return(
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Product</h3>
                            <div className="card-body">
                                <form>
                                <div className = "form-group">
                                        <label> Name: </label>
                                        <input placeholder="Name" name="name" className="form-control" 
                                            value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Ingredients: </label>
                                            <input placeholder="Ingredients" name="ingredients" className="form-control" 
                                                value={this.state.ingredients} onChange={this.changeIngredientsHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="Price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.UpdateProduct}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default UpdateProduct