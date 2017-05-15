import React from 'react'
import ReactDom from 'react-dom'
import Text from './pure-text'

class Wrap extends React.PureComponent {

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

window.benchmark.pure = function (number) {
  ReactDom.render(
    <Wrap number={ number } />
  , document.getElementById('pure'))
}
