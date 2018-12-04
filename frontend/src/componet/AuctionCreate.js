import * as React from 'react';
import axios from 'axios';
import Popup from "reactjs-popup";
import { translate, Trans } from 'react-i18next'
import './AuctionCreate.css';

class AuctionCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            auction:{
                title:undefined,
                description: undefined,
                priceInit: undefined,
                picture: undefined,
                dateInit: undefined,
                dateFinal: undefined,
                hoursFinal: undefined,
                nickName: undefined
            },
            auth: this.props.auth
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){

        if (localStorage.getItem("access_token") == null) {
            alert("Please log in to continue");
        } else {

            if (this.state.auth.isAuthenticated()) {
                this.state.auth.getProfile((err, profile) => {

                    this.setState({
                        auction: {
                            title: undefined,
                            description: undefined,
                            priceInit: undefined,
                            picture: undefined,
                            dateInit: undefined,
                            dateFinal: undefined,
                            hoursFinal: undefined,
                            nickName: profile.nickname
                        }
                    });
                    console.log(this.state);
                })
            }
        }
    }

    handleSubmit(event){

        if (localStorage.getItem("access_token") == null) {
            alert("Please log in to continue");
        } else {
            event.preventDefault();
            const {auth_token} = localStorage.getItem("access_token")
            let header_obj = {'Authorization': auth_token};
            axios.post('api/auctionCreate', this.state.auction, {headers: header_obj})
                .then(function (response) {
                    alert("Subasta creada");
                    window.location.reload();
                });
        }
    }

    updateState = (name,event) => {
        let newAuction = Object.assign({},this.state.auction);
        newAuction[name] = event.target.value;
        this.setState({auction:newAuction});
    };

    render() {
        return (

            <div className="inner contact">

                <div className="contact-form">

                <form onSubmit={this.handleSubmit}>

                    <div className="col-xs-6 wow animated slideInLeft" data-wow-delay=".5s">

                        <Trans i18nKey="auction.titleAuction"><label htmlFor="title">Title</label></Trans>
                        <input id="title" name="title" required="required" class="form" type="text" value={this.state.auction.title} onChange={this.updateState.bind(this,'title')}/>
                        <br/>

                        <Trans i18nKey ="auction.descriptionAuction"><label htmlFor="description">Description</label></Trans>
                        <input id="description" name="description"  required="required" class="form" value={this.state.auction.description} type="text"  onChange={this.updateState.bind(this,'description')}/>
                        <br/>

                        <Trans i18nKey = "auction.priceAuction"> <label htmlFor="priceInit">Price Init</label></Trans>
                        <input id="priceInit" name="priceInit"  required="required" class="form" value={this.state.auction.priceInit} type="number" min="1" pattern="^[0-9]+" onChange={this.updateState.bind(this,'priceInit')} />
                        <br/>

                        <Trans i18nKey = "auction.url"><label htmlFor="picture">Photo Url</label></Trans>
                        <input id="picture" name="picture" required="required" class="form" value={this.state.auction.picture} type="text" onChange={this.updateState.bind(this,'picture')} />
                        <br/>

                        <Trans i18nKey = "auction.publicationDate"><label htmlFor="dateInit">Publication Date</label></Trans>
                        <input id="dateInit" name="dateInit" required="required" class="form" value={this.state.auction.dateInit} type="date" onChange={this.updateState.bind(this,'dateInit')} />
                        <br/>

                        <Trans i18nKey = "auction.finishDate"><label htmlFor="dateFinal">Finish Date</label></Trans>
                        <input id="dateFinal" name="dateFinal" required="required" class="form" value={this.state.auction.dateFinal} type="date" onChange={this.updateState.bind(this,'dateFinal')} />
                        <br/>

                        <Trans i18nKey = "auction.endingTime"><label htmlFor="hoursFinal">Finish Date</label></Trans>
                        <input id="hoursFinal" name="hoursFinal" required="required" class="form" value={this.state.auction.hoursFinal} type="time" onChange={this.updateState.bind(this,'hoursFinal')} />
                        <br/>

                        <Trans i18nKey ="auction.owner"><label htmlFor="nickName">Description</label></Trans>
                        <input id="nickName" name="nickName"  required="required" class="form" value={this.state.auction.nickName} type="text" readonly="readonly"/>
                        <br/>

                    </div>

                    <button type="submit" id="submit" name="submit" class="form-btn semibold"><Trans i18nKey="button.createAuction">Create Auction</Trans></button>
                </form>

                </div>

            </div>
        );
    }
}

export default translate('common')(AuctionCreate);
//export default AuctionCreate;
