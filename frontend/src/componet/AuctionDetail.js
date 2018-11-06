import * as React from 'react';
import './AuctionDetail.css'
import {Trans} from "react-i18next";

class AuctionDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            auction: {},
            id: this.props.match.params.id
        };
    }

    componentDidMount() {

        fetch('/api/auctionBy/'+this.state.id)
            .then(response => response.json())
            .then(data => this.setState({auction: data}));

    }

    render() {

        return(
            <div>

                <div class="container">

                    <h1 class="my-4">{this.state.auction.title}
                    </h1>

                    <div class="row">

                        <div class="col-md-8">
                        <img class="img-fluid" src={this.state.auction.pictures} alt=""/>
                        </div>

                        <div class="col-md-4">
                            <h3 class="my-3">Auction Description</h3>
                            <p>{this.state.auction.description}</p>
                            <h3 class="my-3">Auction Details</h3>
                            <ul>
                                <li> Precio: {this.state.auction.priceInit}</li>
                                <li> Fecha de Publicación: {this.state.auction.dateInitString}</li>
                                <li> Fecha de Finalización: {this.state.auction.dateFinalString}</li>
                                <li> Hora de Finalización: {this.state.auction.hoursFinalString}</li>
                                {console.log(this.state.auction)}

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
export default AuctionDetail;
