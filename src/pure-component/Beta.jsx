import React, { Component } from 'react'

class Beta extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextProps', nextProps)
    console.log('props', this.props)
    console.log(this.props.click === nextProps.click)

    return true
  }

  render () {

    console.log('render Beta');
    
    return (
      <div>
        <button onClick={ this.props.click }>
          change
        </button>
      </div>
    )
  }

}

export default Beta