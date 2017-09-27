import React from 'react'
import { withDelayedMounting } from '../../hoc/withDelayedMounting'

let Map = null

// Doing everything in our power to defer Mapbox from SSR since it does not play nicely.

export default withDelayedMounting(props => {
  const { default: ReactMap, Layer, Feature } = require('react-mapbox-gl')
  if (!Map) {
    Map = ReactMap({
      accessToken:
        'pk.eyJ1IjoiZGFiYmkiLCJhIjoiY2o4MDd5cWN1NjNoaDMydDVpbWtrNGN0eCJ9.jG-cF-k6i_S4ETdw1oQHKQ',
      scrollZoom: false
    })
  }

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
})
