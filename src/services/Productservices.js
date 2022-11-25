import axios from "axios";

const Product_API_BASE_URL = "http://localhost:8080/api/v1/";

class ProductServices{
    getProducts(){
        return axios.get(Product_API_BASE_URL + "product");
    }
    saveProducts(product){
        return axios.post(Product_API_BASE_URL + "product" + product);
    }
    deleteProducts(productId) {
        return axios.delete(Product_API_BASE_URL + "product/" + productId);
    }
    updateProduct(productId, product) {
        return axios.put(Product_API_BASE_URL + "product/" + productId, product);
    }
    getProductById(productId){
        return axios.get(Product_API_BASE_URL + "product/" + productId);
    }
    getProductByAccount(accountID){
        return axios.get(Product_API_BASE_URL + "products/" + accountID);
    }
}
export default new ProductServices()
