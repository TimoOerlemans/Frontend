import React, {Component} from 'react';
import AccountService from '../../services/Accountservice';

class CreateAccount extends Component{
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            emailID: "",
            password: "",
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveAccount = this.saveAccount.bind(this);
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value})
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value})
    }

    changeEmailHandler = (event) => {
        this.setState({emailID: event.target.value})
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value})
    }

    saveAccount =(e) => {
        e.preventDefault();

        let account = {firstName: this.state.firstName, lastName: this.state.lastName, emailID: this.state.emailID, password: this.state.password}
        console.log('account =>' + JSON.stringify(account));
        
        AccountService.createAccount(account).then(res => {
            this.props.history.push('/add')
        });
    
    }

   


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="">
                            <h3 className="text-center"> Add Account </h3>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First name" name="firstName" className="form-control"
                                                   value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last name" name="lastName" className="form-control"
                                                   value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email Address" name="emailID" className="form-control"
                                                   value={this.state.emailID} onChange={this.changeEmailHandler} />
                                        </div>
                                        <div className="form-group">
                                            <label> Password : </label>
                                            <input placeholder="Password" name="password" type="password" className="form-control"
                                                   value={this.state.password} onChange={this.changePasswordHandler} />
                                        </div>
                                        <button className="btn btn-danger" onClick={this.saveAccount}> Save</button>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateAccount