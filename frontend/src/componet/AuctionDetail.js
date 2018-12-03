import * as React from 'react';
import './AuctionDetail.css'
import axios from 'axios';
import { translate, Trans } from 'react-i18next'
import {ControlLabel, Glyphicon, Panel} from "react-bootstrap";
import {Component} from "react";
import Profile from "../Profile/Profile";
import { BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';

class AuctionDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            auction: {},
            id: this.props.match.params.id,
            history: [],
            nickNameLogin: undefined,
            user: {},
            auth: this.props.auth
        };
    }

    componentDidMount() {
        if (localStorage.getItem("access_token") == null) {
            alert("Please log in to continue");
        }
        else
        {
            const {auth_token} = localStorage.getItem("access_token")
            let header_obj = {'Authorization': auth_token};

            fetch('/api/auctionBy/'+this.state.id,{headers:header_obj})
            .then(response => response.json())
            .then(data => this.setState({auction: data}));

            fetch('/api/auctionHistoryBy/'+this.state.id,{headers:header_obj})
            .then(response => response.json())
            .then(data => this.setState({history: data}));

            if(this.state.auth.isAuthenticated()){
                this.state.auth.getProfile((err,profile) => {

                    this.setState({nickNameLogin:profile.nickname});

                    fetch('/api/userBy/'+ profile.nickname.toString())
                        .then(response => response.json())
                        .then(data => this.setState({user: data}));

                })
            }
        }
    }

    makeABid(){
        if (localStorage.getItem("access_token") == null) {
            alert("Please log in to continue");
        }
        else {
            const {auth_token} = localStorage.getItem("access_token")
            let header_obj = {'Authorization': auth_token};

            axios.get('/api/auctionMakeABid/' + this.state.id + '/' + this.state.nickNameLogin, {headers: header_obj})
                .then(function (response) {
                    alert(response.data);
                    console.log(response.data);
                    window.location.reload();
                })
        }
    }

    render() {

        const {auction, id, history} = this.state;

        return(
            <div>
                <div class="container">
                    <h1 class="my-4">{this.state.auction.title}
                    </h1>
                    {console.log(this.state.nickNameLogin)}
                    <div class="row">

                        <div class="col-md-8">
                            <img class="img-fluid" src={this.state.auction.pictures} alt=""/>
                        </div>

                        <div class="col-md-4">
                            <h3 class="my-3"><Trans i18nKey ="auction.descriptionAuction"> </Trans> {': '}</h3>
                            <p>{this.state.auction.description}</p>

                            <h3 class="my-3"> <Trans i18nKey ="auction.detail"> </Trans></h3>
                            <ul>
                                <li> <Trans i18nKey = "auction.priceAuction"> </Trans> {': ' + this.state.auction.priceInit}</li>
                                <li> <Trans i18nKey = "auction.publicationDate"> </Trans> {': ' + this.state.auction.dateInitString}</li>
                                <li> <Trans i18nKey = "auction.finishDate"> </Trans> {': ' + this.state.auction.dateFinalString}</li>
                                <li> <Trans i18nKey = "auction.endingTime"> </Trans> {': ' + this.state.auction.hoursFinalString}</li>
                            </ul>
                            <button onClick={this.makeABid.bind(this)}
                                    className="btn btn-danger"> <Trans i18nKey = "button.makeOffer"> </Trans>
                            </button>

                            <h3 className="my-3"> <Trans i18nKey = "auctionHistory.title"> </Trans></h3>
                            <ul>
                                {history.map((step) =>
                                    <li>{'User: ' + step.userName + ' Step: ' + step.sectionNumber + ' Date: ' + step.dateString} </li>
                                )}
                            </ul>
                        </div>

                    </div>

                </div>

                <h3 class="my-4">Related Projects</h3>

                <div class="row">

                    <div class="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                            <img className="img-fluid-r" src="http://placehold.it/500x300" alt=""/>
                        </a>
                    </div>

                    <div class="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                            <img className="img-fluid-r" src="http://placehold.it/500x300" alt=""/>
                        </a>
                    </div>

                    <div class="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                            <img className="img-fluid-r" src="http://placehold.it/500x300" alt=""/>
                        </a>
                    </div>

                    <div class="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                            <img className="img-fluid-r" src="http://placehold.it/500x300" alt=""/>
                        </a>
                    </div>

                </div>

            </div>
        )
    }
}

//export default translate('common')(AuctionDetail);
export default AuctionDetail;
