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
                birthdate: undefined
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        axios.post('/api/userCreate',this.state.user);
        console.log(this.state.user);
    }

    updateState = (name,event) => {
        let newUser = Object.assign({},this.state.user);
        newUser[name] = event.target.value;
        this.setState({user:newUser});
    };

    componentDidMount(){
        fetch('/api/userBy/'+ this.state.name)
            .then(response => response.json())
            .then(data => this.setState({user: data}));

    }

    render() {
        return (

            <div className="inner contact">

                <div className="contact-form">

                    <form onSubmit={this.handleSubmit}>

                        <div className="col-xs-6 wow animated slideInLeft" data-wow-delay=".5s">

                            <Trans i18nKey="auction.titleAuction"><label htmlFor="title">Name</label></Trans>
                            <input id="title" name="title" required="required" class="form" type="text" value={this.state.auction.title} onChange={this.updateState.bind(this,'title')}/>
                            <br/>

                            <Trans i18nKey ="auction.descriptionAuction"><label htmlFor="description">Last Name</label></Trans>
                            <input id="description" name="description"  required="required" class="form" value={this.state.auction.description} type="text"  onChange={this.updateState.bind(this,'description')}/>
                            <br/>

                            <Trans i18nKey = "auction.priceAuction"> <label htmlFor="priceInit">email</label></Trans>
                            <input id="priceInit" name="priceInit"  required="required" class="form" value={this.state.auction.priceInit} type="number" min="1" pattern="^[0-9]+" onChange={this.updateState.bind(this,'priceInit')} />
                            <br/>

                            <Trans i18nKey = "auction.url"><label htmlFor="picture">birthdate</label></Trans>
                            <input id="picture" name="picture" required="required" class="form" value={this.state.auction.picture} type="text" onChange={this.updateState.bind(this,'picture')} />
                            <br/>

                        </div>

                        <button type="submit" id="submit" name="submit" class="form-btn semibold"><Trans i18nKey="button.createAuction">Guardar</Trans></button>
                    </form>

                </div>

            </div>
        );
    }
}

export default Login;