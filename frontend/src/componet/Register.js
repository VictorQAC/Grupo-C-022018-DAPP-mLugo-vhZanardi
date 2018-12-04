import * as React from "react";
import axios from "axios";
import {Trans, translate} from "react-i18next";
import {Redirect} from "react-router-dom";

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user:{
                name:undefined,
                lastName: undefined,
                email: undefined,
                nickName: this.props.nickNameLogin
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        axios.post('/api/userCreate',this.state.user)
            .then(function (response) {
                alert("Te registraste con exito!!!!");
                window.location.reload();
            });

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

                        <Trans i18nKey="register.title"><h3> </h3></Trans>

                        <div className="col-xs-6 wow animated slideInLeft" data-wow-delay=".5s">

                            <Trans i18nKey="register.name"><label htmlFor="name"> </label></Trans>
                            <input id="name" name="name" required="required" class="form" type="text" value={this.state.user.name} onChange={this.updateState.bind(this,'name')}/>
                            <br/>

                            <Trans i18nKey="register.lastName"><label htmlFor="lastName"> </label></Trans>
                            <input id="lastName" name="lastName"  required="required" class="form" value={this.state.user.lastName} type="text"  onChange={this.updateState.bind(this,'lastName')}/>
                            <br/>

                            <Trans i18nKey="register.email"><label htmlFor="email"> </label></Trans>
                            <input id="email" name="email"  required="required" class="form" value={this.state.user.email} type="text" onChange={this.updateState.bind(this,'email')} />
                            <br/>

                            <Trans i18nKey="register.nickName"><label htmlFor="nickName"> </label></Trans>
                            <input id="nickName" name="nickName" required="required" className="form" value={this.state.user.nickName} type="text" readonly="readonly"/>
                            <br/>


                        </div>

                        <button type="submit" id="submit" name="submit" class="form-btn semibold"><Trans i18nKey="register.button"> </Trans></button>
                    </form>

                </div>

            </div>
        );
    }
}

export default translate('common')(Register);
//export default Register;