import React from 'react'

class PureText extends React.PureComponent {

  render () {
    return (
      <p>{ this.props.text }</p>
    )
  }

}

export default PureText