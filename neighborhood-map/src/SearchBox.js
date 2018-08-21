import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class SearchBox extends Component {

  state = {
  	query: '',
    searched: []
  }

  updateQuery = (query) => {
  	this.setState({ query })
  }

  render() {
    return (
      <div className="SearchBox">
        <input type="text" placeholder="Start typing..." value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)}/>
      </div>
    )
  }
}

export default SearchBox