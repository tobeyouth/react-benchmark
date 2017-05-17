import React from 'react'
import ReactDom from 'react-dom'
import PureText from './pure-text'

class PureComponentWrap extends React.PureComponent {

  render () {
    const number = this.props.number
    return (
      <div className='wrap'>
        {
          [...Array(number).keys()].map((index) => {
            return (
              <div key={`_c_${index}`}>
                <PureText text={ index } />
              </div>
            )
          })
        }
      </div>
    )
  }
  
}

export default PureComponentWrap