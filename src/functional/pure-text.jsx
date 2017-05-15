import React from 'react'

class Text extends React.PureComponent {

  render () {
    return (
      <p>{ this.props.text }</p>
    )
  }

}

export default Text