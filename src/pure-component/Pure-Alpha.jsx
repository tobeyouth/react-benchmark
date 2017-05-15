import React, { PureComponent } from 'react'
import PureBeta from './Pure-Beta'

class PureAlpha extends PureComponent {

  render () {
    const { data, click } = this.props
    return (
      <div>
        <p>My name is { data.name }</p>
        <PureBeta click={ click } />
      </div>
    )
  }
}

export default PureAlpha