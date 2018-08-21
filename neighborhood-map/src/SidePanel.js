import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ListView from './ListView.js'
import SearchBox from './SearchBox.js'

class SidePanel extends Component {

  render() {
    return (
      <div className="SidePanel">
        <div className="side-title">Best Cafes in Wroclaw</div>
        <SearchBox />
        <ListView />
      </div>
    )
  }
}

export default SidePanel