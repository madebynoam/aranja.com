import React from 'react'
import GoogleMapReact from 'google-map-react'
import marker from './marker.svg'

const customStyles = [
  {
    stylers: [
      {
        hue: '#006ad4'
      },
      {
        saturation: 89
      }
    ]
  },
  {
    featureType: 'water',
    stylers: [
      {
        color: '#ffffff'
      }
    ]
  },
  {
    featureType: 'poi',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  }
]


const Marker = () => (
  <img src={marker} alt="We are located at Nóatún 17, 105 Reykjavík" style={{height: 40, width: 40, transformOrigin: 'center', userSelect: 'none'}} />
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
  center: { lat: 64.142457, lng: -21.902887 },
  zoom: 14,
  styles: {
    hue: '#2c3e50'
  }
}
