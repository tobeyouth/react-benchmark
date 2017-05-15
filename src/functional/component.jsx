import React from 'react'
import ReactDom from 'react-dom'
import Text from './component-text'

class Wrap extends React.Component {

  render () {
    const number = this.props.number
    return (
      <div>
        {
          [...Array(number).keys()].map((index) => {
            return (
              <div key={`_c_${index}`}>
                <Text text={ index } />
              </div>
            )
          })
        }
      </div>
    )
  }
  
}


if (!window.benchmark) {
  window.benchmark = {}
}

window.benchmark.component = function (number) {
  ReactDom.render(
    <Wrap number={ number } />
  , document.getElementById('component'))
}
