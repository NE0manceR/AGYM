import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import style from '../styles/modules/map.module.scss'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 49.835886352304286,
      lng: 24.038936609499437
    },
    zoom: 20
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className={style.map_google}>
        <GoogleMapReact
        isMarkerShown={false}
          bootstrapURLKeys={{ key: 'AIzaSyATAny8D-T9GOmSW-LDXJNkhiUO8PEsYo8'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={49.835886352304286}
            lng={24.038936609499437}
            text={<div className={style.dot}></div>}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;