import React, { Component } from 'react'
import '../pages/UpdateProduct.css'
import { useParams } from 'react-router-dom';
import Productservices from "../services/Productservices";

export const withParams = Component => props => {
    let params = useParams();
    return <Component  {...props} params={params} />;
}

class UpdateProduct extends Component {
    constructor(props) {
        super(props)
        let { productId } = props.params;
        this.state = {
            productId: productId,
            name: "",
            ingredients: "",
            price: ""
        }
        this.updateProduct = this.updateProduct.bind(this);

    }

    componentDidMount() {
        Productservices.getProductById(this.state.productId).then((res) => {
            let product = res.data;
            this.setState({
                name: product.name,
                ingredients: product.ingredients,
                price: product.price
            })
        });
    }

    updateProduct() {
        let product = { id: this.state.productId, name: this.state.name, ingredients: this.state.ingredients, price: this.state.price };
        Productservices.updateProduct(this.state.productId, product);
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }
    changeIngredientsHandler = (event) => {
        this.setState({ ingredients: event.target.value });
    }
    changePriceHandler = (event) => {
        this.setState({ price: event.target.value });
    }
    cancel() {
        this.props.history.push('/products');
    }

    render() {
        return (
            <div className='Empty'>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6">
                            <h3 className="text-center">Update Product</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Name: </label>
                                        <input placeholder="Name" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Ingredients: </label>
                                        <input placeholder="Ingredients" name="ingredients" className="form-control"
                                            value={this.state.ingredients} onChange={this.changeIngredientsHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Price: </label>
                                        <input placeholder="Price" name="price" className="form-control"
                                            value={this.state.price} onChange={this.changePriceHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={() => this.updateProduct()}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withParams(UpdateProduct);