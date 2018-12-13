import React from "react";
import { Marker } from "react-google-maps";
// import CoffeeIcon from "";

export default class DoctorMarker extends React.Component {

    render() {
        return (
            <Marker
                options={{ icon: '../tea-cup.png' }}
                position={this.props.location}
            >
            </Marker>
        );
    }
}