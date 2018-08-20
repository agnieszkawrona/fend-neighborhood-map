import React, { Component } from 'react'
import './App.css'
// //import MapContainer from './MapContainer.js'
// //import ListView from './ListView.js'
// //import SearchBox from './SearchBox.js'

//source: https://github.com/elharony/Udacity-P8-Neighborhood-Map-Project-Explained/blob/master/src/App.js
function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

class App extends Component {

  state = {
  	query: ''
  }

  componentDidMount() {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBvRX8bGhgEL2wjzo15bHKO_mpRp3z2L3c&v=3&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.7413549, lng: -73.9980244},
      zoom: 13
    })
  }

  render() {
    return (
      <div className="App">

        <div className="container">

          <div className="side-panel">

            <div className="search-bar">
              <input type="text" placeholder="Start typing..." value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)}/>
            </div>

            <div className="list-view"></div>

          </div>

          <div className="map-container">
            <div id="map"></div>
          </div>

        </div>

      </div>
    )
  }
}



export default App

// import React, { Component } from 'react';
// import Map from 'react-js-google-maps';
//
// const setMarker = () => {
//   var uluru = { lat: -25.363, lng: 131.044 };
//   var marker = new window.google.maps.Marker({
//     position: uluru,
//     map: window.gmaps['map1'].gmap
//   });
// };
//
// /*
// May be Some react code here
// */
// class App extends Component {
//
//   onMapLoad() {
//     setMarker();
//   }
//
//   render() {
//     const mapOptions = {
//       zoom: 4,
//       center: { lat: -25.363, lng: 131.044 }
//     }
//     // You can make API calls to load your data into the map
//     // after the map is initialized
//
//     return (
//       <div>
//         <Map
//           id="map1"
//           apiKey="MY_API_KEY"
//           mapOptions={mapOptions}
//           style={{ width: '100%', height: 480 }}
//           onLoad={this.onMapLoad}
//         />
//       </div>
//     )
//   }
// }
// export default App

// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
//
// class App extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };
//
//   render() {
//     return (
//       <div className="map-container">
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "AIzaSyBvRX8bGhgEL2wjzo15bHKO_mpRp3z2L3c" }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <div className="map"
//             lat={59.955413}
//             lng={30.337844}
//             text={'Kreyser Avrora'}
//           />
//         </GoogleMapReact>
//       </div>
//     )
//   }
// }
//
// export default App;
