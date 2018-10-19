import React, {PropTypes, Component} from 'react';
import { GoogleMap, Marker, SearchBox } from "react-google-maps";
import shouldPureComponentUpdate from 'react-pure-render/function';

const greatPlaceStyle = {
    // initially any map object has left top corner at lat lng coordinates
    // it's on you to set object origin to 0,0 coordinates
    position: 'absolute',
    width: 512,
    height: 512,
    left: 512 / 2,
    top: 512 / 2,

    border: '5px solid #f44336',
    borderRadius: 512,
    backgroundColor: 'white',
    textAlign: 'center',
    color: '#3f51b5',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 4
};

class Map extends Component {
    static defaultProps = {
        center: {lat: 59.938043, lng: 30.337157},
        zoom: 1,
        greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
    };

    shouldComponentUpdate = shouldPureComponentUpdate;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GoogleMap>

                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}>

                <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} />
                <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} />

            </GoogleMap>
        );
    }
}

class MyGreatPlace extends Component {
    /*static propTypes = {
        text: PropTypes.string
    };*/

    static defaultProps = {};

    shouldComponentUpdate = shouldPureComponentUpdate;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={greatPlaceStyle}>
                {this.props.text}
            </div>
        );
    }
}
export default Map;