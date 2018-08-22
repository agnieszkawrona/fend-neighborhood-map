import React, { Component } from 'react'
import ReactDOM from 'react-dom'



class SidePanel extends Component {

  // function that activates the location marker, which name is passed
  activateLocation = (locationName) => {
    const { markers } = this.props
    markers.forEach(function (marker) {
      marker.title === locationName ? window.google.maps.event.trigger(marker, 'click') : ''
    })     
  }

  render() {

    const { query, searched, filteredPlaces } = this.props

    return (
      <div className="SidePanel">
        <div className="side-title">Best Cafes in Wroclaw</div>
        <div className="SearchBox">
          <input 
            type="text" 
            placeholder="Search cafes..." 
            value={query} 
            aria-label="Search cafes"
            role="search"
            onChange={(event) => searched(event.target.value)}
          />
        </div>
        <div className="ListView">
        <ul>
          {filteredPlaces.map((location, index) => (
            <li key={index}><button onClick={(event) => this.activateLocation(location.name)}>{location.name}</button></li>
          ))}
        </ul>
      </div>
      </div>
    )
  }
}

export default SidePanel