import React from 'react'
import GoogleMapReact from 'google-map-react'
import marker from './marker.svg'

const customStyles = [
  { stylers: [{ hue: '#2c3e50' }, { saturation: 250 }] },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ lightness: 50 }, { visibility: 'simplified' }]
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: [{ visibility: 'off' }]
  }
]

const Marker = () => (
  <img src={marker} alt="We are located at Nóatún 17, 105 Reykjavík" style={{height: 40, width: 40, transformOrigin: 'center'}} />
)

export default class Map extends React.Component {
  render() {
    return (
      <div style={{ height: '40vh' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={{ styles: [...customStyles] }}
          bootstrapURLKeys={{key: 'AIzaSyBDDPW76s2PDSCZ49AeCenVyoVKfGY9TcM'}}
        >
          <Marker lng={this.props.center.lng} lat={this.props.center.lat}/>
        </GoogleMapReact>
      </div>
    )
  }
}

Map.defaultProps = {
  center: { lat: 64.1426374, lng: -21.9057779 },
  zoom: 14,
  styles: {
    hue: '#2c3e50'
  }
}
