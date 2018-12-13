/* import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class MapComponent extends Component {
    state = {  }
    render() {
        return (
            withScriptjs(        
                withGoogleMap(()=>        
                    <GoogleMap
                        defaultZoom={8}
                        defaultCenter={{ lat: -34.397, lng: 150.644 }}
                    >
                        {this.props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
                    </GoogleMap>,
                )
            )
        )

    }
}

export default MapComponent;  */

// DoctorsMap.js

import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MarkerComponent from './MarkerComponent';

const MapComponent = withScriptjs(withGoogleMap((props) => {

    const markers = props.marcadores.map(marcador => 
        <MarkerComponent
            key={marcador.uid}
            location={{ lat: marcador.lat, lng: marcador.lon }}
        />
    );

    return (
        <GoogleMap
            defaultZoom={14}
            center={{ lat: 42.3601, lng: -71.0589 }}
        >
            { markers }
        </GoogleMap>
    );
}
))

export default MapComponent;