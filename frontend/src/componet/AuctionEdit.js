import * as React from 'react';
import axios from "axios/index";
import Popup from "reactjs-popup";
import {Trans} from "react-i18next";

class AuctionEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            auction: {},
            id: this.props.id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const {auth_token} = localStorage.getItem("access_token")
        let header_obj = {'Authorization': auth_token};
        fetch('/api/auctionBy/'+this.state.id,{headers:header_obj})
            .then(response => response.json())
            .then(data => this.setState({auction: data}));

    }

    updateState = (name,event) => {
        let newAuction = Object.assign({},this.state.auction);
        newAuction[name] = event.target.value;
        this.setState({auction:newAuction});
    };

    handleSubmit(event){
        const {auth_token} = localStorage.getItem("access_token")
        let header_obj = {'Authorization': auth_token};
        event.preventDefault();
        axios.post('/api/auctionUpdate/'+this.state.id,this.state.auction,{headers:header_obj});
    }

    render() {

        return (
            <Popup trigger={<button className="btn btn-primary"><Trans i18nKey="button.editAuction">Edit</Trans> </button>} position="right center">

                <form onSubmit={this.handleSubmit}>

                    <Trans i18nKey="auction.titleAuction"><label htmlFor="title">Title</label></Trans>
                    <input id="title" name="title" type="text" value={this.state.auction.title} onChange={this.updateState.bind(this,'title')}/>

                    <Trans i18nKey ="auction.descriptionAuction"><label htmlFor="description">Description</label></Trans>
                    <input id="description" name="description" value={this.state.auction.description} type="text"  onChange={this.updateState.bind(this,'description')}/>

                    <Trans i18nKey = "auction.priceAuction"> <label htmlFor="priceInit">Price Init</label></Trans>
                    <input id="priceInit" name="priceInit" value={this.state.auction.priceInit} type="number" min="1" pattern="^[0-9]+" onChange={this.updateState.bind(this,'priceInit')} />

                    <Trans i18nKey = "auction.url"> <label htmlFor="picture">Photo Url</label></Trans>
                    <input id="picture" name="picture" value={this.state.auction.pictures} type="text" onChange={this.updateState.bind(this,'picture')} />

                    <Trans i18nKey = "auction.publicationDate"><label htmlFor="dateInit">Publication Date</label></Trans>
                    <input id="dateInit" name="dateInit" value={this.state.auction.dateInitString} type="date" onChange={this.updateState.bind(this,'dateInit')} />
                    <br/>

                    <Trans i18nKey = "auction.finishDate"><label htmlFor="dateFinal">Finish Date</label></Trans>
                    <input id="dateFinal" name="dateFinal" value={this.state.auction.dateFinalString} type="date" onChange={this.updateState.bind(this,'dateFinal')} />
                    <br/>

                    <Trans i18nKey = "auction.endingTime"><label htmlFor="hoursFinal">Finish Date</label></Trans>
                    <input id="hoursFinal" name="hoursFinal" value={this.state.auction.hoursFinalString} type="time" onChange={this.updateState.bind(this,'hoursFinal')} />
                    <br/>


                    <button><Trans i18nKey='button.edit'>Edit Auction</Trans></button>

                </form>

            </Popup>
        );
    }
}
export default AuctionEdit;