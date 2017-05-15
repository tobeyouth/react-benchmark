import React, { Component } from 'react'
import Beta from './Beta'

class Alpha extends Component {

  render () {
    const { data, click } = this.props
    return (
      <div>
        <p>My name is { data.name }</p>
        <Beta click={ click } />
      </div>
    )
  }
}

export default Alpha