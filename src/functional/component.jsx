import React from 'react'
import ReactDom from 'react-dom'
import ComponentText from './component-text'

class ComponentWrap extends React.Component {

  render () {
    const number = this.props.number
    return (
      <div className='wrap'>
        {
          [...Array(number).keys()].map((index) => {
            return (
              <div key={`_c_${index}`}>
                <ComponentText text={ index } />
              </div>
            )
          })
        }
      </div>
    )
  }
  
}

export default ComponentWrap