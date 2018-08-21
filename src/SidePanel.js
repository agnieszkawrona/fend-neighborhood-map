import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import escapeRegExp from 'escape-string-regexp'


class SidePanel extends Component {

  state = {
    query: '',
    locations: [
      { name: "Central Cafe", location: { "lat": 51.1088921, "lng": 17.0259869 } },
      { name: "Cafe Borowka", location: { "lat": 51.10470549999999, "lng": 17.0313717 } },
      { name: "Bema Cafe", location: { "lat": 51.1180279, "lng": 17.0401954 } },
      { name: "Vinyl Cafe", location: { "lat": 51.1117183, "lng": 17.0326335 } },
      { name: "Cafe Rozrusznik", location: { "lat": 51.1167135, "lng": 17.031193 } }
    ]
  }

  updateQuery = (query) => {
  	this.setState({ query })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {

    const { query, locations } = this.state

    let searched
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      searched = locations.filter((loc) => match.test(loc.name))
    } else {
      searched = locations
    }

    return (
      <div className="SidePanel">
        <div className="side-title">Best Cafes in Wroclaw</div>
        <div className="SearchBox">
          <input 
            type="text" 
            placeholder="Search cafes..." 
            value={this.state.query} 
            aria-label="Search cafes"
            role="search"
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
        <div className="ListView">
        <ul>
          {searched.map((location, index) => (
            <li key={index}><button>{location.name}</button></li>
          ))}
        </ul>
      </div>
      </div>
    )
  }
}

export default SidePanel