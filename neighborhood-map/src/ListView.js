import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class ListView extends Component {

  state = {
    query: '',
    searched: [],
    locations: [
      { name: "Central Cafe", location: { "lat": 51.1088921, "lng": 17.0259869 } },
      { name: "Cafe Borowka", location: { "lat": 51.10470549999999, "lng": 17.0313717 } },
      { name: "Bema Cafe", location: { "lat": 51.1180279, "lng": 17.0401954 } },
      { name: "Vinyl Cafe", location: { "lat": 51.1117183, "lng": 17.0326335 } },
      { name: "Cafe Rozrusznik", location: { "lat": 51.1167135, "lng": 17.031193 } },
    ]
  }

  getLocations = () => {

  }

  render() {
    return (
      <div className="ListView">
        <ul>
          <li>Cafe Rozrusznik</li>
          <li>Central Cafe</li>
          <li>Cafe Borowka</li>
          <li>Bema Cafe</li>
          <li>Vinyl Cafe</li>
        </ul>
      </div>
    )
  }
}

export default ListView
