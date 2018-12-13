import React, { Component } from 'react';
import MapComponent from './MapComponent';

class MapContainerComponent extends Component {
    state = { 
        marcadores: [
            { uid: 'uno', lat: 19.418002, lon: -99.160953}
        ]
    }

    /* componentDidMount() {
        app.hacerPeticion( (err, res) => {
            this.setState(
                marcadores: res.data.houses; // Con esto jalamos el arreglo de casas que queremos mostrar, por ejemplo...
            );
        })
    } */

    render() { 
        return ( 
            <MapComponent
                marcadores={this.state.marcadores}
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCtjG2aEKf7NNiRrbjaK-mnIm2c4zOQv2E&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }
}
 
export default MapContainerComponent;