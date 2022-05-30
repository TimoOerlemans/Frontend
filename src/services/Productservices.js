import axios from "axios";

const Product_API_BASE_URL = "http://localhost:8080/api/v1/";

class ProductServices{
    getProducts(){
        return axios.get(Product_API_BASE_URL + "products");
    }
    saveProducts(product){
        return axios.post(Product_API_BASE_URL + "add" + product)
    }
    deleteProducts(productId) {
        return axios.delete(Product_API_BASE_URL + "delete/" + productId)
    }
}
export default new ProductServices()