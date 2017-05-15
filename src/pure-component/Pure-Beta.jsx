import React, { PureComponent } from 'react'

class PureBeta extends PureComponent {

  render () {

    console.log('render PureBeta');
    
    return (
      <div>
        <button onClick={ this.props.click }>
          change
        </button>
      </div>
    )
  }

}

export default PureBeta