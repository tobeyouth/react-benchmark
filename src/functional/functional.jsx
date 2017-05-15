import React from 'react'
import ReactDom from 'react-dom'
import Text from './functional-text'

class Wrap extends React.Component {

  render () {
    const number = this.props.number
    return (
      <div>
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


if (!window.benchmark) {
  window.benchmark = {}
}

window.benchmark.functional = function (number) {
  ReactDom.render(
    <Wrap number={ number } />
  , document.getElementById('functional'))
}
