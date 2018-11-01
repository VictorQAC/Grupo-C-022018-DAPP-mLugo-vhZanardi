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
                dateInit: undefined
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3000/api/auctionCreate',this.state.auction);
        console.log(this.state.auction);
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
                        <input id="priceInit" name="priceInit"  required="required" class="form" value={this.state.auction.priceInit} type="number" onChange={this.updateState.bind(this,'priceInit')} />
                        <br/>

                        <Trans i18nKey = "auction.url"><label htmlFor="picture">Photo Url</label></Trans>
                        <input id="picture" name="picture" required="required" class="form" value={this.state.auction.picture} type="text" onChange={this.updateState.bind(this,'picture')} />
                        <br/>

                        <Trans i18nKey = "auction.publicationDate"><label htmlFor="dateInit">Publication date</label></Trans>
                        <input id="dateInit" name="dateInit" required="required" class="form" value={this.state.auction.dateInit} type="date" onChange={this.updateState.bind(this,'dateInit')} />
                        <br/>

                    </div>

                    <button type="submit" id="submit" name="submit" class="form-btn semibold"><Trans i18nKey='button.createAuction'>Create Auction</Trans></button>
                </form>

                </div>

            </div>
        );
    }
}

export default translate('common')(AuctionCreate);
//export default AuctionCreate;
