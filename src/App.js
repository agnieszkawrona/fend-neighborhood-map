import React, { Component } from 'react'
import './App.css'
import MapContainer from './MapContainer.js'
import SidePanel from './SidePanel.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SidePanel />
        <MapContainer />
      </div>
    )
  }
}

export default App
