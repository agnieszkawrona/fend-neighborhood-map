import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//source: https://github.com/elharony/Udacity-P8-Neighborhood-Map-Project-Explained/blob/master/src/App.js
function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

class MapContainer extends Component {

  state = {
    query: '',
    locations: [
      { name: "Central Cafe", location: { "lat": 51.1088921, "lng": 17.0259869 } },
      { name: "Cafe Borowka", location: { "lat": 51.10470549999999, "lng": 17.0313717 } },
      { name: "Bema Cafe", location: { "lat": 51.1180279, "lng": 17.0401954 } },
      { name: "Vinyl Cafe", location: { "lat": 51.1117183, "lng": 17.0326335 } },
      { name: "Cafe Rozrusznik", location: { "lat": 51.1167135, "lng": 17.031193 } },
    ],
    markers: [],
  }

  componentDidMount() {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBvRX8bGhgEL2wjzo15bHKO_mpRp3z2L3c&v=3&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {
    const { locations, markers } = this.state
    const { google } = this.props
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: { "lat": 51.1078852, "lng": 17.0385376 },
      zoom: 14
    })

    var infoWindow = new window.google.maps.InfoWindow()

    this.state.locations.forEach((location, i) => {
      
      var locationInfo = `${this.state.locations[i].name}`
      
      var marker = new window.google.maps.Marker({
        position: this.state.locations[i].location,
        map: map,
      })

      markers.push(marker);

      marker.addListener('click', function() {
        infoWindow.setContent(locationInfo)
        infoWindow.open(map, marker)
      })

    })
  }

  render() {
    return (
      <div className="MapContainer">
        <div id="map"></div>
      </div>
    )
  }

}

export default MapContainer