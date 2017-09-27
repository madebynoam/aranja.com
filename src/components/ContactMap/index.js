import React, { Component } from 'react'
import ReactMap, { Layer, Feature } from 'react-mapbox-gl'
import { withDelayedMounting } from '../../hoc/withDelayedMounting'

const Map = ReactMap({
  accessToken:
    'pk.eyJ1IjoiZGFiYmkiLCJhIjoiY2o4MDd5cWN1NjNoaDMydDVpbWtrNGN0eCJ9.jG-cF-k6i_S4ETdw1oQHKQ',
  scrollZoom: false
})

class ContactMap extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Map
        center={{
          lat: 64.1426374,
          lng: -21.9057779
        }}
        zoom={[13]}
        style="mapbox://styles/mapbox/light-v9"
        containerStyle={{
          height: '60vh',
          width: '100vw'
        }}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[-21.9057779, 64.1426374]} />
        </Layer>
      </Map>
    )
  }
}

export default withDelayedMounting(ContactMap)
