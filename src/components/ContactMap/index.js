import React from 'react'
import GoogleMapReact from 'google-map-react'

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

export default class Map extends React.Component {
  render() {
    return (
      <div style={{ height: '40vh' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={{ styles: [...customStyles] }}
          bootstrapURLKeys={{key: 'AIzaSyC-d2UO9JttS2zwLqvI1LFqjWRn5g8N57Q'}}
        />
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
