import React from 'react'
import ReactDom from 'react-dom'
import Text from './functional-text'


class FunctionalWrap extends React.Component {

  render () {
    const number = this.props.number
    return (
      <div className='wrap'>
        {
          [...Array(number).keys()].map((index) => {
            return (
              <div key={`_f_${index}`}>
                { Text(index) }
              </div>
            )
          })
        }
      </div>
    )
  }
  
}

export default FunctionalWrap
