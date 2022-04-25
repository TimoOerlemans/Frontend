import axios from "axios";

const Product_API_BASE_URL = "http://localhost:8080/api/v1/";

class ProductServices{
    getProducts(){
        return axios.get(Product_API_BASE_URL + "Products/");
    }
    saveProducts(product){
        return axios.post(Product_API_BASE_URL + "Product" + product)
    }
}
export default new ProductServices()