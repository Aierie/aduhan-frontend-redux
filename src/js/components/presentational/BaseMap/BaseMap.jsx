import React, { Component } from "react";
import ReactMapGL from "react-map-gl";


class BaseMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width:100,
        height:100,
        latitude: 37.773,
        longitude: -122.481,
        zoom: 15.5,
        bearing: 0,
        pitch: 0
      }
    };
  }

  render() {
    const { viewport } = this.state;

    return (
      //Note the difference - width="100%" and height="100%" seem to mess up display of viewport.
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={(viewport) => this.setState(viewport)}
        mapboxApiAccessToken=""
        mapStyle="mapbox://styles/aierie/cjufjpltd13e71fmuo6063u8q"
      />
    );
  }
}

export default BaseMap;