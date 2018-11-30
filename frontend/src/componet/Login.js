import * as React from "react";
import axios from "axios";
import {Trans} from "react-i18next";
import {Redirect} from "react-router-dom";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user:{
                name:undefined,
                lastName: undefined,
                email: undefined,
                nickName: undefined
            },
            nick: undefined
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        axios.post('/api/userCreate',this.state.user);
    }

    updateState = (name,event) => {
        let newUser = Object.assign({},this.state.user);
        newUser[name] = event.target.value;
        this.setState({user:newUser});
    };

    render() {

        return (

            <div className="inner contact">

                <div className="contact-form">

                    <form onSubmit={this.handleSubmit}>

                        <div className="col-xs-6 wow animated slideInLeft" data-wow-delay=".5s">

                            <label htmlFor="name">Name</label>
                            <input id="name" name="name" required="required" class="form" type="text" value={this.state.user.name} onChange={this.updateState.bind(this,'name')}/>
                            <br/>

                            <label htmlFor="lastName">Last Name</label>
                            <input id="lastName" name="lastName"  required="required" class="form" value={this.state.user.lastName} type="text"  onChange={this.updateState.bind(this,'lastName')}/>
                            <br/>

                            <label htmlFor="priceInit">Email</label>
                            <input id="email" name="email"  required="required" class="form" value={this.state.user.email} type="text" onChange={this.updateState.bind(this,'email')} />
                            <br/>

                            <label htmlFor="nickName">Nick Name</label>
                            <input id="nickName" name="nickName" required="required" className="form" value={this.state.user.nickName} type="text" onChange={this.updateState.bind(this, 'nickName')}/>
                            <br/>


                        </div>

                        <button type="submit" id="submit" name="submit" class="form-btn semibold"> Sing In</button>
                    </form>

                </div>

            </div>
        );
    }
}

export default Login;