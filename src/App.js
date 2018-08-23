import React, { Component } from 'react'
import './App.css'
import MapContainer from './MapContainer.js'

class App extends Component {

  //https://reactjs.org/docs/error-boundaries.html

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="App">
        <MapContainer />
      </div>
    )

  }
}

export default App