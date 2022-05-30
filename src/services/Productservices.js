import axios from "axios";

const Product_API_BASE_URL = "http://localhost:8080/api/v1/";

class ProductServices{
    getProducts(){
        return axios.get(Product_API_BASE_URL + "products");
    }
    saveProducts(product){
        return axios.post(Product_API_BASE_URL + "product" + product)
    }
    deleteProducts(productId) {
        return axios.delete(Product_API_BASE_URL + "products/" + productId)
    }
    updateProducts(productId) {
        return axios.updateProducts(Product_API_BASE_URL + "product" + productId)
    }
    getProductbyId(productId){
        return axios.getProductbyId(Product_API_BASE_URL + "/product" + productId)
    }
}
export default new ProductServices()