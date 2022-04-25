import axios from "axios";

const Category_API_BASE_URL = "http://localhost:8080/api/v1/categorys";

class ProductServices{
    getCategory(){
        return axios.get(Category_API_BASE_URL);
    }
}
export default new ProductServices()