import axios from "axios";

const ACCOUNT_API_BASE_URL = "http://localhost:8080/accounts/add";
const API_URL = "http://localhost:8080/accounts/email";

class AccountService{

    createAccount(account){
        return axios.post(ACCOUNT_API_BASE_URL, account)
    }

    LoginUser (emailID) {
        return axios.get(API_URL + "/" + emailID);
    }

}

export default new AccountService()