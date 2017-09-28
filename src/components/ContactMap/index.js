import React from 'react'
import GoogleMapReact from 'google-map-react'

const GoogleMapConfig = {
  key: 'AIzaSyC-d2UO9JttS2zwLqvI1LFqjWRn5g8N57Q',
  libraries: 'places'
}
const AnyReactComponent = ({ text }) => (
  <div
    style={{
      position: 'relative',
      color: 'white',
      background: 'red',
      height: 40,
      width: 60,
      top: -20,
      left: -30
    }}
  >
    {text}
  </div>
)
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
